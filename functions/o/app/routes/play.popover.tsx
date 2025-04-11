'use client'

import * as Rac from 'react-aria-components'
import * as Oui from '~/lib/components/oui/oui-index'
import { Button } from '~/lib/components/ui/button'
import { Input } from '~/lib/components/ui/input'
import { Label } from '~/lib/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/lib/components/ui/popover'

function OuiExample() {
  return (
    <>
      <Rac.DialogTrigger>
        <Oui.Button variant="outline">Open dialog</Oui.Button>
        <Oui.Popover className="w-80">
          <Rac.Dialog>
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
                <Oui.TextFieldEx
                  autoFocus
                  label="Name"
                  placeholder="Pedro Duarte"
                />
              </div>
            </div>
          </Rac.Dialog>
        </Oui.Popover>
      </Rac.DialogTrigger>
      <Rac.MenuTrigger>
        <Oui.Button variant="outline">Open menu</Oui.Button>
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
      <Oui.Select
        className="w-1/3"
        placeholder="Select a verified email to display">
        <Oui.Label>Email</Oui.Label>
        <Oui.SelectButton>
          <Oui.SelectValue />
        </Oui.SelectButton>
        <Oui.Text slot="description">
          You can manage email addresses in your{' '}
          <Oui.Link href="/examples/forms">email settings</Oui.Link>.
        </Oui.Text>
        <Oui.Popover>
          <Oui.ListBox>
            <Oui.ListBoxItem>m@example.com</Oui.ListBoxItem>
            <Oui.ListBoxItem>me@google.com</Oui.ListBoxItem>
            <Oui.ListBoxItem>m@support.com</Oui.ListBoxItem>
          </Oui.ListBox>
        </Oui.Popover>
      </Oui.Select>
    </>
  )
}

function ShadcnExample() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiExample />
      <ShadcnExample />
    </div>
  )
}
