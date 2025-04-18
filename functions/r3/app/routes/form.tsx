import type { Route } from './+types/form'
import { FormDemo } from '~/components/form-demo'
import { OuiFormDemo } from '~/components/oui-form-demo'

export default function RouteComponent() {
  return (
    <div className="flex min-h-svh flex-row justify-center gap-2 p-6">
      <FormDemo />
      <OuiFormDemo />
    </div>
  )
}
