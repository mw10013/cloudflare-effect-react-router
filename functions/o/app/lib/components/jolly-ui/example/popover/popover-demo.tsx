import { Button } from '~/lib/components/ui/button'
import {
  Popover,
  PopoverDialog,
  PopoverTrigger,
} from '~/lib/components/ui/popover'
import { Switch } from '~/lib/components/ui/switch'

export default function PopoverDemo() {
  return (
    <PopoverTrigger>
      <Button variant="outline">Settings</Button>
      <Popover>
        <PopoverDialog>
          <div className="flex flex-col gap-4">
            <Switch defaultSelected>
              <div className="indicator" /> Wi-Fi
            </Switch>
            <Switch defaultSelected>
              <div className="indicator" /> Bluetooth
            </Switch>
            <Switch>
              <div className="indicator" /> Mute
            </Switch>
          </div>
        </PopoverDialog>
      </Popover>
    </PopoverTrigger>
  )
}
