import * as React from "react";
import { useSidebar } from "@workspace/ui/components/ui/sidebar";
import { PanelLeftIcon } from "lucide-react";
import * as Rac from "react-aria-components";
import { tv, VariantProps } from "tailwind-variants";
import { composeTailwindRenderProps } from "./oui-base";
import { Button } from "./oui-button";

/*
#fetch https://ui.shadcn.com/docs/components/sidebar
*/

export const sidebarMenuButtonStyles = tv({
  base: [
    "peer/menu-button ring-sidebar-ring flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none",
    "transition-[width,height,padding]",
    // RAC data attributes for states
    "data-[hovered]:bg-sidebar-accent data-[hovered]:text-sidebar-accent-foreground",
    "data-[focus-visible]:ring-2", // Assumes ring color is set by `ring-sidebar-ring`
    "data-[pressed]:bg-sidebar-accent data-[pressed]:text-sidebar-accent-foreground",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    // Custom data attributes from original CVA, targeted directly
    "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[active=true]:font-medium",
    // Handles hover specifically when data-state=open is present on the button
    "data-[state=open]:data-[hovered]:bg-sidebar-accent data-[state=open]:data-[hovered]:text-sidebar-accent-foreground",
    // Group specific styles based on parent/sibling data attributes
    "group-has-data-[sidebar=menu-action]/menu-item:pr-8", // Applied if a sibling element with class "menu-item" has a child with data-sidebar="menu-action"
    "group-data-[collapsible=icon]:size-8!", // Applied if an ancestor with "group" class has data-collapsible="icon"
    "group-data-[collapsible=icon]:p-2!",
    // Child element styles
    "[&>a>span:last-child]:truncate [&>a>svg]:size-4 [&>a>svg]:shrink-0",
  ],
  variants: {
    variant: {
      default: "", // Hover styles are in base; default variant doesn't need to re-specify them.
      outline: [
        "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))]",
        "data-[hovered]:bg-sidebar-accent data-[hovered]:text-sidebar-accent-foreground",
        "data-[hovered]:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      ],
    },
    size: {
      default: "h-8 text-sm",
      sm: "h-7 text-xs",
      lg: "group-data-[collapsible=icon]:p-0! h-12 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface SidebarMenuButtonProps
  extends Rac.ButtonProps,
    VariantProps<typeof sidebarMenuButtonStyles> {
  isActive?: boolean;
}

export function SidebarMenuButton({
  className,
  variant,
  size,
  isActive,
  ...props
}: SidebarMenuButtonProps) {
  return (
    <Rac.Button
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive || undefined}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        sidebarMenuButtonStyles({
          ...renderProps,
          variant,
          size,
          className,
        }),
      )}
      {...props}
    />
  );
}

export function SidebarTrigger({
  className,
  onPress,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
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
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
