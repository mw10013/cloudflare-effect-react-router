import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

// shadcn FormMessage: text-destructive text-sm
export const fieldErrorStyles = tv({
  base: 'text-destructive text-sm'
})

export function FieldError({ className, ...props }: Rac.FieldErrorProps) {
  // https://github.com/adobe/react-spectrum/issues/7525
  return (
    <Rac.TextContext.Provider value={{ elementType: 'p' }}>
      <Rac.FieldError
        data-slot="form-message"
        className={Rac.composeRenderProps(className, (className, renderProps) => fieldErrorStyles({ ...renderProps, className }))}
        {...props}
      />
    </Rac.TextContext.Provider>
  )
}

/* shadcn

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  )
}

*/
