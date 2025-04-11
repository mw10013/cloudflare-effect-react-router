'use client'

import { Time } from '@internationalized/date'
import { Form } from 'react-aria-components'
import { Button } from '~/lib/components/ui/button'
import { DateInput, TimeField } from '~/lib/components/ui/datefield'
import { FieldError, Label } from '~/lib/components/ui/field'

export default function TimeFieldCustomValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <TimeField
        validate={(time) =>
          time?.minute % 15 !== 0 ? 'Meetings start every 15 minutes.' : null
        }
        defaultValue={new Time(9, 25)}
        className={'group'}>
        <Label>Meeting time</Label>
        <DateInput className={'w-fit min-w-[100px]'} />
        <FieldError />
      </TimeField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}
