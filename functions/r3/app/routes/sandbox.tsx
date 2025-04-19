import type { Route } from './+types/sandbox'
import { Effect, Schema } from 'effect'
import * as Rac from 'react-aria-components'
import * as Oui from '~/components/oui/oui-index'
import { routeEffect } from '~/lib/ReactRouterEx'
import { SchemaFromFormData } from '~/lib/SchemaEx'

export const action = routeEffect(({ request }: Route.ActionArgs) =>
  Effect.gen(function* () {
    const FormDataSchema = SchemaFromFormData(
      Schema.Struct({
        username: Schema.NonEmptyString
      })
    )
    const formData = yield* Effect.tryPromise(() => request.formData()).pipe(Effect.flatMap(Schema.decode(FormDataSchema)))
    // let actionData = {}
    return { formData }
  })
)

export default function RouteComponent(props: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh flex-col gap-2 p-6">
      <Rac.Form method="post" className="grid w-full max-w-sm gap-6">
        <Oui.TextFieldEx name="username" placeholder="shadcn" label="Username" description="This is your public display name." />
        <Oui.Button type="submit">Submit</Oui.Button>
      </Rac.Form>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
