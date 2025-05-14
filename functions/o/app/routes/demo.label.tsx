import { DemoContainer } from "~/components/demo-container";
import { LabelDemo } from "~/components/label-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <LabelDemo />
    </DemoContainer>
  );
}
