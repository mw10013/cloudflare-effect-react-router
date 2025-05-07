import type { Route } from './+types/app.$accountId.members'
import * as Oui from '@workspace/oui'
import { Effect } from 'effect'
import * as Rac from 'react-aria-components'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { IdentityMgr } from '~/lib/IdentityMgr'
import * as ReactRouter from '~/lib/ReactRouter'

export const loader = ReactRouter.routeEffect(({ context }) =>
  Effect.gen(function* () {
    const account = yield* Effect.fromNullable(context.get(ReactRouter.appLoadContext).account)
    const members = yield* IdentityMgr.getAccountMembers(account)
    return { members, accountId: account.accountId }
  })
)

export default function RouteComponent({ loaderData: { members, accountId }, actionData }: Route.ComponentProps) {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Manage Account Members</h1>
        <p className="text-muted-foreground text-sm">Invite new members, manage existing ones, and control access to your account.</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Invite New Members</CardTitle>
          <CardDescription>Enter email addresses separated by commas to send invitations.</CardDescription>
        </CardHeader>
        <Rac.Form method="post" action={`/app/${accountId}/members`}>
          <CardContent className="space-y-4">
            <Oui.TextFieldEx name="emails" label="Email Addresses" type="text" placeholder="e.g., user1@example.com, user2@example.com" />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Oui.Button type="submit" name="intent" value="invite" variant="outline">
              Send Invites
            </Oui.Button>
          </CardFooter>
        </Rac.Form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Account Members</CardTitle>
          <CardDescription>Review and manage members currently part of this account.</CardDescription>
        </CardHeader>
        <CardContent>
          {members && members.length > 0 ? (
            <ul className="divide-border divide-y">
              {members.map((member) => (
                <li key={member.accountMemberId} className="flex flex-wrap items-center justify-between gap-4 py-4">
                  <span className="text-sm font-medium">{member.user.email}</span>
                  <Rac.Form method="post" action={`/app/${accountId}/members`}>
                    <input type="hidden" name="accountMemberId" value={member.accountMemberId} />
                    <Oui.Button type="submit" name="intent" value="revoke" variant="outline" size="sm">
                      Revoke Access
                    </Oui.Button>
                  </Rac.Form>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground text-sm">No members have been added to this account yet.</p>
          )}
        </CardContent>
      </Card>
      <pre>{JSON.stringify({ members, accountId, actionData }, null, 2)}</pre>
    </div>
  )
}
