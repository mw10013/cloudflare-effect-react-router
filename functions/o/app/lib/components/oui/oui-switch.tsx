import React from 'react'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { labelStyles } from './oui-label'
import { Text } from './oui-text'

export const switchStyles = tv({
  extend: labelStyles,
  base: 'group flex items-center gap-2',
})

export interface SwitchProps extends Omit<Rac.SwitchProps, 'children'> {
  children?: React.ReactNode
}

export const Switch = ({ className, children, ...props }: SwitchProps) => {
  return (
    <Rac.Switch
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        switchStyles({ ...renderProps, className })
      )}>
      {children}
    </Rac.Switch>
  )
}
export const SwitchIndicator = () => (
  // shadcn uses disabled:opacity-50. Use opacity-[0.714] since root (labelStyles) uses opacity-70
  <div className="inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input shadow-sm transition-colors group-data-[disabled]:cursor-not-allowed group-data-[selected]:bg-primary group-data-[disabled]:opacity-[0.714] group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2 group-data-[focus-visible]:ring-offset-background">
    <span className="pointer-events-none block h-4 w-4 translate-x-0 rounded-full bg-background shadow-lg ring-0 transition-transform group-data-[selected]:translate-x-4" />
  </div>
)

export interface SwitchExProps extends Omit<Rac.SwitchProps, 'children'> {
  description: string
  children?: React.ReactNode
}

export const SwitchEx = ({
  description,
  children,
  ...props
}: SwitchExProps) => {
  const descriptionId = React.useId()
  return (
    <div className="flex flex-col gap-2">
      <Switch {...props} aria-describedby={descriptionId}>
        <SwitchIndicator />
        {children}
      </Switch>
      <Text id={descriptionId} slot="description">
        {description}
      </Text>
    </div>
  )
}

export type SwitchEx1Props = SwitchExProps

export const SwitchEx1 = ({
  description,
  children,
  ...props
}: SwitchEx1Props) => {
  const descriptionId = React.useId()
  return (
    <div className="flex flex-col gap-1 rounded-lg border p-4">
      <Switch
        {...props}
        aria-describedby={descriptionId}
        className="flex items-center justify-between">
        {children}
        <SwitchIndicator />
      </Switch>
      <Text id={descriptionId} slot="description">
        {description}
      </Text>
    </div>
  )
}
