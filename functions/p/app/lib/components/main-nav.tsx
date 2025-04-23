'use client'

import * as Rac from 'react-aria-components'
import { useLocation } from 'react-router'
import { Icons } from '~/lib/components/icons'
import * as Oui from '~/lib/components/oui/oui-index'

export function MainNav() {
  const { pathname } = useLocation()

  return (
    <div className="ml-4 mr-4 hidden md:flex">
      <Rac.Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">Oui</span>
      </Rac.Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Oui.LinkEx href="/" aria-current={pathname === '/' || undefined}>
          Home
        </Oui.LinkEx>
        <Oui.LinkEx
          href="/docs"
          aria-current={pathname === '/docs' || undefined}>
          Docs
        </Oui.LinkEx>
        <Oui.LinkEx
          href="/docs/components"
          aria-current={
            (pathname.startsWith('/docs/components') &&
              !pathname.startsWith('/docs/component/chart')) ||
            undefined
          }>
          Components
        </Oui.LinkEx>
        <Oui.LinkEx
          href="/blocks"
          aria-current={pathname.startsWith('/blocks') || undefined}>
          Blocks
        </Oui.LinkEx>
        <Oui.LinkEx
          href="/charts"
          aria-current={
            pathname.startsWith('/docs/component/chart') ||
            pathname.startsWith('/charts') ||
            undefined
          }>
          Charts
        </Oui.LinkEx>
        <Oui.LinkEx
          href="/themes"
          aria-current={pathname.startsWith('/themes') || undefined}>
          Themes
        </Oui.LinkEx>
        <Oui.LinkEx
          href="/colors"
          aria-current={pathname.startsWith('/colors') || undefined}>
          Colors
        </Oui.LinkEx>
      </nav>
    </div>
  )
}
