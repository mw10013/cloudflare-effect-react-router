'use client'

import { Form } from 'react-aria-components'
import { Button } from '~/lib/components/ui/button'
import { FieldError, Label } from '~/lib/components/ui/field'
import { Input, TextField } from '~/lib/components/ui/textfield'

export default function FormDemo() {
  return (
    <Form className="flex flex-col gap-2">
      <TextField name="email" type="email" isRequired>
        <Label>Email</Label>
        <Input />
        <FieldError />
      </TextField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}
