import { Button } from '~/lib/components/ui/button'
import {
  Popover,
  PopoverDialog,
  PopoverTrigger,
} from '~/lib/components/ui/popover'

export default function PopoverCrossOffset() {
  return (
    <PopoverTrigger>
      <Button variant="outline">Cross offset</Button>
      <Popover placement="top" crossOffset={100}>
        <PopoverDialog>Offset by an additional 100px.</PopoverDialog>
      </Popover>
    </PopoverTrigger>
  )
}
