import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Modal.html
#fetch https://react-spectrum.adobe.com/react-aria/Dialog.html
#fetch https://react-spectrum.adobe.com/react-aria/styling.html#tailwind-css-1
#fetch https://ui.shadcn.com/docs/components/alert-dialog
#fetch https://ui.shadcn.com/docs/components/dialog
*/

/**
 * Derived from shadcn DialogOverlay
 */
export const modalOverlayStyles = tv({
  base: "data-[entering]:animate-in data-[entering]:fade-in-0 data-[exiting]:animate-out data-[exiting]:fade-out-0 fixed inset-0 z-50 bg-black/50",
});

export function ModalOverlay({ className, ...props }: Rac.ModalOverlayProps) {
  return (
    <Rac.ModalOverlay
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        modalOverlayStyles({ ...renderProps, className }),
      )}
      {...props}
    />
  );
}

/**
 * Derived from shadcn DialogContent
 */
export const modalStyles = tv({
  base: "bg-background data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95 data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
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
