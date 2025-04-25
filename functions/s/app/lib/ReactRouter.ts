import type { AppLoadContext, unstable_RouterContextProvider } from 'react-router'
import { CloudflareEx } from '@workspace/shared'
import { Effect, Layer, ManagedRuntime } from 'effect'
import { unstable_createContext } from 'react-router'

export const appLoadContext = unstable_createContext<AppLoadContext>()

export const routeEffect =
  <A, E, P extends { context: unstable_RouterContextProvider }>(
    f: (props: P) => Effect.Effect<A, E, ManagedRuntime.ManagedRuntime.Context<AppLoadContext['runtime']>>
  ) =>
  (props: P) =>
    f(props).pipe(props.context.get(appLoadContext).runtime.runPromise)

// export const routeEffect =
//   <A, E, P extends { context: AppLoadContext }>(
//     f: (props: P) => Effect.Effect<A, E, ManagedRuntime.ManagedRuntime.Context<AppLoadContext['runtime']>>
//   ) =>
//   (props: P) =>
//     f(props).pipe(props.context.runtime.runPromise)

export const makeRuntime = () => {
  return Layer.mergeAll(Layer.empty).pipe(CloudflareEx.provideLoggerAndConfig, ManagedRuntime.make)
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
