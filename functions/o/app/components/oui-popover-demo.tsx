import * as Oui from "@workspace/oui";

export function OuiPopoverDemo() {
  return (
    <Oui.PopoverEx
      triggerElement={<Oui.Button variant="outline">Open popover</Oui.Button>}
      className="w-80"
    >
      <Oui.DialogHeader>
        <Oui.Heading variant="popover" slot="title">
          Dimensions
        </Oui.Heading>
        <Oui.DialogDescription>
          Set the dimensions for the layer.
        </Oui.DialogDescription>
      </Oui.DialogHeader>
      <div className="grid gap-2">
        <Oui.TextFieldEx2
          name="width"
          label="Width"
          defaultValue="100%"
          autoFocus
        />
        <Oui.TextFieldEx2
          name="maxWidth"
          label="Max. width"
          defaultValue="300px"
        />
        <Oui.TextFieldEx2 name="height" label="Height" defaultValue="25px" />
        <Oui.TextFieldEx2
          name="maxHeight"
          label="Max. height"
          defaultValue="none"
        />
      </div>
    </Oui.PopoverEx>
  );
}
