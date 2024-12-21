import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Authenticate";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  // const { isAuthenticated } = useAuth();

  const {isAuthenticated} = useSelector((state)=>state.auth)


  return isAuthenticated ? children : <Navigate to="/user/login" replace />;
};

export default ProtectedRoute;
