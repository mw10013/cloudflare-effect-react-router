import * as Oui from '@workspace/oui'
import { Label } from '@workspace/ui/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@workspace/ui/components/ui/radio-group'

const plans = [
  {
    id: 'starter',
    name: 'Starter Plan',
    description: 'Perfect for small businesses getting started with our platform',
    price: '$10'
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    description: 'Advanced features for growing businesses with higher demands',
    price: '$20'
  }
] as const

export function OuiRadioGroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Oui.RadioGroupEx defaultValue="comfortable">
        <Oui.Radio value="default" className="gap-3">
          Default
        </Oui.Radio>
        <Oui.Radio value="comfortable" className="gap-3">
          Comfortable
        </Oui.Radio>
        <Oui.Radio value="compact" className="gap-3">
          Compact
        </Oui.Radio>
      </Oui.RadioGroupEx>
      <Oui.RadioGroupEx defaultValue="starter" className="max-w-sm">
        {plans.map((plan) => (
          <Oui.Radio
            value={plan.id}
            key={plan.id}
            className="data-[hovered]:bg-accent/50 flex items-start gap-3 rounded-lg border p-4 data-[selected]:border-green-600 data-[selected]:bg-green-50 dark:data-[selected]:border-green-900 dark:data-[selected]:bg-green-950"
            radioGroupItemClassName="shadow-none group-data-[selected]:border-green-600  group-data-[selected]:bg-green-600 [&_svg]:fill-white [&_svg]:stroke-white"
          >
            <div className="grid gap-1 font-normal">
              <div className="font-medium">{plan.name}</div>
              <div className="text-muted-foreground leading-snug">{plan.description}</div>
            </div>
          </Oui.Radio>
        ))}
      </Oui.RadioGroupEx>
    </div>
  )
}
