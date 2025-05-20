import * as Oui from "@workspace/oui";
import * as Rac from "react-aria-components";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

export function OuiSheetDemo() {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <Oui.DialogEx1
        triggerElement={<Oui.Button variant="outline">Open</Oui.Button>}
        side="right"
      >
        <Rac.Form>
          <Oui.DialogHeader>
            <Oui.Heading slot="title">Edit profile</Oui.Heading>
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
              autoFocus
            />
            <Oui.TextFieldEx
              name="username"
              label="Username"
              defaultValue="@peduarte"
            />
          </div>
          <Oui.DialogFooter>
            <Oui.Button type="submit" slot="close">
              Save changes
            </Oui.Button>
            <Oui.Button variant="outline" slot="close">
              Close
            </Oui.Button>
          </Oui.DialogFooter>
        </Rac.Form>
      </Oui.DialogEx1>

      <div className="flex flex-wrap gap-2">
        {SHEET_SIDES.map((side) => (
          <Oui.DialogEx1
            key={side}
            triggerElement={
              <Oui.Button variant="outline" className="capitalize">
                {side}
              </Oui.Button>
            }
            side={side}
          >
            <Oui.DialogHeader>
              <Oui.Heading slot="title">Edit profile</Oui.Heading>
              <Oui.DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </Oui.DialogDescription>
            </Oui.DialogHeader>
            <div className="-mx-6 max-h-[calc(100vh-16rem)] overflow-y-auto px-6 py-4 text-sm">
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
              <Oui.Button type="submit" slot="close">
                Save changes
              </Oui.Button>
              <Oui.Button variant="outline" slot="close">
                Cancel
              </Oui.Button>
            </Oui.DialogFooter>
          </Oui.DialogEx1>
        ))}
      </div>
    </div>
  );
}
