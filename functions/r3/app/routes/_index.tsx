import type { Route } from './+types/_index'
import { FormDemo } from '~/components/form-demo'
import * as Oui from '~/components/oui/oui-index'
import { Button } from '~/components/ui/button'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'r2' }, { name: 'description', content: 'Welcome to r2' }]
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: `ENVIRONMENT: ${context.cloudflare.env.ENVIRONMENT}` }
}

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="mx-auto flex min-h-svh w-48 flex-col justify-center gap-2 py-6">
      <FormDemo />
      <Button>{loaderData.message}</Button>
      <Oui.Button>{loaderData.message}</Oui.Button>
    </div>
  )
}
