import type { VariantProps } from 'tailwind-variants'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

/* shadcn Separator
"shrink-0 bg-border",
orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
shadcn DropdownMenuSeparator: -mx-1 my-1 h-px bg-muted
*/
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

// TODO: Separator use <hr>?
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
