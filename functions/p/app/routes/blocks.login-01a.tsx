import { LoginForm } from '~/lib/components/login-form-01'
import { OuiLoginForm } from '~/lib/components/oui-login-form-01'

export default function RouteComponent() {
  return (
    <div className="flex min-h-svh w-full items-center gap-2 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <OuiLoginForm />
      </div>
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
