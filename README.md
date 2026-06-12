# Legion Hyt JS - Blazingly Fast Full-Stack React Framework

> **Built by Death Legion Team** | A high-performance framework powered by Rust-based tooling

[![NPM Version](https://img.shields.io/npm/v/legion-hyt-js)](https://www.npmjs.com/package/legion-hyt-js)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/deathlegionteamlk/legion-hyt-js)](https://github.com/deathlegionteamlk/legion-hyt-js)

## 🚀 What is Legion Hyt JS?

Legion Hyt JS is a cutting-edge, full-stack React framework engineered for maximum performance. Built with Rust-powered tooling (Rolldown and SWC), it delivers near-instant build times, hot module replacement, and flexible rendering strategies—all while maintaining an exceptional developer experience.

Whether you're building a high-traffic e-commerce platform, a real-time dashboard, or a content-rich marketing site, Legion Hyt JS provides the performance and flexibility you need to succeed.

## ⚡ Key Features

### Performance First
- **Rust-Powered Tooling**: Leverages Rolldown and SWC for blazing-fast builds
- **Near-Instant HMR**: Hot module replacement that feels instantaneous
- **Optimized Output**: Production builds are lean and highly optimized
- **Zero Configuration**: Works out of the box with sensible defaults

### Full-Stack Development
- **Unified Codebase**: Write frontend and backend in the same project
- **Shared Types**: TypeScript types flow seamlessly between client and server
- **Server Actions**: Call server functions directly from your components
- **API Routes**: Create REST endpoints with simple file-based routing

### Flexible Rendering
- **Static Site Generation (SSG)**: Pre-render pages for maximum performance
- **Server-Side Rendering (SSR)**: Dynamic content with server rendering
- **Client-Side Rendering (CSR)**: Interactive, real-time applications
- **Hybrid Approach**: Mix rendering strategies in the same application

### Developer Experience
- **File-Based Routing**: Automatic route generation from file structure
- **TypeScript Support**: First-class TypeScript support out of the box
- **Rich CLI**: Powerful command-line tools for development and deployment
- **Extensible**: Plugin system for custom functionality

## 📦 Installation

### Using NPM
```bash
npm install legion-hyt-js
```

### Using Yarn
```bash
yarn add legion-hyt-js
```

### Using PNPM
```bash
pnpm add legion-hyt-js
```

### Create a New Project
```bash
npx create-legion-app my-app
cd my-app
npm run dev
```

## 🎯 Quick Start

### 1. Create Your First Route

Create a file at `src/routes/index.tsx`:

```tsx
export default function Home() {
  return (
    <div>
      <h1>Welcome to Legion Hyt JS</h1>
      <p>Built by Death Legion Team</p>
    </div>
  );
}
```

### 2. Add an API Route

Create a file at `src/routes/api/hello.ts`:

```ts
export async function GET() {
  return new Response(JSON.stringify({ message: 'Hello from Legion Hyt JS' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
```

### 3. Use Static Generation

Add `getStaticProps` to your route:

```tsx
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  return { props: { data } };
}

export default function Page({ data }) {
  return <div>{data}</div>;
}
```

## 📚 Documentation

For comprehensive documentation, visit [https://legion-hyt-js.com/docs](https://legion-hyt-js.com/docs)

### Core Concepts
- [Installation Guide](docs/installation.md)
- [Core Concepts](docs/core-concepts.md)
- [File-Based Routing](docs/routing.md)
- [Rendering Modes](docs/rendering.md)
- [API Routes](docs/api-routes.md)

## 🏗️ Project Structure

```
my-app/
├── src/
│   ├── routes/           # File-based routes
│   │   ├── index.tsx     # Home page (/)
│   │   ├── about.tsx     # About page (/about)
│   │   └── api/          # API routes
│   │       └── hello.ts  # GET /api/hello
│   ├── components/       # Reusable components
│   ├── lib/              # Utilities and helpers
│   └── App.tsx           # Root component
├── public/               # Static assets
├── legion.config.ts      # Framework configuration
├── package.json
└── tsconfig.json
```

## 🔧 CLI Commands

### Development
```bash
npm run dev
```
Start the development server with hot module replacement.

### Production Build
```bash
npm run build
```
Build your application for production.

### Preview
```bash
npm run preview
```
Preview the production build locally.

## 🎨 Rendering Strategies

### Static Site Generation (SSG)
Perfect for content that doesn't change frequently:

```tsx
export async function getStaticProps() {
  const posts = await fetchPosts();
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return <div>{posts.map(post => <Post key={post.id} {...post} />)}</div>;
}
```

### Server-Side Rendering (SSR)
For dynamic, personalized content:

```tsx
export async function getServerSideProps(context) {
  const user = await fetchUser(context.params.id);
  return { props: { user } };
}

export default function UserProfile({ user }) {
  return <div>Welcome, {user.name}!</div>;
}
```

### Client-Side Rendering (CSR)
For interactive, real-time applications:

```tsx
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/dashboard')
      .then(r => r.json())
      .then(setData);
  }, []);

  return <div>{data && <DashboardContent data={data} />}</div>;
}
```

## 🌍 Deployment

Legion Hyt JS applications can be deployed to any Node.js hosting platform:

- **Vercel**: Optimized for Next.js-like frameworks
- **Netlify**: Static and serverless deployment
- **Cloudflare Pages**: Edge computing and global CDN
- **AWS**: Lambda, EC2, or ECS
- **Docker**: Containerized deployment
- **Traditional Servers**: Any Node.js-compatible hosting

## 🤝 Contributing

We welcome contributions from the community! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

Legion Hyt JS is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 👥 About Death Legion Team

**Death Legion Team** is a collective of elite developers and engineers dedicated to building high-performance, production-grade frameworks and tools for the modern web.

We believe in:
- **Performance**: Every millisecond matters
- **Developer Experience**: Tools should be a joy to use
- **Innovation**: Pushing the boundaries of what's possible
- **Quality**: Production-ready code, always
- **Community**: Building together, stronger

### Team Members
- Core Contributors: [GitHub Organization](https://github.com/deathlegionteamlk)
- Community: [Discord](https://discord.gg/deathlegion)
- Updates: [@DeathLegionTeam](https://twitter.com/deathlegionteam)

## 🔗 Resources

- **Website**: [https://legion-hyt-js.com](https://legion-hyt-js.com)
- **Documentation**: [https://legion-hyt-js.com/docs](https://legion-hyt-js.com/docs)
- **GitHub**: [https://github.com/deathlegionteamlk/legion-hyt-js](https://github.com/deathlegionteamlk/legion-hyt-js)
- **NPM**: [https://www.npmjs.com/package/legion-hyt-js](https://www.npmjs.com/package/legion-hyt-js)
- **Issues**: [GitHub Issues](https://github.com/deathlegionteamlk/legion-hyt-js/issues)

## 💬 Support

- **Documentation**: [https://legion-hyt-js.com/docs](https://legion-hyt-js.com/docs)
- **GitHub Discussions**: [Discussions](https://github.com/deathlegionteamlk/legion-hyt-js/discussions)
- **Discord Community**: [Join our Discord](https://discord.gg/deathlegion)
- **Twitter**: [@DeathLegionTeam](https://twitter.com/deathlegionteam)

## 🎉 Acknowledgments

Legion Hyt JS is built on the shoulders of giants:
- [React](https://react.dev) - UI library
- [Rolldown](https://rolldown.rs) - Rust-powered bundler
- [SWC](https://swc.rs) - Rust-powered JavaScript compiler
- [Vite](https://vitejs.dev) - Next generation frontend tooling
- [TypeScript](https://www.typescriptlang.org) - Typed JavaScript

---

**Made with ❤️ by Death Legion Team**

*Blazingly fast. Production ready. Built for the future.*
