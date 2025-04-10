import type { Route } from './+types/home'
import { Welcome } from '../welcome/welcome'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'r1' }, { name: 'description', content: 'Welcome to r1' }]
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: `ENVIRONMENT: ${context.cloudflare.env.ENVIRONMENT}` }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <div className="p-6">{loaderData.message}</div>
}
