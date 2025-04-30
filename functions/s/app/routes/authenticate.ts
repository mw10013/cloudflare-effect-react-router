import type { Route } from './+types/authenticate'
import { Effect } from 'effect'
import { redirect } from 'react-router'
import * as ReactRouter from '~/lib/ReactRouter'

// /authorize taken by OpenAuth

export const loader = ReactRouter.routeEffect(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    const appLoadContext = context.get(ReactRouter.appLoadContext)
    yield* Effect.log({ message: 'authenticate loader', sessionUser: appLoadContext.session.get('sessionUser') })
    if (appLoadContext.session.get('sessionUser')) {
      return redirect('/')
    }
    const { url } = yield* Effect.tryPromise(() => appLoadContext.client.authorize(appLoadContext.redirectUri, 'code'))
    return redirect(url)
  })
)
