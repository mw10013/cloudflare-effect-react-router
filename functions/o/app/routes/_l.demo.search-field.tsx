import { DemoContainer } from "~/components/demo-container";
import { OuiSearchFieldDemo } from "~/components/oui-search-field-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-flex-col">
      <OuiSearchFieldDemo />
    </DemoContainer>
  );
}
