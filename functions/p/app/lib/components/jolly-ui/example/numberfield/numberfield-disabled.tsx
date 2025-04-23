import { FieldGroup, Label } from '~/lib/components/ui/field'
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '~/lib/components/ui/numberfield'

export default function NumberFieldDisabled() {
  return (
    <NumberField isDisabled value={25}>
      <Label>Disabled</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  )
}
