import type { Route } from './+types/app.$accountId'
import React from 'react'
import * as Oui from '@workspace/oui'
import { Effect, Schema } from 'effect'
import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  Command,
  CreditCard,
  GalleryVerticalEnd,
  LogOut,
  Plus,
  Sparkles
} from 'lucide-react'
import * as Rac from 'react-aria-components'
import { Outlet, redirect, useParams } from 'react-router'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
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

export function AppSidebar({ sessionUser, accounts: allAccountsData }: { sessionUser: SessionUser; accounts: Account[] }) {
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

  const YourAppLogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 100" {...props}>
      <circle cx="50" cy="50" r="40" fill="currentColor" />
    </svg>
  )

  const switcherAccounts = allAccountsData.map((acc) => ({
    name: `Account ${acc.accountId}` // Use accountId to generate a display name
    // logo and plan can be added here if available on 'acc' and needed by AccountSwitcher
  }))

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex w-full items-center gap-2 p-2">
          <Rac.Link href="/" aria-label="Home">
            <YourAppLogoIcon className="text-primary size-7" />
          </Rac.Link>
          {switcherAccounts.length > 0 && <AccountSwitcher accounts={switcherAccounts} />}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
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

export function AccountSwitcher({
  accounts
}: {
  accounts: {
    name: string
    logo?: React.ElementType
    plan?: string
  }[]
}) {
  const [activeAccount, setActiveAccount] = React.useState(accounts[0])

  if (!activeAccount) {
    return null
  }

  const handleAccountSelection = (key: React.Key) => {
    const selectedAccount = accounts.find((acc) => acc.name === key)
    if (selectedAccount) {
      setActiveAccount(selectedAccount)
    }
  }

  return (
    <Oui.MenuEx
      className="min-w-56 rounded-lg"
      onAction={handleAccountSelection}
      triggerElement={
        <Oui.Button
          variant="ghost"
          // Corrected classes:
          // - Removed data-[open=true] styles as they don't apply directly to Rac.Button from MenuTrigger.
          // - Changed hover: to data-[hovered]:
          // - Kept layout/sizing overrides.
          // - The data-[hovered]:bg-transparent will override the default hover background of the ghost variant.
          className="h-auto flex-1 items-center justify-between p-0 text-left font-medium data-[hovered]:bg-transparent"
        >
          <div className="grid leading-tight">
            <span className="truncate font-medium">{activeAccount.name}</span>
            {activeAccount.plan && <span className="text-muted-foreground truncate text-xs">{activeAccount.plan}</span>}
          </div>
          <ChevronsUpDown className="text-muted-foreground ml-2 size-4" />
        </Oui.Button>
      }
    >
      <Rac.MenuSection>
        <Oui.Header>Switch Account</Oui.Header>
        {accounts.map((account) => (
          <Oui.MenuItem key={account.name} id={account.name} textValue={account.name} className="p-2">
            {account.name}
          </Oui.MenuItem>
        ))}
      </Rac.MenuSection>
    </Oui.MenuEx>
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
        <Oui.MenuEx
          className="min-w-56 rounded-lg"
          triggerElement={
            <Oui.Button
              variant="ghost"
              className="data-[hovered]:bg-sidebar-accent data-[hovered]:text-sidebar-accent-foreground data-[pressed]:bg-sidebar-accent data-[pressed]:text-sidebar-accent-foreground h-12 w-full justify-start overflow-hidden rounded-md p-2 text-left text-sm font-normal"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </Oui.Button>
          }
        >
          <Rac.MenuSection>
            <Rac.Header>
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
            </Rac.Header>
          </Rac.MenuSection>
          <Oui.Separator variant="menu" />
          <Rac.MenuSection>
            <Oui.MenuItem id="upgradeToPro" textValue="Upgrade to Pro">
              <Sparkles className="mr-2 size-4" />
              Upgrade to Pro
            </Oui.MenuItem>
          </Rac.MenuSection>
          <Oui.Separator variant="menu" />
          <Rac.MenuSection>
            <Oui.MenuItem id="account" textValue="Account">
              <BadgeCheck className="mr-2 size-4" />
              Account
            </Oui.MenuItem>
            <Oui.MenuItem id="billing" textValue="Billing">
              <CreditCard className="mr-2 size-4" />
              Billing
            </Oui.MenuItem>
            <Oui.MenuItem id="notifications" textValue="Notifications">
              <Bell className="mr-2 size-4" />
              Notifications
            </Oui.MenuItem>
          </Rac.MenuSection>
          <Oui.Separator variant="menu" />
          <Oui.MenuItem id="signOut" textValue="Sign Out">
            <LogOut className="mr-2 size-4" />
            <Rac.Form action="/signout" method="post" className="contents">
              <Oui.Button type="submit" variant="ghost">
                Sign Out
              </Oui.Button>
            </Rac.Form>
          </Oui.MenuItem>
        </Oui.MenuEx>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
