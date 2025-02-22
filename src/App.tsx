// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Home path "/" renders the Dashboard component */}
      <Route path="/" element={<Dashboard />} />
      {/* You can add more routes here later */}
    </Routes>
  );
};

export default App;
