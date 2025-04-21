import { ButtonDemo } from '~/components/button-demo'
import { DemoContainer } from '~/components/demo-container'
import { OuiButtonDemo } from '~/components/oui-button-demo'

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <ButtonDemo />
      <OuiButtonDemo />
    </DemoContainer>
  )
}
