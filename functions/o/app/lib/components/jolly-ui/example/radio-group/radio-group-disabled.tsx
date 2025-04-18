import { Label } from '~/lib/components/ui/field'
import { Radio, RadioGroup } from '~/lib/components/ui/radio-group'

export default function RadioGroupDisabled() {
  return (
    <RadioGroup isDisabled>
      <Label>Favorite sport</Label>
      <Radio value="soccer">Soccer</Radio>
      <Radio value="baseball">Baseball</Radio>
      <Radio value="basketball">Basketball</Radio>
    </RadioGroup>
  )
}
