import { ChevronDown, ChevronUp } from 'lucide-react'
import * as Rac from 'react-aria-components'
import * as Oui from '~/lib/components/oui/oui-index'
import * as Jui from '~/lib/components/oui/oui-jui-index'

function OuiExample() {
  return (
    <>
      <Oui.NumberFieldEx
        name="number"
        label="Width (oui)"
        description="This is your width."
        defaultValue={1024}
        minValue={0}
      />
      <Oui.TextFieldEx
        name="text"
        label="Text"
        description="This is your text."
        defaultValue="shadcn"
      />
    </>
  )
}

function OriginUiDemo() {
  return (
    <Rac.NumberField
      defaultValue={99}
      formatOptions={{
        style: 'currency',
        currency: 'EUR',
        currencySign: 'accounting',
      }}>
      <div className="space-y-2">
        <Rac.Label className="text-sm font-medium text-foreground">
          Number input with chevrons (originui)
        </Rac.Label>
        <Rac.Group className="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm shadow-black/5 transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-[3px] data-[focus-within]:ring-ring/20">
          <Rac.Input className="flex-1 bg-background px-3 py-2 tabular-nums text-foreground focus:outline-none" />
          <div className="flex h-[calc(100%+2px)] flex-col">
            <Rac.Button
              slot="increment"
              className="-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
              <ChevronUp size={12} strokeWidth={2} aria-hidden="true" />
            </Rac.Button>
            <Rac.Button
              slot="decrement"
              className="-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
              <ChevronDown size={12} strokeWidth={2} aria-hidden="true" />
            </Rac.Button>
          </div>
        </Rac.Group>
      </div>
      <p
        className="mt-2 text-xs text-muted-foreground"
        role="region"
        aria-live="polite">
        Built with{' '}
        <a
          className="underline hover:text-foreground"
          href="https://react-spectrum.adobe.com/react-aria/DateField.html"
          target="_blank"
          rel="noopener nofollow">
          React Aria
        </a>
      </p>
    </Rac.NumberField>
  )
}

function OriginUiDemo1() {
  return (
    <Rac.NumberField
      className="space-y-2"
      defaultValue={99}
      formatOptions={{
        style: 'currency',
        currency: 'EUR',
        currencySign: 'accounting',
      }}>
      <Rac.Label className="text-sm font-medium text-foreground">
        Number input with chevrons (originui)
      </Rac.Label>
      <Rac.Group className="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm shadow-black/5 transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-[3px] data-[focus-within]:ring-ring/20">
        <Rac.Input className="flex-1 bg-background px-3 py-2 tabular-nums text-foreground focus:outline-none" />
        <div className="flex h-[calc(100%+2px)] flex-col">
          <Rac.Button
            slot="increment"
            className="-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
            <ChevronUp size={12} strokeWidth={2} aria-hidden="true" />
          </Rac.Button>
          <Rac.Button
            slot="decrement"
            className="-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
            <ChevronDown size={12} strokeWidth={2} aria-hidden="true" />
          </Rac.Button>
        </div>
      </Rac.Group>
    </Rac.NumberField>
  )
}

function JuiExample() {
  return (
    <Jui.NumberField defaultValue={1024} minValue={0}>
      <Jui.Label>Width (jui)</Jui.Label>
      <Jui.FieldGroup>
        <Jui.NumberFieldInput />
        <Jui.NumberFieldSteppers />
      </Jui.FieldGroup>
    </Jui.NumberField>
  )
}

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiExample />
      <OriginUiDemo />
      <OriginUiDemo1 />
      <JuiExample />
    </div>
  )
}
