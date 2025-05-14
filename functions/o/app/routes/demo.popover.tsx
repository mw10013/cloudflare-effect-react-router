import { DemoContainer } from "~/components/demo-container";
import { PopoverDemo } from "~/components/popover-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <PopoverDemo />
    </DemoContainer>
  );
}
