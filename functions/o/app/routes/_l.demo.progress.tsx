import { DemoContainer } from "~/components/demo-container";
import { ProgressDemo } from "~/components/progress-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <ProgressDemo />
    </DemoContainer>
  );
}
