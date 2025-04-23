'use client'

import { Form } from 'react-aria-components'
import { FieldError, Label } from '~/lib/components/ui/field'
import { Input, TextField } from '~/lib/components/ui/textfield'

export default function FormValidation() {
  return (
    <Form validationErrors={{ username: 'Sorry, this username is taken.' }}>
      <TextField name="username">
        <Label>Username</Label>
        <Input />
        <FieldError />
      </TextField>
    </Form>
  )
}
