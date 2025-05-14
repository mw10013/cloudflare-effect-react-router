import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

/*
#fetch https://react-spectrum.adobe.com/react-aria/TextField.html#label-1
*/

// shadcn label: flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50
// shandcn FormLabel: data-[error=true]:text-destructive
// shadcn SelectLabel: text-muted-foreground px-2 py-1.5 text-xs
// shadcn RadioGroupItem: border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50
// shadcn FormItem: grid gap-2

/**
 * Derived from shadcn Label and FormLabel
 */
export const labelStyles = tv({
  base: [
    'flex select-none items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled]:pointer-events-none group-data-[disabled]:opacity-50',
    'group-data-[invalid]:text-destructive'
  ],
  // Variants are for rac components that structure with a <label> and have render props. Eg. radio, checkbox and switch.
  variants: {
    isDisabled: {
      // TODO: labelStyles: cursor-not-allowed for disabled?
      // No pointer-events-none to allow cursor styles; interaction is blocked by the input's disabled state.
      true: 'opacity-50'
    }
  }
})

export function Label({ className, ...props }: Rac.LabelProps) {
  return <Rac.Label data-slot="label" className={labelStyles({ className })} {...props} />
}
