import * as Oui from "@workspace/oui";
import * as Rac from "react-aria-components";

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

export function OuiTableDemo() {
  return (
    <Oui.Table aria-label="Invoices">
      {/* <Oui.TableCaption>A list of your recent invoices.</Oui.TableCaption> */}
      <Oui.TableHeader>
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
            <Oui.Cell className="font-medium">{invoice.invoice}</Oui.Cell>
            <Oui.Cell>{invoice.paymentStatus}</Oui.Cell>
            <Oui.Cell>{invoice.paymentMethod}</Oui.Cell>
            <Oui.Cell className="text-right">{invoice.totalAmount}</Oui.Cell>
          </Oui.Row>
        )}
      </Oui.TableBody>
      {/* <Oui.TableFooter>
        <Oui.TableRow id="footer-total-row">
          <Oui.TableCell colSpan={3}>Total</Oui.TableCell>
          <Oui.TableCell className="text-right">$2,500.00</Oui.TableCell>
        </Oui.TableRow>
      </Oui.TableFooter> */}
    </Oui.Table>
  );
}
