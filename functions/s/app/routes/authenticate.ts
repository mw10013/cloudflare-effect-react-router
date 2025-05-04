import type { Route } from './+types/authenticate'
import { Effect } from 'effect'
import { redirect } from 'react-router'
import * as ReactRouter from '~/lib/ReactRouter'

// /authorize taken by OpenAuth

export const loader = ReactRouter.routeEffect(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    const appLoadContext = context.get(ReactRouter.appLoadContext)
    if (appLoadContext.session.get('sessionUser')) {
      return redirect('/')
    }
    const { url } = yield* Effect.tryPromise(() => appLoadContext.openAuth.client.authorize(appLoadContext.openAuth.redirectUri, 'code'))
    return redirect(url)
  })
)
