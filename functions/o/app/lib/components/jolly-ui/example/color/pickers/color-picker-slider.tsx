'use client'

import type { ColorSpace } from 'react-aria-components'
import React from 'react'
import { getColorChannels, parseColor } from 'react-aria-components'
import { Button } from '~/lib/components/ui/button'
import {
  ColorPicker,
  ColorSlider,
  ColorSwatch,
  ColorThumb,
  SliderOutput,
  SliderTrack,
} from '~/lib/components/ui/color'
import { Dialog, DialogTrigger } from '~/lib/components/ui/dialog'
import { Label } from '~/lib/components/ui/field'
import { Popover } from '~/lib/components/ui/popover'
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from '~/lib/components/ui/select'

export function PickerSliders() {
  let [color, setColor] = React.useState(parseColor('hsl(60, 100%, 50%)'))
  let [space, setSpace] = React.useState<ColorSpace>('rgb')

  return (
    <ColorPicker value={color} onChange={setColor}>
      <DialogTrigger>
        <Button variant="ghost" className="flex h-fit items-center gap-2 p-1">
          <ColorSwatch className="size-8 rounded-md border-2" />
          Fill Color
        </Button>
        <Popover placement="bottom start" className="w-fit">
          <Dialog className="flex flex-col gap-4 p-3 outline-none">
            <Select
              selectedKey={space}
              onSelectionChange={(s) => setSpace(s as ColorSpace)}
              aria-label="Color Space">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectPopover>
                <SelectListBox aria-label="items">
                  <SelectItem id="rgb" textValue="rgb">
                    RGB
                  </SelectItem>
                  <SelectItem id="hsl" textValue="hsl">
                    HSL
                  </SelectItem>
                  <SelectItem id="hsb" textValue="hsb">
                    HSB
                  </SelectItem>
                </SelectListBox>
              </SelectPopover>
            </Select>
            {getColorChannels(space).map((channel) => (
              <ColorSlider key={channel} colorSpace={space} channel={channel}>
                <div className="flex justify-between">
                  <Label className="capitalize">{channel}</Label>
                  <SliderOutput />
                </div>
                <SliderTrack>
                  <ColorThumb className="top-1/2" />
                </SliderTrack>
              </ColorSlider>
            ))}
            <ColorSlider channel="alpha">
              <div className="flex justify-between">
                <Label className="capitalize">Alpha</Label>
                <SliderOutput />
              </div>
              <SliderTrack>
                <ColorThumb className="top-1/2" />
              </SliderTrack>
            </ColorSlider>
          </Dialog>
        </Popover>
      </DialogTrigger>
    </ColorPicker>
  )
}

export default PickerSliders
