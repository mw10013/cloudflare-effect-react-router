import type { Route as MktRoute } from './+types/_mkt' // Import type from parent route
import type { Route } from './+types/_mkt._index'
import * as Oui from '@workspace/oui'
import { Effect } from 'effect'
import * as Rac from 'react-aria-components'
import { useRouteLoaderData } from 'react-router'
import * as ReactRouter from '~/lib/ReactRouter'

export const loader = ReactRouter.routeEffect(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    const alc = context.get(ReactRouter.appLoadContext)
    return { message: `ENVIRONMENT: ${alc.cloudflare.env.ENVIRONMENT}` }
  })
)

export default function RouteComponent() {
  const mktRouteLoaderData = useRouteLoaderData<MktRoute.ComponentProps['loaderData']>('routes/_mkt')
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-6">
      <h1 className="text-center text-6xl font-bold tracking-tighter md:text-8xl">SaaS</h1>
      <div className="mt-8">
        {mktRouteLoaderData?.sessionUser ? (
          <Rac.Link href={mktRouteLoaderData.sessionUser.userType === 'staffer' ? '/admin' : '/app'}>Enter</Rac.Link>
        ) : (
          <a href="/authenticate">Get Started</a>
        )}
      </div>
    </div>
  )
}
