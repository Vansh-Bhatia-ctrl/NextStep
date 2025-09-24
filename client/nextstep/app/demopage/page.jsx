// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   User,
//   TrendingUp,
//   BookOpen,
//   MessageCircle,
//   Users,
//   Award,
//   Target,
//   ChevronRight,
//   Send,
//   MapPin,
//   Calendar,
//   CheckCircle,
//   Circle,
//   Star,
//   ArrowUp,
//   Brain,
//   Rocket,
//   Trophy,
//   X,
//   Menu,
// } from "lucide-react";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [chatMessage, setChatMessage] = useState("");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Mock user data
//   const userData = {
//     name: "Alex Johnson",
//     level: "Intermediate",
//     progress: 67,
//     completedModules: 12,
//     totalModules: 18,
//     streak: 15,
//     points: 2450,
//   };

//   const roadmaps = [
//     {
//       level: "Beginner",
//       title: "Foundation Builder",
//       progress: 85,
//       modules: 8,
//       completed: 7,
//       icon: <BookOpen className="w-6 h-6" />,
//       color: "from-green-400 to-green-600",
//       description: "Master the fundamentals",
//     },
//     {
//       level: "Intermediate",
//       title: "Skill Enhancer",
//       progress: 67,
//       modules: 12,
//       completed: 8,
//       icon: <Target className="w-6 h-6" />,
//       color: "from-blue-400 to-blue-600",
//       description: "Build practical expertise",
//     },
//     {
//       level: "Advanced",
//       title: "Expert Path",
//       progress: 15,
//       modules: 15,
//       completed: 2,
//       icon: <Trophy className="w-6 h-6" />,
//       color: "from-purple-400 to-purple-600",
//       description: "Achieve mastery",
//     },
//   ];

//   const recentActivities = [
//     {
//       id: 1,
//       action: "Completed",
//       item: "React Hooks Module",
//       time: "2h ago",
//       type: "completion",
//     },
//     {
//       id: 2,
//       action: "Started",
//       item: "State Management Course",
//       time: "1d ago",
//       type: "start",
//     },
//     {
//       id: 3,
//       action: "Earned",
//       item: "Problem Solver Badge",
//       time: "3d ago",
//       type: "achievement",
//     },
//     {
//       id: 4,
//       action: "Connected with",
//       item: "Sarah Chen (Senior Developer)",
//       time: "5d ago",
//       type: "connection",
//     },
//   ];

//   const nearbyProfessionals = [
//     {
//       id: 1,
//       name: "Sarah Chen",
//       role: "Senior Developer",
//       company: "TechCorp",
//       distance: "2.3 km",
//       rating: 4.9,
//     },
//     {
//       id: 2,
//       name: "Mike Rodriguez",
//       role: "Product Manager",
//       company: "StartupXYZ",
//       distance: "3.1 km",
//       rating: 4.8,
//     },
//     {
//       id: 3,
//       name: "Emily Davis",
//       role: "UX Designer",
//       company: "DesignStudio",
//       distance: "4.2 km",
//       rating: 4.7,
//     },
//   ];

//   const chatMessages = [
//     {
//       id: 1,
//       type: "ai",
//       message: "Hello! How can I help you with your learning journey today?",
//     },
//     { id: 2, type: "user", message: "I want to improve my React skills" },
//     {
//       id: 3,
//       type: "ai",
//       message:
//         "Great! Based on your intermediate level, I recommend starting with the State Management module. Would you like me to create a personalized study plan?",
//     },
//   ];

//   const sidebarItems = [
//     {
//       id: "overview",
//       icon: <TrendingUp className="w-5 h-5" />,
//       label: "Overview",
//     },
//     {
//       id: "roadmaps",
//       icon: <BookOpen className="w-5 h-5" />,
//       label: "Roadmaps",
//     },
//     { id: "progress", icon: <Target className="w-5 h-5" />, label: "Progress" },
//     {
//       id: "professionals",
//       icon: <Users className="w-5 h-5" />,
//       label: "Professionals",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { duration: 0.6, staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       {/* Header */}
//       <motion.header
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 px-6 py-4 sticky top-0 z-40"
//       >
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
//             >
//               <Menu className="w-5 h-5 text-white" />
//             </button>
//             <h1 className="text-2xl font-bold text-white">NextStep</h1>
//             <div className="hidden md:flex items-center space-x-2 px-3 py-1 bg-blue-600/20 rounded-full">
//               <Brain className="w-4 h-4 text-blue-400" />
//               <span className="text-sm text-blue-300 font-medium">
//                 {userData.level}
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2 text-white">
//               <Star className="w-5 h-5 text-yellow-400" />
//               <span className="font-semibold">{userData.points}</span>
//             </div>
//             <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
//               <User className="w-6 h-6 text-white" />
//             </div>
//           </div>
//         </div>
//       </motion.header>

//       <div className="flex">
//         {/* Sidebar */}
//         <AnimatePresence>
//           {(isMobileMenuOpen || window.innerWidth >= 768) && (
//             <motion.aside
//               initial={{ x: -300, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -300, opacity: 0 }}
//               className="fixed md:sticky top-0 md:top-[88px] left-0 h-screen md:h-[calc(100vh-88px)] w-64 bg-slate-800/50 backdrop-blur-sm border-r border-slate-700 z-30 md:z-10"
//             >
//               <div className="p-6 pt-20 md:pt-6">
//                 <nav className="space-y-2">
//                   {sidebarItems.map((item) => (
//                     <motion.button
//                       key={item.id}
//                       whileHover={{ x: 4 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => {
//                         setActiveTab(item.id);
//                         setIsMobileMenuOpen(false);
//                       }}
//                       className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
//                         activeTab === item.id
//                           ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
//                           : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
//                       }`}
//                     >
//                       {item.icon}
//                       <span className="font-medium">{item.label}</span>
//                     </motion.button>
//                   ))}
//                 </nav>

//                 <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/20">
//                   <h3 className="text-white font-semibold mb-2">
//                     Learning Streak
//                   </h3>
//                   <div className="flex items-center space-x-2">
//                     <div className="flex space-x-1">
//                       {[...Array(5)].map((_, i) => (
//                         <div
//                           key={i}
//                           className="w-2 h-6 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full"
//                         />
//                       ))}
//                     </div>
//                     <span className="text-2xl font-bold text-white">
//                       {userData.streak}
//                     </span>
//                     <span className="text-slate-300 text-sm">days</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.aside>
//           )}
//         </AnimatePresence>

//         {/* Main Content */}
//         <main className="flex-1 p-6 md:ml-0">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="max-w-7xl mx-auto"
//           >
//             {activeTab === "overview" && (
//               <div className="space-y-6">
//                 {/* Welcome Section */}
//                 <motion.div
//                   variants={itemVariants}
//                   className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h2 className="text-3xl font-bold mb-2">
//                         Welcome back, {userData.name}!
//                       </h2>
//                       <p className="text-blue-100">
//                         Ready to take your next step in learning?
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-4xl font-bold">
//                         {userData.progress}%
//                       </div>
//                       <div className="text-sm text-blue-100">
//                         Overall Progress
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-4 bg-white/20 rounded-full h-2">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${userData.progress}%` }}
//                       transition={{ duration: 1.5, ease: "easeOut" }}
//                       className="h-full bg-white rounded-full"
//                     />
//                   </div>
//                 </motion.div>

//                 {/* Stats Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   {[
//                     {
//                       icon: <BookOpen className="w-8 h-8 text-blue-400" />,
//                       title: "Modules Completed",
//                       value: `${userData.completedModules}/${userData.totalModules}`,
//                     },
//                     {
//                       icon: <Award className="w-8 h-8 text-yellow-400" />,
//                       title: "Points Earned",
//                       value: userData.points,
//                     },
//                     {
//                       icon: <TrendingUp className="w-8 h-8 text-green-400" />,
//                       title: "Learning Streak",
//                       value: `${userData.streak} days`,
//                     },
//                   ].map((stat, index) => (
//                     <motion.div
//                       key={index}
//                       variants={itemVariants}
//                       whileHover={{ scale: 1.02, y: -5 }}
//                       className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
//                     >
//                       <div className="flex items-center space-x-4">
//                         <div className="p-3 bg-slate-700 rounded-lg">
//                           {stat.icon}
//                         </div>
//                         <div>
//                           <h3 className="text-slate-300 text-sm">
//                             {stat.title}
//                           </h3>
//                           <p className="text-white text-2xl font-bold">
//                             {stat.value}
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Recent Activity */}
//                 <motion.div
//                   variants={itemVariants}
//                   className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
//                 >
//                   <h3 className="text-white text-xl font-bold mb-4">
//                     Recent Activity
//                   </h3>
//                   <div className="space-y-3">
//                     {recentActivities.map((activity) => (
//                       <motion.div
//                         key={activity.id}
//                         initial={{ x: -20, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: activity.id * 0.1 }}
//                         className="flex items-center space-x-4 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
//                       >
//                         <div
//                           className={`w-3 h-3 rounded-full ${
//                             activity.type === "completion"
//                               ? "bg-green-400"
//                               : activity.type === "start"
//                               ? "bg-blue-400"
//                               : activity.type === "achievement"
//                               ? "bg-yellow-400"
//                               : "bg-purple-400"
//                           }`}
//                         />
//                         <div className="flex-1">
//                           <p className="text-white">
//                             <span className="text-slate-300">
//                               {activity.action}
//                             </span>{" "}
//                             {activity.item}
//                           </p>
//                           <p className="text-slate-400 text-sm">
//                             {activity.time}
//                           </p>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               </div>
//             )}

//             {activeTab === "roadmaps" && (
//               <div className="space-y-6">
//                 <motion.h2
//                   variants={itemVariants}
//                   className="text-3xl font-bold text-white"
//                 >
//                   Learning Roadmaps
//                 </motion.h2>
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                   {roadmaps.map((roadmap, index) => (
//                     <motion.div
//                       key={roadmap.level}
//                       variants={itemVariants}
//                       whileHover={{ scale: 1.02, y: -10 }}
//                       className={`bg-gradient-to-br ${roadmap.color} rounded-2xl p-6 text-white relative overflow-hidden`}
//                     >
//                       <div className="relative z-10">
//                         <div className="flex items-center justify-between mb-4">
//                           <div className="p-2 bg-white/20 rounded-lg">
//                             {roadmap.icon}
//                           </div>
//                           <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
//                             {roadmap.level}
//                           </span>
//                         </div>
//                         <h3 className="text-xl font-bold mb-2">
//                           {roadmap.title}
//                         </h3>
//                         <p className="text-white/80 mb-4">
//                           {roadmap.description}
//                         </p>
//                         <div className="mb-4">
//                           <div className="flex justify-between text-sm mb-2">
//                             <span>Progress</span>
//                             <span>
//                               {roadmap.completed}/{roadmap.modules}
//                             </span>
//                           </div>
//                           <div className="bg-white/20 rounded-full h-2">
//                             <motion.div
//                               initial={{ width: 0 }}
//                               animate={{ width: `${roadmap.progress}%` }}
//                               transition={{ duration: 1.5, delay: index * 0.2 }}
//                               className="h-full bg-white rounded-full"
//                             />
//                           </div>
//                         </div>
//                         <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg py-3 font-semibold transition-colors flex items-center justify-center space-x-2">
//                           <span>Continue Learning</span>
//                           <ChevronRight className="w-4 h-4" />
//                         </button>
//                       </div>
//                       <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === "professionals" && (
//               <div className="space-y-6">
//                 <motion.div
//                   variants={itemVariants}
//                   className="flex items-center justify-between"
//                 >
//                   <h2 className="text-3xl font-bold text-white">
//                     Nearby Professionals
//                   </h2>
//                   <div className="flex items-center space-x-2 text-slate-300">
//                     <MapPin className="w-5 h-5" />
//                     <span>Delhi, India</span>
//                   </div>
//                 </motion.div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {nearbyProfessionals.map((professional, index) => (
//                     <motion.div
//                       key={professional.id}
//                       variants={itemVariants}
//                       whileHover={{ scale: 1.02, y: -5 }}
//                       className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
//                     >
//                       <div className="flex items-center space-x-4 mb-4">
//                         <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
//                           <User className="w-6 h-6 text-white" />
//                         </div>
//                         <div>
//                           <h3 className="text-white font-semibold">
//                             {professional.name}
//                           </h3>
//                           <p className="text-slate-300 text-sm">
//                             {professional.role}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="space-y-2 mb-4">
//                         <p className="text-slate-400 text-sm">
//                           {professional.company}
//                         </p>
//                         <div className="flex items-center justify-between text-sm">
//                           <span className="text-slate-300">
//                             {professional.distance} away
//                           </span>
//                           <div className="flex items-center space-x-1">
//                             <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                             <span className="text-white">
//                               {professional.rating}
//                             </span>
//                           </div>
//                         </div>
//                       </div>

//                       <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
//                         Connect
//                       </button>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </main>
//       </div>

//       {/* Chat Widget */}
//       <AnimatePresence>
//         {isChatOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 100, scale: 0.8 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 100, scale: 0.8 }}
//             className="fixed bottom-24 right-6 w-80 h-96 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 z-50"
//           >
//             <div className="flex items-center justify-between p-4 border-b border-slate-700">
//               <h3 className="text-white font-semibold">
//                 AI Learning Assistant
//               </h3>
//               <button
//                 onClick={() => setIsChatOpen(false)}
//                 className="text-slate-400 hover:text-white transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="h-64 p-4 overflow-y-auto space-y-3">
//               {chatMessages.map((msg) => (
//                 <div
//                   key={msg.id}
//                   className={`flex ${
//                     msg.type === "user" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   <div
//                     className={`max-w-xs p-3 rounded-lg ${
//                       msg.type === "user"
//                         ? "bg-blue-600 text-white"
//                         : "bg-slate-700 text-slate-200"
//                     }`}
//                   >
//                     {msg.message}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="p-4 border-t border-slate-700">
//               <div className="flex space-x-2">
//                 <input
//                   type="text"
//                   value={chatMessage}
//                   onChange={(e) => setChatMessage(e.target.value)}
//                   placeholder="Ask me anything..."
//                   className="flex-1 bg-slate-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
//                   <Send className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Chat Button */}
//       <motion.button
//         onClick={() => setIsChatOpen(!isChatOpen)}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/25 z-40"
//       >
//         <MessageCircle className="w-6 h-6 text-white" />
//       </motion.button>

//       {/* Mobile overlay */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-20 md:hidden"
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Dashboard;
















// "use client"
// import React from "react";
// import { motion } from "framer-motion";

// const UniversalLoading = ({ 
//   width = "w-full", 
//   height = "h-16", 
//   rounded = "rounded-lg",
//   className = "",
//   showText = false,
//   text = "Loading...",
//   intensity = "medium" // "low", "medium", "high"
// }) => {
//   // Different glow intensities based on your app's theme
//   const glowIntensities = {
//     low: "shadow-lg shadow-blue-500/10",
//     medium: "shadow-xl shadow-blue-500/20",
//     high: "shadow-2xl shadow-blue-500/30"
//   };

//   const pulseVariants = {
//     initial: { 
//       opacity: 0.4,
//       scale: 0.95,
//       boxShadow: "0 0 0 rgba(59, 130, 246, 0)"
//     },
//     animate: { 
//       opacity: [0.4, 0.8, 0.4],
//       scale: [0.95, 1.02, 0.95],
//       boxShadow: [
//         "0 0 0 rgba(59, 130, 246, 0)",
//         "0 0 30px rgba(59, 130, 246, 0.3)",
//         "0 0 0 rgba(59, 130, 246, 0)"
//       ]
//     }
//   };

//   const shimmerVariants = {
//     initial: { x: "-100%" },
//     animate: { x: "100%" }
//   };

//   return (
//     <div className={`${width} ${className}`}>
//       <motion.div
//         className={`
//           ${height} 
//           ${rounded} 
//           bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50
//           border border-slate-600/30
//           relative 
//           overflow-hidden
//           ${glowIntensities[intensity]}
//         `}
//         variants={pulseVariants}
//         initial="initial"
//         animate="animate"
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       >
//         {/* Main shimmer effect */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
//           variants={shimmerVariants}
//           initial="initial"
//           animate="animate"
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 0.2
//           }}
//         />
        
//         {/* Secondary subtle shimmer */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent"
//           variants={shimmerVariants}
//           initial="initial"
//           animate="animate"
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 0.8
//           }}
//         />

//         {/* Content area with subtle pattern */}
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-slate-900/20" />
        
//         {/* Optional loading text */}
//         {showText && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <motion.span
//               className="text-slate-400 text-sm font-medium"
//               animate={{ opacity: [0.5, 1, 0.5] }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             >
//               {text}
//             </motion.span>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// // Preset configurations for common use cases
// export const LoadingCard = ({ className = "" }) => (
//   <UniversalLoading 
//     width="w-full" 
//     height="h-32" 
//     rounded="rounded-xl"
//     intensity="medium"
//     className={className}
//   />
// );

// export const LoadingButton = ({ className = "" }) => (
//   <UniversalLoading 
//     width="w-full" 
//     height="h-12" 
//     rounded="rounded-lg"
//     intensity="low"
//     className={className}
//   />
// );

// export const LoadingBanner = ({ className = "" }) => (
//   <UniversalLoading 
//     width="w-full" 
//     height="h-24" 
//     rounded="rounded-2xl"
//     intensity="high"
//     showText={true}
//     text="Loading content..."
//     className={className}
//   />
// );

// export const LoadingAvatar = ({ className = "" }) => (
//   <UniversalLoading 
//     width="w-12" 
//     height="h-12" 
//     rounded="rounded-full"
//     intensity="low"
//     className={className}
//   />
// );

// export const LoadingText = ({ width = "w-32", className = "" }) => (
//   <UniversalLoading 
//     width={width} 
//     height="h-4" 
//     rounded="rounded"
//     intensity="low"
//     className={className}
//   />
// );

// // Demo component showing various usage examples
// const LoadingDemo = () => (
//   <div className="min-h-screen bg-slate-900 p-8 space-y-8">
//     <div className="max-w-4xl mx-auto space-y-8">
      
//       {/* Header */}
//       <div className="text-center space-y-2">
//         <h1 className="text-3xl font-bold text-white">Universal Loading States</h1>
//         <p className="text-slate-400">Consistent loading experience across your learning platform</p>
//       </div>

//       {/* Card Loading Examples */}
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold text-white">Course Cards</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <LoadingCard />
//           <LoadingCard />
//           <LoadingCard />
//         </div>
//       </div>

//       {/* List Item Loading */}
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold text-white">Lesson List</h2>
//         <div className="space-y-3">
//           {[1, 2, 3, 4].map((i) => (
//             <div key={i} className="flex items-center gap-4">
//               <LoadingAvatar />
//               <div className="flex-1 space-y-2">
//                 <LoadingText width="w-48" />
//                 <LoadingText width="w-32" />
//               </div>
//               <LoadingButton className="w-24" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Banner Loading */}
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold text-white">Module Header</h2>
//         <LoadingBanner />
//       </div>

//       {/* Custom Sizes */}
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold text-white">Custom Sizes</h2>
//         <div className="space-y-4">
//           <UniversalLoading width="w-full" height="h-8" rounded="rounded" intensity="low" />
//           <UniversalLoading width="w-2/3" height="h-16" rounded="rounded-lg" intensity="medium" />
//           <UniversalLoading width="w-1/2" height="h-24" rounded="rounded-xl" intensity="high" />
//         </div>
//       </div>

//       {/* Progress Indicators */}
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold text-white">Progress & Stats</h2>
//         <div className="grid grid-cols-3 gap-4">
//           <UniversalLoading width="w-full" height="h-20" rounded="rounded-lg" intensity="medium" />
//           <UniversalLoading width="w-full" height="h-20" rounded="rounded-lg" intensity="medium" />
//           <UniversalLoading width="w-full" height="h-20" rounded="rounded-lg" intensity="medium" />
//         </div>
//       </div>

//       {/* Full Page Loading */}
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold text-white">Page Loading</h2>
//         <UniversalLoading 
//           width="w-full" 
//           height="h-96" 
//           rounded="rounded-2xl"
//           intensity="high"
//           showText={true}
//           text="Loading your learning dashboard..."
//         />
//       </div>

//     </div>
//   </div>
// );

// export default LoadingDemo;
// export { UniversalLoading };




















//ACTUAL COURSE CONTENT  PAGE
"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Target,
  HelpCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
  Play,
  Code,
  Lightbulb,
  AlertTriangle,
  ExternalLink,
  CheckCircle,
  XCircle,
  Eye,
  EyeOff,
  Copy,
  Check
} from 'lucide-react';

const LessonContentPage = () => {
  const [activeTab, setActiveTab] = useState('content');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [exerciseCompleted, setExerciseCompleted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sample lesson data based on your JSON structure
  const lessonData = {
    title: "Introduction to CSS",
    description: "Understand the role of CSS in web development, its syntax, and how to apply styles to HTML elements.",
    estimatedTime: 30,
    moduleInfo: "Module 1",
    
    // Content Tab Data
    explanation: "CSS (Cascading Style Sheets) is the language used to style and layout web pages, controlling their visual appearance. It works alongside HTML to define how elements look, from colors and fonts to positioning and spacing. CSS rules consist of selectors that target elements and declarations that define styles. This lesson covers CSS syntax, ways to apply CSS (inline, internal, external), the cascade and specificity, and its role in modern web development. You'll learn how CSS integrates with HTML to create visually appealing, user-friendly interfaces and sets the foundation for responsive design.",
    
    examples: [
      "h1 { color: blue; font-size: 24px; }",
      "<link rel=\"stylesheet\" href=\"styles.css\">"
    ],
    
    realWorldApplication: "CSS is used in every website to style layouts, from simple blogs to complex e-commerce platforms, ensuring consistent and attractive designs.",
    
    expertInsights: "Always use external stylesheets for maintainability. Understand the cascade to avoid specificity conflicts, and prefer classes over IDs for reusable styles.",
    
    commonMistakes: [
      "Overusing !important, leading to specificity issues.",
      "Not separating CSS from HTML, causing maintenance challenges."
    ],
    
    resources: [
      {
        title: "MDN — CSS Basics",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
        type: "article"
      },
      {
        title: "CSS Tricks — Complete Guide",
        url: "https://css-tricks.com/guides/beginner/",
        type: "guide"
      }
    ],

    // Exercise Tab Data
    exercises: [
      {
        title: "Apply Basic CSS",
        prompt: "Create an HTML page with a heading and paragraph, and use an external CSS file to style the heading blue and the paragraph with a 16px font size.",
        difficulty: "easy",
        hints: [
          "Use a <link> tag to connect the CSS file",
          "Target elements with type selectors"
        ],
        solution: "HTML: <h1>Title</h1><p>Text</p>\nCSS: h1 { color: blue; } p { font-size: 16px; }"
      }
    ],

    // Quiz Tab Data
    quiz: [
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style System", "Content Style Sheets", "Cascading Script System"],
        correctOption: [0],
        explanation: "CSS stands for Cascading Style Sheets, which describes how the styles cascade down and apply to HTML elements."
      },
      {
        question: "How do you apply an external CSS file?",
        options: ["<style>", "<script>", "<link>", "<css>"],
        correctOption: [2],
        explanation: "The <link> tag is used to connect external CSS files to HTML documents."
      },
      {
        question: "Which of the following are valid CSS selectors? (Multiple answers)",
        options: [".class-name", "#id-name", "element-name", "::pseudo-element"],
        correctOption: [0, 1, 2, 3],
        explanation: "All of these are valid CSS selectors: class selectors (.), ID selectors (#), element selectors, and pseudo-element selectors (::)."
      }
    ]
  };

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    const currentAnswers = selectedAnswers[questionIndex] || [];
    const question = lessonData.quiz[questionIndex];
    
    if (question.correctOption.length > 1) {
      // Multiple choice
      if (currentAnswers.includes(optionIndex)) {
        setSelectedAnswers({
          ...selectedAnswers,
          [questionIndex]: currentAnswers.filter(i => i !== optionIndex)
        });
      } else {
        setSelectedAnswers({
          ...selectedAnswers,
          [questionIndex]: [...currentAnswers, optionIndex]
        });
      }
    } else {
      // Single choice
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: [optionIndex]
      });
    }
  };

  const checkQuizResults = () => {
    setShowResults(true);
  };

  const isAnswerCorrect = (questionIndex) => {
    const userAnswers = selectedAnswers[questionIndex] || [];
    const correctAnswers = lessonData.quiz[questionIndex].correctOption;
    
    return userAnswers.length === correctAnswers.length && 
           userAnswers.every(answer => correctAnswers.includes(answer));
  };

  const getScorePercentage = () => {
    const correctAnswers = lessonData.quiz.filter((_, index) => isAnswerCorrect(index)).length;
    return Math.round((correctAnswers / lessonData.quiz.length) * 100);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: 'content', label: 'Content', icon: BookOpen },
    { id: 'exercise', label: 'Exercise', icon: Target },
    { id: 'quiz', label: 'Quiz', icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#0b1120]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <div className="text-sm text-gray-400">
                <span>CSS Essentials</span> • <span>{lessonData.moduleInfo}</span>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Lesson Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-6">
            <h1 className="text-3xl font-bold mb-2">{lessonData.title}</h1>
            <p className="text-blue-100 mb-4">{lessonData.description}</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{lessonData.estimatedTime} mins</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span className="text-sm">{lessonData.moduleInfo}</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-t-lg flex items-center space-x-2 transition-all ${
                    activeTab === tab.id
                      ? 'bg-gray-800 text-blue-400 border-b-2 border-blue-400'
                      : 'bg-gray-900/50 text-gray-400 hover:text-gray-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {/* Content Tab */}
          {activeTab === 'content' && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Explanation Section */}
              <section className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                  Explanation
                </h2>
                <p className="text-gray-300 leading-relaxed">{lessonData.explanation}</p>
              </section>

              {/* Examples Section */}
              <section className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-green-400" />
                  Code Examples
                </h2>
                <div className="space-y-4">
                  {lessonData.examples.map((example, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg p-4 relative group">
                      <button
                        onClick={() => copyToClipboard(example)}
                        className="absolute top-2 right-2 p-2 bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <pre className="text-sm overflow-x-auto">
                        <code className="text-green-300">{example}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </section>

              {/* Real World Application */}
              <section className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Play className="w-5 h-5 mr-2 text-purple-400" />
                  Real World Application
                </h2>
                <p className="text-gray-300">{lessonData.realWorldApplication}</p>
              </section>

              {/* Expert Insights */}
              <section className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                  Expert Insights
                </h2>
                <p className="text-gray-300">{lessonData.expertInsights}</p>
              </section>

              {/* Common Mistakes */}
              <section className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                  Common Mistakes
                </h2>
                <ul className="space-y-2">
                  {lessonData.commonMistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-300">
                      <span className="text-red-400 mt-1">•</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Resources */}
              <section className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2 text-blue-400" />
                  Additional Resources
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {lessonData.resources.map((resource, index) => (
                    <motion.a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div>
                        <h4 className="font-semibold text-blue-400 group-hover:text-blue-300">
                          {resource.title}
                        </h4>
                        <p className="text-sm text-gray-400 capitalize">{resource.type}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
                    </motion.a>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* Exercise Tab */}
          {activeTab === 'exercise' && (
            <motion.div
              key="exercise"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {lessonData.exercises.map((exercise, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">{exercise.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        exercise.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                        exercise.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {exercise.difficulty}
                      </span>
                    </div>
                    <motion.button
                      onClick={() => setExerciseCompleted(!exerciseCompleted)}
                      className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                        exerciseCompleted 
                          ? 'bg-green-500 text-white' 
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {exerciseCompleted ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Completed</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          <span>Start Exercise</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold mb-2">Task:</h3>
                    <p className="text-gray-300">{exercise.prompt}</p>
                  </div>

                  {/* Hints */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Lightbulb className="w-4 h-4 mr-2 text-yellow-400" />
                      Hints
                    </h3>
                    <ul className="space-y-2">
                      {exercise.hints.map((hint, hintIndex) => (
                        <li key={hintIndex} className="flex items-start space-x-2 text-gray-300">
                          <span className="text-yellow-400 mt-1">💡</span>
                          <span>{hint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Solution</h3>
                      <motion.button
                        onClick={() => setShowSolution(!showSolution)}
                        className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        <span>{showSolution ? 'Hide' : 'Show'}</span>
                      </motion.button>
                    </div>
                    
                    <AnimatePresence>
                      {showSolution && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-gray-900 rounded-lg p-4 relative group">
                            <button
                              onClick={() => copyToClipboard(exercise.solution)}
                              className="absolute top-2 right-2 p-2 bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                            </button>
                            <pre className="text-sm overflow-x-auto">
                              <code className="text-green-300">{exercise.solution}</code>
                            </pre>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Quiz Tab */}
          {activeTab === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Quiz Header */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6">
                <h2 className="text-2xl font-semibold mb-2">Knowledge Check</h2>
                <p className="text-gray-300">Test your understanding of the concepts covered in this lesson.</p>
              </div>

              {/* Quiz Questions */}
              <div className="space-y-6">
                {lessonData.quiz.map((question, questionIndex) => (
                  <div key={questionIndex} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold">
                        {questionIndex + 1}. {question.question}
                      </h3>
                      {question.correctOption.length > 1 && (
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                          Multiple Choice
                        </span>
                      )}
                    </div>

                    <div className="space-y-3">
                      {question.options.map((option, optionIndex) => {
                        const isSelected = selectedAnswers[questionIndex]?.includes(optionIndex);
                        const isCorrect = question.correctOption.includes(optionIndex);
                        const showResult = showResults;
                        
                        let buttonClass = "w-full p-4 text-left border-2 rounded-lg transition-all ";
                        
                        if (showResult) {
                          if (isCorrect) {
                            buttonClass += "border-green-500 bg-green-500/20 text-green-300";
                          } else if (isSelected && !isCorrect) {
                            buttonClass += "border-red-500 bg-red-500/20 text-red-300";
                          } else {
                            buttonClass += "border-gray-600 bg-gray-800/50 text-gray-300";
                          }
                        } else {
                          if (isSelected) {
                            buttonClass += "border-blue-500 bg-blue-500/20 text-blue-300";
                          } else {
                            buttonClass += "border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500";
                          }
                        }

                        return (
                          <motion.button
                            key={optionIndex}
                            onClick={() => !showResults && handleAnswerSelect(questionIndex, optionIndex)}
                            className={buttonClass}
                            whileHover={!showResults ? { scale: 1.01 } : {}}
                            whileTap={!showResults ? { scale: 0.99 } : {}}
                            disabled={showResults}
                          >
                            <div className="flex items-center justify-between">
                              <span>{option}</span>
                              {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-green-400" />}
                              {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400" />}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Show explanation after results */}
                    {showResults && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg"
                      >
                        <p className="text-blue-300 text-sm">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quiz Actions */}
              <div className="flex items-center justify-between">
                <div className="text-gray-400">
                  Questions answered: {Object.keys(selectedAnswers).length} / {lessonData.quiz.length}
                </div>
                
                {!showResults ? (
                  <motion.button
                    onClick={checkQuizResults}
                    disabled={Object.keys(selectedAnswers).length !== lessonData.quiz.length}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Quiz
                  </motion.button>
                ) : (
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Your Score</p>
                      <p className="text-xl font-bold text-blue-400">{getScorePercentage()}%</p>
                    </div>
                    <motion.button
                      onClick={() => {
                        setSelectedAnswers({});
                        setShowResults(false);
                      }}
                      className="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Retake Quiz
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LessonContentPage;

























//MODULE PAGE DESIGN
// "use client"
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Play,
//   BookOpen,
//   Clock,
//   CheckCircle,
//   Star,
//   ArrowRight,
//   Users,
//   Target,
//   Award,
//   ChevronDown,
//   ChevronRight,
//   ExternalLink,
//   Lightbulb,
//   AlertTriangle,
//   Code,
//   PenTool
// } from 'lucide-react';

// const LearningModulePage = () => {
//   const [expandedLesson, setExpandedLesson] = useState(null);
//   const [activeTab, setActiveTab] = useState('overview');

//   // Sample data based on your structure
//   const courseData = {
//     domain: "Web Development",
//     course: {
//       title: "CSS Essentials: Styling the Web",
//       shortDescription: "A beginner-friendly course on CSS, teaching core concepts like selectors, the box model, colors, and typography to create visually appealing web pages.",
//       tags: ["css", "web", "styling", "typography", "beginner", "frontend"],
//       levelSummary: [{
//         level: "Beginner",
//         overview: "Learn CSS fundamentals and style a responsive, visually appealing web page.",
//         moduleCount: 1
//       }]
//     },
//     module: {
//       title: "Module 1 — Core CSS Concepts",
//       description: "Explore the fundamentals of CSS, including selectors, the box model, color systems, and typography for effective web styling.",
//     },
//     lessons: [
//       {
//         id: "652f3f99def98ef901651c11",
//         title: "Introduction to CSS",
//         description: "Understand the role of CSS in web development, its syntax, and how to apply styles to HTML elements.",
//         estimatedTime: 30,
//         completed: true
//       },
//       {
//         id: "652f3f99def98ef901651c12",
//         title: "CSS Selectors",
//         description: "Learn how to target HTML elements using CSS selectors, including type, class, ID, and advanced combinators.",
//         estimatedTime: 45,
//         completed: true
//       },
//       {
//         id: "652f3f99def98ef901651c13",
//         title: "The Box Model",
//         description: "Master the CSS box model to control spacing, borders, and layout of web elements.",
//         estimatedTime: 50,
//         completed: false
//       },
//       {
//         id: "652f3f99def98ef901651c14",
//         title: "Colors in CSS",
//         description: "Explore CSS color systems, including named colors, hex, RGB, and HSL, for vibrant designs.",
//         estimatedTime: 40,
//         completed: false
//       },
//       {
//         id: "652f3f99def98ef901651c15",
//         title: "Typography in CSS",
//         description: "Control text appearance with CSS typography properties like font-family, font-size, and line-height.",
//         estimatedTime: 50,
//         completed: false
//       },
//       {
//         id: "652f3f99def98ef901651c16",
//         title: "Applying CSS to a Project",
//         description: "Combine CSS selectors, box model, colors, and typography to style and deploy a styled web page.",
//         estimatedTime: 75,
//         completed: false
//       }
//     ]
//   };

//   const completedLessons = courseData.lessons.filter(lesson => lesson.completed).length;
//   const totalLessons = courseData.lessons.length;
//   const progressPercentage = (completedLessons / totalLessons) * 100;
//   const totalTime = courseData.lessons.reduce((sum, lesson) => sum + lesson.estimatedTime, 0);

//   const toggleLesson = (lessonId) => {
//     setExpandedLesson(expandedLesson === lessonId ? null : lessonId);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0b1120] text-white">
//       {/* Header */}
//       <motion.header 
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="border-b border-gray-800 bg-[#0b1120]/95 backdrop-blur-sm sticky top-0 z-50"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
//                 <BookOpen className="w-5 h-5" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-400">{courseData.domain}</p>
//                 <h1 className="text-xl font-semibold">{courseData.course.title}</h1>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="text-right">
//                 <p className="text-sm text-gray-400">Progress</p>
//                 <p className="font-semibold text-blue-400">{Math.round(progressPercentage)}%</p>
//               </div>
//               <div className="w-16 h-16 relative">
//                 <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
//                   <circle
//                     cx="32"
//                     cy="32"
//                     r="28"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                     fill="none"
//                     className="text-gray-700"
//                   />
//                   <circle
//                     cx="32"
//                     cy="32"
//                     r="28"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                     fill="none"
//                     strokeDasharray={`${progressPercentage * 1.76} 176`}
//                     className="text-blue-500"
//                   />
//                 </svg>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <span className="text-xs font-semibold">{completedLessons}/{totalLessons}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.header>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 lg:grid-cols-3 gap-8"
//         >
//           {/* Left Column - Course Info */}
//           <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
//             {/* Course Header */}
//             <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6">
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <h2 className="text-2xl font-bold mb-2">{courseData.module.title}</h2>
//                   <p className="text-gray-300 leading-relaxed">{courseData.module.description}</p>
//                 </div>
//                 <div className="flex items-center space-x-2 bg-blue-500/20 px-3 py-1 rounded-full">
//                   <Award className="w-4 h-4 text-blue-400" />
//                   <span className="text-sm text-blue-400">{courseData.course.levelSummary[0].level}</span>
//                 </div>
//               </div>
              
//               {/* Tags */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {courseData.course.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
//                   >
//                     #{tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-4">
//                 <div className="text-center p-3 bg-black/20 rounded-lg">
//                   <BookOpen className="w-5 h-5 text-blue-400 mx-auto mb-1" />
//                   <p className="text-sm text-gray-400">Lessons</p>
//                   <p className="font-semibold">{totalLessons}</p>
//                 </div>
//                 <div className="text-center p-3 bg-black/20 rounded-lg">
//                   <Clock className="w-5 h-5 text-purple-400 mx-auto mb-1" />
//                   <p className="text-sm text-gray-400">Duration</p>
//                   <p className="font-semibold">{Math.floor(totalTime / 60)}h {totalTime % 60}m</p>
//                 </div>
//                 <div className="text-center p-3 bg-black/20 rounded-lg">
//                   <Target className="w-5 h-5 text-green-400 mx-auto mb-1" />
//                   <p className="text-sm text-gray-400">Completed</p>
//                   <p className="font-semibold">{completedLessons}/{totalLessons}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Lessons List */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold mb-4">Lessons</h3>
              
//               {courseData.lessons.map((lesson, index) => (
//                 <motion.div
//                   key={lesson.id}
//                   variants={itemVariants}
//                   className={`border rounded-2xl transition-all duration-300 ${
//                     lesson.completed 
//                       ? 'border-green-500/30 bg-green-500/10' 
//                       : 'border-gray-700 bg-gray-800/30'
//                   }`}
//                 >
//                   <div
//                     className="p-6 cursor-pointer"
//                     onClick={() => toggleLesson(lesson.id)}
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-4">
//                         <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                           lesson.completed 
//                             ? 'bg-green-500 text-white' 
//                             : 'bg-gray-700 text-gray-400'
//                         }`}>
//                           {lesson.completed ? (
//                             <CheckCircle className="w-5 h-5" />
//                           ) : (
//                             <span className="font-semibold">{index + 1}</span>
//                           )}
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-lg">{lesson.title}</h4>
//                           <p className="text-gray-400 text-sm">{lesson.description}</p>
//                           <div className="flex items-center space-x-4 mt-2">
//                             <div className="flex items-center space-x-1 text-gray-500">
//                               <Clock className="w-4 h-4" />
//                               <span className="text-sm">{lesson.estimatedTime} min</span>
//                             </div>
//                             {lesson.completed && (
//                               <div className="flex items-center space-x-1 text-green-400">
//                                 <CheckCircle className="w-4 h-4" />
//                                 <span className="text-sm">Completed</span>
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         {!lesson.completed && (
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
//                           >
//                             <Play className="w-4 h-4" />
//                             <span>Start</span>
//                           </motion.button>
//                         )}
//                         {expandedLesson === lesson.id ? (
//                           <ChevronDown className="w-5 h-5 text-gray-400" />
//                         ) : (
//                           <ChevronRight className="w-5 h-5 text-gray-400" />
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Expanded Content */}
//                   <AnimatePresence>
//                     {expandedLesson === lesson.id && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: 'auto', opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="px-6 pb-6 border-t border-gray-700 pt-4 mt-4">
//                           <div className="grid md:grid-cols-2 gap-6">
//                             <div>
//                               <h5 className="font-semibold mb-2 flex items-center">
//                                 <Lightbulb className="w-4 h-4 mr-2 text-yellow-400" />
//                                 Key Concepts
//                               </h5>
//                               <ul className="text-sm text-gray-300 space-y-1">
//                                 <li>• CSS syntax and structure</li>
//                                 <li>• Applying styles to HTML</li>
//                                 <li>• External stylesheets</li>
//                                 <li>• CSS cascade and specificity</li>
//                               </ul>
//                             </div>
//                             <div>
//                               <h5 className="font-semibold mb-2 flex items-center">
//                                 <Code className="w-4 h-4 mr-2 text-blue-400" />
//                                 What You'll Learn
//                               </h5>
//                               <ul className="text-sm text-gray-300 space-y-1">
//                                 <li>• Write CSS rules and declarations</li>
//                                 <li>• Link CSS files to HTML</li>
//                                 <li>• Understand CSS specificity</li>
//                                 <li>• Debug CSS issues</li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right Sidebar */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             {/* Progress Card */}
//             <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
//               <h3 className="font-semibold mb-4">Your Progress</h3>
//               <div className="space-y-4">
//                 <div>
//                   <div className="flex justify-between text-sm mb-2">
//                     <span>Module Progress</span>
//                     <span>{Math.round(progressPercentage)}%</span>
//                   </div>
//                   <div className="w-full bg-gray-700 rounded-full h-2">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${progressPercentage}%` }}
//                       transition={{ duration: 1, delay: 0.5 }}
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
//                     />
//                   </div>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-4 pt-4">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-blue-400">{completedLessons}</div>
//                     <div className="text-sm text-gray-400">Completed</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-purple-400">{totalLessons - completedLessons}</div>
//                     <div className="text-sm text-gray-400">Remaining</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
//               <h3 className="font-semibold mb-4">Quick Actions</h3>
//               <div className="space-y-3">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
//                 >
//                   <Play className="w-4 h-4" />
//                   <span>Continue Learning</span>
//                 </motion.button>
                
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-gray-600 hover:bg-gray-500 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
//                 >
//                   <BookOpen className="w-4 h-4" />
//                   <span>View Resources</span>
//                 </motion.button>
                
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
//                 >
//                   <Users className="w-4 h-4" />
//                   <span>Join Discussion</span>
//                 </motion.button>
//               </div>
//             </div>

//             {/* Learning Tips */}
//             <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6">
//               <h3 className="font-semibold mb-4 flex items-center">
//                 <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
//                 Learning Tips
//               </h3>
//               <div className="space-y-3 text-sm text-gray-300">
//                 <div className="flex items-start space-x-2">
//                   <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
//                   <p>Practice each CSS property with real examples</p>
//                 </div>
//                 <div className="flex items-start space-x-2">
//                   <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
//                   <p>Use browser DevTools to experiment with styles</p>
//                 </div>
//                 <div className="flex items-start space-x-2">
//                   <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
//                   <p>Build small projects to reinforce learning</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default LearningModulePage;