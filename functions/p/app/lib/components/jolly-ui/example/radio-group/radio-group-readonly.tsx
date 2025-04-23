import { Label } from '~/lib/components/ui/field'
import { Radio, RadioGroup } from '~/lib/components/ui/radio-group'

export default function RadioGroupReadonly() {
  return (
    <RadioGroup defaultValue="wizard" isReadOnly>
      <Label>Favorite avatar</Label>

      <Radio value="wizard">Wizard</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
  )
}
