import React, { useState } from "react";
import SettingsTabs from "./SettingsTabs";
import SettingsContent from "./SettingsContent";
import Toast from "../../Components/Common/Toast";

const SettingsPage = () => {
  const [active, setActive] = useState("profile");
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
  };

  return (
    <div className="p-6">

      {/* Toast message */}
      <Toast
        message="Settings saved successfully!"
        show={showToast}
        onClose={() => setShowToast(false)}
      />

      {/* Tabs */}
      <SettingsTabs active={active} setActive={setActive} />

      {/* Content */}
      <div className="bg-white p-6 rounded-xl shadow-sm border mt-6">
        <SettingsContent active={active} onSave={handleSave} />
      </div>
    </div>
  );
};

export default SettingsPage;
