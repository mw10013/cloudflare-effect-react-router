# r1

- fs-routes
- bare app.css

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

## Etc

- https://github.com/remix-run/react-router-templates/tree/main/cloudflare

