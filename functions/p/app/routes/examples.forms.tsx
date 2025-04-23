import { Outlet, useLocation } from 'react-router'
import { twMerge } from 'tailwind-merge'
import * as Oui from '~/lib/components/oui/oui-index'

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/examples/forms',
  },
  {
    title: 'Account',
    href: '/examples/forms/account',
  },
  {
    title: 'Appearance',
    href: '/examples/forms/appearance',
  },
  {
    title: 'Notifications',
    href: '/examples/forms/notifications',
  },
  {
    title: 'Display',
    href: '/examples/forms/display',
  },
]

export default function RouteComponent() {
  return (
    <div className="container p-6">
      <section className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
        <div className="hidden space-y-6 p-10 pb-16 md:block">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">
              Manage your account settings and set e-mail preferences.
            </p>
          </div>
          <Oui.Separator className="my-6" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="flex-1 lg:max-w-2xl">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const { pathname } = useLocation()

  return (
    <nav
      className={twMerge(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
        className
      )}
      {...props}>
      {items.map((item) => (
        <Oui.LinkButton
          key={item.href}
          href={item.href}
          variant="ghost"
          className={twMerge(
            pathname === item.href
              ? 'bg-muted data-[hovered]:bg-muted'
              : 'data-[hovered]:bg-transparent data-[hovered]:underline',
            'justify-start'
          )}>
          {item.title}
        </Oui.LinkButton>
      ))}
    </nav>
  )
}
