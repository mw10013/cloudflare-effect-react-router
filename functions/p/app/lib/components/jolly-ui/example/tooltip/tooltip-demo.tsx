import { Pencil1Icon } from '@radix-ui/react-icons'
import { Button } from '~/lib/components/ui/button'
import { Tooltip, TooltipTrigger } from '~/lib/components/ui/tooltip'

export default function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button variant="outline" size="icon" aria-label="Edit">
        <Pencil1Icon className="size-4" />
      </Button>
      <Tooltip>Edit</Tooltip>
    </TooltipTrigger>
  )
}
