import { JollyDatePicker } from '~/lib/components/ui/date-picker'

export default function DatepickerReusable() {
  return (
    <JollyDatePicker className="min-w-[200px]" label="Event date" isRequired />
  )
}
