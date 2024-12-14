import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../../api/axios";
import { apilinks } from "../../api/urls";

const AuthContext = createContext();

function Authenticate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle user login
  const login = async (data) => {
    const response = await api.post(
      apilinks.auth.login,
      JSON.stringify({
        uemail: data.username,
        password: data.password,
      }),
      {
        headers: {
          "Content-Type": "application/JSON",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (response.status === 200 && response.data.token) {
      localStorage.setItem("authToken", response.data.token); // Save token to localStorage
      setIsAuthenticated(true); // Update authentication state
    }

    return response;
  };

  // Function to check if the user is authenticated
  const checkAuthentication = () => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token); // Update state based on token existence
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    checkAuthentication(); // Validate authentication on component mount
  }, []);

  return (
    <AuthContext.Provider value={{ login, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Authenticate;

// Custom hook for accessing authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
