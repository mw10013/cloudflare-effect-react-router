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

const requestHandler = createRequestHandler(() => import('virtual:react-router/server-build'), import.meta.env.MODE)

export default {
  async fetch(request, env, ctx) {
    const runtime = makeRuntime(env)
    const initialContext = new Map([[appLoadContext, { cloudflare: { env, ctx }, runtime }]])
    // ctx.waitUntil(runtime.dispose())
    return requestHandler(request, initialContext)
  },
  async queue() {}
} satisfies ExportedHandler<Env>
