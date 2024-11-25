import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import AdminRoute from "../../component/adminRoute/AdminRoute";

const Admin = () => {
  return (
    <div>
      <AdminRoute />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
