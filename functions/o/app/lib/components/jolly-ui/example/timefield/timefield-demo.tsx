import { DateInput, TimeField } from '~/lib/components/ui/datefield'
import { Label } from '~/lib/components/ui/field'

export default function TimeFieldDemo() {
  return (
    <TimeField className="space-y-1">
      <Label>Event time</Label>
      <DateInput className={'min-w-[100px]'} />
    </TimeField>
  )
}
