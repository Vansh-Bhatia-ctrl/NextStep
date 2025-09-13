"use client";
import { Book } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Explanation = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, duration: 300 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-custom-gray-700 p-4 rounded-xl border border-gray-800"
      >
        <div className="flex items-center gap-3">
          <Book color="#fff" size={21} />
          <p className="text-white text-xl font-bold">Explanation</p>
        </div>
        <div className="mt-4">
          <p className="text-slate-400 text-start tracking-wide">
            HTML (HyperText Markup Language) is the standard language for
            creating webpages. It uses tags to structure content, such as
            headings, paragraphs, and links.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Explanation;
