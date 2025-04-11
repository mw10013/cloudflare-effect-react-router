'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Rac from 'react-aria-components'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import * as Oui from '~/lib/components/oui/oui-index'
import { Button } from '~/lib/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/lib/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/lib/components/ui/select'
import { toast } from '~/lib/hooks/use-toast'

const MyListBoxItem = ({
  children,
  ...props
}: Omit<Rac.ListBoxItemProps, 'children'> & {
  children: React.ReactNode
}) => (
  <Rac.ListBoxItem {...props} className="group flex gap-1 outline-none">
    {children}
    <div className="px-1 group-data-[selected]:bg-accent group-data-[selected]:text-accent-foreground">
      data-selected
    </div>

    <div className="px-1 group-focus:bg-accent group-focus:text-accent-foreground">
      focus:
    </div>
    <div className="px-1 group-focus-visible:bg-accent group-focus-visible:text-accent-foreground">
      focus-visible:
    </div>
    <div className="px-1 group-hover:bg-accent group-hover:text-accent-foreground">
      hover:
    </div>
    <div className="px-1 group-data-[focused]:bg-accent group-data-[focused]:text-accent-foreground">
      data-focused
    </div>
    <div className="px-1 group-data-[focus-visible]:bg-accent group-data-[focus-visible]:text-accent-foreground">
      data-focus-visible
    </div>
    <div className="px-1 group-data-[hovered]:bg-accent group-data-[hovered]:text-accent-foreground">
      data-hovered
    </div>
  </Rac.ListBoxItem>
)

function OuiExample() {
  return (
    <>
      <Oui.ListBox
        selectionMode="single"
        className="rounded-md border p-1 shadow-md">
        <Oui.ListBoxItem>Item 1</Oui.ListBoxItem>
        <Oui.ListBoxItem>Item 2</Oui.ListBoxItem>
        <Oui.ListBoxItem>Item 3</Oui.ListBoxItem>
      </Oui.ListBox>
      <Oui.ListBox
        selectionMode="single"
        className="rounded-md border p-1 shadow-md">
        <Oui.ListBoxItemEx label="Viewer" description="Can view and comment." />
        <Oui.ListBoxItemEx
          label="Developer"
          description="Can view, edit, and comment."
        />
        <Oui.ListBoxItemEx
          label="Billing"
          description="Can view, manage, and comment billing."
        />
        <Oui.ListBoxItemEx
          label="Owner"
          description="Admin-level access to all resources."
        />
      </Oui.ListBox>
      <Rac.ListBox
        aria-label="Favorite animal"
        selectionMode="single"
        className="w-fit rounded-md border p-1 shadow-md">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <MyListBoxItem key={i}>{i}:</MyListBoxItem>
          ))}
      </Rac.ListBox>
    </>
  )
}

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
})
//
export function ShadcnExample() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{' '}
                {/* <Link href="/examples/forms">email settings</Link>. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default function RouteComponent() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <OuiExample />
      <ShadcnExample />
    </div>
  )
}

// const foo = () => (
//   <div data-radix-popper-content-wrapper="" dir="ltr" style="position: fixed; left: 0px; top: 0px; transform: translate(349.5px, 182px); min-width: max-content; --radix-popper-transform-origin: 0% 0px; will-change: transform; z-index: 50; --radix-popper-available-width: 1077px; --radix-popper-available-height: 800px; --radix-popper-anchor-width: 325.328125px; --radix-popper-anchor-height: 36px;"><div data-side="bottom" data-align="start" role="listbox" id="radix-:Rlj5:" data-state="open" dir="ltr" class="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1" tabindex="-1" style="box-sizing: border-box; display: flex; flex-direction: column; outline: none; --radix-select-content-transform-origin: var(--radix-popper-transform-origin); --radix-select-content-available-width: var(--radix-popper-available-width); --radix-select-content-available-height: var(--radix-popper-available-height); --radix-select-trigger-width: var(--radix-popper-anchor-width); --radix-select-trigger-height: var(--radix-popper-anchor-height); pointer-events: auto;"><style>[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}</style><div data-radix-select-viewport="" role="presentation" class="p-1 h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]" style="position: relative; flex: 1 1 0%; overflow: hidden auto;"><div role="option" aria-labelledby="radix-:rr:" aria-selected="false" data-state="unchecked" tabindex="-1" class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" data-radix-collection-item="" data-highlighted=""><span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center"></span><span id="radix-:rr:">m@example.com</span></div><div role="option" aria-labelledby="radix-:rs:" aria-selected="false" data-state="unchecked" tabindex="-1" class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" data-radix-collection-item=""><span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center"></span><span id="radix-:rs:">m@google.com</span></div><div role="option" aria-labelledby="radix-:rt:" aria-selected="false" data-state="unchecked" tabindex="-1" class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" data-radix-collection-item=""><span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center"></span><span id="radix-:rt:">m@support.com</span></div></div></div></div>
// )
