import { DemoContainer } from "~/components/demo-container";
import { SonnerDemo } from "~/components/sonner-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <SonnerDemo />
    </DemoContainer>
  );
}
