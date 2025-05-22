import type { Route } from "./+types/sandbox";
import React from "react";
import * as Oui from "@workspace/oui";
import * as Rac from "react-aria-components";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Modal.html
#fetch https://react-spectrum.adobe.com/react-aria/Dialog.html
*/

export default function RouteComponent({ actionData }: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh flex-col gap-2 p-6">
      <ModalDialog />
      <PopoverDialog />
    </div>
  );
}

function ModalDialog() {
  return (
    <Rac.DialogTrigger>
      <Rac.Button>Modal</Rac.Button>
      <Rac.Modal className={Oui.modalStyles()}>
        <Dialog>
          <Rac.Button slot="close">Modal</Rac.Button>
        </Dialog>
      </Rac.Modal>
    </Rac.DialogTrigger>
  );
}

function PopoverDialog() {
  return (
    <Rac.DialogTrigger>
      <Rac.Button>Popover</Rac.Button>
      <Rac.Popover className={Oui.popoverStyles({ trigger: "DialogTrigger" })}>
        <Dialog>
          <Rac.Button slot="close">Popover</Rac.Button>
        </Dialog>
      </Rac.Popover>
    </Rac.DialogTrigger>
  );
}

function Dialog(props: Rac.DialogProps) {
  const modalContext = React.useContext(Rac.ModalContext);
  const popoverContext = React.useContext(Rac.PopoverContext);
  const dialogContext = React.useContext(Rac.DialogContext);
  console.log("Dialog", { modalContext, popoverContext, dialogContext });
  return <Rac.Dialog {...props} className="" />;
}
