"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  TrendingUp,
  BookOpen,
  MessageCircle,
  Users,
  Award,
  Target,
  ChevronRight,
  Send,
  MapPin,
  Calendar,
  CheckCircle,
  Circle,
  Star,
  ArrowUp,
  Brain,
  Rocket,
  Trophy,
  X,
  Menu,
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock user data
  const userData = {
    name: "Alex Johnson",
    level: "Intermediate",
    progress: 67,
    completedModules: 12,
    totalModules: 18,
    streak: 15,
    points: 2450,
  };

  const roadmaps = [
    {
      level: "Beginner",
      title: "Foundation Builder",
      progress: 85,
      modules: 8,
      completed: 7,
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
      description: "Master the fundamentals",
    },
    {
      level: "Intermediate",
      title: "Skill Enhancer",
      progress: 67,
      modules: 12,
      completed: 8,
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
      description: "Build practical expertise",
    },
    {
      level: "Advanced",
      title: "Expert Path",
      progress: 15,
      modules: 15,
      completed: 2,
      icon: <Trophy className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
      description: "Achieve mastery",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      action: "Completed",
      item: "React Hooks Module",
      time: "2h ago",
      type: "completion",
    },
    {
      id: 2,
      action: "Started",
      item: "State Management Course",
      time: "1d ago",
      type: "start",
    },
    {
      id: 3,
      action: "Earned",
      item: "Problem Solver Badge",
      time: "3d ago",
      type: "achievement",
    },
    {
      id: 4,
      action: "Connected with",
      item: "Sarah Chen (Senior Developer)",
      time: "5d ago",
      type: "connection",
    },
  ];

  const nearbyProfessionals = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Developer",
      company: "TechCorp",
      distance: "2.3 km",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      distance: "3.1 km",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "UX Designer",
      company: "DesignStudio",
      distance: "4.2 km",
      rating: 4.7,
    },
  ];

  const chatMessages = [
    {
      id: 1,
      type: "ai",
      message: "Hello! How can I help you with your learning journey today?",
    },
    { id: 2, type: "user", message: "I want to improve my React skills" },
    {
      id: 3,
      type: "ai",
      message:
        "Great! Based on your intermediate level, I recommend starting with the State Management module. Would you like me to create a personalized study plan?",
    },
  ];

  const sidebarItems = [
    {
      id: "overview",
      icon: <TrendingUp className="w-5 h-5" />,
      label: "Overview",
    },
    {
      id: "roadmaps",
      icon: <BookOpen className="w-5 h-5" />,
      label: "Roadmaps",
    },
    { id: "progress", icon: <Target className="w-5 h-5" />, label: "Progress" },
    {
      id: "professionals",
      icon: <Users className="w-5 h-5" />,
      label: "Professionals",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 px-6 py-4 sticky top-0 z-40"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
            <h1 className="text-2xl font-bold text-white">NextStep</h1>
            <div className="hidden md:flex items-center space-x-2 px-3 py-1 bg-blue-600/20 rounded-full">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">
                {userData.level}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">{userData.points}</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </motion.header>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          {(isMobileMenuOpen || window.innerWidth >= 768) && (
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="fixed md:sticky top-0 md:top-[88px] left-0 h-screen md:h-[calc(100vh-88px)] w-64 bg-slate-800/50 backdrop-blur-sm border-r border-slate-700 z-30 md:z-10"
            >
              <div className="p-6 pt-20 md:pt-6">
                <nav className="space-y-2">
                  {sidebarItems.map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeTab === item.id
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                          : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </nav>

                <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/20">
                  <h3 className="text-white font-semibold mb-2">
                    Learning Streak
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-6 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full"
                        />
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-white">
                      {userData.streak}
                    </span>
                    <span className="text-slate-300 text-sm">days</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 p-6 md:ml-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto"
          >
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Welcome Section */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">
                        Welcome back, {userData.name}!
                      </h2>
                      <p className="text-blue-100">
                        Ready to take your next step in learning?
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold">
                        {userData.progress}%
                      </div>
                      <div className="text-sm text-blue-100">
                        Overall Progress
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-white/20 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${userData.progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
                      title: "Modules Completed",
                      value: `${userData.completedModules}/${userData.totalModules}`,
                    },
                    {
                      icon: <Award className="w-8 h-8 text-yellow-400" />,
                      title: "Points Earned",
                      value: userData.points,
                    },
                    {
                      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
                      title: "Learning Streak",
                      value: `${userData.streak} days`,
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-slate-700 rounded-lg">
                          {stat.icon}
                        </div>
                        <div>
                          <h3 className="text-slate-300 text-sm">
                            {stat.title}
                          </h3>
                          <p className="text-white text-2xl font-bold">
                            {stat.value}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <motion.div
                  variants={itemVariants}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                >
                  <h3 className="text-white text-xl font-bold mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    {recentActivities.map((activity) => (
                      <motion.div
                        key={activity.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: activity.id * 0.1 }}
                        className="flex items-center space-x-4 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            activity.type === "completion"
                              ? "bg-green-400"
                              : activity.type === "start"
                              ? "bg-blue-400"
                              : activity.type === "achievement"
                              ? "bg-yellow-400"
                              : "bg-purple-400"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-white">
                            <span className="text-slate-300">
                              {activity.action}
                            </span>{" "}
                            {activity.item}
                          </p>
                          <p className="text-slate-400 text-sm">
                            {activity.time}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === "roadmaps" && (
              <div className="space-y-6">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl font-bold text-white"
                >
                  Learning Roadmaps
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {roadmaps.map((roadmap, index) => (
                    <motion.div
                      key={roadmap.level}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -10 }}
                      className={`bg-gradient-to-br ${roadmap.color} rounded-2xl p-6 text-white relative overflow-hidden`}
                    >
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-2 bg-white/20 rounded-lg">
                            {roadmap.icon}
                          </div>
                          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                            {roadmap.level}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {roadmap.title}
                        </h3>
                        <p className="text-white/80 mb-4">
                          {roadmap.description}
                        </p>
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>
                              {roadmap.completed}/{roadmap.modules}
                            </span>
                          </div>
                          <div className="bg-white/20 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${roadmap.progress}%` }}
                              transition={{ duration: 1.5, delay: index * 0.2 }}
                              className="h-full bg-white rounded-full"
                            />
                          </div>
                        </div>
                        <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg py-3 font-semibold transition-colors flex items-center justify-center space-x-2">
                          <span>Continue Learning</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "professionals" && (
              <div className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-between"
                >
                  <h2 className="text-3xl font-bold text-white">
                    Nearby Professionals
                  </h2>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <MapPin className="w-5 h-5" />
                    <span>Delhi, India</span>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nearbyProfessionals.map((professional, index) => (
                    <motion.div
                      key={professional.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">
                            {professional.name}
                          </h3>
                          <p className="text-slate-300 text-sm">
                            {professional.role}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <p className="text-slate-400 text-sm">
                          {professional.company}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-300">
                            {professional.distance} away
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white">
                              {professional.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                        Connect
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </main>
      </div>

      {/* Chat Widget */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 z-50"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <h3 className="text-white font-semibold">
                AI Learning Assistant
              </h3>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-64 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      msg.type === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-700 text-slate-200"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-slate-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-slate-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/25 z-40"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
