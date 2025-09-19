"use client";
import React from "react";
import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const LearningInsights = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mt-4"
      >
        <div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6">
            <div className="flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
              <p className="text-white">Learning Tips</p>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-xl bg-yellow-500"></div>
                <div>
                  <p className="text-white text-sm">
                    Practice each CSS property with real examples
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-xl bg-yellow-500"></div>
                <div>
                  <p className="text-white text-sm">
                    Use browser DevTools to experiment with styles
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-xl bg-yellow-500"></div>
                <div>
                  <p className="text-white text-sm">
                    Build small projects to reinforce learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LearningInsights;
