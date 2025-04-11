import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'

// shadcn FormMessage: text-[0.8rem] font-medium text-destructive
export const fieldErrorStyles = tv({
  base: 'text-[0.8rem] font-medium text-destructive',
})

export function FieldError({ className, ...props }: Rac.FieldErrorProps) {
  // https://github.com/adobe/react-spectrum/issues/7525
  return (
    <Rac.TextContext.Provider value={{ elementType: 'p' }}>
      <Rac.FieldError
        {...props}
        className={Rac.composeRenderProps(className, (className, renderProps) =>
          fieldErrorStyles({ ...renderProps, className })
        )}
      />
    </Rac.TextContext.Provider>
  )
}
