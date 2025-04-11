import { Checkbox, CheckboxGroup } from '~/lib/components/ui/checkbox'
import { Label } from '~/lib/components/ui/field'

export default function CheckboxGroupDisabledIndividual() {
  return (
    <CheckboxGroup>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox isDisabled value="baseball">
        Baseball
      </Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
  )
}
