import { FieldGroup, Label } from '~/lib/components/ui/field'
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '~/lib/components/ui/numberfield'

export default function NumberFieldValidation() {
  return (
    <NumberField minValue={0}>
      <Label>Enter your age</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  )
}
