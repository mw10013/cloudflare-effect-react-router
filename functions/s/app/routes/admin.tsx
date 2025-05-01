import type { Route } from './+types/app._index'
import * as Rac from 'react-aria-components'
import { Outlet } from 'react-router'
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

const items = [
  {
    title: 'SaaS',
    url: '/'
  },
  {
    title: 'Checkbox',
    url: '/demo/checkbox'
  },
  {
    title: 'Form',
    url: '/demo/form'
  },
  {
    title: 'Number Field',
    url: '/demo/number-field'
  },
  {
    title: 'Radio Group',
    url: '/demo/radio-group'
  },
  {
    title: 'Text Field',
    url: '/demo/text-field'
  },
  {
    title: 'Link',
    url: '/play/link'
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
