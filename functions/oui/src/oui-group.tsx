import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Group.html
#fetch https://react-spectrum.adobe.com/react-aria/ComboBox.html
*/

// originui: relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm shadow-black/5 transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-[3px] data-[focus-within]:ring-ring/20
// jui FieldGroup: relative flex h-9 w-full items-center overflow-hidden rounded-md border border-input bg-transparent p-0 text-sm shadow-sm transition-colors data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-1 data-[focus-within]:ring-ring
/* shadcn input:
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
*/

/**
 * Derived from shadcn Input
 */
export const groupStyles = tv({
  base: [
    "border-input rounded-md border",
    "inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap",
    "data-[focus-visible]:border-ring data-[focus-visible]:ring-ring/50 data-[focus-visible]:ring-[3px]",
    "data-[invalid]:ring-destructive/20 dark:data-[invalid]:ring-destructive/40 data-[invalid]:border-destructive",
  ],
});

export function Group({ className, ...props }: Rac.GroupProps) {
  return (
    <Rac.Group
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        groupStyles({ ...renderProps, className }),
      )}
      {...props}
    />
  );
}
