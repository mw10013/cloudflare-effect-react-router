import type { Route } from "./+types/app.layout._index";
import { SchemaEx } from "@workspace/shared";
import { Button } from "@workspace/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/ui/card";
import { Effect, Schema } from "effect";
import * as Rac from "react-aria-components";
import { redirect, useSubmit } from "react-router";
import { IdentityMgr } from "~/lib/IdentityMgr";
import * as ReactRouter from "~/lib/ReactRouter";

export const loader = ReactRouter.routeEffect(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    const sessionUser = yield* Effect.fromNullable(
      context.get(ReactRouter.appLoadContext).session.get("sessionUser"),
    );
    return {
      invitations: yield* IdentityMgr.getInvitations(sessionUser),
      accounts: yield* IdentityMgr.getAccounts(sessionUser),
    };
  }),
);

export const action = ReactRouter.routeEffect(
  ({ request, context }: Route.ActionArgs) =>
    Effect.gen(function* () {
      const FormDataSchema = Schema.Struct({
        accountMemberId: Schema.NumberFromString,
        intent: Schema.Literal("accept", "decline"),
      });
      const formData = yield* SchemaEx.decodeRequestFormData({
        request,
        schema: FormDataSchema,
      });
      switch (formData.intent) {
        case "accept":
          yield* IdentityMgr.acceptInvitation({
            accountMemberId: formData.accountMemberId,
          });
          break;
        case "decline":
          yield* IdentityMgr.declineInvitation({
            accountMemberId: formData.accountMemberId,
          });
          break;
        default:
          return yield* Effect.fail(new Error("Invalid intent"));
      }
      return redirect("/app");
    }),
);

export default function RouteComponent({
  loaderData: { invitations, accounts },
}: Route.ComponentProps) {
  const submit = useSubmit();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nativeEvent = event.nativeEvent;

    if (nativeEvent instanceof SubmitEvent) {
      const submitter = nativeEvent.submitter;
      if (
        submitter &&
        (submitter instanceof HTMLButtonElement ||
          submitter instanceof HTMLInputElement)
      ) {
        submit(submitter);
      } else {
        console.error(
          "Form submission did not originate from a recognized button element (submitter was not a button).",
        );
      }
    } else {
      console.error("Form submission event was not a SubmitEvent.");
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      {invitations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Invitations</CardTitle>
            <CardDescription>
              Invitations awaiting your response.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-4">
              {invitations.map((m) => (
                <li
                  key={m.accountMemberId}
                  className="flex items-center justify-between gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex-grow">
                    <Rac.Link
                      href={`/app/${m.accountId}`}
                      className="text-sm font-medium hover:underline"
                    >
                      {m.account.user.email}
                    </Rac.Link>
                  </div>
                  <div className="flex gap-2">
                    <Rac.Form onSubmit={handleFormSubmit} method="post">
                      <input
                        type="hidden"
                        name="accountMemberId"
                        value={m.accountMemberId}
                      />
                      <Button
                        type="submit"
                        name="intent"
                        value="accept"
                        variant="outline"
                        size="sm"
                      >
                        Accept
                      </Button>
                    </Rac.Form>
                    <Rac.Form onSubmit={handleFormSubmit} method="post">
                      <input
                        type="hidden"
                        name="accountMemberId"
                        value={m.accountMemberId}
                      />
                      <Button
                        type="submit"
                        name="intent"
                        value="decline"
                        variant="destructive"
                        size="sm"
                      >
                        Decline
                      </Button>
                    </Rac.Form>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      <Card>
        <CardHeader>
          <CardTitle>Accounts</CardTitle>
          <CardDescription>Accounts you are a member of.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-4">
            {accounts.map((a) => (
              <li
                key={a.accountId}
                className="flex items-center justify-between gap-4 border-b pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex-grow">
                  <Rac.Link
                    href={`/app/${a.accountId}`}
                    className="text-sm font-medium hover:underline"
                  >
                    {a.user.email}
                  </Rac.Link>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <pre className="text-xs">
        {JSON.stringify({ invitations, accounts }, null, 2)}
      </pre>
    </div>
  );
}
