import { AccordionDemo } from "~/components/accordion-demo";
import { DemoContainer } from "~/components/demo-container";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <AccordionDemo />
    </DemoContainer>
  );
}
