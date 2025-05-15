import type { VariantProps } from "tailwind-variants";
import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

// Shadcn DropdownMenuLabel: px-2 py-1.5 text-sm font-medium data-[inset]:pl-8
// Shadcn SelectLabel: text-muted-foreground px-2 py-1.5 text-xs
// Shadcn CommandGroup: text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium
export const headerStyles = tv({
  base: "px-2 py-1.5",
  variants: {
    variant: {
      // TODO: headerStyles: combo-box variant or default/muted?
      menu: "text-sm font-medium",
      select: "text-muted-foreground text-xs",
    },
    inset: {
      true: "pl-8",
    },
  },
  defaultVariants: {
    variant: "menu",
    inset: false,
  },
});

export interface HeaderProps
  extends React.ComponentProps<typeof Rac.Header>,
    VariantProps<typeof headerStyles> {}

export const Header = ({ variant, inset, className, ...rest }: HeaderProps) => (
  <Rac.Header
    className={headerStyles({ variant, inset, className })}
    {...rest}
  />
);
