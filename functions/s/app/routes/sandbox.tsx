import type { SessionData } from '~/lib/Domain'
import type { UnknownException } from 'effect/Cause'
import type { Route } from './+types/sandbox'
import { createWorkersKVSessionStorage } from '@react-router/cloudflare'
import * as Oui from '@workspace/oui'
import { SchemaEx } from '@workspace/shared'
import { Effect, Schema } from 'effect'
import * as Rac from 'react-aria-components'
import * as ReactRouter from '~/lib/ReactRouter'

export const sessionMiddleware: Route.unstable_MiddlewareFunction = async ({ request, context }, next) => {
  const appLoadContext = context.get(ReactRouter.appLoadContext)
  const { getSession, commitSession, destroySession } = createWorkersKVSessionStorage<SessionData>({
    cookie: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes
      // // Relax cookie constraints for local development without https
      name: appLoadContext.cloudflare.env.ENVIRONMENT === 'local' ? 'local-session' : '__Host-session',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secrets: [appLoadContext.cloudflare.env.COOKIE_SECRET],
      secure: appLoadContext.cloudflare.env.ENVIRONMENT !== 'local'
    },
    kv: appLoadContext.cloudflare.env.KV
  })
  const session = await getSession(request.headers.get('Cookie'))
  const sessionUser = session.get('sessionUser')
  console.log({ message: `sessionMiddleware: sessionUser`, sessionUser, sessionData: session.data })
  const response = await next()
  response.headers.set('Set-Cookie', await commitSession(session))
  return response
}

export const unstable_middleware = [sessionMiddleware]

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
