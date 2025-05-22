# s

- saas

## Local Dev

- pnpm i
- cp functions/app/.dev.vars.example functions/app/.dev.vars
- pnpm -F <PACKAGE_NAME> d1:reset
- pnpm -F <PACKAGE_NAME> dev

## Deploy

- pnpm -F <PACKAGE_NAME> exec wrangler kv namespace create <WRANGLER_NAME>-kv-production
- pnpm -F <PACKAGE_NAME> exec wrangler queues create <WRANGLER_NAME>-q-production
- Update wrangler.jsonc production kv_namespaces and queues
- pnpm -F <PACKAGE_NAME> d1:reset:PRODUCTION
- pnpm -F <PACKAGE_NAME> deploy:PRODUCTION
- pnpm -F <PACKAGE_NAME> exec wrangler secret put <SECRET> --env production
- Workers & Pages Settings: <WRANGLER_NAME>-production
  - Git repository: connect to git repo
  - Build configuration
    - Build command: CLOUDFLARE_ENV=production pnpm -F <PACKAGE_NAME> build
    - Deploy command: pnpm -F <PACKAGE_NAME> exec wrangler deploy
  - Build watch paths
    - Include paths: functions/<PACKAGE_NAME>/\* functions/oui/\* functions/shared/\*

## D1

- pnpm -F <PACKAGE_NAME> exec wrangler d1 migrations create d1-local <MIGRATION-NAME>

## Stripe

- Set API version in Stripe Workbench and confirm it matches version used by Stripe service.
- stripe trigger payment_intent.succeeded
- stripe trigger customer.subscription.updated

- https://docs.stripe.com/development
- https://docs.stripe.com/workbench/guides#view-api-versions

- Prevent customer creation race conditions: https://github.com/stripe/stripe-node/issues/476#issuecomment-402541143
- https://docs.stripe.com/api/idempotent_requests

- https://github.com/stripe/stripe-node
- https://docs.stripe.com/api?lang=node
- https://github.com/nextjs/saas-starter
- https://www.youtube.com/watch?v=Wdyndb17K58&t=173s

```
Double subscriptions are not an issue when you create a customer first, then create a payment intent for that customer and then load your checkout forms using that intent. It won't matter whether the user goes back, forward, refreshes or whatever. As long as the payment intent doesn't change, it won't be a double subscription. Also a lot of projects actually do allow multiple subscriptions, so they can't just make such a critical option on by default (limit to 1). On the price IDs between environments - use price lookup keys instead.
```

### Disable Cash App Pay

- https://github.com/t3dotgg/stripe-recommendations?tab=readme-ov-file#disable-cash-app-pay
- Settings | Payments | Payment methods

### Limit Customers to One Subscription

- https://github.com/t3dotgg/stripe-recommendations?tab=readme-ov-file#enable-limit-customers-to-one-subscription
- https://docs.stripe.com/payments/checkout/limit-subscriptions
- https://billing.stripe.com/p/login/test_3cs9EBfMn4Qn7Ze144

### Webhook

- stripe listen --load-from-webhooks-api --forward-to localhost:8787
  - Must have stripe webhook endpoint url with path /api/stripe/webhook
  - STRIPE_WEBHOOK_SECRET must align with listen secret
- stripe listen --forward-to localhost:8787/api/stripe/webhook
- stripe listen --print-secret

### Billing Portal

- Settings | Billing | Customer portal
- https://docs.stripe.com/customer-management/activate-no-code-customer-portal
- https://billing.stripe.com/p/login/test_9AQeYV6bN1Eb6VafYZ

### Testing Payments

To test Stripe payments, use the following test card details:

- Card Number: `4242 4242 4242 4242`
- Expiration: Any future date
- CVC: Any 3-digit number

## Shadcn

- https://v4.shadcn.com/
- pnpm -F <PACKAGE_NAME> exec shadcn add button

## Tailwind

- @fetch https://tailwindcss.com/docs/upgrade-guide
- @fetch https://tailwindcss.com/docs/adding-custom-styles
- **Utility Class:** A class applying a specific, predefined style rule.
- **Variant (Condition):** Controls when a utility applies (e.g., `hover:`, `md:`, `:dark`).
- **Modifier (Adjustment):** Adjusts a utility's value or behavior (e.g., `/50`, `-`, `!`).
- **Property:** The standard CSS property name targeted by utilities or used in arbitrary syntax (`[property:value]`).
- **Theme Mapping:** Maps semantic utility names (e.g., `primary`) via `@theme` (e.g., `--color-primary`) to CSS variables (e.g., `var(--primary)`) holding the actual values.
- Tailwind spacing unit = 0.25rem = 4px (assuming default browser font size of 16px)

## Etc

- https://github.com/remix-run/react-router-templates/tree/main/cloudflare
- https://github.com/kristianfreeman/react-router-hono-vite-cf-example/blob/main/workers/app.ts

## React Router Middleware

- Ensure react-router.config.ts is tsconfig include for interface Future
- https://reactrouter.com/start/changelog#middleware-unstable
- https://reactrouter.com/start/changelog#middleware-context-parameter
- https://github.com/remix-run/react-router/blob/main/decisions/0014-context-middleware.md
- Need to provide type annotation for ReactRouter.middlewareEffect

```ts
export const appMiddleware: Route.unstable_MiddlewareFunction =
  ReactRouter.middlewareEffect(({ context }) => Effect.succeed(undefined));
```

## Vite

### Vite Build Error: "The build was canceled"

- **Origin:** Likely logged by `esbuild` when it fails/cancels during Vite's dependency optimization step (client build).
- **Trigger:** Appears correlated with processing complex dependencies like `effect` and its own dependencies (e.g., `fast-check`).
- **Vite Handling:** Vite explicitly catches this specific error message and handles it **non-fatally**, allowing the build process to continue.
- **Impact:** The optimization step might be incomplete, but the overall client and server builds still complete successfully according to logs.
- **Conclusion:** If the final build artifacts are generated successfully, this specific error message is **likely safe to ignore**.
- https://github.com/vitejs/vite/blob/main/packages/vite/src/node/optimizer/index.ts
- https://github.com/vitejs/vite/blob/main/packages/vite/src/node/optimizer/scan.ts

## Prompt

```
#fetch https://effect.website/docs/error-management/two-error-types/
#fetch https://effect.website/docs/error-management/expected-errors/
#fetch https://effect.website/docs/error-management/unexpected-errors/
#fetch https://effect.website/docs/getting-started/running-effects/
#fetch https://effect.website/docs/runtime/
```

- https://deepwiki.com/Effect-TS/effect
