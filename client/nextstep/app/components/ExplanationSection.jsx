"use client";
import { BookOpen } from "lucide-react";
import React from "react";

const ExplanationSection = ({ learningContent }) => {
  return (
    <>
      <div className="mt-6">
        <div className="bg-custom-gray-300 p-6 lg:p-8 border border-slate-700 rounded-xl">
          <div className="flex items-center gap-3">
            <BookOpen className="text-blue-600" />
            <p className="text-white font-semibold text-xl lg:text-2xl">
              Explanation
            </p>
          </div>
          <div className="mt-3 tracking-wide">
            <p className="text-slate-200">{learningContent[0]?.explanation}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplanationSection;
