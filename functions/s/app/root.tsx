import type { NavigateOptions } from 'react-router'
import type { Route } from './+types/root'
import { RouterProvider } from 'react-aria-components'
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useHref, useNavigate } from 'react-router'
import './app.css'
import type { SessionData } from './lib/Domain'
import { createWorkersKVSessionStorage } from '@react-router/cloudflare'
import { Effect } from 'effect'
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
import * as ReactRouter from '~/lib/ReactRouter'

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NavigateOptions
  }
}

export const sessionMiddleware = ReactRouter.middlewareEffect(
  ({ request, context }: Parameters<Route.unstable_MiddlewareFunction>[0], next) =>
    Effect.gen(function* () {
      const appLoadContext = context.get(ReactRouter.appLoadContext)
      const { getSession, commitSession, destroySession } = createWorkersKVSessionStorage<SessionData>({
        cookie: {
          name: appLoadContext.cloudflare.env.ENVIRONMENT === 'local' ? 'local-session' : '__Host-session',
          maxAge: 60 * 60 * 24, // 1 day
          path: '/',
          httpOnly: true,
          sameSite: 'lax',
          secrets: [appLoadContext.cloudflare.env.COOKIE_SECRET],
          secure: appLoadContext.cloudflare.env.ENVIRONMENT !== 'local'
        },
        kv: appLoadContext.cloudflare.env.KV
      })
      const session = yield* Effect.tryPromise({
        try: () => getSession(request.headers.get('Cookie')),
        catch: (unknown) => new Error(`Failed to get session: ${unknown}`)
      })
      context.set(ReactRouter.appLoadContext, {
        ...appLoadContext,
        session,
        sessionAction: 'commit'
      })
      yield* Effect.log({ message: `sessionMiddleware: Loaded session`, sessionUser: session.get('sessionUser') })

      const response = yield* Effect.tryPromise({
        try: () => Promise.resolve(next()),
        catch: (unknown) => new Error(`sessionMiddleware: downstream middleware/handler failed: ${unknown}`)
      })
      const nextAppLoadContext = context.get(ReactRouter.appLoadContext)
      if (nextAppLoadContext.sessionAction === 'destroy') {
        response.headers.set(
          'Set-Cookie',
          yield* Effect.tryPromise({
            try: () => destroySession(session),
            catch: (unknown) => new Error(`Failed to destroy session: ${unknown}`)
          })
        )
        return response
      }
      response.headers.set(
        'Set-Cookie',
        yield* Effect.tryPromise({
          try: () => commitSession(session),
          catch: (unknown) => new Error(`Failed to commit session: ${unknown}`)
        })
      )
      return response
    })
)

export const sessionMiddleware1: Route.unstable_MiddlewareFunction = async ({ request, context }, next) => {
  const appLoadContext = context.get(ReactRouter.appLoadContext)
  if (!appLoadContext) {
    throw new Error('AppLoadContext not found in session middleware.')
  }
  const { getSession, commitSession, destroySession } = createWorkersKVSessionStorage<SessionData>({
    cookie: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes
      // // Relax cookie constraints for local development without https
      name: appLoadContext.cloudflare.env.ENVIRONMENT === 'local' ? 'local-session' : '__Host-session',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secrets: [appLoadContext.cloudflare.env.COOKIE_SECRET],
      secure: appLoadContext.cloudflare.env.ENVIRONMENT !== 'local'
    },
    kv: appLoadContext.cloudflare.env.KV
  })
  const session = await getSession(request.headers.get('Cookie'))
  context.set(ReactRouter.appLoadContext, {
    ...appLoadContext,
    session,
    sessionAction: 'commit'
  })
  console.log({ message: `sessionMiddleware: sessionUser`, sessionData: session.data })
  const response = await next()
  const nextAppLoadContext = context.get(ReactRouter.appLoadContext)
  const action = nextAppLoadContext.sessionAction
  if (action === 'destroy') {
    response.headers.set('Set-Cookie', await destroySession(session))
    return response
  }
  response.headers.set('Set-Cookie', await commitSession(session))
  return response
}

export const unstable_middleware = [sessionMiddleware]

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
      <body className="min-h-svh font-sans antialiased">
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
