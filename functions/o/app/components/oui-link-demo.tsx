import * as Oui from "@workspace/oui";

export function OuiLinkDemo() {
  return (
    <div className="flex flex-col flex-wrap gap-4 md:flex-row">
      <Oui.Link href="/play">Play</Oui.Link>
      <Oui.Link href="/play" className="underline">
        Play
      </Oui.Link>
      <Oui.Link href="/play" isDisabled>
        Play
      </Oui.Link>
      <Oui.LinkButton href="/play">Play</Oui.LinkButton>
      <Oui.LinkButton href="/play" variant="secondary" size="sm">
        Play
      </Oui.LinkButton>
      <Oui.LinkButton href="/play" variant="destructive" size="lg">
        Play
      </Oui.LinkButton>
    </div>
  );
}
