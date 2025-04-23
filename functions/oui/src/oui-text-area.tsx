import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

// shadcn Textarea: border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
const textAreaStyles = tv({
  // TODO: textAreaStyles: remove aria-invalid and use isInvalid render prop
  base: 'border-input placeholder:text-muted-foreground aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 field-sizing-content shadow-xs flex min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base outline-none transition-[color,box-shadow] md:text-sm',
  variants: {
    isFocusVisible: {
      true: 'border-ring ring-ring/50 ring-[3px]'
    },
    isDisabled: {
      true: 'cursor-not-allowed opacity-50'
    }
  }
})

export const TextArea = ({ className, ...props }: Rac.TextAreaProps) => (
  <Rac.TextArea
    className={Rac.composeRenderProps(className, (className, renderProps) => textAreaStyles({ ...renderProps, className }))}
    {...props}
  />
)
