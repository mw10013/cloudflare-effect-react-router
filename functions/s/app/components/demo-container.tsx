import { twMerge } from 'tailwind-merge'

export function DemoContainer({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <div className={twMerge('flex min-h-svh flex-col gap-2 p-6', className)}>{children}</div>
}
