import * as Rac from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import * as Oui from '~/components/oui/oui-index'

const items = [
  {
    id: 'recents',
    label: 'Recents'
  },
  {
    id: 'home',
    label: 'Home'
  },
  {
    id: 'applications',
    label: 'Applications'
  },
  {
    id: 'desktop',
    label: 'Desktop'
  },
  {
    id: 'downloads',
    label: 'Downloads'
  },
  {
    id: 'documents',
    label: 'Documents'
  }
] as const

export function OuiFormDemo() {
  return (
    <Rac.Form className="grid w-full max-w-sm gap-6">
      {/* <Oui.TextFieldEx name="username" placeholder="shadcn" label="Username" description="This is your public display name." /> */}
      {/* <Oui.SelectEx
        placeholder="Select a verified email to display"
        label="Email"
        description="You can manage email addresses in your email settings."
      >
        <Oui.ListBoxItem>m@example.com</Oui.ListBoxItem>
        <Oui.ListBoxItem>me@google.com</Oui.ListBoxItem>
        <Oui.ListBoxItem>m@support.com</Oui.ListBoxItem>
      </Oui.SelectEx> */}
      {/* <Oui.TextFieldEx1
        name="bio"
        label="Bio"
        description={
          <>
            You can <span>@mention</span> other users and organizations.
          </>
        }
      >
        <Oui.TextArea className="resize-none" placeholder="Tell us a little bit about yourself" />
      </Oui.TextFieldEx1> */}
      {/* <Oui.RadioGroupEx name="type" label="Notify me about...">
        <Oui.Radio value="all">All new messages</Oui.Radio>
        <Oui.Radio value="mentions">Direct messages and mentions</Oui.Radio>
        <Oui.Radio value="none">Nothing</Oui.Radio>
      </Oui.RadioGroupEx> */}
      {/* <Oui.CheckboxEx
        name="mobile"
        description={<span className="leading-snug">You can manage your mobile notifications in the mobile settings page.</span>}
        containerClassName="shadow-xs rounded-md border p-4"
      >
        <span className="leading-snug">Use different settings for my mobile devices</span>
      </Oui.CheckboxEx> */}
      <Oui.CheckboxGroupEx
        name="items"
        label={<span className="text-base">Sidebar</span>}
        description="Select the items you want to display in the sidebar."
        defaultValue={['recents', 'home']}
      >
        {items.map((item) => (
          <Oui.Checkbox key={item.id} value={item.id}>
            <span className="text-sm font-normal leading-tight">{item.label}</span>
          </Oui.Checkbox>
        ))}
      </Oui.CheckboxGroupEx>
      <div>
        <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
        <div className="flex flex-col gap-4">
          <Oui.SwitchEx
            name="marketing_emails"
            description={<span className="leading-snug">Receive emails about new products, features, and more.</span>}
            indicatorPosition="end"
            // shadcn FormDemo FormItem: shadow-xs flex flex-row items-start justify-between rounded-lg border p-4
            containerClassName="shadow-xs rounded-lg border p-4"
          >
            <span className="leading-normal">Marketing emails</span>
          </Oui.SwitchEx>
          <Oui.SwitchEx
            name="security_emails"
            description={<span className="leading-snug">Receive emails about your account security.</span>}
            indicatorPosition="end"
            // shadcn FormDemo FormItem: shadow-xs flex flex-row items-start justify-between rounded-lg border p-4
            containerClassName="shadow-xs rounded-lg border p-4"
            isDisabled
          >
            <span className="leading-normal">Security emails</span>
          </Oui.SwitchEx>
        </div>
      </div>
      <Oui.Button type="submit">Submit</Oui.Button>
      {/* <div className="h-4 border-2" /> */}
    </Rac.Form>
  )
}
