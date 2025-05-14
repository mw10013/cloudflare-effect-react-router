import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

/*
#fetch https://react-spectrum.adobe.com/react-aria/TextField.html#label-1
*/

/**
 * Derived from shadcn Label and FormLabel
 */
export const labelStyles = tv({
  base: [
    "flex select-none items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled]:pointer-events-none group-data-[disabled]:opacity-50",
    "group-data-[invalid]:text-destructive",
  ],
  // Variants are for rac components that structure with a <label> and have render props. Eg. radio, checkbox and switch.
  variants: {
    isDisabled: {
      // TODO: labelStyles: cursor-not-allowed for disabled?
      // No pointer-events-none to allow cursor styles; interaction is blocked by the input's disabled state.
      true: "opacity-50",
    },
  },
});

export function Label({ className, ...props }: Rac.LabelProps) {
  return (
    <Rac.Label
      data-slot="label"
      className={labelStyles({ className })}
      {...props}
    />
  );
}
