import { FieldGroup, Label } from '~/lib/components/ui/field'
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '~/lib/components/ui/numberfield'

export default function NumberFieldReadonly() {
  return (
    <NumberField isReadOnly value={32}>
      <Label>Read only</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  )
}
