import * as React from "react";
import * as Oui from "@workspace/oui";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/ui/avatar";
import { cn } from "@workspace/ui/lib/utils";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronsUpDown,
  PlusCircleIcon,
} from "lucide-react";
import * as Rac from "react-aria-components";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

type Framework = (typeof frameworks)[number];

const timezones = [
  {
    label: "Americas",
    timezones: [
      { value: "America/New_York", label: "(GMT-5) New York" },
      { value: "America/Los_Angeles", label: "(GMT-8) Los Angeles" },
      { value: "America/Chicago", label: "(GMT-6) Chicago" },
      { value: "America/Toronto", label: "(GMT-5) Toronto" },
      { value: "America/Vancouver", label: "(GMT-8) Vancouver" },
      { value: "America/Sao_Paulo", label: "(GMT-3) São Paulo" },
    ],
  },
  {
    label: "Europe",
    timezones: [
      { value: "Europe/London", label: "(GMT+0) London" },
      { value: "Europe/Paris", label: "(GMT+1) Paris" },
      { value: "Europe/Berlin", label: "(GMT+1) Berlin" },
      { value: "Europe/Rome", label: "(GMT+1) Rome" },
      { value: "Europe/Madrid", label: "(GMT+1) Madrid" },
      { value: "Europe/Amsterdam", label: "(GMT+1) Amsterdam" },
    ],
  },
  {
    label: "Asia/Pacific",
    timezones: [
      { value: "Asia/Tokyo", label: "(GMT+9) Tokyo" },
      { value: "Asia/Shanghai", label: "(GMT+8) Shanghai" },
      { value: "Asia/Singapore", label: "(GMT+8) Singapore" },
      { value: "Asia/Dubai", label: "(GMT+4) Dubai" },
      { value: "Australia/Sydney", label: "(GMT+11) Sydney" },
      { value: "Asia/Seoul", label: "(GMT+9) Seoul" },
    ],
  },
];

type TimezoneGroup = (typeof timezones)[number];
type Timezone = TimezoneGroup["timezones"][number];

export function OuiComboBoxDemo() {
  return (
    <div className="flex w-full flex-wrap items-start gap-4">
      <FrameworkCombobox frameworksData={[...frameworks]} />
      <UserCombobox />
      <TimezoneCombobox
        timezonesData={[...timezones]}
        selectedTimezoneValue={timezones[0].timezones[0].value}
      />
      <SimplifiedFrameworkCombobox frameworksData={[...frameworks]} />
    </div>
  );
}

function FrameworkCombobox({
  frameworksData,
}: {
  frameworksData: Framework[];
}) {
  return (
    <Oui.ComboBoxEx
      aria-label="Framework"
      placeholder="Select framework..."
      items={frameworksData}
      className="md:max-w-[200px]"
    >
      {(item) => (
        <Oui.ListBoxItem id={item.value}>{item.label}</Oui.ListBoxItem>
      )}
    </Oui.ComboBoxEx>
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
    <Oui.ComboBoxEx
      aria-label="User"
      placeholder="Select user..."
      defaultSelectedKey={users[0].id}
      items={users}
      className="md:max-w-[200px]"
    >
      {(item) => (
        <Oui.ListBoxItem id={item.id} textValue={item.username}>
          <div className="flex items-center gap-2">
            <Avatar className="size-5">
              <AvatarImage
                src={`https://github.com/${item.username}.png`}
                alt={item.username}
              />
              <AvatarFallback>{item.username[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>
            {item.username}
          </div>
        </Oui.ListBoxItem>
      )}
    </Oui.ComboBoxEx>
  );
}

function TimezoneCombobox({
  timezonesData,
  selectedTimezoneValue,
}: {
  timezonesData: TimezoneGroup[];
  selectedTimezoneValue: string;
}) {
  return (
    <Oui.ComboBoxEx
      aria-label="Timezone"
      placeholder="Select timezone"
      defaultSelectedKey={selectedTimezoneValue}
      className="md:max-w-[200px]"
    >
      {timezonesData.map((group) => (
        <Rac.ListBoxSection key={group.label}>
          <Oui.Header variant="select">{group.label}</Oui.Header>
          <Rac.Collection items={group.timezones}>
            {(item) => (
              <Oui.ListBoxItem id={item.value}>{item.label}</Oui.ListBoxItem>
            )}
          </Rac.Collection>
        </Rac.ListBoxSection>
      ))}
    </Oui.ComboBoxEx>
  );
}

function SimplifiedFrameworkCombobox({
  frameworksData,
}: {
  frameworksData: Framework[];
}) {
  return (
    <Oui.ComboBoxEx
      aria-label="Framework (Simplified)"
      placeholder="Select framework..."
      items={frameworksData}
      className="w-fit min-w-[280px]"
    >
      {(item) => (
        <Oui.ListBoxItem id={item.value}>{item.label}</Oui.ListBoxItem>
      )}
    </Oui.ComboBoxEx>
  );
}
