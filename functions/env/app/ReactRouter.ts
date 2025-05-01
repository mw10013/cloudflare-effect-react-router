import type { AppLoadContext } from 'react-router'
import type { unstable_MiddlewareFunction, unstable_RouterContextProvider } from 'react-router'
import { Cloudflare } from '@workspace/shared'
import { Context, Effect, Layer, ManagedRuntime } from 'effect'
import { unstable_createContext } from 'react-router'

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
    f(props, next).pipe(props.context.get(appLoadContext).runtime.runPromise)

  export const makeRuntime = (env: Env) => {
    return ManagedRuntime.make(Layer.empty);
  };

  // export const makeRuntime = (env: Env) => {
  //   return Layer.mergeAll(IdentityMgr.Default, Stripe.Default, Q.Producer.Default).pipe(
  //     Cloudflare.provideLoggerAndConfig(env),
  //     ManagedRuntime.make
  //   )
  // }
    