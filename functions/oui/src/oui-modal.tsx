import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Modal.html
#fetch https://react-spectrum.adobe.com/react-aria/Dialog.html
#fetch https://ui.shadcn.com/docs/components/alert-dialog
#fetch https://ui.shadcn.com/docs/components/dialog
*/

/*
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
*/

/**
 * Derived from shadcn DialogContent
 */
export const modalStyles = tv({
  base: "bg-background fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border p-6 shadow-lg duration-200 sm:rounded-lg",
  variants: {
    isEntering: {
      true: "animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%]",
    },
    isExiting: {
      true: "animate-out zoom-out-95 slide-out-to-left-1/2 slide-out-to-top-[48%]",
    },
  },
});

export function Modal({ className, ...props }: Rac.ModalOverlayProps) {
  return (
    <Rac.Modal
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        modalStyles({ ...renderProps, className }),
      )}
    />
  );
}
