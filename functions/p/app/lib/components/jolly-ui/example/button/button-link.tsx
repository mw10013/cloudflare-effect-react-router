'use client'

import { Link } from 'react-aria-components'
import { buttonVariants } from '~/lib/components/ui/button'

export default function ButtonLink() {
  return <Link className={buttonVariants({ variant: 'link' })}>Link</Link>
}
