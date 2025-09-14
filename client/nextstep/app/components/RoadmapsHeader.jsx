"use client";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import React from "react";
import useUiStore from "../store/useUiStore";
import CourseContentHeader from "./CourseContentHeader";
import ExampleSection from "./ExampleSection";
import Explanation from "./Explanation";
import CommonMistakesandExpertInsight from "./CommonMistakesandExpertInsight";
import ResourcesSection from "./ResourcesSection";
import ExcersiseSection from "./ExcersiseSection";
import QuizSection from "./QuizSection";

const RoadmapsHeader = () => {
  const { options, selectedOption, setOptions } = useUiStore();
  return (
    <>
      <div className="bg-custom-gray-200">
        <div className="flex items-center justify-between border-b border-slate-700 p-4">
          <ArrowRight color="#fff" className="md:w-7 md:h-7 cursor-pointer" />
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <p className="text-slate-400">0% Complete</p>
            </div>
            <button className="bg-white/30 px-4 py-1 lg:py-3 md:py-2 rounded-xl sm:flex sm:items-center hover:bg-white/40 transition-colors duration-300 ease-in cursor-pointer">
              <ChevronLeft color="#cbd5e1" size={23} />
              <p className="hidden sm:block text-white">Previous</p>
            </button>
            <button className="bg-blue-600 px-4 py-1 lg:py-3 md:py-2 rounded-xl sm:flex sm:items-end hover:bg-blue-500 transition-colors duration-300 ease-in cursor-pointer">
              <p className="hidden sm:block text-white">Next</p>
              <ChevronRight color="#cbd5e1" size={23} />
            </button>
          </div>
        </div>

        <div className="p-4 flex items-center justify-between border-b border-slate-700 md:flex md:items-center md:justify-center md:gap-16">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <div
                onClick={() => setOptions(option.id)}
                key={option.id}
                className={`flex items-center gap-2 ${
                  selectedOption === option.id
                    ? "text-blue-500"
                    : "text-white/70"
                } transition-colors duration-300 ease-in cursor-pointer hover:text-white`}
              >
                <Icon />
                <p className="">{option.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/*Content Section*/}
      {selectedOption === 1 && (
        <div className="mt-4 p-2 lg:max-w-5xl lg:mx-auto xl:max-w-[1470px] xl:mx-auto">
          <CourseContentHeader />
          <div className="mt-6">
            <Explanation />
          </div>
          <div className="mt-6">
            <ExampleSection />
          </div>
          <div className="mt-6">
            <CommonMistakesandExpertInsight />
          </div>

          <div className="mt-6">
            <ResourcesSection />
          </div>
        </div>
      )}

      {/*Excersice Section*/}
      {selectedOption === 2 && (
        <div className="mt-4 p-2 lg:max-w-5xl lg:mx-auto xl:max-w-[1470px] xl:mx-auto">
          <ExcersiseSection />
        </div>
      )}

      {selectedOption === 3 && (
        <div className="mt-4 p-2 lg:max-w-5xl lg:mx-auto xl:max-w-[1470px] xl:mx-auto">
          <QuizSection />
        </div>
      )}
    </>
  );
};

export default RoadmapsHeader;
