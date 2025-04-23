import type React from 'react'
import { CircleIcon } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { composeTailwindRenderProps } from './oui-base'
import { FieldError } from './oui-field-error'
import { Label, labelStyles } from './oui-label'
import { Text } from './oui-text'

// shadcn RadioGroup: grid gap-3
export function RadioGroup({ className, ...props }: Rac.RadioGroupProps) {
  return <Rac.RadioGroup data-slot="radio-group" className={composeTailwindRenderProps(className, 'grid gap-3')} {...props} />
}

// Radix has RadioGroupPrimitive.Item which is separate from label while RAC structures with a label.
// shadcn FormDemo FormItem: flex items-center gap-2
export const radioStyles = tv({
  extend: labelStyles,
  // TODO: radioStyles: remove group for aria-invalid and use isInvalid render prop
  // group fo aria-invalid
  base: 'group flex items-center gap-2'
})

// shadcn RadioGroupItem: border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50
export const radioGroupItemStyles = tv({
  // TODO: radioGroupItemStyles: remove group-aria-invalid and use isInvalid render prop
  // relative for absolute positioning of the circle
  base: 'border-input text-primary group-aria-invalid:ring-destructive/20 dark:group-aria-invalid:ring-destructive/40 group-aria-invalid:border-destructive dark:bg-input/30 shadow-xs relative aspect-square size-4 shrink-0 rounded-full border outline-none transition-[color,box-shadow]',
  variants: {
    isFocusVisible: {
      true: 'border-ring ring-ring/50 ring-[3px]'
    },
    isDisabled: {
      true: 'cursor-not-allowed opacity-50'
    }
  }
})

export interface RadioProps extends Omit<Rac.RadioProps, 'children'> {
  radioGroupItemClassName?: string
  children?: React.ReactNode
}

export const Radio = ({ className, children, radioGroupItemClassName, ...props }: RadioProps) => {
  return (
    // Structures with a lablel.
    <Rac.Radio
      className={Rac.composeRenderProps(className, (className, renderProps) => radioStyles({ ...renderProps, className }))}
      {...props}
    >
      {(renderProps) => (
        <>
          <div data-slot="radio-group-item" className={radioGroupItemStyles({ ...renderProps, className: radioGroupItemClassName })}>
            {/* shadcn has a RadioGroupIndicator but we seem not to need it */}
            {renderProps.isSelected && (
              // shadcn CircleIcon: fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2
              <CircleIcon
                data-slot="radio-group-indicator"
                className="fill-primary absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
              />
            )}
          </div>
          {children}
        </>
      )}
    </Rac.Radio>
  )
}

export interface RadioGroupExProps extends Omit<Rac.RadioGroupProps, 'children'> {
  label?: React.ReactNode
  children?: React.ReactNode
  description?: React.ReactNode
  errorMessage?: string | ((validation: Rac.ValidationResult) => string)
}

export function RadioGroupEx({ label, description, errorMessage, children, ...props }: RadioGroupExProps) {
  return (
    <RadioGroup {...props}>
      {label && <Label className="">{label}</Label>}
      {description && <Text slot="description">{description}</Text>}
      {children}
      <FieldError>{errorMessage}</FieldError>
    </RadioGroup>
  )
}
