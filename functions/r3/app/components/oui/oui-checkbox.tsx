import React from 'react'
import { CheckIcon, MinusIcon } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import { baseStyles } from './oui-base'
import { labelStyles } from './oui-label'
import { Text } from './oui-text'

// TODO: CheckboxGroup
// export interface OuiCheckboxGroupProps
//   extends Omit<Rac.CheckboxGroupProps, 'children'> {
//   label?: string
//   children?: ReactNode
//   description?: string
//   errorMessage?: string | ((validation: Rac.ValidationResult) => string)
// }

// export function OuiCheckboxGroup({
//   label,
//   children,
//   description,
//   errorMessage,
//   ...props
// }: OuiCheckboxGroupProps) {
//   return (
//     <Rac.CheckboxGroup
//       {...props}
//       className={composeTailwindRenderProps(
//         props.className,
//         'flex flex-col gap-2'
//       )}>
//       <OuiLabel>{label}</OuiLabel>
//       {children}
//       {description && <OuiDescription>{description}</OuiDescription>}
//       <OuiFieldError>{errorMessage}</OuiFieldError>
//     </Rac.CheckboxGroup>
//   )
// }

// shadcn CheckboxPrimitive.Root: peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50
// shadcn CheckboxPrimitive.Indicator: flex items-center justify-center text-current transition-none
export const checkboxStyles = tv({
  slots: {
    rootStyles: [labelStyles.base, 'flex items-center gap-2'],
    indicatorStyles: 'border-primary flex size-4 shrink-0 items-center justify-center rounded-sm border shadow',
    iconStyles: 'size-3.5'
  },
  variants: {
    isSelected: {
      true: {
        indicatorStyles: 'bg-primary text-primary-foreground'
      }
    },
    isFocusVisible: {
      true: {
        indicatorStyles: baseStyles.variants.isFocusVisible.true
      }
    },
    isDisabled: {
      true: {
        rootStyles: labelStyles.variants.isDisabled.true,
        // shadcn uses disabled:opacity-50. Use opacity-[0.714] since root (labelStyles) uses opacity-70
        indicatorStyles: 'opacity-[0.714]'
      }
    }
  }
})

// Pattern for Reusable Button Wrapper: https://github.com/adobe/react-spectrum/discussions/7511
export interface CheckboxProps extends Omit<Rac.CheckboxProps, 'children'> {
  children?: React.ReactNode
}

// TODO: Checkbox: indeterminate
export function Checkbox({ className, children, ...props }: CheckboxProps) {
  const { rootStyles, indicatorStyles, iconStyles } = checkboxStyles()
  return (
    <Rac.Checkbox
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) => rootStyles({ ...renderProps, className }))}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <span
            data-slot="checkbox-indicator"
            className={indicatorStyles({
              isSelected: isSelected || isIndeterminate,
              ...renderProps
            })}
          >
            {isIndeterminate ? (
              <MinusIcon aria-hidden className={iconStyles({})} />
            ) : isSelected ? (
              <CheckIcon aria-hidden className={iconStyles({})} />
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
  description: React.ReactNode
  containerClassName?: string
}

export const CheckboxEx = ({ children, description, containerClassName, ...props }: CheckboxExProps) => {
  const descriptionId = React.useId()
  return (
    <div className={twMerge('flex flex-col gap-1', containerClassName)}>
      <Checkbox {...props} aria-describedby={descriptionId}>
        {children}
      </Checkbox>
      <div className="items-top flex gap-2">
        <div className="size-4"></div>
        <Text id={descriptionId} slot="description">
          {description}
        </Text>
      </div>
    </div>
  )
}
