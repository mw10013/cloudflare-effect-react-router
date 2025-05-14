import * as Oui from "@workspace/oui";

export function OuiInputDemo() {
  return (
    <div className="flex flex-col flex-wrap gap-4 md:flex-row">
      <Oui.Input type="email" placeholder="Email" />
      <Oui.Input type="text" placeholder="Error" aria-invalid />
      <Oui.Input type="password" placeholder="Password" />
      <Oui.Input type="number" placeholder="Number" />
      <Oui.Input type="file" placeholder="File" />
      <Oui.Input type="tel" placeholder="Tel" />
      <Oui.Input type="text" placeholder="Text" />
      <Oui.Input type="url" placeholder="URL" />
      <Oui.Input type="search" placeholder="Search" />
      <Oui.Input type="date" placeholder="Date" />
      <Oui.Input type="datetime-local" placeholder="Datetime Local" />
      <Oui.Input type="month" placeholder="Month" />
      <Oui.Input type="time" placeholder="Time" />
      <Oui.Input type="week" placeholder="Week" />
      <Oui.Input disabled placeholder="Disabled" />
    </div>
  );
}
