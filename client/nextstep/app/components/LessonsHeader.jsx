"use client";
import React from "react";
import { BookOpen, Bot, HelpCircle, Target } from "lucide-react";
import { motion } from "framer-motion";
import useUiStore from "../store/useUiStore";

const OPTIONS = [
  {
    id: 1,
    icon: BookOpen,
    label: "Content",
  },
  {
    id: 2,
    icon: Target,
    label: "Exercise",
  },
  {
    id: 3,
    icon: HelpCircle,
    label: "Quiz",
  },
  {
    id: 4,
    icon: Bot,
    label: "AI Assistant",
  },
];

const LessonsHeader = () => {
  const { selectedOption, setOptions } = useUiStore();
  return (
    <>
      <div className="bg-custom-gray-200 p-3 border-b border-slate-600">
        <div className="flex items-center gap-8 w-full overflow-x-auto sm:gap-8 md:max-w-7xl md:mx-auto md:justify-around">
          {OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedOption === opt.id;

            return (
              <div
                key={opt.id}
                onClick={() => setOptions(opt.id)}
                className="flex items-center gap-2 flex-shrink-0 cursor-pointer relative z-10 p-3 rounded-xl transition-colors"
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-slate-800 border-2 border-blue-400 rounded-xl"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}

                <Icon
                  className={`relative z-20 ${
                    isSelected ? "text-blue-400" : "text-slate-400"
                  }`}
                />
                <p
                  className={`relative z-20 ${
                    isSelected
                      ? "text-blue-400 font-semibold"
                      : "text-slate-400"
                  }`}
                >
                  {opt.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LessonsHeader;
