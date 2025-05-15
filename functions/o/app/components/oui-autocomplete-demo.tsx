import * as Oui from "@workspace/oui";
import { CheckIcon, ChevronsUpDownIcon, SearchIcon } from "lucide-react";
import * as Rac from "react-aria-components";

export function OuiAutocompleteDemo() {
  return (
    <div className="flex flex-col flex-wrap gap-4 md:flex-row">
      <SearchableSelectDemo />
    </div>
  );
}

/**
 * https://react-spectrum.adobe.com/react-aria/examples/status-select.html
 */
function SearchableSelectDemo() {
  const languages = [
    { id: "1", name: "English" },
    { id: "2", name: "Spanish" },
    { id: "3", name: "French" },
    { id: "4", name: "German" },
    { id: "5", name: "Japanese" },
    { id: "6", name: "Chinese" },
    { id: "7", name: "Korean" },
    { id: "8", name: "Italian" },
    { id: "9", name: "Portuguese" },
    { id: "10", name: "Russian" },
    { id: "11", name: "Arabic" },
    { id: "12", name: "Hindi" },
  ];

  return (
    <Oui.SelectEx1
      label="Language"
      description="Select your preferred language"
    >
      <Oui.AutocompleteEx
        placeholder="Search languages"
        searchFieldProps={{ "aria-label": "Languages", autoFocus: true }}
      >
        <Oui.ListBox items={languages}>
          {(item) => <Oui.ListBoxItem>{item.name}</Oui.ListBoxItem>}
        </Oui.ListBox>
      </Oui.AutocompleteEx>
    </Oui.SelectEx1>
  );
}
