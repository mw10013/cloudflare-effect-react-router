import { FontItalicIcon } from '@radix-ui/react-icons'
import { Toggle } from '~/lib/components/ui/toggle'

export default function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <FontItalicIcon className="mr-2 size-4" />
      Italic
    </Toggle>
  )
}
