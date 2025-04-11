import type { VariantProps } from 'tailwind-variants'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { baseStyles } from './oui-base'

export const inputStyles = tv({
  base: [
    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input shadow-xs flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
  ]
})

// export const inputStyles = tv({
//   extend: baseStyles,
//   base: 'placeholder:text-muted-foreground',
//   variants: {
//     variant: {
//       // shadcn input: flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
//       default: 'border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors md:text-sm',
//       // originui: flex-1 bg-background px-3 py-2 tabular-nums text-foreground focus:outline-none
//       // jui group demo: min-w-0 flex-1 bg-background px-2 py-1.5 outline outline-0 placeholder:text-muted-foreground
//       ghost: 'bg-background text-foreground placeholder:text-muted-foreground flex-1 px-3 py-2 focus:outline-none'
//     },
//     isDisabled: {
//       true: 'cursor-not-allowed'
//     }
//   },
//   defaultVariants: {
//     variant: 'default'
//   }
// })

export interface InputProps extends Rac.InputProps, VariantProps<typeof inputStyles> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <Rac.Input
      data-slot="input"
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        inputStyles({
          ...renderProps,
          className
        })
      )}
      {...props}
    />
  )
}
