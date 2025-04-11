import { Label } from '~/lib/components/ui/field'
import { Meter } from '~/lib/components/ui/meter'

export default function MeterValueFormat() {
  return (
    <Meter
      value={60}
      className={'w-3/5'}
      formatOptions={{ style: 'currency', currency: 'JPY' }}>
      {({ valueText }) => (
        <div className="flex w-full justify-between">
          <Label>Currency</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Meter>
  )
}
