import { GridList, GridListItem } from '~/lib/components/ui/grid-list'

export default function GridListDirectRowActions() {
  return (
    <GridList
      aria-label="List with onAction applied on the rows directly"
      selectionMode="multiple">
      <GridListItem onAction={() => alert(`Opening Games`)}>Games</GridListItem>
      <GridListItem onAction={() => alert(`Opening Program Files`)}>
        Program Files
      </GridListItem>
      <GridListItem onAction={() => alert(`Opening bootmgr`)}>
        bootmgr
      </GridListItem>
      <GridListItem onAction={() => alert(`Opening log.txt`)}>
        log.txt
      </GridListItem>
    </GridList>
  )
}
