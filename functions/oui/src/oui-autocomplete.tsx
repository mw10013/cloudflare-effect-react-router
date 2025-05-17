import * as Rac from "react-aria-components";
import { SearchFieldEx } from "./oui-search-field";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Autocomplete.html
#fetch https://react-spectrum.adobe.com/react-aria/examples/searchable-select.html
*/

export interface AutocompleteExProps
  extends Omit<Rac.AutocompleteProps, "children"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string | ((validation: Rac.ValidationResult) => string);
  placeholder?: string;
  searchFieldProps?: Rac.SearchFieldProps;
  children: React.ReactNode;
}

export function AutocompleteEx({
  label,
  description,
  errorMessage,
  placeholder,
  searchFieldProps,
  children,
  filter,
  ...rest
}: AutocompleteExProps) {
  const { contains: defaultFilter } = Rac.useFilter({ sensitivity: "base" });

  return (
    <Rac.Autocomplete {...rest} filter={filter ?? defaultFilter}>
      <SearchFieldEx
        {...searchFieldProps}
        label={label}
        description={description}
        errorMessage={errorMessage}
        placeholder={placeholder}
      />
      {children}
    </Rac.Autocomplete>
  );
}
