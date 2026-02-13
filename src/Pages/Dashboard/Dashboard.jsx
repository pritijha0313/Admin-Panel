import DashboardCard from "./DashboardCard";
import cards from "../../data/DashboardData.json";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-text">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <DashboardCard key={i} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
