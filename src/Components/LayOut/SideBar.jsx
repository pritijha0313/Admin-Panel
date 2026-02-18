import React from "react";
import { NavLink } from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,        
  faLayerGroup,   
  faFolderTree,   
  faListCheck,    
  faGear,         
  faEnvelope     
} from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ collapsed }) => {
  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: faGauge },
    { name: "Category", path: "/category", icon: faLayerGroup },
    { name: "Subcategory", path: "/subcategory", icon: faFolderTree },
    { name: "Services", path: "/services", icon: faListCheck },
    { name: "Settings", path: "/settings", icon: faGear },
    { name: "Mail Template", path: "/mail", icon: faEnvelope },
  ];

  return (
    <div
      className={`bg-[#101557] text-white min-h-screen p-4 transition-all duration-300 
      ${collapsed ? "w-20" : "w-64"}`}
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
            <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />

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
