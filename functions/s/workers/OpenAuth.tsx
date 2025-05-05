/** @jsxImportSource hono/jsx */
import type { v1 } from '@standard-schema/spec'
import type { AppLoadContext } from 'react-router'
import { issuer } from '@openauthjs/openauth'
import { CodeProvider } from '@openauthjs/openauth/provider/code'
import { CloudflareStorage } from '@openauthjs/openauth/storage/cloudflare'
import { createSubjects } from '@openauthjs/openauth/subject'
import { Layout as OpenAuthLayout } from '@openauthjs/openauth/ui/base'
import { CodeUI } from '@openauthjs/openauth/ui/code'
import { FormAlert } from '@openauthjs/openauth/ui/form'
import { Config, Effect, Schema } from 'effect'
import { UserSubject } from '~/lib/Domain'
import { IdentityMgr } from '~/lib/IdentityMgr'
import * as Q from '~/lib/Queue'

export type Subjects = {
  readonly user: v1.StandardSchema<
    Schema.Schema.Type<typeof UserSubject>, // Decoded type (A)
    Schema.Schema.Encoded<typeof UserSubject> // Encoded type (I)
  >
}

export function make({ env, runtime }: { env: Env; runtime: AppLoadContext['runtime'] }) {
  const { request, ...codeUi } = CodeUI({
    copy: {
      code_placeholder: 'Code (check Worker logs)'
    },
    sendCode: async (claims, code) =>
      Effect.gen(function* () {
        yield* Effect.log(`sendCode: ${claims.email} ${code}`)
        if (env.ENVIRONMENT === 'local') {
          yield* Effect.tryPromise(() => env.KV.put(`local:code`, code, { expirationTtl: 60 }))
        }
        // Body MUST contain email to help identify complaints.
        yield* Q.Producer.send({
          type: 'email',
          to: claims.email,
          from: yield* Config.nonEmptyString('COMPANY_EMAIL'),
          subject: 'Your Login Verification Code',
          html: `Hey ${claims.email},<br><br>Please enter the following code to complete your login: ${code}.<br><br>If the code does not work, please request a new verification code.<br><br>Thanks, Team.`,
          text: `Hey ${claims.email} - Please enter the following code to complete your login: ${code}. If the code does not work, please request a new verification code. Thanks, Team.`
        })
      }).pipe(runtime.runPromise)
  })
  // Explicit type annotation to ensure a portable inferred return type for 'make' function.
  const subjects: Subjects = createSubjects({
    user: Schema.standardSchemaV1(UserSubject)
  })
  return {
    subjects,
    issuer: issuer({
      ttl: {
        access: 60 * 30,
        refresh: 60 * 30,
        reuse: 0 // https://github.com/openauthjs/openauth/issues/133#issuecomment-2614264698
      },
      storage: CloudflareStorage({
        // @ts-expect-error TS2322: This error is expected due to type mismatch with KVNamespace
        namespace: env.KV
      }),
      subjects,
      providers: {
        code: CodeProvider({
          ...codeUi,
          request: async (_req, state, _form, error): Promise<Response> => {
            if (state.type === 'code' && env.ENVIRONMENT === 'local') {
              const code = await env.KV.get('local:code')
              if (code) {
                const copy = {
                  button_continue: 'Continue',
                  code_invalid: 'Invalid code',
                  code_sent: 'Code sent to ',
                  code_resent: 'Code resent to ',
                  code_didnt_get: "Didn't get code?",
                  code_resend: 'Resend'
                }
                const jsx = (
                  <OpenAuthLayout>
                    <form data-component="form" class="form" method="post">
                      {error?.type === 'invalid_code' && <FormAlert message={copy.code_invalid} />}
                      {state.type === 'code' && (
                        <FormAlert message={(state.resend ? copy.code_resent : copy.code_sent) + state.claims.email} color="success" />
                      )}
                      <input type="hidden" name="action" value="verify" />
                      <input
                        data-component="input"
                        autofocus
                        minLength={6}
                        maxLength={6}
                        type="text"
                        name="code"
                        required
                        inputmode="numeric"
                        autocomplete="one-time-code"
                        value={code}
                      />
                      <button data-component="button">{copy.button_continue}</button>
                    </form>
                    <form method="post">
                      {Object.entries(state.claims).map(([key, value]) => (
                        <input key={key} type="hidden" name={key} value={value} className="hidden" />
                      ))}
                      <input type="hidden" name="action" value="request" />
                      <div data-component="form-footer">
                        <span>
                          {copy.code_didnt_get} <button data-component="link">{copy.code_resend}</button>
                        </span>
                      </div>
                    </form>
                  </OpenAuthLayout>
                )
                return new Response(jsx.toString(), {
                  headers: {
                    'Content-Type': 'text/html'
                  }
                })
              }
            }
            return request(_req, state, _form, error)
          }
        })
      },
      success: async (ctx, value) =>
        IdentityMgr.provisionUser({ email: value.claims.email }).pipe(
          Effect.flatMap((user) =>
            Effect.tryPromise(() =>
              ctx.subject('user', {
                userId: user.userId,
                email: user.email,
                userType: user.userType
              })
            )
          ),
          runtime.runPromise
        )
    })
  }
}

// export const subjects: Subjects = createSubjects({
//   user: Schema.standardSchemaV1(UserSubject)
// })

// export function createOpenAuth({ env, runtime }: { env: Env; runtime: ReturnType<typeof makeRuntime> }) {
//   const { request, ...codeUi } = CodeUI({
//     copy: {
//       code_placeholder: 'Code (check Worker logs)'
//     },
//     sendCode: async (claims, code) =>
//       Effect.gen(function* () {
//         yield* Effect.log(`sendCode: ${claims.email} ${code}`)
//         if (env.ENVIRONMENT === 'local') {
//           yield* Effect.tryPromise(() => env.KV.put(`local:code`, code, { expirationTtl: 60 }))
//         }
//         // Body MUST contain email to help identify complaints.
//         yield* Q.Producer.send({
//           type: 'email',
//           to: claims.email,
//           from: yield* Config.nonEmptyString('COMPANY_EMAIL'),
//           subject: 'Your Login Verification Code',
//           html: `Hey ${claims.email},<br><br>Please enter the following code to complete your login: ${code}.<br><br>If the code does not work, please request a new verification code.<br><br>Thanks, Team.`,
//           text: `Hey ${claims.email} - Please enter the following code to complete your login: ${code}. If the code does not work, please request a new verification code. Thanks, Team.`
//         })
//       }).pipe(runtime.runPromise)
//   })
//   return issuer({
//     ttl: {
//       access: 60 * 30,
//       refresh: 60 * 30,
//       reuse: 0 // https://github.com/openauthjs/openauth/issues/133#issuecomment-2614264698
//     },
//     storage: CloudflareStorage({
//       // @ts-expect-error TS2322: This error is expected due to type mismatch with KVNamespace
//       namespace: env.KV
//     }),
//     subjects,
//     providers: {
//       code: CodeProvider({
//         ...codeUi,
//         request: async (_req, state, _form, error): Promise<Response> => {
//           if (state.type === 'code' && env.ENVIRONMENT === 'local') {
//             const code = await env.KV.get('local:code')
//             if (code) {
//               const copy = {
//                 button_continue: 'Continue',
//                 code_invalid: 'Invalid code',
//                 code_sent: 'Code sent to ',
//                 code_resent: 'Code resent to ',
//                 code_didnt_get: "Didn't get code?",
//                 code_resend: 'Resend'
//               }
//               const jsx = (
//                 <OpenAuthLayout>
//                   <form data-component="form" class="form" method="post">
//                     {error?.type === 'invalid_code' && <FormAlert message={copy.code_invalid} />}
//                     {state.type === 'code' && (
//                       <FormAlert message={(state.resend ? copy.code_resent : copy.code_sent) + state.claims.email} color="success" />
//                     )}
//                     <input type="hidden" name="action" value="verify" />
//                     <input
//                       data-component="input"
//                       autofocus
//                       minLength={6}
//                       maxLength={6}
//                       type="text"
//                       name="code"
//                       required
//                       inputmode="numeric"
//                       autocomplete="one-time-code"
//                       value={code}
//                     />
//                     <button data-component="button">{copy.button_continue}</button>
//                   </form>
//                   <form method="post">
//                     {Object.entries(state.claims).map(([key, value]) => (
//                       <input key={key} type="hidden" name={key} value={value} className="hidden" />
//                     ))}
//                     <input type="hidden" name="action" value="request" />
//                     <div data-component="form-footer">
//                       <span>
//                         {copy.code_didnt_get} <button data-component="link">{copy.code_resend}</button>
//                       </span>
//                     </div>
//                   </form>
//                 </OpenAuthLayout>
//               )
//               return new Response(jsx.toString(), {
//                 headers: {
//                   'Content-Type': 'text/html'
//                 }
//               })
//             }
//           }
//           return request(_req, state, _form, error)
//         }
//       })
//     },
//     success: async (ctx, value) =>
//       IdentityMgr.provisionUser({ email: value.claims.email }).pipe(
//         Effect.flatMap((user) =>
//           Effect.tryPromise(() =>
//             ctx.subject('user', {
//               userId: user.userId,
//               email: user.email,
//               userType: user.userType
//             })
//           )
//         ),
//         runtime.runPromise
//       )
//   })
// }
