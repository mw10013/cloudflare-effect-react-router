import React from 'react'
import { CheckIcon, MinusIcon } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import { labelStyles } from './oui-label'
import { Text } from './oui-text'

// Radix has CheckboxPrimitive.Root which is separate from label while RAC structures with a label.
// shadcn FormDemo FormItem: shadow-xs flex flex-row items-start gap-3 rounded-md border p-4
export const checkboxStyles = tv({
  extend: labelStyles,
  base: 'group items-start gap-3'
})

// shadcn CheckboxPrimitive.Root: peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50
// shadcn CheckboxPrimitive.Indicator (not relevant): flex items-center justify-center text-current transition-none
export const checkboxIndicatorStyles = tv({
  // TODO: checkboxIndicatorStyles: remove aria-invalid and use isInvalid render prop
  base: 'border-input dark:bg-input/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs size-4 shrink-0 rounded-[4px] border outline-none transition-shadow',
  variants: {
    isSelected: {
      true: 'bg-primary text-primary-foreground dark:bg-primary border-primary'
    },
    isFocusVisible: {
      true: 'border-ring ring-ring/50 ring-[3px]'
    },
    isDisabled: {
      true: 'cursor-not-allowed opacity-50'
    }
  }
})

export const checkboxIconStyles = 'size-3.5'

// Pattern for Reusable Button Wrapper: https://github.com/adobe/react-spectrum/discussions/7511
export interface CheckboxProps extends Omit<Rac.CheckboxProps, 'children'> {
  indicatorClassName?: string
  children?: React.ReactNode
}

export function Checkbox({ indicatorClassName, className, children, ...props }: CheckboxProps) {
  return (
    <Rac.Checkbox
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) => checkboxStyles({ ...renderProps, className }))}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <span
            data-slot="checkbox-indicator"
            className={checkboxIndicatorStyles({
              isSelected: isSelected || isIndeterminate,
              className: indicatorClassName,
              ...renderProps
            })}
          >
            {isIndeterminate ? (
              <MinusIcon aria-hidden className={checkboxIconStyles} />
            ) : isSelected ? (
              <CheckIcon aria-hidden className={checkboxIconStyles} />
            ) : null}
          </span>
          {children}
        </>
      )}
    </Rac.Checkbox>
  )
}

export interface CheckboxExProps extends Omit<Rac.CheckboxProps, 'children'> {
  children?: React.ReactNode
  descriptionClassName?: string
  description: React.ReactNode
  containerClassName?: string
  indicatorClassName?: string
}

// TODO: CheckboxEx: height discrepency with FormDemo
export const CheckboxEx = ({
  children,
  descriptionClassName,
  description,
  containerClassName,
  indicatorClassName,
  ...props
}: CheckboxExProps) => {
  const descriptionId = React.useId()
  return (
    <div className={twMerge('flex flex-col gap-1', containerClassName)}>
      <Checkbox {...props} aria-describedby={descriptionId} indicatorClassName={indicatorClassName}>
        {children}
      </Checkbox>
      <div className="items-top flex gap-3">
        <span className="size-4 shrink-0" />
        <Text id={descriptionId} slot="description" className={descriptionClassName}>
          {description}
        </Text>
      </div>
    </div>
  )
}
