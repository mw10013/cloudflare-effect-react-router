# i

IntentUI sandbox

## Local Dev

- pnpm i
- pnpm -F <PACKGE-NAME> dev

## Deploy

- pnpm -F <PACKGE-NAME> deploy:PRODUCTION
- Workers & Pages Settings: <WRANGLER-NAME>-production
  - Git repository: connect to git repo
  - Build configuration
    - Build command: CLOUDFLARE_ENV=production pnpm -F <PACKGE-NAME> build
    - Deploy command: pnpm -F <PACKGE-NAME> exec wrangler deploy
  - Build watch paths
    - Include paths: functions/<PACKGE-NAME>/\*

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
