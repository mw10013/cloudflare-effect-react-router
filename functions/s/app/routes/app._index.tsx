import { Effect } from 'effect'
import { redirect } from 'react-router'
import { IdentityMgr } from '~/lib/IdentityMgr'
import * as ReactRouter from '~/lib/ReactRouter'

export const loader = ReactRouter.routeEffect(({ context }) =>
  Effect.gen(function* () {
    const sessionUser = yield* Effect.fromNullable(context.get(ReactRouter.appLoadContext).session.get('sessionUser'))
    const account = yield* IdentityMgr.getAccountForUser(sessionUser)
    return redirect(`/app/${account.accountId}`)
  })
)
