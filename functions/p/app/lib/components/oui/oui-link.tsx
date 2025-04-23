import type { VariantProps } from 'tailwind-variants'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { baseStyles } from './oui-base'
import { buttonStyles } from './oui-button'

export const linkStyles = tv({
  extend: baseStyles,
  base: 'underline-offset-4',
  variants: {
    isHovered: {
      true: 'underline',
    },
  },
})

export const Link = ({ className, ...props }: Rac.LinkProps) => (
  <Rac.Link
    {...props}
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      linkStyles({ ...renderProps, className })
    )}
  />
)

export interface LinkButtonProps
  extends Rac.LinkProps,
    VariantProps<typeof buttonStyles> {}

export const LinkButton = ({
  className,
  variant,
  size,
  ...props
}: LinkButtonProps) => (
  <Rac.Link
    {...props}
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      buttonStyles({ ...renderProps, variant, size, className })
    )}
  />
)

/* shadcn MainNav
<Link
          href="/charts"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/docs/component/chart') ||
              pathname?.startsWith('/charts')
              ? 'text-foreground'
              : 'text-foreground/80'
          )}>
          Charts
        </Link>
*/
// TODO: linkExStyles: text-foreground/80 too subtle?
export const linkExStyles = tv({
  extend: linkStyles,
  base: 'text-foreground/80 transition-colors',
  variants: {
    isCurrent: {
      true: 'text-foreground',
    },
    isHovered: {
      true: 'text-foreground/80 no-underline',
    },
  },
})

export const LinkEx = ({ className, ...props }: Rac.LinkProps) => (
  <Rac.Link
    {...props}
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      linkExStyles({ ...renderProps, className })
    )}
  />
)
