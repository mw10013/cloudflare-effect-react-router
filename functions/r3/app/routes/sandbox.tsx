import type { UnknownException } from 'effect/Cause'
import type { Route } from './+types/sandbox'
import { Effect, ParseResult, Schema } from 'effect'
import * as Rac from 'react-aria-components'
import * as Oui from '~/components/oui/oui-index'
import { routeEffect } from '~/lib/ReactRouterEx'
import { SchemaFromFormData } from '~/lib/SchemaEx'

const parseErrorToValidationErrors = (error: ParseResult.ParseError) => {
  const validationErrors: NonNullable<Rac.FormProps['validationErrors']> = {}
  const issues = ParseResult.ArrayFormatter.formatErrorSync(error)
  for (const issue of issues) {
    const key = issue.path.join('.')
    if (!validationErrors[key]) {
      validationErrors[key] = issue.message
    } else if (typeof validationErrors[key] === 'string') {
      validationErrors[key] = [validationErrors[key], issue.message]
    } else {
      validationErrors[key].push(issue.message)
    }
  }
  return validationErrors
}

const FormDataSchema = SchemaFromFormData(
  Schema.Struct({
    username: Schema.NonEmptyString.annotations({ message: () => 'Required' })
  })
)

export const action = routeEffect(
  ({
    request
  }: Route.ActionArgs): Effect.Effect<
    // Explicitly define A to prevent ts(2742) from inferred non-portable types.
    {
      formData?: Schema.Schema.Type<typeof FormDataSchema>
      validationErrors?: NonNullable<Rac.FormProps['validationErrors']>
    },
    UnknownException
  > =>
    Effect.gen(function* () {
      const formData = yield* Effect.tryPromise(() => request.formData()).pipe(Effect.flatMap(Schema.decode(FormDataSchema)))
      return {
        formData
      }
    }).pipe(Effect.catchTag('ParseError', (error) => Effect.succeed({ validationErrors: parseErrorToValidationErrors(error) })))
)

export default function RouteComponent({ actionData }: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh flex-col gap-2 p-6">
      <Rac.Form method="post" validationErrors={actionData?.validationErrors} className="grid w-full max-w-sm gap-6">
        <Oui.TextFieldEx name="username" placeholder="shadcn" label="Username" description="This is your public display name." />
        <Oui.Button type="submit">Submit</Oui.Button>
      </Rac.Form>
      <pre>{JSON.stringify(actionData, null, 2)}</pre>
    </div>
  )
}
