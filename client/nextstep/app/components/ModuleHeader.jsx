"use client";
import { BookOpen, Target, Timer } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useModuleStore from "../store/useModulesStore";
import { useUser, useAuth } from "@clerk/nextjs";
import moment from "moment";
import "moment-duration-format";

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
  const {
    getLearningContent,
    modules,
    index,
    loading,
    estimatedTime,
    getEstimatedTime,
    moduleSpecificLessons,
  } = useModuleStore();

  useEffect(() => {
    const getData = async () => {
      const token = await getToken();
      if (!user || !isLoaded) return;
      await getLearningContent(token, level);
    };
    getData();
  }, [getLearningContent, isLoaded]);

  useEffect(() => {
    getEstimatedTime();
  }, [index]);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 border border-blue-500/30 rounded-lg"
      >
        <div>
          <p className="text-white font-bold text-2xl">
            {modules[index]?.title}
          </p>

          <p className="text-slate-400 mt-4">{modules[index]?.description}</p>
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
          <div className="bg-white/10 px-2 py-4 rounded-xl flex flex-col items-center justify-center">
            <BookOpen className="text-blue-600" />
            <p className="text-slate-400 font-light text-center">Lessons</p>
            <p className="text-white font-bold text-lg">
              {modules[index]?.lessonIds.length}
            </p>
          </div>

          <div className="bg-white/10 px-2 py-4 rounded-xl flex flex-col items-center justify-center">
            <Timer className="text-purple-600" />
            <p className="text-slate-400 font-light text-center">Duration</p>
            <p className="text-white font-bold">
              {moment.duration(estimatedTime, "minutes").format("h[h] m[m]")}
            </p>
          </div>

          <div className="bg-white/10 px-2 py-4 rounded-xl flex flex-col items-center justify-center">
            <Target className="text-yellow-600" />
            <p className="text-slate-400 font-light text-center">Completed</p>
            <p className="text-white font-bold">0/6</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ModuleHeader;
