import { GridList, GridListItem } from '~/lib/components/ui/grid-list'

export default function GridListDemo() {
  return (
    <GridList aria-label="Favorite pokemon" selectionMode="multiple">
      <GridListItem>Charizard</GridListItem>
      <GridListItem>Blastoise</GridListItem>
      <GridListItem>Venusaur</GridListItem>
      <GridListItem>Pikachu</GridListItem>
    </GridList>
  )
}
