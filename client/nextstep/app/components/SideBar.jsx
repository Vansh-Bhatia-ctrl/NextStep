"use client";
import { BookOpen, TargetIcon, TrendingUp, Users } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const OPTIONS = [
  {
    id: 1,
    icon: TrendingUp,
    label: "Overview",
    selectedRoute: "/dashboard/overview",
    route: "/overview",
  },
  {
    id: 2,
    icon: BookOpen,
    label: "Roadmaps",
    selectedRoute: "/dashboard/roadmaps",
    route: "/roadmaps",
  },
  {
    id: 3,
    icon: TargetIcon,
    label: "Progress",
    selectedRoute: "/dashboard/progress",
    route: "/progress",
  },
  {
    id: 4,
    icon: Users,
    label: "Professionals",
    selectedRoute: "/dashboard/professionals",
    route: "/professionals",
  },
];

const SideBar = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard/roadmaps/")) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-y-0 left-0 bg-transparent w-[270px] mt-15 hidden md:flex md:flex-col p-3 md:gap-2 pt-8">
        {OPTIONS.map((option) => {
          const Icon = option.icon;

          return (
            <Link href={`/dashboard/${option.route}`} key={option.id}>
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`text-white flex items-center gap-4 p-4 rounded-xl font-semibold transition-all duration-300 w-full ${
                  pathname === option.selectedRoute
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-600/25"
                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                <Icon color="#fff" />
                {option.label}
              </motion.button>
            </Link>
          );
        })}
        <div>
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-6 rounded-xl border border-cyan-700 mt-13">
            <div>
              <p className="text-white font-semibold text-lg tracking-wide">
                Learning Streak
              </p>

              <div className="flex items-center gap-2">
                <div className="flex gap-1 mt-4">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-9 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full"
                    />
                  ))}
                  <div className="flex items-center gap-2">
                    <p className="text-white text-3xl font-bold ml-4">15</p>
                    <p className="text-slate-300 font-light">days</p>
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

export default SideBar;
