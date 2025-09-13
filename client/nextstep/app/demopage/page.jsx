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
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Circle,
  Play,
  Book,
  Clock,
  Target,
  Lightbulb,
  AlertCircle,
  ExternalLink,
  Menu,
  X,
  ArrowLeft,
  Award,
} from "lucide-react";

const courseData = {
  learningModuleId: "507f1f77bcf86cd799439030",
  title: "HTML Essentials",
  slug: "html-essentials",
  domains: [
    {
      domainId: "507f1f77bcf86cd799439031",
      name: "Web Development",
      slug: "web-development",
      description:
        "Master the core skills for structuring content on the web with HTML.",
      courses: [
        {
          courseId: "507f1f77bcf86cd799439032",
          title: "HTML Fundamentals",
          slug: "html-fundamentals",
          shortDescription:
            "A beginner-friendly course to learn the basics of HTML for building webpages.",
          longDescription:
            "This course introduces HTML, the foundation of web development, teaching you how to create structured, accessible, and semantic webpages from scratch.",
          tags: ["HTML", "Web Development", "Beginner", "Frontend"],
          thumbnail: "https://example.com/thumbnails/html-fundamentals.jpg",
          levels: [
            {
              level: "Beginner",
              overview:
                "This level covers the essentials of HTML, including tags, attributes, and semantic markup, to create well-structured webpages.",
              goals: [
                "Understand the purpose and structure of HTML",
                "Learn to use common HTML tags and attributes",
                "Create a simple, semantic webpage",
                "Apply best practices for accessibility",
              ],
              modules: [
                {
                  moduleId: "507f1f77bcf86cd799439033",
                  title: "Getting Started with HTML",
                  slug: "getting-started-with-html",
                  description:
                    "Learn the basics of HTML to structure content on the web.",
                  order: 1,
                  lessons: [
                    {
                      lessonId: "507f1f77bcf86cd799439034",
                      title: "Introduction to HTML",
                      slug: "introduction-to-html",
                      description:
                        "Understand what HTML is and how to create a basic webpage.",
                      order: 1,
                      content: {
                        explanation:
                          "HTML (HyperText Markup Language) is the standard language for creating webpages. It uses tags to structure content, such as headings, paragraphs, and links.",
                        examples: [
                          "<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Webpage</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <p>This is my first webpage.</p>\n</body>\n</html>",
                        ],
                        realWorldApplication:
                          "HTML is used to build the structure of websites like news sites, blogs, and online stores.",
                        expertInsights:
                          "Always include the <!DOCTYPE html> declaration to ensure browsers render your page correctly.",
                        commonMistakes: [
                          "Forgetting to close tags, e.g., <p> without </p>",
                          "Nesting tags incorrectly, e.g., <p><h1>Text</p></h1>",
                        ],
                        exercises: [
                          {
                            title: "Create a Basic HTML Page",
                            prompt:
                              "Write HTML code to create a webpage with a heading, paragraph, and a link.",
                            difficulty: "easy",
                            hints: [
                              "Start with <!DOCTYPE html>",
                              "Use <h1> for the heading",
                              "Use <a href='url'> for the link",
                            ],
                            solution:
                              "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Welcome</h1>\n  <p>This is a paragraph.</p>\n  <a href='https://example.com'>Visit Example</a>\n</body>\n</html>",
                          },
                        ],
                        quiz: [
                          {
                            question: "What does HTML stand for?",
                            options: [
                              "HyperText Markup Language",
                              "HighText Machine Language",
                              "HyperTool Multi Language",
                              "HomeText Markup Language",
                            ],
                            correctOption: [0],
                          },
                        ],
                        estimatedTime: 15,
                        resources: [
                          {
                            title: "MDN HTML Basics",
                            url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
                            type: "article",
                          },
                          {
                            title: "HTML Introduction Video",
                            url: "https://www.youtube.com/watch?v=example-html-video",
                            type: "video",
                          },
                        ],
                      },
                    },
                  ],
                },
                {
                  moduleId: "507f1f77bcf86cd799439035",
                  title: "HTML Tags and Attributes",
                  slug: "html-tags-and-attributes",
                  description:
                    "Learn how to use HTML tags and attributes to add structure and functionality.",
                  order: 2,
                  lessons: [
                    {
                      lessonId: "507f1f77bcf86cd799439036",
                      title: "Working with Tags and Attributes",
                      slug: "working-with-tags-and-attributes",
                      description:
                        "Explore common HTML tags and how attributes enhance them.",
                      order: 1,
                      content: {
                        explanation:
                          "HTML tags define elements like headings (<h1>), images (<img>), and lists (<ul>). Attributes provide additional information, such as 'src' for images or 'href' for links.",
                        examples: [
                          "<img src='image.jpg' alt='Description'>\n<a href='https://example.com' title='Visit Example'>Link</a>\n<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>",
                        ],
                        realWorldApplication:
                          "Tags and attributes are used to create navigation menus, image galleries, and forms on websites.",
                        expertInsights:
                          "Use the 'alt' attribute for images to improve accessibility for screen readers.",
                        commonMistakes: [
                          "Omitting required attributes, e.g., 'alt' for <img>",
                          "Using incorrect attribute values, e.g., invalid URLs in 'href'",
                        ],
                        exercises: [
                          {
                            title: "Add an Image with Attributes",
                            prompt:
                              "Write HTML code to display an image with a source URL and an alt description.",
                            difficulty: "easy",
                            hints: [
                              "Use the <img> tag",
                              "Include 'src' and 'alt' attributes",
                            ],
                            solution:
                              "<img src='https://example.com/image.jpg' alt='Sample Image'>",
                          },
                        ],
                        quiz: [
                          {
                            question:
                              "Which attribute specifies the URL for a link?",
                            options: ["src", "href", "alt", "title"],
                            correctOption: [1],
                          },
                        ],
                        estimatedTime: 20,
                        resources: [
                          {
                            title: "MDN HTML Elements Reference",
                            url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
                            type: "article",
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const NextStepCoursePage = () => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [selectedQuizOption, setSelectedQuizOption] = useState({});

  const course = courseData.domains[0].courses[0];
  const currentLevel = course.levels[0];
  const currentModule = currentLevel.modules[currentModuleIndex];
  const currentLesson = currentModule.lessons[currentLessonIndex];

  const totalLessons = currentLevel.modules.reduce(
    (total, module) => total + module.lessons.length,
    0
  );
  const completedCount = completedLessons.size;
  const progressPercentage = (completedCount / totalLessons) * 100;

  const toggleLessonComplete = (moduleIndex, lessonIndex) => {
    const lessonKey = `${moduleIndex}-${lessonIndex}`;
    const newCompleted = new Set(completedLessons);

    if (newCompleted.has(lessonKey)) {
      newCompleted.delete(lessonKey);
    } else {
      newCompleted.add(lessonKey);
    }

    setCompletedLessons(newCompleted);
  };

  const navigateToLesson = (moduleIndex, lessonIndex) => {
    setCurrentModuleIndex(moduleIndex);
    setCurrentLessonIndex(lessonIndex);
    setIsSidebarOpen(false);
    setActiveTab("content");
  };

  const nextLesson = () => {
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else if (currentModuleIndex < currentLevel.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentLessonIndex(0);
    }
  };

  const previousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentLessonIndex(
        currentLevel.modules[currentModuleIndex - 1].lessons.length - 1
      );
    }
  };

  const handleQuizOption = (questionIndex, optionIndex) => {
    setSelectedQuizOption({
      ...selectedQuizOption,
      [questionIndex]: optionIndex,
    });
  };

  const Sidebar = () => (
    <div className="h-full bg-slate-900 border-r border-slate-700 flex flex-col pt-18">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">{course.title}</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
          <Award size={16} />
          <span>{currentLevel.level}</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Progress</span>
            <span className="text-blue-400 font-medium">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="text-xs text-slate-500">
            {completedCount} of {totalLessons} lessons completed
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {currentLevel.modules.map((module, moduleIndex) => (
            <div key={module.moduleId} className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <Book size={16} />
                <span>
                  Module {module.order}: {module.title}
                </span>
              </div>

              <div className="ml-6 space-y-2">
                {module.lessons.map((lesson, lessonIndex) => {
                  const lessonKey = `${moduleIndex}-${lessonIndex}`;
                  const isCompleted = completedLessons.has(lessonKey);
                  const isCurrent =
                    moduleIndex === currentModuleIndex &&
                    lessonIndex === currentLessonIndex;

                  return (
                    <motion.button
                      key={lesson.lessonId}
                      onClick={() => navigateToLesson(moduleIndex, lessonIndex)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        isCurrent
                          ? "bg-blue-600 border-blue-500 text-white"
                          : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750 hover:border-slate-600"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLessonComplete(moduleIndex, lessonIndex);
                          }}
                          className="flex-shrink-0"
                        >
                          {isCompleted ? (
                            <CheckCircle size={18} className="text-green-500" />
                          ) : (
                            <Circle size={18} className="text-slate-500" />
                          )}
                        </button>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">
                            {lesson.title}
                          </div>
                          <div className="text-xs opacity-75 flex items-center gap-1">
                            <Clock size={12} />
                            <span>{lesson.content.estimatedTime} min</span>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContentSection = () => (
    <div className="space-y-8">
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold mb-2">{currentLesson.title}</h1>
        <p className="text-blue-100 mb-4">{currentLesson.description}</p>
        <div className="flex items-center gap-4 text-sm text-blue-100">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{currentLesson.content.estimatedTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Target size={16} />
            <span>Module {currentModule.order}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-slate-800 p-6 rounded-xl border border-slate-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Book size={20} />
          Explanation
        </h2>
        <p className="text-slate-300 leading-relaxed">
          {currentLesson.content.explanation}
        </p>
      </motion.div>

      {currentLesson.content.examples && (
        <motion.div
          className="bg-slate-800 p-6 rounded-xl border border-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-white mb-4">Example</h2>
          <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-green-400 text-sm">
            <code>{currentLesson.content.examples[0]}</code>
          </pre>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          className="bg-slate-800 p-6 rounded-xl border border-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Lightbulb size={18} />
            Expert Insights
          </h3>
          <p className="text-slate-300 text-sm">
            {currentLesson.content.expertInsights}
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-800 p-6 rounded-xl border border-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <AlertCircle size={18} />
            Common Mistakes
          </h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            {currentLesson.content.commonMistakes.map((mistake, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>{mistake}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="bg-slate-800 p-6 rounded-xl border border-slate-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentLesson.content.resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group"
            >
              <div className="flex-shrink-0">
                {resource.type === "video" ? (
                  <Play size={18} className="text-red-400" />
                ) : (
                  <ExternalLink size={18} className="text-blue-400" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                  {resource.title}
                </div>
                <div className="text-xs text-slate-400 capitalize">
                  {resource.type}
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const ExerciseSection = () => (
    <div className="space-y-6">
      {currentLesson.content.exercises.map((exercise, index) => (
        <motion.div
          key={index}
          className="bg-slate-800 p-6 rounded-xl border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{exercise.title}</h3>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                exercise.difficulty === "easy"
                  ? "bg-green-900 text-green-300"
                  : exercise.difficulty === "medium"
                  ? "bg-yellow-900 text-yellow-300"
                  : "bg-red-900 text-red-300"
              }`}
            >
              {exercise.difficulty}
            </span>
          </div>

          <p className="text-slate-300 mb-6">{exercise.prompt}</p>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-400 mb-2">Hints:</h4>
            <ul className="space-y-1">
              {exercise.hints.map((hint, hintIndex) => (
                <li
                  key={hintIndex}
                  className="text-sm text-slate-500 flex items-start gap-2"
                >
                  <span className="text-blue-400 mt-1">💡</span>
                  <span>{hint}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-400 mb-2">
              Your Solution:
            </div>
            <textarea
              className="w-full bg-slate-800 text-slate-300 p-3 rounded border border-slate-600 focus:border-blue-500 focus:outline-none resize-vertical min-h-[120px] font-mono text-sm"
              placeholder="Write your code here..."
            />
          </div>
        </motion.div>
      ))}
    </div>
  );

  const QuizSection = () => (
    <div className="space-y-6">
      {currentLesson.content.quiz.map((question, questionIndex) => (
        <motion.div
          key={questionIndex}
          className="bg-slate-800 p-6 rounded-xl border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: questionIndex * 0.1 }}
        >
          <h3 className="text-lg font-medium text-white mb-4">
            Question {questionIndex + 1}: {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, optionIndex) => {
              const isSelected =
                selectedQuizOption[questionIndex] === optionIndex;
              const isCorrect = question.correctOption.includes(optionIndex);
              const showResult =
                selectedQuizOption[questionIndex] !== undefined;

              return (
                <button
                  key={optionIndex}
                  onClick={() => handleQuizOption(questionIndex, optionIndex)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    showResult
                      ? isCorrect
                        ? "bg-green-900 border-green-600 text-green-100"
                        : isSelected
                        ? "bg-red-900 border-red-600 text-red-100"
                        : "bg-slate-700 border-slate-600 text-slate-300"
                      : isSelected
                      ? "bg-blue-900 border-blue-600 text-blue-100"
                      : "bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600"
                  }`}
                  disabled={showResult}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                        showResult && isCorrect
                          ? "bg-green-500 border-green-500"
                          : isSelected
                          ? "bg-blue-500 border-blue-500"
                          : "border-slate-400"
                      }`}
                    >
                      {(showResult && isCorrect) || isSelected ? (
                        <div className="w-full h-full rounded-full bg-white scale-50" />
                      ) : null}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <AnimatePresence>
        {(isSidebarOpen || window.innerWidth >= 1024) && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed lg:relative z-30 w-80 h-screen lg:block"
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col pt-18">
        {/* Header */}
        <header className="bg-slate-800 border-b border-slate-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden text-slate-400 hover:text-white"
              >
                <Menu size={20} />
              </button>

              <div className="hidden lg:flex items-center gap-2 text-slate-400 text-sm">
                <ArrowLeft size={16} />
                <span>Back to Course Overview</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-sm text-slate-400">
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={previousLesson}
                  disabled={
                    currentModuleIndex === 0 && currentLessonIndex === 0
                  }
                  className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <ChevronLeft size={16} />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <button
                  onClick={nextLesson}
                  disabled={
                    currentModuleIndex === currentLevel.modules.length - 1 &&
                    currentLessonIndex === currentModule.lessons.length - 1
                  }
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {/* Tab Navigation */}
          <div className="bg-slate-800 border-b border-slate-700 px-6">
            <div className="flex space-x-8">
              {[
                { id: "content", label: "Content", icon: Book },
                { id: "exercise", label: "Exercise", icon: Target },
                { id: "quiz", label: "Quiz", icon: CheckCircle },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-colors ${
                    activeTab === id
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-slate-400 hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "content" && <ContentSection />}
                {activeTab === "exercise" && <ExerciseSection />}
                {activeTab === "quiz" && <QuizSection />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStepCoursePage;

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
