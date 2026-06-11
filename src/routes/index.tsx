import React from 'react';

export default function Home() {
  return (
    <div>
      <h2>Welcome to Death legion team</h2>
      <p>This is the home page, rendered using file-based routing.</p>
      <nav>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
    </div>
  );
}
