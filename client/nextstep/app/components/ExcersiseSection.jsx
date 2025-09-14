"use client";
import React from "react";
import { motion } from "framer-motion";

const HINTS = [
  "Start with <!DOCTYPE html>",
  "Use <h1> for the heading",
  "Use <a href='url'> for the link",
];

const ExcersiseSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, duration: 300 }}
        animate={{ opacity: 1, y: 0 }}
        className=""
      >
        <div className="bg-custom-gray-700 p-4 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between">
            <p className="text-white text-lg font-semibold">
              Create a Basic HTML Page
            </p>
            <span className="bg-green-300 px-2 py-1 rounded-xl text-green-800 text-sm ">
              easy
            </span>
          </div>
          <div className="mt-4">
            <p className="text-slate-100/80 tracking-wide text-sm md:text-lg">
              Write HTML code to create a webpage with a heading, paragraph, and
              a link.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-white/50">Hints:</p>
            {HINTS.map((hint, index) => (
              <p key={index} className="text-white/50 text-sm font-light mt-2">
                💡{hint}
              </p>
            ))}
          </div>
          <div className="mt-4">
            <div className="bg-custom-gray-600 rounded-xl p-4">
              <div>
                <p className="text-sm text-white/50 font-semibold">
                  Your Solution:
                </p>
                <textarea
                  className="bg-custom-gray-700 w-full rounded-md h-40 mt-4 placeholder:text-white/60 placeholder:text-sm font-mono p-4 text-white border border-slate-700 focus:border-blue-500 focus:outline-none"
                  placeholder="Write your code here..."
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-blue-600 text-white/90 p-2 rounded-xl cursor-pointer hover:bg-blue-500 transition-colors duration-300 ease-in-out">
              Submit
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ExcersiseSection;
