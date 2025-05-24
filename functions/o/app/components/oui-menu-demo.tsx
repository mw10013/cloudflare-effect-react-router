import type { Selection } from "react-aria-components";
import * as React from "react";
import * as Oui from "@workspace/oui";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/ui/avatar";
import {
  BadgeCheckIcon,
  BellIcon,
  ChevronsUpDownIcon,
  CreditCardIcon,
  LogOut,
  LogOutIcon,
  MoreHorizontalIcon,
  PencilIcon,
  Settings2Icon,
  ShareIcon,
  SparklesIcon,
  TrashIcon,
  UserIcon,
} from "lucide-react";
import * as Rac from "react-aria-components";

export function OuiMenuDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <MenuSimple />
      <MenuCheckboxes />
      <MenuRadioGroupDemo />
      <MenuWithAvatar />
      <DropdownMenuAvatarOnly />
      <DropdownMenuIconColor />
    </div>
  );
}

function MenuSimple() {
  return (
    <Oui.MenuEx
      triggerElement={<Oui.Button variant="outline">Open</Oui.Button>}
      className="w-56"
    >
      <Rac.MenuSection>
        <Oui.Header variant="menu">My Account</Oui.Header>
        <Oui.MenuItem id="profile">
          Profile
          <Oui.Keyboard>⇧⌘P</Oui.Keyboard>
        </Oui.MenuItem>
        <Oui.MenuItem id="billing">
          Billing
          <Oui.Keyboard>⌘B</Oui.Keyboard>
        </Oui.MenuItem>
        <Oui.MenuItem id="settings">
          Settings
          <Oui.Keyboard>⌘S</Oui.Keyboard>
        </Oui.MenuItem>
        <Oui.MenuItem id="shortcuts">
          Keyboard shortcuts
          <Oui.Keyboard>⌘K</Oui.Keyboard>
        </Oui.MenuItem>
      </Rac.MenuSection>
      <Oui.Separator variant="menu" />
      <Rac.MenuSection>
        <Oui.MenuItem id="team">Team</Oui.MenuItem>
        <Rac.SubmenuTrigger>
          <Oui.MenuItem id="invite">Invite users</Oui.MenuItem>
          <Oui.Popover>
            <Oui.Menu>
              <Oui.MenuItem id="email">Email</Oui.MenuItem>
              <Oui.MenuItem id="message">Message</Oui.MenuItem>
              <Oui.Separator variant="menu" />
              <Oui.MenuItem id="more">More...</Oui.MenuItem>
            </Oui.Menu>
          </Oui.Popover>
        </Rac.SubmenuTrigger>
        <Oui.MenuItem id="newTeam">
          New Team
          <Oui.Keyboard>⌘+T</Oui.Keyboard>
        </Oui.MenuItem>
      </Rac.MenuSection>
      <Oui.Separator variant="menu" />
      <Rac.MenuSection>
        <Oui.MenuItem id="github">GitHub</Oui.MenuItem>
        <Oui.MenuItem id="support">Support</Oui.MenuItem>
        <Oui.MenuItem id="api" isDisabled>
          API
        </Oui.MenuItem>
      </Rac.MenuSection>
      <Oui.Separator variant="menu" />
      <Oui.MenuItem id="logout">
        Log out
        <Oui.Keyboard>⇧⌘Q</Oui.Keyboard>
      </Oui.MenuItem>
    </Oui.MenuEx>
  );
}

function MenuCheckboxes() {
  const [appearanceSelectedKeys, setAppearanceSelectedKeys] =
    React.useState<Selection>(new Set(["statusBar"]));

  return (
    <Oui.MenuEx
      triggerElement={<Oui.Button variant="outline">Checkboxes</Oui.Button>}
      className="w-56"
    >
      <Rac.MenuSection>
        <Oui.Header variant="menu">Account</Oui.Header>
        <Oui.MenuItem id="profile" textValue="Profile">
          <UserIcon className="mr-2 size-4" /> Profile
        </Oui.MenuItem>
        <Oui.MenuItem id="billing" textValue="Billing">
          <CreditCardIcon className="mr-2 size-4" /> Billing
        </Oui.MenuItem>
        <Oui.MenuItem id="settings" textValue="Settings">
          <Settings2Icon className="mr-2 size-4" /> Settings
        </Oui.MenuItem>
      </Rac.MenuSection>
      <Oui.Separator variant="menu" />
      <Rac.MenuSection
        selectionMode="multiple"
        selectedKeys={appearanceSelectedKeys}
        onSelectionChange={setAppearanceSelectedKeys}
      >
        <Oui.Header variant="menu">Appearance</Oui.Header>
        <Oui.MenuItem id="statusBar">Status Bar</Oui.MenuItem>
        <Oui.MenuItem id="activityBar" isDisabled>
          Activity Bar
        </Oui.MenuItem>
        <Oui.MenuItem id="panel">Panel</Oui.MenuItem>
      </Rac.MenuSection>
      <Oui.Separator variant="menu" />
      <Rac.MenuSection>
        <Oui.MenuItem id="signOut" textValue="Sign Out">
          <LogOutIcon className="mr-2 size-4" /> Sign Out
        </Oui.MenuItem>
      </Rac.MenuSection>
    </Oui.MenuEx>
  );
}

function MenuRadioGroupDemo() {
  const [panelPositionKey, setPanelPositionKey] = React.useState<Selection>(
    new Set(["bottom"]),
  );

  return (
    <Oui.MenuEx
      triggerElement={<Oui.Button variant="outline">Radio Group</Oui.Button>}
      className="w-56"
    >
      <Rac.MenuSection
        selectionMode="single"
        selectedKeys={panelPositionKey}
        onSelectionChange={setPanelPositionKey}
      >
        <Oui.Header variant="menu" inset>
          Panel Position
        </Oui.Header>
        <Oui.MenuItem id="top">Top</Oui.MenuItem>
        <Oui.MenuItem id="bottom">Bottom</Oui.MenuItem>
        <Oui.MenuItem id="right" isDisabled>
          Right
        </Oui.MenuItem>
      </Rac.MenuSection>
    </Oui.MenuEx>
  );
}

function MenuWithAvatar() {
  return (
    <Oui.MenuEx
      className="w-56"
      triggerElement={
        <Oui.Button
          variant="outline"
          className="h-12 justify-start px-2 md:max-w-[200px]"
        >
          <Avatar className="mr-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">shadcn</span>
            <span className="text-muted-foreground truncate text-xs">
              shadcn@example.com
            </span>
          </div>
          <ChevronsUpDownIcon className="text-muted-foreground ml-auto size-4" />
        </Oui.Button>
      }
    >
      <Rac.MenuSection>
        <Rac.Header>
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">shadcn</span>
              <span className="text-muted-foreground truncate text-xs">
                shadcn@example.com
              </span>
            </div>
          </div>
        </Rac.Header>
      </Rac.MenuSection>
      <Oui.Separator variant="menu" />
      <Rac.MenuSection>
        <Oui.MenuItem id="upgradeAvatar" textValue="Upgrade to Pro">
          <SparklesIcon className="mr-2 size-4" />
          Upgrade to Pro
        </Oui.MenuItem>
      </Rac.MenuSection>
      <Oui.Separator variant="menu" />
      <Rac.MenuSection>
        <Oui.MenuItem id="accountAvatar" textValue="Account">
          <BadgeCheckIcon className="mr-2 size-4" />
          Account
        </Oui.MenuItem>
        <Oui.MenuItem id="billingAvatar" textValue="Billing">
          <CreditCardIcon className="mr-2 size-4" />
          Billing
        </Oui.MenuItem>
        <Oui.MenuItem id="notificationsAvatar" textValue="Notifications">
          <BellIcon className="mr-2 size-4" />
          Notifications
        </Oui.MenuItem>
      </Rac.MenuSection>
      <Oui.Separator variant="menu" />
      <Oui.MenuItem id="signOutAvatar" textValue="Sign Out">
        <LogOut className="mr-2 size-4" />
        Sign Out
      </Oui.MenuItem>
    </Oui.MenuEx>
  );
}

function DropdownMenuAvatarOnly() {
  return (
    <Oui.MenuEx
      triggerElement={
        <Oui.Button
          variant="outline"
          className="size-8 rounded-full border-none p-0"
        >
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" alt="leerob" />
            <AvatarFallback className="rounded-lg">LR</AvatarFallback>
          </Avatar>
        </Oui.Button>
      }
    >
      <Rac.MenuSection>
        <Rac.Header>
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="leerob" />
              <AvatarFallback className="rounded-lg">LR</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">leerob</span>
              <span className="text-muted-foreground truncate text-xs">
                leerob@example.com
              </span>
            </div>
          </div>
        </Rac.Header>
      </Rac.MenuSection>
      <Oui.Separator variant="menu" />
      <Rac.MenuSection>
        <Oui.MenuItem id="upgradeAvatarOnly" textValue="Upgrade to Pro">
          <SparklesIcon className="mr-2 size-4" />
          Upgrade to Pro
        </Oui.MenuItem>
      </Rac.MenuSection>
      <Oui.Separator variant="menu" />
      <Rac.MenuSection>
        <Oui.MenuItem id="accountAvatarOnly" textValue="Account">
          <BadgeCheckIcon className="mr-2 size-4" />
          Account
        </Oui.MenuItem>
        <Oui.MenuItem id="billingAvatarOnly" textValue="Billing">
          <CreditCardIcon className="mr-2 size-4" />
          Billing
        </Oui.MenuItem>
        <Oui.MenuItem id="notificationsAvatarOnly" textValue="Notifications">
          <BellIcon className="mr-2 size-4" />
          Notifications
        </Oui.MenuItem>
      </Rac.MenuSection>
      <Oui.Separator variant="menu" />
      <Oui.MenuItem id="signOutAvatarOnly" textValue="Sign Out">
        <LogOut className="mr-2 size-4" />
        Sign Out
      </Oui.MenuItem>
    </Oui.MenuEx>
  );
}

function DropdownMenuIconColor() {
  return (
    <Oui.MenuEx
      triggerElement={
        <Oui.Button variant="ghost" size="icon">
          <MoreHorizontalIcon />
          <span className="sr-only">Toggle menu</span>
        </Oui.Button>
      }
    >
      <Oui.MenuItem id="editIconColor" textValue="Edit">
        <PencilIcon className="text-muted-foreground mr-2 size-4" />
        Edit
      </Oui.MenuItem>
      <Oui.MenuItem id="shareIconColor" textValue="Share">
        <ShareIcon className="text-muted-foreground mr-2 size-4" />
        Share
      </Oui.MenuItem>
      <Oui.Separator variant="menu" />
      <Oui.MenuItem
        id="deleteIconColor"
        textValue="Delete"
        className="text-destructive data-[focused]:bg-destructive/10 data-[focused]:text-destructive"
      >
        <TrashIcon className="text-destructive mr-2 size-4" />
        Delete
      </Oui.MenuItem>
    </Oui.MenuEx>
  );
}
