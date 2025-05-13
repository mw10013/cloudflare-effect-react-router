import * as Oui from "@workspace/oui";
import {
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  CircleDashed,
} from "lucide-react";
import * as Rac from "react-aria-components";

export function OuiSelectDemo() {
  const fruitItemsForSection = [
    { id: "apple", name: "Apple" },
    { id: "banana", name: "Banana" },
    { id: "blueberry", name: "Blueberry" },
    { id: "grapes", name: "Grapes", isDisabled: true },
    { id: "pineapple", name: "Pineapple" },
  ];

  const largeListItems = Array.from({ length: 100 }).map((_, i) => ({
    id: `item-${i}`,
    name: `Item ${i}`,
  }));

  const simpleItems = [
    { id: "apple", name: "Apple" },
    { id: "banana", name: "Banana" },
    { id: "blueberry", name: "Blueberry" },
    { id: "grapes", name: "Grapes", isDisabled: true },
    { id: "pineapple", name: "Pineapple" },
  ];

  const iconItems = [
    { id: "line", name: "Line", icon: ChartLineIcon },
    { id: "bar", name: "Bar", icon: ChartBarIcon },
    { id: "pie", name: "Pie", icon: ChartPieIcon },
  ];

  return (
    <div className="flex flex-wrap items-start gap-4">
      <Oui.SelectEx buttonClassName="w-[180px]" placeholder="Select a fruit">
        <Rac.ListBoxSection id="fruits-section">
          <Oui.Header variant="select">Fruits</Oui.Header>
          <Rac.Collection items={fruitItemsForSection}>
            {(item) => (
              <Oui.ListBoxItem
                id={item.id}
                textValue={item.name}
                isDisabled={item.isDisabled}
              >
                {item.name}
              </Oui.ListBoxItem>
            )}
          </Rac.Collection>
        </Rac.ListBoxSection>
      </Oui.SelectEx>

      <Oui.SelectEx
        buttonClassName="w-[180px]"
        placeholder="Large List"
        items={largeListItems}
      >
        {(item) => (
          <Oui.ListBoxItem id={item.id} textValue={item.name}>
            {item.name}
          </Oui.ListBoxItem>
        )}
      </Oui.SelectEx>

      <Oui.SelectEx
        isDisabled
        buttonClassName="w-[180px]"
        placeholder="Disabled"
        items={simpleItems}
      >
        {(item) => (
          <Oui.ListBoxItem
            id={item.id}
            textValue={item.name}
            isDisabled={item.isDisabled}
          >
            {item.name}
          </Oui.ListBoxItem>
        )}
      </Oui.SelectEx>

      <Oui.SelectEx
        buttonClassName="w-[180px]"
        placeholder="With Icon"
        // placeholder={
        //   <>
        //     <CircleDashed className="text-muted-foreground mr-2 size-4" />
        //     With Icon
        //   </>
        // }
        items={iconItems}
      >
        {(item) => {
          const IconComponent = item.icon;
          return (
            <Oui.ListBoxItem
              id={item.id}
              textValue={item.name}
              className="flex items-center gap-2"
            >
              <IconComponent />
              {item.name}
            </Oui.ListBoxItem>
          );
        }}
      </Oui.SelectEx>
    </div>
  );
}
