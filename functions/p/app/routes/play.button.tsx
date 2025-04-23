import * as Oui from '~/lib/components/oui/oui-index'
import { Button } from '~/lib/components/ui/button'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <Oui.Button>Oui Button</Oui.Button>
      <Button>Shadcn Button</Button>
      <Oui.Button variant="secondary" size="sm">
        Oui Button
      </Oui.Button>
      <Button variant="secondary" size="sm">
        Shadcn Button
      </Button>
      <Oui.Button variant="destructive">Oui Button</Oui.Button>
      <Button variant="destructive">Shadcn Button</Button>
      <Oui.Button variant="outline" size="lg">
        Oui Button
      </Oui.Button>
      <Button variant="outline" size="lg">
        Shadcn Button
      </Button>
      <Oui.Button variant="ghost">Oui Button</Oui.Button>
      <Button variant="ghost">Shadcn Button</Button>
      <Oui.Button isDisabled>Oui Button</Oui.Button>
      <Button disabled>Shadcn Button</Button>
    </div>
  )
}
