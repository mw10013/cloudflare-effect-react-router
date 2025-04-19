import { Schema } from 'effect'

/*

String$: The basic schema representing any JavaScript string.
trimmed: A filter function that creates a validation rule: checks if a string already has no leading/trailing whitespace. It validates, doesn't change.
Trimmed: A schema representing a string that must meet the trimmed requirement (no leading/trailing whitespace). Built from String$ + trimmed filter.
Trim: A transform schema. It takes any String$, applies the .trim() action during decoding, and outputs a Trimmed string.

*/

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
export const SchemaFromFormData = <A, I extends Record<string, string>, R>(schema: Schema.Schema<A, I, R>) =>
  Schema.compose(RecordFromFormData, schema, { strict: false })

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
