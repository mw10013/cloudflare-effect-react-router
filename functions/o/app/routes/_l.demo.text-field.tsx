import type { UnknownException } from 'effect/Cause'
import type { Route } from './+types/sandbox'
import * as Oui from '@workspace/oui'
import { SchemaEx } from '@workspace/shared'
import { Effect, Schema } from 'effect'
import * as Rac from 'react-aria-components'
import { useSubmit } from 'react-router'
import { DemoContainer } from '~/components/demo-container'
import { routeEffect } from '~/lib/ReactRouter'

const FormDataSchema = Schema.Struct({
  username: Schema.NonEmptyString.annotations({ message: () => 'Required' })
  // email: Schema.NonEmptyString.annotations({ message: () => 'Required' })
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
      yield* Effect.log({ message: `demo.text-field: action` })
      const formData = yield* SchemaEx.decodeRequestFormData({ request, schema: FormDataSchema })
      return {
        formData
      }
    }).pipe(SchemaEx.catchValidationError)
)

export default function RouteComponent({ actionData }: Route.ComponentProps) {
  const submit = useSubmit()

  return (
    <DemoContainer>
      <Rac.Form
        method="post"
        // validationBehavior="aria"
        validationErrors={actionData?.validationErrors}
        className="grid w-full max-w-sm gap-6"
        onSubmit={(e) => {
          e.preventDefault()
          console.log(`Rac.Form.onSubmit: ${Date.now()}`)
          submit(e.currentTarget)
        }}
      >
        <Oui.TextFieldEx name="username" isRequired label="Username" />
        {/* <Oui.TextFieldEx name="email" label="Email" description="Your best email." /> */}
        <Oui.Button
          type="submit"
          onPress={(e) => {
            console.log(`Oui.Button.onPress: ${Date.now()}`)
            e.continuePropagation()
          }}
        >
          Submit
        </Oui.Button>
      </Rac.Form>
      <pre>{JSON.stringify({ actionData }, null, 2)}</pre>
    </DemoContainer>
  )
}
