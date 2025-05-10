import { DemoContainer } from '~/components/demo-container'
import { OuiSeparatorDemo } from '~/components/oui-separator-demo'
import { SeparatorDemo } from '~/components/separator-demo'

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <SeparatorDemo />
      <OuiSeparatorDemo />
    </DemoContainer>
  )
}
