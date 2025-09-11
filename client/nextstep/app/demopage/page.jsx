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







































































//COURSE SELECTION PAGE
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  TrendingUp,
  ChevronRight,
  Star,
  Users,
  Clock,
} from "lucide-react";

const CareerPathsPage = () => {
  const [selectedPath, setSelectedPath] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const careerPaths = [
    {
      id: "web-dev",
      title: "Web Development",
      subtitle: "Build the future of the web",
      description:
        "Create responsive websites and web applications using modern frameworks",
      icon: Code2,
      gradient: "from-blue-500 via-blue-600 to-indigo-700",
      popularity: "95%",
      avgSalary: "$75,000",
      jobOpenings: "50,000+",
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
      popularity: "88%",
      avgSalary: "$120,000",
      jobOpenings: "25,000+",
      skills: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Statistics",
        "Deep Learning",
      ],
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
      popularity: "82%",
      avgSalary: "$105,000",
      jobOpenings: "30,000+",
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
      popularity: "76%",
      avgSalary: "$85,000",
      jobOpenings: "15,000+",
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
      popularity: "85%",
      avgSalary: "$90,000",
      jobOpenings: "35,000+",
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
      popularity: "91%",
      avgSalary: "$110,000",
      jobOpenings: "40,000+",
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
      popularity: "87%",
      avgSalary: "$115,000",
      jobOpenings: "28,000+",
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
      popularity: "89%",
      avgSalary: "$100,000",
      jobOpenings: "45,000+",
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
      popularity: "83%",
      avgSalary: "$80,000",
      jobOpenings: "32,000+",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleCardClick = (path) => {
    setSelectedPath(path);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-18">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20"></div>
        <div className="relative px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Choose Your IT Career Path
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover the perfect technology career that matches your interests
              and goals. Each path is designed to take you from beginner to
              professional.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Career Paths Grid */}
      <div className="px-6 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {careerPaths.map((path) => {
            const IconComponent = path.icon;
            return (
              <motion.div
                key={path.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredCard(path.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => handleCardClick(path)}
                className="relative group cursor-pointer"
              >
                <div
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${path.gradient} shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300`}
                >
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-colors duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {path.title}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {path.subtitle}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: hoveredCard === path.id ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-5 h-5 text-white/60" />
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {path.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-white/80" />
                          <span className="text-white/80 text-xs">
                            Popularity
                          </span>
                        </div>
                        <span className="text-white font-semibold">
                          {path.popularity}
                        </span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Users className="w-4 h-4 text-white/80" />
                          <span className="text-white/80 text-xs">Jobs</span>
                        </div>
                        <span className="text-white font-semibold">
                          {path.jobOpenings}
                        </span>
                      </div>
                    </div>

                    {/* Skills Preview */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4 h-4 text-white/80" />
                        <span className="text-white/80 text-xs">
                          Key Skills
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-xs text-white"
                          >
                            {skill}
                          </span>
                        ))}
                        {path.skills.length > 3 && (
                          <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-xs text-white/80">
                            +{path.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Duration and Salary */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-white/80" />
                        <span className="text-white/80">{path.duration}</span>
                      </div>
                      <span className="text-white font-semibold">
                        {path.avgSalary}
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === path.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-white/5 rounded-2xl pointer-events-none"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 py-16 text-center bg-gradient-to-br from-slate-800 to-slate-900 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Join thousands of learners who have successfully transitioned into
            their dream tech careers
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Personalized Recommendations
          </motion.button>
        </div>
      </motion.div>

      {/* Selection Modal */}
      <AnimatePresence>
        {selectedPath && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50"
            onClick={() => setSelectedPath(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-2xl w-full bg-gradient-to-br ${selectedPath.gradient} p-8 rounded-3xl border border-white/20 shadow-2xl`}
            >
              <div className="text-center">
                <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                  <selectedPath.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {selectedPath.title}
                </h3>
                <p className="text-white/90 mb-8 text-lg">
                  {selectedPath.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {selectedPath.avgSalary}
                    </div>
                    <div className="text-white/80">Average Salary</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {selectedPath.duration}
                    </div>
                    <div className="text-white/80">Learning Duration</div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-white/90 transition-colors duration-300"
                  >
                    Start Learning Path
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPath(null)}
                    className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-colors duration-300"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareerPathsPage;






























































//MODULE PAGE DESIGN

// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronRight,
//   BookOpen,
//   Video,
//   FileText,
//   ExternalLink,
//   Play,
//   Clock,
//   CheckCircle2,
//   Circle,
//   Star,
//   Download,
//   Bookmark,
//   Share2,
// } from "lucide-react";

// const LearningModule = () => {
//   const [activeSection, setActiveSection] = useState(0);
//   const [completedLessons, setCompletedLessons] = useState(new Set([0, 1]));

//   const courseData = {
//     title: "React Fundamentals",
//     level: "Beginner",
//     progress: 7,
//     total: 8,
//     duration: "6 hours",
//     sections: [
//       {
//         id: 1,
//         title: "Getting Started with React",
//         lessons: [
//           {
//             id: 1,
//             title: "What is React?",
//             type: "video",
//             duration: "15 min",
//             completed: true,
//           },
//           {
//             id: 2,
//             title: "Setting up Development Environment",
//             type: "video",
//             duration: "20 min",
//             completed: true,
//           },
//           {
//             id: 3,
//             title: "Your First React Component",
//             type: "video",
//             duration: "25 min",
//             completed: false,
//           },
//           {
//             id: 4,
//             title: "JSX Fundamentals",
//             type: "reading",
//             duration: "10 min",
//             completed: false,
//           },
//         ],
//       },
//       {
//         id: 2,
//         title: "Components and Props",
//         lessons: [
//           {
//             id: 5,
//             title: "Understanding Components",
//             type: "video",
//             duration: "30 min",
//             completed: false,
//           },
//           {
//             id: 6,
//             title: "Props and Data Flow",
//             type: "video",
//             duration: "25 min",
//             completed: false,
//           },
//           {
//             id: 7,
//             title: "Component Composition",
//             type: "practice",
//             duration: "45 min",
//             completed: false,
//           },
//         ],
//       },
//       {
//         id: 3,
//         title: "State and Event Handling",
//         lessons: [
//           {
//             id: 8,
//             title: "useState Hook",
//             type: "video",
//             duration: "35 min",
//             completed: false,
//           },
//           {
//             id: 9,
//             title: "Event Handling",
//             type: "video",
//             duration: "20 min",
//             completed: false,
//           },
//           {
//             id: 10,
//             title: "State Management Best Practices",
//             type: "reading",
//             duration: "15 min",
//             completed: false,
//           },
//         ],
//       },
//     ],
//     resources: [
//       {
//         id: 1,
//         title: "React Official Documentation",
//         type: "documentation",
//         url: "#",
//       },
//       { id: 2, title: "React Cheat Sheet", type: "download", url: "#" },
//       { id: 3, title: "Component Patterns Guide", type: "guide", url: "#" },
//       { id: 4, title: "Practice Exercises", type: "practice", url: "#" },
//     ],
//     customSources: [
//       {
//         id: 1,
//         title: "Interactive React Playground",
//         description: "Practice React concepts in real-time",
//         type: "interactive",
//       },
//       {
//         id: 2,
//         title: "AI-Generated Code Examples",
//         description: "Personalized examples based on your progress",
//         type: "ai-generated",
//       },
//       {
//         id: 3,
//         title: "Smart Quiz Generator",
//         description: "Adaptive quizzes tailored to your learning",
//         type: "quiz",
//       },
//     ],
//   };

//   const toggleLessonCompletion = (lessonId) => {
//     const newCompleted = new Set(completedLessons);
//     if (newCompleted.has(lessonId)) {
//       newCompleted.delete(lessonId);
//     } else {
//       newCompleted.add(lessonId);
//     }
//     setCompletedLessons(newCompleted);
//   };

//   const getTypeIcon = (type) => {
//     switch (type) {
//       case "video":
//         return <Video className="w-4 h-4" />;
//       case "reading":
//         return <FileText className="w-4 h-4" />;
//       case "practice":
//         return <BookOpen className="w-4 h-4" />;
//       default:
//         return <Circle className="w-4 h-4" />;
//     }
//   };

//   const getTypeColor = (type) => {
//     switch (type) {
//       case "video":
//         return "text-blue-400";
//       case "reading":
//         return "text-green-400";
//       case "practice":
//         return "text-purple-400";
//       default:
//         return "text-gray-400";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 text-white pt-18">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-slate-800 border-b border-slate-700"
//       >
//         <div className="max-w-7xl mx-auto px-6 py-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-2 rounded-lg">
//                   <BookOpen className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h1 className="text-2xl font-bold">{courseData.title}</h1>
//                   <p className="text-slate-400">
//                     {courseData.level} • {courseData.duration}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-48 h-2 bg-slate-700 rounded-full overflow-hidden">
//                     <motion.div
//                       className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
//                       initial={{ width: 0 }}
//                       animate={{
//                         width: `${
//                           (courseData.progress / courseData.total) * 100
//                         }%`,
//                       }}
//                       transition={{ duration: 1, delay: 0.5 }}
//                     />
//                   </div>
//                   <span className="text-sm text-slate-400">
//                     {courseData.progress}/{courseData.total} complete
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
//               >
//                 <Bookmark className="w-5 h-5" />
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
//               >
//                 <Share2 className="w-5 h-5" />
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Course Sections */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <h2 className="text-xl font-semibold mb-4">Course Content</h2>
//               <div className="space-y-4">
//                 {courseData.sections.map((section, sectionIndex) => (
//                   <motion.div
//                     key={section.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 + sectionIndex * 0.1 }}
//                     className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
//                   >
//                     <motion.button
//                       onClick={() =>
//                         setActiveSection(
//                           activeSection === sectionIndex ? -1 : sectionIndex
//                         )
//                       }
//                       className="w-full p-4 flex items-center justify-between hover:bg-slate-750 transition-colors"
//                       whileHover={{ backgroundColor: "rgb(51, 65, 85)" }}
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
//                           <BookOpen className="w-5 h-5 text-white" />
//                         </div>
//                         <div className="text-left">
//                           <h3 className="font-medium">{section.title}</h3>
//                           <p className="text-sm text-slate-400">
//                             {section.lessons.length} lessons
//                           </p>
//                         </div>
//                       </div>
//                       <motion.div
//                         animate={{
//                           rotate: activeSection === sectionIndex ? 90 : 0,
//                         }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <ChevronRight className="w-5 h-5 text-slate-400" />
//                       </motion.div>
//                     </motion.button>

//                     <AnimatePresence>
//                       {activeSection === sectionIndex && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="border-t border-slate-700"
//                         >
//                           <div className="p-4 space-y-2">
//                             {section.lessons.map((lesson, lessonIndex) => (
//                               <motion.div
//                                 key={lesson.id}
//                                 initial={{ opacity: 0, x: -10 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: lessonIndex * 0.05 }}
//                                 className="flex items-center justify-between p-3 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer group"
//                               >
//                                 <div className="flex items-center gap-3">
//                                   <motion.button
//                                     onClick={() =>
//                                       toggleLessonCompletion(lesson.id)
//                                     }
//                                     whileHover={{ scale: 1.1 }}
//                                     whileTap={{ scale: 0.9 }}
//                                   >
//                                     {completedLessons.has(lesson.id) ? (
//                                       <CheckCircle2 className="w-5 h-5 text-green-400" />
//                                     ) : (
//                                       <Circle className="w-5 h-5 text-slate-400" />
//                                     )}
//                                   </motion.button>
//                                   <div
//                                     className={`${getTypeColor(lesson.type)}`}
//                                   >
//                                     {getTypeIcon(lesson.type)}
//                                   </div>
//                                   <div>
//                                     <p className="font-medium text-sm">
//                                       {lesson.title}
//                                     </p>
//                                     <div className="flex items-center gap-2 text-xs text-slate-400">
//                                       <Clock className="w-3 h-3" />
//                                       <span>{lesson.duration}</span>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <motion.button
//                                   whileHover={{ scale: 1.1 }}
//                                   whileTap={{ scale: 0.9 }}
//                                   className="opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 hover:bg-blue-700 p-2 rounded-lg"
//                                 >
//                                   <Play className="w-4 h-4" />
//                                 </motion.button>
//                               </motion.div>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Resources */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4 }}
//               className="bg-slate-800 rounded-xl p-6 border border-slate-700"
//             >
//               <h3 className="font-semibold mb-4 flex items-center gap-2">
//                 <FileText className="w-5 h-5 text-blue-400" />
//                 Resources
//               </h3>
//               <div className="space-y-3">
//                 {courseData.resources.map((resource, index) => (
//                   <motion.a
//                     key={resource.id}
//                     href={resource.url}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 + index * 0.05 }}
//                     className="flex items-center justify-between p-3 hover:bg-slate-700 rounded-lg transition-colors group"
//                   >
//                     <span className="text-sm font-medium">
//                       {resource.title}
//                     </span>
//                     <div className="flex items-center gap-2">
//                       {resource.type === "download" && (
//                         <Download className="w-4 h-4 text-green-400" />
//                       )}
//                       <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>

//             {/* AI-Generated Content */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.6 }}
//               className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30"
//             >
//               <h3 className="font-semibold mb-4 flex items-center gap-2">
//                 <Star className="w-5 h-5 text-purple-400" />
//                 Smart Learning Tools
//               </h3>
//               <div className="space-y-4">
//                 {courseData.customSources.map((source, index) => (
//                   <motion.div
//                     key={source.id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.7 + index * 0.05 }}
//                     className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
//                   >
//                     <h4 className="font-medium text-sm mb-1">{source.title}</h4>
//                     <p className="text-xs text-slate-400">
//                       {source.description}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-2 px-4 rounded-lg font-medium text-sm transition-all"
//               >
//                 Explore AI Tools
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LearningModule;
