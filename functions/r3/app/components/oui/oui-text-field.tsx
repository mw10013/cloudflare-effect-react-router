import * as Rac from 'react-aria-components'
import { composeTailwindRenderProps } from './oui-base'
import { FieldError } from './oui-field-error'
import { Input } from './oui-input'
import { Label } from './oui-label'
import { Text } from './oui-text'
import { TextArea } from './oui-text-area'

export function TextField({ className, ...props }: Rac.TextFieldProps) {
  // shadcn FormItem: grid gap-2
  return <Rac.TextField data-slot="form-item" className={composeTailwindRenderProps(className, 'grid gap-2')} {...props} />
}

export interface TextFieldExProps extends Rac.TextFieldProps {
  label?: React.ReactNode
  description?: React.ReactNode
  errorMessage?: string | ((validation: Rac.ValidationResult) => string)
  placeholder?: string
}

export function TextFieldEx({ label, description, errorMessage, placeholder, ...props }: TextFieldExProps) {
  return (
    <TextField {...props}>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </TextField>
  )
}
export interface TextFieldEx1Props extends Omit<Rac.TextFieldProps, 'children'> {
  label?: React.ReactNode
  description?: React.ReactNode
  errorMessage?: string | ((validation: Rac.ValidationResult) => string)
  children: React.ReactNode
}

export function TextFieldEx1({ label, description, errorMessage, children, ...props }: TextFieldEx1Props) {
  return (
    <TextField {...props}>
      {label && <Label>{label}</Label>}
      {children}
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </TextField>
  )
}
