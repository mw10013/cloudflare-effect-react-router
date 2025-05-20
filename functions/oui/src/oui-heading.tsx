import type { VariantProps } from "tailwind-variants";
import React from "react";
import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

/**
 * Derived from shadcn DialogTitle, AlertDialogTitle, PopoverDemo, AccordionHeader
 */
export const headingStyles = tv({
  base: "",
  variants: {
    variant: {
      default: "text-lg font-semibold leading-none",
      alert: "text-lg font-semibold",
      popover: "text-base font-medium leading-none",
      disclosure: "flex",
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
