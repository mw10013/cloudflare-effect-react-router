import { ComboboxDemo } from "~/components/combobox-demo";
import { DemoContainer } from "~/components/demo-container";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <ComboboxDemo />
    </DemoContainer>
  );
}
