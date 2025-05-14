import { DemoContainer } from "~/components/demo-container";
import { InputDemo } from "~/components/input-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <InputDemo />
    </DemoContainer>
  );
}
