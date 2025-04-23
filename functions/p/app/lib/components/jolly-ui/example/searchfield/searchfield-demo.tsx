import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { FieldGroup, Label } from '~/lib/components/ui/field'
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from '~/lib/components/ui/searchfield'

export default function SearchFieldDemo() {
  return (
    <SearchField className="max-w-[200px]">
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
    </SearchField>
  )
}
