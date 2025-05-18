import * as Oui from "@workspace/oui";
import { CheckIcon, MinusIcon } from "lucide-react";
import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

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

const checkboxIconStyles = "size-3.5";

const checkboxIndicatorStyles = tv({
  // TODO: checkboxIndicatorStyles: remove aria-invalid and use isInvalid render prop
  base: "border-input dark:bg-input/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs size-4 shrink-0 rounded-[4px] border outline-none transition-shadow",
  variants: {
    isSelected: {
      true: "bg-primary text-primary-foreground dark:bg-primary border-primary",
    },
    isFocusVisible: {
      true: "border-ring ring-ring/50 ring-[3px]",
    },
    isDisabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
});

function Checkbox(props: Rac.CheckboxProps) {
  return (
    <Rac.Checkbox {...props}>
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <div
            data-slot="checkbox-indicator"
            className={checkboxIndicatorStyles({
              isSelected: isSelected || isIndeterminate,
              ...renderProps,
            })}
          >
            {isIndeterminate ? (
              <MinusIcon aria-hidden className={checkboxIconStyles} />
            ) : isSelected ? (
              <CheckIcon aria-hidden className={checkboxIconStyles} />
            ) : null}
          </div>
        </>
      )}
    </Rac.Checkbox>
  );
}
function Checkbox2(props: Rac.CheckboxProps) {
  return (
    <Rac.Checkbox {...props}>
      <div className="size-4 border">
        <CheckIcon aria-hidden className="size-3.5" />
      </div>
    </Rac.Checkbox>
  );
}

function Checkbox1(props: Rac.CheckboxProps) {
  return (
    <Rac.Checkbox {...props}>
      <div className="size-4">
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
    </Rac.Checkbox>
  );
}
