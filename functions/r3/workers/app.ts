import { createRequestHandler } from 'react-router'
import { makeRuntime } from '../app/lib/ReactRouterEx'

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

export default {
  async fetch(request, env, ctx) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
      runtime: makeRuntime()
    })
  }
} satisfies ExportedHandler<Env>
