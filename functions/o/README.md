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
