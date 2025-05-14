import * as Oui from "@workspace/oui";
import * as Rac from "react-aria-components";

export function OuiLabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Oui.Checkbox id="label-demo-terms">
        Accept terms and conditions
      </Oui.Checkbox>
      <Rac.TextField className="grid gap-3">
        <Oui.Label>Username</Oui.Label>
        <Oui.Input placeholder="Username" />
      </Rac.TextField>
      <Rac.TextField className="group grid gap-3" isDisabled>
        <Oui.Label>Disabled</Oui.Label>
        <Oui.Input placeholder="Disabled" />
      </Rac.TextField>
      <Rac.TextField className="grid gap-3">
        <Oui.Label>Message</Oui.Label>
        <Oui.TextArea placeholder="Message" />
      </Rac.TextField>
    </div>
  );
}
