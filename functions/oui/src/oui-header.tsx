import type { VariantProps } from 'tailwind-variants'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

// Shadcn DropdownMenuLabel: px-2 py-1.5 text-sm font-medium data-[inset]:pl-8
export const headerStyles = tv({
  base: 'px-2 py-1.5 text-sm font-medium',
  variants: {
    inset: {
      true: 'pl-8'
    }
  },
  defaultVariants: {
    inset: false
  }
})

export interface HeaderProps extends React.ComponentProps<typeof Rac.Header>, VariantProps<typeof headerStyles> {}

export const Header = ({ inset, className, ...rest }: HeaderProps) => (
  <Rac.Header className={headerStyles({ inset, className })} {...rest} />
)
