---
mode: "agent"
description: "Implement Oui with Shadcn design system for Tailwind v4"
---

# Implementing Oui

- Oui is React Aria Components (RAC) with Shadcn design system (Tailwind v4 version).
- The primary goal is to provide a set of components from RAC, and apply the visual characteristics of the Shadcn design system to them, while fully leveraging RAC's inherent capabilities.
- In the monorepo, oui is located in functions/oui.

## Design System & Styling

- **Strict Requirement: Shadcn Design System for Tailwind v4.**
  - All styling must adhere to the principles and tokens defined in the Shadcn design system specifically for Tailwind v4.
  - Reference for Tailwind v4 setup: [Shadcn UI Docs - Tailwind v4](https://ui.shadcn.com/docs/tailwind-v4)
  - Reference for v4 components: [v4.shadcn.com](https://v4.shadcn.com/)
- **Styling Implementation:**
  - Styling will be achieved using `tailwind-variants` (tv) and Tailwind CSS v4.
  - Leverage RAC's data attributes (e.g., `data-focused`, `data-selected`, `data-disabled`, `data-entering`, `data-exiting`, `data-placement`) for stateful and contextual styling, as per RAC conventions.
  - **Be mindful of inline styles applied by React Aria Components themselves (e.g., `Popover` managing `z-index` and positioning). Oui styles should complement these, avoiding redundancy or conflict where RAC handles fundamental CSS properties directly.**
  - **When translating Shadcn styling that utilizes CSS pseudo-classes (e.g., `hover:`, `focus:`), these must be mapped to the equivalent React Aria Components data attributes (e.g., `data-[hovered]`, `data-[focused]`) for applying styles via `tailwind-variants`.**
  - Reference: [RAC Styling](https://react-spectrum.adobe.com/react-aria/styling.html)
- **Strict Prohibition: `tailwindcss-react-aria-components` Plugin.**
  - The `tailwindcss-react-aria-components` plugin (or similar automated class-mapping plugins) **must not** be used. Styling should be explicit and align with the `oui` system's direct application of Shadcn v4 design principles.

## Component Structure & API

- **Leverage RAC's Native Structure and Context System.**
  - `oui` components **must not** attempt a 1-to-1 mapping of Shadcn/Radix component APIs or internal structures.
  - The composition and API of `oui` components should primarily follow the patterns and primitives provided by React Aria Components.
  - `oui` components, as thin wrappers, should directly utilize the contextual information (e.g., `selectionMode`, `triggerType`) and state (e.g., `isSelected`, `isFocused`) that RAC primitives make available through their render props or internal context.
    - When using `Rac.composeRenderProps` or similar patterns, it is acceptable to shadow `className` (i.e., `(className, renderProps) => menuStyles({ ...renderProps, className })`).
    - Prefer simple and concise variable names (e.g., `renderProps` over `renderPropsFromRac`) where context makes the meaning clear.
  - Avoid creating `oui-specific` context or prop-drilling mechanisms if RAC already provides the necessary data for a component to adapt its behavior or styling.
  - For example, components like RAC `Checkbox` or `RadioGroup` inherently manage their labels, which differs from Shadcn's separate `Label` component. `oui` should follow the RAC approach.
- **Component Granularity and Composition:**
  - `oui` components will primarily serve as styled, thin wrappers around individual React Aria Components primitives.
  - These wrappers can intelligently adapt their presentation (e.g., conditionally rendering an icon, applying specific styles like an inset) based on the props and contextual information received from their underlying RAC primitive.
  - Complex UI patterns (e.g., a full DropdownMenu) will be composed by the consumer using these `oui` primitives, rather than `oui` providing large, monolithic compound components.
- **Reusable Wrapper Components (`Ex` Suffix):**
  - `oui` may provide components with an `Ex` suffix (e.g., `MenuEx`) to serve as reusable wrappers, extensions, or examples for common UI patterns.
  - These `Ex` components compose multiple `oui` primitives and/or React Aria Components, drawing inspiration from RAC's "Reusable wrappers" concept (e.g., #fetch https://react-spectrum.adobe.com/react-aria/Menu.html#reusable-wrappers).
  - They offer convenience for common use cases. If multiple such extensions exist for a base component, they follow a sequential naming convention (e.g., `ComponentNameEx`, `ComponentNameEx1`).
  - While providing a higher level of abstraction, `Ex` components should still primarily leverage RAC's native structure and context.
- **Customization and Advanced Features:**
  - Any advanced customization, composition, or extension of components should follow React Aria Components' patterns and best practices, including the use of its rich render props and context system.
  - `oui` components should facilitate this by transparently passing through RAC props and exposing RAC's inherent flexibility.
  - Avoid introducing Radix-specific patterns or abstractions if a RAC-idiomatic way exists.
  - Reference: [RAC Advanced Customization](https://react-spectrum.adobe.com/react-aria/advanced.html)
