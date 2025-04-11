'use client'

import * as Rac from 'react-aria-components'
import * as Oui from '~/lib/components/oui/oui-index'
import { Button } from '~/lib/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '~/lib/components/ui/dropdown-menu'

function OuiExample() {
  return (
    <Rac.MenuTrigger>
      <Oui.Button aria-label="Menu" variant="outline">
        Open
      </Oui.Button>
      <Oui.Popover className="w-56">
        <Rac.Menu>
          <Rac.MenuSection>
            <Oui.Header variant="menu">My Account</Oui.Header>
            <Oui.Separator variant="menu" />
            <Oui.MenuItem textValue="Profile">
              <Oui.Text slot="label">Profile</Oui.Text>
              <Oui.Keyboard>⇧⌘P</Oui.Keyboard>
            </Oui.MenuItem>
            <Oui.MenuItem textValue="Billing">
              <Oui.Text slot="label">Billing</Oui.Text>
              <Oui.Keyboard>⌘B</Oui.Keyboard>
            </Oui.MenuItem>
            <Oui.MenuItem textValue="Settings">
              <Oui.Text slot="label">Settings</Oui.Text>
              <Oui.Keyboard>⌘S</Oui.Keyboard>
            </Oui.MenuItem>
            <Oui.MenuItem textValue="Keyboard shortcuts">
              <Oui.Text slot="label">Keyboard shortcuts</Oui.Text>
              <Oui.Keyboard>⌘K</Oui.Keyboard>
            </Oui.MenuItem>
          </Rac.MenuSection>
          <Oui.Separator variant="menu" />
          <Oui.MenuItem>Team</Oui.MenuItem>
          <Oui.MenuItem textValue="New Team">
            <Oui.Text slot="label">New Team</Oui.Text>
            <Oui.Keyboard>⌘+T</Oui.Keyboard>
          </Oui.MenuItem>
          <Oui.Separator variant="menu" />
          <Oui.MenuItem>Github</Oui.MenuItem>
          <Oui.MenuItem>Support</Oui.MenuItem>
          <Oui.MenuItem isDisabled>API</Oui.MenuItem>
          <Oui.Separator variant="menu" />
          <Oui.MenuItem textValue="Log out">
            <Oui.Text slot="label">Log out</Oui.Text>
            <Oui.Keyboard>⇧⌘Q</Oui.Keyboard>
          </Oui.MenuItem>
        </Rac.Menu>
      </Oui.Popover>
    </Rac.MenuTrigger>
  )
}

export function ShadcnExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiExample />
      <ShadcnExample />
      <div>
        <div
          role="menuitem"
          aria-labelledby="react-aria659762412-:r5q:"
          aria-describedby="react-aria659762412-:r5s:"
          data-key="react-aria-3"
          className="[&amp;>svg]:size-4 [&amp;>svg]:shrink-0 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 font-sans text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[disabled]:opacity-50"
          data-rac="">
          {/* <span id="react-aria659762412-:r5q:" slot="label"> */}
          Profile
          {/* </span> */}
          <kbd
            dir="ltr"
            id="react-aria659762412-:r5s:"
            className="ml-auto font-sans text-xs tracking-widest opacity-60">
            ⇧⌘P
          </kbd>
        </div>
      </div>
      <div
        role="menuitem"
        className="[&amp;>svg]:size-4 [&amp;>svg]:shrink-0 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        data-orientation="vertical"
        data-radix-collection-item="">
        Profile
        <span className="ml-auto text-xs tracking-widest opacity-60">⇧⌘P</span>
      </div>
    </div>
  )
}
