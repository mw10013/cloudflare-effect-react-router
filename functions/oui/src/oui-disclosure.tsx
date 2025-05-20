import React from "react";
import { ChevronDown } from "lucide-react";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { baseStyles, composeTailwindRenderProps } from "./oui-base";
import { Heading } from "./oui-heading";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Disclosure.html
#fetch https://react-spectrum.adobe.com/react-aria/DisclosureGroup.html
#fetch https://intentui.com/docs/2.x/components/navigation/disclosure
#fetch https://intentui.com/docs/2.x/components/navigation/disclosure-group
#fetch https://ui.shadcn.com/docs/components/accordion
*/

/**
 * Derived from shadcn AccordionItem
 */
export function Disclosure({ className, ...props }: Rac.DisclosureProps) {
  return (
    <Rac.Disclosure
      className={composeTailwindRenderProps(
        className,
        "border-b last:border-b-0",
      )}
      {...props}
    />
  );
}

export const disclosureButtonStyes = tv({
  slots: {
    rootStyles:
      "flex flex-1 items-start justify-between gap-4 py-4 text-left text-sm font-medium outline-none transition-all",
    iconStyles:
      "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200",
  },
  variants: {
    isExpanded: {
      true: {
        iconStyles: "rotate-180",
      },
    },
    isHovered: {
      true: {
        rootStyles: "underline",
      },
    },
    isFocusVisible: {
      true: {
        rootStyles: "ring-ring/50 ring-[3px]",
      },
    },
    isDisabled: {
      true: {
        rootStyles: "pointer-events-none opacity-50",
      },
    },
  },
});

/**
 * Derived from shadcn AccordionTrigger
 */
export function DisclosureButton({
  className,
  children,
  ...props
}: Rac.ButtonProps) {
  const { isExpanded } = React.useContext(Rac.DisclosureStateContext)!;
  const { rootStyles, iconStyles } = disclosureButtonStyes({ isExpanded });
  return (
    <Rac.Button
      slot="trigger"
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        rootStyles({ ...renderProps, className }),
      )}
      {...props}
    >
      {(renderProps) => (
        <>
          {typeof children === "function" ? children(renderProps) : children}
          <ChevronDown className={iconStyles()} />
        </>
      )}
    </Rac.Button>
  );
}

export const disclosurePanelStyles = tv({
  slots: {
    rootStyles: "overflow-hidden text-sm",
    contentStyles: "pb-4 pt-0",
  },
  variants: {
    isExpanded: {
      true: {
        rootStyles: "animate-accordion-down",
      },
      false: {
        rootStyles: "animate-accordion-up",
      },
    },
  },
});

/**
 * Derived from shadcn AccordionContent
 */
export function DisclosurePanel({
  className,
  children,
  ...props
}: Rac.DisclosurePanelProps) {
  const { isExpanded } = React.useContext(Rac.DisclosureStateContext)!;
  const { rootStyles, contentStyles } = disclosurePanelStyles({ isExpanded });

  return (
    <Rac.DisclosurePanel
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        rootStyles({ ...renderProps, className }),
      )}
      {...props}
    >
      <div className={contentStyles()}>{children}</div>
    </Rac.DisclosurePanel>
  );
}

export interface DisclosureExProps
  extends Omit<Rac.DisclosureProps, "children"> {
  title?: string;
  children?: Rac.DisclosurePanelProps["children"];
}

export function DisclosureEx({ title, children, ...props }: DisclosureExProps) {
  return (
    <Disclosure {...props}>
      <Heading variant="disclosure">
        <DisclosureButton>{title}</DisclosureButton>
      </Heading>
      <DisclosurePanel>{children}</DisclosurePanel>
    </Disclosure>
  );
}
