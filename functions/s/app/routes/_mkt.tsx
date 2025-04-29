import type { Route } from './+types/_mkt'
import { Effect } from 'effect'
import { Outlet } from 'react-router'
import * as ReactRouter from '~/lib/ReactRouter'

export const loader = ReactRouter.routeEffect(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    yield* Effect.log('_mkt loader')
    const alc = context.get(ReactRouter.appLoadContext)

    return { message: `ENVIRONMENT: ${alc.cloudflare.env.ENVIRONMENT}` }
  })
)

export default function RouteComponent({}: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh flex-row justify-center gap-2 p-6">
      Mkt
      <Outlet />
    </div>
  )
}
