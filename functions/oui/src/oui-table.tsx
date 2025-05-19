import type { VariantProps } from "tailwind-variants";
import * as React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Table.html
https://github.com/irsyadadl/intentui/blob/2.x/components/ui/table.tsx
https://intentui.com/docs/2.x/components/collections/table
*/

// Table is not interactive on first click in SSR : https://github.com/adobe/react-spectrum/issues/8239

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

const rowStyles = tv({
  base: "border-b transition-colors",
  variants: {
    // [data-hovered] does not work for <Row/>: https://github.com/adobe/react-spectrum/issues/4411
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

export interface RowProps<T extends object>
  extends Rac.RowProps<T>,
    VariantProps<typeof rowStyles> {}

export function Row<T extends object>({ className, ...props }: RowProps<T>) {
  return (
    <Rac.Row
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        rowStyles({ ...renderProps, className }),
      )}
      {...props}
    />
  );
}

const columnStyles = tv({
  base: "text-foreground h-10 whitespace-nowrap px-2 text-left align-middle font-medium",
});

export interface ColumnProps
  extends Rac.ColumnProps,
    VariantProps<typeof columnStyles> {}

export function Column({ className, children, ...props }: ColumnProps) {
  return (
    <Rac.Column
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        columnStyles({ ...renderProps, className }),
      )}
      {...props}
    >
      {(renderProps) => {
        const { allowsSorting, sortDirection } = renderProps;
        const content =
          typeof children === "function" ? children(renderProps) : children;
        return (
          <div className="flex items-center gap-2">
            {content}
            {allowsSorting &&
              sortDirection &&
              (sortDirection === "ascending" ? (
                <ArrowUp className="size-4" />
              ) : (
                <ArrowDown className="size-4" />
              ))}
          </div>
        );
      }}
    </Rac.Column>
  );
}

const cellStyles = tv({
  base: "whitespace-nowrap p-2 align-middle",
});

export interface CellProps
  extends Rac.CellProps,
    VariantProps<typeof cellStyles> {}

export function Cell({ className, ...props }: CellProps) {
  return (
    <Rac.Cell
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        cellStyles({ ...renderProps, className }),
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
