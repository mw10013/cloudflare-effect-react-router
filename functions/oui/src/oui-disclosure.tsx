import React from 'react'
import { ChevronDown } from 'lucide-react'
import * as Rac from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import { baseStyles, composeTailwindRenderProps } from './oui-base'

export const Disclosure = ({ className, ...props }: Rac.DisclosureProps) => (
  <Rac.Disclosure
    className={composeTailwindRenderProps(className, 'w-full border-b')}
    {...props}
  />
)

export const DisclosureHeading = ({
  className,
  ...props
}: Rac.HeadingProps) => (
  <Rac.Heading className={twMerge('flex', className)} {...props} />
)

// TODO: disclosureButtonStyles: isFocusVisible, rounded? ring-2?
export const disclosureButtonStyes = tv({
  slots: {
    // shadcn AccordianTrigger: flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180
    // focus-visible:outline-none to reset browser
    rootStyles:
      'flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all focus-visible:outline-none',
    iconStyles:
      'size-4 shrink-0 text-muted-foreground transition-transform duration-200',
  },
  variants: {
    isExpanded: {
      true: {
        iconStyles: 'rotate-180',
      },
    },
    isHovered: {
      true: {
        rootStyles: 'underline',
      },
    },
    isFocusVisible: {
      true: {
        rootStyles: baseStyles.variants.isFocusVisible.true,
      },
    },
  },
})

export interface DisclosureButtonProps
  extends Omit<Rac.ButtonProps, 'children'> {
  children?: React.ReactNode
}

export const DisclosureButton = ({
  slot = 'trigger',
  className,
  children,
  ...props
}: DisclosureButtonProps) => {
  const { isExpanded } = React.useContext(Rac.DisclosureStateContext)!
  const { rootStyles, iconStyles } = disclosureButtonStyes({ isExpanded })
  return (
    <Rac.Button
      slot={slot}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        rootStyles({ ...renderProps, className })
      )}
      {...props}>
      {children}
      <ChevronDown className={iconStyles()} />
    </Rac.Button>
  )
}

// TODO: disclosurePanelStyles: smooth animation in disclosure group
export const disclosurePanelStyles = tv({
  slots: {
    // shadcn AccordionContent: overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down
    rootStyles: 'overflow-hidden text-sm',
    contentStyles: 'pb-4 pt-0',
  },
  variants: {
    isExpanded: {
      true: {
        rootStyles: 'animate-accordion-down',
      },
      false: {
        rootStyles: 'animate-accordion-up',
      },
    },
  },
})

export const DisclosurePanel = ({
  className,
  children,
  ...props
}: Rac.DisclosurePanelProps) => {
  const { isExpanded } = React.useContext(Rac.DisclosureStateContext)!
  const { rootStyles, contentStyles } = disclosurePanelStyles({ isExpanded })

  return (
    <Rac.DisclosurePanel
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        rootStyles({ ...renderProps, className })
      )}
      {...props}>
      <div className={contentStyles()}>{children}</div>
    </Rac.DisclosurePanel>
  )
}

export interface DisclosureExProps
  extends Omit<Rac.DisclosureProps, 'children'> {
  title?: string
  children?: React.ReactNode
}

export const DisclosureEx = ({
  title,
  children,
  ...props
}: DisclosureExProps) => (
  <Disclosure {...props}>
    <DisclosureHeading>
      <DisclosureButton>{title}</DisclosureButton>
    </DisclosureHeading>
    <DisclosurePanel>{children}</DisclosurePanel>
  </Disclosure>
)
