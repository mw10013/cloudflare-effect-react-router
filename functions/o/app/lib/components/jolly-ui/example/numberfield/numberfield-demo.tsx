import { FieldGroup, Label } from '~/lib/components/ui/field'
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '~/lib/components/ui/numberfield'

export default function NumberFieldDemo() {
  return (
    <NumberField defaultValue={1024} minValue={0}>
      <Label>Width</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  )
}
