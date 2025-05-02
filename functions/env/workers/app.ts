import type { AppLoadContext } from 'react-router'
import { createRequestHandler, unstable_createContext } from 'react-router'

// import { appLoadContext, makeRuntime } from '~/ReactRouter'

export const appLoadContext = unstable_createContext<AppLoadContext>()

declare module 'react-router' {
  export interface AppLoadContext {
    cloudflare: {
      env: Env
      ctx: ExecutionContext
    }
    // runtime: ReturnType<typeof makeRuntime>
  }
}

export default {
  async fetch(request, env, ctx) {
    // const runtime = makeRuntime(env)

    // const initialContext = new Map([
    //   [
    //     appLoadContext,
    //     {
    //       cloudflare: { env, ctx },
    //       runtime
    //     }
    //   ]
    // ])

    const initialContext = new Map([
      [
        appLoadContext,
        {
          cloudflare: { env, ctx }
        }
      ]
    ])

    const requestHandler = createRequestHandler(() => import('virtual:react-router/server-build'), import.meta.env.MODE)
    // Pass the simplified context object directly
    const response = await requestHandler(request, initialContext)
    // ctx.waitUntil(runtime.dispose()) // Cannot dispose runtime if it's not created
    return response
  }
} satisfies ExportedHandler<Env>
