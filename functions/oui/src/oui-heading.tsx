import type { VariantProps } from "tailwind-variants";
import React from "react";
import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

/**
 * Derived from shadcn DialogTitle and AlertDialogTitle
 */
export const headingStyles = tv({
  base: "text-lg font-semibold",
  variants: {
    variant: {
      default: "leading-none",
      alert: "",
      popover: "text-base font-medium leading-none",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface HeadingProps
  extends Rac.HeadingProps,
    VariantProps<typeof headingStyles> {}

export function Heading({ className, variant, ...rest }: HeadingProps) {
  return (
    <Rac.Heading className={headingStyles({ className, variant })} {...rest} />
  );
}
