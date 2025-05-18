import { Button } from "~/components/ui/button";
import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [{ title: "i" }, { name: "description", content: "Welcome to r1" }];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: `ENVIRONMENT: ${context.cloudflare.env.ENVIRONMENT}` };
}

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return <div className="p-6"><Button onPress={() => alert("Pressed")}>Label</Button>
</div>;
}
