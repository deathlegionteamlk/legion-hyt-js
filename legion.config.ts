export default {
  title: 'My Legion App',
  rendering: {
    default: 'ssr', // Options: 'ssr', 'ssg', 'csr'
  },
  build: {
    tooling: 'rust', // Use Rust-based Rolldown/SWC
    minify: true,
  },
  server: {
    port: 3000,
  },
};
