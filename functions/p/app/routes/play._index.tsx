import type { Route } from './+types/_index'
import * as Oui from '~/lib/components/oui/oui-index'
import { Button } from '~/lib/components/ui/button'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'rr-rac' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <Oui.Button>Oui Button</Oui.Button>
      <Button>Shadcn Button</Button>
    </div>
  )
}
