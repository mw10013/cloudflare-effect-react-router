import type { SessionData } from '~/lib/Domain'
import type { Route } from './+types/foo'
import { createWorkersKVSessionStorage } from '@react-router/cloudflare'
import app from 'workers/app'
import * as ReactRouter from '~/lib/ReactRouter'

export const sessionMiddleware: Route.unstable_MiddlewareFunction = async ({ request, context }, next) => {
  const appLoadContext = context.get(ReactRouter.appLoadContext)
  const { getSession, commitSession, destroySession } = createWorkersKVSessionStorage<SessionData>({
    cookie: {
      name: '__Host-session', // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secrets: [appLoadContext.cloudflare.env.COOKIE_SECRET],
      secure: true
    },
    kv: appLoadContext.cloudflare.env.KV
  })
  const session = await getSession(request.headers.get('Cookie'))
  const sessionUser = session.get('sessionUser')
  console.log({ message: `sessionMiddleware: sessionUser`, sessionUser, ENVIRONMENT: appLoadContext.cloudflare.env.ENVIRONMENT })

  await next()
}

export const unstable_middleware = [sessionMiddleware]

export async function loader({ context }: Route.LoaderArgs) {
  const ctx = context.get(ReactRouter.appLoadContext)
  return { ctx }
}

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh flex-row justify-center gap-2 p-6">
      foo1
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  )
}
