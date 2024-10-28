import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext.js';


const ProtectedRoute = ({ children }) => {
  
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/admin" />;
};

export default ProtectedRoute;