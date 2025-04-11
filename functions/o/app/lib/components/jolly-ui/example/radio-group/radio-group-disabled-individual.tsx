import { Label } from '~/lib/components/ui/field'
import { Radio, RadioGroup } from '~/lib/components/ui/radio-group'

export default function RadioGroupDisabledIndividual() {
  return (
    <RadioGroup>
      <Label>Favorite sport</Label>
      <Radio value="soccer">Soccer</Radio>
      <Radio value="baseball" isDisabled>
        Baseball
      </Radio>
      <Radio value="basketball">Basketball</Radio>
    </RadioGroup>
  )
}
