import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ForgotPassword from '../components/forms/ForgotPassword'
import ChangePassword from "../components/forms/ChangePassword";
import ResetPassword from "../components/forms/ResetPassword";

// Lazy load pages
const Home = React.lazy(() => import("../pages/LandingPage"));
const AuthPage = React.lazy(() => import("../pages/auth/Authentication"));
const Bookmarks = React.lazy(() => import("../pages/Bookmarks"));

function PageRoutes() {
  return useRoutes([
    // Root route redirects to "/home"
    { path: "/", element: <Navigate to="/home" replace /> },

    // Home route with dynamic ID
    {
      path: "/:id",
      element: (
        <React.Suspense fallback={<div>Loading Home Page...</div>}>
          <Home />
        </React.Suspense>
      ),
    },

    // Authentication routes
    { path: "user", element: <Navigate to="/user/login" replace /> },
    {
      path: "user/:mode", // mode can be 'login' or 'register'
      element: (
        <React.Suspense fallback={<div>Loading Authentication Page...</div>}>
          <AuthPage />
        </React.Suspense>
      ),
    },

    {
      path: "user/forgot-password",
      element:<ForgotPassword />
    },

    {
      path: "user/change-password",
      element:<ChangePassword />
    },

    {
      path: "user/reset-password",
      element:<ResetPassword />
    },

    // Bookmarks page
    {
      path: "bookmarks",
      element: (
        <React.Suspense fallback={<div>Loading Bookmarks...</div>}>
          <Bookmarks />
        </React.Suspense>
      ),
    },

    // 404 - Page Not Found
    { path: "*", element: <Navigate to="/pagenotfound" replace /> },
    {
      path: "pagenotfound",
      element: <NotFound />,
    },
  ]);
}

export default PageRoutes;
