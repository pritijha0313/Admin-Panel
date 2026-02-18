import React from "react";

const SettingsContent = ({ active }) => {
  return (
    <>
      {active === "profile" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
          <div className="grid grid-cols-2 gap-4">
            <input className="border p-2 rounded-lg" placeholder="Full Name" />
            <input className="border p-2 rounded-lg" placeholder="Email" />
          </div>
          <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg">
            Save
          </button>
        </div>
      )}

      {active === "password" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Change Password</h2>
          <div className="space-y-4">
            <input className="border p-2 rounded-lg w-full" placeholder="Old Password" />
            <input className="border p-2 rounded-lg w-full" placeholder="New Password" />
            <input className="border p-2 rounded-lg w-full" placeholder="Confirm Password" />
          </div>
          <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg">
            Update Password
          </button>
        </div>
      )}

      {active === "notify" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
          <label className="flex gap-2 items-center mb-2">
            <input type="checkbox" /> Email Alerts
          </label>
          <label className="flex gap-2 items-center mb-2">
            <input type="checkbox" /> SMS Alerts
          </label>
          <label className="flex gap-2 items-center">
            <input type="checkbox" /> Push Notifications
          </label>
          <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg">
            Save
          </button>
        </div>
      )}
    </>
  );
};

export default SettingsContent;
