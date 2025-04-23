'use client'

import * as Rac from 'react-aria-components'
import { useLocation } from 'react-router'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import * as Oui from '~/lib/components/oui/oui-index'
import { ScrollArea, ScrollBar } from '~/lib/components/ui/scroll-area'

const examples = [
  {
    name: 'Mail',
    href: '/examples/mail',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/mail',
    hidden: false,
  },
  {
    name: 'Dashboard',
    href: '/examples/dashboard',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/dashboard',
    hidden: false,
  },
  {
    name: 'Tasks',
    href: '/examples/tasks',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/tasks',
    hidden: false,
  },
  {
    name: 'Playground',
    href: '/examples/playground',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/playground',
    hidden: false,
  },
  {
    name: 'Forms',
    href: '/examples/forms',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/forms',
    hidden: false,
  },
  {
    name: 'Music',
    href: '/examples/music',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/music',
    hidden: false,
  },
  {
    name: 'Authentication',
    href: '/examples/authentication',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/authentication',
    hidden: false,
  },
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  const { pathname } = useLocation()

  //Style-able scrollbar/scrollarea component: https://github.com/adobe/react-spectrum/issues/7286
  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={twMerge('flex items-center', className)} {...props}>
          <ExampleLink
            example={{ name: 'Examples', href: '/', code: '', hidden: false }}
            aria-current={pathname === '/'}
          />
          {examples.map((example) => (
            <ExampleLink
              key={example.href}
              example={example}
              aria-current={pathname?.startsWith(example.href) ?? false}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}

const exampleLinkStyles = tv({
  extend: Oui.linkStyles,
  base: 'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors',
  variants: {
    isCurrent: {
      true: 'bg-muted text-primary',
    },
    isHovered: {
      true: 'text-primary no-underline',
    },
  },
})

interface ExampleLinkProps extends Rac.LinkProps {
  example: (typeof examples)[number]
}

function ExampleLink({ example, ...props }: ExampleLinkProps) {
  if (example.hidden) {
    return null
  }

  return (
    <Rac.Link {...props} href={example.href} className={exampleLinkStyles}>
      {example.name}
    </Rac.Link>
  )
}
