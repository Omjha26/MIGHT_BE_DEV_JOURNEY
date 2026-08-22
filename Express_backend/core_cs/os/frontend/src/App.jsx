import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Lobby from './components/Lobby';
import Simulator from './components/Simulator';

/**
 * App Component
 * Phase 8 Routing Manager: Map entrance Lobby (/) and dynamic Subject Simulators (/simulator/:subject).
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/simulator/:subject" element={<Simulator />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
