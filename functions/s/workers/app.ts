import type { Client } from '@openauthjs/openauth/client'
import type { AccountWithUser, SessionData } from '~/lib/Domain'
import type { AppLoadContext, Session } from 'react-router'
import { createClient } from '@openauthjs/openauth/client'
import * as Hono from 'hono'
import { createRequestHandler } from 'react-router'
import * as Q from '~/lib/Queue'
import { appLoadContext, makeRuntime } from '../app/lib/ReactRouter'
import * as Api from './Api'
import * as OpenAuth from './OpenAuth'

export { StripeDurableObject } from '~/lib/StripeDurableObject'

declare module 'react-router' {
  export interface AppLoadContext {
    cloudflare: {
      env: Env
      ctx: ExecutionContext
    }
    runtime: ReturnType<typeof makeRuntime>
    openAuth: ReturnType<typeof OpenAuth.make> & { client: Client; redirectUri: string }
    session: Session<SessionData>
    sessionAction: 'commit' | 'destroy'
    account?: AccountWithUser
  }
}

export default {
  async fetch(request, env, ctx) {
    const hono = new Hono.Hono()
    const runtime = makeRuntime(env)
    const openAuth = OpenAuth.make({ env, runtime })
    hono.route('/', openAuth.issuer)
    hono.route('/', Api.make({ runtime }))
    hono.all('*', (c) => {
      const { origin } = new URL(c.req.url)
      const openAuthClient = createClient({
        clientID: 'client',
        // issuer: c.env.OPENAUTH_ISSUER,
        // fetch: (input, init) => c.env.WORKER.fetch(input, init)
        issuer: origin,
        fetch: async (input, init) => openAuth.issuer.fetch(new Request(input, init), env, ctx)
      })
      const initialContext = new Map([
        [
          appLoadContext,
          {
            cloudflare: { env, ctx },
            runtime,
            openAuth: { ...openAuth, client: openAuthClient, redirectUri: `${origin}/callback` },
            session: undefined as unknown as Session<SessionData>, // middleware populates
            sessionAction: 'commit'
          } satisfies AppLoadContext
        ]
      ])
      const requestHandler = createRequestHandler(() => import('virtual:react-router/server-build'), import.meta.env.MODE)
      return requestHandler(c.req.raw, initialContext)
    })
    const response = await hono.fetch(request, env, ctx)
    ctx.waitUntil(runtime.dispose())
    return response
  },
  queue: Q.queue
} satisfies ExportedHandler<Env>
