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
    orientation: {
      horizontal: 'h-px', // Default height for horizontal
      vertical: 'h-full w-px'
    },
    // Use a more descriptive variant name if 'variant' is the public prop name
    // to avoid confusion in tv's variant system.
    // Let's assume the public prop is 'variant' and can be 'menu'.
    stylingMode: {
      default: 'w-full', // Applies w-full for standard horizontal separators
      menu: '-mx-1 my-1' // For menu, uses negative margins and NO w-full
    }
  },
  defaultVariants: {
    orientation: 'horizontal',
    stylingMode: 'default'
  }
})

export interface SeparatorProps
  extends Omit<Rac.SeparatorProps, 'orientation'>, // Omit RAC's orientation
    VariantProps<typeof separator> {
  variant?: 'menu'
  // Re-introduce orientation as our own prop to control tv variants
  orientation?: 'horizontal' | 'vertical'
}

export const Separator = ({
  className,
  variant,
  orientation: propOrientation, // User-provided orientation
  ...props
}: SeparatorProps) => {
  const isMenuVariant = variant === 'menu'
  // In 'menu' variant, orientation is effectively horizontal for styling purposes here
  const finalOrientation = isMenuVariant ? 'horizontal' : (propOrientation ?? 'horizontal')

  return (
    <Rac.Separator
      orientation={finalOrientation} // Pass resolved orientation to RAC
      className={separator({
        orientation: finalOrientation,
        stylingMode: isMenuVariant ? 'menu' : 'default',
        className
      })}
      {...props}
    />
  )
}
