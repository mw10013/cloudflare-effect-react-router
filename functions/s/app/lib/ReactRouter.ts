import type { AppLoadContext, unstable_MiddlewareFunction, unstable_RouterContextProvider } from 'react-router'
import { Cloudflare } from '@workspace/shared'
import { Cause, Effect, Exit, Layer, ManagedRuntime } from 'effect'
import { isFiberFailure } from 'effect/Runtime'
import { unstable_createContext } from 'react-router'
import { IdentityMgr } from './IdentityMgr'
import * as Q from './Queue'
import { Stripe } from './Stripe'

export const appLoadContext = unstable_createContext<AppLoadContext>()

export const routeEffect =
  <A, E, P extends { context: unstable_RouterContextProvider }>(
    f: (props: P) => Effect.Effect<A, E, ManagedRuntime.ManagedRuntime.Context<AppLoadContext['runtime']>>
  ) =>
  (props: P) =>
    f(props).pipe(props.context.get(appLoadContext).runtime.runPromise)

export const middlewareEffect =
  <A, E, P extends { context: unstable_RouterContextProvider }>(
    f: (
      props: P,
      next: Parameters<unstable_MiddlewareFunction<Response>>[1]
    ) => Effect.Effect<A, E, ManagedRuntime.ManagedRuntime.Context<AppLoadContext['runtime']>>
  ) =>
  (props: P, next: Parameters<unstable_MiddlewareFunction<Response>>[1]) =>
    f(props, next)
      .pipe(
        Effect.tapError((error) => {
          if (error instanceof Response) {
            return Effect.logError('middlewareEffect (tapError): Response received')
          } else {
            // Log non-Response errors/failures from the Effect's E channel
            return Effect.logError(`middlewareEffect (tapError): ${error}`)
          }
        }),
        props.context.get(appLoadContext).runtime.runPromiseExit
      )
      .then((exit) => {
        if (Exit.isSuccess(exit)) {
          // Middleware completed successfully, returned Response A
          if (!(exit.value instanceof Response)) {
            // This indicates a logic error in the middleware definition or execution
            console.error("Middleware effect succeeded but didn't return a Response.", { value: exit.value })
            // Throw a standard error to signal a server-side issue
            throw new Error('Internal Server Error: Middleware succeeded unexpectedly.')
          }
          // Return the successful Response
          return exit.value
        } else {
          // Middleware failed, analyze the cause
          const cause = exit.cause
          if (Cause.isFailType(cause)) {
            const error = cause.error // Fix 1: Use cause.error
            if (error instanceof Response) {
              // Expected failure with Response (redirect, error response)
              console.info(`middlewareEffect: Failing with Response (Status: ${error.status})`)
              // *** Throw the Response object itself ***
              throw error
            } else {
              // Expected failure with other error type E
              console.error(`middlewareEffect: Failing with unhandled expected error (E)`, { error })
              // Throw a standard error to signal a server-side issue
              throw new Error(`Internal Server Error: Unhandled expected error.`)
            }
          } else if (Cause.isDieType(cause)) {
            // Defect (unexpected error)
            const defect = cause.defect
            console.error(`middlewareEffect: Dying with defect`, { defect })
            // Throw the original defect for visibility, or a generic error
            throw defect instanceof Error ? defect : new Error(`Internal Server Error: Unhandled defect.`)
          } else if (Cause.isInterruptType(cause)) {
            // Fix 2: Use isInterruptType
            // Interruption
            console.warn(`middlewareEffect: Interrupted`)
            throw new Error('Internal Server Error: Request interrupted.')
          } else {
            // Should not happen, but handle defensively
            console.error(`middlewareEffect: Failing with unknown cause`, { cause: Cause.pretty(cause) })
            throw new Error(`Internal Server Error: Unknown failure.`)
          }
        }
      })

export const middlewareEffect1 =
  <A, E, P extends { context: unstable_RouterContextProvider }>(
    f: (
      props: P,
      next: Parameters<unstable_MiddlewareFunction<Response>>[1]
    ) => Effect.Effect<A, E, ManagedRuntime.ManagedRuntime.Context<AppLoadContext['runtime']>>
  ) =>
  (props: P, next: Parameters<unstable_MiddlewareFunction<Response>>[1]) =>
    f(props, next)
      .pipe(
        Effect.tapError((error) => {
          if (error instanceof Response) {
            return Effect.logError('middlewareEffect (tapError): Response received')
          } else {
            // Log non-Response errors/failures from the Effect's E channel
            return Effect.logError(`middlewareEffect (tapError): ${error}`)
          }
        }),
        props.context.get(appLoadContext).runtime.runPromise
      )
      .catch((error) => {
        console.log(`middlewareEffect error: ${error}`, { error, cause: error.cause })
        if (isFiberFailure(error) && error.cause instanceof Response) {
          throw error.cause
        }
        throw error
      })

export const makeRuntime = (env: Env) => {
  return Layer.mergeAll(IdentityMgr.Default, Stripe.Default, Q.Producer.Default).pipe(
    Cloudflare.provideLoggerAndConfig(env),
    ManagedRuntime.make
  )
}

/*

export const handler =
  <A, E>(
    h: (
      ...args: Parameters<Handler<AppEnv>>
    ) => Effect.Effect<A | Promise<A>, E, ManagedRuntime.ManagedRuntime.Context<Parameters<Handler<AppEnv>>[0]['var']['runtime']>>
  ) =>
  (...args: Parameters<Handler<AppEnv>>) =>
    h(...args).pipe(
      Effect.flatMap((response) => (Predicate.isPromise(response) ? Effect.tryPromise(() => response) : Effect.succeed(response))),
      orErrorResponse(args[0]),
      args[0].var.runtime.runPromise
    )


export const makeRemixRuntime = <R, E>(layer: Layer.Layer<R, E, never>) => {
  const runtime = ManagedRuntime.make(layer);

  const loaderFunction =
    <A, E>(
      body: (...args: Parameters<LoaderFunction>) => Effect.Effect<A, E, R>
    ): {
      (...args: Parameters<LoaderFunction>): Promise<A>;
    } =>
    (...args) =>
      runtime.runPromise(body(...args));

  return { loaderFunction };
};

export const loader = loaderFunction(() => TodoRepo.getAllTodos);

*/
