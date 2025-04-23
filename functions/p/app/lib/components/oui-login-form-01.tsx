import * as Rac from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import * as Oui from '~/lib/components/oui/oui-index'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/lib/components/ui/card'

export function OuiLoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={twMerge('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Rac.Form>
            <div className="flex flex-col gap-6">
              <Oui.TextFieldEx
                name="email"
                type="email"
                label="Email"
                placeholder="m@example.com"
                isRequired
              />
              <Oui.TextField type="password">
                <div className="flex items-center">
                  <Oui.Label>Password</Oui.Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Oui.Input />
              </Oui.TextField>
              <Oui.Button type="submit" className="w-full">
                Login
              </Oui.Button>
              <Oui.Button variant="outline" className="w-full">
                Login with Google
              </Oui.Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </Rac.Form>
        </CardContent>
      </Card>
    </div>
  )
}
