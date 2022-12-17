import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  Login,
  AuthLayout,
  Dashboard,
} from "../views";
import AuthGuard from "../guards/AuthGuard";

function AppRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Login />} />

      <Route element={<AuthGuard />}>
        <Route path="/" element={<AuthLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
