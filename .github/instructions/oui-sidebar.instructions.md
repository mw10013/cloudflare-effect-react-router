---
applyTo: "**/functions/oui/**/oui-sidebar-.tsx"
---

# Oui Sidebar Guidelines

- Keep the implementation simple and straightforward.
- Use Oui components
- For example of functionality use Intent UI sidebar component but keep it simple.
- Use only styles from shadcn sidebar component filea and copy the styles verbatim.
- Refer to the [Implementing Oui Prompt](../prompts/oui-implementing.prompt.md) for details on implementing Oui components with Shadcn design system for Tailwind v4.

## Oui Sidebar Requirements

- Sidebar should only implement the Intent UI sidebar functionality for intent = 'default'. Avoid the functionality for intent = 'insert' | 'float' | 'fleet' | 'dock'.
- When the sidebar is closed, it should be completely hidden. It should not show any icons or tooltips.
- Sidebar should not need to wrap any RAC components. Rather, it should re-use existing Oui components like Oui.Dialog, Oui.Button, Oui.Header, Oui.Menu, Oui.Disclosure, Oui.ListBox
- The \*Ex components may be especially useful.
- Specific Sidebar contexts should not be needed.
