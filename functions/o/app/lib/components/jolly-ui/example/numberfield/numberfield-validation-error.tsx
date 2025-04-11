'use client'

import { Form } from 'react-aria-components'
import { Button } from '~/lib/components/ui/button'
import { FieldError, FieldGroup, Label } from '~/lib/components/ui/field'
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from '~/lib/components/ui/numberfield'

export default function NumberFieldValidationError() {
  return (
    <Form className="flex flex-col gap-2">
      <NumberField className="group" name="width" isRequired>
        <Label>Width</Label>
        <FieldGroup>
          <NumberFieldInput />
          <NumberFieldSteppers />
        </FieldGroup>
        <FieldError />
      </NumberField>
      <Button type="submit" className="w-fit">
        Submit
      </Button>
    </Form>
  )
}
