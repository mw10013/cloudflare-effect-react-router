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
    f(props).pipe(props.context.get(appLoadContext).runtime.runPromise)

export const middlewareEffect =
  <
    A,
    E,
    P extends { request: Request; params: Params; context: unstable_RouterContextProvider },
    N extends Parameters<unstable_MiddlewareFunction<Response>>[1]
  >(
    f: (props: P, next: N) => Effect.Effect<A, E, ManagedRuntime.ManagedRuntime.Context<AppLoadContext['runtime']>>
  ) =>
  (props: P, next: N) =>
    props.context
      .get(appLoadContext)
      // Using runPromiseExit instead of runPromise to throw error of fail type cause.
      // Importantly, a Response error will be thrown to short-circuit the middleware chain.
      .runtime.runPromiseExit(f(props, next))
      .then((exit) => {
        if (Exit.isSuccess(exit)) {
          return exit.value
        }
        const cause = exit.cause
        const message = `Middleware failed with cause: ${Cause.pretty(cause)}`
        console.error({ message, cause })
        if (Cause.isFailType(cause)) {
          throw cause.error
        }
        throw new Error(message)
      })

export const makeRuntime = (env: Env) => {
  return Layer.mergeAll(IdentityMgr.Default, Stripe.Default, Q.Producer.Default).pipe(
    Cloudflare.provideLoggerAndConfig(env),
    ManagedRuntime.make
  )
}

/*

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
