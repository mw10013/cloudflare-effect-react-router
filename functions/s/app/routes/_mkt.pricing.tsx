import type { Route } from './+types/_mkt.pricing'
import { Effect } from 'effect'
import { Button } from '~/components/ui/button' // Import Button
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card' // Import Card components
import * as ReactRouter from '~/lib/ReactRouter'
import { Stripe } from '~/lib/Stripe'

export const loader = ReactRouter.routeEffect(() => Stripe.getPrices().pipe(Effect.map((prices) => ({ prices }))))

export default function RouteComponent({ loaderData: { prices } }: Route.ComponentProps) {
  return (
    <div className="p-6">
      <div className="mx-auto grid max-w-xl gap-8 md:grid-cols-2">
        {prices.map((price) => {
          if (!price.unit_amount) return null
          // Simple capitalization helper
          const capitalize = (s: string | null) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : '')
          return (
            <Card key={price.id}>
              <CardHeader>
                <CardTitle className="capitalize">{capitalize(price.lookup_key)}</CardTitle>
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
