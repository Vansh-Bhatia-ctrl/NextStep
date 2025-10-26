"use client";
import React, { useEffect } from "react";
import { ChevronRight, CircleCheckBig, Timer } from "lucide-react";
import { motion } from "framer-motion";
import useModuleStore from "../store/useModulesStore";
import { useAuth, useUser } from "@clerk/nextjs";
import useUserDomain from "../store/useUserDomain";
import Link from "next/link";

const CourseModules = ({ level }) => {
  const {
    getLearningContent,
    loading,
    lessons,
    modules,
    index,
    learningContent,
  } = useModuleStore();
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
      console.log(`token: ${token}`);

      if (!isSignedIn) {
        clearCache();
      } else {
        fetchDomain(token);
      }
    };

    setDomainCache();
  }, [isSignedIn, clearCache]);

  const moduleSpecificLessons = lessons.filter(
    (l) => l.moduleId === modules[index]?._id
  );

  const timeMap = {};
  learningContent.forEach((content) => {
    timeMap[content.lessonId] = content.estimatedTime;
  });

  if (loading) {
    return <div className="text-white">Loading</div>;
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
            {moduleSpecificLessons.map((course) => (
              <Link
                href={`/dashboard/roadmaps/${level}/${course._id}`}
                key={course._id}
                className="flex flex-col"
              >
                <div className="bg-blue-500/10 rounded-lg border border-blue-500/20 p-5 cursor-pointer hover:bg-blue-400/20 transition-colors duration-200 ease-in">
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="bg-slate-500 px-3 py-[5px] h-9 w-9 rounded-full">
                      <p className="text-slate-300">{course.order}</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <p className="text-white text-lg font-semibold">
                          {course.title}
                        </p>
                        <p className="text-slate-400 text-sm">
                          {course.description}
                        </p>
                        <div className="flex items-center gap-6 mt-4">
                          <div className="flex items-center gap-2">
                            <Timer color="#64748b" className="w-5 h-5" />
                            <p className="text-slate-500 text-sm">
                              {timeMap[course._id] || 0} mins
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
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CourseModules;
