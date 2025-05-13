---
applyTo: "**/*.{ts,tsx}"
---

# Project coding standards for TypeScript

## TypeScript Guidelines

- Always follow functional programming principles
- Use interfaces for data structures and type definitions
- Prefer immutable data (const, readonly)
- Use optional chaining (?.) and nullish coalescing (??) operators
- **Do not add any comments to generated code.** Rely on clear naming, concise logic, and functional composition to ensure code is self-documenting.
- Employ a concise and dense coding style. Prefer inlining expressions, function composition (e.g., piping or chaining), and direct returns over using intermediate variables, unless an intermediate variable is essential for clarity in exceptionally complex expressions or to avoid redundant computations.
- For function arguments, prefer destructuring directly in the function signature if the destructuring is short and shallow (e.g., `({ data: { value }, otherArg })`). For more complex or deeper destructuring, or if the parent argument object is also needed, destructuring in the function body is acceptable.
- Use Tailwind 4.0, shadcn v4, and react aria components latest version.

## Imports

Examples of how to import specific modules and libraries:

```
import type { AccountWithUser, SessionData } from '~/lib/Domain'
import type { AppLoadContext, Session } from 'react-router'
import * as Oui from "@workspace/oui";
import * as Rac from "react-aria-components";
import * as ReactRouter from "~/lib/ReactRouter"
import { SchemaEx } from '@workspace/shared'
import { Effect, Schema } from 'effect'
import { Outlet, useRouteLoaderData } from 'react-router'
```

## Sql Guidelines

- Use lowercase for all sql keywords.
