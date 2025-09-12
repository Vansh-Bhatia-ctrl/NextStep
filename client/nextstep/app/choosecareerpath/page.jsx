"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  Brain,
  Server,
  Gamepad2,
  Smartphone,
  Shield,
  Database,
  Cloud,
  Palette,
  Star,
  Timer,
} from "lucide-react";
import { useAuth, useUser } from "@clerk/nextjs";
import Link from "next/link";

const PATHS = [
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "Build the future of the web",
    description:
      "Create responsive websites and web applications using modern frameworks",
    icon: Code2,
    gradient: "from-blue-500 via-blue-600 to-indigo-700",
    avgSalary: "$75,000",
    skills: ["React", "JavaScript", "Node.js", "CSS", "HTML"],
    duration: "6-12 months",
  },
  {
    id: "ai-ml",
    title: "AI/Machine Learning",
    subtitle: "Shape the intelligence of tomorrow",
    description:
      "Develop intelligent systems and algorithms that can learn and adapt",
    icon: Brain,
    gradient: "from-purple-500 via-purple-600 to-pink-700",
    avgSalary: "$120,000",
    skills: ["Python", "TensorFlow", "PyTorch", "Statistics", "Deep Learning"],
    duration: "12-18 months",
  },
  {
    id: "devops",
    title: "DevOps Engineering",
    subtitle: "Bridge development and operations",
    description:
      "Streamline software delivery through automation and infrastructure management",
    icon: Server,
    gradient: "from-teal-500 via-cyan-600 to-blue-700",
    avgSalary: "$105,000",
    skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"],
    duration: "8-14 months",
  },
  {
    id: "game-dev",
    title: "Game Development",
    subtitle: "Create immersive gaming experiences",
    description: "Design and develop engaging games across various platforms",
    icon: Gamepad2,
    gradient: "from-orange-500 via-red-600 to-pink-700",
    avgSalary: "$85,000",
    skills: ["Unity", "C#", "Unreal Engine", "3D Modeling", "Game Design"],
    duration: "10-16 months",
  },
  {
    id: "mobile-dev",
    title: "Mobile Development",
    subtitle: "Build apps for billions of users",
    description: "Create native and cross-platform mobile applications",
    icon: Smartphone,
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    avgSalary: "$90,000",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "iOS/Android"],
    duration: "8-12 months",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    subtitle: "Protect digital assets and privacy",
    description:
      "Safeguard systems and networks from cyber threats and attacks",
    icon: Shield,
    gradient: "from-red-500 via-red-600 to-orange-700",
    avgSalary: "$110,000",
    skills: [
      "Ethical Hacking",
      "Network Security",
      "Cryptography",
      "Risk Assessment",
    ],
    duration: "10-15 months",
  },
  {
    id: "data-science",
    title: "Data Science",
    subtitle: "Extract insights from data",
    description:
      "Analyze complex data to drive business decisions and predictions",
    icon: Database,
    gradient: "from-violet-500 via-purple-600 to-indigo-700",
    avgSalary: "$115,000",
    skills: ["Python", "R", "SQL", "Machine Learning", "Statistics"],
    duration: "12-16 months",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    subtitle: "Build scalable cloud solutions",
    description: "Design and manage cloud infrastructure and services",
    icon: Cloud,
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    avgSalary: "$100,000",
    skills: ["AWS", "Azure", "GCP", "Microservices", "Serverless"],
    duration: "6-10 months",
  },
  {
    id: "ux-ui",
    title: "UX/UI Design",
    subtitle: "Craft beautiful user experiences",
    description: "Design intuitive and visually appealing user interfaces",
    icon: Palette,
    gradient: "from-pink-500 via-rose-600 to-purple-700",
    avgSalary: "$80,000",
    skills: [
      "Figma",
      "Adobe XD",
      "User Research",
      "Prototyping",
      "Design Systems",
    ],
    duration: "4-8 months",
  },
];

const page = () => {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pathInfo, setPathInfo] = useState();

  const saveCareerPath = async (careerPath) => {
    try {
      const token = await getToken();

      if (!isLoaded || !user) return;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/api/savecareer/careerpath`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            careerPath: careerPath,
          }),
        }
      );

      if (!response.ok) {
        return console.log("Error submiting the request.");
      }

      const data = await response.json();
    } catch (error) {
      console.log("Something went wrong, please try again", error.message);
    }
  };

  return (
    <>
      <div className="pt-18 min-h-screen w-screen bg-custom-gray-100 overflow-x-hidden">
        {/*Header section*/}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20 p-6 sm:max-w-2xl sm:mx-auto"
        >
          <p className=" text-center font-extrabold text-4xl tracking-wide bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            Choose Your IT Career Path
          </p>
          <p className="text-slate-300 font-semibold text-center mt-4">
            Discover the perfect technology career that matches your interests
            and goals. Each path is designed to take you from beginner to
            professional.
          </p>
        </motion.div>

        {/*Career paths*/}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mt-5 p-3 grid grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:max-w-6xl md:mx-auto xl:max-w-[1400px] xl:mx-auto"
        >
          {PATHS.map((path) => {
            const Icon = path.icon;
            return (
              <div
                onClick={() => {
                  setModalIsOpen(true);
                  setPathInfo(path);
                }}
                key={path.id}
                className={`bg-gradient-to-br ${path.gradient} p-4 rounded-xl hover:scale-103 transition-all duration-300 ease-in cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <div className="bg-white/30 p-2 rounded-lg">
                    <Icon color="#fff" size={30} className="" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg text-end">
                      {path.title}
                    </p>
                    <p className="text-slate-300 font-light text-end">
                      {path.subtitle}
                    </p>
                  </div>
                </div>
                <div className="mt-5 max-w-[27  0px] mx-auto">
                  <p className="text-white text-center">{path.description}</p>
                </div>
                <div className="mt-3">
                  <div className="bg-white/20 p-3 rounded-lg text-slate-200 flex items-center justify-around">
                    <p className="">Average Salary: </p>
                    <p>{path.avgSalary}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-2">
                    <div>
                      <Star color="#fff" size={16} className="" />
                    </div>
                    <div>
                      <p className="text-white font-light text-sm">
                        Key Skills
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    {path.skills.slice(0, 3).map((skill, index) => (
                      <div
                        key={index}
                        className="bg-white/30 p-2 text-white rounded-lg text-[12px]"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <Timer color="#fff" />
                    <p className="text-slate-300 text-sm font-light">
                      {path.duration}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {modalIsOpen && (
            <div
              onClick={() => setModalIsOpen(false)}
              className="fixed inset-0 backdrop-blur-md pt-18 flex items-center justify-center"
            >
              <div className="p-4">
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    scale: 0.98,
                    transition: { duration: 0.18 },
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className={`bg-gradient-to-br ${pathInfo.gradient} p-6 rounded-xl`}
                >
                  <div>
                    <div className="text-center">
                      <div className="bg-white/30 inline-block p-2 rounded-xl">
                        <Code2 color="#fff" size={30} />
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <p className="text-2xl font-bold text-white">
                        {pathInfo.title}
                      </p>
                      <p className="text-white/80">{pathInfo.description}</p>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div>
                        <p className="text-white text-lg font-semibold text-center">
                          {pathInfo.avgSalary}
                        </p>
                        <p className="text-white/80 font-semibold">
                          Average Salary
                        </p>
                      </div>

                      <div>
                        <p className="text-white text-lg font-semibold text-center">
                          {pathInfo.duration}
                        </p>
                        <p className="text-white/80 font-semibold">
                          Learning Duration
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-4">
                      <div className="sm:w-[100%]">
                        <Link href="/dashboard/overview">
                          <button
                            onClick={() => saveCareerPath(pathInfo.title)}
                            className="bg-white p-3 rounded-xl font-semibold hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer sm:w-full"
                          >
                            Choose
                          </button>
                        </Link>
                      </div>
                      <div>
                        <button
                          onClick={() => setModalIsOpen(false)}
                          className="bg-white/40 p-3 rounded-xl font-semibold text-white hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default page;
