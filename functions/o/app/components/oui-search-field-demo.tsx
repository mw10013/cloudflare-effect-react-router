import * as Oui from "@workspace/oui";

export function OuiSearchFieldDemo() {
  return (
    <div className="flex flex-col flex-wrap gap-4 md:flex-row">
      <Oui.SearchFieldEx
        label="Search"
        description="Enter a search term"
        errorMessage="Search term is required"
        placeholder="Search..."
      />
    </div>
  );
}
