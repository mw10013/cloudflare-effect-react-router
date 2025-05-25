import * as Oui from "@workspace/oui";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/ui/card";

export function OuiLinkDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex w-full gap-4">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <Oui.TextFieldEx
                  label="Email"
                  placeholder="m@example.com"
                  isRequired
                />
                <Oui.TextFieldEx
                  name="password"
                  type="password"
                  isRequired
                  label={
                    <div className="flex items-center">
                      <Oui.Label>Password</Oui.Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  }
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Oui.Button type="submit" className="w-full">
              Login
            </Oui.Button>
            <Oui.Button variant="outline" className="w-full">
              Login with Google
            </Oui.Button>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </CardFooter>
        </Card>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <Oui.TextFieldEx
                  label="Email"
                  placeholder="m@example.com"
                  isRequired
                />
                <Oui.TextFieldEx
                  name="password"
                  type="password"
                  isRequired
                  label={
                    <div className="flex items-center">
                      <Oui.Label>Password</Oui.Label>
                      <Oui.Link href="#" className="ml-auto inline-block">
                        Forgot your password?
                      </Oui.Link>
                    </div>
                  }
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Oui.Button type="submit" className="w-full">
              Login
            </Oui.Button>
            <Oui.Button variant="outline" className="w-full">
              Login with Google
            </Oui.Button>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Oui.Link href="#" underline="always">
                Sign up
              </Oui.Link>
            </div>
          </CardFooter>
        </Card>
      </div>

      <Oui.Link href="#">Default Link</Oui.Link>
      <Oui.Link href="#" underline="hover">
        Hover Link
      </Oui.Link>
      <Oui.Link href="#" underline="always">
        Always Link
      </Oui.Link>
      <Oui.Link href="#" underline="current">
        Current Link
      </Oui.Link>
      <Oui.Link href="#" underline="focus">
        Focus Link
      </Oui.Link>
      <Oui.Link href="/play" isDisabled>
        Disabled Link
      </Oui.Link>
      <Oui.Link href="#" className={Oui.buttonClassName({})}>
        Button Link
      </Oui.Link>
      <Oui.Link
        href="#"
        className={Oui.buttonClassName({ variant: "outline" })}
      >
        Button Link
      </Oui.Link>
      <Oui.Link
        href="#"
        className={Oui.buttonClassName({ variant: "destructive" })}
      >
        Button Link
      </Oui.Link>
      <Oui.Link isDisabled href="#" className={Oui.buttonClassName({})}>
        Button Link
      </Oui.Link>
    </div>
  );
}
