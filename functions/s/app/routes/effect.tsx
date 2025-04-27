import type { Route } from './+types/effect'
import { Effect } from 'effect'
import { appLoadContext, routeEffect } from '~/lib/ReactRouter'

export const loader = routeEffect(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    yield* Effect.log('loader')
    const alc = context.get(appLoadContext)

    return { message: `ENVIRONMENT: ${alc.cloudflare.env.ENVIRONMENT}` }
  })
)

export default function RouteComponent(props: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh flex-row justify-center gap-2 p-6">
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
