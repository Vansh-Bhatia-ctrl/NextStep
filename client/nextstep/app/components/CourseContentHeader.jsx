"use client";
import { Target, Timer } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const CourseContentHeader = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, duration: 300 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 md:p-8 text-white"
      >
        <div>
          <p className="text-2xl font-bold">Introduction To HTML</p>
          <p className="text-slate-300 mt-4 md:text-lg">
            Understand what HTML is and how to create a basic webpage.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-5">
          <div className="flex items-center gap-1">
            <Timer color="#fff" />
            <p className="text-white text-sm md:text-md">15-20 mins</p>
          </div>
          <div className="flex items-center gap-1">
            <Target color="#fff" />
            <p className="text-white text-sm md:text-md">Module 1</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CourseContentHeader;
