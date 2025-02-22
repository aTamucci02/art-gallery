// src/Dashboard.tsx
import React from 'react';

const Dashboard: React.FC = () => {
  // Create an array to simulate multiple art containers
  const containerCount = 6;
  const containers = Array.from({ length: containerCount }, (_, index) => index);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Art Gallery Dashboard</h1>
      <p>Welcome to the art gallery! Enjoy browsing the art pieces.</p>

      {/* Grid container for art placeholders */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}
      >
        {containers.map((container) => (
          <div
            key={container}
            style={{
              border: '2px dashed #ccc',
              padding: '1rem',
              height: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f9f9f9'
            }}
          >
            Container {container + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
