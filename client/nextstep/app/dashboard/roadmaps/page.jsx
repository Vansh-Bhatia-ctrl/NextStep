"use client";
import React from "react";
import { ChevronRight, BookOpen, Target, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const ROADMAPS = [
  {
    id: 1,
    level: "Beginner",
    title: "Foundation Builder",
    modules: 8,
    completed: 7,
    icon: <BookOpen color="#fff" className="w-6 h-6" />,
    color: "from-blue-500 to-blue-700",
    description: "Master the fundamentals",
  },
  {
    id: 2,
    level: "Intermediate",
    title: "Skill Enhancer",
    modules: 12,
    completed: 8,
    icon: <Target color="#fff" className="w-6 h-6" />,
    color: "from-purple-500 to-purple-700",
    description: "Build practical expertise",
  },
  {
    id: 3,
    level: "Advanced",
    title: "Expert Path",
    modules: 15,
    completed: 2,
    icon: <Trophy color="#fff" className="w-6 h-6" />,
    color: "from-cyan-400 to-cyan-600",
    description: "Achieve mastery",
  },
];
const page = () => {
  return (
    <>
      <div className="md:ml-[280px]">
        <div className="">
          <div className="p-2">
            {/*Heading Section*/}
            <div className="text-center md:text-start">
              <p className="text-white text-3xl font-extrabold">
                Learning Roadmaps
              </p>
            </div>

            {/*Roadmap Card*/}
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-4 xl:grid-cols-3">
              {ROADMAPS.map((roadmap) => (
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  key={roadmap.id}
                  className={`bg-gradient-to-br ${roadmap.color} p-4 mt-8 rounded-xl hover:scale-103 transition-all duration-300 ease-in-out `}
                >
                  <div className="flex justify-between items-center">
                    <div className="bg-white/40 p-2 rounded-xl">
                      {roadmap.icon}
                    </div>

                    <div className="bg-blue-300 p-2 rounded-3xl">
                      <p className="text-white text-sm">{roadmap.level}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="space-y-2">
                      <p className="text-white text-xl font-bold">
                        {roadmap.title}
                      </p>
                      <p className="text-white/80 text-md">
                        {roadmap.description}
                      </p>
                    </div>
                    <div className="mt-5">
                      <div className="flex justify-between items-center">
                        <p className="text-white text-sm">Progress</p>
                        <p className="text-white text-sm">7/8</p>
                      </div>
                      <div className="mt-3 w-full">
                        <div className="bg-white/30 w-full rounded-2xl">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80%" }}
                            transition={{ duration: 1.5, delay: 0.3 }}
                            className="h-3 w-[80%] bg-slate-200 rounded-2xl"
                          ></motion.div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-4 w-full">
                      <button className="flex items-center justify-center gap-2 text-white font-semibold bg-white/30 p-3 w-full rounded-xl hover:bg-white/50 transition-all duration-300 ease-in cursor-pointer">
                        Continue Learning
                        <ChevronRight color="#fff" className="" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
