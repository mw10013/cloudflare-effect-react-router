import type { AppLoadContext } from 'react-router'
import { Effect, ManagedRuntime, Predicate } from 'effect'
import * as Hono from 'hono'
import { Stripe } from '~/lib/Stripe'

type AppEnv = {
  Bindings: Env
  Variables: {
    runtime: AppLoadContext['runtime']
  }
}

export const handler =
  <A, E>(
    h: (
      ...args: Parameters<Hono.Handler<AppEnv>>
    ) => Effect.Effect<A | Promise<A>, E, ManagedRuntime.ManagedRuntime.Context<Parameters<Hono.Handler<AppEnv>>[0]['var']['runtime']>>
  ) =>
  (...args: Parameters<Hono.Handler<AppEnv>>) =>
    h(...args).pipe(
      Effect.flatMap((response) => (Predicate.isPromise(response) ? Effect.tryPromise(() => response) : Effect.succeed(response))),
      args[0].var.runtime.runPromise
    )

export function make({ runtime }: { runtime: AppEnv['Variables']['runtime'] }) {
  const app = new Hono.Hono<AppEnv>()
  app.use(async (c, next) => {
    c.set('runtime', runtime)
    await next()
  })

  app.get(
    '/api/stripe/checkout',
    handler((c) =>
      Effect.gen(function* () {
        const sessionId = c.req.query('sessionId')
        if (!sessionId) return c.redirect('/pricing')
        yield* Stripe.finalizeCheckoutSession(sessionId)
        return c.redirect('/app/billing')
      })
    )
  )
  app.post(
    '/api/stripe/webhook',
    handler((c) => Stripe.handleWebhook(c.req.raw))
  )
  return app
}
