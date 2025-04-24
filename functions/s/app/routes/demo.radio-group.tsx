import { DemoContainer } from '~/components/demo-container'
import { OuiRadioGroupDemo } from '~/components/oui-radio-group-demo'
import { RadioGroupDemo } from '~/components/radio-group-demo'

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <RadioGroupDemo />
      <OuiRadioGroupDemo />
    </DemoContainer>
  )
}
