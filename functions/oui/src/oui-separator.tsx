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
  base: 'bg-border shrink-0',
  variants: {
    variant: {
      default: 'w-full', // Applies w-full for standard horizontal separators
      menu: '-mx-1 my-1' // For menu, use negative margins and NO w-full
    },
    orientation: {
      horizontal: 'h-px',
      vertical: 'h-full w-px'
    }
  },
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'default'
  }
})

export interface SeparatorProps extends Rac.SeparatorProps, VariantProps<typeof separator> {}

export const Separator = ({ className, variant, orientation, ...rest }: SeparatorProps) => {
  return (
    <Rac.Separator
      orientation={orientation}
      className={separator({
        orientation,
        variant,
        className
      })}
      {...rest}
    />
  )
}
