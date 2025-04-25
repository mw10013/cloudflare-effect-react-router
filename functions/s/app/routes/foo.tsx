import type { Route } from './+types/foo'
import { appLoadContext } from '~/lib/ReactRouter'

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
