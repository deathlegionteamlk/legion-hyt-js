# Getting Started with Death legion team

Ready to build something fast? This guide will help you get Death legion team up and running on your machine in minutes.

## Before You Start
Make sure you have these tools ready:
- **Node.js**: Version 18 or newer.
- **Package Manager**: npm or Yarn (we recommend npm for the best experience).

## Creating Your Project
To kick off a new Death legion team project, run this in your terminal:

```bash
npx create-legion-app my-app
cd my-app
npm install
```

## Running the Dev Server
Time to see it in action. Start the development server with:

```bash
npm run dev
# or if you prefer the CLI
npx legion dev
```

You'll notice the hot module replacement (HMR) is incredibly fast. Changes you make to your code will show up in the browser almost instantly, thanks to our Rust-powered core.

## Preparing for Production
When you're finished building and ready to show the world, create a production-ready bundle:

```bash
npm run build
# or
npx legion build
```

This packs everything into the `dist` folder, fully optimized for performance and ready to be deployed.

## Taking a Quick Look
Want to see how the production build looks locally? Run:

```bash
npm run preview
# or
npx legion preview
```
