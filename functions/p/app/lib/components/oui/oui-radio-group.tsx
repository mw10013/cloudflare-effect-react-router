import { Circle } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { baseStyles, composeTailwindRenderProps } from './oui-base'
import { FieldError } from './oui-field-error'
import { Label, labelStyles } from './oui-label'
import { Text } from './oui-text'

export function RadioGroup(props: Rac.RadioGroupProps) {
  return (
    <Rac.RadioGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-2'
      )}
    />
  )
}

// TODO: radioStyles: isInvalid: text-foreground?
export const radioStyles = tv({
  extend: labelStyles,
  base: 'flex items-center gap-2',
})

export const radioIndicatorStyles = tv({
  extend: baseStyles,
  base: 'aspect-square size-4 rounded-full border border-primary text-primary shadow',
  variants: {
    isDisabled: {
      // shadcn uses disabled:opacity-50. Use opacity-[0.714] since root (labelStyles) uses opacity-70
      true: 'opacity-[0.714]',
    },
  },
})

export const radioCircleStyles = 'size-3.5 fill-primary'

export interface RadioProps extends Omit<Rac.RadioProps, 'children'> {
  children?: React.ReactNode
}

export const Radio = ({ className, children, ...props }: RadioProps) => {
  return (
    <Rac.Radio
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        radioStyles({ ...renderProps, className })
      )}>
      {(renderProps) => (
        <>
          <div className={radioIndicatorStyles({ ...renderProps })}>
            {renderProps.isSelected && <Circle className={radioCircleStyles} />}
          </div>
          {children}
        </>
      )}
    </Rac.Radio>
  )
}

export interface RadioGroupExProps
  extends Omit<Rac.RadioGroupProps, 'children'> {
  label?: string
  children?: React.ReactNode
  description?: string
  errorMessage?: string | ((validation: Rac.ValidationResult) => string)
}

export function RadioGroupEx({
  label,
  description,
  errorMessage,
  children,
  ...props
}: RadioGroupExProps) {
  return (
    <RadioGroup {...props} className="gap-3">
      <div className="mb-1 flex flex-col gap-1">
        {label && <Label className="">{label}</Label>}
        {description && <Text slot="description">{description}</Text>}
      </div>
      {children}
      <FieldError>{errorMessage}</FieldError>
    </RadioGroup>
  )
}

export const RadioGroupExRadio = ({ className, ...props }: RadioProps) => (
  <Radio
    className={composeTailwindRenderProps(className, 'gap-3 font-normal')}
    {...props}
  />
)
