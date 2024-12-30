import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../../api/axios";
import { apilinks } from "../../api/urls";
import {
  setAuthenticated,
  tokendata as setTokenData,
} from "../../redux/slices/Auth";
import { useSelector, useDispatch } from "react-redux";

const AuthContext = createContext();

function Authenticate({ children }) {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = useSelector((state) => state.auth.tokendata);
  const {isAuthenticated} = useSelector((state)=>state.auth)
  const dispatch = useDispatch();

  // Function to handle user login
  const login = async (data) => {
    try {
      const response = await api.post(
        apilinks.auth.login,
        JSON.stringify({
          email: data.uemail,
          password: data.upassword,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response.status === 200 && response.data.token) {
        const authToken = response.data.token;
        dispatch(setTokenData(authToken)); // Dispatch token data to Redux store
        // localStorage.setItem("authToken", authToken); // Save token to localStorage
        // setIsAuthenticated(true);
        dispatch(setAuthenticated(true)); // Update Redux state for authentication
      }

      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  // Function to check if the user is authenticated
  const checkAuthentication = () => {
    // const token = token
    const isLoggedIn = !!token; // Check if token exists
    // setIsAuthenticated(isLoggedIn);
    dispatch(setAuthenticated(isLoggedIn)); // Update Redux state
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("authToken");
    // setIsAuthenticated(false);
    dispatch(setAuthenticated(false)); // Reset Redux authentication state
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
export const useAuth = () => useContext(AuthContext);
