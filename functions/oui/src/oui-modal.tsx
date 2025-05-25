import * as Rac from "react-aria-components";
import { tv, VariantProps } from "tailwind-variants";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Modal.html
#fetch https://react-spectrum.adobe.com/react-aria/Dialog.html
#fetch https://react-spectrum.adobe.com/react-aria/styling.html#tailwind-css-1
#fetch https://ui.shadcn.com/docs/components/alert-dialog
#fetch https://ui.shadcn.com/docs/components/dialog
*/

/**
 * Derived from shadcn DialogOverlay.
 * Includes `fill-mode-forwards` in `isExiting` to prevent animation snapback.
 */
export const modalOverlayStyles = tv({
  base: "fixed inset-0 z-50 bg-black/50",
  variants: {
    isEntering: {
      true: "animate-in fade-in-0",
    },
    isExiting: {
      true: "animate-out fade-out-0 fill-mode-forwards",
    },
  },
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
 * Derived from shadcn DialogContent.
 * Includes `fill-mode-forwards` in `isExiting` to prevent animation snapback.
 */
export const modalStyles = tv({
  base: "bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
  variants: {
    isEntering: {
      true: "animate-in fade-in-0 zoom-in-95",
    },
    isExiting: {
      true: "animate-out fade-out-0 zoom-out-95 fill-mode-forwards",
    },
  },
});

export function Modal({ className, ...props }: Rac.ModalOverlayProps) {
  return (
    <Rac.Modal
      data-slot="modal"
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        modalStyles({ ...renderProps, className }),
      )}
      {...props}
    />
  );
}

export interface ModalExProps extends Rac.ModalOverlayProps {
  overlayClassName?: Rac.ModalOverlayProps["className"];
}

/**
 * Composes ModalOverlay and Modal.
 * `className` is applied to Modal, `overlayClassName` and other props are applied to ModalOverlay.
 */
export function ModalEx({
  className,
  overlayClassName,
  children,
  ...props
}: ModalExProps) {
  return (
    <ModalOverlay className={overlayClassName} {...props}>
      <Modal className={className}>{children}</Modal>
    </ModalOverlay>
  );
}

/**
 * Derived from shadcn SheetContent.
 * Merges with modalStyles so resets zoom and positioning.
 */
export const sheetModalStyles = tv({
  base: "bg-background fixed left-auto top-auto z-50 flex max-w-none translate-x-0 translate-y-0 flex-col gap-4 rounded-none shadow-lg transition ease-in-out sm:max-w-none",
  variants: {
    isEntering: {
      true: "animate-in zoom-in-100 duration-500",
    },
    isExiting: {
      true: "animate-out fill-mode-forwards zoom-out-100 duration-300",
    },
    side: {
      right:
        "data-[entering]:slide-in-from-right data-[exiting]:slide-out-to-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
      left: "data-[entering]:slide-in-from-left data-[exiting]:slide-out-to-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
      top: "data-[entering]:slide-in-from-top data-[exiting]:slide-out-to-top inset-x-0 top-0 h-auto border-b",
      bottom:
        "data-[entering]:slide-in-from-bottom data-[exiting]:slide-out-to-bottom inset-x-0 bottom-0 h-auto border-t",
    },
  },
  defaultVariants: {
    side: "right",
  },
});

export interface ModalEx1Props
  extends Rac.ModalOverlayProps,
    Pick<VariantProps<typeof sheetModalStyles>, "side"> {
  overlayClassName?: Rac.ModalOverlayProps["className"];
}

/**
 * A modal that slides in from an edge of the screen, suitable for a "Sheet" component.
 * Derived from shadcn SheetContent.
 * @param side - The side of the screen from which the modal will enter.
 */
export function ModalEx1({
  className,
  overlayClassName,
  children,
  side,
  ...props
}: ModalEx1Props) {
  return (
    <ModalOverlay className={overlayClassName} {...props}>
      <Modal
        className={Rac.composeRenderProps(className, (className, renderProps) =>
          sheetModalStyles({ ...renderProps, side, className }),
        )}
      >
        {children}
      </Modal>
    </ModalOverlay>
  );
}
