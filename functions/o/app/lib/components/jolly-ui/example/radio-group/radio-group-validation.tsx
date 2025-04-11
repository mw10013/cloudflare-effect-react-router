'use client'

import { Form } from 'react-aria-components'
import { Button } from '~/lib/components/ui/button'
import { FieldError, Label } from '~/lib/components/ui/field'
import { Radio, RadioGroup } from '~/lib/components/ui/radio-group'

export default function RadioGroupValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <RadioGroup className="group" name="pet" isRequired>
        <Label>Favorite pet</Label>
        <Radio value="dogs">Dog</Radio>
        <Radio value="cats">Cat</Radio>
        <Radio value="dragon">Dragon</Radio>
        <FieldError />
      </RadioGroup>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}
