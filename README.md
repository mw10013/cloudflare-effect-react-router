# cloudflare-effect-react-router

## Node version for build

- See .node-version in root.
- https://github.com/shadowspawn/node-version-usage

## Prettier

- pnpm add -D --save-exact prettier --workspace-root
- https://prettier.io/docs/en/ignore
  - Prettier will also follow rules specified in the ".gitignore" file if it exists in the same directory from which it is run.
- pnpm prettier . --check

## Copilot

### Instructions applyTo

- Having trouble with globs.
- Examples that seem to work.
  - applyTo: "**/*.{ts,tsx}"
  - applyTo: "**/{routes,components}/**/*.tsx"

