import { DemoContainer } from "~/components/demo-container";
import { OuiPopoverDemo } from "~/components/oui-popover-demo";
import { PopoverDemo } from "~/components/popover-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <PopoverDemo />
      <OuiPopoverDemo />
    </DemoContainer>
  );
}
