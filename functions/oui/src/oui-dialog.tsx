import type { ReactNode } from "react";
import { XIcon } from "lucide-react";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Dialog.html
#fetch https://react-spectrum.adobe.com/react-aria/Modal.html
#fetch https://react-spectrum.adobe.com/react-aria/Popover.html
*/

export interface DialogProps extends Omit<Rac.DialogProps, "children"> {
  children?: ReactNode;
}

/**
 * Derived from shadcn DialogContent
 */
export function Dialog({ className, children, ...props }: DialogProps) {
  return (
    <Rac.Dialog {...props} className={twMerge("grid gap-4", className)}>
      {({ close }) => (
        <>
          {children}
          <Rac.Button
            slot="close"
            onPress={close}
            className={twMerge(
              "absolute right-4 top-4 rounded-sm p-1 opacity-70 transition-opacity",
              "data-[hovered]:bg-accent data-[hovered]:text-muted-foreground data-[hovered]:opacity-100",
              "data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-background data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-offset-2",
              "data-[disabled]:pointer-events-none",
            )}
          >
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </Rac.Button>
        </>
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
