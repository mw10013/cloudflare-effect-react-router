import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

/*
#fetch https://react-spectrum.adobe.com/react-aria/Menu.html
#fetch https://react-spectrum.adobe.com/react-aria/Popover.html
#fetch https://ui.shadcn.com/docs/components/dropdown-menu
#fetch https://react-spectrum.adobe.com/react-aria/collections.html
#fetch https://react-spectrum.adobe.com/react-aria/ListBox.html
*/

// shadcn DropdownMenuContent: bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md
export const menu = tv({
  // No background, border, shadow, or animation classes here as they are on the Popover
  base: 'max-h-[theme(spacing.72)] min-w-[8rem] overflow-y-auto overflow-x-hidden p-1'
})

export const Menu = <T extends object>({ className, ...props }: Rac.MenuProps<T>) => (
  <Rac.Menu
    data-slot="dropdown-menu-content"
    className={Rac.composeRenderProps(className, (className, renderProps) => menu({ ...renderProps, className }))}
    {...props}
  />
)

/* shadcn DropdownMenuItem
"relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
inset && "pl-8",
*/
export const menuItem = tv({
  base: 'data-[focused]:bg-accent data-[focused]:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0'
})

export const MenuItem = <T extends object>({ className, ...props }: Rac.MenuItemProps<T>) => (
  <Rac.MenuItem
    className={Rac.composeRenderProps(className, (className, renderProps) => menuItem({ ...renderProps, className }))}
    {...props}
  />
)
