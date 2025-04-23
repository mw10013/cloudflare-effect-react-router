import * as Oui from '~/lib/components/oui/oui-index'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
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
