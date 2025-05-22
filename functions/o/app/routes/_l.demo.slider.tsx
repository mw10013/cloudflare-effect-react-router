import { DemoContainer } from "~/components/demo-container";
import { SliderDemo } from "~/components/slider-demo";

export default function RouteComponent() {
  return (
    <DemoContainer className="flex-row">
      <SliderDemo />
    </DemoContainer>
  );
}
