import type { Route } from './+types/_index'
import { EnvEx } from '@workspace/shared'
import { env } from 'cloudflare:workers'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'r1' }, { name: 'description', content: 'Welcome to r1' }]
}

export function loader({ context }: Route.LoaderArgs) {
  return { env, e: EnvEx.e() }
}

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="p-6">
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  )
}
