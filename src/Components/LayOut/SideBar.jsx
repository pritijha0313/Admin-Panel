import React from "react";
import dashboardIcon from "../../assets/Image/dashbord.png";
import category from "../../assets/Image/Category.webp"
import subcategory from "../../assets/Image/subcategory.png";
import services from "../../assets/Image/services.png";
import settings from "../../assets/Image/settings.png";
import { NavLink } from "react-router-dom";

const SideBar = ({ collapsed }) => {
  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: dashboardIcon },
    { name: "Category", path: "/category", icon: category },
    { name: "Subcategory", path: "/subcategory", icon: subcategory },
    { name: "Services", path: "/services", icon: services },
    { name: "Settings", path: "/settings", icon: settings },
  ];

  return (
    <div
      className={`bg-[#101557] text-white min-h-screen p-4 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <ul>
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-3 py-2 rounded-lg transition-all relative 
              ${isActive ? "bg-[#4880FF]" : "hover:bg-[#2e2a7a]"}`
            }
          >
            <img src={item.icon} alt="" className="w-5 h-5" />

            {!collapsed && <span>{item.name}</span>}

            {collapsed && (
              <span className="absolute left-20 bg-black text-white px-2 py-1 text-sm rounded hidden group-hover:block">
                {item.name}
              </span>
            )}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
