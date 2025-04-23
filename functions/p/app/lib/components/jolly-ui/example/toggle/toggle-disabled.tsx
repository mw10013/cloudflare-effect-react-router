import { UnderlineIcon } from '@radix-ui/react-icons'
import { Toggle } from '~/lib/components/ui/toggle'

export default function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle italic" isDisabled>
      <UnderlineIcon className="size-4" />
    </Toggle>
  )
}
