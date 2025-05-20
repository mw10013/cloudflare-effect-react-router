import { DemoContainer } from "~/components/demo-container";
import { OuiSheetDemo } from "~/components/oui-sheet-demo";
import { SheetDemo } from "~/components/sheet-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <SheetDemo />
      <OuiSheetDemo />
    </DemoContainer>
  );
}
