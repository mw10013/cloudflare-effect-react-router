import type { Selection } from 'react-aria-components'
import React from 'react'
import { Label } from '~/lib/components/ui/field'
import { Tag, TagGroup, TagList } from '~/lib/components/ui/tag-group'

export default function TagGroupSelection() {
  let [selected, setSelected] = React.useState<Selection>(new Set(['parking']))

  return (
    <TagGroup
      className="space-y-1"
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={setSelected}>
      <Label>Amenities</Label>
      <TagList>
        <Tag id="laundry">Laundry</Tag>
        <Tag id="fitness">Fitness center</Tag>
        <Tag id="parking">Parking</Tag>
        <Tag id="pool">Swimming pool</Tag>
        <Tag id="breakfast">Breakfast</Tag>
      </TagList>
    </TagGroup>
  )
}
