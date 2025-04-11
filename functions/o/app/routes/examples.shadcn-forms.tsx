import { Outlet } from 'react-router'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from '~/lib/components/ui/button'
import { Separator } from '~/lib/components/ui/separator'

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/examples/shadcn-forms',
  },
  {
    title: 'Account',
    href: '/examples/shadcn-forms/account',
  },
  {
    title: 'Appearance',
    href: '/examples/shadcn-forms/appearance',
  },
  {
    title: 'Notifications',
    href: '/examples/shadcn-forms/notifications',
  },
  {
    title: 'Display',
    href: '/examples/shadcn-forms/display',
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
          <Separator className="my-6" />
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
  const pathname = 'usePathname()'

  return (
    <nav
      className={twMerge(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
        className
      )}
      {...props}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={twMerge(
            buttonVariants({ variant: 'ghost' }),
            pathname === item.href
              ? 'bg-muted hover:bg-muted'
              : 'hover:bg-transparent hover:underline',
            'justify-start'
          )}>
          {item.title}
        </a>
      ))}
    </nav>
  )
}
