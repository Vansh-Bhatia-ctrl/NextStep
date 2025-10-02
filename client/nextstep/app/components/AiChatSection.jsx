"use client";
import React from "react";
import { Bot, Send, User } from "lucide-react";
import { motion } from "framer-motion";

const AiChatSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-custom-gray-300 p-4">
          <div className="flex items-center gap-2 lg:max-w-7xl lg:mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
              <Bot color="#fff" />
            </div>
            <div>
              <p className="text-white text-xl font-semibold">AI Assistant</p>
              <p className="text-slate-300 text-sm">Always here to help</p>
            </div>
          </div>
        </div>
        <div className="h-[350px] w-full mt-4 p-3 lg:max-w-7xl lg:mx-auto overflow-y-auto">
          <div className="flex items-start gap-2">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
              <Bot color="#fff" />
            </div>
            <div>
              <p className="text-white text-sm bg-transparent border border-slate-600 rounded-xl p-3">
                Hi! I'm your AI learning assistant. I can help you with
                questions about your courses, clarify concepts, or guide you
                through exercises. How can I assist you today?
              </p>
              <p className="text-slate-400 text-sm font-light mt-2">7:30 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-2 mt-5 justify-end mb-3">
            <div className="flex flex-col items-end">
              <p className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-sm rounded-xl p-3">
                Hi! My name is Vansh.
              </p>
              <p className="text-slate-400 text-sm font-light mt-2">7:30 PM</p>
            </div>
            <div className="bg-custom-gray-400 p-2 rounded-xl">
              <User color="#fff" />
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
              <Bot color="#fff" />
            </div>
            <div>
              <p className="text-white text-sm bg-transparent border border-slate-600 rounded-xl p-3">
                Hi! I'm your AI learning assistant. I can help you with
                questions about your courses, clarify concepts, or guide you
                through exercises. How can I assist you today?
              </p>
              <p className="text-slate-400 text-sm font-light mt-2">7:30 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-2 mt-5 justify-end mb-3">
            <div className="flex flex-col items-end">
              <p className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-sm rounded-xl p-3">
                Hi! My name is Vansh.
              </p>
              <p className="text-slate-400 text-sm font-light mt-2">7:30 PM</p>
            </div>
            <div className="bg-custom-gray-400 p-2 rounded-xl">
              <User color="#fff" />
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
              <Bot color="#fff" />
            </div>
            <div>
              <p className="text-white text-sm bg-transparent border border-slate-600 rounded-xl p-3">
                Hi! I'm your AI learning assistant. I can help you with
                questions about your courses, clarify concepts, or guide you
                through exercises. How can I assist you today?
              </p>
              <p className="text-slate-400 text-sm font-light mt-2">7:30 PM</p>
            </div>
          </div>
        </div>

        <div className="p-4 lg:max-w-7xl lg:mx-auto">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask your doubt here..."
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-slate-500 text-white"
              />
              <button className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-gradient-to-br from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/20">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AiChatSection;
