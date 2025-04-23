import { JollyTagGroup, Tag } from '~/lib/components/ui/tag-group'

export default function TagGroupReusable() {
  return (
    <JollyTagGroup label="Ice cream flavor" selectionMode="single">
      <Tag>Chocolate</Tag>
      <Tag>Mint</Tag>
      <Tag>Strawberry</Tag>
      <Tag>Vanilla</Tag>
    </JollyTagGroup>
  )
}
