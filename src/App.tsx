import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Illustrations from "./pages/Illustrations";
import NavHeader from './components/NavHeader';

const App: React.FC = () => (
  <>
  <NavHeader/>
    <Routes>
      <Route path="/" element={<Illustrations/>} />
      <Route path="/illustrations" element={<Illustrations />} />
    </Routes>
  </>
);

export default App;
