"use client";
import React from "react";
import useModuleStore from "../store/useModulesStore";
import { Target, Timer } from "lucide-react";

const LessonTitle = ({ lessonId, learningContent }) => {
  const { modules, index } = useModuleStore();
  return (
    <>
      <div>
        <p className="text-slate-400 text-center">{modules[index]?.title}</p>
      </div>
      <div>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl mt-4">
          <p className="text-white font-bold text-3xl">{lessonId[0]?.title}</p>
          <p className="text-slate-200 tracking-wide mt-3">
            {lessonId[0]?.description}
          </p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 mt-4">
              <Timer className="text-white h-5 w-5" />
              <p className="text-slate-300">
                {learningContent[0]?.estimatedTime} mins
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Target className="text-white h-5 w-5" />
              <p className="text-slate-300">Module 1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonTitle;
