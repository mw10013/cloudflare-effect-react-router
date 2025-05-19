import * as React from "react";
import * as Oui from "@workspace/oui";
import { MoreHorizontal } from "lucide-react";
import * as Rac from "react-aria-components";

/*
#fetch https://react-spectrum.adobe.com/react-aria/Table.html
#fetch https://react-spectrum.adobe.com/react-aria/Checkbox.html
#fetch https://intentui.com/docs/2.x/components/collections/table
#fetch https://intentui.com/docs/2.x/components/forms/checkbox*/

// Table is not interactive on first click in SSR : https://github.com/adobe/react-spectrum/issues/8239

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function OuiTableDemo1() {
  const [sortDescriptor, setSortDescriptor] = React.useState<
    Rac.SortDescriptor | undefined
  >(undefined);

  const sortedInvoices = React.useMemo(() => {
    if (!sortDescriptor?.column) {
      return invoices;
    }
    const items = [...invoices];
    items.sort((a, b) => {
      const first = a[sortDescriptor.column as keyof typeof a];
      const second = b[sortDescriptor.column as keyof typeof b];
      let cmp = 0;
      if (typeof first === "string" && typeof second === "string") {
        cmp = first.localeCompare(second);
      } else if (typeof first === "number" && typeof second === "number") {
        cmp = first < second ? -1 : first > second ? 1 : 0;
      }

      if (sortDescriptor.direction === "descending") {
        cmp *= -1;
      }
      return cmp;
    });
    return items;
  }, [sortDescriptor]);

  return (
    <Oui.Table
      aria-label="Invoices"
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
    >
      <Oui.TableHeader>
        <Oui.Column>
          <Oui.Checkbox slot="selection" />
        </Oui.Column>
        <Oui.Column id="invoice" isRowHeader className="w-[100px]">
          Invoice
        </Oui.Column>
        <Oui.Column id="paymentStatus" allowsSorting>
          Status
        </Oui.Column>
        <Oui.Column id="paymentMethod" allowsSorting>
          Method
        </Oui.Column>
        <Oui.Column id="totalAmount" className="text-right">
          Amount
        </Oui.Column>
        <Oui.Column
          id="actions"
          aria-label="Actions"
          className="w-10 text-right"
        >
          <span className="sr-only">Actions</span>
        </Oui.Column>
      </Oui.TableHeader>
      <Oui.TableBody items={sortedInvoices}>
        {(invoice) => (
          <Oui.Row id={invoice.invoice}>
            <Oui.Cell>
              <Oui.Checkbox slot="selection" />
            </Oui.Cell>
            <Oui.Cell className="font-medium">{invoice.invoice}</Oui.Cell>
            <Oui.Cell>{invoice.paymentStatus}</Oui.Cell>
            <Oui.Cell>{invoice.paymentMethod}</Oui.Cell>
            <Oui.Cell className="text-right">{invoice.totalAmount}</Oui.Cell>
            <Oui.Cell className="text-right">
              <Oui.MenuEx
                triggerElement={
                  <Oui.Button variant="ghost" className="size-8 p-0">
                    <span className="sr-only">
                      Open menu for {invoice.invoice}
                    </span>
                    <MoreHorizontal className="size-4" />
                  </Oui.Button>
                }
                onAction={(key) => {
                  // Placeholder for future action handling
                  console.log(`Action: ${key} for invoice ${invoice.invoice}`);
                }}
              >
                <Oui.MenuItem id="copyId">Copy payment ID</Oui.MenuItem>
                <Oui.Separator variant="menu"/>
                <Oui.MenuItem id="viewCustomer">View customer</Oui.MenuItem>
                <Oui.MenuItem id="viewDetails">
                  View payment details
                </Oui.MenuItem>
              </Oui.MenuEx>
            </Oui.Cell>
          </Oui.Row>
        )}
      </Oui.TableBody>
    </Oui.Table>
  );
}
