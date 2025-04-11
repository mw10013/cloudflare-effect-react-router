import { StarterMenu } from './starter-menu'
import { StarterTable } from './starter-table'
import { StarterTable1 } from './starter-table1'
import { Button } from './starter/Button'

export function StarterComponents() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border p-12">
      <StarterTable1 />
      <StarterMenu />
      <StarterTable />
      <Button>Book flight</Button>
    </div>
  )
}
