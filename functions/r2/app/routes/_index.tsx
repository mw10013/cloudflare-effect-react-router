import type { Route } from './+types/_index'
import { Button } from '~/components/ui/button'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'r2' }, { name: 'description', content: 'Welcome to r2' }]
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: `ENVIRONMENT: ${context.cloudflare.env.ENVIRONMENT}` }
}

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>{loaderData.message}</Button>
    </div>
  )
}
