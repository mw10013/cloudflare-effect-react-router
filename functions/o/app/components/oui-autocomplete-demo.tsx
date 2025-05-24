import * as Oui from "@workspace/oui";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/ui/avatar";

export function OuiAutocompleteDemo() {
  return (
    <div className="flex flex-col gap-8">
      <UserCombobox />
      <SearchableSelectDemo />
    </div>
  );
}

function UserCombobox() {
  const users = [
    {
      id: "1",
      username: "shadcn",
    },
    {
      id: "2",
      username: "leerob",
    },
    {
      id: "3",
      username: "evilrabbit",
    },
  ];
  return (
    <Oui.SelectEx1 label="Users" defaultSelectedKey={users[0].id}>
      <Oui.AutocompleteEx
        placeholder="Select user..."
        searchFieldProps={{ "aria-label": "User", autoFocus: true }}
      >
        <Oui.ListBox items={users}>
          {(item) => (
            <Oui.ListBoxItem id={item.id} textValue={item.username}>
              <div className="flex items-center gap-2">
                <Avatar className="size-5">
                  <AvatarImage
                    src={`https://github.com/${item.username}.png`}
                    alt={item.username}
                  />
                  <AvatarFallback>
                    {item.username[0]?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {item.username}
              </div>
            </Oui.ListBoxItem>
          )}
        </Oui.ListBox>
      </Oui.AutocompleteEx>
    </Oui.SelectEx1>
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
