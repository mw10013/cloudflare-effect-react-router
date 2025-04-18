import { ReloadIcon } from '@radix-ui/react-icons'
import { Button } from '~/lib/components/ui/button'

export default function ButtonLoading() {
  return (
    <Button isDisabled>
      <ReloadIcon className="mr-2 size-4 animate-spin" />
      Please wait
    </Button>
  )
}
