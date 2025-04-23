import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

// shadcn DialogOverlay: fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
export const modalOverlayStyles = tv({
  base: 'fixed inset-0 z-50 bg-black/80',
  variants: {
    // isEntering: {
    //   true: 'animate-in fade-in-0',
    // },
    // isExiting: {
    //   true: 'animate-out fade-out-0',
    // },
  },
})

export function ModalOverlay({ className, ...props }: Rac.ModalOverlayProps) {
  return (
    <Rac.ModalOverlay
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        modalOverlayStyles({ ...renderProps, className })
      )}
      {...props}
    />
  )
}

// shadcn DialogContent: fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg
// data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg
// TODO: modalStyles: no grid?
// TODO: fix modal animation
export const modalStyles = tv({
  base: 'fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 sm:rounded-lg',
  variants: {
    isEntering: {
      true: 'animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%]',
    },
    isExiting: {
      true: 'animate-out zoom-out-95 slide-out-to-left-1/2 slide-out-to-top-[48%]',
    },
  },
})

export function Modal({ className, ...props }: Rac.ModalOverlayProps) {
  return (
    <Rac.Modal
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        modalStyles({ ...renderProps, className })
      )}
    />
  )
}
