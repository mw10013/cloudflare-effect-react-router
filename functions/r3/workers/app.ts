import type { AppLoadContext } from 'react-router'
import { Effect, Layer, ManagedRuntime } from 'effect'
import { createRequestHandler } from 'react-router'
import * as CloudflareEx from '~/lib/CloudflareEx'

declare module 'react-router' {
  export interface AppLoadContext {
    cloudflare: {
      env: Env
      ctx: ExecutionContext
    }
    runtime: ReturnType<typeof makeRuntime>
  }
}

const requestHandler = createRequestHandler(() => import('virtual:react-router/server-build'), import.meta.env.MODE)

export class SandboxService extends Effect.Service<SandboxService>()('SandboxService', {
  accessors: true,
  effect: Effect.gen(function* () {
    return {
      foo: () =>
        Effect.gen(function* () {
          yield* Effect.log('SandboxService: foo')
          return 'bar'
        })
    }
  })
}) {}

export const loaderFunction =
  <A, E, P extends { context: AppLoadContext }>(
    f: (props: P) => Effect.Effect<A, E, ManagedRuntime.ManagedRuntime.Context<AppLoadContext['runtime']>>
  ) =>
  (props: P) =>
    f(props).pipe(props.context.runtime.runPromise)

const makeRuntime = () => {
  return Layer.mergeAll(SandboxService.Default).pipe(CloudflareEx.provideLoggerAndConfig, ManagedRuntime.make)
}

export default {
  async fetch(request, env, ctx) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
      runtime: makeRuntime()
    })
  }
} satisfies ExportedHandler<Env>

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

