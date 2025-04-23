import { ChevronDown } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { composeTailwindRenderProps } from './oui-base'
import { FieldError } from './oui-field-error'
import { Label } from './oui-label'
import { ListBox } from './oui-list-box'
import { Popover } from './oui-popover'
import { Text } from './oui-text'

export const Select = ({ className, ...props }: Rac.SelectProps) => (
  <Rac.Select
    className={composeTailwindRenderProps(className, 'flex flex-col gap-2')}
    {...props}
  />
)

// shadcn  SelectTrigger: flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
export const SelectButton = ({
  className,
  children,
  ...props
}: Rac.ButtonProps) => (
  // focus-visible:outline-none to reset browser focus-visible
  <Rac.Button
    className={composeTailwindRenderProps(
      className,
      'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background focus-visible:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[focused]:outline-none data-[focused]:ring-1 data-[focused]:ring-ring [&>span]:line-clamp-1'
    )}
    {...props}>
    {Rac.composeRenderProps(children, (children) => (
      <>
        {children}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </>
    ))}
  </Rac.Button>
)

// shadcn  SelectTrigger: flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",

export const SelectValue = <T extends object>({
  className,
  ...props
}: Rac.SelectValueProps<T>) => (
  <Rac.SelectValue
    className={composeTailwindRenderProps(
      className,
      'data-[placeholder]:text-muted-foreground'
    )}
    {...props}
  />
)

interface SelectExProps<T extends object>
  extends Omit<Rac.SelectProps<T>, 'children'> {
  label?: string
  description?: React.ReactNode
  errorMessage?: string | ((validation: Rac.ValidationResult) => string)
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
  buttonClassName?: string
}

export function SelectEx<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  buttonClassName,
  ...props
}: SelectExProps<T>) {
  return (
    <Select {...props}>
      <Label>{label}</Label>
      <SelectButton className={buttonClassName}>
        <SelectValue />
      </SelectButton>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </Select>
  )
}
