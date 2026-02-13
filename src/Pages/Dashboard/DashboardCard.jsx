import React from "react";

export default function DashboardCard({ title, value, icon: Icon }) {

  return (
    <div className="bg-primary shadow rounded-2xl p-6 text-bg hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold opacity-90">{title}</h3>

        
        
      </div>

      <p className="text-3xl font-bold mt-3">{value}</p>
    </div>
  );
}
