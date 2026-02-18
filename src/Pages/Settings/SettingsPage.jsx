import React, { useState } from "react";
import SettingsTabs from "./SettingsTabs";
import SettingsContent from "./SettingsContent";

const SettingsPage = () => {
  const [active, setActive] = useState("profile");

  return (
    <div className="p-6">
 
      <SettingsTabs active={active} setActive={setActive} />

      <div className="bg-white p-6 rounded-xl shadow-sm border mt-6">
        <SettingsContent active={active} />
      </div>
    </div>
  );
};

export default SettingsPage;
