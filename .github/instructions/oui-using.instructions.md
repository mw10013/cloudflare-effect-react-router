---
applyTo: "**/{routes,components}/**/*.tsx"
---

# Oui Using Instructions

- Oui is React Aria Components (RAC) with Shadcn design system (Tailwind v4 version).
- Oui provides a thin wrapper around React Aria Components (RAC) to apply the Shadcn design system's visual characteristics.
- Oui does not attempt to replicate Shadcn/Radix component APIs or internal structures.
- The composition and API of Oui components primarily follow the patterns and primitives provided by React Aria Components.
- Import oui using `import * as Oui from "@workspace/oui"`
- Import RAC using `import * as Rac from "@react-aria/components"`
- If you need an unstyled RAC component, then use RAC directly.

## Dynamic Collections

- When rendering dynamic lists of items within Oui or RAC collection components (e.g., items in a `ListBox`, `Menu`, `Select` popover):

  - **Prefer using the `items` prop** on the collection component (e.g., `Oui.SelectEx`, `Rac.Collection`) or section component (e.g., `Rac.ListBoxSection` if no other direct children like `Rac.Header` are present alongside the items) and provide a **render function as its child**.
  - This approach allows React Aria Components to optimize rendering, caching, and state management for collections, leading to better performance, especially with large datasets.
  - Avoid using `Array.prototype.map()` directly within JSX to render collection items if the `items` prop and render function pattern is available, as it can be less performant and bypass some of RAC's internal optimizations.
  - Example:

    ```tsx
    const myItems = [{id: '1', name: 'One'}, {id: '2', name: 'Two'}];

    // For a simple ListBoxSection with only dynamic items:
    <Rac.ListBoxSection items={myItems}>
      {(item) => <Oui.ListBoxItem id={item.id}>{item.name}</Oui.ListBoxItem>}
    </Rac.ListBoxSection>

    // When a ListBoxSection includes a Header alongside dynamic items, use Rac.Collection:
    <Rac.ListBoxSection id="my-section-with-header">
      <Rac.Header>Section Title</Rac.Header>
      <Rac.Collection items={myItems}>
        {(item) => <Oui.ListBoxItem id={item.id}>{item.name}</Oui.ListBoxItem>}
      </Rac.Collection>
    </Rac.ListBoxSection>

    // For components like Oui.SelectEx that manage their own ListBox:
    <Oui.SelectEx items={myItems}>
      {(item) => <Oui.ListBoxItem id={item.id}>{item.name}</Oui.ListBoxItem>}
    </Oui.SelectEx>
    ```
