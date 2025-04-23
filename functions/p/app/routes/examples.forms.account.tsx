import * as Rac from 'react-aria-components'
import * as Oui from '~/lib/components/oui/oui-index'

export default function RouteComponent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Oui.Separator />
      <AccountForm />
    </div>
  )
}

// TODO: AccountForm: Date of Birth
function AccountForm() {
  return (
    <Rac.Form className="space-y-8">
      <Oui.TextFieldEx
        name="name"
        label="Name"
        placeholder="Your name"
        description="This is the name that will be displayed on your profile and in emails."
      />
      <Oui.SelectEx
        label="Font"
        description="Set the font you want to use in the dashboard."
        buttonClassName="w-[200px]">
        <Oui.ListBoxItem>Inter</Oui.ListBoxItem>
        <Oui.ListBoxItem>Manrope</Oui.ListBoxItem>
        <Oui.ListBoxItem>System</Oui.ListBoxItem>
      </Oui.SelectEx>
      <Oui.Button type="submit">Update account</Oui.Button>
    </Rac.Form>
  )
}
