import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthPart } from '../contexts/AuthContext';

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, user } = useAuthPart();
  console.log('=== Protected Route ===');
  console.log('User:', user);
  console.log('Authenticated:', isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoutes;
