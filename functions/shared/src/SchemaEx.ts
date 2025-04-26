import { Data, Effect, ParseResult, Predicate, Schema } from 'effect'
import * as Rac from 'react-aria-components'

/*

String$: The basic schema representing any JavaScript string.
trimmed: A filter function that creates a validation rule: checks if a string already has no leading/trailing whitespace. It validates, doesn't change.
Trimmed: A schema representing a string that must meet the trimmed requirement (no leading/trailing whitespace). Built from String$ + trimmed filter.
Trim: A transform schema. It takes any String$, applies the .trim() action during decoding, and outputs a Trimmed string.

*/

export const DataFromResult = <A, I>(DataSchema: Schema.Schema<A, I>) =>
  Schema.transform(
    Schema.Struct({
      data: Schema.String
    }),
    Schema.parseJson(DataSchema),
    {
      strict: true,
      decode: (result) => result.data,
      encode: (value) => ({ data: value })
    }
  )

export const FormDataFromSelf = Schema.instanceOf(FormData).annotations({ identifier: 'FormDataFromSelf' })
// https://discord.com/channels/795981131316985866/847382157861060618/threads/1270826681505939517
// https://raw.githubusercontent.com/react-hook-form/resolvers/refs/heads/dev/effect-ts/src/effect-ts.ts

export const FileFromSelf = Schema.instanceOf(File).annotations({ identifier: 'FileFromSelf' })

export const RecordFromFormData = Schema.transform(
  FormDataFromSelf,
  Schema.Record({ key: Schema.String, value: Schema.Union(Schema.Trim, FileFromSelf) }),
  {
    strict: false,
    decode: (formData) => Object.fromEntries(formData.entries()),
    encode: (data) => {
      const formData = new FormData()
      for (const [key, value] of Object.entries(data)) {
        formData.append(key, value)
      }
      return formData
    }
  }
).annotations({ identifier: 'RecordFromFormData' })

/**
 * Creates a schema that decodes a `FormData` object into the structure
 * defined by the provided `schema`.
 *
 * It handles the intermediate transformation from `FormData` to `Record<string, string | File>`
 * before applying the provided schema.
 *
 * @param schema - The schema defining the desired output data structure.
 * @example
 * Effect.gen(function* () {
 *	const FormDataSchema = SchemaFromFormData(
 *		Schema.Struct({
 *			username: Schema.NonEmptyString
 *		})
 *	)
 *	const formData = yield* Effect.tryPromise(() => request.formData()).pipe(Effect.flatMap(Schema.decode(FormDataSchema)))
 */
export const SchemaFromFormData = <A, I extends Record<string, string | File>, R>(schema: Schema.Schema<A, I, R>) =>
  Schema.compose(RecordFromFormData, schema, { strict: false })

// Defined to prevent ts(2742) from inferred non-portable types.
export type ValidationErrors = NonNullable<Rac.FormProps['validationErrors']>

export const parseErrorToValidationErrors = (error: ParseResult.ParseError): ValidationErrors => {
  const validationErrors: ValidationErrors = {}
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

export class ValidationError extends Data.TaggedError('ValidationError')<{
  message: string
  validationErrors: ValidationErrors
  cause: ParseResult.ParseError
}> {}

export const decodeRequestFormData = <A, I extends Record<string, string | File>, R>({
  request,
  schema
}: {
  request: Request
  schema: Schema.Schema<A, I, R>
}) =>
  Effect.tryPromise(() => request.formData()).pipe(
    Effect.flatMap(Schema.decode(SchemaFromFormData(schema), { errors: 'all' })),
    Effect.mapError((e) =>
      ParseResult.isParseError(e)
        ? new ValidationError({
            message: 'Validation failed',
            validationErrors: parseErrorToValidationErrors(e),
            cause: e
          })
        : e
    ),
    Effect.tap((data) =>
      Effect.logTrace({
        message: `decodeRequestFormData succeeded`,
        data
      })
    ),
    Effect.tapErrorTag('ValidationError', (error) =>
      Effect.logTrace({
        message: `decodeRequestFormData failed with ValidationError`,
        validationErrors: error.validationErrors
      })
    )
  )

/**
 * Catches `ValidationError` from an Effect and transforms it into a success
 * value `{ validationErrors: ValidationErrors }`. Other errors in the
 * error channel `E` are preserved.
 */
export const catchValidationError = <A, E, R>(
  self: Effect.Effect<A, E | ValidationError, R>
): Effect.Effect<A | { validationErrors: ValidationErrors }, Exclude<E, ValidationError>, R> =>
  Effect.matchEffect(self, {
    onFailure: (error) =>
      Predicate.isTagged('ValidationError')(error)
        ? Effect.succeed({ validationErrors: error.validationErrors })
        : Effect.fail(error as Exclude<E, ValidationError>), // Type assertion confirms 'error' is narrowed to E excluding ValidationError.
    onSuccess: Effect.succeed
  })

/*  
export const catchValidationError = <A, E, R>(
  self: Effect.Effect<A, E | ValidationError, R>
): Effect.Effect<A | { validationErrors: ValidationErrors }, Exclude<E, ValidationError>, R> =>
  Effect.catchTag(self, 'ValidationError', (error) => {
    const validationError = error as ValidationError
    return Effect.succeed({ validationErrors: validationError.validationErrors })
    // Necessary assertion: TypeScript infers the error channel after catchTag as
    // `Exclude<E | ValidationError, { _tag: "ValidationError" }>` (structural exclusion).
    // This is not directly assignable to the desired `Exclude<E, ValidationError>` (nominal exclusion)
    // when E is generic. The assertion bridges this inference gap.
  }) as Effect.Effect<A | { validationErrors: ValidationErrors }, Exclude<E, ValidationError>, R>
*/
