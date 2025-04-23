import {
  ColorThumb,
  ColorWheel,
  ColorWheelTrack,
} from '~/lib/components/ui/color'

export function ColorWheelDemo() {
  return (
    <ColorWheel>
      <ColorWheelTrack />
      <ColorThumb />
    </ColorWheel>
  )
}

export default ColorWheelDemo
