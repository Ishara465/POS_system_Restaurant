import React, { useState } from "react";
import { MdTableBar } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import Metrics from "../components/dashboard/Metrics";
import RecentOrders from "../components/dashboard/RecentOrders";
import Model from "../components/dashboard/Model";

const buttons = [
  { label: "Add Table", icon: <MdTableBar />, action: "table" },
  { label: "Add Category", icon: <MdCategory />, action: "category" },
  { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
];

const tabs = ["Metrics", "Orders", "Payment"];

const Dashboard = () => {
  const [isTableModelOpen, setIsTableModelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Metrics");

  const handleOpenModel = (action) => {
    if (action === "table") setIsTableModelOpen(true);
  };

  return (
    <div className="bg-[#1f1f1f] h-[calc(100vh-5rem)]">
      <div className="container mx-auto flex items-center justify-between py-14 px-6 md:px-4n">
        <div className="flex items-center gap-3">
          {buttons.map(({ label, icon, action }) => {
            return (
              <button
                key={action}
                onClick={() => handleOpenModel(action)}
                className="bg-[#1a1a1a] hover:bg-[#262626] px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-semibold flex items-center gap-2"
              >
                {label} {icon}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {tabs.map((tab) => {
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                 px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-semibold flex items-center gap-2 ${
                   activeTab === tab
                     ? "bg-[#262626]"
                     : "bg-[#1a1a1a] hover:bg-[#262626]"
                 }
                `}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {activeTab === "Metrics" && <Metrics />}
      {activeTab === "Orders" && <RecentOrders />}
      {isTableModelOpen && <Model setIsTableModelOpen={setIsTableModelOpen} />}
    </div>
  );
};

export default Dashboard;
