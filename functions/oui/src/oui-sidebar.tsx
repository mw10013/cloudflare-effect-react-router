import * as React from "react";
import { useSidebar } from "@workspace/ui/components/sidebar";
import { PanelLeftIcon } from "lucide-react";
import { composeTailwindRenderProps } from "./oui-base";
import { Button } from "./oui-button";

/*
#fetch https://ui.shadcn.com/docs/components/sidebar
*/

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
