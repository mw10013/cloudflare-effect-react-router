import { AccordionDemo } from "~/components/accordion-demo";
import { DemoContainer } from "~/components/demo-container";
import { OuiAccordionDemo } from "~/components/oui-accordion-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <AccordionDemo />
      <OuiAccordionDemo />
    </DemoContainer>
  );
}
