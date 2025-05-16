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
            className="ring-offset-background data-[state=open]:bg-accent data-[state=open]:text-muted-foreground data-[focused]:ring-ring absolute right-4 top-4 rounded-sm opacity-70 transition-opacity data-[disabled]:pointer-events-none data-[hovered]:opacity-100 data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-offset-2"
          >
            <XIcon />
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
      "flex flex-col space-y-1.5 text-center sm:text-left",
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
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
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
