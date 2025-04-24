'use client'

import * as Oui from '@workspace/oui'

export function OuiCheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Oui.Checkbox name="terms">Accept terms and conditions</Oui.Checkbox>
      <Oui.CheckboxEx
        name="terms-2"
        defaultSelected
        descriptionClassName="text-muted-foreground text-sm"
        description="By clicking this checkbox, you agree to the terms and conditions."
      >
        Accept terms and conditions
      </Oui.CheckboxEx>
      <Oui.Checkbox name="toggle" isDisabled>
        Enable notifications
      </Oui.Checkbox>
      <Oui.Checkbox
        name="toggle-2"
        defaultSelected
        className="data-[hovered]:bg-accent/50 rounded-lg border p-3 data-[selected]:border-blue-600 data-[selected]:bg-blue-50 dark:data-[selected]:border-blue-900 dark:data-[selected]:bg-blue-950"
        indicatorClassName="group-data-[selected]:border-blue-600 group-data-[selected]:bg-blue-600 group-data-[selected]:text-white dark:group-data-[selected]:border-blue-700 dark:group-data-[selected]:bg-blue-700"
      >
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm font-medium leading-none">Enable notifications</p>
          <p className="text-muted-foreground text-sm">You can enable or disable notifications at any time.</p>
        </div>
      </Oui.Checkbox>
    </div>
  )
}
