import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

/*
#fetch https://react-spectrum.adobe.com/react-aria/Popover.html
#fetch https://react-spectrum.adobe.com/react-aria/Menu.html
#fetch https://www.radix-ui.com/primitives/docs/components/popover
#fetch https://www.radix-ui.com/primitives/docs/components/dropdown-menu
#fetch https://ui.shadcn.com/docs/components/popover
#fetch https://ui.shadcn.com/docs/components/dropdown-menu
*/

export const popoverStyles = tv({
  base: 'bg-popover text-popover-foreground data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 outline-hidden z-50 rounded-md border shadow-md',
  variants: {
    trigger: {
      DialogTrigger: 'min-w-72 p-4',
      MenuTrigger: 'min-w-[8rem] overflow-hidden p-1',
      SubmenuTrigger: '', // Submenu popovers often have minimal direct styling, inheriting from MenuTrigger or having specific needs
      Select: 'min-w-(--trigger-width)',
      ComboBox: 'min-w-(--trigger-width)'
    }
  }
})

type PopoverStylesTriggerKey = keyof typeof popoverStyles.variants.trigger

function isPopoverStylesTriggerKey(value: unknown): value is PopoverStylesTriggerKey {
  return typeof value === 'string' && Object.keys(popoverStyles.variants.trigger).includes(value)
}

export const Popover = ({ className, offset = 4, ...props }: Rac.PopoverProps) => (
  <Rac.Popover
    offset={offset}
    className={Rac.composeRenderProps(className, (className, { trigger, ...renderProps }) =>
      popoverStyles({
        ...renderProps,
        trigger: isPopoverStylesTriggerKey(trigger) ? trigger : undefined,
        className
      })
    )}
    {...props}
  />
)
