import * as Rac from 'react-aria-components'
import * as Oui from '~/lib/components/oui/oui-index'

export default function RouteComponent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Display</h3>
        <p className="text-sm text-muted-foreground">
          Turn items on or off to control what&apos;s displayed in the app.
        </p>
      </div>
      <Oui.Separator />
      <DisplayForm />
    </div>
  )
}

const items = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',
  },
  {
    id: 'desktop',
    label: 'Desktop',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },
] as const

function DisplayForm() {
  return (
    <Rac.Form className="space-y-8">
      <Oui.CheckboxGroupEx
        label="Sidebar"
        description="Select the items you want to display in the sidebar.">
        {items.map((item) => (
          <Oui.CheckboxGroupExCheckbox key={item.id} value={item.id}>
            {item.label}
          </Oui.CheckboxGroupExCheckbox>
        ))}
      </Oui.CheckboxGroupEx>
      <Oui.Button type="submit">Update display</Oui.Button>
    </Rac.Form>
  )
}

// export function DisplayForm() {
//   const form = useForm<DisplayFormValues>({
//     resolver: zodResolver(displayFormSchema),
//     defaultValues,
//   })

//   function onSubmit(data: DisplayFormValues) {
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
//           name="items"
//           render={() => (
//             <FormItem>
//               <div className="mb-4">
//                 <FormLabel className="text-base">Sidebar</FormLabel>
//                 <FormDescription>
//                   Select the items you want to display in the sidebar.
//                 </FormDescription>
//               </div>
//               {items.map((item) => (
//                 <FormField
//                   key={item.id}
//                   control={form.control}
//                   name="items"
//                   render={({ field }) => {
//                     return (
//                       <FormItem
//                         key={item.id}
//                         className="flex flex-row items-start space-x-3 space-y-0"
//                       >
//                         <FormControl>
//                           <Checkbox
//                             checked={field.value?.includes(item.id)}
//                             onCheckedChange={(checked) => {
//                               return checked
//                                 ? field.onChange([...field.value, item.id])
//                                 : field.onChange(
//                                     field.value?.filter(
//                                       (value) => value !== item.id
//                                     )
//                                   )
//                             }}
//                           />
//                         </FormControl>
//                         <FormLabel className="font-normal">
//                           {item.label}
//                         </FormLabel>
//                       </FormItem>
//                     )
//                   }}
//                 />
//               ))}
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Update display</Button>
//       </form>
//     </Form>
//   )
// }

// function Foo() {
//   return (
//     <form className="space-y-8">
//       <div className="space-y-2">
//         <div className="mb-4">
//           <label
//             className="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             for=":r13u:-form-item">
//             Sidebar
//           </label>
//           <p
//             id=":r13u:-form-item-description"
//             className="text-[0.8rem] text-muted-foreground">
//             Select the items you want to display in the sidebar.
//           </p>
//         </div>
//         <div className="flex flex-row items-start space-x-3 space-y-0">
//           <button
//             type="button"
//             role="checkbox"
//             aria-checked="true"
//             data-state="checked"
//             value="on"
//             className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
//             id=":r13v:-form-item"
//             aria-describedby=":r13v:-form-item-description"
//             aria-invalid="false">
//             <span
//               data-state="checked"
//               className="flex items-center justify-center text-current"
//               style="pointer-events: none;">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 className="lucide lucide-check h-4 w-4">
//                 <path d="M20 6 9 17l-5-5"></path>
//               </svg>
//             </span>
//           </button>
//           <input
//             aria-hidden="true"
//             tabindex="-1"
//             type="checkbox"
//             value="on"
//             checked=""
//             style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
//           />
//           <label
//             className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             for=":r13v:-form-item">
//             Recents
//           </label>
//         </div>
//         <div className="flex flex-row items-start space-x-3 space-y-0">
//           <button
//             type="button"
//             role="checkbox"
//             aria-checked="true"
//             data-state="checked"
//             value="on"
//             className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
//             id=":r140:-form-item"
//             aria-describedby=":r140:-form-item-description"
//             aria-invalid="false">
//             <span
//               data-state="checked"
//               className="flex items-center justify-center text-current"
//               style="pointer-events: none;">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 className="lucide lucide-check h-4 w-4">
//                 <path d="M20 6 9 17l-5-5"></path>
//               </svg>
//             </span>
//           </button>
//           <input
//             aria-hidden="true"
//             tabindex="-1"
//             type="checkbox"
//             value="on"
//             checked=""
//             style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
//           />
//           <label
//             className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             for=":r140:-form-item">
//             Home
//           </label>
//         </div>
//         <div className="flex flex-row items-start space-x-3 space-y-0">
//           <button
//             type="button"
//             role="checkbox"
//             aria-checked="false"
//             data-state="unchecked"
//             value="on"
//             className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
//             id=":r141:-form-item"
//             aria-describedby=":r141:-form-item-description"
//             aria-invalid="false"></button>
//           <input
//             aria-hidden="true"
//             tabindex="-1"
//             type="checkbox"
//             value="on"
//             style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
//           />
//           <label
//             className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             for=":r141:-form-item">
//             Applications
//           </label>
//         </div>
//         <div className="flex flex-row items-start space-x-3 space-y-0">
//           <button
//             type="button"
//             role="checkbox"
//             aria-checked="false"
//             data-state="unchecked"
//             value="on"
//             className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
//             id=":r142:-form-item"
//             aria-describedby=":r142:-form-item-description"
//             aria-invalid="false"></button>
//           <input
//             aria-hidden="true"
//             tabindex="-1"
//             type="checkbox"
//             value="on"
//             style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
//           />
//           <label
//             className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             for=":r142:-form-item">
//             Desktop
//           </label>
//         </div>
//         <div className="flex flex-row items-start space-x-3 space-y-0">
//           <button
//             type="button"
//             role="checkbox"
//             aria-checked="false"
//             data-state="unchecked"
//             value="on"
//             className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
//             id=":r143:-form-item"
//             aria-describedby=":r143:-form-item-description"
//             aria-invalid="false"></button>
//           <input
//             aria-hidden="true"
//             tabindex="-1"
//             type="checkbox"
//             value="on"
//             style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
//           />
//           <label
//             className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             for=":r143:-form-item">
//             Downloads
//           </label>
//         </div>
//         <div className="flex flex-row items-start space-x-3 space-y-0">
//           <button
//             type="button"
//             role="checkbox"
//             aria-checked="false"
//             data-state="unchecked"
//             value="on"
//             className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
//             id=":r144:-form-item"
//             aria-describedby=":r144:-form-item-description"
//             aria-invalid="false"></button>
//           <input
//             aria-hidden="true"
//             tabindex="-1"
//             type="checkbox"
//             value="on"
//             style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
//           />
//           <label
//             className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             for=":r144:-form-item">
//             Documents
//           </label>
//         </div>
//       </div>
//       <button
//         className="[&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//         type="submit">
//         Update display
//       </button>
//     </form>
//   )
// }
