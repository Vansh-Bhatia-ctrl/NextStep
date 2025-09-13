"use client";
import React from "react";
import { ExternalLink, Play } from "lucide-react";
import { motion } from "framer-motion";

const RESOURCES = [
  {
    id: 1,
    label: "MDN HTML Basics",
    icon: ExternalLink,
    miniLabel: "Article",
    color: "#3B82F6",
  },
  {
    id: 2,
    label: "HTML Introduction Video",
    icon: Play,
    miniLabel: "Video",
    color: "#EF4444",
  },
];

const ResourcesSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, duration: 300 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-custom-gray-700 p-4 rounded-xl border border-gray-800"
      >
        <div className="">
          <p className="text-white text-xl font-bold tracking-wide">
            Resources
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-2">
          {RESOURCES.map((resource) => {
            const Icon = resource.icon;
            return (
              <div key={resource.id} className="mt-4">
                <a className="bg-white/10 p-4 flex items-center gap-6 rounded-xl hover:bg-white/20 transition-colors duration-300 ease-in-out cursor-pointer hover:text-yellow-400 text-white">
                  <div className="flex items-center gap-4">
                    <Icon color={resource.color} />
                    <div>
                      <p className="">{resource.label}</p>
                      <p className="text-white/30 font-light text-sm">
                        {resource.miniLabel}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default ResourcesSection;
