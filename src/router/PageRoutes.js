import React from "react";
import { Navigate, useParams, useRoutes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../components/forms/ForgotPassword";
import ChangePassword from "../components/forms/ChangePassword";
import ResetPassword from "../components/forms/ResetPassword";
import ResendPrompt from "../components/PromptPages/ResendPrompt";
import AuthenticationPage from "../pages/auth/Authentication";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import Settings from "../pages/Settings";
import AccountVerify from "../components/forms/accountVerify";

// Lazy load pages
const Home = React.lazy(() => import("../pages/LandingPage"));
const AuthPage = React.lazy(() => import("../pages/auth/Authentication"));
const Bookmarks = React.lazy(() => import("../pages/Bookmarks"));

/**
 * ValidateUserRoute:
 * Validates dynamic routes for login and register, redirects invalid modes.
 */
const ValidateUserRoute = () => {
  const { mode } = useParams(); // Extract the dynamic part of the route
  const validModes = ["login", "register"]; // Define valid modes

  return validModes.includes(mode) ? (
    <AuthenticationPage />
  ) : (
    <Navigate to="/pagenotfound" replace />
  );
};

/**
 * PageRoutes:
 * Handles all routing with protected and normal routes.
 */
function PageRoutes() {
  return useRoutes([
    // Root route redirects to "/home"
    { path: "/", element: <Navigate to="/home" replace /> },

    // Public routes
    {
      path: "user",
      children: [
        { index: true, element: <Navigate to="/user/login" replace /> },
        { path: ":mode", element: <ValidateUserRoute /> },
        { path: "resend-verification", element: <ResendPrompt /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "change-password", element: <ChangePassword /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: 'accountverify/:uid/:Eemail', element: <AccountVerify /> },
      ],
    },

    // Protected routes
    {
      path: "user/saved-news",
      element: (
        <React.Suspense fallback={<div>Loading Bookmarks...</div>}>
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        </React.Suspense>
      ),
    },
    {
      path: "user/settings",
      element: (
        <React.Suspense fallback={<div>Loading Settings...</div>}>
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        </React.Suspense>
      ),
    },
    {
      path: "/:id",
      element: (
        <React.Suspense fallback={<div>Loading Home Page...</div>}>
          <Home />
        </React.Suspense>
      ),
    },

    // 404 - Page Not Found
    { path: "*", element: <Navigate to="/pagenotfound" replace /> },
    { path: "pagenotfound", element: <NotFound /> },
  ]);
}

export default PageRoutes;
