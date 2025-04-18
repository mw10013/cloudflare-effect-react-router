'use client'

import { getLocalTimeZone, today } from '@internationalized/date'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Form } from 'react-aria-components'
import { Button } from '~/lib/components/ui/button'
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from '~/lib/components/ui/calendar'
import {
  DatePickerContent,
  DateRangePicker,
} from '~/lib/components/ui/date-picker'
import { DateInput } from '~/lib/components/ui/datefield'
import { FieldError, FieldGroup, Label } from '~/lib/components/ui/field'

export default function DateRangeUnavailable() {
  let now = today(getLocalTimeZone())
  let disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ]

  return (
    <Form className="flex flex-col gap-2">
      <DateRangePicker
        minValue={today(getLocalTimeZone())}
        isDateUnavailable={(date) =>
          disabledRanges.some(
            (interval) =>
              date.compare(interval[0]!) >= 0 && date.compare(interval[1]!) <= 0
          )
        }
        validate={(value) =>
          disabledRanges.some(
            (interval) =>
              value &&
              value.end.compare(interval[0]!) >= 0 &&
              value.start.compare(interval[1]!) <= 0
          )
            ? 'Selected date range may not include unavailable dates.'
            : null
        }
        className="group min-w-[320px] space-y-1">
        <Label>Trip dates</Label>
        <FieldGroup>
          <DateInput variant="ghost" slot={'start'} />
          <span aria-hidden className="px-2 text-sm text-muted-foreground">
            -
          </span>
          <DateInput className="flex-1" variant="ghost" slot={'end'} />

          <Button
            variant="ghost"
            size="icon"
            className="mr-1 size-6 data-[focus-visible]:ring-offset-0">
            <CalendarIcon aria-hidden className="size-4" />
          </Button>
        </FieldGroup>
        <FieldError />
        <DatePickerContent>
          <RangeCalendar>
            <CalendarHeading />
            <CalendarGrid>
              <CalendarGridHeader>
                {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => <CalendarCell date={date} />}
              </CalendarGridBody>
            </CalendarGrid>
          </RangeCalendar>
        </DatePickerContent>
      </DateRangePicker>
      <Button type="submit" className="w-fit">
        Submit
      </Button>
    </Form>
  )
}
