import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

// shadcn: text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70
// originui: text-sm font-medium text-foreground
// TODO: Label need group-data-[disabled] or peer-data-[disabled]?
export const labelStyles = tv({
  // group-data-[invalid]:text-destructive is for rac components that nest a Label. They need to have group in their styles.
  base: 'text-sm font-medium leading-none group-data-[invalid]:text-destructive',
  // Variants are for rac components that structure with a <label> and have render props. Eg. checkbox and switch.
  variants: {
    isInvalid: {
      true: 'text-destructive',
    },
    isDisabled: {
      true: 'cursor-not-allowed opacity-70',
    },
  },
})

export function Label({ className, ...props }: Rac.LabelProps) {
  return <Rac.Label {...props} className={labelStyles({ className })} />
}
