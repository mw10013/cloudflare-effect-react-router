'use client'

import { Text } from 'react-aria-components'
import { DateInput, TimeField } from '~/lib/components/ui/datefield'
import { Label } from '~/lib/components/ui/field'

export default function TimeFieldDescription() {
  return (
    <TimeField className="space-y-1">
      <Label>Event time</Label>
      <DateInput className={'w-fit min-w-[100px]'} />
      <Text className="text-sm text-muted-foreground" slot="description">
        Please select a time between 9 AM and 5 PM.
      </Text>
    </TimeField>
  )
}
