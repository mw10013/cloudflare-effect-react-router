import { parseZonedDateTime } from '@internationalized/date'
import { DateInput, TimeField } from '~/lib/components/ui/datefield'
import { Label } from '~/lib/components/ui/field'

export default function TimeFieldTimezone() {
  return (
    <TimeField
      defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')}
      className="space-y-1">
      <Label>Event time</Label>
      <DateInput className={'min-w-[100px]'} />
    </TimeField>
  )
}
