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
      default: 'w-full',
      // For the 'menu' variant, 'w-full' is omitted. This results in an implicit
      // 'width: auto', allowing negative horizontal margins (-mx-1) to expand the
      // separator's actual content-box width to fill the parent's padding area.
      // An explicit width (like 'w-full') would fix the content-box size first,
      // and negative margins would only shift this fixed-size box.
      menu: '-mx-1 my-1'
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
