"use client";
import React from "react";
import { BookOpen, TrendingUp, Brain } from "lucide-react";
import { motion } from "framer-motion";

const USER_STATS = [
  {
    id: 1,
    icon: BookOpen,
    label: "Modules Done",
    numberLabel: "12/20",
    color: "text-blue-500",
  },
  {
    id: 2,
    icon: TrendingUp,
    label: "Learning Streak",
    numberLabel: "15 Days",
    color: "text-green-300",
  },
  {
    id: 3,
    icon: Brain,
    label: "Level",
    numberLabel: "Intermidiate",
    color: "text-yellow-300",
  },
];

const UserStats = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid lg:grid-cols-3 gap-2">
        {USER_STATS.map((stats) => {
          const Icon = stats.icon;
          return (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              key={stats.id}
              className="border border-slate-700 bg-custom-gray-600 rounded-xl p-1 flex-1 items-center gap-4 shadow-2xl sm:p-4 md:p-5"
            >
              <div className="flex items-center gap-2">
                <div className="bg-custom-gray-500 p-1 rounded-lg sm:p-2 md:p-3">
                  <Icon
                    size={22}
                    className={`sm:w-7 sm:h-7 md:w-8 md:h-8 ${stats.color}`}
                  />
                </div>
                <div>
                  <p className="text-slate-100 font-semibold text-[12.3px] whitespace-nowrap sm:text-lg md:text-xl">
                    {stats.label}
                  </p>
                  <p className="text-slate-100 text-md font-bold sm:text-xl md:text-2xl">
                    {stats.numberLabel}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default UserStats;
