import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

// TODO: Menu: description, submenu, center position

export const menu = tv({
  //   base: 'outline-none',
})

export const Menu = <T extends object>({
  className,
  ...props
}: Rac.MenuProps<T>) => <Rac.Menu className={menu({ className })} {...props} />

/* shadcn DropdownMenuItem
"relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
inset && "pl-8",
*/
// TODO: menuItem inset
export const menuItem = tv({
  base: 'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
})

export const MenuItem = <T extends object>({
  className,
  ...props
}: Rac.MenuItemProps<T>) => (
  <Rac.MenuItem
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      menuItem({ ...renderProps, className })
    )}
    {...props}
  />
)
