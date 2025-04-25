import type { Route } from './+types/foo'
import { appLoadContext } from '~/lib/ReactRouter'

export const logger: Route.unstable_MiddlewareFunction = async (props, next) => {
  console.log({ message: `logger: will next`, props})
  await next()
  console.log({ message: `logger: did next`, props})
}

export const unstable_middleware = [logger]; 

export async function loader({ context }: Route.LoaderArgs) {
  const ctx = context.get(appLoadContext)
  return { ctx }
}

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh flex-row justify-center gap-2 p-6">
      foo1
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  )
}
