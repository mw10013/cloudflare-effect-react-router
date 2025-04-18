import { GridList, GridListItem } from '~/lib/components/ui/grid-list'

export default function GridListReplaceSelection() {
  return (
    <GridList
      aria-label="Favorite pokemon"
      selectionMode="multiple"
      defaultSelectedKeys={[1]}
      selectionBehavior="replace">
      <GridListItem id={1}>Charizard</GridListItem>
      <GridListItem id={2}>Blastoise</GridListItem>
      <GridListItem id={3}>Venusaur</GridListItem>
      <GridListItem id={4}>Pikachu</GridListItem>
    </GridList>
  )
}
