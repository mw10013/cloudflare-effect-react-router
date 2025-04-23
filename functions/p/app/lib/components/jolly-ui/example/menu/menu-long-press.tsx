import { Button } from '~/lib/components/ui/button'
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from '~/lib/components/ui/menu'

export default function MenuLongPress() {
  return (
    <MenuTrigger trigger="longPress">
      <Button variant="outline" onPress={() => alert('crop')}>
        Crop
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem>Rotate</MenuItem>
          <MenuItem>Slice</MenuItem>
          <MenuItem>Clone stamp</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
