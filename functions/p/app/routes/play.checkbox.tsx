import * as Oui from '~/lib/components/oui/oui-index'
import { Checkbox } from '~/lib/components/ui/checkbox'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <Oui.Checkbox>Accept terms and conditions</Oui.Checkbox>
      <Oui.Checkbox isDisabled>Accept terms and conditions</Oui.Checkbox>
      <Oui.CheckboxEx description="You agree to our Terms of Service and Privacy Policy.">
        Accept terms and conditions
      </Oui.CheckboxEx>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Accept terms and conditions (shadcn)
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" disabled />
        <label
          htmlFor="terms2"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Accept terms and conditions (shadcn)
        </label>
      </div>
      <Oui.Checkbox isIndeterminate>Accept terms and conditions</Oui.Checkbox>
    </div>
  )
}
