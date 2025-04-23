import { Button } from '~/lib/components/ui/button'
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from '~/lib/components/ui/menu'

export default function MenuDisabledItems() {
  return (
    <MenuTrigger>
      <Button variant="outline">Actions</Button>
      <MenuPopover>
        <Menu>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Cut</MenuItem>
          <MenuItem isDisabled>Paste</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
