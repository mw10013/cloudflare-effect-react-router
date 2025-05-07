import type { Route } from './+types/app.$accountId'
import { Effect, Schema } from 'effect'
import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut, Sparkles } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { Outlet, redirect, useParams } from 'react-router'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import * as Oui from '~/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '~/components/ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar
} from '~/components/ui/sidebar'
import { Account, SessionUser } from '~/lib/Domain'
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

export const loader = ReactRouter.routeEffect(({ context }) =>
  Effect.gen(function* () {
    const sessionUser = yield* Effect.fromNullable(context.get(ReactRouter.appLoadContext).session.get('sessionUser'))
    return { sessionUser, accounts: yield* IdentityMgr.getAccounts(sessionUser) }
  })
)

export default function RouteComponent({ loaderData: { sessionUser, accounts } }: Route.ComponentProps) {
  return (
    <div className="">
      <SidebarProvider>
        <AppSidebar sessionUser={sessionUser} accounts={accounts} />
        <main>
          <SidebarTrigger />
          <div className="flex flex-col gap-2 p-6">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}

export function AppSidebar({ sessionUser, accounts }: { sessionUser: SessionUser; accounts: Account[] }) {
  const { accountId } = useParams()
  const items = [
    {
      title: 'SaaS',
      url: '/'
    },
    {
      title: 'Accounts',
      url: '/app'
    },
    {
      title: 'Account Home',
      url: `/app/${accountId}`
    },
    {
      title: 'Members',
      url: `/app/${accountId}/members`
    },
    {
      title: 'Billing',
      url: `/app/${accountId}/billing`
    }
  ]

  return (
    <Sidebar>
      <SidebarHeader>Header</SidebarHeader>
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
      <SidebarFooter>
        <NavUser
          user={{
            name: 'shadcn',
            email: sessionUser.email,
            avatar: '/avatars/shadcn.jpg'
          }}
        />
      </SidebarFooter>
    </Sidebar>
  )
}

export function NavUser({
  user
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              <Rac.Form action="/signout" method="post">
                <Oui.Button type="submit">Sign Out</Oui.Button>
              </Rac.Form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
