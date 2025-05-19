import type { ReactElement, ReactNode } from "react";
import React from "react";
import { XIcon } from "lucide-react";
import * as Rac from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";
import { Button } from "./oui-button";
import { ModalEx } from "./oui-modal";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Dialog.html
#fetch https://react-spectrum.adobe.com/react-aria/Modal.html
#fetch https://react-spectrum.adobe.com/react-aria/Popover.html
#fetch https://ui.shadcn.com/docs/components/alert-dialog
#fetch https://ui.shadcn.com/docs/components/dialog
*/

export interface DialogProps extends Omit<Rac.DialogProps, "children"> {
  children?: ReactNode;
  /**
   * If `true`, hides the close button for non-'alertdialog' role.
   * 'alertdialog' role never shows a close button.
   * @default false
   */
  hideCloseButtonForNonAlert?: boolean;
}

/**
 * Derived from shadcn DialogContent.
 */
export function Dialog({
  role,
  hideCloseButtonForNonAlert = false,
  className,
  children,
  ...rest
}: DialogProps) {
  return (
    <Rac.Dialog
      {...rest}
      className={twMerge("grid gap-4 outline-none", className)}
    >
      {children}
      {!hideCloseButtonForNonAlert && role !== "alertdialog" && (
        <Rac.Button
          slot="close"
          className={twJoin(
            "absolute right-4 top-4 rounded-sm p-1 opacity-70 transition-opacity",
            "data-[hovered]:bg-accent data-[hovered]:text-muted-foreground data-[hovered]:opacity-100",
            "data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-background data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-offset-2",
            "data-[disabled]:pointer-events-none",
          )}
        >
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </Rac.Button>
      )}
    </Rac.Dialog>
  );
}

/**
 * Derived from shadcn DialogHeader
 */
export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={twMerge(
      "flex flex-col gap-2 text-center sm:text-left",
      className,
    )}
  />
);

/**
 * Derived from shadcn DialogFooter
 */
export const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={twMerge(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      className,
    )}
  />
);

/**
 * Derived from shadcn DialogDescription
 */
export const DialogDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    {...props}
    className={twMerge("text-muted-foreground text-sm", className)}
  />
);

export interface DialogExProps extends DialogProps {
  triggerElement: string | ReactElement;
  modalClassName?: string;
}

/**
 * A modal dialog.
 * If `triggerElement` is a string, it's rendered as a ghost `Button`.
 * The modal is dismissable via an outside press if `role` is not "alertdialog".
 */
export function DialogEx({
  triggerElement,
  modalClassName,
  children,
  ...props
}: DialogExProps) {
  return (
    <Rac.DialogTrigger>
      {typeof triggerElement === "string" ? (
        <Button variant="ghost">{triggerElement}</Button>
      ) : (
        triggerElement
      )}
      <ModalEx
        className={modalClassName}
        isDismissable={props.role !== "alertdialog"}
      >
        <Dialog {...props}>{children}</Dialog>
      </ModalEx>
    </Rac.DialogTrigger>
  );
}
