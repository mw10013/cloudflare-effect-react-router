import * as Rac from 'react-aria-components'
import * as Oui from '~/lib/components/oui/oui-index'

export default function RouteComponent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
      </div>
      <Oui.Separator />
      <AppearanceForm />
    </div>
  )
}

function AppearanceForm() {
  return (
    <Rac.Form className="space-y-8">
      <Oui.SelectEx
        label="Font"
        description="Set the font you want to use in the dashboard."
        buttonClassName="w-[200px]">
        <Oui.ListBoxItem>Inter</Oui.ListBoxItem>
        <Oui.ListBoxItem>Manrope</Oui.ListBoxItem>
        <Oui.ListBoxItem>System</Oui.ListBoxItem>
      </Oui.SelectEx>
      <Oui.RadioGroupEx
        label="Theme"
        description="Select the theme for the dashboard."
        defaultValue="light">
        <div className="grid max-w-md grid-cols-2 gap-8">
          <ThemeRadio value="light">
            <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
              <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
              </div>
            </div>
          </ThemeRadio>
          <ThemeRadio value="dark">
            <div className="space-y-2 rounded-sm bg-slate-950 p-2">
              <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-slate-400" />
                <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-slate-400" />
                <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
              </div>
            </div>
          </ThemeRadio>
        </div>
      </Oui.RadioGroupEx>
      <Oui.Button type="submit">Update preferences</Oui.Button>
    </Rac.Form>
  )
}

const ThemeRadio = ({
  value,
  children,
}: {
  value: string
  children?: React.ReactNode
}) => (
  <Rac.Radio value={value} className={`${Oui.labelStyles.base} group`}>
    <div className="items-center rounded-md border-2 border-muted p-1 group-data-[hovered]:border-accent group-data-[selected]:border-primary group-data-[hovered]:text-accent-foreground">
      {children}
    </div>
    <div className="p-2 text-center font-normal capitalize">{value}</div>
  </Rac.Radio>
)
