import { ColorSlider, ColorThumb, SliderTrack } from '~/lib/components/ui/color'

export function ColorSliderDemo() {
  return (
    <ColorSlider defaultValue="hsl(0, 100%, 50%)" channel="hue">
      <SliderTrack>
        <ColorThumb className="top-1/2" />
      </SliderTrack>
    </ColorSlider>
  )
}

export default ColorSliderDemo
