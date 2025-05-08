import type { AppLoadContext, unstable_RouterContextProvider } from 'react-router'
import { Cloudflare } from '@workspace/shared'
import { Effect, Layer, ManagedRuntime } from 'effect'
import { unstable_createContext } from 'react-router'

export const appLoadContext = unstable_createContext<AppLoadContext>()

export const routeEffect =
  <A, E, P extends { context: unstable_RouterContextProvider }>(
    f: (props: P) => Effect.Effect<A, E, ManagedRuntime.ManagedRuntime.Context<AppLoadContext['runtime']>>
  ) =>
  (props: P) =>
    f(props).pipe(props.context.get(appLoadContext).runtime.runPromise)

export const makeRuntime = (env: Env) => Layer.empty.pipe(Cloudflare.provideLoggerAndConfig(env), ManagedRuntime.make)
