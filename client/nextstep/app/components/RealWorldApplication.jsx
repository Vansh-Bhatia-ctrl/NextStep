"use client";
import { Play } from "lucide-react";
import React from "react";

const RealWorldApplication = ({ learningContent }) => {
  return (
    <>
      <div className="mt-6">
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 lg:p-8 border border-purple-500/30 rounded-xl">
          <div className="flex items-center gap-3">
            <Play className="text-purple-600" />
            <p className="text-white font-semibold text-xl lg:text-2xl">
              Real World Application
            </p>
          </div>

          <div>
            <p className="mt-4 text-slate-300">
              {learningContent[0]?.realWorldApplication}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealWorldApplication;
