import type { VariantProps } from 'tailwind-variants'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

/* shadcn DropdownMenuLabel
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
*/
// TODO: header inset
export const header = tv({
  variants: {
    variant: {
      menu: 'px-2 py-1.5 text-sm font-semibold',
    },
  },
})

export interface HeaderProps
  extends React.ComponentProps<typeof Rac.Header>,
    VariantProps<typeof header> {}

export const Header = ({ variant, className, ...props }: HeaderProps) => (
  <Rac.Header className={header({ variant, className })} {...props} />
)
