import { ChevronsUpDown } from "lucide-react";
import * as Rac from "react-aria-components";
import { composeTailwindRenderProps } from "./oui-base";
import { Button } from "./oui-button";
import { FieldError } from "./oui-field-error";
import { Group } from "./oui-group";
import { Input } from "./oui-input";
import { Label } from "./oui-label";
import { ListBox } from "./oui-list-box";
import { Popover } from "./oui-popover";
import { Text } from "./oui-text";

/*
#fetch https://react-spectrum.adobe.com/react-aria/ComboBox.html
#fetch https://react-spectrum.adobe.com/react-aria/Group.html
*/

export const ComboBox = <T extends object>({
  className,
  ...props
}: Rac.ComboBoxProps<T>) => (
  <Rac.ComboBox
    {...props}
    className={composeTailwindRenderProps(className, "space-y-2")}
  />
);

export interface ComboBoxExProps<T extends object>
  extends Omit<Rac.ComboBoxProps<T>, "children"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string | ((validation: Rac.ValidationResult) => string);
  placeholder?: string;
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export const ComboBoxEx = <T extends object>({
  label,
  description,
  errorMessage,
  placeholder,
  items,
  children,
  ...props
}: ComboBoxExProps<T>) => (
  <ComboBox {...props}>
    {label && <Label>{label}</Label>}
    <Group>
      <Input variant="ghost" placeholder={placeholder} />
      <Button variant="ghost" size="icon">
        <ChevronsUpDown className="size-4 shrink-0 opacity-50" />
      </Button>
    </Group>
    {description && <Text slot="description">{description}</Text>}
    <FieldError>{errorMessage}</FieldError>
    <Popover>
      <ListBox items={items}>{children}</ListBox>
    </Popover>
  </ComboBox>
);
