import type { VariantProps } from "tailwind-variants";
import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

/*
#fetch https://react-spectrum.adobe.com/react-aria/TextField.html#input-1
*/

/** Derived from shadcn Input. */
export const inputStyles = tv({
  base: "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 md:text-sm",
  variants: {
    variant: {
      default: [
        "border-input shadow-xs rounded-md border ",
        "data-[focus-visible]:border-ring data-[focus-visible]:ring-ring/50 data-[focus-visible]:ring-[3px]",
        "data-[invalid]:border-destructive data-[invalid]:ring-destructive/20 dark:data-[invalid]:ring-destructive/40",
      ],
      ghost: "flex-1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface InputProps
  extends Rac.InputProps,
    VariantProps<typeof inputStyles> {}

export function Input({ variant, className, ...props }: InputProps) {
  return (
    <Rac.Input
      data-slot="input"
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        inputStyles({
          variant,
          className,
          ...renderProps,
        }),
      )}
      {...props}
    />
  );
}
