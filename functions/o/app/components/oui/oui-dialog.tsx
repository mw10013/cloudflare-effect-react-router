import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

export interface DialogProps extends Omit<Rac.DialogProps, 'children'> {
  children?: ReactNode
}

// shadcn DialogContent: fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg
export function Dialog({ className, children, ...props }: DialogProps) {
  return (
    <Rac.Dialog {...props} className={twMerge('grid gap-4', className)}>
      {({ close }) => (
        <>
          {children}
          <Rac.Button
            slot="close"
            onPress={close}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[disabled]:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground data-[hovered]:opacity-100 data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Rac.Button>
        </>
      )}
    </Rac.Dialog>
  )
}

// shadcn DialogHeader: flex flex-col space-y-1.5 text-center sm:text-left
export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={twMerge(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
  />
)

// shadcn DialogFooter: flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2
export const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={twMerge(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
  />
)

// shadcn DialogDescription: text-sm text-muted-foreground
// TODO: DialogDescription: move into Text?
export const DialogDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    {...props}
    className={twMerge('text-sm text-muted-foreground', className)}
  />
)
