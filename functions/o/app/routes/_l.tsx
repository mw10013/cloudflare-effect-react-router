import * as Oui from "@workspace/oui";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/ui/sidebar";
import { Outlet } from "react-router";

const items = [
  {
    id: "Accordion",
    href: "/demo/accordion",
  },
  {
    id: "Autocomplete",
    href: "/demo/autocomplete",
  },
  {
    id: "Button",
    href: "/demo/button",
  },
  {
    id: "Checkbox",
    href: "/demo/checkbox",
  },
  {
    id: "Combo Box",
    href: "/demo/combo-box",
  },
  {
    id: "Dialog",
    href: "/demo/dialog",
  },
  {
    id: "Form",
    href: "/demo/form",
  },
  {
    id: "Input",
    href: "/demo/input",
  },
  {
    id: "Label",
    href: "/demo/label",
  },
  {
    id: "Link",
    href: "/demo/link",
  },
  {
    id: "Menu",
    href: "/demo/menu",
  },
  {
    id: "Modal",
    href: "/demo/modal",
  },
  {
    id: "Number Field",
    href: "/demo/number-field",
  },
  // {
  //   id: "Pagination",
  //   href: "/demo/pagination",
  // },
  {
    id: "Popover",
    href: "/demo/popover",
  },
  // {
  //   id: "Progress",
  //   href: "/demo/progress",
  // },
  {
    id: "Radio Group",
    href: "/demo/radio-group",
  },
  {
    id: "Search Field",
    href: "/demo/search-field",
  },
  {
    id: "Select",
    href: "/demo/select",
  },
  {
    id: "Separator",
    href: "/demo/separator",
  },
  {
    id: "Sheet",
    href: "/demo/sheet",
  },
  {
    id: "Sidebar",
    href: "/demo/sidebar",
  },
  {
    id: "Slider",
    href: "/demo/slider",
  },
  {
    id: "Switch",
    href: "/demo/switch",
  },
  {
    id: "Table",
    href: "/demo/table",
  },
  {
    id: "Text Field",
    href: "/demo/text-field",
  },
  {
    id: "Toast",
    href: "/demo/toast",
  },
  {
    id: "Sandbox",
    href: "/sandbox",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <Oui.SidebarListBox aria-label="Components" items={items}>
              {(item) => (
                <Oui.SidebarListBoxItem key={item.id} href={item.href}>
                  {item.id}
                </Oui.SidebarListBoxItem>
              )}
            </Oui.SidebarListBox>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <Oui.SidebarTrigger className="-ml-1" />
            <Oui.Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
