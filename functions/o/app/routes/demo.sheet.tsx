import { DemoContainer } from "~/components/demo-container";
import { SheetDemo } from "~/components/sheet-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <SheetDemo />
    </DemoContainer>
  );
}
