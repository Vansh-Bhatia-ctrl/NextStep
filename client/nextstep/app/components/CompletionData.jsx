"use client";
import React from "react";
import { motion } from "framer-motion";

const CompletionData = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-blue-500/10 rounded-lg border border-blue-500/20 p-5"
      >
        <div>
          <p className="text-white font-semibold">Your Progress</p>
        </div>
        <div className="mt-4">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-white text-sm">Module Porgress</p>
              <p className="text-white text-sm">33%</p>
            </div>
            <div className="w-[100%] mt-2">
              <div className="bg-white/10 w-[100%] h-3 rounded-xl">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "33%" }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 w-[33%] h-3 rounded-xl"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center">
              <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl font-bold">
                2
              </p>
              <p className="text-slate-500 text-sm">Completed</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl font-bold">
                4
              </p>
              <p className="text-slate-500 text-sm">Remaining</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CompletionData;
