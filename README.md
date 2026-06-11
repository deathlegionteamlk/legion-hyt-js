# Legion Hyt JS
**Built with ❤️ by the Death legion team**

Legion Hyt JS is a high-performance, full-stack React framework built for developers who care about speed. We've swapped out slow, traditional JS tooling for a Rust-powered engine to give you near-instant build times and a development experience that actually keeps up with your thoughts.

## Why Legion Hyt JS?
- **Built with Rust**: Under the hood, we use Rolldown and SWC. This means your builds aren't just fast—they're basically instant.
- **Render Your Way**: Whether you need static pages for SEO (SSG), dynamic server-side rendering (SSR), or a snappy client-side app (CSR), we handle it all on a per-route basis.
- **No More Routing Hassles**: Just drop a `.tsx` file into `src/routes` and you're live. No complex config files required.
- **Truly Full-Stack**: Stop jumping between repos. Write your frontend and backend in one place with shared logic and types.
- **Scale with Confidence**: Optimized for production and designed to handle the demands of major, high-traffic applications.

## Getting Started

### Installation
Grab the dependencies first:
```bash
npm install
```

### Jump into Development
Fire up the dev server:
```bash
npm run dev
# or use the CLI
npx legion dev
```

### Ship to Production
When you're ready to go live:
```bash
npm run build
# or
npx legion build
```

## How It's Structured
- `src/routes/`: This is where your pages and API endpoints live.
- `src/components/`: Put your reusable React components here.
- `legion.config.ts`: Tweak the framework settings to fit your project.

## Team
Proudly maintained by the **Death legion team**.

## License
MIT
