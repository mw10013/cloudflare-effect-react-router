import { CheckboxDemo } from '~/components/checkbox-demo'
import { DemoContainer } from '~/components/demo-container'
import { OuiCheckboxDemo } from '~/components/oui-checkbox-demo'

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <CheckboxDemo />
      <OuiCheckboxDemo />
    </DemoContainer>
  )
}
