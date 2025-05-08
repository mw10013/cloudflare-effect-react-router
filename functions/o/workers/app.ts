import type { AppLoadContext } from 'react-router'
import { createRequestHandler } from 'react-router'
import { appLoadContext, makeRuntime } from '../app/lib/ReactRouter'

declare module 'react-router' {
  export interface AppLoadContext {
    cloudflare: {
      env: Env
      ctx: ExecutionContext
    }
    runtime: ReturnType<typeof makeRuntime>
  }
}

export default {
  async fetch(request, env, ctx) {
    const runtime = makeRuntime(env)
    const initialContext = new Map([
      [
        appLoadContext,
        {
          cloudflare: { env, ctx },
          runtime
        } satisfies AppLoadContext
      ]
    ])

    const requestHandler = createRequestHandler(() => import('virtual:react-router/server-build'), import.meta.env.MODE)
    const response = await requestHandler(request, initialContext)
    ctx.waitUntil(runtime.dispose())
    return response
  }
} satisfies ExportedHandler<Env>
