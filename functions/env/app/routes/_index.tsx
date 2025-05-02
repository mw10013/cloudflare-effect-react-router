import type { Route } from './+types/_index'
import { EnvEx } from '@workspace/shared'
import { env } from 'cloudflare:workers'
import { Effect } from 'effect'
import * as ReactRouter from '~/ReactRouter'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'env' }, { name: 'description', content: 'Welcome' }]
}

export const loader = ReactRouter.routeEffect(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    yield* Effect.log('loader')
    const alc = context.get(ReactRouter.appLoadContext)
    return { env, e: EnvEx.e(), alc: alc.cloudflare.env }
  })
)

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="p-6">
      {/* <Foo /> */}
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  )
}

// function Foo() {
//   return <p>Foo</p>
// }
