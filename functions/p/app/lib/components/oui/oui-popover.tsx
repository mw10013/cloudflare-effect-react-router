import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

/* shadcn PopoverContent: z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2
 shadcn DropdownMenuContent
"z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
*/
// TODO: popoverStyles: SubmenuTrigger
// TODO: popoverStyles: outline-none
export const popoverStyles = tv({
  base: 'rounded-md border bg-popover text-popover-foreground shadow-md data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2',
  variants: {
    trigger: {
      DialogTrigger: 'min-w-72 p-4',
      MenuTrigger: 'min-w-[8rem] overflow-hidden p-1',
      SubmenuTrigger: '',
      Select: 'min-w-[--trigger-width]',
      ComboBox: 'min-w-[--trigger-width]',
    },
  },
})

type PopoverStylesTriggerKey = keyof typeof popoverStyles.variants.trigger

function isPopoverStylesTriggerKey(
  value: unknown
): value is PopoverStylesTriggerKey {
  return (
    typeof value === 'string' &&
    Object.keys(popoverStyles.variants.trigger).includes(value)
  )
}

// TODO: Popover menu: align center
export const Popover = ({
  className,
  offset = 4,
  ...props
}: Rac.PopoverProps) => (
  <Rac.Popover
    offset={offset}
    className={Rac.composeRenderProps(
      className,
      (className, { trigger, ...renderProps }) =>
        popoverStyles({
          ...renderProps,
          trigger: isPopoverStylesTriggerKey(trigger) ? trigger : undefined,
          className,
        })
    )}
    {...props}
  />
)
