import React from "react";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";
import { Button } from "./oui-button";
import { Popover } from "./oui-popover";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Menu.html
#fetch https://react-spectrum.adobe.com/react-aria/Checkbox.html
#fetch https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html
#fetch https://react-spectrum.adobe.com/react-aria/Popover.html
#fetch https://ui.shadcn.com/docs/components/dropdown-menu
#fetch https://react-spectrum.adobe.com/react-aria/collections.html
#fetch https://react-spectrum.adobe.com/react-aria/ListBox.html
*/

/**
 * Derived from shadcn DropdownMenuContent
 */
export const menuStyles = tv({
  base: "w-full min-w-[8rem] overflow-y-auto overflow-x-hidden p-1",
});

export function Menu<T extends object>({
  className,
  ...props
}: Rac.MenuProps<T>) {
  return (
    <Rac.Menu
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        menuStyles({ ...renderProps, className }),
      )}
      {...props}
    />
  );
}

/**
 * Derived from shadcn DropdownMenuItem
 */
export const menuItemStyles = tv({
  base: [
    "relative flex cursor-default select-none items-center gap-x-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
    '[&_svg:not([class*="size-"])]:size-4',
    "[&_svg]:shrink-0",
    "[&_svg]:pointer-events-none",
    '[&_svg:not([class*="text-"])]:text-muted-foreground',
  ],
  variants: {
    isFocused: {
      true: "bg-accent text-accent-foreground",
    },
    isDisabled: {
      true: "pointer-events-none opacity-50",
    },
    selectionMode: {
      none: "",
      single: "pl-8",
      multiple: "pl-8",
    },
    variant: {
      default: "",
      destructive: "text-destructive [&_svg]:text-destructive",
    },
  },
  compoundVariants: [
    {
      variant: "destructive",
      isFocused: true,
      className: "bg-destructive/10 text-destructive dark:bg-destructive/20",
    },
  ],
  defaultVariants: {
    variant: "default",
    selectionMode: "none",
  },
});

export interface MenuItemProps<T extends object> extends Rac.MenuItemProps<T> {
  variant?: "default" | "destructive";
}

/**
 * Derived from shadcn DropdownMenuCheckboxItem and DropdownMenuRadioGroup
 */
export function MenuItem<T extends object>({
  className,
  variant,
  children,
  ...props
}: MenuItemProps<T>) {
  return (
    <Rac.MenuItem
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        menuItemStyles({
          ...renderProps,
          variant,
          className,
        }),
      )}
    >
      {({ isSelected, selectionMode, hasSubmenu, ...renderProps }) => {
        const isCheckboxItem = isSelected && selectionMode === "multiple";
        const isRadioItem = isSelected && selectionMode === "single";

        return (
          <>
            {isCheckboxItem && (
              <span className="absolute left-2 flex size-3.5 items-center justify-center">
                <CheckIcon className="size-4" />
              </span>
            )}
            {isRadioItem && (
              <span className="absolute left-2 flex size-3.5 items-center justify-center">
                <CircleIcon className="size-2 fill-current" />
              </span>
            )}
            {typeof children === "function"
              ? children({
                  isSelected,
                  selectionMode,
                  hasSubmenu,
                  ...renderProps,
                })
              : children}
            {hasSubmenu && <ChevronRightIcon className="ml-auto size-4" />}
          </>
        );
      }}
    </Rac.MenuItem>
  );
}

interface MenuExProps<T> extends Rac.MenuProps<T> {
  triggerElement: string | React.ReactElement;
}

/**
 * If `triggerElement` is a string, it's rendered as a ghost `Button`.
 */
export function MenuEx<T extends object>({
  triggerElement,
  children,
  ...rest
}: MenuExProps<T>) {
  return (
    <Rac.MenuTrigger>
      {typeof triggerElement === "string" ? (
        <Button variant="ghost">{triggerElement}</Button>
      ) : (
        triggerElement
      )}
      <Popover>
        <Menu {...rest}>{children}</Menu>
      </Popover>
    </Rac.MenuTrigger>
  );
}
