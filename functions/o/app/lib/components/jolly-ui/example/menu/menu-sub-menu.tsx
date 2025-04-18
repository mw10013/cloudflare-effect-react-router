import { Button } from '~/lib/components/ui/button'
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuSubTrigger,
  MenuTrigger,
} from '~/lib/components/ui/menu'

export default function MenuSubMenus() {
  return (
    <MenuTrigger>
      <Button variant="outline">Actions</Button>
      <MenuPopover>
        <Menu>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuSubTrigger>
            <MenuItem>Share</MenuItem>
            <MenuPopover>
              <Menu>
                <MenuItem>SMS</MenuItem>
                <MenuItem>Twitter</MenuItem>
                <MenuSubTrigger>
                  <MenuItem>Email</MenuItem>
                  <MenuPopover>
                    <Menu>
                      <MenuItem>Work</MenuItem>
                      <MenuItem>Personal</MenuItem>
                    </Menu>
                  </MenuPopover>
                </MenuSubTrigger>
              </Menu>
            </MenuPopover>
          </MenuSubTrigger>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
