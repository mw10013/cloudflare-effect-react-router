import { composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

// TODO: baseStyles: isDisabled: cursor-not-allowed?
export const baseStyles = tv({
  variants: {
    isFocused: {
      true: 'outline-none', // Reset user agent styles esp on Chrome
    },
    // shadcn button: focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
    isFocusVisible: {
      true: 'outline-none ring-1 ring-ring',
    },
    isDisabled: {
      true: 'pointer-events-none opacity-50',
    },
  },
})

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className))
}
