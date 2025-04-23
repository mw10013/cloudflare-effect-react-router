import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

// shadcn DropdownMenuShortcut: ml-auto text-xs tracking-widest opacity-60
// shadcn structures with <div> while rac uses <kbd>.
// Specify font-sans since <kbd> uses mono font by default.
export const keyboard = tv({
  base: 'ml-auto font-sans text-xs tracking-widest opacity-60',
})

export const Keyboard = ({
  className,
  ...props
}: React.ComponentProps<typeof Rac.Keyboard>) => (
  <Rac.Keyboard className={keyboard({ className })} {...props} />
)
