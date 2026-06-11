import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <h2>User Dashboard</h2>
      <p>This page would be server-rendered or dynamic in a full-stack environment.</p>
      <div style={{ padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
        <h3>Stats</h3>
        <p>Build Time: <span style={{ color: 'green', fontWeight: 'bold' }}>~10ms</span></p>
        <p>HMR Speed: <span style={{ color: 'green', fontWeight: 'bold' }}>Instant</span></p>
      </div>
      <br />
      <a href="/">Back Home</a>
    </div>
  );
}
