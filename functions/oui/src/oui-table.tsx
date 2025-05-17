import type { VariantProps } from "tailwind-variants";
import * as React from "react";
import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Table.html

Using oui-menu.tsx as a guide, show me oui-table as RAC table components wrappers with shadcn design styles verbatim from table.tsx

- Keep things simple and basic. We just want it to be able to handle shadcn TableDemo() in table-demo.tsx converted to Oui version.
- No checkboxes, sorting, filtering, drag and drop, resizing. Anything advanced will be looked at in a later turn.
- No TableEx. We'll look at that in a later turn.
*/


const tableContainerStyles = tv({
  base: "relative w-full overflow-x-auto",
});

const tableStyles = tv({
  base: "w-full caption-bottom text-sm",
});

export interface TableProps extends Rac.TableProps {
  containerClassName?: string;
}

export function Table({
  className,
  containerClassName,
  children,
  ...props
}: TableProps) {
  return (
    <div className={tableContainerStyles({ className: containerClassName })}>
      <Rac.Table
        className={Rac.composeRenderProps(className, (className, renderProps) =>
          tableStyles({ ...renderProps, className }),
        )}
        {...props}
      >
        {children}
      </Rac.Table>
    </div>
  );
}

const tableHeaderStyles = tv({
  base: "[&_tr]:border-b",
});

export interface TableHeaderProps<T extends object>
  extends Rac.TableHeaderProps<T> {}

export function TableHeader<T extends object>({
  className,
  ...props
}: TableHeaderProps<T>) {
  return (
    <Rac.TableHeader
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        tableHeaderStyles({ ...renderProps, className }),
      )}
      {...props}
    />
  );
}

const tableBodyStyles = tv({
  base: "[&_tr:last-child]:border-0",
});

export interface TableBodyProps<T extends object>
  extends Rac.TableBodyProps<T> {}

export function TableBody<T extends object>({
  className,
  ...props
}: TableBodyProps<T>) {
  return (
    <Rac.TableBody
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        tableBodyStyles({ ...renderProps, className }),
      )}
      {...props}
    />
  );
}

const tableFooterStyles = tv({
  base: "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
});

export interface TableFooterProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export function TableFooter({ className, ...props }: TableFooterProps) {
  return <tfoot className={tableFooterStyles({ className })} {...props} />;
}

const tableRowStyles = tv({
  base: "border-b transition-colors",
  variants: {
    isHovered: {
      true: "bg-muted/50",
    },
    isSelected: {
      true: "bg-muted",
    },
    isDisabled: {
      true: "opacity-50",
    },
  },
});

export interface TableRowProps<T extends object>
  extends Rac.RowProps<T>,
    VariantProps<typeof tableRowStyles> {}

export function TableRow<T extends object>({
  className,
  ...props
}: TableRowProps<T>) {
  return (
    <Rac.Row
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        tableRowStyles({ ...renderProps, className }),
      )}
      {...props}
    />
  );
}

const tableHeadStyles = tv({
  base: "text-foreground h-10 whitespace-nowrap px-2 text-left align-middle font-medium",
});

export interface TableHeadProps
  extends Rac.ColumnProps,
    VariantProps<typeof tableHeadStyles> {}

export function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <Rac.Column
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        tableHeadStyles({ ...renderProps, className }),
      )}
      {...props}
    />
  );
}

const tableCellStyles = tv({
  base: "whitespace-nowrap p-2 align-middle",
});

export interface TableCellProps
  extends Rac.CellProps,
    VariantProps<typeof tableCellStyles> {}

export function TableCell({ className, ...props }: TableCellProps) {
  return (
    <Rac.Cell
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        tableCellStyles({ ...renderProps, className }),
      )}
      {...props}
    />
  );
}

const tableCaptionStyles = tv({
  base: "text-muted-foreground mt-4 text-sm",
});

export interface TableCaptionProps
  extends React.HTMLAttributes<HTMLTableCaptionElement> {}

export function TableCaption({ className, ...props }: TableCaptionProps) {
  return <caption className={tableCaptionStyles({ className })} {...props} />;
}
