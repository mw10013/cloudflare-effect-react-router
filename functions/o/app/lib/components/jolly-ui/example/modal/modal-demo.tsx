import { Button } from '~/lib/components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '~/lib/components/ui/dialog'
import { Label } from '~/lib/components/ui/field'
import { Input, TextField } from '~/lib/components/ui/textfield'

export default function ModalDemo() {
  return (
    <DialogTrigger>
      <Button variant="outline">Sign up...</Button>
      <DialogOverlay>
        <DialogContent className="sm:max-w-[425px]">
          {({ close }) => (
            <>
              <DialogHeader>
                <DialogTitle>Sign up</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <TextField autoFocus>
                  <Label>First Name</Label>
                  <Input />
                </TextField>
                <TextField>
                  <Label>Last Name</Label>
                  <Input />
                </TextField>
              </div>
              <DialogFooter>
                <Button onPress={close} type="submit">
                  Save changes
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  )
}
