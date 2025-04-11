import * as Rac from 'react-aria-components'
import * as Oui from '~/lib/components/oui/oui-index'

export default function RouteComponent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-sm text-muted-foreground">
          Configure how you receive notifications.
        </p>
      </div>
      <Oui.Separator />
      <NotificationsForm />
    </div>
  )
}

function NotificationsForm() {
  return (
    <Rac.Form className="space-y-8">
      <Oui.RadioGroupEx label="Notify me about...">
        <Oui.RadioGroupExRadio value="all">
          All new messages
        </Oui.RadioGroupExRadio>
        <Oui.RadioGroupExRadio value="mentions">
          Direct messages and mentions
        </Oui.RadioGroupExRadio>
        <Oui.RadioGroupExRadio value="none">Nothing</Oui.RadioGroupExRadio>
      </Oui.RadioGroupEx>
      <div>
        <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
        <div className="space-y-4">
          <Oui.SwitchEx1
            name="communication_emails"
            description="Receive emails about your account activity.">
            Communication emails
          </Oui.SwitchEx1>
          <Oui.SwitchEx1
            name="marketing_emails"
            description="Receive emails about new products, features, and more.">
            Marketing emails
          </Oui.SwitchEx1>
          <Oui.SwitchEx1
            name="social_emails"
            description="Receive emails for friend requests, follows, and more."
            defaultSelected>
            Social emails
          </Oui.SwitchEx1>
          <Oui.SwitchEx1
            name="security_emails"
            description="Receive emails about your account activity and security."
            isSelected
            isDisabled>
            Security emails
          </Oui.SwitchEx1>
        </div>
      </div>
      <Oui.CheckboxEx
        name="mobile"
        description={
          <>
            You can manage your mobile notifications in the{' '}
            <Oui.Link href="/examples/forms">mobile settings</Oui.Link> page.
          </>
        }
        defaultSelected>
        Use different settings for my mobile devices
      </Oui.CheckboxEx>
      <Oui.Button type="submit">Update notifications</Oui.Button>
    </Rac.Form>
  )
}

// const notificationsFormSchema = z.object({
//   type: z.enum(["all", "mentions", "none"], {
//     required_error: "You need to select a notification type.",
//   }),
//   mobile: z.boolean().default(false).optional(),
//   communication_emails: z.boolean().default(false).optional(),
//   social_emails: z.boolean().default(false).optional(),
//   marketing_emails: z.boolean().default(false).optional(),
//   security_emails: z.boolean(),
// })

// type NotificationsFormValues = z.infer<typeof notificationsFormSchema>

// // This can come from your database or API.
// const defaultValues: Partial<NotificationsFormValues> = {
//   communication_emails: false,
//   marketing_emails: false,
//   social_emails: true,
//   security_emails: true,
// }

// export function NotificationsForm() {
//   const form = useForm<NotificationsFormValues>({
//     resolver: zodResolver(notificationsFormSchema),
//     defaultValues,
//   })

//   function onSubmit(data: NotificationsFormValues) {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     })
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="type"
//           render={({ field }) => (
//             <FormItem className="space-y-3">
//               <FormLabel>Notify me about...</FormLabel>
//               <FormControl>
//                 <RadioGroup
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                   className="flex flex-col space-y-1"
//                 >
//                   <FormItem className="flex items-center space-x-3 space-y-0">
//                     <FormControl>
//                       <RadioGroupItem value="all" />
//                     </FormControl>
//                     <FormLabel className="font-normal">
//                       All new messages
//                     </FormLabel>
//                   </FormItem>
//                   <FormItem className="flex items-center space-x-3 space-y-0">
//                     <FormControl>
//                       <RadioGroupItem value="mentions" />
//                     </FormControl>
//                     <FormLabel className="font-normal">
//                       Direct messages and mentions
//                     </FormLabel>
//                   </FormItem>
//                   <FormItem className="flex items-center space-x-3 space-y-0">
//                     <FormControl>
//                       <RadioGroupItem value="none" />
//                     </FormControl>
//                     <FormLabel className="font-normal">Nothing</FormLabel>
//                   </FormItem>
//                 </RadioGroup>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div>
//           <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
//           <div className="space-y-4">
//             <FormField
//               control={form.control}
//               name="communication_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">
//                       Communication emails
//                     </FormLabel>
//                     <FormDescription>
//                       Receive emails about your account activity.
//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="marketing_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">
//                       Marketing emails
//                     </FormLabel>
//                     <FormDescription>
//                       Receive emails about new products, features, and more.
//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="social_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">Social emails</FormLabel>
//                     <FormDescription>
//                       Receive emails for friend requests, follows, and more.
//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="security_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">Security emails</FormLabel>
//                     <FormDescription>
//                       Receive emails about your account activity and security.
//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                       disabled
//                       aria-readonly
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>
//         <FormField
//           control={form.control}
//           name="mobile"
//           render={({ field }) => (
//             <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//               <FormControl>
//                 <Checkbox
//                   checked={field.value}
//                   onCheckedChange={field.onChange}
//                 />
//               </FormControl>
//               <div className="space-y-1 leading-none">
//                 <FormLabel>
//                   Use different settings for my mobile devices
//                 </FormLabel>
//                 <FormDescription>
//                   You can manage your mobile notifications in the{" "}
//                   <Link href="/examples/forms">mobile settings</Link> page.
//                 </FormDescription>
//               </div>
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Update notifications</Button>
//       </form>
//     </Form>
//   )
// }

// function Foo() {
//   return (
//     <form class="space-y-8">
//       <div class="space-y-3">
//         <label
//           class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           for=":r1df:-form-item">
//           Notify me about...
//         </label>
//         <div
//           role="radiogroup"
//           aria-required="false"
//           dir="ltr"
//           class="flex flex-col gap-2 space-y-1"
//           id=":r1df:-form-item"
//           aria-describedby=":r1df:-form-item-description"
//           aria-invalid="false"
//           tabindex="0"
//           style="outline: none;">
//           <div class="flex items-center space-x-3 space-y-0">
//             <button
//               type="button"
//               role="radio"
//               aria-checked="false"
//               data-state="unchecked"
//               value="all"
//               class="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
//               id=":r1dg:-form-item"
//               aria-describedby=":r1dg:-form-item-description"
//               aria-invalid="false"
//               tabindex="-1"
//               data-radix-collection-item=""></button>
//             <input
//               aria-hidden="true"
//               tabindex="-1"
//               type="radio"
//               value="all"
//               style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
//             />
//             <label
//               class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               for=":r1dg:-form-item">
//               All new messages
//             </label>
//           </div>
//           <div class="flex items-center space-x-3 space-y-0">
//             <button
//               type="button"
//               role="radio"
//               aria-checked="false"
//               data-state="unchecked"
//               value="mentions"
//               class="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
//               id=":r1di:-form-item"
//               aria-describedby=":r1di:-form-item-description"
//               aria-invalid="false"
//               tabindex="-1"
//               data-radix-collection-item=""></button>
//             <input
//               aria-hidden="true"
//               tabindex="-1"
//               type="radio"
//               value="mentions"
//               style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
//             />
//             <label
//               class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               for=":r1di:-form-item">
//               Direct messages and mentions
//             </label>
//           </div>
//           <div class="flex items-center space-x-3 space-y-0">
//             <button
//               type="button"
//               role="radio"
//               aria-checked="false"
//               data-state="unchecked"
//               value="none"
//               class="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
//               id=":r1dk:-form-item"
//               aria-describedby=":r1dk:-form-item-description"
//               aria-invalid="false"
//               tabindex="-1"
//               data-radix-collection-item=""></button>
//             <input
//               aria-hidden="true"
//               tabindex="-1"
//               type="radio"
//               value="none"
//               style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
//             />
//             <label
//               class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               for=":r1dk:-form-item">
//               Nothing
//             </label>
//           </div>
//         </div>
//       </div>
//       <div>
//         <h3 class="mb-4 text-lg font-medium">Email Notifications</h3>
//         <div class="space-y-4">
//           <div class="flex flex-row items-center justify-between space-y-2 rounded-lg border p-4">
//             <div class="space-y-0.5">
//               <label
//                 class="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                 for=":r1dm:-form-item">
//                 Communication emails
//               </label>
//               <p
//                 id=":r1dm:-form-item-description"
//                 class="text-[0.8rem] text-muted-foreground">
//                 Receive emails about your account activity.
//               </p>
//             </div>
//             <button
//               type="button"
//               role="switch"
//               aria-checked="false"
//               data-state="unchecked"
//               value="on"
//               class="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
//               id=":r1dm:-form-item"
//               aria-describedby=":r1dm:-form-item-description"
//               aria-invalid="false">
//               <span
//                 data-state="unchecked"
//                 class="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"></span>
//             </button>
//             <input
//               aria-hidden="true"
//               tabindex="-1"
//               type="checkbox"
//               value="on"
//               style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 36px; height: 20px;"
//             />
//           </div>
//           <div class="flex flex-row items-center justify-between space-y-2 rounded-lg border p-4">
//             <div class="space-y-0.5">
//               <label
//                 class="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                 for=":r1dn:-form-item">
//                 Marketing emails
//               </label>
//               <p
//                 id=":r1dn:-form-item-description"
//                 class="text-[0.8rem] text-muted-foreground">
//                 Receive emails about new products, features, and more.
//               </p>
//             </div>
//             <button
//               type="button"
//               role="switch"
//               aria-checked="false"
//               data-state="unchecked"
//               value="on"
//               class="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
//               id=":r1dn:-form-item"
//               aria-describedby=":r1dn:-form-item-description"
//               aria-invalid="false">
//               <span
//                 data-state="unchecked"
//                 class="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"></span>
//             </button>
//             <input
//               aria-hidden="true"
//               tabindex="-1"
//               type="checkbox"
//               value="on"
//               style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 36px; height: 20px;"
//             />
//           </div>
//           <div class="flex flex-row items-center justify-between space-y-2 rounded-lg border p-4">
//             <div class="space-y-0.5">
//               <label
//                 class="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                 for=":r1do:-form-item">
//                 Social emails
//               </label>
//               <p
//                 id=":r1do:-form-item-description"
//                 class="text-[0.8rem] text-muted-foreground">
//                 Receive emails for friend requests, follows, and more.
//               </p>
//             </div>
//             <button
//               type="button"
//               role="switch"
//               aria-checked="true"
//               data-state="checked"
//               value="on"
//               class="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
//               id=":r1do:-form-item"
//               aria-describedby=":r1do:-form-item-description"
//               aria-invalid="false">
//               <span
//                 data-state="checked"
//                 class="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"></span>
//             </button>
//             <input
//               aria-hidden="true"
//               tabindex="-1"
//               type="checkbox"
//               value="on"
//               checked=""
//               style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 36px; height: 20px;"
//             />
//           </div>
//           <div class="flex flex-row items-center justify-between space-y-2 rounded-lg border p-4">
//             <div class="space-y-0.5">
//               <label
//                 class="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                 for=":r1dp:-form-item">
//                 Security emails
//               </label>
//               <p
//                 id=":r1dp:-form-item-description"
//                 class="text-[0.8rem] text-muted-foreground">
//                 Receive emails about your account activity and security.
//               </p>
//             </div>
//             <button
//               type="button"
//               role="switch"
//               aria-checked="true"
//               data-state="checked"
//               data-disabled=""
//               disabled=""
//               value="on"
//               class="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
//               aria-readonly="true"
//               id=":r1dp:-form-item"
//               aria-describedby=":r1dp:-form-item-description"
//               aria-invalid="false">
//               <span
//                 data-state="checked"
//                 data-disabled=""
//                 class="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"></span>
//             </button>
//             <input
//               aria-hidden="true"
//               disabled=""
//               tabindex="-1"
//               type="checkbox"
//               value="on"
//               checked=""
//               style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 36px; height: 20px;"
//             />
//           </div>
//         </div>
//       </div>
//       <div class="flex flex-row items-start space-x-3 space-y-0">
//         <button
//           type="button"
//           role="checkbox"
//           aria-checked="false"
//           data-state="unchecked"
//           value="on"
//           class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
//           id=":r1dq:-form-item"
//           aria-describedby=":r1dq:-form-item-description"
//           aria-invalid="false"></button>
//         <input
//           aria-hidden="true"
//           tabindex="-1"
//           type="checkbox"
//           value="on"
//           style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
//         />
//         <div class="space-y-1 leading-none">
//           <label
//             class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             for=":r1dq:-form-item">
//             Use different settings for my mobile devices
//           </label>
//           <p
//             id=":r1dq:-form-item-description"
//             class="text-[0.8rem] text-muted-foreground">
//             You can manage your mobile notifications in the{' '}
//             <a href="/examples/forms">mobile settings</a> page.
//           </p>
//         </div>
//       </div>
//       <button
//         class="[&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//         type="submit">
//         Update notifications
//       </button>
//     </form>
//   )
// }
