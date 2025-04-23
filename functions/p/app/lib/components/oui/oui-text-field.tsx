import * as Rac from 'react-aria-components'
import { composeTailwindRenderProps } from './oui-base'
import { FieldError } from './oui-field-error'
import { Input } from './oui-input'
import { Label } from './oui-label'
import { Text } from './oui-text'
import { TextArea } from './oui-text-area'

// TODO: textFieldStyles: space-y-2?
export const textFieldStyles = 'group grid gap-2'

export function TextField({ className, ...props }: Rac.TextFieldProps) {
  return (
    <Rac.TextField
      {...props}
      className={composeTailwindRenderProps(className, textFieldStyles)}
    />
  )
}

export interface TextFieldExProps extends Rac.TextFieldProps {
  label?: string
  description?: React.ReactNode
  errorMessage?: string | ((validation: Rac.ValidationResult) => string)
  placeholder?: string
  textArea?: boolean
}

export function TextFieldEx({
  label,
  description,
  errorMessage,
  placeholder,
  textArea,
  ...props
}: TextFieldExProps) {
  return (
    <TextField {...props}>
      {label && <Label>{label}</Label>}
      {textArea ? (
        <TextArea placeholder={placeholder} />
      ) : (
        <Input placeholder={placeholder} />
      )}
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </TextField>
  )
}
