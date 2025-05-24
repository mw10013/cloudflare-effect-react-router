import type { VariantProps } from "tailwind-variants";
import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";
import { baseStyles } from "./oui-base";
import { buttonStyles } from "./oui-button";

/**
 * Derived from shadcn CardDemo.
 */
export const linkStyles = tv({
  extend: baseStyles,
  base: "text-sm underline-offset-4",
  variants: {
    underline: {
      none: "no-underline",
      hover: "data-[hovered]:underline",
      always: "underline",
      current: "data-[current]:underline",
      focus: "data-[focused]:underline",
    },
  },
  defaultVariants: {
    underline: "none",
  },
});

interface LinkProps extends Rac.LinkProps, VariantProps<typeof linkStyles> {}

export const Link = ({ className, underline, ...props }: LinkProps) => (
  <Rac.Link
    {...props}
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      linkStyles({ ...renderProps, underline, className }),
    )}
  />
);

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
      buttonStyles({ ...renderProps, variant, size, className }),
    )}
  />
);

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
  base: "text-foreground/80 transition-colors",
  variants: {
    isCurrent: {
      true: "text-foreground",
    },
    isHovered: {
      true: "text-foreground/80 no-underline",
    },
  },
});

export const LinkEx = ({ className, ...props }: Rac.LinkProps) => (
  <Rac.Link
    {...props}
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      linkExStyles({ ...renderProps, className }),
    )}
  />
);

// shadcn NavigationMenuLink: data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4
export const navigationMenuLinkStyles = tv({
  base: `[&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm outline-none transition-all [&_svg:not([class*='size-'])]:size-4`,
  variants: {
    isCurrent: {
      true: "bg-accent/50 text-accent-foreground",
    },
    isFocused: {
      true: "bg-accent text-accent-foreground",
    },
    isFocusVisible: {
      true: "ring-ring/50 outline-1 ring-[3px]",
    },
    isHovered: {
      true: "bg-accent text-accent-foreground",
    },
  },
  compoundVariants: [
    {
      isCurrent: true,
      isFocused: true,
      className: "bg-accent",
    },
    {
      isCurrent: true,
      isHovered: true,
      className: "bg-accent",
    },
  ],
});

export const NavigationMenuLink = ({ className, ...props }: Rac.LinkProps) => (
  <Rac.Link
    data-slot="navigation-menu-link"
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      navigationMenuLinkStyles({ ...renderProps, className }),
    )}
    {...props}
  />
);
