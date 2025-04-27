import type { Client } from '@openauthjs/openauth/client'
import type { SessionData } from '~/lib/Domain'
import type { Session } from 'react-router'
import { createClient } from '@openauthjs/openauth/client'
import * as Hono from 'hono'
import { createRequestHandler } from 'react-router'
import { appLoadContext, makeRuntime } from '../app/lib/ReactRouter'
import { createOpenAuth } from './openauth'

export { StripeDurableObject } from '~/lib/Stripe'

declare module 'react-router' {
  export interface AppLoadContext {
    cloudflare: {
      env: Env
      ctx: ExecutionContext
    }
    runtime: ReturnType<typeof makeRuntime>
    session: Session<SessionData>
    sessionAction: 'commit' | 'destroy'
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
      const { origin } = new URL(c.req.url)
      const client = createClient({
        clientID: 'client',
        // issuer: c.env.OPENAUTH_ISSUER,
        // fetch: (input, init) => c.env.WORKER.fetch(input, init)
        issuer: origin,
        fetch: async (input, init) => openAuth.fetch(new Request(input, init), env, ctx)
      })
      const initialContext = new Map([
        [
          appLoadContext,
          {
            cloudflare: { env, ctx },
            runtime,
            session: undefined as unknown as Session<SessionData>, // middleware populates
            sessionAction: 'commit',
            client,
            redirectUri: `${origin}/callback`
          }
        ]
      ])
      const requestHandler = createRequestHandler(() => import('virtual:react-router/server-build'), import.meta.env.MODE)
      return requestHandler(c.req.raw, initialContext)
    })
    const response = await hono.fetch(request, env, ctx)
    ctx.waitUntil(runtime.dispose())
    return response
  },
  async queue() {}
} satisfies ExportedHandler<Env>
