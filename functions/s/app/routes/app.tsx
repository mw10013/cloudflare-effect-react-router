import type { Route } from './+types/app'
import { Effect } from 'effect'
import { Outlet, redirect } from 'react-router'
import * as ReactRouter from '~/lib/ReactRouter'

export const appMiddleware: Route.unstable_MiddlewareFunction = ReactRouter.middlewareEffect(({ context }) =>
  Effect.gen(function* () {
    const sessionUser = context.get(ReactRouter.appLoadContext).session.get('sessionUser')
    if (!sessionUser) {
      return yield* Effect.fail(redirect('/authenticate'))
    }
    if (sessionUser.userType !== 'customer') {
      return yield* Effect.fail(new Response('Forbidden', { status: 403 }))
    }
  })
)

export const unstable_middleware = [appMiddleware]

export default function RouteComponent() {
  return <Outlet />
}
