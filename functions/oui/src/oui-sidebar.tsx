import type { VariantProps } from "tailwind-variants";
import * as React from "react";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { DialogEx1 } from "./oui-dialog";

/*
#fetch https://intentui.com/docs/2.x/components/layouts/sidebar
#fetch https://ui.shadcn.com/docs/components/sidebar
*/

const SIDEBAR_WIDTH = "16rem";

interface SidebarProviderProps {
  triggerElement: React.ReactElement;
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
  style?: React.CSSProperties;
}

export function SidebarProvider({
  triggerElement,
  children,
  side = "left",
  className,
  style,
}: SidebarProviderProps) {
  return (
    <DialogEx1
      triggerElement={triggerElement}
      side={side}
      modalClassName={twMerge(
        "h-full bg-sidebar text-sidebar-foreground p-0",
        "w-[--sidebar-panel-width]",
        className,
      )}
      style={
        {
          "--sidebar-panel-width": SIDEBAR_WIDTH,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className="flex h-full flex-col">{children}</div>
    </DialogEx1>
  );
}

export function SidebarHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "border-sidebar-border flex flex-col gap-2 border-b p-2",
        className,
      )}
      {...props}
    />
  );
}

export function SidebarContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-2",
        className,
      )}
      {...props}
    />
  );
}

export function SidebarFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "border-sidebar-border mt-auto flex flex-col gap-2 border-t p-2",
        className,
      )}
      {...props}
    />
  );
}

export function SidebarMenu({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={twMerge("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  );
}

export function SidebarMenuItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) {
  return <li className={twMerge("relative", className)} {...props} />;
}

const sidebarMenuButtonStyles = tv({
  base: "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none transition-colors focus-visible:ring-2 data-[active=true]:font-medium [&>svg]:size-4 [&>svg]:shrink-0",
});

interface SidebarMenuButtonProps extends Rac.ButtonProps {
  isActive?: boolean;
}

export function SidebarMenuButton({
  className,
  isActive,
  ...props
}: SidebarMenuButtonProps) {
  return (
    <Rac.Button
      data-active={isActive ? "true" : undefined}
      className={Rac.composeRenderProps(className, (userClasses) =>
        sidebarMenuButtonStyles({
          className: userClasses,
        }),
      )}
      {...props}
    />
  );
}

export function SidebarGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "relative flex w-full min-w-0 flex-col py-2",
        className,
      )}
      {...props}
    />
  );
}

export function SidebarGroupLabel({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "text-sidebar-foreground/70 mb-1 flex h-8 shrink-0 items-center px-2 text-xs font-medium",
        className,
      )}
      {...props}
    />
  );
}
