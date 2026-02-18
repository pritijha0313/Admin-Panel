import React from "react";

const tabs = [
  { id: "profile", label: "Profile" },
  { id: "password", label: "Password" },
  { id: "notify", label: "Notifications" },
];

const SettingsTabs = ({ active, setActive }) => {
  return (
    <div className="flex gap-6 border-b pb-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActive(tab.id)}
          className={`pb-2 text-sm font-medium ${
            active === tab.id
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-black"
          }`}
        >
          {active === tab.id ? "Save" : tab.label}
        </button>
      ))}
    </div>
  );
};

export default SettingsTabs;
