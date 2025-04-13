import type React from 'react'
import { Circle, CircleIcon } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { baseStyles, composeTailwindRenderProps } from './oui-base'
import { FieldError } from './oui-field-error'
import { Label, labelStyles } from './oui-label'
import { Text } from './oui-text'

// shadcn: grid gap-3
// shadcn FormDemo: flex flex-col gap-3
export function RadioGroup(props: Rac.RadioGroupProps) {
  return (
    <Rac.RadioGroup data-slot="radio-group" className={composeTailwindRenderProps(props.className, 'flex flex-col gap-3')} {...props} />
  )
}

// shadcn RadioGroupItem: border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50
// Radix has RadioGroupPrimitive.Item which is separate from label while RAC structures with a label.
export const radioStyles = tv({
  extend: labelStyles,
  base: 'group flex items-center gap-2'
})

// // shadcn RadioGroupItem: border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50
export const radioIndicatorStyles = tv({
  base: 'border-input text-primary group-focus-visible:border-ring group-focus-visible:ring-ring/50 group-aria-invalid:ring-destructive/20 dark:group-aria-invalid:ring-destructive/40 group-aria-invalid:border-destructive dark:bg-input/30 shadow-xs aspect-square size-4 shrink-0 rounded-full border outline-none transition-[color,box-shadow] group-focus-visible:ring-[3px] group-disabled:cursor-not-allowed group-disabled:opacity-50'
})

// export const radioIndicatorStyles = tv({
//   extend: baseStyles,
//   base: 'border-primary text-primary aspect-square size-4 rounded-full border shadow',
//   variants: {
//     isDisabled: {
//       // shadcn uses disabled:opacity-50. Use opacity-[0.714] since root (labelStyles) uses opacity-70
//       true: 'opacity-[0.714]'
//     }
//   }
// })

export const radioCircleStyles = 'size-3.5 fill-primary'

export interface RadioProps extends Omit<Rac.RadioProps, 'children'> {
  children?: React.ReactNode
}

export const Radio = ({ className, children, ...props }: RadioProps) => {
  return (
    // Structure with a lablel.
    <Rac.Radio
      data-slot="radio-group-item"
      className={Rac.composeRenderProps(className, (className, renderProps) => radioStyles({ ...renderProps, className }))}
      {...props}
    >
      {(renderProps) => (
        <>
          <div data-slot="radio-group-indicator" className={radioIndicatorStyles({ ...renderProps })}>
            {/* {renderProps.isSelected && <Circle className={radioCircleStyles} />} */}
            {renderProps.isSelected && <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />}
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

export interface RadioGroupEx1Props extends Omit<Rac.RadioGroupProps, 'children'> {
  label?: React.ReactNode
  children?: React.ReactNode
  description?: React.ReactNode
  errorMessage?: string | ((validation: Rac.ValidationResult) => string)
}

export function RadioGroupEx1({ label, description, errorMessage, children, ...props }: RadioGroupEx1Props) {
  return (
    <RadioGroup {...props} className="gap-3">
      <div className="mb-1 flex flex-col gap-1">
        {label && <Label className="">{label}</Label>}
        {description && <Text slot="description">{description}</Text>}
      </div>
      {children}
      <FieldError>{errorMessage}</FieldError>
    </RadioGroup>
  )
}

export const RadioGroupEx1Radio = ({ className, ...props }: RadioProps) => (
  <Radio className={composeTailwindRenderProps(className, 'gap-3 font-normal')} {...props} />
)
