"use client";
import React from "react";
import { motion } from "framer-motion";

const RECENT_ACTIVITY = [
  {
    id: 1,
    status: "Completed",
    activity: "React Hooks Module",
    timeStamp: "2h ago",
    color: "bg-amber-500 ",
  },
  {
    id: 2,
    status: "Started",
    activity: "State Management Course",
    timeStamp: "1d ago",
    color: "bg-green-500 ",
  },
  {
    id: 3,
    status: "Connected with",
    activity: "Sarah Chen (Senior Developer)",
    timeStamp: "5d ago",
    color: "bg-blue-500 ",
  },
];

const RecentActivity = () => {
  return (
    <>
      <div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-custom-gray-600 p-4 border border-slate-800 rounded-xl shadow-2xl mb-3"
        >
          <div>
            <p className="text-white font-bold text-lg">Recent Activity</p>
          </div>
          <div className="">
            {RECENT_ACTIVITY.map((act) => (
              <div
                key={act.id}
                className="bg-custom-gray-700 flex items-center gap-4 p-3 rounded-xl mt-3 hover:bg-custom-gray-800 transition-all duration-300  ease-in-out"
              >
                <div>
                  {/*Circle Pointer*/}
                  <div className={`rounded-full ${act.color} w-3 h-3`}></div>
                </div>
                <div>
                  <span className="text-gray-400 font-semibold lg:text-lg">
                    {act.status}
                  </span>
                  <div>
                    <p className="text-white font-bold lg:text-xl">
                      {act.activity}
                    </p>
                    <p className="text-gray-500 text-sm font-semibold lg:text-md">
                      {act.timeStamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default RecentActivity;
