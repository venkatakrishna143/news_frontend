import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Authenticate";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/user/login" replace />;
};

export default ProtectedRoute;
