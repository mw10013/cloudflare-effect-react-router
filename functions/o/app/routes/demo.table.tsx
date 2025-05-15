import { DemoContainer } from "~/components/demo-container";
import { TableDemo } from "~/components/table-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <TableDemo />
    </DemoContainer>
  );
}
