import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setShowSidebar(false);
    })
  });

  return (
    <BrowserRouter>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
