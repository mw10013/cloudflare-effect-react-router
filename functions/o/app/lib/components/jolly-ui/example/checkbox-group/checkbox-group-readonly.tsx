import { Checkbox, CheckboxGroup } from '~/lib/components/ui/checkbox'
import { Label } from '~/lib/components/ui/field'

export default function CheckboxGroupReadonly() {
  return (
    <CheckboxGroup defaultValue={['baseball']} isReadOnly>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
  )
}
