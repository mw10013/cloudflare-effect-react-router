import { composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

/**
 * Base styles for OUI components, including focus visibility and disabled states.
 * Shadcn UI generally uses a custom ring (`ring-ring/50 ring-[3px]`) with `outline-none` for `focus-visible`.
 * Deviations occur for specific components:
 * - Sliders/Resizables: Adjusted ring thickness/offset for small interactive parts.
 * - Menubar items: Use background changes for focus.
 * - Tabs content: May omit explicit focus rings.
 * - Input OTP: Uses `data-[active=true]` for slot highlighting.
 * This approach balances a consistent baseline with flexibility for component-specific needs.
 */
export const baseStyles = tv({
  variants: {
    isFocused: {
      true: "outline-none", // Reset user agent styles esp on Chrome
    },
    // shadcn button: focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
    // shadcn input: focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
    // shadcn select: focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
    // shadcn textarea: focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
    // shadcn toggle: focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
    // shadcn checkbox: focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
    // shadcn radio-group: focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
    // shadcn switch: focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
    // shadcn slider: ring-ring/50 focus-visible:outline-hidden focus-visible:ring-4
    // shadcn resizable: focus-visible:ring-ring focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-offset-1
    // shadcn accordion: focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
    // shadcn scroll-area: focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:ring-[3px]
    // shadcn navigation-menu link: focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:ring-[3px]
    // shadcn navigation-menu trigger: focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:ring-[3px]
    // shadcn menubar item: outline-none (but uses focus:bg-accent, not focus-visible)
    // shadcn tabs content: outline-none
    // shadcn input-otp slot: data-[active=true]:ring-[3px] (not focus-visible directly on slot, but on active state)
    isFocusVisible: {
      true: "border-ring ring-ring/50 outline-none ring-[3px]",
    },
    isDisabled: {
      true: "pointer-events-none opacity-50", // cursor-not-allowed is omitted as it's mainly for form controls in shadcn; visual/interaction cues are sufficient
    },
  },
});

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: Parameters<typeof twMerge>[0],
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className));
}
