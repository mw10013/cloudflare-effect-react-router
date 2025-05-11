import type { VariantProps } from 'tailwind-variants'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

export const headerStyles = tv({
  base: '',
  variants: {
    variant: {
      menu: 'px-2 py-1.5 text-sm font-medium'
    },
    inset: {
      true: 'pl-8'
    }
  },
  defaultVariants: {
    inset: false
  }
})

export interface HeaderProps extends React.ComponentProps<typeof Rac.Header>, VariantProps<typeof headerStyles> {}

export const Header = ({ variant, inset, className, ...rest }: HeaderProps) => (
  <Rac.Header className={headerStyles({ variant, inset, className })} {...rest} />
)
