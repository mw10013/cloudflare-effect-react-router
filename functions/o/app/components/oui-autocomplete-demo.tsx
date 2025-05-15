import * as Oui from "@workspace/oui";
import { CheckIcon, ChevronsUpDownIcon, SearchIcon } from "lucide-react";
import * as Rac from "react-aria-components";

export function OuiAutocompleteDemo() {
  return (
    <div className="flex flex-col flex-wrap gap-4 md:flex-row">
      <div className="flex min-h-[350px] w-full items-start justify-center rounded-lg bg-gradient-to-br from-cyan-200 to-blue-400 p-8 md:w-auto">
        <SearchableSelectDemo />
      </div>
    </div>
  );
}

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

function SearchableSelectDemo() {
  const { contains } = Rac.useFilter({ sensitivity: "base" });

  return (
    <Oui.Select className="flex w-[200px] flex-col gap-1">
      <Oui.Label className="cursor-default text-black">Language</Oui.Label>
      <Oui.SelectButton className="pressed:bg-white flex cursor-default items-center rounded-lg border-0 bg-white/90 py-2 pl-3 pr-2 text-left text-base leading-normal text-gray-700 shadow-md ring-1 ring-black/5 transition focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black focus-visible:ring-black/25">
        <Oui.SelectValue className="flex-1 truncate pr-1" />
        <ChevronsUpDownIcon aria-hidden className="h-4 w-4 text-gray-700" />
      </Oui.SelectButton>
      <Oui.Popover className="entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out flex max-h-80 w-[--trigger-width] flex-col rounded-md bg-white text-base shadow-lg ring-1 ring-black/5">
        <Rac.Autocomplete filter={contains} menuTrigger="focus">
          <Rac.SearchField
            aria-label="Search"
            autoFocus
            className="group sticky top-0 z-10 flex items-center border-b border-gray-200 bg-white forced-colors:bg-[Field]"
          >
            <SearchIcon
              aria-hidden
              className="ml-2.5 h-4 w-4 text-gray-500 forced-colors:text-[ButtonText]"
            />
            <Oui.Input
              placeholder="Search languages"
              className="min-w-0 flex-1 border-none bg-transparent px-2 py-2 font-[inherit] text-sm text-gray-800 placeholder-gray-500 outline outline-0"
            />
          </Rac.SearchField>
          <Oui.ListBox
            items={languages}
            className="flex-1 scroll-pb-1 overflow-auto p-1 outline-none"
          >
            {(item) => (
              <Oui.ListBoxItem
                id={item.id}
                textValue={item.name}
                className="data-[focused]:bg-accent data-[focused]:text-accent-foreground group flex cursor-default select-none items-center gap-2 rounded px-2.5 py-1.5 text-sm text-gray-900 outline-none"
              >
                {({ isSelected }) => (
                  <>
                    <span className="flex flex-1 items-center gap-2 truncate font-normal group-data-[selected]:font-semibold">
                      {item.name}
                    </span>
                    <span className="text-accent-foreground group-data-[focused]:text-accent-foreground flex w-5 items-center">
                      {isSelected && (
                        <CheckIcon
                          size={16}
                          aria-hidden="true"
                          className="group-data-[focused]:text-accent-foreground text-sky-600"
                        />
                      )}
                    </span>
                  </>
                )}
              </Oui.ListBoxItem>
            )}
          </Oui.ListBox>
        </Rac.Autocomplete>
      </Oui.Popover>
    </Oui.Select>
  );
}
