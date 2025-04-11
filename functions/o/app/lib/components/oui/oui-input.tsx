import type { VariantProps } from 'tailwind-variants'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { baseStyles } from './oui-base'

// TODO: Input: handle file: styles
export const inputStyles = tv({
  extend: baseStyles,
  base: 'placeholder:text-muted-foreground',
  variants: {
    variant: {
      // shadcn input: flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
      default:
        'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors md:text-sm',
      // originui: flex-1 bg-background px-3 py-2 tabular-nums text-foreground focus:outline-none
      // jui group demo: min-w-0 flex-1 bg-background px-2 py-1.5 outline outline-0 placeholder:text-muted-foreground
      ghost:
        'flex-1 bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none',
    },
    isDisabled: {
      true: 'cursor-not-allowed',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface InputProps
  extends Rac.InputProps,
    VariantProps<typeof inputStyles> {}

export function Input({ variant, className, ...props }: InputProps) {
  return (
    <Rac.Input
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        inputStyles({
          ...renderProps,
          variant,
          className,
        })
      )}
    />
  )
}
