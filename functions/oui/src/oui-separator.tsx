import type { VariantProps } from 'tailwind-variants'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

/*
#fetch https://react-spectrum.adobe.com/react-aria/Menu.html#separator
#fetch https://react-spectrum.adobe.com/react-aria/Toolbar.html#separator
#fetch https://www.radix-ui.com/primitives/docs/components/separator
#fetch https://www.radix-ui.com/primitives/docs/components/dropdown-menu#separator
*/

// shadcn Separator and DropdownMenuSeparator
export const separator = tv({
  base: 'shrink-0 bg-border',
  variants: {
    variant: {
      default: '',
      menu: '',
    },
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
  },
  compoundVariants: [
    {
      variant: 'menu',
      orientation: 'horizontal',
      class: '-mx-1 my-1 h-px bg-muted',
    },
  ],
  defaultVariants: {
    variant: 'default',
    orientation: 'horizontal',
  },
})

export interface SeparatorProps
  extends Rac.SeparatorProps,
    VariantProps<typeof separator> {}

export const Separator = ({
  variant,
  orientation,
  className,
  ...props
}: SeparatorProps) => {
  return (
    <Rac.Separator
      elementType="div"
      className={separator({ variant, orientation, className })}
      {...props}
    />
  )
}
