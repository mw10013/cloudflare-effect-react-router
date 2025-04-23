import * as Oui from '@workspace/oui'
import { ArrowRightIcon, Loader2Icon, SendIcon } from 'lucide-react'

export function OuiButtonDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Oui.Button>Button</Oui.Button>
        <Oui.Button variant="outline">Outline</Oui.Button>
        <Oui.Button variant="ghost">Ghost</Oui.Button>
        <Oui.Button variant="destructive">Destructive</Oui.Button>
        <Oui.Button variant="secondary">Secondary</Oui.Button>
        <Oui.Button variant="link">Link</Oui.Button>
        <Oui.Button variant="outline">
          <SendIcon /> Send
        </Oui.Button>
        <Oui.Button variant="outline">
          Learn More <ArrowRightIcon />
        </Oui.Button>
        <Oui.Button isDisabled variant="outline">
          <Loader2Icon className="animate-spin" />
          Please wait
        </Oui.Button>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Oui.Button size="sm">Small</Oui.Button>
        <Oui.Button variant="outline" size="sm">
          Outline
        </Oui.Button>
        <Oui.Button variant="ghost" size="sm">
          Ghost
        </Oui.Button>
        <Oui.Button variant="destructive" size="sm">
          Destructive
        </Oui.Button>
        <Oui.Button variant="secondary" size="sm">
          Secondary
        </Oui.Button>
        <Oui.Button variant="link" size="sm">
          Link
        </Oui.Button>
        <Oui.Button variant="outline" size="sm">
          <SendIcon /> Send
        </Oui.Button>
        <Oui.Button variant="outline" size="sm">
          Learn More <ArrowRightIcon />
        </Oui.Button>
        <Oui.Button isDisabled size="sm" variant="outline">
          <Loader2Icon className="animate-spin" />
          Please wait
        </Oui.Button>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Oui.Button size="lg">Large</Oui.Button>
        <Oui.Button variant="outline" size="lg">
          Outline
        </Oui.Button>
        <Oui.Button variant="ghost" size="lg">
          Ghost
        </Oui.Button>
        <Oui.Button variant="destructive" size="lg">
          Destructive
        </Oui.Button>
        <Oui.Button variant="secondary" size="lg">
          Secondary
        </Oui.Button>
        <Oui.Button variant="link" size="lg">
          Link
        </Oui.Button>
        <Oui.Button variant="outline" size="lg">
          <SendIcon /> Send
        </Oui.Button>
        <Oui.Button variant="outline" size="lg">
          Learn More <ArrowRightIcon />
        </Oui.Button>
        <Oui.Button isDisabled size="lg" variant="outline">
          <Loader2Icon className="animate-spin" />
          Please wait
        </Oui.Button>
      </div>
    </div>
  )
}
