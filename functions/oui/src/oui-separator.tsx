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
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px'
    },
    variant: {
      default: '',
      menu: ''
    }
  },
  compoundVariants: [
    {
      variant: 'menu',
      orientation: 'horizontal',
      // For menu variant, horizontal orientation adds specific margins.
      // It inherits 'shrink-0 bg-border h-px w-full' from base and orientation.
      class: '-mx-1 my-1'
    }
    // No special compound needed for variant: 'menu', orientation: 'vertical'
    // as it should be styled identically to variant: 'default', orientation: 'vertical'.
  ],
  defaultVariants: {
    variant: 'default',
    orientation: 'horizontal'
  }
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
