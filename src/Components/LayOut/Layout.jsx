import React, { useState } from "react";
import Sidebar from "./SideBar";
import Topbar from "./TopBar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar collapsed={collapsed} />

      <div className="flex-1 flex flex-col">
        <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
