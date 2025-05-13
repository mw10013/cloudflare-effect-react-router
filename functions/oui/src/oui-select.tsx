import { ChevronDown } from "lucide-react";
import * as Rac from "react-aria-components";
import { composeTailwindRenderProps } from "./oui-base";
import { FieldError } from "./oui-field-error";
import { Label } from "./oui-label";
import { ListBox } from "./oui-list-box";
import { Popover } from "./oui-popover";
import { Text } from "./oui-text";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Select.html
#fetch https://react-spectrum.adobe.com/react-aria/ListBox.html
#fetch https://react-spectrum.adobe.com/react-aria/Popover.html
#fetch https://react-spectrum.adobe.com/react-aria/collections.html
#fetch https://react-spectrum.adobe.com/react-aria/styling.html
*/

export const Select = ({ className, ...props }: Rac.SelectProps) => (
  <Rac.Select
    data-slot="select"
    className={composeTailwindRenderProps(className, "grid gap-2")}
    {...props}
  />
);

// shadcn  SelectTrigger: border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
export const SelectButton = ({
  className,
  size = "default",
  children,
  ...props
}: Rac.ButtonProps & {
  size?: "sm" | "default";
}) => (
  <Rac.Button
    data-slot="select-trigger"
    data-size={size}
    data-placeholder
    className={composeTailwindRenderProps(
      className,
      `border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 shadow-xs flex w-fit items-center justify-between gap-2 whitespace-nowrap rounded-md border bg-transparent px-3 py-2 text-sm outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
    )}
    {...props}
  >
    {Rac.composeRenderProps(children, (children) => (
      <>
        {children}
        <ChevronDown className="size-4 opacity-50" aria-hidden="true" />
      </>
    ))}
  </Rac.Button>
);

export const SelectValue = <T extends object>(
  props: Rac.SelectValueProps<T>,
) => <Rac.SelectValue data-slot="select-value" {...props} />;

interface SelectExProps<T extends object>
  extends Omit<Rac.SelectProps<T>, "children"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string | ((validation: Rac.ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  buttonClassName?: string;
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
      {label && <Label>{label}</Label>}
      <SelectButton className={buttonClassName}>
        <SelectValue />
      </SelectButton>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </Select>
  );
}
