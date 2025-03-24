import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { tables } from "../constants/dishes.js";

const Tables = () => {
  const [status, setStatus] = useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4 mt-2">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
            Tables
          </h1>
        </div>

        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-lg  ${
              status === "all" && "bg-[#383838] rounded-lg px-5 py-2 "
            } font-semibold px-5 py-2 rounded-lg`}
          >
            All
          </button>

          <button
            onClick={() => setStatus("Booked")}
            className={`text-[#ababab] text-lg  ${
              status === "Booked" && "bg-[#383838] rounded-lg px-5 py-2 "
            } font-semibold px-5 py-2 rounded-lg`}
          >
            Booked
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap gap-6 px-16 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-8rem-8rem)] ">
        {tables.map((table) => {
          return (
            <TableCard
              key={table.id}
              id={table.id}
              name={table.name}
              status={table.status}
              initial={table.initial}
              seats={table.seats}
            />
          );
        })}
      </div>

      <BottomNav />
    </section>
  );
};

export default Tables;
