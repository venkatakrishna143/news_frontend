import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// import LandingPage from "../pages/LandingPage";

const HomePage = React.lazy(() => import("../pages/LandingPage"));

function PageRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/home"  exact replace />, // Navigate to "/home" after page load
     
    },
    {
      path: "/:id", // Dynamic home page with id parameter
      element: (
        <React.Suspense fallback={<div>Loading Home Page...</div>}>
          <HomePage />
        </React.Suspense>
      ),
    },
  ]);
}

export default PageRoutes;
