"use client";
import { Code } from "lucide-react";
import React from "react";

const CodeExampleSection = ({ learningContent }) => {
  return (
    <>
      <div className="mt-6">
        <div className="bg-custom-gray-300 p-6 lg:p-8 border border-slate-700 rounded-xl">
          <div className="flex items-center gap-3">
            <Code className="text-green-600" />
            <p className="text-white font-semibold text-xl lg:text-2xl">
              Code Example
            </p>
          </div>

          <div>
            {learningContent[0]?.examples.map((ex, index) => (
              <pre
                key={index}
                className="text-white flex flex-col whitespace-pre-wrap break-words"
              >
                <code className="mt-4 text-green-300">{ex}</code>
              </pre>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeExampleSection;
