import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import NotFound from "../pages/NotFound";

// Lazy load pages
const Home = React.lazy(() => import("../pages/LandingPage"));
const Login = React.lazy(() => import("../pages/auth/AuthenticationPage"));
const Register = React.lazy(() => import("../pages/auth/AuthenticationPage"));
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
    { path: "user", element: <Navigate to="user/login" replace /> },
    {
      path: "user/login",
      element: (
        <React.Suspense fallback={<div>Loading Login Page...</div>}>
          <Login />
        </React.Suspense>
      ),
    },
    {
      path: "user/register",
      element: (
        <React.Suspense fallback={<div>Loading Register Page...</div>}>
          <Register />
        </React.Suspense>
      ),
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
    { path: "*", element: <NotFound /> },
    // { path: "/pagenotfound", element: <NotFound /> },
  ]);
}

export default PageRoutes;
