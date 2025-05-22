import { DemoContainer } from "~/components/demo-container";
import { PaginationDemo } from "~/components/pagination-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <PaginationDemo />
    </DemoContainer>
  );
}
