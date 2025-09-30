"use client";
import { Lightbulb } from "lucide-react";
import React from "react";

const LearningTips = ({ learningContent }) => {
  return (
    <>
      <div className="mt-6">
        <div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 lg:p-8">
            <div className="flex items-center gap-3">
              <Lightbulb className="text-yellow-400" />
              <p className="text-white font-semibold text-xl lg:text-2xl">
                Learning Tips
              </p>
            </div>
            <div className="mt-4">
              <p className="text-slate-300">
                {learningContent[0]?.expertInsights}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningTips;
