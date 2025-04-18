'use client'

import { Form } from 'react-aria-components'
import { Button } from '~/lib/components/ui/button'
import { FieldError, Label } from '~/lib/components/ui/field'
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from '~/lib/components/ui/select'

export default function SelectValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <Select
        isRequired
        className="group w-[200px]"
        placeholder="Select an item">
        <Label>Favorite Animal</Label>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <FieldError />
        <SelectPopover>
          <SelectListBox>
            <SelectItem>Aardvark</SelectItem>
            <SelectItem>Cat</SelectItem>
            <SelectItem>Dog</SelectItem>
            <SelectItem>Kangaroo</SelectItem>
            <SelectItem>Panda</SelectItem>
            <SelectItem>Snake</SelectItem>
          </SelectListBox>
        </SelectPopover>
      </Select>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}
