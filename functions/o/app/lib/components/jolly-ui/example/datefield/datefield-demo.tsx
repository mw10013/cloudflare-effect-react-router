import { DateField, DateInput } from '~/lib/components/ui/datefield'
import { Label } from '~/lib/components/ui/field'

export default function DateFieldDemo() {
  return (
    <DateField className={'min-w-[150px] space-y-1'}>
      <Label>Birth date</Label>
      <DateInput />
    </DateField>
  )
}
