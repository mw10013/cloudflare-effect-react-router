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
import { Input } from '~/lib/components/ui/input'
import { RadioGroup, RadioGroupItem } from '~/lib/components/ui/radio-group'
import { toast } from '~/lib/hooks/use-toast'

function OuiExample() {
  return (
    <Rac.Form className="w-2/3 border p-6">
      <Oui.TextFieldEx
        name="username"
        type="text"
        label="Username"
        description="This is your public display name."
        placeholder="shadcn"
        isRequired
      />
      <Oui.TextFieldEx name="email" type="email" label="Email" isRequired />
      <Oui.TextFieldEx
        name="reserved"
        type="text"
        label="Reserved"
        isDisabled
        placeholder="This field is reserved."
      />
      <Oui.RadioGroupEx label="Notify me about..." name="type">
        <Oui.Radio value="all">All new messages</Oui.Radio>
        <Oui.Radio value="mentions">Direct messages and mentions</Oui.Radio>
        <Oui.Radio value="none">Nothing</Oui.Radio>
      </Oui.RadioGroupEx>
      <Oui.Button type="submit">Submit</Oui.Button>
    </Rac.Form>
  )
}

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email(),
  reserved: z.string().default('Reserved'),
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
})

function ShadcnExample() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6 border p-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reserved"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reserved</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="This field is reserved."
                  disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1">
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      All new messages
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Direct messages and mentions
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
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
