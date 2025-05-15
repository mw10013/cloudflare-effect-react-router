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
      <Oui.SelectEx
        aria-label="Fruit"
        buttonClassName="w-[180px]"
        placeholder="Select a fruit"
      >
        <Rac.ListBoxSection id="fruits-section">
          <Oui.Header variant="select">Fruits</Oui.Header>
          <Rac.Collection items={fruitItemsForSection}>
            {(item) => (
              <Oui.ListBoxItem isDisabled={item.isDisabled}>
                {item.name}
              </Oui.ListBoxItem>
            )}
          </Rac.Collection>
        </Rac.ListBoxSection>
      </Oui.SelectEx>

      <Oui.SelectEx
        aria-label="Large List"
        buttonClassName="w-[180px]"
        placeholder="Large List"
        items={largeListItems}
      >
        {(item) => <Oui.ListBoxItem>{item.name}</Oui.ListBoxItem>}
      </Oui.SelectEx>

      <Oui.SelectEx
        aria-label="Disabled"
        isDisabled
        buttonClassName="w-[180px]"
        placeholder="Disabled"
        items={simpleItems}
      >
        {(item) => (
          <Oui.ListBoxItem isDisabled={item.isDisabled}>
            {item.name}
          </Oui.ListBoxItem>
        )}
      </Oui.SelectEx>

      <Oui.SelectEx
        aria-label="With Icon"
        buttonClassName="w-[180px]"
        placeholder="With Icon"
        items={iconItems}
        renderSelectValue={({ isPlaceholder, defaultChildren }) =>
          isPlaceholder ? (
            <>
              <CircleDashed className="mr-2 size-4" />
              {defaultChildren}
            </>
          ) : (
            defaultChildren
          )
        }
      >
        {(item) => {
          const IconComponent = item.icon;
          return (
            <Oui.ListBoxItem
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
