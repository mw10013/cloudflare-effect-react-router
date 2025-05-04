import type { Route } from './+types/callback'
import { Effect } from 'effect'
import { redirect } from 'react-router'
import * as ReactRouter from '~/lib/ReactRouter'

export const loader = ReactRouter.routeEffect(({ request, context }: Route.LoaderArgs) =>
  Effect.gen(function* () {
    const url = new URL(request.url)
    const errorParam = url.searchParams.get('error')
    const errorDescParam = url.searchParams.get('error_description')
    const code = url.searchParams.get('code')

    if (errorParam) {
      return yield* Effect.fail(new Error(errorDescParam || errorParam))
    }
    if (!code) {
      return yield* Effect.fail(new Error('Missing authorization code'))
    }

    const appLoadContext = context.get(ReactRouter.appLoadContext)

    const exchanged = yield* Effect.tryPromise({
      try: () => appLoadContext.openAuth.client.exchange(code, appLoadContext.openAuth.redirectUri),
      catch: (unknown) => new Error(`Token exchange failed: ${unknown}`)
    })

    if (exchanged.err) {
      return yield* Effect.fail(exchanged.err)
    }

    // Verify the access token and get subject properties
    // The client's fetch override (set in app.ts) handles the internal fetch call
    const verified = yield* Effect.tryPromise({
      try: () =>
        appLoadContext.openAuth.client.verify(appLoadContext.openAuth.subjects, exchanged.tokens.access, {
          refresh: exchanged.tokens.refresh
        }),
      catch: (unknown) => new Error(`Token verification failed: ${unknown}`)
    })
    if (verified.err) {
      return yield* Effect.fail(verified.err)
    }
    const { userId, email, userType } = verified.subject.properties
    appLoadContext.session.set('sessionUser', { userId, email, userType })
    yield* Effect.log({ message: 'Callback: verified', sessionUser: appLoadContext.session.get('sessionUser') })
    return redirect(userType === 'staffer' ? '/admin' : '/app')
  }).pipe(
    Effect.catchAll((error) => {
      console.error('Callback loader error:', error)
      // Optionally flash the error to the session before redirecting
      // appLoadContext?.session.flash('error', error.message || 'Authentication failed');
      // Redirect to a login or error page
      return Effect.succeed(redirect('/authenticate?error=' + encodeURIComponent(error.message || 'Unknown error')))
      // Or return an error response directly:
      // return Effect.succeed(new Response(error.message || 'Authentication failed', { status: 500 }))
    })
  )
)

/*

  app.get('/callback', async (c) => {
    try {
      // http://localhost:8787/callback?error=server_error&error_description=D1_ERROR%3A+NOT+NULL+constraint+failed%3A+users.passwordHash%3A+SQLITE_CONSTRAINT
      if (c.req.query('error')) throw new Error(c.req.query('error_description') || c.req.query('error'))
      const code = c.req.query('code')
      if (!code) throw new Error('Missing code')
      const exchanged = await c.var.client.exchange(code, c.var.redirectUri)
      if (exchanged.err) throw exchanged.err
      const verified = await c.var.client.verify(subjects, exchanged.tokens.access, {
        refresh: exchanged.tokens.refresh,
        // fetch: (input, init) => c.env.WORKER.fetch(input, init)
        fetch: async (input, init) => openAuth.fetch(new Request(input, init), env, ctx)
      })
      if (verified.err) throw verified.err
      c.set('sessionData', {
        ...c.var.sessionData,
        sessionUser: {
          userId: verified.subject.properties.userId,
          email: verified.subject.properties.email,
          userType: verified.subject.properties.userType
        }
      })
      return c.redirect(verified.subject.properties.userType === 'staffer' ? '/admin' : '/app')
    } catch (e: any) {
      return new Response(e.toString())
    }
  })

  */
