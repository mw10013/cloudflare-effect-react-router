import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

/*
#fetch https://react-spectrum.adobe.com/react-aria/Menu.html
#fetch https://react-spectrum.adobe.com/react-aria/Checkbox.html
#fetch https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html
#fetch https://react-spectrum.adobe.com/react-aria/Popover.html
#fetch https://ui.shadcn.com/docs/components/dropdown-menu
#fetch https://react-spectrum.adobe.com/react-aria/collections.html
#fetch https://react-spectrum.adobe.com/react-aria/ListBox.html
*/

// shadcn DropdownMenuContent: bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md
export const menuStyles = tv({
  base: 'w-full min-w-[8rem] overflow-y-auto overflow-x-hidden p-1'
})

export const Menu = <T extends object>({ className, ...props }: Rac.MenuProps<T>) => (
  <Rac.Menu
    className={Rac.composeRenderProps(className, (className, renderProps) => menuStyles({ ...renderProps, className }))}
    {...props}
  />
)

// shadcn DropdownMenuItem: focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
export const menuItemStyles = tv({
  base: [
    'relative flex cursor-default select-none items-center gap-x-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
    // Default icon styling
    '[&_svg:not([class*="size-"])]:size-4',
    '[&_svg]:shrink-0',
    '[&_svg]:pointer-events-none',
    '[&_svg:not([class*="text-"])]:text-muted-foreground'
  ],
  variants: {
    isFocused: {
      true: 'bg-accent text-accent-foreground'
    },
    isDisabled: {
      true: 'pointer-events-none opacity-50'
    },
    selectionMode: {
      none: '',
      single: 'pl-8',
      multiple: 'pl-8'
    },
    variant: {
      default: '', // Relies on base and isFocused for its states
      destructive: 'text-destructive [&_svg]:text-destructive'
    }
  },
  compoundVariants: [
    {
      variant: 'destructive',
      isFocused: true,
      // Overrides default focus for destructive items
      className: 'bg-destructive/10 text-destructive dark:bg-destructive/20'
    }
  ],
  defaultVariants: {
    variant: 'default',
    selectionMode: 'none'
  }
})

export interface MenuItemProps<T extends object> extends Rac.MenuItemProps<T> {
  variant?: 'default' | 'destructive'
}

export const MenuItem = <T extends object>({ className: initialClassName, variant, children, ...props }: MenuItemProps<T>) => (
  <Rac.MenuItem
    {...props}
    className={Rac.composeRenderProps(initialClassName, (className, renderProps) =>
      menuItemStyles({
        ...renderProps,
        variant,
        className
      })
    )}
  >
    {({ isSelected, selectionMode, hasSubmenu, ...renderProps }) => {
      const isCheckboxItem = isSelected && selectionMode === 'multiple'
      const isRadioItem = isSelected && selectionMode === 'single'

      return (
        <>
          {isCheckboxItem && (
            <span className="absolute left-2 flex size-3.5 items-center justify-center">
              <CheckIcon className="size-4" />
            </span>
          )}
          {isRadioItem && (
            <span className="absolute left-2 flex size-3.5 items-center justify-center">
              <CircleIcon className="size-2 fill-current" />
            </span>
          )}
          {typeof children === 'function' ? children({ isSelected, selectionMode, hasSubmenu, ...renderProps }) : children}
          {hasSubmenu && <ChevronRightIcon className="ml-auto size-4" />}
        </>
      )
    }}
  </Rac.MenuItem>
)
