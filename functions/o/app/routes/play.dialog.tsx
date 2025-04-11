'use client'

import * as Rac from 'react-aria-components'
import * as Oui from '~/lib/components/oui/oui-index'
import { Button } from '~/lib/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/lib/components/ui/dialog'
import { Input } from '~/lib/components/ui/input'
import { Label } from '~/lib/components/ui/label'

function OuiDialogExample() {
  return (
    <Rac.DialogTrigger>
      <Oui.Button variant="outline">Edit Profile</Oui.Button>
      <Oui.ModalOverlay>
        <Oui.Modal className="sm:max-w-[425px]">
          <Oui.Dialog>
            <Oui.DialogHeader>
              <Oui.Heading slot="title">Edit profile</Oui.Heading>
              <Oui.DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </Oui.DialogDescription>
            </Oui.DialogHeader>
            <Oui.NumberFieldEx
              autoFocus
              label="Name"
              placeholder="Pedro Duarte"
            />
            <Oui.DialogFooter>
              <Oui.Button>Save changes</Oui.Button>
            </Oui.DialogFooter>
          </Oui.Dialog>
        </Oui.Modal>
      </Oui.ModalOverlay>
    </Rac.DialogTrigger>
  )
}

function ShadcnDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiDialogExample />
      <ShadcnDialogExample />
    </div>
  )
}
