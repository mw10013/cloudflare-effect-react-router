import { Label } from '~/lib/components/ui/field'
import { Input, TextField } from '~/lib/components/ui/textfield'

export default function TextFieldReadonly() {
  return (
    <TextField isReadOnly defaultValue="abc@adobe.com">
      <Label>Email</Label>
      <Input />
    </TextField>
  )
}
