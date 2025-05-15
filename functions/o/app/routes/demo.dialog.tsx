import { DemoContainer } from "~/components/demo-container";
import { DialogDemo } from "~/components/dialog-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <DialogDemo />
    </DemoContainer>
  );
}
