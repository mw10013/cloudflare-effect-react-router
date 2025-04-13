import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { composeTailwindRenderProps } from './oui-base'

// shadcn label: flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50
// shandcn FormLabel: data-[error=true]:text-destructive
// shadcn SelectLabel: text-muted-foreground px-2 py-1.5 text-xs
// shadcn RadioGroupItem: border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50
export const labelStyles = tv({
  base: 'flex select-none items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
  // Variants are for rac components that structure with a <label> and have render props. Eg. radio, checkbox and switch.
  variants: {
    isDisabled: {
      // TODO: labelStyles: cursor-not-allowed for disabled?
      true: 'pointer-events-none opacity-50'
    }
  }
})

// export const labelStyles = tv({
//   // group-data-[invalid]:text-destructive is for rac components that nest a Label. They need to have group in their styles.
//   base: 'text-sm font-medium leading-none group-data-[invalid]:text-destructive',
//   // Variants are for rac components that structure with a <label> and have render props. Eg. checkbox and switch.
//   variants: {
//     isInvalid: {
//       true: 'text-destructive',
//     },
//     isDisabled: {
//       true: 'cursor-not-allowed opacity-70',
//     },
//   },
// })

export function Label({ className, ...props }: Rac.LabelProps) {
  return <Rac.Label data-slot="label" className={labelStyles({ className })} {...props} />
}

export function FormLabel({ className, ...props }: Rac.LabelProps) {
  return (
    <Label
      data-slot="form-label"
      // data-error={!!error}
      className="data-[error=true]:text-destructive"
      {...props}
    />
  )
}

/*

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  )
}

*/
