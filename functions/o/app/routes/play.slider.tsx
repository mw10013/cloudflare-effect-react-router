import { useState } from 'react'
import * as Rac from 'react-aria-components'
import * as Oui from '~/lib/components/oui/oui-index'
import * as Jui from '~/lib/components/oui/oui-jui-index'
import { Label } from '~/lib/components/ui/label'
import { Slider } from '~/lib/components/ui/slider'

function OuiExample() {
  return (
    <>
      <Oui.Slider defaultValue={30}>
        <div className="flex items-center justify-between gap-2">
          <Oui.Label>Opacity (oui)</Oui.Label>
          <Oui.SliderOutput />
        </div>
        <Oui.SliderTrack>
          <Oui.SliderThumb />
        </Oui.SliderTrack>
      </Oui.Slider>
      <Oui.SliderEx label="Opacity (oui ex)" defaultValue={30} />
      <Oui.SliderEx label="Opacity (oui ex)" defaultValue={30} isDisabled />
    </>
  )
}

function ShadcnExample() {
  return (
    <>
      <Slider defaultValue={[33]} max={100} step={1} />
      <Slider defaultValue={[33]} max={100} step={1} disabled />
    </>
  )
}

function OriginUiExample() {
  const [value, setValue] = useState([25])

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Label className="leading-6">
          Slider with output (originui)
        </Label>
        <output className="text-sm font-medium tabular-nums">{value[0]}</output>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        aria-label="Slider with output"
      />
    </div>
  )
}

function JuiExample() {
  return (
    <>
      <Jui.Slider
        defaultValue={30}
        className="flex w-full flex-col items-start gap-2">
        <div className="flex w-full justify-between">
          <Jui.Label>Opacity (jui)</Jui.Label>
          <Jui.SliderOutput />
        </div>
        <Jui.SliderTrack>
          <Jui.SliderFillTrack />
          <Jui.SliderThumb />
        </Jui.SliderTrack>
      </Jui.Slider>
      <Jui.Slider
        defaultValue={30}
        className="flex w-full flex-col items-start gap-2"
        isDisabled>
        <div className="flex w-full justify-between">
          <Jui.Label>Opacity (jui)</Jui.Label>
          <Jui.SliderOutput />
        </div>
        <Jui.SliderTrack>
          <Jui.SliderFillTrack />
          <Jui.SliderThumb />
        </Jui.SliderTrack>
      </Jui.Slider>
    </>
  )
}

function RacExample() {
  return (
    <div className="flex justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 p-12">
      <Rac.Slider defaultValue={30} className="w-[250px]">
        <div className="flex text-white">
          <Rac.Label className="flex-1">Opacity</Rac.Label>
          <Rac.SliderOutput />
        </div>
        <Rac.SliderTrack className="relative h-7 w-full">
          {({ state }) => (
            <>
              {/* track */}
              <div className="absolute top-[50%] h-2 w-full translate-y-[-50%] rounded-full bg-white/40" />
              {/* fill */}
              <div
                className="absolute top-[50%] h-2 translate-y-[-50%] rounded-full bg-white"
                style={{
                  width: state.getThumbPercent(0) * 100 + '%',
                }}
              />
              <Rac.SliderThumb className="dragging:bg-purple-100 top-[50%] h-7 w-7 rounded-full border border-solid border-purple-800/75 bg-white outline-none ring-black transition focus-visible:ring-2" />
            </>
          )}
        </Rac.SliderTrack>
      </Rac.Slider>
    </div>
  )
}

export default function RouteComponent() {
  return (
    <div className="mx-auto flex w-1/2 flex-col items-center justify-center gap-4 p-6">
      <OuiExample />
      <ShadcnExample />
      <OriginUiExample />
      <JuiExample />
      <RacExample />
    </div>
  )
}
