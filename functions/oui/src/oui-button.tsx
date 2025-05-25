import type { VariantProps } from "tailwind-variants";
import * as Rac from "react-aria-components";
import { tv } from "tailwind-variants";

// https://github.com/nextui-org/tailwind-variants/issues/209 : compoundVariants does not recognize falsy boolean variant
// https://github.com/nextui-org/tailwind-variants/pull/210 : fix: treat undefined value for compoundVariants as false

/**
 * Derived from shadcn Button
 */
export const buttonStyles = tv({
  base: "data-[focus-visible]:border-ring data-[focus-visible]:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:ring-[3px] [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "bg-primary text-primary-foreground shadow-xs data-[hovered]:bg-primary/90",
      destructive:
        "bg-destructive shadow-xs data-[hovered]:bg-destructive/90 data-[focus-visible]:ring-destructive/20 dark:data-[focus-visible]:ring-destructive/40 dark:bg-destructive/60 text-white",
      outline:
        "bg-background shadow-xs data-[hovered]:bg-accent data-[hovered]:text-accent-foreground dark:bg-input/30 dark:border-input dark:data-[hovered]:bg-input/50 border",
      secondary:
        "bg-secondary text-secondary-foreground shadow-xs data-[hovered]:bg-secondary/80",
      ghost:
        "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground dark:data-[hovered]:bg-accent/50",
      link: "text-primary underline-offset-4 data-[hovered]:underline",
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
    },
    // Workaround for TypeScript's excess property check with weak types when spreading renderProps.
    isPressed: {
      true: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type T = Parameters<
          Extract<
            React.ComponentProps<typeof Rac.Button>["className"],
            (...args: any) => any
          >
        >[0]

export const buttonClassName = (props: VariantProps<typeof buttonStyles>) =>
(renderProps: Partial<Parameters<
          Extract<
            React.ComponentProps<typeof Rac.Button>["className"],
            (...args: any) => any
          >
        >[0]>) => buttonStyles({...renderProps, ...props });

export interface ButtonProps
  extends Rac.ButtonProps,
    VariantProps<typeof buttonStyles> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <Rac.Button
      data-slot="button"
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        buttonStyles({
          ...renderProps,
          variant,
          size,
          className,
        }),
      )}
      {...props}
    />
  );
}
