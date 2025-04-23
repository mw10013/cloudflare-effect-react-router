import * as Rac from 'react-aria-components'
import * as Oui from '~/lib/components/oui/oui-index'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/lib/components/ui/accordion'

function OuiExample() {
  return (
    <>
      <Oui.Disclosure>
        <Oui.DisclosureHeading>
          <Oui.DisclosureButton slot="trigger">
            Is it styled?
          </Oui.DisclosureButton>
        </Oui.DisclosureHeading>
        <Oui.DisclosurePanel>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </Oui.DisclosurePanel>
      </Oui.Disclosure>
      <Rac.DisclosureGroup
        defaultExpandedKeys={['accessible']}
        className="w-full">
        <Oui.DisclosureEx id="accessible" title="Is it accessible?">
          Yes. It adheres to the WAI-ARIA design pattern.
        </Oui.DisclosureEx>
        <Oui.DisclosureEx id="styled" title="Is it styled?">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </Oui.DisclosureEx>
        {/* <Oui.DisclosureEx id="animated" title="Is it animated?">
          Yes. It's animated by default, but you can disable it if you prefer.
        </Oui.DisclosureEx> */}
      </Rac.DisclosureGroup>
    </>
  )
}

function ShadcnExample() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiExample />
      <ShadcnExample />
    </div>
  )
}

/*
function bar() {
  return (
    <div class="w-full" data-orientation="vertical">
      <div data-state="open" data-orientation="vertical" class="border-b">
        <h3 data-orientation="vertical" data-state="open" class="flex">
          <button
            type="button"
            aria-controls="radix-:R5j5:"
            aria-expanded="true"
            data-state="open"
            data-orientation="vertical"
            id="radix-:R1j5:"
            class="[&amp;[data-state=open]>svg]:rotate-180 flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline"
            data-radix-collection-item="">
            Is it accessible?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </h3>
        <div
          data-state="open"
          id="radix-:R5j5:"
          role="region"
          aria-labelledby="radix-:R1j5:"
          data-orientation="vertical"
          class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
          style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); --radix-collapsible-content-height: 36px; --radix-collapsible-content-width: 720px;">
          <div class="pb-4 pt-0">
            Yes. It adheres to the WAI-ARIA design pattern.
          </div>
        </div>
      </div>
      <div data-state="closed" data-orientation="vertical" class="border-b">
        <h3 data-orientation="vertical" data-state="closed" class="flex">
          <button
            type="button"
            aria-controls="radix-:R6j5:"
            aria-expanded="false"
            data-state="closed"
            data-orientation="vertical"
            id="radix-:R2j5:"
            class="[&amp;[data-state=open]>svg]:rotate-180 flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline"
            data-radix-collection-item="">
            Is it styled?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </h3>
        <div
          data-state="closed"
          id="radix-:R6j5:"
          hidden=""
          role="region"
          aria-labelledby="radix-:R2j5:"
          data-orientation="vertical"
          class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
          style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div>
      </div>
      <div data-state="closed" data-orientation="vertical" class="border-b">
        <h3 data-orientation="vertical" data-state="closed" class="flex">
          <button
            type="button"
            aria-controls="radix-:R7j5:"
            aria-expanded="false"
            data-state="closed"
            data-orientation="vertical"
            id="radix-:R3j5:"
            class="[&amp;[data-state=open]>svg]:rotate-180 flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline"
            data-radix-collection-item="">
            Is it animated?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </h3>
        <div
          data-state="closed"
          id="radix-:R7j5:"
          hidden=""
          role="region"
          aria-labelledby="radix-:R3j5:"
          data-orientation="vertical"
          class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
          style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"></div>
      </div>
    </div>
  )
}*/
