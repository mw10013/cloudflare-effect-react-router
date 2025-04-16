import type { Route } from './+types/_index'
import { FormDemo } from '~/components/form-demo'
import { OuiFormDemo } from '~/components/oui-form-demo'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'r3' }, { name: 'description', content: 'Welcome to r3' }]
}

// export function loader({ context }: Route.LoaderArgs) {
//   return { message: `ENVIRONMENT: ${context.cloudflare.env.ENVIRONMENT}` }
// }

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh flex-row justify-center gap-2 p-6">
      <FormDemo />
      <OuiFormDemo />
    </div>
  )
}
