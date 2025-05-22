import { DemoContainer } from "~/components/demo-container";
import { OuiSelectDemo } from "~/components/oui-select-demo";
import { SelectDemo } from "~/components/select-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <SelectDemo />
      <OuiSelectDemo />
    </DemoContainer>
  );
}
