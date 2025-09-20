"use client";
import { BookOpen, Target, Timer } from "lucide-react";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useModuleStore from "../store/useModulesStore";
import { useUser, useAuth } from "@clerk/nextjs";

const STATS = [
  {
    id: 1,
    icon: BookOpen,
    label: "Lessons",
    miniLable: 6,
    color: "text-blue-600",
  },
  {
    id: 2,
    icon: Timer,
    label: "Duration",
    miniLable: "4h 50m",
    color: "text-purple-600",
  },
  {
    id: 3,
    icon: Target,
    label: "Completed",
    miniLable: "2/6",
    color: "text-yellow-600",
  },
];

const TAGS = [
  "#css",
  "#web",
  "#typography",
  "#beginner",
  "#styling",
  "#frontend",
];

const ModuleHeader = ({ level }) => {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();
  const { getLearningContent, modules, lessons } = useModuleStore();
  useEffect(() => {
    const getData = async () => {
      const token = await getToken();
      if (!user || !isLoaded) return;
      await getLearningContent(token, level);
    };

    getData();
  }, [getLearningContent, isLoaded]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 border border-blue-500/30 rounded-lg"
      >
        <div>
          <p className="text-white font-bold text-2xl">{modules[0]?.title}</p>

          <p className="text-slate-400 mt-4">{modules[0]?.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {TAGS.map((tag, index) => (
            <div
              key={index}
              className="bg-white/20 text-white text-sm rounded-full p-1 flex"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 items-center justify-between gap-2">
          {STATS.map((stats) => {
            const Icon = stats.icon;
            return (
              <div
                key={stats.id}
                className="bg-white/10 px-2 py-4 rounded-xl flex flex-col items-center justify-center"
              >
                <Icon className={`${stats.color}`} />
                <p className="text-slate-400 font-light text-center">
                  {stats.label}
                </p>
                <p className="text-white font-bold">{stats.miniLable}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default ModuleHeader;
