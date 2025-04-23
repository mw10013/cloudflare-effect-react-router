import { PlusIcon } from 'lucide-react'
import * as Rac from 'react-aria-components'
import * as Oui from '~/lib/components/oui/oui-index'
import * as Jui from '~/lib/components/oui/oui-jui-index'
import { Input } from '~/lib/components/ui/input'
import { Label } from '~/lib/components/ui/label'

function OuiExample() {
  return (
    <Oui.Group>
      <Oui.Input variant="ghost" />
      <Oui.Button variant="ghost" size="icon">
        +
      </Oui.Button>
    </Oui.Group>
  )
}

function JuiExample() {
  return (
    <Jui.TextField>
      <Jui.Label>Email</Jui.Label>
      <Jui.FieldGroup className="p-0">
        <Rac.Input className="min-w-0 flex-1 bg-background px-2 py-1.5 outline outline-0 placeholder:text-muted-foreground" />
        <Jui.Button variant="ghost" size="icon" aria-label="Add email">
          <PlusIcon className="size-4" />
        </Jui.Button>
      </Jui.FieldGroup>
    </Jui.TextField>
  )
}

function ShadcnExample() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiExample />
      <JuiExample />
      <ShadcnExample />
    </div>
  )
}
