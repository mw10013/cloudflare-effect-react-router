import { Label } from '~/lib/components/ui/field'
import { Meter } from '~/lib/components/ui/meter'

export default function MeterCustomFormat() {
  return (
    <Meter value={54} className={'w-3/5'} valueLabel="54 of 60GB">
      {({ valueText }) => (
        <div className="flex w-full justify-between">
          <Label>Space used</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Meter>
  )
}
