# OUI DropdownMenu from React Aria Components

**Objective:** Create a `DropdownMenu` component system within the `@workspace/oui` package that mirrors the functionality and visual style of Shadcn's `DropdownMenu`, leveraging React Aria Components (RAC) as the foundation.

**Core Strategy:** Compose granular RAC components to build the desired `DropdownMenu` experience. Styling will be achieved using `tailwind-variants` (tv) and Tailwind CSS, replicating Shadcn's design tokens and leveraging RAC's data attributes for stateful styling.

**Key React Aria Components to Utilize:**

*   **`MenuTrigger` (RAC):** The root component orchestrating the trigger and the popover.
*   **`Popover` (RAC):** The floating container for the menu items. To be styled as `oui/Popover`.
*   **`Menu` (RAC):** Manages the list of items, focus, keyboard navigation, and selection. To be styled as `oui/Menu`.
*   **`MenuItem` (RAC):** Represents individual actionable items. To be styled as `oui/MenuItem`.
*   **`Section` (RAC):** For grouping items (analogous to `DropdownMenuGroup`). To be styled as `oui/MenuSection`.
*   **`Header` (RAC):** For labeling sections (analogous to `DropdownMenuLabel`). To be styled as `oui/MenuHeader`.
*   **`Separator` (RAC):** For visual dividers. To be styled as `oui/Separator`.
*   **`SubmenuTrigger` (RAC):** For creating nested/cascading menus.

**Mapping Shadcn Structure to OUI/RAC:**

| Shadcn Component             | OUI/RAC Approach                                                                                                                                                                                             |
| :--------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DropdownMenu` (Root)        | `Rac.MenuTrigger`                                                                                                                                                                                            |
| `DropdownMenuTrigger`        | A standard `oui/Button` (or other element) passed as a child to `Rac.MenuTrigger`.                                                                                                                           |
| `DropdownMenuContent`        | `oui/Popover` (wrapping `Rac.Popover`), styled to match.                                                                                                                                                     |
| `DropdownMenuItem`           | `oui/MenuItem` (wrapping `Rac.MenuItem`), styled with variants for states, icons, and destructive actions.                                                                                                   |
| `DropdownMenuGroup`          | `oui/MenuSection` (wrapping `Rac.Section`).                                                                                                                                                                  |
| `DropdownMenuLabel`          | `oui/MenuHeader` (wrapping `Rac.Header` inside `oui/MenuSection`).                                                                                                                                           |
| `DropdownMenuSeparator`      | `oui/Separator` (wrapping `Rac.Separator`).                                                                                                                                                                  |
| `DropdownMenuCheckboxItem`   | `oui/MenuItem` within an `oui/Menu` configured with `selectionMode="multiple"`. The `oui/MenuItem` will conditionally render a check icon based on `isSelected`.                                            |
| `DropdownMenuRadioGroup`     | An `oui/Menu` configured with `selectionMode="single"`.                                                                                                                                                      |
| `DropdownMenuRadioItem`      | `oui/MenuItem` within the single-selection `oui/Menu`. The `oui/MenuItem` will conditionally render a radio icon based on `isSelected`.                                                                      |
| `DropdownMenuSub`            | `Rac.SubmenuTrigger`.                                                                                                                                                                                        |
| `DropdownMenuSubTrigger`     | An `oui/MenuItem` (with a chevron icon) passed as the trigger child to `Rac.SubmenuTrigger`.                                                                                                                 |
| `DropdownMenuSubContent`     | An `oui/Popover` (containing an `oui/Menu`) passed as the content child to `Rac.SubmenuTrigger`. May require a specific style variant.                                                                       |
| `DropdownMenuShortcut`       | A presentational `oui/MenuShortcut` component (e.g., a styled `span`) placed inside an `oui/MenuItem`.                                                                                                       |
| `DropdownMenuPortal`         | RAC's `Popover` handles portal-ing by default. No direct equivalent component needed from OUI, but `oui/Popover` will utilize this behavior.                                                                 |

**Styling Approach:**

*   Use `tailwind-variants` (tv) to define component styles and variants.
*   Replicate Shadcn's visual appearance (padding, borders, shadows, typography, animations).
*   Leverage RAC's data attributes (e.g., `data-focused`, `data-selected`, `data-disabled`, `data-entering`, `data-exiting`, `data-placement`) for stateful and contextual styling.

**Next Steps:**

*   Iteratively build and style each `oui` component (`Popover`, `Menu`, `MenuItem`, `MenuSection`, `MenuHeader`, `Separator`, etc.).
*   Develop variants for `oui/MenuItem` (e.g., `destructive`, `inset`).
*   Implement checkbox, radio item, and submenu functionality using RAC's selection modes and `SubmenuTrigger`.
*   Test thoroughly for accessibility and keyboard navigation, which RAC provides a strong foundation for.