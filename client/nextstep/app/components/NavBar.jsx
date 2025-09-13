"use client";
import { useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Menu, TrendingUp, X, BookOpen, TargetIcon, Users } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";

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

const NavBar = () => {
  const { userId, isLoaded } = useAuth();
  const pathname = usePathname();
  const [sideBarIsOpen, setSidebarIsOpen] = useState(false);

  if (!isLoaded) {
    return <p className="">Loading...</p>;
  }

  return (
    <>
      <div>
        <div className="fixed top-0 left-0 right-0 h-auto z-50 bg-custom-gray-100 p-5 min-w-screen">
          <div className=" flex flex-row items-center justify-between">
            <div className="flex  items-center gap-2">
              {pathname !== "/signin" && pathname !== "/signup" && (
                <Menu
                  onClick={() => setSidebarIsOpen(true)}
                  color="#fff"
                  className="sm:hidden cursor-pointer"
                />
              )}
              <Link href="/">
                <p className="text-white font-extrabold text-2xl">
                  Next<span className="text-blue-400">Step</span>
                </p>
              </Link>
            </div>

            {pathname !== "/onboarding" && userId && (
              <div className="hidden text-gray-300 font-bold sm:flex sm:flex-row gap-5 text-md">
                <Link href="/" className="hover:text-gray-100">
                  Home
                </Link>
                <Link href="" className="hover:text-gray-100">
                  About
                </Link>
                <Link href="" className="hover:text-gray-100">
                  Contact
                </Link>
              </div>
            )}

            {pathname !== "/signin" && pathname !== "/signup" && !userId ? (
              <div>
                <button className="text-white bg-blue-600 font-semibold p-2 rounded-xl hover:bg-blue-500 transition-all duration-200 ease-in-out">
                  <Link href="/signin">Sign In</Link>
                </button>
              </div>
            ) : (
              <SignedIn>
                <UserButton />
              </SignedIn>
            )}
          </div>

          {/*Mobile Sidebar*/}
          <AnimatePresence>
            {sideBarIsOpen && (
              <div className="sm:hidden fixed inset-0 bg-black/30 ">
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  exit={{ x: "-100%" }}
                  className="bg-custom-gray-200 h-screen w-60 pt-4 px-4"
                >
                  {/*Header section*/}
                  <div className="flex items-center justify-between">
                    <p className="text-white font-extrabold text-2xl">
                      Next<span className="text-blue-400">Step</span>
                    </p>
                    <X
                      onClick={() => setSidebarIsOpen(false)}
                      color="#fff"
                      className="cursor-pointer"
                    />
                  </div>

                  {/*Main content section*/}
                  <div className="mt-6 space-y-4">
                    {OPTIONS.map((option) => {
                      const Icon = option.icon;
                      return (
                        <Link
                          href={option.selectedRoute}
                          onClick={() => setSidebarIsOpen(false)}
                          key={option.id}
                        >
                          <div
                            className={`flex items-center justify-start gap-4 p-3 mt-4 rounded-xl ${
                              pathname === option.selectedRoute ||
                              pathname.startsWith(option.selectedRoute)
                                ? "bg-blue-600 text-white shadow-xl shadow-blue-600/25"
                                : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                            }`}
                          >
                            <Icon color="#fff" size={20} />
                            <p className="text-white font-semibold">
                              {option.label}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-6 rounded-xl border border-cyan-700 mt-9">
                    <div>
                      <p className="text-white font-semibold text-lg tracking-wide">
                        Learning Streak
                      </p>

                      <div className="flex items-center gap-2">
                        <div className="flex gap-1 mt-4">
                          {[...Array(7)].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-8 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full"
                            />
                          ))}
                          <div className="flex items-center gap-2">
                            <p className="text-white text-2xl font-bold ml-4">
                              15
                            </p>
                            <p className="text-slate-300 text-sm font-light">
                              days
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-white flex gap-4 mt-19 px-4">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default NavBar;
