import type { Route } from './+types/_index'
import { env } from 'cloudflare:workers'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'r1' }, { name: 'description', content: 'Welcome to r1' }]
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: `ENVIRONMENT: ${context.cloudflare.env.ENVIRONMENT}`, env }
}

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return <div className="p-6">{loaderData.message}</div>
}
