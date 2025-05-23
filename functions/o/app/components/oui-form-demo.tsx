import * as Oui from "@workspace/oui";
import * as Rac from "react-aria-components";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;

export function OuiFormDemo() {
  return (
    <Rac.Form className="grid w-full max-w-sm gap-6">
      <Oui.TextFieldEx
        name="username"
        placeholder="shadcn"
        label="Username"
        description="This is your public display name."
      />
      <Oui.SelectEx
        placeholder="Select a verified email to display"
        label="Email"
        description="You can manage email addresses in your email settings."
      >
        <Oui.ListBoxItem>m@example.com</Oui.ListBoxItem>
        <Oui.ListBoxItem>me@google.com</Oui.ListBoxItem>
        <Oui.ListBoxItem>m@support.com</Oui.ListBoxItem>
      </Oui.SelectEx>
      <Oui.TextFieldEx
        name="bio"
        label="Bio"
        description="You can @mention other users and organizations."
      >
        <Oui.TextArea
          className="resize-none"
          placeholder="Tell us a little bit about yourself"
        />
      </Oui.TextFieldEx>
      <Oui.RadioGroupEx
        name="type"
        label="Notify me about..."
        className="flex flex-col gap-3"
      >
        <Oui.Radio value="all" className="font-normal">
          All new messages
        </Oui.Radio>
        <Oui.Radio value="mentions" className="font-normal">
          Direct messages and mentions
        </Oui.Radio>
        <Oui.Radio value="none" className="font-normal">
          Nothing
        </Oui.Radio>
      </Oui.RadioGroupEx>
      <Oui.CheckboxEx
        name="mobile"
        descriptionClassName="leading-snug"
        description="You can manage your mobile notifications in the mobile settings page."
        containerClassName="shadow-xs rounded-md border p-4"
        className="leading-snug"
      >
        Use different settings for my mobile devices
      </Oui.CheckboxEx>
      <Oui.CheckboxGroupEx
        name="items"
        labelClassName="text-base"
        label="Sidebar"
        description="Select the items you want to display in the sidebar."
        defaultValue={["recents", "home"]}
      >
        {items.map((item) => (
          <Oui.Checkbox
            key={item.id}
            value={item.id}
            className="text-sm font-normal leading-tight"
          >
            {item.label}
          </Oui.Checkbox>
        ))}
      </Oui.CheckboxGroupEx>
      <div>
        <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
        <div className="flex flex-col gap-4">
          <Oui.SwitchEx
            name="marketing_emails"
            descriptionClassName="leading-snug"
            description="Receive emails about new products, features, and more."
            indicatorPosition="end"
            // shadcn FormDemo FormItem: shadow-xs flex flex-row items-start justify-between rounded-lg border p-4
            containerClassName="shadow-xs rounded-lg border p-4"
            className="leading-snug"
          >
            Marketing emails
          </Oui.SwitchEx>
          <Oui.SwitchEx
            name="security_emails"
            descriptionClassName="leading-snug"
            description="Receive emails about your account security."
            indicatorPosition="end"
            // shadcn FormDemo FormItem: shadow-xs flex flex-row items-start justify-between rounded-lg border p-4
            containerClassName="shadow-xs rounded-lg border p-4"
            className="leading-normal"
            isDisabled
          >
            Security emails
          </Oui.SwitchEx>
        </div>
      </div>
      <Oui.Button type="submit">Submit</Oui.Button>
    </Rac.Form>
  );
}
