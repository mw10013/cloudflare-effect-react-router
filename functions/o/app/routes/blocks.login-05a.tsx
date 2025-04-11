import { LoginForm } from '~/lib/components/login-form-05'
import { OuiLoginForm } from '~/lib/components/oui-login-form-05'

export default function RouteComponent() {
  return (
    <div className="flex min-h-svh w-full items-center gap-2 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <OuiLoginForm className="border"/>
      </div>
      <div className="w-full max-w-sm">
        <LoginForm className="border"/>
      </div>
    </div>
  )
}
