import { Cloudflare } from '@workspace/shared'
import { DurableObject } from 'cloudflare:workers'
import { Config, Effect, Layer, ManagedRuntime } from 'effect'
import { Stripe } from './Stripe'

const makeRuntime = (env: Env) => {
  return Layer.mergeAll(Stripe.Default).pipe(Cloudflare.provideLoggerAndConfig(env), ManagedRuntime.make)
}

export class StripeDurableObject extends DurableObject<Env> {
  storage: DurableObjectStorage
  sql: SqlStorage
  runtime: ReturnType<typeof makeRuntime>

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env)
    this.storage = ctx.storage
    this.sql = ctx.storage.sql
    this.runtime = makeRuntime(env)

    this.sql.exec(`create table if not exists events(
			customerId text primary key,
			count integer not null default 1,
			createdAt integer default (unixepoch()));
			create index if not exists idxEventsCreatedAt on events(createdAt);`)
  }

  async handleEvent(customerId: string) {
    await Effect.gen(this, function* () {
      const alarm = yield* Effect.tryPromise(() => this.storage.getAlarm())
      if (alarm === null) {
        const STRIPE_SYNC_INTERVAL_SEC = yield* Config.integer('STRIPE_SYNC_INTERVAL_SEC')
        yield* Effect.tryPromise(() => this.storage.setAlarm(Date.now() + 1000 * STRIPE_SYNC_INTERVAL_SEC))
      }
      const { count } = this.sql
        .exec<{
          count: number
        }>(
          `insert into events (customerId) values (?) on conflict (customerId) do update set count = count + 1 returning count`,
          customerId
        )
        .one()
      yield* Effect.log(`StripeDurableObject: handleEvent: customerId: ${customerId} count: ${count}`)
    }).pipe(this.runtime.runPromise)
  }

  async alarm() {
    await Effect.gen(this, function* () {
      const STRIPE_SYNC_BATCH_SIZE = yield* Config.integer('STRIPE_SYNC_BATCH_SIZE')
      const events = this.sql
        .exec<{ customerId: string; count: number }>(`select * from events order by createdAt asc limit ?`, STRIPE_SYNC_BATCH_SIZE + 1)
        .toArray()
      yield* Effect.log(
        `StripeDurableObject: alarm: eventCount: ${events.length} STRIPE_SYNC_BATCH_SIZE: ${STRIPE_SYNC_BATCH_SIZE}`,
        events
      )
      if (events.length > STRIPE_SYNC_BATCH_SIZE) {
        const STRIPE_SYNC_INTERVAL_SEC = yield* Config.integer('STRIPE_SYNC_INTERVAL_SEC')
        yield* Effect.tryPromise(() => this.storage.setAlarm(Date.now() + 1000 * STRIPE_SYNC_INTERVAL_SEC))
      }
      const effects = events.slice(0, STRIPE_SYNC_BATCH_SIZE).map(({ customerId, count }) =>
        Effect.gen(this, function* () {
          yield* Stripe.syncStripeData(customerId)
          yield* Effect.try(() => this.sql.exec(`delete from events where customerId = ?1 and count = ?2`, customerId, count))
          yield* Effect.log(`StripeDurableObject: alarm: syncStripeData customerId: ${customerId} count: ${count}`)
        })
      )
      yield* Effect.all(effects, { concurrency: 5 })
    }).pipe(this.runtime.runPromise)
  }
}
