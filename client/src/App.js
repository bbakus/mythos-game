import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Inventory from './components/inventory';
import Arena from './components/arena';
import Marketplace from './components/marketplace';
import Friends from './components/Friends';
import FontLoader from './components/FontLoader';
import './App.css';

// Protected route component that redirects to login if not authenticated
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const user = localStorage.getItem('user');
  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
};

function App() {
  return (
    <Router>
      <div className="App">
        <FontLoader />
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={
            <>
              <div className="background-container"></div>
              <div className="login-background">
                <img src="/assets/images/misc/login-background.webp"/>
              </div>
              <Login />
            </>
          } />
          
          {/* Protected routes - require authentication */}
          <Route path="/users/:userId/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/users/:userId/inventory" element={
            <ProtectedRoute>
              <Inventory />
            </ProtectedRoute>
          } />
          
          <Route path="/users/:userId/marketplace" element={
            <ProtectedRoute>
              <Marketplace />
            </ProtectedRoute>
          } />
          
          <Route path="/users/:userId/arena" element={
            <ProtectedRoute>
              <Arena />
            </ProtectedRoute>
          } />
          
          <Route path="/users/:userId/friends" element={
            <ProtectedRoute>
              <Friends />
            </ProtectedRoute>
          } />
          
          {/* Public routes that redirect to login if not authenticated */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/marketplace" element={<Navigate to="/login" replace />} />
          <Route path="/inventory" element={<Navigate to="/login" replace />} />
          <Route path="/arena" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
