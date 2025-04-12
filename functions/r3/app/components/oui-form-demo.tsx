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
      <Oui.SelectEx
        placeholder="Select a verified email to display"
        label="Email"
        description={
          <>
            You can manage email addresses in your <Oui.Link href="/examples/forms">email settings</Oui.Link>.
          </>
        }
      >
        <Oui.ListBoxItem>m@example.com</Oui.ListBoxItem>
        <Oui.ListBoxItem>me@google.com</Oui.ListBoxItem>
        <Oui.ListBoxItem>m@support.com</Oui.ListBoxItem>
      </Oui.SelectEx>
      {/* <Oui.Button type="submit">Submit</Oui.Button> */}
    </Rac.Form>
  )
}
