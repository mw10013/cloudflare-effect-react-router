import type { Route } from './+types/app._index'
import { Effect } from 'effect'
import * as Rac from 'react-aria-components'
import { Outlet, redirect } from 'react-router'
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
  SidebarTrigger
} from '~/components/ui/sidebar'
import * as ReactRouter from '~/lib/ReactRouter'

export const adminMiddleware: Route.unstable_MiddlewareFunction = ReactRouter.middlewareEffect(({ context }) =>
  Effect.gen(function* () {
    const sessionUser = context.get(ReactRouter.appLoadContext).session.get('sessionUser')
    if (!sessionUser) {
      return yield* Effect.fail(redirect('/authenticate'))
    }
    if (sessionUser.userType !== 'staffer') {
      return yield* Effect.fail(new Response('Forbidden', { status: 403 }))
    }
  })
)

export const unstable_middleware = [adminMiddleware]

const items = [
  {
    title: 'SaaS',
    url: '/'
  },
  {
    title: 'Admin',
    url: '/admin'
  },
  {
    title: 'Customers',
    url: '/admin/customers'
  },
  {
    title: 'Stripe',
    url: '/admin/stripe'
  },
  {
    title: 'Effect',
    url: '/effect'
  },
  {
    title: 'Sandbox',
    url: '/sandbox'
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
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
  )
}

export default function RouteComponent() {
  return (
    // <div className="flex min-h-svh flex-row justify-center gap-2 p-6">
    <div className="">
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  )
}
