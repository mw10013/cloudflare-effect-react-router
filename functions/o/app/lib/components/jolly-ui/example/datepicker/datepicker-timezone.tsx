import { parseZonedDateTime } from '@internationalized/date'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Button } from '~/lib/components/ui/button'
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from '~/lib/components/ui/calendar'
import { DatePicker, DatePickerContent } from '~/lib/components/ui/date-picker'
import { DateInput } from '~/lib/components/ui/datefield'
import { FieldGroup, Label } from '~/lib/components/ui/field'

export default function DatepickerTimezone() {
  return (
    <DatePicker
      defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')}
      className="min-w-[208px] space-y-1">
      <Label>Date</Label>
      <FieldGroup>
        <DateInput className="flex-1" variant="ghost" />
        <Button
          variant="ghost"
          size="icon"
          className="mr-1 size-6 data-[focus-visible]:ring-offset-0">
          <CalendarIcon aria-hidden className="size-4" />
        </Button>
      </FieldGroup>
      <DatePickerContent>
        <Calendar>
          <CalendarHeading />
          <CalendarGrid>
            <CalendarGridHeader>
              {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
            </CalendarGridHeader>
            <CalendarGridBody>
              {(date) => <CalendarCell date={date} />}
            </CalendarGridBody>
          </CalendarGrid>
        </Calendar>
      </DatePickerContent>
    </DatePicker>
  )
}
