import { DemoContainer } from '~/components/demo-container'
import { FormDemo } from '~/components/form-demo'
import { OuiFormDemo } from '~/components/oui-form-demo'

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <FormDemo />
      <OuiFormDemo />
    </DemoContainer>
  )
}
