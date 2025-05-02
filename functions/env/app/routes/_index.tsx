import type { Route } from './+types/_index'
// import { EnvEx } from '@workspace/shared'
import { env } from 'cloudflare:workers'
import { Effect } from 'effect' // Bring Effect back directly

// import * as ReactRouter from '~/ReactRouter'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'env' }, { name: 'description', content: 'Welcome' }]
}

/*
// Original Effect loader using ReactRouter.ts
export const loader = ReactRouter.routeEffect(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    yield* Effect.log('loader')
    const alc = context.get(ReactRouter.appLoadContext)
    // return { env, e: EnvEx.e(), alc: alc.cloudflare.env }
    return { env, alc: alc.cloudflare.env }
  })
)
*/

// Loader using Effect directly, without ReactRouter.ts helpers
export const loader = (_: Route.LoaderArgs) => {
  const effect = Effect.gen(function* () {
    yield* Effect.log('loader')
    // Access env directly
    return { env }
  })

  // Manually run the Effect to get a Promise for the loader
  return Effect.runPromise(effect)
}

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="p-6">
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  )
}
