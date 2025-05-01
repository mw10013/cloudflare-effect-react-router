import type { Route } from './+types/_index'
import { EnvEx } from '@workspace/shared'
import { env } from 'cloudflare:workers'
import { Effect } from 'effect'
import { routeEffect } from '~/ReactRouter'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'env' }, { name: 'description', content: 'Welcome' }]
}

export const loader = routeEffect(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    yield* Effect.log('loader')
    // const alc = context.get(ReactRouter.appLoadContext)
    // yield* Effect.log({ message: '_mkt loader', sessionUser: alc.session.get('sessionUser') })
    // return { sessionUser: alc.session.get('sessionUser') }
    return { env, e: EnvEx.e() }
  })
)

// export const loader = routeEffect(({ context }: Route.LoaderArgs) => {
//   return { env, e: EnvEx.e() }
// })

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="p-6">
      <p>Foo Bar</p>
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  )
}
