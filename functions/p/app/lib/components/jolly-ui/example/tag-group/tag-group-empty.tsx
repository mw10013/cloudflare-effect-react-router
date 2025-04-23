import { Label } from '~/lib/components/ui/field'
import { TagGroup, TagList } from '~/lib/components/ui/tag-group'

export default function TagGroupEmpty() {
  return (
    <TagGroup>
      <Label>Categories</Label>
      <TagList renderEmptyState={() => 'No categories.'}>{[]}</TagList>
    </TagGroup>
  )
}
