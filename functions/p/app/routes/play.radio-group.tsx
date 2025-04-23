import * as Oui from '~/lib/components/oui/oui-index'
import { Label } from '~/lib/components/ui/label'
import { RadioGroup, RadioGroupItem } from '~/lib/components/ui/radio-group'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <Oui.RadioGroup defaultValue="comfortable">
        <Oui.Radio value="default">Default</Oui.Radio>
        <Oui.Radio value="comfortable">Comfortable</Oui.Radio>
        <Oui.Radio value="compact">Compact</Oui.Radio>
      </Oui.RadioGroup>
      <Oui.RadioGroup defaultValue="comfortable">
        <Oui.Radio value="default" isDisabled>
          Default
        </Oui.Radio>
        <Oui.Radio value="comfortable">Comfortable</Oui.Radio>
        <Oui.Radio value="compact">Compact</Oui.Radio>
      </Oui.RadioGroup>
      <Oui.RadioGroup defaultValue="comfortable" isDisabled>
        <Oui.Radio value="default">Default</Oui.Radio>
        <Oui.Radio value="comfortable">Comfortable</Oui.Radio>
        <Oui.Radio value="compact">Compact</Oui.Radio>
      </Oui.RadioGroup>
      <Oui.RadioGroupEx label="Notify me about..." name="type">
        <Oui.RadioGroupExRadio value="all">
          All new messages
        </Oui.RadioGroupExRadio>
        <Oui.RadioGroupExRadio value="mentions">
          Direct messages and mentions
        </Oui.RadioGroupExRadio>
        <Oui.RadioGroupExRadio value="none">Nothing</Oui.RadioGroupExRadio>
      </Oui.RadioGroupEx>
      <Oui.RadioGroupEx label="Notifications" description="Notify me about...">
        <Oui.RadioGroupExRadio value="all">
          All new messages
        </Oui.RadioGroupExRadio>
        <Oui.RadioGroupExRadio value="mentions">
          Direct messages and mentions
        </Oui.RadioGroupExRadio>
        <Oui.RadioGroupExRadio value="none">Nothing</Oui.RadioGroupExRadio>
      </Oui.RadioGroupEx>
      <Oui.RadioGroupEx
        label="Theme"
        description="Select the theme for the dashboard.">
        <Oui.Radio value="light">Light</Oui.Radio>
        <Oui.Radio value="dark">Dark</Oui.Radio>
      </Oui.RadioGroupEx>
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default (shadcn)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r11" disabled />
          <Label htmlFor="r11">Default (shadcn)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r12" />
          <Label htmlFor="r12">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r13" />
          <Label htmlFor="r13">Compact</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
