"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const OPTIONS = [
  {
    id: 1,
    label: "HyperText Markup Language",
  },
  {
    id: 2,
    label: "HighText Machine Language",
  },
  {
    id: 3,
    label: "HyperTool Multi Language",
  },
  {
    id: 4,
    label: "HomeText Markup Language",
  },
];

const QuizSection = () => {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20, duration: 300 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-custom-gray-700 p-4 rounded-xl border border-gray-800"
        >
          <div>
            <div>
              <p className="text-white text-lg font-semibold">
                Question 1: What does HTML stand for?
              </p>
            </div>
            <div className="mt-4 space-y-2">
              {OPTIONS.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className="border border-slate-800 bg-custom-gray-600 p-4 flex items-center gap-3 rounded-xl hover:bg-custom-gray-500 transition-colors duration-300 ease-in"
                >
                  <div className="h-4 w-4 rounded-full bg-transparent border-3 border-slate-500"></div>
                  <p className="text-slate-200">{option.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default QuizSection;
