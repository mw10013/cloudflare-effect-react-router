import type { Route } from './+types/_mkt._index'
import { Effect } from 'effect'
import * as ReactRouter from '~/lib/ReactRouter'

export const loader = ReactRouter.routeEffect(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    yield* Effect.log('_mkt._index loader')
    const alc = context.get(ReactRouter.appLoadContext)

    return { message: `ENVIRONMENT: ${alc.cloudflare.env.ENVIRONMENT}` }
  })
)

export default function RouteComponent({}: Route.ComponentProps) {
  return <div className="p-6">Mkt Index</div>
}
