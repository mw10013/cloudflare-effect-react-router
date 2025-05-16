import { DemoContainer } from "~/components/demo-container";
import { DialogDemo } from "~/components/dialog-demo";
import { OuiDialogDemo } from "~/components/oui-dialog-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <DialogDemo />
      <OuiDialogDemo />
    </DemoContainer>
  );
}
