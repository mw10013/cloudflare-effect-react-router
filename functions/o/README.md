# o

- oui-demo

## Local Dev

- pnpm i
- pnpm -F <PACKAGE_NAME> dev

## Deploy

- pnpm -F <PACKAGE_NAME> deploy:PRODUCTION
- Workers & Pages Settings: <WRANGLER_NAME>-production
  - Git repository: connect to git repo
  - Build configuration
    - Build command: CLOUDFLARE_ENV=production pnpm -F <PACKAGE_NAME> build
    - Deploy command: pnpm -F <PACKAGE_NAME> exec wrangler deploy
  - Build watch paths
    - Include paths: functions/<PACKAGE_NAME>/\* functions/oui/\* functions/shared/\*

## Shadcn

- https://v4.shadcn.com/
- pnpm -F <PACKAGE_NAME> exec shadcn add button
- components.jsonapp
  - aliases currently point to @workspace/ui and may want to alias components, utils, and hooks to local