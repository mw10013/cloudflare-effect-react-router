# o

- oui-demo

## Local Dev

- pnpm i
- pnpm -F <PACKAGE-NAME> dev

## Deploy

- pnpm -F <PACKAGE-NAME> deploy:PRODUCTION
- Workers & Pages Settings: <WRANGLER-NAME>-production
  - Git repository: connect to git repo
  - Build configuration
    - Build command: CLOUDFLARE_ENV=production pnpm -F <PACKAGE-NAME> build
    - Deploy command: pnpm -F <PACKAGE-NAME> exec wrangler deploy
  - Build watch paths
    - Include paths: functions/<PACKAGE-NAME>/\* functions/oui/\* functions/shared/\*

## Shadcn

- https://v4.shadcn.com/
- pnpm -F <PACKAGE-NAME> exec shadcn add button

## Tailwind

- **Utility Class:** A class applying a specific, predefined style rule.
- **Variant (Condition):** Controls when a utility applies (e.g., `hover:`, `md:`, `:dark`).
- **Modifier (Adjustment):** Adjusts a utility's value or behavior (e.g., `/50`, `-`, `!`).
- **Property:** The standard CSS property name targeted by utilities or used in arbitrary syntax (`[property:value]`).
- **Theme Mapping:** Maps semantic utility names (e.g., `primary`) via `@theme` (e.g., `--color-primary`) to CSS variables (e.g., `var(--primary)`) holding the actual values.

## Etc

- https://github.com/remix-run/react-router-templates/tree/main/cloudflare
