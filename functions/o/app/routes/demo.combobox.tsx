import { ComboboxDemo } from "~/components/combobox-demo";
import { DemoContainer } from "~/components/demo-container";
import { OuiComboboxDemo } from "~/components/oui-combobox-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <ComboboxDemo />
      <OuiComboboxDemo />
    </DemoContainer>
  );
}
