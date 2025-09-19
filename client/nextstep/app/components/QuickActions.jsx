"use client";
import React from "react";
import { BookOpen, Play, Users } from "lucide-react";
import { motion } from "framer-motion";

const QuickActions = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mt-4"
      >
        <div className="bg-blue-500/10 rounded-lg border border-blue-500/20 p-5">
          <div>
            <p className="text-white">Quick Actions</p>
          </div>
          <div className="mt-3 space-y-3">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors">
              <Play color="#fff" size={20} />
              Continue Learning
            </button>

            <button className="w-full bg-gray-600 hover:bg-gray-500 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors">
              <BookOpen color="#fff" size={20} />
              View Resources
            </button>

            <button className="w-full border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors">
              <Users color="#fff" size={20} />
              Join Discussion
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default QuickActions;
