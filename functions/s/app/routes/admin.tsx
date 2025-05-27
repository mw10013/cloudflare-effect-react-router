import type { Route } from "./+types/admin";
import * as Oui from "@workspace/oui";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarProvider,
} from "@workspace/ui/components/ui/sidebar";
import { Effect } from "effect";
import { Outlet, redirect } from "react-router";
import * as ReactRouter from "~/lib/ReactRouter";

export const adminMiddleware: Route.unstable_MiddlewareFunction =
  ReactRouter.middlewareEffect(({ context }) =>
    Effect.gen(function* () {
      const sessionUser = context
        .get(ReactRouter.appLoadContext)
        .session.get("sessionUser");
      if (!sessionUser) {
        return yield* Effect.fail(redirect("/authenticate"));
      }
      if (sessionUser.userType !== "staffer") {
        return yield* Effect.fail(new Response("Forbidden", { status: 403 }));
      }
    }),
  );

export const unstable_middleware = [adminMiddleware];

const items = [
  {
    id: "SaaS",
    href: "/",
  },
  {
    id: "Admin",
    href: "/admin",
  },
  {
    id: "Customers",
    href: "/admin/customers",
  },
  {
    id: "Stripe",
    href: "/admin/stripe",
  },
  {
    id: "Effect",
    href: "/effect",
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
          <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <Oui.SidebarListBox aria-label="Admin Panel" items={items}>
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
    <div className="">
      <SidebarProvider>
        <AppSidebar />
        <main>
          <Oui.SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}
