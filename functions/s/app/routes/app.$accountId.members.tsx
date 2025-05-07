import type { Route } from './+types/app.$accountId.members'
import { Effect } from 'effect'
import * as ReactRouter from '~/lib/ReactRouter'

export const loader = ReactRouter.routeEffect(({ context }) =>
  Effect.gen(function* () {
    const appLoadContext = context.get(ReactRouter.appLoadContext)
    return { account: appLoadContext.account }
  })
)

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="">
      Members
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  )
}
