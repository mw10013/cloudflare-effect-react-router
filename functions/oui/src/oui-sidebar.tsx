import * as React from "react";
import { useSidebar } from "@workspace/ui/components/ui/sidebar";
import { PanelLeftIcon } from "lucide-react";
import * as Rac from "react-aria-components";
import { tv, VariantProps } from "tailwind-variants"; // Ensure VariantProps is imported
import { composeTailwindRenderProps } from "./oui-base";
import { Button } from "./oui-button";

/*
#fetch https://ui.shadcn.com/docs/components/sidebar
*/

export function SidebarTrigger({
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  className,
  onPress,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      aria-label={!ariaLabel && !ariaLabelledBy ? "Toggle sidebar" : ariaLabel}
      aria-labelledby={ariaLabelledBy}
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={composeTailwindRenderProps(className, "size-7")}
      onPress={(e) => {
        onPress?.(e);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
    </Button>
  );
}

/**
 * Derived from shadcn SidebarMenu
 */
export function SidebarListBox<T extends object>({
  className,
  ...props
}: Rac.ListBoxProps<T>) {
  return (
    <Rac.ListBox<T>
      className={composeTailwindRenderProps(
        className,
        "flex w-full min-w-0 flex-col gap-1",
      )}
      data-slot="sidebar-listbox"
      {...props}
    />
  );
}

export const sidebarListBoxItemStyles = tv({
  base: [
    "group/menu-item relative", // from SidebarMenuItem
    "peer/menu-button outline-hidden ring-sidebar-ring flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm transition-[width,height,padding]",
    "group-has-data-[sidebar=menu-action]/menu-item:pr-8", // Adjusted from -has-data-[sidebar=menu-action]/menu-item:pr-8
    "[&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
    // States from sidebarMenuButtonVariants
    "data-[hovered]:bg-sidebar-accent data-[hovered]:text-sidebar-accent-foreground",
    "data-[focused]:ring-2", // from focus-visible:ring-2
    "data-[focus-visible]:ring-2", // RAC uses focus-visible
    "data-[pressed]:bg-sidebar-accent data-[pressed]:text-sidebar-accent-foreground", // from active:
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    "data-[selected]:bg-sidebar-accent data-[selected]:text-sidebar-accent-foreground data-[selected]:font-medium", // from data-[active=true]
    // data-[state=open] is not directly applicable to ListBoxItem, but hover styles are covered
    "group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!", // These are from the parent context, might need adjustment or removal if not applicable via RAC props
  ],
  variants: {
    variant: {
      default:
        "data-[hovered]:bg-sidebar-accent data-[hovered]:text-sidebar-accent-foreground", // from hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
      outline:
        "bg-background data-[hovered]:bg-sidebar-accent data-[hovered]:text-sidebar-accent-foreground shadow-[0_0_0_1px_hsl(var(--sidebar-border))] data-[hovered]:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
    },
    size: {
      default: "h-8 text-sm",
      sm: "h-7 text-xs",
      lg: "group-data-[collapsible=icon]:p-0! h-12 text-sm", // This might also need context adjustment
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface SidebarListBoxItemProps<T extends object = object>
  extends Rac.ListBoxItemProps<T>,
    VariantProps<typeof sidebarListBoxItemStyles> {}

/**
 * Derived from shadcn SidebarMenuButton and SidebarMenuItem
 */
export const SidebarListBoxItem = <T extends object>({
  className,
  variant,
  size,
  ...props
}: SidebarListBoxItemProps<T>) => {
  return (
    <Rac.ListBoxItem<T>
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        sidebarListBoxItemStyles({
          ...renderProps,
          variant,
          size,
          className,
        }),
      )}
    />
  );
};
