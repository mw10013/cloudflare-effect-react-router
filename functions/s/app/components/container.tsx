import type { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Replicates the shadcn `.container` class using direct utilities.
 *
 * Original shadcn class definition:
 * ```css
 * .container {
 *   @apply px-4 xl:px-6 mx-auto max-w-screen-2xl;
 * }
 * ```
 * Source: {@link https://github.com/shadcn-ui/ui/blob/main/apps/www/styles/globals.css}
 *
 * Using direct utilities avoids potential issues with `@apply` in Tailwind v4.
 * Ref: {@link https://github.com/tailwindlabs/tailwindcss/discussions/16429}
 */
export function Container({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={twMerge('mx-auto max-w-screen-2xl px-4 xl:px-6', className)} {...rest}>
      {children}
    </div>
  )
}

/**
 * Replicates the shadcn `.container-wrapper` class using direct utilities.
 *
 * Original shadcn class definition:
 * ```css
 * .container-wrapper {
 *   @apply max-w-[1400px] min-[1800px]:max-w-screen-2xl min-[1400px]:border-x border-border/70 dark:border-border mx-auto w-full border-dashed;
 * }
 * ```
 * Using direct utilities avoids potential issues with `@apply` in Tailwind v4.
 * Ref: {@link https://github.com/tailwindlabs/tailwindcss/discussions/16429}
 */
export function ContainerWrapper({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        'border-border/70 dark:border-border mx-auto w-full max-w-[1400px] border-dashed min-[1400px]:border-x min-[1800px]:max-w-screen-2xl',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
