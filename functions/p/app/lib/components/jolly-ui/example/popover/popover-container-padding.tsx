import { Button } from '~/lib/components/ui/button'
import {
  Popover,
  PopoverDialog,
  PopoverTrigger,
} from '~/lib/components/ui/popover'

export default function PopoverContainerPadding() {
  return (
    <PopoverTrigger>
      <Button variant="outline">Container Padding</Button>
      <Popover placement="top" containerPadding={50}>
        <PopoverDialog className="max-w-[150px]">
          This is a popover.
        </PopoverDialog>
      </Popover>
    </PopoverTrigger>
  )
}
