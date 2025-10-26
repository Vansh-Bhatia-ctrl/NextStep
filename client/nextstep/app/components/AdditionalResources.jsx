"use client";
import { ExternalLink } from "lucide-react";
import React from "react";

const AdditionalResources = ({ learningContent }) => {
  return (
    <>
      <div className="mt-6">
        <div className="bg-custom-gray-300 p-6 lg:p-8 border border-slate-700 rounded-xl">
          <div className="flex items-center gap-3">
            <ExternalLink className="text-blue-400" />
            <p className="text-white font-semibold text-xl lg:text-2xl">
              Additional Resources
            </p>
          </div>

          <div className="mt-4">
            <div className="md:grid md:grid-cols-2 md:gap-x-10 space-y-6">
              {learningContent[0]?.resources.map((res, index) => (
                <div
                  key={index}
                  className=" flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <a
                      href={res.url}
                      target="_blank"
                      className="text-blue-500 md:text-lg"
                    >
                      {res?.title}
                    </a>
                    <p className="text-slate-500">{res?.type}</p>
                  </div>
                  <div className="">
                    <ExternalLink className="text-slate-400 w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalResources;
