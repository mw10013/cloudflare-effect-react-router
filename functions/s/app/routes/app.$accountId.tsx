import type { Route } from './+types/app.$accountId'
import { Effect, Schema } from 'effect'
import { Outlet, redirect } from 'react-router'
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
import { Account } from '~/lib/Domain'
import { IdentityMgr } from '~/lib/IdentityMgr'
import * as ReactRouter from '~/lib/ReactRouter'
import * as Rac from 'react-aria-components'

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

const items = [
  {
    title: 'SaaS',
    url: '/'
  },
  {
    title: 'Accounts',
    url: '/app'
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>App Panel</SidebarGroupLabel>
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

export default function RouteComponent() {
  return (
    <div className="">
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  )
}
