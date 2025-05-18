import { DemoContainer } from "~/components/demo-container";
import { OuiTableDemo } from "~/components/oui-table-demo";
import { OuiTableDemo1 } from "~/components/oui-table-demo1";
import { TableDemo } from "~/components/table-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="grid grid-cols-2 gap-4">
      <TableDemo />
      <OuiTableDemo />
      <OuiTableDemo1 />
    </DemoContainer>
  );
}
