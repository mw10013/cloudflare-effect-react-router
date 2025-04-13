import type React from 'react'
import { Circle, CircleIcon } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { baseStyles, composeTailwindRenderProps } from './oui-base'
import { FieldError } from './oui-field-error'
import { Label, labelStyles } from './oui-label'
import { Text } from './oui-text'

// shadcn RadioGroup: grid gap-3
// shadcn FormDemo: flex flex-col gap-3
export function RadioGroup(props: Rac.RadioGroupProps) {
  return (
    <Rac.RadioGroup data-slot="radio-group" className={composeTailwindRenderProps(props.className, 'flex flex-col gap-3')} {...props} />
  )
}

// shadcn RadioGroupIndicator: relative flex items-center justify-center
// export const radioGroupIndicatorStyles = tv({
//   base: 'relative flex items-center justify-center'
// })

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

// export const radioCircleStyles = 'fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2'

// shadcn RadioGroupItem: border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50
// Radix has RadioGroupPrimitive.Item which is separate from label while RAC structures with a label.
export const radioStyles = tv({
  extend: labelStyles,
  base: 'group flex items-center gap-2'
})

// shadcn RadioGroupItem: border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50
export const radioGroupItemStyles = tv({
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
  children?: React.ReactNode
}

export const Radio = ({ className, children, ...props }: RadioProps) => {
  return (
    // Structures with a lablel.
    <Rac.Radio
      className={Rac.composeRenderProps(className, (className, renderProps) => radioStyles({ ...renderProps, className }))}
      {...props}
    >
      {(renderProps) => {
        console.log({ renderProps })
        return (
          <>
            <div data-slot="radio-group-item" className={radioGroupItemStyles({ ...renderProps })}>
              {/* shadcn RadioGroupIndicator: relative flex items-center justify-center */}
              {/* <span data-slot="radio-group-indicator" className="relative flex items-center justify-center"> */}
              {renderProps.isSelected && (
                // shadcn CircleIcon: fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2
                <CircleIcon className="fill-primary absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
              )}
              {/* </span> */}
            </div>
            {children}
          </>
        )
      }}
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

function foo() {
  return (
    <div data-slot="form-item" className="flex items-center gap-2">
      <button
        type="button"
        role="radio"
        aria-checked="true"
        data-state="checked"
        value="all"
        data-slot="form-control"
        className="border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 shadow-xs aspect-square size-4 shrink-0 rounded-full border outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
        id="«R3cb5»-form-item"
        aria-describedby="«R3cb5»-form-item-description"
        aria-invalid="false"
        tabIndex={0}
        data-radix-collection-item=""
      >
        <span data-state="checked" data-slot="radio-group-indicator" className="relative flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-circle fill-primary absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </span>
      </button>
      <input
        type="radio"
        aria-hidden="true"
        style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
        tabindex="-1"
        value="all"
        checked
      />
      <label
        data-slot="form-label"
        className="data-[error=true]:text-destructive flex select-none items-center gap-2 text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50"
        data-error="false"
        for="«R3cb5»-form-item"
      >
        All new messages
      </label>
    </div>
  )
}

function bar() {
  return (
    <label
      className="group flex select-none items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50"
      data-rac=""
      data-selected="true"
    >
      <span style="border:0;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap">
        <input tabindex={0} type="radio" name="type" value="all" title="" />
      </span>
      <div
        data-slot="radio-group-item"
        className="border-input text-primary group-focus-visible:border-ring group-focus-visible:ring-ring/50 group-aria-invalid:ring-destructive/20 dark:group-aria-invalid:ring-destructive/40 group-aria-invalid:border-destructive dark:bg-input/30 shadow-xs aspect-square size-4 shrink-0 rounded-full border outline-none transition-[color,box-shadow] group-focus-visible:ring-[3px] group-disabled:cursor-not-allowed group-disabled:opacity-50"
      >
        <div data-slot="radio-group-indicator" className="relative flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-circle fill-primary absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </div>
      </div>
      All new messages
    </label>
  )
}
