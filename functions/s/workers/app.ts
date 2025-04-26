import * as Hono from 'hono'
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

// const requestHandler = createRequestHandler(() => import('virtual:react-router/server-build'), import.meta.env.MODE)

export default {
  async fetch(request, env, ctx) {
    const hono = new Hono.Hono()
    const runtime = makeRuntime(env)
    // ctx.waitUntil(runtime.dispose())
    // return requestHandler(request, initialContext)
    hono.all('*', (c) => {
      const requestHandler = createRequestHandler(() => import('virtual:react-router/server-build'), import.meta.env.MODE)
      const initialContext = new Map([[appLoadContext, { cloudflare: { env, ctx }, runtime }]])
      return requestHandler(c.req.raw, initialContext)
    })
    return hono.fetch(request, env, ctx)
  },
  async queue() {}
} satisfies ExportedHandler<Env>

/*

const app = new Hono();

// Add more routes here

app.get("*", c => {
  const requestHandler = createRequestHandler(
    () => import("virtual:react-router/server-build"),
    import.meta.env.MODE
  );

  return requestHandler(c.req.raw, {
    cloudflare: { env: c.env, ctx: c.executionCtx }
  })
})

*/
