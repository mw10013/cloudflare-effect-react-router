import * as Rac from "react-aria-components";
import { composeTailwindRenderProps } from "./oui-base";

/**
 * Derived from shadcn Accordion
 */
export function DisclosureGroup({
  className,
  ...props
}: Rac.DisclosureGroupProps) {
  return (
    <Rac.DisclosureGroup
      className={composeTailwindRenderProps(
        className,
        "border-b last:border-b-0",
      )}
      {...props}
    />
  );
}
