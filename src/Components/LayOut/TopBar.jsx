import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Topbar = ({ collapsed, setCollapsed }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const details = [
    { name: "My Profile", key: "my-profile" },
    { name: "Settings", key: "settings" },
    { name: "Logout", key: "logout" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="bg-[#101557] px-6 py-3 flex items-center shadow-md relative">

      <button onClick={() => setCollapsed(!collapsed)} className="text-white text-2xl">
        ☰
      </button>

      <h2 className="text-white text-xl font-bold text-center flex-1">
        Admin Panel
      </h2>

      <div className="flex items-center gap-4">
{/* 
        <div className="relative bg-white p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
          🔔
        </div> */}

        <div
          className="flex items-center gap-2 bg-white px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors relative"
          onClick={() => setOpen(!open)}
          ref={dropdownRef}
        >
          {/* <img
            src="https://th.bing.com/th/id/OIP.xWYWOI5AabiMyfqHWvDYNAHaNK?w=187&h=333"
            alt="user"
            className="w-8 h-8 rounded-full"
          /> */}

          <span className="text-sm font-medium text-gray-800">NIV</span>
          {/* <span className="text-gray-600 pb-1">▼</span> */}

          {open && (
            <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg w-40 py-2 z-50">
              {details.map((item) => (
                <button
                  key={item.key}
                  className={`block w-full text-left px-4 py-2 ${
                    item.key === "logout"
                      ? "hover:bg-red-100 text-red-600"
                      : "hover:bg-gray-100 text-gray-700"
                  } transition-colors`}
                  onClick={() =>
                    item.key === "logout" ? handleLogout() : setOpen(false)
                  }
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
