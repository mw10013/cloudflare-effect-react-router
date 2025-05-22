import { DemoContainer } from "~/components/demo-container";
import { DropdownMenuDemo } from "~/components/dropdown-menu-demo";
import { OuiMenuDemo } from "~/components/oui-menu-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <DropdownMenuDemo />
      <OuiMenuDemo />
    </DemoContainer>
  );
}
