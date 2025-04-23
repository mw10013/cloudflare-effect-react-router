import { JollyNumberField } from '~/lib/components/ui/numberfield'

export default function NumberfieldReusable() {
  return (
    <JollyNumberField
      label="Cookies"
      isRequired
      description="Please enter a number"
    />
  )
}
