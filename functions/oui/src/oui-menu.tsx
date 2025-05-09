import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

export const menu = tv({
  base: ''
})

export const Menu = <T extends object>({ className, ...props }: Rac.MenuProps<T>) => (
  <Rac.Menu className={Rac.composeRenderProps(className, (className, renderProps) => menu({ ...renderProps, className }))} {...props} />
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
