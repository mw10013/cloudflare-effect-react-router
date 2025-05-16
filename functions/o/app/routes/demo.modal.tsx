import { AlertDialogDemo } from "~/components/alert-dialog-demo";
import { DemoContainer } from "~/components/demo-container";
import { OuiAlertDialogDemo } from "~/components/oui-alert-dialog-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <AlertDialogDemo />
      <OuiAlertDialogDemo />
    </DemoContainer>
  );
}
