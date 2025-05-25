import { Check } from "lucide-react";
import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";
import { baseStyles, composeTailwindRenderProps } from "./oui-base";
import { Text } from "./oui-text";

/*
#fetch https://react-spectrum.adobe.com/react-aria/ListBox.html
#fetch https://react-spectrum.adobe.com/react-aria/Select.html
*/

/** Styles derived from shadcn SelectPrimitive.Viewport. */
export function ListBox<T extends object>({
  className,
  ...props
}: Rac.ListBoxProps<T>) {
  return (
    <Rac.ListBox
      {...props}
      className={composeTailwindRenderProps(className, "p-1")}
    />
  );
}

/** Styles derived from shadcn SelectItem.
 * https://github.com/adobe/react-spectrum/issues/7601
 */
export const listBoxItemStyles = tv({
  extend: baseStyles,
  base: "[&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    isHovered: {
      true: "bg-accent text-accent-foreground",
    },
    isFocused: {
      true: "bg-accent text-accent-foreground",
    },
  },
});

export const ListBoxItem = <T extends object>({
  className,
  children,
  ...props
}: Rac.ListBoxItemProps<T>) => (
  <Rac.ListBoxItem
    {...props}
    textValue={
      props.textValue || (typeof children === "string" ? children : undefined)
    }
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      listBoxItemStyles({ ...renderProps, className }),
    )}
  >
    {Rac.composeRenderProps(
      children,
      (
        children,
        renderProps: Parameters<
          Extract<
            React.ComponentProps<typeof Rac.ListBoxItem>["children"],
            (...args: any) => any
          >
        >[0],
      ) => (
        <>
          {renderProps.isSelected && (
            <span className="absolute right-2 flex size-3.5 items-center justify-center">
              <Check className="size-4" />
            </span>
          )}
          {children}
        </>
      ),
    )}
  </Rac.ListBoxItem>
);

/** Styles derived from shadcn CommandItem, adapted for a multi-line layout. */
export const listBoxItemExStyles = tv({
  extend: baseStyles,
  base: "outline-hidden [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default select-none flex-col items-start gap-2 rounded-sm px-4 py-2 text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    isSelected: {
      true: "bg-accent text-accent-foreground",
    },
    isFocused: {
      true: "bg-accent text-accent-foreground",
    },
    isHovered: {
      true: "bg-accent text-accent-foreground",
    },
  },
});

export interface ListBoxItemExProps
  extends Omit<Rac.ListBoxItemProps, "children"> {
  label: string;
  description: string;
}

export const ListBoxItemEx = <T extends object>({
  textValue,
  className,
  label,
  description,
  ...props
}: ListBoxItemExProps) => (
  <Rac.ListBoxItem
    {...props}
    textValue={textValue || label}
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      listBoxItemExStyles({ ...renderProps, className }),
    )}
  >
    <Text slot="label">{label}</Text>
    <Text slot="description">{description}</Text>
  </Rac.ListBoxItem>
);
