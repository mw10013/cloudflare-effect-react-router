import { Label } from '~/lib/components/ui/field'
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from '~/lib/components/ui/select'

export default function SelectDisabled() {
  return (
    <Select className="w-[200px]" placeholder="Select an item">
      <Label>Choose frequency</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectListBox>
          <SelectItem id="rarely">Rarely</SelectItem>
          <SelectItem id="sometimes">Sometimes</SelectItem>
          <SelectItem id="always">Always</SelectItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  )
}
