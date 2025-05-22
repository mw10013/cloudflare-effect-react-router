import { ComboboxDemo } from "~/components/combobox-demo";
import { DemoContainer } from "~/components/demo-container";
import { OuiComboBoxDemo } from "~/components/oui-combo-box-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <ComboboxDemo />
      <OuiComboBoxDemo />
    </DemoContainer>
  );
}
