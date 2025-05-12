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
      <SidebarHeader>
        <TeamSwitcher
          teams={[
            {
              name: 'Acme Inc',
              logo: GalleryVerticalEnd,
              plan: 'Enterprise'
            },
            {
              name: 'Acme Corp.',
              logo: AudioWaveform,
              plan: 'Startup'
            },
            {
              name: 'Evil Corp.',
              logo: Command,
              plan: 'Free'
            }
          ]}
        />
        {/* <SidebarGroup className="py-0 group-data-[collapsible=icon]:hidden">
          <SidebarGroupContent>
            <form className="relative">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <SidebarInput
                id="search"
                placeholder="Search the docs..."
                className="pl-8"
              />
              <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
            </form>
          </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarHeader>
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

export function TeamSwitcher({
  teams
}: {
  teams: {
    name: string
    logo: React.ElementType // logo is no longer used in the rendered output
    plan: string
  }[]
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  const handleTeamSelection = (key: React.Key) => {
    const selectedTeam = teams.find((team) => team.name === key)
    if (selectedTeam) {
      setActiveTeam(selectedTeam)
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Oui.MenuEx
          className="min-w-56 rounded-lg"
          onAction={handleTeamSelection}
          triggerElement={
            <Oui.Button
              variant="ghost"
              className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[open=true]:bg-sidebar-accent data-[open=true]:text-sidebar-accent-foreground h-12 w-full justify-start overflow-hidden rounded-md p-3 text-left text-sm font-medium"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <activeTeam.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </Oui.Button>
          }
        >
          <Rac.MenuSection>
            <Oui.Header>Teams</Oui.Header>
            {teams.map((team) => (
              <Oui.MenuItem key={team.name} id={team.name} textValue={team.name} className="p-2">
                {team.name}
              </Oui.MenuItem>
            ))}
          </Rac.MenuSection>
          {/* The "Add team" section and its preceding separator are removed */}
        </Oui.MenuEx>
      </SidebarMenuItem>
    </SidebarMenu>
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
