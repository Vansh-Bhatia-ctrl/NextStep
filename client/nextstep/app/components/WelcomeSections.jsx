"use client";
import { motion } from "framer-motion";

const WelcomeSections = () => {
  return (
    <>
      <div className="mt-3">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white"
        >
          <div className="flex items-center gap-3 justify-between">
            <div>
              <p className="font-bold text-2xl md:text-3xl xl:text-4xl text-start">
                Welcome back, Vansh!
              </p>
              <p className="text-sm lg:text-lg text-gray-300 text-start">
                Ready to take your next step in learning?
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold whitespace-nowrap text-end">
                67 %
              </p>
              <p className="font-semibold text-gray-300 lg:text-lg text-end">
                Overall Porgress
              </p>
            </div>
          </div>

          <div className="bg-white/20 rounded-full h-2 mt-3">
            <div className="bg-white w-[67%] h-full rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default WelcomeSections;
