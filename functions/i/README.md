# i

IntentUI sandbox

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
    - Include paths: functions/<PACKAGE_NAME>/\*

## Intent UI

- https://intentui.com/docs/2.x/getting-started/introduction
- cli

  - https://github.com/intentuilabs/cli
  - pnpm -F i exec intentui init
  - pnpm -F i exec intentui add
  - pnpm -F i exec intentui help

- shadcn
  - pnpm -F i exec shadcn init https://intentui.com/r/style/default
  - pnpm -F i exec shadcn add https://intentui.com/r/ui/card
