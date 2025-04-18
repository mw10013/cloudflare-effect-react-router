import { Check } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { baseStyles, composeTailwindRenderProps } from './oui-base'
import { Text } from './oui-text'

/* shadcn SelectContent
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
*/

/* shadcn SelectPrimitive.Viewport
"p-1",
position === "popper" &&
  "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
*/
export function ListBox<T extends object>({
  className,
  ...props
}: Rac.ListBoxProps<T>) {
  return (
    <Rac.ListBox
      {...props}
      className={composeTailwindRenderProps(className, 'p-1')}
    />
  )
}

// https://github.com/adobe/react-spectrum/issues/7601
export const listBoxItemStyles = tv({
  extend: baseStyles,
  base: 'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none',
  variants: {
    isHovered: {
      true: 'bg-accent text-accent-foreground',
    },
  },
})

// shadcn SelectItem: relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50
export const ListBoxItem = <T extends object>({
  className,
  children,
  ...props
}: Rac.ListBoxItemProps) => (
  <Rac.ListBoxItem
    {...props}
    textValue={
      props.textValue || (typeof children === 'string' ? children : undefined)
    }
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      listBoxItemStyles({ ...renderProps, className })
    )}>
    {Rac.composeRenderProps(children, (children, renderProps) => (
      <>
        {renderProps.isSelected && (
          <span className="absolute right-2 flex size-3.5 items-center justify-center">
            <Check className="size-4" />
          </span>
        )}
        {children}
      </>
    ))}
  </Rac.ListBoxItem>
)

// shadcn CommandItem: relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
// shadcn team-members: <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
// https://github.com/adobe/react-spectrum/issues/7601
export const listBoxItemExStyles = tv({
  extend: listBoxItemStyles,
  base: 'relative flex w-full cursor-default select-none flex-col items-start gap-2 rounded-sm px-4 py-2 outline-none',
})

export interface ListBoxItemExProps
  extends Omit<Rac.ListBoxItemProps, 'children'> {
  label: string
  description: string
}

export const ListBoxItemEx = <T extends object>({
  textValue,
  className,
  label,
  description,
  ...props
}: ListBoxItemExProps) => (
  <Rac.ListBoxItem
    {...props}
    textValue={textValue || label}
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      listBoxItemExStyles({ ...renderProps, className })
    )}>
    <Text slot="label">{label}</Text>
    <Text slot="description">{description}</Text>
  </Rac.ListBoxItem>
)
