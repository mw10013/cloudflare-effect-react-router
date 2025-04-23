import React from 'react'
import { Check, Minus } from 'lucide-react'
import * as Rac from 'react-aria-components'
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

export const checkboxStyles = tv({
  slots: {
    // shadcn checkbox form example: flex items-center space-x-2. space-x-2 does not work so gap-2
    rootStyles: [labelStyles.base, 'flex items-center gap-2'],
    boxStyles:
      'flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary shadow',
    iconStyles: 'size-4',
  },
  variants: {
    isSelected: {
      true: {
        boxStyles: 'bg-primary text-primary-foreground',
      },
    },
    isFocusVisible: {
      true: {
        boxStyles: baseStyles.variants.isFocusVisible.true,
      },
    },
    isDisabled: {
      true: {
        rootStyles: labelStyles.variants.isDisabled.true,
        // shadcn uses disabled:opacity-50. Use opacity-[0.714] since root (labelStyles) uses opacity-70
        boxStyles: 'opacity-[0.714]',
      },
    },
  },
})

// Pattern for Reusable Button Wrapper: https://github.com/adobe/react-spectrum/discussions/7511
export interface CheckboxProps extends Omit<Rac.CheckboxProps, 'children'> {
  children?: React.ReactNode
}

// TODO: Checkbox: indeterminate
export function Checkbox({ className, children, ...props }: CheckboxProps) {
  const { rootStyles, boxStyles, iconStyles } = checkboxStyles()
  return (
    <Rac.Checkbox
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        rootStyles({ ...renderProps, className })
      )}>
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <div
            className={boxStyles({
              isSelected: isSelected || isIndeterminate,
              ...renderProps,
            })}>
            {isIndeterminate ? (
              <Minus aria-hidden className={iconStyles()} />
            ) : isSelected ? (
              <Check aria-hidden className={iconStyles()} />
            ) : null}
          </div>
          {children}
        </>
      )}
    </Rac.Checkbox>
  )
}

export interface CheckboxExProps extends Omit<Rac.CheckboxProps, 'children'> {
  children?: React.ReactNode
  description: React.ReactNode
}

export const CheckboxEx = ({
  children,
  className,
  description,
  ...props
}: CheckboxExProps) => {
  const descriptionId = React.useId()
  return (
    <div className="flex flex-col gap-1">
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
