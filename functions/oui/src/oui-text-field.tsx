import * as Rac from "react-aria-components";
import { composeTailwindRenderProps } from "./oui-base";
import { FieldError } from "./oui-field-error";
import { Input } from "./oui-input";
import { Label } from "./oui-label";
import { Text } from "./oui-text";

/**
 * Derived styles from shadcn FormItem
 */
export function TextField({ className, ...props }: Rac.TextFieldProps) {
  return (
    <Rac.TextField
      data-slot="form-item"
      className={composeTailwindRenderProps(className, "group grid gap-2")}
      {...props}
    />
  );
}

export interface TextFieldExProps extends Rac.TextFieldProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string | ((validation: Rac.ValidationResult) => string);
  placeholder?: string;
}

export function TextFieldEx({
  label,
  description,
  errorMessage,
  placeholder,
  children,
  ...props
}: TextFieldExProps) {
  return (
    <TextField {...props}>
      {(renderProps) => (
        <>
          {label && typeof label === "string" ? <Label>{label}</Label> : label}
          {children ? (
            typeof children === "function" ? (
              children(renderProps)
            ) : (
              children
            )
          ) : (
            <Input placeholder={placeholder} />
          )}
          {description && <Text slot="description">{description}</Text>}
          <FieldError>{errorMessage}</FieldError>
        </>
      )}
    </TextField>
  );
}

/**
 * A TextField component where the label and input are arranged side-by-side.
 */
export function TextFieldEx1({
  label,
  description,
  errorMessage,
  placeholder,
  children,
  ...props
}: TextFieldExProps) {
  return (
    <TextField {...props}>
      {(renderProps) => (
        <>
          <div className="grid grid-cols-3 items-center gap-4">
            {label && typeof label === "string" ? (
              <Label>{label}</Label>
            ) : (
              label
            )}
            {children ? (
              typeof children === "function" ? (
                children(renderProps)
              ) : (
                children
              )
            ) : (
              <Input
                placeholder={placeholder}
                className={label ? "col-span-2" : "col-span-3"}
              />
            )}
          </div>
          {description && <Text slot="description">{description}</Text>}
          <FieldError>{errorMessage}</FieldError>
        </>
      )}
    </TextField>
  );
}
