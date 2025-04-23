import { JollyProgressBar } from '~/lib/components/ui/progress'

export default function ProgressReusable() {
  return <JollyProgressBar className="w-3/5" label="Loading…" value={80} />
}
