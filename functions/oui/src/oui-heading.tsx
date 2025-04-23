import type { VariantProps } from 'tailwind-variants'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

// shadcn DialogTitle: text-lg font-semibold leading-none tracking-tight
export const headingStyles = tv({
  variants: {
    variant: {
      default: 'text-lg font-semibold leading-none tracking-tight',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface HeadingProps
  extends React.ComponentProps<typeof Rac.Heading>,
    VariantProps<typeof headingStyles> {}

// TODO: Heading: should level default to 2? conflicts with <h3>
// TODO: Heading: remove variants?
export const Heading = ({
  variant,
  // level = 2,
  className,
  ...props
}: HeadingProps) => (
  <Rac.Heading
    // level={level}
    {...props}
    className={headingStyles({ variant, className })}
  />
)
