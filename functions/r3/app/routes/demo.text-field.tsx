import type { UnknownException } from 'effect/Cause'
import type { Route } from './+types/sandbox'
import { Effect, Schema } from 'effect'
import * as Rac from 'react-aria-components'
import { DemoContainer } from '~/components/demo-container'
import * as Oui from '~/components/oui/oui-index'
import { routeEffect } from '~/lib/ReactRouterEx'
import * as SchemaEx from '~/lib/SchemaEx'

const FormDataSchema = Schema.Struct({
  username: Schema.NonEmptyString.annotations({ message: () => 'Required' }),
  email: Schema.NonEmptyString.annotations({ message: () => 'Required' })
})

export const action = routeEffect(
  ({
    request
  }: Route.ActionArgs): Effect.Effect<
    // Explicitly define A to prevent ts(2742) from inferred non-portable types.
    {
      formData?: Schema.Schema.Type<typeof FormDataSchema>
      validationErrors?: SchemaEx.ValidationErrors
    },
    UnknownException
  > =>
    Effect.gen(function* () {
      const formData = yield* SchemaEx.decodeRequestFormData({ request, schema: FormDataSchema })
      return {
        formData
      }
    }).pipe(SchemaEx.catchValidationError)
)

export default function RouteComponent({ actionData }: Route.ComponentProps) {
  return (
    <DemoContainer>
      <Rac.Form method="post" validationErrors={actionData?.validationErrors} className="grid w-full max-w-sm gap-6">
        <Oui.TextFieldEx name="username" placeholder="shadcn" label="Username" description="This is your public display name." />
        <Oui.TextFieldEx name="email" label="Email" description="Your best email." />
        <Oui.Button type="submit">Submit</Oui.Button>
      </Rac.Form>
      <pre>{JSON.stringify(actionData, null, 2)}</pre>
    </DemoContainer>
  )
}
