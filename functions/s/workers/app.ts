import * as Hono from 'hono'
import { createRequestHandler } from 'react-router'
import { appLoadContext, makeRuntime } from '../app/lib/ReactRouter'
import { createOpenAuth } from './openauth'
import type { Client } from '@openauthjs/openauth/client'

declare module 'react-router' {
  export interface AppLoadContext {
    cloudflare: {
      env: Env
      ctx: ExecutionContext
    }
    runtime: ReturnType<typeof makeRuntime>
    client: Client
    redirectUri: string
  }
}

export default {
  async fetch(request, env, ctx) {
    const hono = new Hono.Hono()
    const runtime = makeRuntime(env)
    const openAuth = createOpenAuth({ env, runtime })
    hono.route('/', openAuth)
    hono.all('*', (c) => {
      const requestHandler = createRequestHandler(() => import('virtual:react-router/server-build'), import.meta.env.MODE)
      const initialContext = new Map([[appLoadContext, { cloudflare: { env, ctx }, runtime }]])
      return requestHandler(c.req.raw, initialContext)
    })
    const response = await hono.fetch(request, env, ctx)
    ctx.waitUntil(runtime.dispose())
    return response
  },
  async queue() {}
} satisfies ExportedHandler<Env>
