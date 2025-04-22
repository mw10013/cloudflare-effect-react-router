import type { NavigateOptions } from 'react-router'
import type { Route } from './+types/root'
import { RouterProvider } from 'react-aria-components'
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useHref, useNavigate } from 'react-router'
import './app.css'
import * as Rac from 'react-aria-components'
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

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NavigateOptions
  }
}

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
  }
]

// https://github.com/adobe/react-spectrum/issues/6397
// https://github.com/argos-ci/argos/blob/4822931b05c78e1b4a79e15cf4437fb0297369a6/apps/frontend/src/router.tsx#L21-L31
function useHrefEx(href: string) {
  const resolvedHref = useHref(href)
  if (href.startsWith('https://') || href.startsWith('http://') || href.startsWith('mailto:')) {
    return href
  }
  return resolvedHref
}

const items = [
  {
    title: 'Button',
    url: '/demo/button'
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

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <RouterProvider navigate={navigate} useHref={useHrefEx}>
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
          <ScrollRestoration />
          <Scripts />
        </RouterProvider>
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
