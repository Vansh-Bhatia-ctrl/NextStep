"use client";
import React from "react";
import { Lightbulb, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const EXPERT_INSIGHT = `Always include the <!DOCTYPE html> declaration to ensure browsers render your page correctly.`;
const MISTAKES = [
  "Forgetting to close tags, e.g., <p> without </p>",
  "Nesting tags incorrectly, e.g., <p><h1>Text</p></h1>",
];

const CommonMistakesandExpertInsight = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, duration: 300 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:grid lg:grid-cols-2 gap-5"
      >
        {/*Expert Insight Section*/}
        <div className="bg-custom-gray-700 p-4 rounded-xl border border-gray-800 h-full">
          <div>
            <div className="flex items-center gap-4">
              <Lightbulb color="#fff" />
              <p className="text-white text-xl font-bold tracking-wide">
                Expert Insights
              </p>
            </div>
            <div className="mt-4">
              <p className="text-slate-400 text-start text-sm">
                {EXPERT_INSIGHT}
              </p>
            </div>
          </div>
        </div>

        {/*Common Mistakes Section*/}
        <div className="bg-custom-gray-700 mt-4 lg:mt-0 p-4 rounded-xl border border-gray-800 h-auto">
          <div className="">
            <div className="flex items-center gap-4">
              <AlertCircle color="#fff" />
              <p className="text-white text-xl font-bold tracking-wide">
                Common Mistakes
              </p>
            </div>
            <div className="mt-2">
              {MISTAKES.map((mistake, index) => (
                <div key={index} className="">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="ml-2 text-slate-400 text-start text-sm mt-4">
                    {mistake}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CommonMistakesandExpertInsight;
