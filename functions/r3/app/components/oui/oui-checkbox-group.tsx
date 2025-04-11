import type { CheckboxProps } from './oui-checkbox'
import * as Rac from 'react-aria-components'
import { composeTailwindRenderProps } from './oui-base'
import { Checkbox } from './oui-checkbox'
import { FieldError } from './oui-field-error'
import { Label } from './oui-label'
import { Text } from './oui-text'

export interface CheckboxGroupExProps
  extends Omit<Rac.CheckboxGroupProps, 'children'> {
  label: string
  description?: React.ReactNode
  errorMessage?: string | ((validation: Rac.ValidationResult) => string)
  children?: React.ReactNode
}

export const CheckboxGroupEx = ({
  label,
  description,
  errorMessage,
  className,
  children,
  ...props
}: CheckboxGroupExProps) => {
  return (
    <Rac.CheckboxGroup
      {...props}
      className={composeTailwindRenderProps(className, 'space-y-2')}>
      <div className="mb-4">
        <Label>{label}</Label>
        {description && <Text slot="description">{description}</Text>}
      </div>
      {children}
      <FieldError>{errorMessage}</FieldError>
    </Rac.CheckboxGroup>
  )
}

export const CheckboxGroupExCheckbox = ({
  className,
  ...props
}: CheckboxProps) => (
  <Checkbox
    {...props}
    className={composeTailwindRenderProps(className, 'gap-3 font-normal')}
  />
)
