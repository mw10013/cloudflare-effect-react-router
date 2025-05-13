import type { Route } from './+types/admin.customers'
import { SchemaEx } from '@workspace/shared'
import { Effect, Schema } from 'effect'
import { IdentityMgr } from '~/lib/IdentityMgr'
import * as ReactRouter from '~/lib/ReactRouter'
import { Stripe } from '~/lib/Stripe'

export const loader = ReactRouter.routeEffect(() =>
  Effect.gen(function* () {
    return { message: 'loader', customers: yield* IdentityMgr.getCustomers() }
  })
)

const FormDataSchema = Schema.Union(
  Schema.Struct({
    intent: Schema.Literal('seed')
  }),
  Schema.Struct({
    intent: Schema.Literal('sync_stripe_data', 'customer_subscription'),
    customerId: Schema.NonEmptyString
  })
)

export const action = ReactRouter.routeEffect(
  (
    { request }: Route.ActionArgs // : Effect.Effect<
  ) =>
    // Explicitly define A to prevent ts(2742) from inferred non-portable types.
    //   {
    //     formData?: Schema.Schema.Type<typeof FormDataSchema>
    //     validationErrors?: SchemaEx.ValidationErrors
    //   },
    //   UnknownException
    // >
    Effect.gen(function* () {
      const formData = yield* SchemaEx.decodeRequestFormData({ request, schema: FormDataSchema })
      let message: string | undefined
      if (formData.intent === 'seed') {
        yield* Stripe.seed()
        message = 'Seeded'
      }
      return {
        message,
        formData
      }
    }).pipe(SchemaEx.catchValidationError)
)

export default function RouteComponent({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh flex-col gap-2 p-6">
      {/* <Rac.Form method="post" validationErrors={actionData?.validationErrors} className="grid w-full max-w-sm gap-6">
        <Oui.Button name="intent" value="seed" type="submit">
          Seed
        </Oui.Button>
      </Rac.Form> */}
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
      <pre>{JSON.stringify(actionData, null, 2)}</pre>
    </div>
  )
}
