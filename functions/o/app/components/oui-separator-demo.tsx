import * as Oui from '@workspace/oui'

export function OuiSeparatorDemo() {
  return (
    <div className="border rounded-lg p-4 h-fit">
      <div className="flex flex-col gap-1">
        <div className="text-sm font-medium leading-none">Tailwind CSS</div>
        <div className="text-muted-foreground text-sm">A utility-first CSS framework.</div>
      </div>
      <Oui.Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Blog</div>
        <Oui.Separator orientation="vertical" />
        <div>Docs</div>
        <Oui.Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}
