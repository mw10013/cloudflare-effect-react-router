import type { Route } from './+types/effect'
import { Effect } from 'effect'
import { loaderFunction, SandboxService } from '~/lib/ReactRouterEx'

export const loader = loaderFunction(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    yield* Effect.log('loader')
    return { message: `ENVIRONMENT: ${context.cloudflare.env.ENVIRONMENT}`, foo: yield* SandboxService.foo() }
  })
)

export default function RouteComponent(props: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh flex-row justify-center gap-2 p-6">
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
