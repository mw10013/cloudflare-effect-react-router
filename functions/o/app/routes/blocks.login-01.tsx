import { OuiLoginForm } from '~/lib/components/oui-login-form-01'

export default function RouteComponent() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <OuiLoginForm />
      </div>
    </div>
  )
}
