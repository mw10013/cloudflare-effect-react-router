'use client'

import { zodResolver } from '@hookform/resolvers/zod'
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

function OuiExample() {
  return (
    <>
      <Oui.Select
        className="w-1/3"
        placeholder="Select a verified email to display">
        <Oui.Label>Email</Oui.Label>
        <Oui.SelectButton>
          <Oui.SelectValue />
        </Oui.SelectButton>
        <Oui.Text slot="description">
          You can manage email addresses in your{' '}
          <Oui.Link href="/examples/forms">email settings</Oui.Link>.
        </Oui.Text>
        <Oui.Popover>
          <Oui.ListBox>
            <Oui.ListBoxItem>m@example.com</Oui.ListBoxItem>
            <Oui.ListBoxItem>me@google.com</Oui.ListBoxItem>
            <Oui.ListBoxItem>m@support.com</Oui.ListBoxItem>
          </Oui.ListBox>
        </Oui.Popover>
      </Oui.Select>
      <Oui.SelectEx
        className="w-1/3"
        placeholder="Select a verified email to display"
        label="Email"
        description={
          <>
            You can manage email addresses in your{' '}
            <Oui.Link href="/examples/forms">email settings</Oui.Link>.
          </>
        }>
        <Oui.ListBoxItem>m@example.com</Oui.ListBoxItem>
        <Oui.ListBoxItem>me@google.com</Oui.ListBoxItem>
        <Oui.ListBoxItem>m@support.com</Oui.ListBoxItem>
      </Oui.SelectEx>
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
                <a href="/examples/forms">email settings</a>.
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
