import React from 'react';
import { LegionRouter } from './router';

function App() {
  return (
    <div className="App">
      <header style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
        <h1 style={{ margin: 0 }}>Legion Hyt JS</h1>
      </header>
      <main style={{ padding: '1rem' }}>
        <LegionRouter />
      </main>
    </div>
  );
}

export default App;
