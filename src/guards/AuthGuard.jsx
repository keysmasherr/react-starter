import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { LOCAL_STORAGE_KEYS } from "../config/constants";

const AuthGuard = () => {
  // const token = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN));
  const token = true;
  let location = useLocation();
  if (!token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <Outlet />;
};

export default AuthGuard;