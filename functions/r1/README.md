# r1

- fs-routes
- bare app.css

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

## Etc

- https://github.com/remix-run/react-router-templates/tree/main/cloudflare
