import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// This is a conceptual implementation of file-based routing.
// In a real framework, this would be generated at build time.
const pages = import.meta.glob('./routes/**/*.tsx');

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/routes\/(.*)\.tsx$/)![1];
  const Component = lazy(pages[path] as any);
  const routePath = name === 'index' ? '/' : `/${name.toLowerCase()}`;
  
  return {
    path: routePath,
    Component,
  };
});

export function LegionRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}
