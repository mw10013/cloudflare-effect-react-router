import { Checkbox } from "~/components/ui/checkbox";
import type { Route } from "./+types/_index";
import { Button } from "~/components/ui/button";
import { TextField } from "~/components/ui/text-field";

export function meta({}: Route.MetaArgs) {
  return [{ title: "i" }, { name: "description", content: "Welcome to r1" }];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: `ENVIRONMENT: ${context.cloudflare.env.ENVIRONMENT}` };
}

export default function RouteComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-2 p-6 max-w-96 items-center mx-auto">
      <Checkbox>Enable notifications</Checkbox>
      <TextField label="Name" />
      <Button onPress={() => alert("Pressed")}>Label</Button>
    </div>
  );
}
