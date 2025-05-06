import type { Route } from './+types/app.$accountId'
import { Effect } from 'effect'
import { Outlet } from 'react-router'
import * as ReactRouter from '~/lib/ReactRouter'

type T = Parameters<Route.unstable_MiddlewareFunction>[0]

const mw: Route.unstable_MiddlewareFunction = ({params}) => undefined

// export const accountMiddleware = ReactRouter.middlewareEffect(({ context }: Parameters<Route.unstable_MiddlewareFunction>[0]) =>
//   Effect.gen(function* () {

//   )

// export const unstable_middleware = [accountMiddleware]


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
