import type { ManagedRuntime } from 'effect'
import type { AppLoadContext } from 'react-router'
import type { Route } from './+types/effect'
import { Effect } from 'effect'

export const loaderFunction =
  <A, E, P extends { context: AppLoadContext }>(
    f: (props: P) => Effect.Effect<A, E, ManagedRuntime.ManagedRuntime.Context<AppLoadContext['runtime']>>
  ) =>
  (props: P) =>
    f(props).pipe(props.context.runtime.runPromise)

export const loader = loaderFunction(({ context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    yield* Effect.log('loader')
    return { message: `ENVIRONMENT: ${context.cloudflare.env.ENVIRONMENT}` }
  })
)

export default function RouteComponent(props: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh flex-row justify-center gap-2 p-6">
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
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
