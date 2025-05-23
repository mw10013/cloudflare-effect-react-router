import * as Oui from "@workspace/oui";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/src/components/card";

export function OuiLinkDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
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

      <Oui.Link href="/play">Play</Oui.Link>
      <Oui.Link href="/play" className="underline">
        Play
      </Oui.Link>
      <Oui.Link href="/play" isDisabled>
        Play
      </Oui.Link>
      <Oui.LinkButton href="/play">Play</Oui.LinkButton>
      <Oui.LinkButton href="/play" variant="secondary" size="sm">
        Play
      </Oui.LinkButton>
      <Oui.LinkButton href="/play" variant="destructive" size="lg">
        Play
      </Oui.LinkButton>
    </div>
  );
}

/*
export function RouteComponent1() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 p-6">
      <div className="[&_[data-slot=foo]]:bg-input [&_[data-slot=foo]]:text-foreground [&_[data-slot=bar]]:bg-destructive [&_[data-slot=bar]]:text-primary-foreground flex gap-2">
        <div className="grid size-8 place-items-center border">1</div>
        <div data-slot="foo" className="grid size-8 place-items-center border">
          foo
        </div>
        <div data-slot="bar" className="grid size-8 place-items-center border">
          bar
        </div>
      </div>
      <div className="flex gap-2 [&_[data-slot=navigation-menu-link]]:h-7 [&_[data-slot=navigation-menu-link]]:py-1 [&_[data-slot=navigation-menu-link]]:font-medium">
        <Oui.NavigationMenuLink href="/play">Play</Oui.NavigationMenuLink>
        <Oui.NavigationMenuLink href="/play">Play1</Oui.NavigationMenuLink>
      </div>
      <div className="**:data-[slot=navigation-menu-link]:py-1 **:data-[slot=navigation-menu-link]:font-medium flex gap-2 *:data-[slot=navigation-menu-item]:h-7">
        <Oui.NavigationMenuLink href="/play">Play</Oui.NavigationMenuLink>
        <Oui.NavigationMenuLink href="/play">Play1</Oui.NavigationMenuLink>
      </div>
      <div className="flex gap-2">
        <Oui.NavigationMenuLink href="/play">Play</Oui.NavigationMenuLink>
        <Oui.NavigationMenuLink href="/play">Play1</Oui.NavigationMenuLink>
      </div>
      <p>
        This is the <Oui.Link href="/play">play</Oui.Link> link.
      </p>
      <p>
        This is the underlined{" "}
        <Oui.Link href="/play" className="underline">
          play
        </Oui.Link>{" "}
        link.
      </p>
      <p>
        This is the disabled{" "}
        <Oui.Link href="/play" isDisabled>
          play
        </Oui.Link>{" "}
        link.
      </p>
      <Oui.LinkButton href="/play">Play</Oui.LinkButton>
      <Oui.LinkButton href="/play" variant="secondary" size="sm">
        Play
      </Oui.LinkButton>
      <Oui.LinkButton href="/play" variant="destructive" size="lg">
        Play
      </Oui.LinkButton>
    </div>
  );
}
*/
