import React from 'react'
import * as Rac from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import { composeTailwindRenderProps } from './oui-base'
import { labelStyles } from './oui-label'
import { Text } from './oui-text'

export const switchStyles = tv({
  extend: labelStyles,
  base: 'group'
})

export interface SwitchProps extends Omit<Rac.SwitchProps, 'children'> {
  children?: React.ReactNode
}

export const Switch = ({ className, children, ...props }: SwitchProps) => {
  return (
    <Rac.Switch
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) => switchStyles({ ...renderProps, className }))}
    >
      {children}
    </Rac.Switch>
  )
}

// shadcn SwitchPrimitive.Root: peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50
// shadcn SwitchPrimitive.Thumb: bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0
export const SwitchIndicator = () => (
  // disabled opacity is handled by Switch
  <div className="group-data-[selected]:bg-primary bg-input group-data-[focus-visible]:border-ring group-data-[focus-visible]:ring-ring/50 dark:bg-input/80 shadow-xs inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent outline-none transition-all group-data-[disabled]:cursor-not-allowed group-data-[focus-visible]:ring-[3px]">
    <span className="bg-background dark:bg-foreground dark:group-data-[selected]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform group-data-[selected=false]:translate-x-0 group-data-[selected]:translate-x-[calc(100%-2px)]" />
  </div>
)

export interface SwitchExProps extends Omit<Rac.SwitchProps, 'children'> {
  indicatorPosition?: 'start' | 'end'
  descriptionClassName?: string
  description?: React.ReactNode
  children?: React.ReactNode
  containerClassName?: string
}

export const SwitchEx = ({
  indicatorPosition = 'start',
  className,
  descriptionClassName,
  description,
  children,
  containerClassName,
  ...props
}: SwitchExProps) => {
  const descriptionId = description ? React.useId() : undefined
  return (
    // shadcn FormDemo div: flex flex-col gap-0.5
    <div className={twMerge('flex flex-col gap-0.5', containerClassName)}>
      <Switch
        {...props}
        className={composeTailwindRenderProps(className, indicatorPosition === 'end' ? 'justify-between' : '')}
        aria-describedby={descriptionId}
      >
        {indicatorPosition === 'start' && <SwitchIndicator />}
        {children}
        {indicatorPosition === 'end' && <SwitchIndicator />}
      </Switch>
      {/* TODO: SwitchEx description spacer when indicatorPosition = end */}
      {description && (
        <Text id={descriptionId} slot="description" className={twMerge(descriptionClassName, props.isDisabled ? 'opacity-60' : undefined)}>
          {description}
        </Text>
      )}
    </div>
  )
}
