import { DemoContainer } from "~/components/demo-container";
import { OuiAutocompleteDemo } from "~/components/oui-autocomplete-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-flex-col">
      <OuiAutocompleteDemo />
    </DemoContainer>
  );
}
