import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contribute from './pages/Contribute';

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', () => {
      setShowSidebar(false);
    });
  });

  return (
    <>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Routes>
        <Route path="/" element={<h1>HAHA</h1>} />
        <Route path="contribua" element={<Contribute />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
