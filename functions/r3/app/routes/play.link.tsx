import * as Oui from '~/components/oui/oui-index'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <div className="[&_[data-slot=foo]]:bg-input [&_[data-slot=foo]]:text-foreground [&_[data-slot=bar]]:bg-destructive [&_[data-slot=bar]]:text-primary-foreground flex gap-2">
        <div className="grid size-8 place-items-center border">1</div>
        <div data-slot="foo" className="grid size-8 place-items-center border">
          foo
        </div>
        <div data-slot="bar" className="grid size-8 place-items-center border">
          bar
        </div>
      </div>
      <div className="flex gap-2 [&_[data-slot=navigation-menu-link]]:h-7 [&_[data-slot=navigation-menu-link]]:py-1 [&_[data-slot=navigation-menu-link]]:font-medium">
        <Oui.NavigationMenuLink href="/play">Play</Oui.NavigationMenuLink>
        <Oui.NavigationMenuLink href="/play">Play1</Oui.NavigationMenuLink>
      </div>
      <div className="**:data-[slot=navigation-menu-link]:py-1 **:data-[slot=navigation-menu-link]:font-medium flex gap-2 *:data-[slot=navigation-menu-item]:h-7">
        <Oui.NavigationMenuLink href="/play">Play</Oui.NavigationMenuLink>
        <Oui.NavigationMenuLink href="/play">Play1</Oui.NavigationMenuLink>
      </div>
      <div className="flex gap-2">
        <Oui.NavigationMenuLink href="/play">Play</Oui.NavigationMenuLink>
        <Oui.NavigationMenuLink href="/play">Play1</Oui.NavigationMenuLink>
      </div>
      <p>
        This is the <Oui.Link href="/play">play</Oui.Link> link.
      </p>
      <p>
        This is the underlined{' '}
        <Oui.Link href="/play" className="underline">
          play
        </Oui.Link>{' '}
        link.
      </p>
      <p>
        This is the disabled{' '}
        <Oui.Link href="/play" isDisabled>
          play
        </Oui.Link>{' '}
        link.
      </p>
      <Oui.LinkButton href="/play">Play</Oui.LinkButton>
      <Oui.LinkButton href="/play" variant="secondary" size="sm">
        Play
      </Oui.LinkButton>
      <Oui.LinkButton href="/play" variant="destructive" size="lg">
        Play
      </Oui.LinkButton>
    </div>
  )
}
