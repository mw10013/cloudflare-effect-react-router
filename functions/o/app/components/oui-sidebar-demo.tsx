import * as Oui from "@workspace/oui";
import * as Rac from "react-aria-components";

export function OuiSidebarDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Oui.SidebarProvider
        triggerElement={<Oui.Button>Open Sidebar</Oui.Button>}
        side="left"
      >
        <Oui.SidebarHeader>
          <Oui.Heading level={2}>Sidebar Title</Oui.Heading>
        </Oui.SidebarHeader>
        <Oui.SidebarContent>
          <Oui.SidebarMenu>
            <Oui.SidebarMenuItem>
              <Oui.SidebarMenuButton>Menu Item 1</Oui.SidebarMenuButton>
            </Oui.SidebarMenuItem>
            <Oui.SidebarMenuItem>
              <Oui.SidebarMenuButton>Menu Item 2</Oui.SidebarMenuButton>
            </Oui.SidebarMenuItem>
            <Oui.SidebarGroup>
              <Oui.SidebarGroupLabel>Group 1</Oui.SidebarGroupLabel>
              <Oui.SidebarMenuItem>
                <Oui.SidebarMenuButton>Group Item 1.1</Oui.SidebarMenuButton>
              </Oui.SidebarMenuItem>
              <Oui.SidebarMenuItem>
                <Oui.SidebarMenuButton>Group Item 1.2</Oui.SidebarMenuButton>
              </Oui.SidebarMenuItem>
            </Oui.SidebarGroup>
          </Oui.SidebarMenu>
        </Oui.SidebarContent>
        <Oui.SidebarFooter>
          <p className="text-sm">Sidebar Footer</p>
        </Oui.SidebarFooter>
      </Oui.SidebarProvider>
    </div>
  );
}
