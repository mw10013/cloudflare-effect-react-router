import type { Route } from "./+types/app.$accountId.billing";
import * as Oui from "@workspace/oui";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/ui/card";
import { Effect } from "effect";
import * as Rac from "react-aria-components";
import { redirect } from "react-router";
import * as ReactRouter from "~/lib/ReactRouter";
import { Stripe } from "~/lib/Stripe";

export const loader = ReactRouter.routeEffect(({ context }) =>
  Effect.fromNullable(context.get(ReactRouter.appLoadContext).account).pipe(
    Effect.map((account) => ({ account })),
  ),
);

export const action = ReactRouter.routeEffect(
  ({ request, context }: Route.ActionArgs) =>
    Effect.gen(function* () {
      const account = yield* Effect.fromNullable(
        context.get(ReactRouter.appLoadContext).account,
      );
      if (!account.stripeCustomerId || !account.stripeProductId) {
        return redirect("/pricing");
      }
      const origin = new URL(request.url).origin;
      const session = yield* Stripe.createBillingPortalSession({
        customer: account.stripeCustomerId,
        return_url: `${origin}/app/${account.accountId}/billing`,
      });
      return redirect(session.url);
    }),
);

export default function RouteComponent({
  loaderData: { account },
}: Route.ComponentProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Billing</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Account Subscription</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            Current Plan:{" "}
            <span className="text-foreground font-medium">
              {account.planName || "Free"}
            </span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Rac.Form method="post">
            <Oui.Button type="submit" variant="outline">
              Manage Subscription
            </Oui.Button>
          </Rac.Form>
        </CardFooter>
      </Card>
      <pre className="bg-muted mt-4 overflow-x-auto rounded-md p-4 text-sm">
        {JSON.stringify({ account }, null, 2)}
      </pre>
    </div>
  );
}
