import { DemoContainer } from '~/components/demo-container'
import { DropdownMenuDemo } from '~/components/dropdown-menu-demo'
import { OuiDropdownMenuDemo } from '~/components/oui-dropdown-menu-demo'

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <DropdownMenuDemo />
      <OuiDropdownMenuDemo />
    </DemoContainer>
  )
}
