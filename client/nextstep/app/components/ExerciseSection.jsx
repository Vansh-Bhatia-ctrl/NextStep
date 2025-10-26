"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Lightbulb } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const ExerciseSection = ({ learningContent }) => {
  const [solutionIsShowing, setSolutionIsShowing] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="p-4 mt-6"
      >
        <div className="lg:max-w-[1100px] lg:mx-auto">
          <div className="bg-custom-gray-300 p-4 lg:p-8 border border-slate-700 rounded-xl">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-white font-semibold text-lg">
                  {learningContent[0]?.exercises[0]?.title}
                </p>
                <span className="bg-blue-300/30  px-2 py-1 inline-block rounded-full text-white">
                  {learningContent[0]?.exercises[0]?.difficulty}
                </span>
              </div>

              <div>
                <button className="bg-blue-500 text-white rounded-xl px-3 py-2 flex items-center gap-1 hover:bg-blue-600 hover:scale-103 transition-all duration-200 ease-in cursor-pointer">
                  Submit
                </button>
              </div>
            </div>

            <div className="mt-6">
              <div>
                <p className="text-white font-semibold text-sm md:text-md">
                  Task
                </p>
                <p className="text-slate-200 text-sm tracking-wide mt-4 md:text-md">
                  {learningContent[0]?.exercises[0]?.prompt}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-3">
                <Lightbulb className="text-yellow-400" size={19} />
                <p className="text-white font-semibold text-sm md:text-md">
                  Hints
                </p>
              </div>
              <div className="mt-4 space-y-3">
                {learningContent[0]?.exercises[0]?.hints.map((hint, index) => (
                  <p key={index} className="text-white text-sm md:text-md">
                    💡 {hint}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold text-sm md:text-md">
                  Solution
                </p>
                <button
                  onClick={() => setSolutionIsShowing(!solutionIsShowing)}
                  className="flex items-center gap-2 text-slate-200 bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600 transition-color duration-300 ease-in"
                >
                  {solutionIsShowing ? <EyeOff /> : <Eye />}
                  {solutionIsShowing ? "Hide" : "Show"}
                </button>
              </div>
              <AnimatePresence>
                {solutionIsShowing && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <code className="text-green-500">
                      {learningContent[0]?.exercises[0]?.solution}
                    </code>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-6">
              <div>
                <textarea
                  placeholder="Type your answer here..."
                  className="font-mono p-2 placeholder:text-slate-500 w-full border border-slate-400 rounded-md text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-[20vh]"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ExerciseSection;
