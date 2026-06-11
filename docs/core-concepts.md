# How Legion Hyt JS Works
**By Death legion team**

We built Legion Hyt JS to solve the two biggest frustrations in web development: slow build times and rigid rendering patterns. Here’s a look at the core ideas that make this framework different.

## Performance That Keeps Up With You
Most frameworks slow down as your project grows. We took a different path by moving the heavy lifting to Rust.
- **Rust-Powered Engine**: By using Rolldown for bundling and SWC for transpilation, we’ve eliminated the "waiting for build" stage. HMR is near-instant, so you can stay in your flow.
- **Smart Production Builds**: We don't just bundle your code; we optimize it. Automatic tree-shaking and code splitting ensure your users only download exactly what they need, resulting in lightning-fast load times.

## Rendering: Your Choice, Every Time
You shouldn't have to pick one rendering strategy for your entire app. Legion Hyt JS lets you mix and match based on what each page needs.

### Client-Side Rendering (CSR)
This is the default. The browser handles the rendering, making it perfect for highly interactive dashboards or apps where you don't need to worry about SEO.

### Server-Side Rendering (SSR)
If you need dynamic data that’s ready the moment the page loads, or if SEO is a priority, use SSR. We render the page on the server and send the HTML straight to the user.

To turn on SSR, just export `getServerSideProps`:

```typescript
// src/routes/dashboard.tsx
export async function getServerSideProps(context) {
  const response = await fetch("https://api.example.com/dashboard");
  const data = await response.json();
  return { props: { data } };
}

export default function Dashboard({ data }) {
  return (
    <div>
      <h1>Your Dashboard</h1>
      <p>Latest updates: {data.message}</p>
    </div>
  );
}
```

### Static Site Generation (SSG)
For blogs or landing pages, SSG is the way to go. We pre-render these pages when you build the app, so they can be served instantly from a CDN.

To use SSG, export `getStaticProps`:

```typescript
// src/routes/blog/[slug].tsx
export async function getStaticProps({ params }) {
  const post = await fetch(`https://api.example.com/posts/${params.slug}`).then(res => res.json());
  return { props: { post } };
}

export default function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </article>
  );
}
```

## Routing That Just Works
Forget about manually configuring routes. If you create a file in `src/routes`, it’s automatically a page in your app.
- `src/routes/index.tsx` becomes `/`
- `src/routes/about.tsx` becomes `/about`
- `src/routes/profile/[username].tsx` becomes `/profile/:username`

## Full-Stack Without the Friction
Legion Hyt JS bridges the gap between your frontend and backend.

### Server Actions
You can write server-side logic directly inside your React components. No need to set up separate API endpoints for simple things like form submissions.

```typescript
// src/routes/join.tsx
export async function joinLegion(formData: FormData) {
  "use server";
  const email = formData.get("email");
  // Save to database, send email, etc.
  return { success: true };
}

export default function JoinPage() {
  return (
    <form action={joinLegion}>
      <input type="email" name="email" placeholder="Enter your email" />
      <button type="submit">Join the Team</button>
    </form>
  );
}
```

### API Routes
When you need a traditional API, just add a file to `src/routes/api`. You can export handlers for any HTTP method.

```typescript
// src/routes/api/status.ts
export async function GET() {
  return new Response(JSON.stringify({ status: "All systems go" }), {
    headers: { "Content-Type": "application/json" },
  });
}
```
