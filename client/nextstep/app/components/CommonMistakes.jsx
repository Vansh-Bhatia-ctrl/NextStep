"use client";
import { AlertTriangle } from "lucide-react";
import React from "react";

const CommonMistakes = ({ learningContent }) => {
  return (
    <>
      <div className="mt-6">
        <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-2xl p-6 lg:p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-red-400" />
            <p className="text-white font-semibold text-xl lg:text-2xl">
              Common Mistakes
            </p>
          </div>

          <div className="flex flex-col  gap-2 mt-4">
            {learningContent[0]?.commonMistakes.map((mistake, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-xl bg-red-400 flex-shrink-0"></div>
                <p className="text-white text-sm">{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonMistakes;
