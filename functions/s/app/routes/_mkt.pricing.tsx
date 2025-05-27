import type { Route } from './+types/_mkt.pricing'
import { SchemaEx } from '@workspace/shared'
import { Effect, Schema } from 'effect'
import { redirect } from 'react-router'
import { Button } from '@workspace/ui/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@workspace/ui/components/ui/card' // Import Card components
import * as ReactRouter from '~/lib/ReactRouter'
import { Stripe } from '~/lib/Stripe'

export const loader = ReactRouter.routeEffect(() => Stripe.getPrices().pipe(Effect.map((prices) => ({ prices }))))

export const action = ReactRouter.routeEffect(({ request, context }: Route.ActionArgs) =>
  Effect.gen(function* () {
    const sessionUser = context.get(ReactRouter.appLoadContext).session.get('sessionUser')
    if (!sessionUser) {
      return redirect('/authenticate')
    }
    if (sessionUser.userType !== 'customer') {
      return yield* Effect.fail(new Error('Only customers may subscribe.'))
    }

    const FormDataSchema = Schema.Struct({
      priceId: Schema.NonEmptyString.annotations({ identifier: 'Price ID' })
    })
    const priceId = yield* SchemaEx.decodeRequestFormData({ request, schema: FormDataSchema }).pipe(
      Effect.map((formData) => formData.priceId)
    )
    const { stripeCustomerId, stripeSubscriptionId } = yield* Stripe.ensureStripeCustomerId({
      userId: sessionUser.userId,
      email: sessionUser.email
    })
    const { origin } = new URL(request.url)
    return yield* stripeSubscriptionId
      ? Stripe.createBillingPortalSession({
          customer: stripeCustomerId,
          return_url: `${origin}/app/billing`
        }).pipe(Effect.map((session) => redirect(session.url)))
      : Stripe.createCheckoutSession({
          customer: stripeCustomerId,
          success_url: `${origin}/api/stripe/checkout?sessionId={CHECKOUT_SESSION_ID}`,
          cancel_url: `${origin}/pricing`,
          client_reference_id: sessionUser.userId.toString(),
          price: priceId
        }).pipe(
          Effect.flatMap((session) =>
            typeof session.url === 'string' ? Effect.succeed(redirect(session.url)) : Effect.fail(new Error('Missing session url'))
          )
        )
  })
)

export default function RouteComponent({ loaderData: { prices } }: Route.ComponentProps) {
  return (
    <div className="p-6">
      <div className="mx-auto grid max-w-xl gap-8 md:grid-cols-2">
        {prices.map((price) => {
          if (!price.unit_amount) return null
          return (
            <Card key={price.id}>
              <CardHeader>
                <CardTitle className="capitalize">{price.lookup_key}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">${price.unit_amount / 100}</p>
              </CardContent>
              <CardFooter className="justify-end">
                {/* TODO: Implement form submission logic if needed */}
                <form action="/pricing" method="post">
                  <input type="hidden" name="priceId" value={price.id} />
                  <Button type="submit">Get Started</Button>
                </form>
              </CardFooter>
            </Card>
          )
        })}
      </div>
      <pre className="mt-8">{JSON.stringify(prices, null, 2)}</pre>
    </div>
  )
}
