---
mode: "agent"
description: "Ensure the Oui component styles match the Shadcn design system for Tailwind v4"
---

# Align Oui with Shadcn Design System for Tailwind v4

- Ensure the Oui component styles match the Shadcn design system for Tailwind v4 verbatim.
- Add and remove any Oui component styles to match the Shadcn design system for Tailwind v4 verbatim.
- Refer to the [Implementing Oui Prompt](oui-implementing.prompt.md) for details on implementing Oui components with Shadcn design system for Tailwind v4.
- Ask for the Shadcn ui component files if not provided.
- Ask for react aria component documentation if not provided.

## Requirements

- The styles must be from shadcn ui component file verbatim.
- Do not use styles from memory or any other source.
- Repeat that the styles must be from shadcn ui component file verbatim.
- Don't get creative and add styles or make styles up.
- Don't add any comments to the code.
- The only transformation allowed on styles
  - shadcn uses pseudo selectors like `hover:`, `focus:` and you need to use the equivalent React Aria Components data attributes like `data-[hovered]`, `data-[focused]` for applying styles via `tailwind-variants`.
  - shadcn may use data attributes that don't exist in React Aria Components, so you need consult the react aria components documentation to convert to approapriate data attributes.
