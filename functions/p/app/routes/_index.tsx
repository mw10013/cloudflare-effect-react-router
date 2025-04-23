import type { Route } from './+types/_index'
import { CardsDemo } from '~/lib/components/cards'
import { ExamplesNav } from '~/lib/components/examples-nav'
import * as Oui from '~/lib/components/oui/oui-index'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/lib/components/page-header'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'rr-rac' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function RouteComponent() {
  return (
    <>
      <PageHeader>
        {/* <Announcement /> */}
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Made with Tailwind CSS. Open source.
        </PageHeaderDescription>
        <PageActions>
          <Oui.LinkButton href="/docs" size="sm">
            Get Started
          </Oui.LinkButton>
          <Oui.LinkButton href="/blocks" variant="ghost" size="sm">
            Browse Blocks
          </Oui.LinkButton>
        </PageActions>
      </PageHeader>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <ExamplesNav className="[&>a:first-child]:text-primary" />
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container py-6">
          <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl"></section>
          <section className="hidden md:block [&>div]:p-0">
            <CardsDemo />
          </section>
        </div>
      </div>
    </>
  )
}
