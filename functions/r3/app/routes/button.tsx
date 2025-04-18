import type { Route } from './+types/button'
import { ButtonDemo } from '~/components/button-demo'

export default function RouteComponent() {
  return (
    <div className="flex min-h-svh flex-row justify-center gap-2 p-6">
      <ButtonDemo />
      {/* <OuiFormDemo /> */}
    </div>
  )
}
