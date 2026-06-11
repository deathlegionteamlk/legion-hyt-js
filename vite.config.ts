import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configure Vite to use Rolldown (Rust-based bundler) if available, or fallback to Rollup
  // This is a conceptual integration as Rolldown is still in active development and not a direct Vite plugin yet.
  // For now, we'll use Vite's default Rollup, but the design anticipates a future Rolldown integration.
  build: {
    rollupOptions: {
      // SWC will be used via @vitejs/plugin-react for JSX/TSX transformation
      // Further Rust-based optimizations would be integrated here as they mature
    },
  },
});
