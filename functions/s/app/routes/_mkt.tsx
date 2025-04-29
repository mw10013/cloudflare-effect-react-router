import type { Route } from './+types/_mkt'
import * as Oui from '@workspace/oui'
import { Effect } from 'effect'
import * as Rac from 'react-aria-components'
import { Outlet } from 'react-router'
import * as ReactRouter from '~/lib/ReactRouter'

export const loader = ReactRouter.routeEffect(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    yield* Effect.log('_mkt loader')
    const alc = context.get(ReactRouter.appLoadContext)

    return { message: `ENVIRONMENT: ${alc.cloudflare.env.ENVIRONMENT}` }
  })
)

export default function RouteComponent({}: Route.ComponentProps) {
  return (
    <div className="bg-background relative flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      {/* <SiteFooter /> */}
    </div>
  )
}

export function SiteHeader() {
  return (
    <header className="border-grid bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container-wrapper">
        <div className="container mx-auto flex h-14 items-center gap-2 px-4 md:gap-4">
          <MainNav />
          {/* <MobileNav />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center gap-0.5">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 px-0"
              >
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.gitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <ModeSwitcher />
            </nav>
          </div> */}
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            {/* <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <CommandMenu />
            </div> */}
            <nav className="flex items-center gap-0.5">
              Sign In / Up
              {/* <Button asChild variant="ghost" size="icon" className="h-8 w-8 px-0">
                <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                  <Icons.gitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <ModeSwitcher /> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Rac.Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        {/* Assuming you have a logo component or SVG */}
        {/* <Logo className="h-6 w-6" /> */}
        <span className="hidden font-bold lg:inline-block">SaaS</span>
      </Rac.Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Rac.Link href="/docs/installation" className={'text-foreground/80 hover:text-foreground/80 transition-colors'}>
          Docs
        </Rac.Link>
        <Rac.Link href="/docs/components" className={'text-foreground/80 hover:text-foreground/80 transition-colors'}>
          Components
        </Rac.Link>
        <Rac.Link href="/blocks" className={'text-foreground/80 hover:text-foreground/80 transition-colors'}>
          Blocks
        </Rac.Link>
        <Rac.Link href="/charts" className={'text-foreground/80 hover:text-foreground/80 transition-colors'}>
          Charts
        </Rac.Link>
        <Rac.Link href="/themes" className={'text-foreground/80 hover:text-foreground/80 transition-colors'}>
          Themes
        </Rac.Link>
        <Rac.Link href="/colors" className={'text-foreground/80 hover:text-foreground/80 transition-colors'}>
          Colors
        </Rac.Link>
      </nav>
    </div>
  )
}
