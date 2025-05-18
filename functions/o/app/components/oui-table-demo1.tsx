import * as Oui from "@workspace/oui";
import * as Rac from "react-aria-components";

// Custom styled checkbox not working correctly when rendered as a selection checkbox in a table : https://github.com/adobe/react-spectrum/issues/2383

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
          <Checkbox slot="selection" />
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
            <Oui.Column>
              <Checkbox slot="selection" />
            </Oui.Column>
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

function Checkbox(props: Rac.CheckboxProps) {
  return (
    <Rac.Checkbox {...props}>
      <div className="checkbox">
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      C
    </Rac.Checkbox>
  );
}
