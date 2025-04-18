import * as Rac from 'react-aria-components'
import { composeTailwindRenderProps } from './oui-base'
import { FieldError } from './oui-field-error'
import { Label } from './oui-label'
import { Text } from './oui-text'

export interface CheckboxGroupExProps extends Omit<Rac.CheckboxGroupProps, 'children'> {
  labelClassName?: string
  label?: React.ReactNode
  children?: React.ReactNode
  descriptionClassName?: string
  description?: React.ReactNode
  errorMessage?: string | ((validation: Rac.ValidationResult) => string)
}

export function CheckboxGroupEx({ labelClassName, label, children, descriptionClassName, description, errorMessage, ...props }: CheckboxGroupExProps) {
  return (
    // shadcn FormDemo FormItem: flex flex-col gap-4
    <Rac.CheckboxGroup {...props} className={composeTailwindRenderProps(props.className, 'flex flex-col gap-4')}>
      <div>
        <Label className={labelClassName}>{label}</Label>
        {description && <Text className={descriptionClassName} slot="description">{description}</Text>}
      </div>
      {/* shadcn FormDemo div: flex flex-col gap-2 */}
      <div className="flex flex-col gap-2">{children}</div>
      <FieldError>{errorMessage}</FieldError>
    </Rac.CheckboxGroup>
  )
}
