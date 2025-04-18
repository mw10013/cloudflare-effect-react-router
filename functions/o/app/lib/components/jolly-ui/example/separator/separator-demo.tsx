import { Separator } from '~/lib/components/ui/separator'

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">
          React Aria Components
        </h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}

export default SeparatorDemo
