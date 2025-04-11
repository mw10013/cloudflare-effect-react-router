import { Label } from '~/lib/components/ui/field'
import { Radio, RadioGroup } from '~/lib/components/ui/radio-group'

export default function RadioGroupDemo() {
  return (
    <RadioGroup>
      <Label>Favorite pet</Label>
      <Radio value="dogs">Dog</Radio>
      <Radio value="cats">Cat</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
  )
}
