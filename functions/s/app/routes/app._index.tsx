import type { Route } from './+types/app._index'
import { Effect } from 'effect'
import * as Rac from 'react-aria-components'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
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
import { IdentityMgr } from '~/lib/IdentityMgr'
import * as ReactRouter from '~/lib/ReactRouter'

export const loader = ReactRouter.routeEffect(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    const sessionUser = yield* Effect.fromNullable(context.get(ReactRouter.appLoadContext).session.get('sessionUser'))
    return {
      invitations: yield* IdentityMgr.getInvitations(sessionUser),
      accounts: yield* IdentityMgr.getAccounts(sessionUser)
    }
  })
)

const items = [
  {
    title: 'SaaS',
    url: '/'
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>App Panel</SidebarGroupLabel> */}
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

export default function RouteComponent({ loaderData: { invitations, accounts } }: Route.ComponentProps) {
  return (
    <div className="">
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <div className="flex flex-col gap-6 p-6">
            {invitations.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Invitations</CardTitle>
                  <CardDescription>Invitations awaiting your response.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-4">
                    {invitations.map((m) => (
                      <li
                        key={m.accountMemberId}
                        className="flex items-center justify-between gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="flex-grow">
                          <Rac.Link href={`/app/${m.accountId}`} className="text-sm font-medium hover:underline">
                            {m.account.user.email}
                          </Rac.Link>
                        </div>
                        <div className="flex gap-2">
                          {/* TODO: Implement form submission logic */}
                          <form action="/app" method="post">
                            <input type="hidden" name="accountMemberId" value={m.accountMemberId} />
                            <Button type="submit" name="intent" value="accept" variant="outline" size="sm">
                              Accept
                            </Button>
                          </form>
                          <form action="/app" method="post">
                            <input type="hidden" name="accountMemberId" value={m.accountMemberId} />
                            <Button type="submit" name="intent" value="decline" variant="destructive" size="sm">
                              Decline
                            </Button>
                          </form>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            <Card>
              <CardHeader>
                <CardTitle>Accounts</CardTitle>
                <CardDescription>Accounts you are a member of.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-4">
                  {accounts.map((a) => (
                    <li key={a.accountId} className="flex items-center justify-between gap-4 border-b pb-4 last:border-b-0 last:pb-0">
                      <div className="flex-grow">
                        <Rac.Link href={`/app/${a.accountId}`} className="text-sm font-medium hover:underline">
                          {a.user.email}
                        </Rac.Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <pre className="text-xs">{JSON.stringify({ invitations, accounts }, null, 2)}</pre>
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}
