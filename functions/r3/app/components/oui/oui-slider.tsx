import React from 'react'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { baseStyles } from './oui-base'
import { Label } from './oui-label'

export const sliderStyles = tv({
  base: 'w-full space-y-2',
})

// TODO: Slider: vertical, multiple
export const Slider = ({ className, ...props }: Rac.SliderProps) => (
  <Rac.Slider
    {...props}
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      sliderStyles({ ...renderProps, className })
    )}></Rac.Slider>
)

export const sliderOutputStyles = tv({
  base: 'text-sm font-medium tabular-nums',
})

export const SliderOutput = ({
  className,
  ...props
}: Rac.SliderOutputProps) => (
  <Rac.SliderOutput
    {...props}
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      sliderOutputStyles({ ...renderProps, className })
    )}></Rac.SliderOutput>
)

export const sliderTrackStyles = tv({
  slots: {
    rootStyles: 'h-4',
    trackStyles:
      'absolute top-[50%] h-1.5 w-full translate-y-[-50%] rounded-full bg-primary/20',
    fillStyles:
      'absolute top-[50%] h-1.5 translate-y-[-50%] rounded-full bg-primary',
  },
  variants: {
    isDisabled: {
      true: {
        rootStyles: 'opacity-50',
      },
    },
  },
})

export interface SliderTrackProps
  extends Omit<Rac.SliderTrackProps, 'children'>,
    Rac.SliderTrackProps {
  children?: React.ReactNode
}

export const SliderTrack = ({
  className,
  children,
  ...props
}: SliderTrackProps) => {
  const { rootStyles, trackStyles, fillStyles } = sliderTrackStyles()
  return (
    <Rac.SliderTrack
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        rootStyles({ ...renderProps, className })
      )}
      {...props}>
      {({ state }) => (
        <>
          <div className={trackStyles()} />
          <div
            className={fillStyles()}
            style={{
              width: state.getThumbPercent(0) * 100 + '%',
            }}
          />
          {children}
        </>
      )}
    </Rac.SliderTrack>
  )
}

export const sliderThumbStyles = tv({
  extend: baseStyles,
  base: 'top-[50%] size-4 rounded-full border border-primary/50 bg-background shadow transition-colors',
  variants: {
    isDisabled: {
      true: 'opacity-100',
    },
  },
})

export const SliderThumb = ({ className, ...props }: Rac.SliderThumbProps) => (
  <Rac.SliderThumb
    {...props}
    className={Rac.composeRenderProps(className, (className, renderProps) =>
      sliderThumbStyles({ ...renderProps, className })
    )}></Rac.SliderThumb>
)

export interface SliderExProps extends Rac.SliderProps {
  label?: string
}

export const SliderEx = ({ label, ...props }: SliderExProps) => (
  <Slider {...props}>
    <div className="flex items-center justify-between gap-2">
      <Label>{label}</Label>
      <SliderOutput />
    </div>
    <SliderTrack>
      <SliderThumb />
    </SliderTrack>
  </Slider>
)
