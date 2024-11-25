import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const user = "fahrdhst";
  return user ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default Auth;
