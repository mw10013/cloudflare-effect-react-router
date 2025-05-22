import type { UnknownException } from 'effect/Cause'
import type { Route } from './+types/sandbox'
import React from 'react'
import * as Oui from '@workspace/oui'
import { SchemaEx } from '@workspace/shared'
import { Effect, Schema } from 'effect'
import * as Rac from 'react-aria-components'
import { useSubmit } from 'react-router'
import { DemoContainer } from '~/components/demo-container'
import { routeEffect } from '~/lib/ReactRouter'

const FormDataSchema = Schema.Struct({
  age: Schema.NonEmptyString.annotations({ message: () => 'Required' }).pipe(
    Schema.compose(Schema.NumberFromString),
    Schema.positive({ message: () => 'Must be positive' })
  ),
  quantity: Schema.NonEmptyString.annotations({ message: () => 'Required' }).pipe(
    Schema.compose(Schema.NumberFromString),
    Schema.positive({ message: () => 'Must be positive' })
  )
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
  const [formData, setFormData] = React.useState<any>(null)
  const submit = useSubmit()

  return (
    <DemoContainer>
      <Rac.Form
        method="post"
        validationErrors={actionData?.validationErrors}
        className="grid w-full max-w-sm gap-6"
        onSubmit={(e) => {
          e.preventDefault()
          const data = Object.fromEntries(new FormData(e.currentTarget))
          console.log({ data })
          setFormData(data)
          submit(e.currentTarget)
        }}
      >
        <Oui.NumberFieldEx name="age" placeholder="age" label="Age" description="This is your age." />
        <Oui.NumberFieldEx name="quantity" label="Quantity" description="Your best quantity." />
        <Oui.Button type="submit">Submit</Oui.Button>
      </Rac.Form>
      <pre>{JSON.stringify({ actionData }, null, 2)}</pre>
      <pre>{JSON.stringify({ formData }, null, 2)}</pre>
    </DemoContainer>
  )
}
