import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

// originui: relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm shadow-black/5 transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-[3px] data-[focus-within]:ring-ring/20
// shadcn input: flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background
// file:border-0 file:bg-transparent file:text-sm file:font-medium
// placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
// disabled:cursor-not-allowed disabled:opacity-50
// jui FieldGroup: relative flex h-9 w-full items-center overflow-hidden rounded-md border border-input bg-transparent p-0 text-sm shadow-sm transition-colors data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-1 data-[focus-within]:ring-ring
// TODO: Group: layout, spacing, focus, disabled
export const groupStyles = tv({
  base: 'relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm shadow-black/5 transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-[3px] data-[focus-within]:ring-ring/20',
})

export function Group(props: Rac.GroupProps) {
  return (
    <Rac.Group
      {...props}
      className={Rac.composeRenderProps(
        props.className,
        (className, renderProps) => groupStyles({ ...renderProps, className })
      )}
    />
  )
}

/*
function OuiGroupElement() {
  return (
    <div
      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
      data-rac=""
      role="group">
      <input
        class="min-w-0 flex-1 bg-background px-2 py-1.5 outline outline-0 placeholder:text-muted-foreground"
        data-rac=""
      />
      <button
        type="button"
        class="[&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors"
        data-rac=""
        id="react-aria-:R2b5:">
        +
      </button>
    </div>
  )
}

function JuiGroupElement() {
  return (
    <div
      className="relative flex h-9 w-full items-center overflow-hidden rounded-md border border-input bg-transparent p-0 text-sm shadow-sm transition-colors data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-1 data-[focus-within]:ring-ring"
      data-rac=""
      role="group">
      <input
        type="text"
        id="react-aria-:Rj5:"
        aria-labelledby="react-aria-:Rj5H1:"
        aria-describedby="react-aria-:Rj5H3: react-aria-:Rj5H4:"
        className="min-w-0 flex-1 bg-background px-2 py-1.5 outline outline-0 placeholder:text-muted-foreground"
        data-rac=""
        value=""
      />
      <button
        type="button"
        aria-label="Add email"
        className="inline-flex size-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none data-[disabled]:pointer-events-none data-[hovered]:bg-accent data-[hovered]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring"
        data-rac=""
        id="react-aria-:Rlj5:">
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
          className="lucide lucide-plus size-4">
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
      </button>
    </div>
  )
}
*/
