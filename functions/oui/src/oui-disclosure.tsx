import React from "react";
import { ChevronDown } from "lucide-react";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { baseStyles, composeTailwindRenderProps } from "./oui-base";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Disclosure.html
#fetch https://react-spectrum.adobe.com/react-aria/DisclosureGroup.html
#fetch https://intentui.com/docs/2.x/components/navigation/disclosure
#fetch https://intentui.com/docs/2.x/components/navigation/disclosure-group
#fetch https://ui.shadcn.com/docs/components/accordion
*/

export function Disclosure({ className, ...props }: Rac.DisclosureProps) {
  return (
    <Rac.Disclosure
      className={composeTailwindRenderProps(className, "w-full border-b")}
      {...props}
    />
  );
}

export function DisclosureHeading({ className, ...props }: Rac.HeadingProps) {
  return <Rac.Heading className={twMerge("flex", className)} {...props} />;
}

// TODO: disclosureButtonStyles: isFocusVisible, rounded? ring-2?
export const disclosureButtonStyes = tv({
  slots: {
    // shadcn AccordianTrigger: flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180
    // focus-visible:outline-none to reset browser
    rootStyles:
      "flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all focus-visible:outline-none",
    iconStyles:
      "text-muted-foreground size-4 shrink-0 transition-transform duration-200",
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
        rootStyles: baseStyles.variants.isFocusVisible.true,
      },
    },
  },
});

export interface DisclosureButtonProps
  extends Omit<Rac.ButtonProps, "children"> {
  children?: React.ReactNode;
}

export function DisclosureButton({
  slot = "trigger",
  className,
  children,
  ...props
}: DisclosureButtonProps) {
  const { isExpanded } = React.useContext(Rac.DisclosureStateContext)!;
  const { rootStyles, iconStyles } = disclosureButtonStyes({ isExpanded });
  return (
    <Rac.Button
      slot={slot}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        rootStyles({ ...renderProps, className }),
      )}
      {...props}
    >
      {children}
      <ChevronDown className={iconStyles()} />
    </Rac.Button>
  );
}

// TODO: disclosurePanelStyles: smooth animation in disclosure group
export const disclosurePanelStyles = tv({
  slots: {
    // shadcn AccordionContent: overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down
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
  children?: React.ReactNode;
}

export function DisclosureEx({ title, children, ...props }: DisclosureExProps) {
  return (
    <Disclosure {...props}>
      <DisclosureHeading>
        <DisclosureButton>{title}</DisclosureButton>
      </DisclosureHeading>
      <DisclosurePanel>{children}</DisclosurePanel>
    </Disclosure>
  );
}
