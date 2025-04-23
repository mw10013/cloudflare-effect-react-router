import { ArrowUpIcon } from '@radix-ui/react-icons'
import { Button } from '~/lib/components/ui/button'
import { Tooltip, TooltipTrigger } from '~/lib/components/ui/tooltip'

export default function TooltipOffset() {
  return (
    <TooltipTrigger>
      <Button variant="outline" size="icon" aria-label="Edit">
        <ArrowUpIcon className="size-4" />
      </Button>
      <Tooltip placement="top" offset={50}>
        This will shift up.
      </Tooltip>
    </TooltipTrigger>
  )
}
