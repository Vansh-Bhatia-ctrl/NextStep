"use client";
import { BookOpen } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import useUserDomain from "../store/useUserDomain";
import useModuleStore from "../store/useModulesStore";

const CourseNavbar = () => {
  const { domain } = useUserDomain();
  const { modules, index } = useModuleStore();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-custom-gray-200 min-w-screen p-4"
      >
        <div className="flex items-center justify-between lg:max-w-7xl lg:mx-auto">
          <div className="flex items-center gap-2 w-[60%]">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full">
              <BookOpen color="#fff" />
            </div>
            <div>
              <p className="text-slate-300 font-light">{domain}</p>
              <p className="text-white font-semibold text-lg">
                {modules[index]?.title}
              </p>
            </div>
          </div>

          <div>
            <div className="text-end">
              <p className="text-blue-400 font-semibold">0%</p>
              <p className="text-slate-400">Porgress</p>
            </div>
            <div>
              <div className="bg-white/20 rounded-full h-2 w-19 mt-3 sm:w-37 md:w-40 lg:w-50">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="bg-blue-600 w-[0%] h-full rounded-full"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CourseNavbar;
