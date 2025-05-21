import { DemoContainer } from "~/components/demo-container";
import { OuiSidebarDemo } from "~/components/oui-sidebar-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <OuiSidebarDemo />
    </DemoContainer>
  );
}
