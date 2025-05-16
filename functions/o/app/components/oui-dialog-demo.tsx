import * as Oui from "@workspace/oui";
import * as Rac from "react-aria-components";

export function OuiDialogDemo() {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <DialogWithForm />
      <DialogScrollableContent />
      <DialogWithStickyFooter />
    </div>
  );
}

function DialogWithForm() {
  return (
    <Rac.DialogTrigger>
      <Oui.Button variant="outline">Edit Profile</Oui.Button>
      <Oui.ModalEx className="sm:max-w-[425px]">
        <Oui.Dialog>
          <form>
            <Oui.DialogHeader>
              <Rac.Heading
                slot="title"
                className="text-lg font-semibold leading-none"
              >
                Edit profile
              </Rac.Heading>
              <Oui.DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </Oui.DialogDescription>
            </Oui.DialogHeader>
            <div className="grid gap-4 py-4">
              <Oui.TextFieldEx
                name="name"
                label="Name"
                defaultValue="Pedro Duarte"
              />
              <Oui.TextFieldEx
                name="username"
                label="Username"
                defaultValue="@peduarte"
              />
            </div>
            <Oui.DialogFooter>
              <Oui.Button variant="outline" slot="close">
                Cancel
              </Oui.Button>
              <Oui.Button type="submit" slot="close">
                Save changes
              </Oui.Button>
            </Oui.DialogFooter>
          </form>
        </Oui.Dialog>
      </Oui.ModalEx>
    </Rac.DialogTrigger>
  );
}

function DialogScrollableContent() {
  return (
    <Rac.DialogTrigger>
      <Oui.Button variant="outline">Scrollable Content</Oui.Button>
      <Oui.ModalEx className="sm:max-w-[425px]">
        <Oui.Dialog>
          <Oui.DialogHeader>
            <Rac.Heading
              slot="title"
              className="text-lg font-semibold leading-none"
            >
              Scrollable Content
            </Rac.Heading>
            <Oui.DialogDescription>
              This is a dialog with scrollable content.
            </Oui.DialogDescription>
          </Oui.DialogHeader>
          <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 py-4 text-sm">
            <h4 className="mb-4 text-lg font-medium leading-none">
              Lorem Ipsum
            </h4>
            {Array.from({ length: 10 }).map((_, index) => (
              <p key={index} className="mb-4 leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ))}
          </div>
        </Oui.Dialog>
      </Oui.ModalEx>
    </Rac.DialogTrigger>
  );
}

function DialogWithStickyFooter() {
  return (
    <Rac.DialogTrigger>
      <Oui.Button variant="outline">Sticky Footer</Oui.Button>
      <Oui.ModalEx className="sm:max-w-lg">
        <Oui.Dialog>
            <Oui.DialogHeader>
              <Rac.Heading
                slot="title"
                className="text-lg font-semibold leading-none"
              >
                Scrollable Content
              </Rac.Heading>
              <Oui.DialogDescription>
                This is a dialog with scrollable content.
              </Oui.DialogDescription>
            </Oui.DialogHeader>
            <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 py-4 text-sm">
              <h4 className="mb-4 text-lg font-medium leading-none">
                Lorem Ipsum
              </h4>
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index} className="mb-4 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              ))}
            </div>
            <Oui.DialogFooter>
              <Oui.Button variant="outline" slot="close">
                Close
              </Oui.Button>
            </Oui.DialogFooter>
        </Oui.Dialog>
      </Oui.ModalEx>
    </Rac.DialogTrigger>
  );
}
