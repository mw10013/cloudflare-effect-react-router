import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Button } from '~/lib/components/ui/button'
import { Tooltip, TooltipTrigger } from '~/lib/components/ui/tooltip'

export default function TooltipOffset() {
  return (
    <TooltipTrigger>
      <Button variant="outline" size="icon" aria-label="Edit">
        <ArrowRightIcon className="size-4" />
      </Button>
      <Tooltip placement="bottom" crossOffset={60}>
        This will shift over to the right.
      </Tooltip>
    </TooltipTrigger>
  )
}
