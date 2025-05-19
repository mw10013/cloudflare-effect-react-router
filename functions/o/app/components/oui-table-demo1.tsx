import * as Oui from "@workspace/oui";
import { CheckIcon, MinusIcon } from "lucide-react";
import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

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
  return (
    <Oui.Table aria-label="Invoices" selectionMode="multiple">
      <Oui.TableHeader>
        <Oui.Column>
          <Oui.Checkbox slot="selection" />
        </Oui.Column>
        <Oui.Column isRowHeader className="w-[100px]">
          Invoice
        </Oui.Column>
        <Oui.Column>Status</Oui.Column>
        <Oui.Column>Method</Oui.Column>
        <Oui.Column className="text-right">Amount</Oui.Column>
      </Oui.TableHeader>
      <Oui.TableBody items={invoices}>
        {(invoice) => (
          <Oui.Row id={invoice.invoice}>
            <Oui.Cell>
              <Oui.Checkbox slot="selection" />
            </Oui.Cell>
            <Oui.Cell className="font-medium">{invoice.invoice}</Oui.Cell>
            <Oui.Cell>{invoice.paymentStatus}</Oui.Cell>
            <Oui.Cell>{invoice.paymentMethod}</Oui.Cell>
            <Oui.Cell className="text-right">{invoice.totalAmount}</Oui.Cell>
          </Oui.Row>
        )}
      </Oui.TableBody>
    </Oui.Table>
  );
}
