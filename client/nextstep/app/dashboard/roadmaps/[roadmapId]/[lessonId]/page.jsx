"use client";
import useModuleStore from "@/app/store/useModulesStore";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  BookOpen,
  Bot,
  Code,
  ExternalLink,
  HelpCircle,
  Lightbulb,
  Play,
  Target,
  Timer,
} from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const OPTIONS = [
  {
    id: 1,
    icon: BookOpen,
    label: "Content",
  },
  {
    id: 2,
    icon: Target,
    label: "Exercise",
  },
  {
    id: 3,
    icon: HelpCircle,
    label: "Quiz",
  },
  {
    id: 4,
    icon: Bot,
    label: "AI Assistant",
  },
];
const page = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const { learningContent, lessons, modules, index } = useModuleStore();
  const params = useParams();
  const lessonId = params.lessonId;

  const lessonSpecificLearningContent = learningContent.filter(
    (lc) => lc.lessonId === lessonId
  );

  const lessonSpecificLessonId = lessons.filter((li) => li._id === lessonId);

  console.log(
    "page specific learning content: ",
    lessonSpecificLearningContent,
    lessonSpecificLessonId
  );
  return (
    <>
      <div>
        <div>
          <div>
            <div className="bg-custom-gray-200 p-3 border-b border-slate-600">
              <div className="flex items-center gap-8 w-full overflow-x-auto sm:gap-8 md:max-w-7xl md:mx-auto md:justify-around">
                {OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedOption === opt.id;

                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedOption(opt.id)}
                      className="flex items-center gap-2 flex-shrink-0 cursor-pointer relative z-10 p-3 rounded-xl transition-colors"
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-slate-800 border-2 border-blue-400 rounded-xl"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}

                      <Icon
                        className={`relative z-20 ${
                          isSelected ? "text-blue-400" : "text-slate-400"
                        }`}
                      />
                      <p
                        className={`relative z-20 ${
                          isSelected
                            ? "text-blue-400 font-semibold"
                            : "text-slate-400"
                        }`}
                      >
                        {opt.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-4">
              <div className="lg:max-w-7xl lg:mx-auto">
                <div>
                  <p className="text-slate-400 text-center">
                    {modules[index]?.title}
                  </p>
                </div>
                <div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl mt-4">
                    <p className="text-white font-bold text-3xl">
                      What is the web?
                    </p>
                    <p className="text-slate-200 tracking-wide mt-3">
                      High-level overview: websites, web apps, clients and
                      servers.
                    </p>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-2 mt-4">
                        <Timer className="text-white h-5 w-5" />
                        <p className="text-slate-300">30 mins</p>
                      </div>

                      <div className="flex items-center gap-2 mt-4">
                        <Target className="text-white h-5 w-5" />
                        <p className="text-slate-300">Module 1</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Explanation Section*/}
                <div className="mt-6">
                  <div className="bg-custom-gray-300 p-6 lg:p-8 border border-slate-700 rounded-xl">
                    <div className="flex items-center gap-3">
                      <BookOpen className="text-blue-600" />
                      <p className="text-white font-semibold text-xl lg:text-2xl">
                        Explanation
                      </p>
                    </div>
                    <div className="mt-3 tracking-wide">
                      <p className="text-slate-200">
                        The web is a network of servers and clients. Servers
                        host resources (HTML, CSS, JS, images) and clients
                        (browsers) request them over protocols such as
                        HTTP/HTTPS. Websites are collections of linked pages;
                        web applications are interactive programs running in the
                        browser, often communicating with servers via APIs.
                      </p>
                    </div>
                  </div>
                </div>

                {/*Code Examples Section*/}
                <div className="mt-6">
                  <div className="bg-custom-gray-300 p-6 lg:p-8 border border-slate-700 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Code className="text-green-600" />
                      <p className="text-white font-semibold text-xl lg:text-2xl">
                        Code Example
                      </p>
                    </div>

                    <div>
                      <pre className="text-white flex flex-col whitespace-pre-wrap break-words">
                        <code className="mt-4 text-green-300">
                          A static blog where each page is HTML files served
                          from a server.
                        </code>
                        <code className="mt-4 text-green-300">
                          A web app like Google Docs that talks to a backend to
                          save documents.
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/*Real-World Application Section*/}
                <div className="mt-6">
                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 lg:p-8 border border-purple-500/30 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Play className="text-purple-600" />
                      <p className="text-white font-semibold text-xl lg:text-2xl">
                        Real World Application
                      </p>
                    </div>

                    <div>
                      <p className="mt-4 text-slate-300">
                        Understanding this distinction helps you design whether
                        a feature is client-only (UI) or requires backend
                        services (data, auth).
                      </p>
                    </div>
                  </div>
                </div>

                {/*Learning Tips Section*/}
                <div className="mt-6">
                  <div>
                    <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 lg:p-8">
                      <div className="flex items-center gap-3">
                        <Lightbulb className="text-yellow-400" />
                        <p className="text-white font-semibold text-xl lg:text-2xl">
                          Learning Tips
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="text-slate-300">
                          Start by thinking in terms of resources and requests.
                          The browser asks for a URL; the server returns
                          content. This mental model simplifies debugging and
                          architecture decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Common Mistakes Section*/}
                <div className="mt-6">
                  <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-2xl p-6 lg:p-8">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="text-red-400" />
                      <p className="text-white font-semibold text-xl lg:text-2xl">
                        Common Mistakes
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <div className="h-2 w-2 rounded-xl bg-red-400 flex-shrink-0"></div>
                      <div>
                        <p className="text-white text-sm">
                          Confusing websites with web servers (they are related
                          but different).
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="h-2 w-2 rounded-xl bg-red-400 flex-shrink-0"></div>
                      <div>
                        <p className="text-white text-sm">
                          Assuming every UI change requires a server change.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Additional Resources Section*/}
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
                        <div className=" flex items-center justify-between">
                          <div>
                            <p className="text-blue-500 md:text-lg">
                              MDN — How the Web Works
                            </p>
                            <p className="text-slate-500">Article</p>
                          </div>
                          <div className="">
                            <ExternalLink className="text-slate-400 w-4 h-4" />
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <div>
                            <p className="text-blue-500 md:text-lg">
                              MDN — How the Web Works
                            </p>
                            <p className="text-slate-500">Article</p>
                          </div>
                          <div className="">
                            <ExternalLink className="text-slate-400 w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
