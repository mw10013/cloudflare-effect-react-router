import { DemoContainer } from "~/components/demo-container";
import { OuiTableDemo } from "~/components/oui-table-demo";
import { TableDemo } from "~/components/table-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <TableDemo />
      <OuiTableDemo />
    </DemoContainer>
  );
}
