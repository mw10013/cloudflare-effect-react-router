import { Label } from '~/lib/components/ui/field'
import { TextArea, TextField } from '~/lib/components/ui/textfield'

export default function TextFieldMultiline() {
  return (
    <TextField>
      <Label>Comment</Label>
      <TextArea />
    </TextField>
  )
}
