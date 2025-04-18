'use client'

import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Form } from 'react-aria-components'
import { Button } from '~/lib/components/ui/button'
import { FieldError, FieldGroup, Label } from '~/lib/components/ui/field'
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from '~/lib/components/ui/searchfield'

export default function SearchFieldValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <SearchField className="group max-w-[200px]" isRequired>
        <Label>Search</Label>
        <FieldGroup>
          <MagnifyingGlassIcon
            aria-hidden
            className="size-4 text-muted-foreground"
          />
          <SearchFieldInput placeholder="Search..." />
          <SearchFieldClear>
            <Cross2Icon aria-hidden className="size-4" />
          </SearchFieldClear>
        </FieldGroup>
        <FieldError />
      </SearchField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}
