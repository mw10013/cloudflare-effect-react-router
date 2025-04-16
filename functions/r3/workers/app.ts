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

export const makeRuntime = () => {
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
