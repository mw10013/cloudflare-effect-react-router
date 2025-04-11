import { Button } from '~/lib/components/ui/button'
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from '~/lib/components/ui/menu'

export default function MenuLinks() {
  return (
    <MenuTrigger>
      <Button variant="outline">Links</Button>
      <MenuPopover>
        <Menu>
          <MenuItem href="https://adobe.com/" target="_blank">
            Adobe
          </MenuItem>
          <MenuItem href="https://apple.com/" target="_blank">
            Apple
          </MenuItem>
          <MenuItem href="https://google.com/" target="_blank">
            Google
          </MenuItem>
          <MenuItem href="https://microsoft.com/" target="_blank">
            Microsoft
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
