import type { VariantProps } from "tailwind-variants";
import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

/**
 * Derived from shadcn DialogTitle
 */
export const headingStyles = tv({
  base: "",
  variants: {
    slot: {
      title: "text-lg font-semibold leading-none tracking-tight",
    },
  },
});

export interface HeadingProps
  extends Omit<Rac.HeadingProps, "slot">,
    VariantProps<typeof headingStyles> {}

export const Heading = ({ className, slot, ...rest }: HeadingProps) => (
  <Rac.Heading
    slot={slot}
    className={headingStyles({ slot, className })}
    {...rest}
  />
);
