- Do not use `tailwindcss-react-aria-components` (https://react-spectrum.adobe.com/react-aria/styling.html#plugin) so we don't have that dependency.

- https://ui.shadcn.com/r
- https://ui.shadcn.com/r/styles/new-york/button.json
- https://shadcn.batchtool.com/components
- https://dev.to/bytefer/10-component-libraries-you-must-know-to-use-shadcn-ui-3ma1

- VSCode 1.91 breaks code actions: https://github.com/tailwindlabs/tailwindcss-intellisense/issues/1018

## TODO

- textarea
- alert
- breadcrumb
- label: error (className={cn(error && "text-destructive", className)})
- Group (FiledGroup)
- checkbox: interminate, invalid, readonly, description, revisit span/label text
- checkboxgroup

## Prompts

```
Delete all imports from 'react-aria-components' and replace with`import * as Rac from 'react-aria-components'`. Then patch up the affected objects and types to use the namespace Rac. For example, DialogProps would become Rac.DialogProps.
```

# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t my-app .

# For pnpm
docker build -f Dockerfile.pnpm -t my-app .

# For bun
docker build -f Dockerfile.bun -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
