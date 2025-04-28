import type { UnknownException } from 'effect/Cause'
import type { Route } from './+types/sandbox'
import * as Oui from '@workspace/oui'
import { SchemaEx } from '@workspace/shared'
import { Effect, Schema } from 'effect'
import * as Rac from 'react-aria-components'
import * as ReactRouter from '~/lib/ReactRouter'

const FormDataSchema = Schema.Struct({
  username: Schema.NonEmptyString.annotations({ message: () => 'Required' }),
  age: Schema.NonEmptyString.annotations({ message: () => 'Required' })
})

export const action = ReactRouter.routeEffect(
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
    <div className="flex min-h-svh flex-col gap-2 p-6">
      <Rac.Form method="post" validationErrors={actionData?.validationErrors} className="grid w-full max-w-sm gap-6">
        <Oui.TextFieldEx name="username" placeholder="shadcn" label="Username" description="This is your public display name." />
        <Oui.NumberFieldEx name="age" placeholder="Enter your age" label="Age" description="This is your age." />
        <Oui.Button type="submit">Submit</Oui.Button>
      </Rac.Form>
      <pre>{JSON.stringify(actionData, null, 2)}</pre>
    </div>
  )
}
