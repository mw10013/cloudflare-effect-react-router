import type { AppLoadContext, unstable_MiddlewareFunction, unstable_RouterContextProvider } from 'react-router'
import { Cloudflare } from '@workspace/shared'
import { Cause, Effect, Exit, Layer, ManagedRuntime } from 'effect'
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
    // TODO: Consider applying the Exit/throw pattern here too
    f(props).pipe(props.context.get(appLoadContext).runtime.runPromise)

export const middlewareEffect =
  <A, E, P extends { context: unstable_RouterContextProvider }>(
    f: (
      props: P,
      next: Parameters<unstable_MiddlewareFunction<Response>>[1]
    ) => Effect.Effect<A, E | Response, ManagedRuntime.ManagedRuntime.Context<AppLoadContext['runtime']>>
  ) =>
  (props: P, next: Parameters<unstable_MiddlewareFunction<Response>>[1]) =>
    props.context
      .get(appLoadContext)
      .runtime.runPromiseExit(f(props, next))
      .then((exit) => {
        if (Exit.isSuccess(exit)) {
          return exit.value
        }
        const cause = exit.cause
        if (Cause.isFailType(cause) && cause.error instanceof Response) {
          throw cause.error
        }
        throw new Error(`Middleware failed with unhandled cause: ${Cause.pretty(cause)}`)
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
