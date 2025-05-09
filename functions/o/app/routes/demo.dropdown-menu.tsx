import { tv } from 'tailwind-variants'
import { DemoContainer } from '~/components/demo-container'
import { DropdownMenuDemo } from '~/components/dropdown-menu-demo'
import { OuiDropdownMenuDemo } from '~/components/oui-dropdown-menu-demo'

export const menu = tv({
  // No background, border, shadow, or animation classes here as they are on the Popover
  base: 'max-h-[theme(spacing.72)] min-w-[8rem] overflow-y-auto overflow-x-hidden p-1'
})


export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <DropdownMenuDemo />
      <OuiDropdownMenuDemo />
    </DemoContainer>
  )
}
