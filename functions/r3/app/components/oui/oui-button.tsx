import type { VariantProps } from 'tailwind-variants'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { baseStyles } from './oui-base'

// https://github.com/nextui-org/tailwind-variants/issues/209 : compoundVariants does not recognize falsy boolean variant
// https://github.com/nextui-org/tailwind-variants/pull/210 : fix: treat undefined value for compoundVariants as false

/* shadcn button

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

*/

export const buttonStyles = tv({
  base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
      destructive:
        'bg-destructive shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white',
      outline:
        'bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border',
      secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
      link: 'text-primary underline-offset-4 hover:underline'
    },
    size: {
      default: 'h-9 px-4 py-2 has-[>svg]:px-3',
      sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
      lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
      icon: 'size-9'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

// export const buttonStyles = tv({
//   extend: baseStyles,
//   base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
//   variants: {
//     variant: {
//       default: 'bg-primary text-primary-foreground shadow',
//       destructive: 'bg-destructive text-destructive-foreground shadow-sm',
//       outline: 'border-input bg-background border shadow-sm',
//       secondary: 'bg-secondary text-secondary-foreground shadow-sm',
//       ghost: '',
//       link: 'text-primary underline-offset-4'
//     },
//     size: {
//       default: 'h-9 px-4 py-2',
//       sm: 'h-8 rounded-md px-3 text-xs',
//       lg: 'h-10 rounded-md px-8',
//       icon: 'h-9 w-9'
//     }
//   },
//   compoundVariants: [
//     {
//       variant: 'default',
//       isHovered: true,
//       class: 'bg-primary/90'
//     },
//     {
//       variant: 'destructive',
//       isHovered: true,
//       class: 'bg-destructive/90'
//     },
//     {
//       variant: ['outline', 'ghost'],
//       isHovered: true,
//       class: 'bg-accent text-accent-foreground'
//     },
//     {
//       variant: 'secondary',
//       isHovered: true,
//       class: 'bg-secondary/80'
//     },
//     {
//       variant: 'link',
//       isHovered: true,
//       class: 'underline'
//     }
//   ],
//   defaultVariants: {
//     variant: 'default',
//     size: 'default'
//   }
// })

export interface ButtonProps extends Rac.ButtonProps, VariantProps<typeof buttonStyles> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <Rac.Button
      data-slot="button"
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        buttonStyles({
          ...renderProps,
          variant,
          size,
          className
        })
      )}
      {...props}
    />
  )
}
