import type { AppLoadContext, unstable_MiddlewareFunction } from 'react-router'
import type { Route } from './+types/app.$accountId'
import { Cause, Effect, Exit, ManagedRuntime } from 'effect'
import { Outlet, unstable_RouterContextProvider } from 'react-router'
import * as ReactRouter from '~/lib/ReactRouter'

type T = Parameters<Route.unstable_MiddlewareFunction>[0]

// Define a base shape for the middleware arguments by extracting the first
// parameter type from the generic unstable_MiddlewareFunction.
// This ensures the base shape matches the library's definition, allowing
// specific types (like params) to be inferred contextually later.
type BaseMiddlewareArgs = Parameters<unstable_MiddlewareFunction<Response>>[0]

// Define the generic next function type
type MiddlewareNext = Parameters<unstable_MiddlewareFunction<Response>>[1]

export const middlewareEffect =
  <
    // Success type of the Effect (usually undefined for middleware)
    A,
    // Error type of the Effect (excluding Response)
    E,
    // Generic Args type, constrained to the base shape derived above.
    // This 'Args' will be specialized by contextual typing during usage.
    Args extends BaseMiddlewareArgs
  >(
    // f receives the potentially specialized 'Args' type and the standard 'MiddlewareNext'
    f: (
      args: Args,
      next: MiddlewareNext
    ) => Effect.Effect<A | undefined, E | Response, ManagedRuntime.ManagedRuntime.Context<AppLoadContext['runtime']>>
  ) =>
  // The function returned by middlewareEffect must also accept this potentially specialized 'Args'
  (args: Args, next: MiddlewareNext): Promise<A | undefined> => {
    // Get runtime from the context within args
    const runtime = args.context.get(ReactRouter.appLoadContext).runtime
    return runtime.runPromiseExit(f(args, next)).then((exit) => {
      if (Exit.isSuccess(exit)) {
        return exit.value
      }
      const cause = exit.cause
      // Check specifically for Fail<Response>
      if (Cause.isFailType(cause) && cause.error instanceof Response) {
        throw cause.error // Throw the Response for the server framework
      }
      // For all other failure types
      throw new Error(`Middleware failed with unhandled cause: ${Cause.pretty(cause)}`)
    })
  }

const accountMiddleware: Route.unstable_MiddlewareFunction = middlewareEffect(({ params }) => Effect.succeed(undefined))

// export const accountMiddleware = middlewareEffect(({ context }: Parameters<Route.unstable_MiddlewareFunction>[0]) =>
//   Effect.gen(function* () {

//   })
//   )

// export const middlewareEffect =
//   <
//     A,
//     E,
//     P extends { request: Request; params: Params; context: unstable_RouterContextProvider },
//     N extends Parameters<unstable_MiddlewareFunction<Response>>[1]
//   >(
//     f: (props: P, next: N) => Effect.Effect<A, E, ManagedRuntime.ManagedRuntime.Context<AppLoadContext['runtime']>>
//   ) =>
//   (props: P, next: N) =>
//     props.context
//       .get(ReactRouter.appLoadContext)
//       // Using runPromiseExit instead of runPromise to throw error of fail type cause.
//       // Importantly, a Response error will be thrown to short-circuit the middleware chain.
//       .runtime.runPromiseExit(f(props, next))
//       .then((exit) => {
//         if (Exit.isSuccess(exit)) {
//           return exit.value
//         }
//         const cause = exit.cause
//         const message = `Middleware failed with cause: ${Cause.pretty(cause)}`
//         console.error({ message, cause })
//         if (Cause.isFailType(cause)) {
//           throw cause.error
//         }
//         throw new Error(message)
//       })

// export const accountMiddleware = ReactRouter.middlewareEffect(({ context }: Parameters<Route.unstable_MiddlewareFunction>[0]) =>
//   Effect.gen(function* () {

//   )

// export const unstable_middleware = [accountMiddleware]

/*
  app.use(
    'app/:accountId/*',
    middleware((c, next) =>
      Effect.gen(function* () {
        const AccountIdFromPath = Schema.compose(Schema.NumberFromString, Account.fields.accountId)
        const accountId = yield* Schema.decodeUnknown(AccountIdFromPath)(c.req.param('accountId'))
        const account = yield* Effect.fromNullable(c.var.sessionData.sessionUser).pipe(
          Effect.flatMap((sessionUser) =>
            IdentityMgr.getAccountForMember({
              accountId,
              userId: sessionUser.userId
            })
          ),
          Effect.tapError((e) => Effect.log(`middleware accountId error:`, e)),
          Effect.orElseSucceed(() => null)
        )
        if (!account) {
          return c.redirect('/app')
        }
        c.set('account', account)
        yield* Effect.tryPromise(() => next())
      })
    )
  )
*/

export default function RouteComponent() {
  return (
    <div className="p-6">
      <Outlet />
    </div>
  )
}
