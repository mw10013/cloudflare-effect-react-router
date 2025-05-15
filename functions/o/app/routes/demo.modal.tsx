import { AlertDialogDemo } from "~/components/alert-dialog-demo";
import { DemoContainer } from "~/components/demo-container";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <AlertDialogDemo />
    </DemoContainer>
  );
}
