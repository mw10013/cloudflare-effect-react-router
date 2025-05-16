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
  base: "bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
  variants: {
    isEntering: {
      true: "animate-in fade-in-0 zoom-in-95",
    },
    isExiting: {
      true: "animate-out fade-out-0 zoom-out-95",
    },
  },
});

export function Modal({ className, ...rest }: Rac.ModalOverlayProps) {
  return (
    <Rac.Modal
      data-slot="modal"
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        modalStyles({ ...renderProps, className }),
      )}
      {...rest}
    />
  );
}
