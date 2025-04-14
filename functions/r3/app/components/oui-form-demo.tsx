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
      <Oui.TextFieldEx1
        name="bio"
        // label="Bio"
        // description={
        //   <>
        //     You can <span>@mention</span> other users and organizations.
        //   </>
        // }
      >
        <Oui.TextArea className="resize-none" placeholder="Tell us a little bit about yourself" />
      </Oui.TextFieldEx1>
      {/* <Oui.RadioGroupEx name="type" label="Notify me about...">
        <Oui.Radio value="all">All new messages</Oui.Radio>
        <Oui.Radio value="mentions">Direct messages and mentions</Oui.Radio>
        <Oui.Radio value="none">Nothing</Oui.Radio>
      </Oui.RadioGroupEx> */}
      {/* <Oui.CheckboxEx
        name="mobile"
        description="You can manage your mobile notifications in the mobile settings page."
        containerClassName="shadow-xs rounded-md border p-4"
      >
        Use different settings for my mobile devices
      </Oui.CheckboxEx> */}
      {/* <Oui.CheckboxGroupEx
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
      </Oui.CheckboxGroupEx> */}
      {/* <Oui.Button type="submit">Submit</Oui.Button> */}
      <div className="h-4 border-2" />
    </Rac.Form>
  )
}
