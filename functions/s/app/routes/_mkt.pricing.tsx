import type { Route } from './+types/_mkt.pricing'
import { Effect } from 'effect'
import * as ReactRouter from '~/lib/ReactRouter'
import { Stripe } from '~/lib/Stripe'

export const loader = ReactRouter.routeEffect(() => Stripe.getPrices().pipe(Effect.map((prices) => ({ prices }))))

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="p-6">
      Pricing
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  )
}
