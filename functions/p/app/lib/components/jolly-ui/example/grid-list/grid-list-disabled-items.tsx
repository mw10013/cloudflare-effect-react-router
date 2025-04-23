import { GridList, GridListItem } from '~/lib/components/ui/grid-list'

export default function GridListDisabledItems() {
  return (
    <GridList aria-label="List with disabled rows" selectionMode="multiple">
      <GridListItem>Charizard</GridListItem>
      <GridListItem>Blastoise</GridListItem>
      <GridListItem isDisabled>Venusaur</GridListItem>
      <GridListItem>Pikachu</GridListItem>
    </GridList>
  )
}
