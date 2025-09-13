"use client";
import React from "react";
import { motion } from "framer-motion";

const CODE = `<!DOCTYPE html>
<html>
<head>
  <title>My First Webpage</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first webpage.</p>
</body>
</html>`;

const ExampleSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, duration: 300 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-custom-gray-700 p-4 rounded-xl border border-gray-800"
      >
        <div>
          <p className="text-white font-bold text-xl tracking-wide">Example</p>
        </div>
        <div className="mt-2">
          <div className="bg-custom-gray-600 p-3 rounded-xl">
            <code className="text-green-400 text-sm md:text-md whitespace-pre">
              {CODE}
            </code>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ExampleSection;
