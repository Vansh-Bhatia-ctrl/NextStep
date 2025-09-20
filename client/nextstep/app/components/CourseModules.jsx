"use client";
import React, { useEffect } from "react";
import { ChevronRight, CircleCheckBig, Timer } from "lucide-react";
import { motion } from "framer-motion";
import useModuleStore from "../store/useModulesStore";
import { useAuth, useUser } from "@clerk/nextjs";
import useUserDomain from "../store/useUserDomain";

const COMPLETED_COURSES = [
  {
    id: 1,
    label: "Introduction to CSS",
    description:
      "Understand the role of CSS in web development, its syntax, and how to apply styles to HTML elements.",
    time: "30 mins",
  },
  {
    id: 2,
    label: "CSS Selectors",
    description:
      "Learn how to target HTML elements using CSS selectors, including type, class, ID, and advanced combinators.",
    time: "45 mins",
  },
];

const COURSES = [
  {
    id: 1,
    courseNumber: "3",
    label: "The Box Model",
    description:
      "Master the CSS box model to control spacing, borders, and layout of web elements.",
    time: "50 min",
  },
  {
    id: 2,
    courseNumber: "4",
    label: "Colors in CSS",
    description:
      "Explore CSS color systems, including named colors, hex, RGB, and HSL, for vibrant designs.",
    time: "40 min",
  },
  {
    id: 3,
    courseNumber: "5",
    label: "Typography in CSS",
    description:
      "Control text appearance with CSS typography properties like font-family, font-size, and line-height.",
    time: "50 min",
  },
  {
    id: 4,
    courseNumber: "6",
    label: "Applying CSS to a Project",
    description:
      "Combine CSS selectors, box model, colors, and typography to style and deploy a styled web page.",
    time: "75 min",
  },
];

const CourseModules = ({ level }) => {
  const { getLearningContent } = useModuleStore();
  const { getToken, isSignedIn } = useAuth();
  const { clearCache, fetchDomain } = useUserDomain();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const getData = async () => {
      const token = await getToken();
      if (!user || !isLoaded) return;
      await getLearningContent(token, level);
    };

    getData();
  }, [getLearningContent, isLoaded]);

  useEffect(() => {
    const setDomainCache = async () => {
      const token = await getToken();
      if (!isSignedIn) {
        clearCache();
      } else {
        fetchDomain(token);
      }
    };

    setDomainCache();
  }, [isSignedIn, clearCache]);

  if (!isLoaded) {
    return <div className="text-white">Loading user...</div>;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className=" mt-4"
      >
        <div>
          <p className="text-white font-bold text-xl">Lessons</p>
        </div>

        <div className="mt-4">
          <div className="space-y-4">
            {COMPLETED_COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-green-500/10 rounded-lg border border-green-500/20 p-5 cursor-pointer"
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="bg-green-500 p-2 rounded-full flex items-start">
                    <CircleCheckBig color="#fff" />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="text-white text-lg font-semibold">
                        {course.label}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {course.description}
                      </p>
                      <div className="flex items-center gap-6 mt-4">
                        <div className="flex items-center gap-2">
                          <Timer color="#64748b" className="w-5 h-5" />
                          <p className="text-slate-500 text-sm">
                            {course.time}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <CircleCheckBig color="#22c55e" className="w-5 h-5" />
                          <p className="text-green-500 text-sm">Completed</p>
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      color="#64748b"
                      className="w-10 h-10 md:w-7 md:h-7"
                    />
                  </div>
                </div>
              </div>
            ))}

            {COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-blue-500/10 rounded-lg border border-blue-500/20 p-5 cursor-pointer hover:bg-blue-400/20 transition-colors duration-200 ease-in"
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="bg-slate-500 px-3 py-[5px] h-9 w-9 rounded-full">
                    <p className="text-slate-300">{course.courseNumber}</p>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="text-white text-lg font-semibold">
                        {course.label}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {course.description}
                      </p>
                      <div className="flex items-center gap-6 mt-4">
                        <div className="flex items-center gap-2">
                          <Timer color="#64748b" className="w-5 h-5" />
                          <p className="text-slate-500 text-sm">
                            {course.time}
                          </p>
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      color="#64748b"
                      className="w-10 h-10 md:w-7 md:h-7"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CourseModules;
