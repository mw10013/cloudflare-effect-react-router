import type { VariantProps } from 'tailwind-variants'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { baseStyles } from './oui-base'

// https://github.com/nextui-org/tailwind-variants/issues/209 : compoundVariants does not recognize falsy boolean variant
// https://github.com/nextui-org/tailwind-variants/pull/210 : fix: treat undefined value for compoundVariants as false

export const buttonStyles = tv({
  extend: baseStyles,
  // shadcn: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground shadow',
      destructive: 'bg-destructive text-destructive-foreground shadow-sm',
      outline: 'border border-input bg-background shadow-sm',
      secondary: 'bg-secondary text-secondary-foreground shadow-sm',
      ghost: '',
      link: 'text-primary underline-offset-4',
    },
    size: {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      isHovered: true,
      class: 'bg-primary/90',
    },
    {
      variant: 'destructive',
      isHovered: true,
      class: 'bg-destructive/90',
    },
    {
      variant: ['outline', 'ghost'],
      isHovered: true,
      class: 'bg-accent text-accent-foreground',
    },
    {
      variant: 'secondary',
      isHovered: true,
      class: 'bg-secondary/80',
    },
    {
      variant: 'link',
      isHovered: true,
      class: 'underline',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends Rac.ButtonProps,
    VariantProps<typeof buttonStyles> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <Rac.Button
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        buttonStyles({
          ...renderProps,
          variant,
          size,
          className,
        })
      )}
    />
  )
}
