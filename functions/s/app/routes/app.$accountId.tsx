import type { AppLoadContext, Params, unstable_MiddlewareFunction } from 'react-router' // Added Params
import type { Route } from './+types/app.$accountId'
import { Cause, Effect, Exit, ManagedRuntime, Schema } from 'effect'
import { Outlet, redirect, unstable_RouterContextProvider } from 'react-router'
import { Account } from '~/lib/Domain'
import { IdentityMgr } from '~/lib/IdentityMgr'
import * as ReactRouter from '~/lib/ReactRouter'

const accountMiddleware: Route.unstable_MiddlewareFunction = ReactRouter.middlewareEffect(({ params, context }) =>
  Effect.gen(function* () {
    const appLoadContext = context.get(ReactRouter.appLoadContext)
    const AccountIdFromPath = Schema.compose(Schema.NumberFromString, Account.fields.accountId)
    const accountId = yield* Schema.decodeUnknown(AccountIdFromPath)(params.accountId)
    const account = yield* Effect.fromNullable(appLoadContext.session.get('sessionUser')).pipe(
      Effect.flatMap((sessionUser) =>
        IdentityMgr.getAccountForMember({
          accountId,
          userId: sessionUser.userId
        })
      ),
      Effect.tapError((e) => Effect.log(`accountMiddleware accountId error:`, e)),
      Effect.orElseSucceed(() => null)
    )
    if (!account) {
      return yield* Effect.fail(redirect('/app'))
    }
    context.set(ReactRouter.appLoadContext, {
      ...appLoadContext,
      account
    })
  })
)

export const unstable_middleware = [accountMiddleware]

/*
  app.use(
    'app/:accountId/*',
    middleware((c, next) =>
      Effect.gen(function* () {
        const AccountIdFromPath = Schema.compose(Schema.NumberFromString, Account.fields.accountId)
        const accountId = yield* Schema.decodeUnknown(AccountIdFromPath)(c.req.param('accountId'))
        const account = yield* Effect.fromNullable(c.var.sessionData.sessionUser).pipe(
          Effect.flatMap((sessionUser) =>
            IdentityMgr.getAccountForMember({
              accountId,
              userId: sessionUser.userId
            })
          ),
          Effect.tapError((e) => Effect.log(`middleware accountId error:`, e)),
          Effect.orElseSucceed(() => null)
        )
        if (!account) {
          return c.redirect('/app')
        }
        c.set('account', account)
        yield* Effect.tryPromise(() => next())
      })
    )
  )
*/

export default function RouteComponent() {
  return (
    <div className="p-6">
      <Outlet />
    </div>
  )
}
