import { Icons } from '~/lib/components/icons'
import * as Oui from '~/lib/components/oui/oui-index'
import { MainNav } from './main-nav'

export function SiteHeader() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <MainNav />
          {/* <MobileNav /> */}
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            {/* <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div> */}
            <nav className="flex items-center gap-0.5">
              <Oui.LinkButton
                href="https://github.com/shadcn-ui/ui"
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                size="icon">
                <Icons.gitHub className="size-4" />
                <span className="sr-only">GitHub</span>
              </Oui.LinkButton>
              {/* <ModeSwitcher /> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
