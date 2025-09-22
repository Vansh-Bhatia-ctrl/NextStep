"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import useModuleStore from "../store/useModulesStore";

const PrevAndNextBttns = () => {
  const { handleNextIndex, index, moduleSpecificLessons, handlePreviousIndex } =
    useModuleStore();
 

  const firstModule = index === 0;

  return (
    <>
      <div className="mt-7 text-center flex items-center justify-center gap-4">
        <button
          onClick={handlePreviousIndex}
          disabled={index === 0}
          className={`text-slate-300 bg-white/20 px-5 py-2 rounded-lg flex items-center hover:bg-white/10 transition-colors duration-300 ease-in ${
            firstModule ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <ChevronLeft />
          Previous
        </button>

        <button
          onClick={handleNextIndex}
          className="cursor-pointer text-slate-300 bg-blue-600 px-5 py-2 rounded-lg flex items-center hover:bg-blue-800 transition-colors duration-300 ease-in"
        >
          Next
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default PrevAndNextBttns;
