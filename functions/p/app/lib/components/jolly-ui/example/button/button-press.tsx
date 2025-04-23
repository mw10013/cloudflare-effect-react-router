import { Button } from '~/lib/components/ui/button'

export default function ButtonPress() {
  return <Button onPress={() => alert('You pressed me')}>Button</Button>
}
