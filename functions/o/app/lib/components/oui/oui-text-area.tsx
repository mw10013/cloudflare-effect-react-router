import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { baseStyles } from './oui-base'

// shadcn: flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
// TODO: textAreaStyles: focusRing
const textAreaStyles = tv({
  extend: baseStyles,
  base: 'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground md:text-sm',
})

export const TextArea = ({ className, ...props }: Rac.TextAreaProps) => (
  <Rac.TextArea
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      textAreaStyles({ ...renderProps, className })
    )}
    {...props}
  />
)
