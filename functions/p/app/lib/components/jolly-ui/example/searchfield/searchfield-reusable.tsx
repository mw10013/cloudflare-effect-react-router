import { JollySearchField } from '~/lib/components/ui/searchfield'

export default function SearchfieldReusable() {
  return (
    <JollySearchField
      label="Search"
      isRequired
      description="Search for a component"
    />
  )
}
