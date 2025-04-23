import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

/* shadcn DropdownMenuItem-> label
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
shadcn FormDescription: text-[0.8rem] text-muted-foreground      
*/
export const textStyles = tv({
  variants: {
    slot: {
      label: 'text-sm',
      description: 'text-[0.8rem] text-muted-foreground',
    },
  },
})

type TextStylesSlotKey = keyof typeof textStyles.variants.slot

function isTextStylesSlotKey(value: unknown): value is TextStylesSlotKey {
  return (
    typeof value === 'string' &&
    Object.keys(textStyles.variants.slot).includes(value)
  )
}

export const Text = ({
  elementType: elementTypeProp,
  slot,
  className,
  ...props
}: Rac.TextProps) => {
  const elementType =
    !elementTypeProp && slot === 'description' ? 'p' : elementTypeProp
  return (
    <Rac.Text
      elementType={elementType}
      slot={slot}
      className={textStyles({
        slot: isTextStylesSlotKey(slot) ? slot : undefined,
        className,
      })}
      {...props}
    />
  )
}
