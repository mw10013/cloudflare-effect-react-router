import type { Route } from "./+types/_index";
import { Button, buttonStyles } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Link } from "~/components/ui/link";
import { Table } from "~/components/ui/table";
import { TextField } from "~/components/ui/text-field";

/*
#fetch https://intentui.com/docs/2.x/components/collections/table
#fetch https://intentui.com/docs/2.x/components/forms/checkbox
#fetch https://react-spectrum.adobe.com/react-aria/Table.html
*/

export function meta({}: Route.MetaArgs) {
  return [{ title: "i" }, { name: "description", content: "Welcome to r1" }];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: `ENVIRONMENT: ${context.cloudflare.env.ENVIRONMENT}` };
}

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="mx-auto flex max-w-96 flex-col items-center gap-2 p-6">
      <Link href="#">Link</Link>
      <Link className={(renderProps) => buttonStyles({ ...renderProps })} href="#use-as-button">
        Button Link
      </Link>
      <IuiTableDemo />
      <Checkbox>Enable notifications</Checkbox>
      <TextField label="Name" />
      <Button onPress={() => alert("Pressed")}>Label</Button>
    </div>
  );
}

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

function IuiTableDemo() {
  return (
    <Table aria-label="Invoices" selectionMode="multiple">
      <Table.Header>
        <Table.Column isRowHeader className="w-[100px]">
          Invoice
        </Table.Column>
        <Table.Column>Status</Table.Column>
        <Table.Column>Method</Table.Column>
        <Table.Column className="text-right">Amount</Table.Column>
      </Table.Header>
      <Table.Body items={invoices}>
        {(item) => (
          <Table.Row id={item.invoice}>
            <Table.Cell className="font-medium">{item.invoice}</Table.Cell>
            <Table.Cell>{item.paymentStatus}</Table.Cell>
            <Table.Cell>{item.paymentMethod}</Table.Cell>
            <Table.Cell className="text-right">{item.totalAmount}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
