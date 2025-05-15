import * as Rac from "react-aria-components";
import { composeTailwindRenderProps } from "./oui-base";
import { FieldError } from "./oui-field-error";
import { Input } from "./oui-input";
import { Label } from "./oui-label";
import { Text } from "./oui-text";

/**
 * Derived styles from shadcn FormItem
 */
export function SearchField({ className, ...props }: Rac.SearchFieldProps) {
  return (
    <Rac.SearchField
      className={composeTailwindRenderProps(className, "group grid gap-2")}
      {...props}
    />
  );
}

export interface SearchFieldExProps extends Rac.SearchFieldProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string | ((validation: Rac.ValidationResult) => string);
  placeholder?: string;
}

export function SearchFieldEx({
  label,
  description,
  errorMessage,
  placeholder,
  ...rest
}: SearchFieldExProps) {
  return (
    <SearchField {...rest}>
      {label && <Label>{label}</Label>}
      <Input
        placeholder={placeholder}
        className="[&::-webkit-search-cancel-button]:hidden"
      />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </SearchField>
  );
}
