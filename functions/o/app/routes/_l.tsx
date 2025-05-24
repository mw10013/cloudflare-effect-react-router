import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/ui/sidebar";
import * as Rac from "react-aria-components";
import { Outlet } from "react-router";

const items = [
  {
    title: "Accordion",
    url: "/demo/accordion",
  },
  {
    title: "Autocomplete",
    url: "/demo/autocomplete",
  },
  {
    title: "Button",
    url: "/demo/button",
  },
  {
    title: "Checkbox",
    url: "/demo/checkbox",
  },
  {
    title: "Combo Box",
    url: "/demo/combo-box",
  },
  {
    title: "Dialog",
    url: "/demo/dialog",
  },
  {
    title: "Form",
    url: "/demo/form",
  },
  {
    title: "Input",
    url: "/demo/input",
  },
  {
    title: "Label",
    url: "/demo/label",
  },
  {
    title: "Link",
    url: "/demo/link",
  },
  {
    title: "Menu",
    url: "/demo/menu",
  },
  {
    title: "Modal",
    url: "/demo/modal",
  },
  {
    title: "Number Field",
    url: "/demo/number-field",
  },
  // {
  //   title: "Pagination",
  //   url: "/demo/pagination",
  // },
  {
    title: "Popover",
    url: "/demo/popover",
  },
  // {
  //   title: "Progress",
  //   url: "/demo/progress",
  // },
  {
    title: "Radio Group",
    url: "/demo/radio-group",
  },
  {
    title: "Search Field",
    url: "/demo/search-field",
  },
  {
    title: "Select",
    url: "/demo/select",
  },
  {
    title: "Separator",
    url: "/demo/separator",
  },
  {
    title: "Sheet",
    url: "/demo/sheet",
  },
  {
    title: "Sidebar",
    url: "/demo/sidebar",
  },
  {
    title: "Slider",
    url: "/demo/slider",
  },
  {
    title: "Switch",
    url: "/demo/switch",
  },
  {
    title: "Table",
    url: "/demo/table",
  },
  {
    title: "Text Field",
    url: "/demo/text-field",
  },
  {
    title: "Toast",
    url: "/demo/toast",
  },
  {
    title: "Sandbox",
    url: "/sandbox",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Rac.Link href={item.url}>
                      <span>{item.title}</span>
                    </Rac.Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
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
      <main className="flex-grow">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
