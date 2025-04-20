import type { Route } from './+types/sandbox'
import { Effect, ParseResult, Schema } from 'effect'
import * as Rac from 'react-aria-components'
import * as Oui from '~/components/oui/oui-index'
import { routeEffect } from '~/lib/ReactRouterEx'
import { SchemaFromFormData } from '~/lib/SchemaEx'

// https://github.com/react-hook-form/resolvers/blob/master/src/toNestErrors.ts

type RacValidationErrors = Record<string, string[]>

/**
 * Formats a ParseError into RacValidationErrors using ArrayFormatter.
 */
const formatParseErrorForRac = (error: ParseResult.ParseError): RacValidationErrors => {
  const validationErrors: RacValidationErrors = {}
  const rootErrorKey = '_' // For errors without a specific path

  const issues = ParseResult.ArrayFormatter.formatIssueSync(error.issue)

  for (const issue of issues) {
    // Join the path array into a dot-separated string, or use root key if path is empty
    const key = issue.path.length > 0 ? issue.path.join('.') : rootErrorKey

    if (!validationErrors[key]) {
      validationErrors[key] = []
    }
    // Avoid adding duplicate messages for the same field path
    if (!validationErrors[key]?.includes(issue.message)) {
      validationErrors[key]?.push(issue.message)
    }
  }

  // Ensure there's at least one error message if the formatter returned nothing specific
  // (This is less likely with ArrayFormatter but good practice)
  if (issues.length === 0 && !validationErrors[rootErrorKey]) {
    validationErrors[rootErrorKey] = [ParseResult.TreeFormatter.formatIssueSync(error.issue)] // Fallback message
  }

  return validationErrors
}

export const action = routeEffect(({ request }: Route.ActionArgs) =>
  Effect.gen(function* () {
    const FormDataSchema = SchemaFromFormData(
      Schema.Struct({
        username: Schema.NonEmptyString.annotations({ message: () => 'username required' })
      })
    )
    const formData = yield* Effect.tryPromise(() => request.formData())
    const result = yield* Schema.decode(FormDataSchema, { errors: 'all' })(formData).pipe(
      Effect.match({
        onFailure: (parseError) => ({
          validationErrors: formatParseErrorForRac(parseError), // Use the updated formatter
          formData: undefined
        }),
        onSuccess: (formData) => ({
          validationErrors: undefined,
          formData
        })
      })
    )
    return result
  })
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
