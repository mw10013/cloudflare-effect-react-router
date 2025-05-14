import { DemoContainer } from "~/components/demo-container";
import { SwitchDemo } from "~/components/switch-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <SwitchDemo />
    </DemoContainer>
  );
}
