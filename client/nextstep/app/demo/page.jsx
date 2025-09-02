// "use client";
// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const questions = [
//   {
//     id: 1,
//     question: "How long have you been coding/programming?",
//     options: [
//       "I’ve never coded before",
//       "Less than 1 year",
//       "1–3 years",
//       "3+ years",
//     ],
//   },
//   {
//     id: 2,
//     question: "Which best describes the projects you’ve worked on?",
//     options: [
//       "None, just tutorials",
//       "Small personal projects",
//       "Production-level apps / large projects",
//     ],
//   },
//   {
//     id: 3,
//     question: "When solving problems, how do you usually approach them?",
//     options: [
//       "I mostly look at solutions first",
//       "I try myself, then check resources",
//       "I can usually solve problems independently",
//     ],
//   },
//   {
//     id: 4,
//     question:
//       "How comfortable are you with libraries and frameworks (React, Express, etc.)?",
//     options: [
//       "I don’t know much about them",
//       "I can use them with tutorials/docs",
//       "I can build apps from scratch using them",
//     ],
//   },
//   {
//     id: 5,
//     question: "In your own words, what is an API?",
//     options: [
//       "Not sure",
//       "A way to send/get data between apps",
//       "A defined interface with endpoints and structured communication",
//     ],
//   },
//   {
//     id: 6,
//     question: "How do you usually debug your code?",
//     options: [
//       "I try random changes until it works",
//       "I use console logs and search online",
//       "I use debuggers, testing tools, and structured strategies",
//     ],
//   },
//   {
//     id: 7,
//     question: "Have you ever used Git/GitHub? If yes, how?",
//     options: [
//       "Never used it",
//       "I use it to push/pull code",
//       "I work with branches, PRs, and team workflows",
//     ],
//   },
//   {
//     id: 8,
//     question: "How comfortable are you with databases?",
//     options: [
//       "Never used one",
//       "I’ve set up simple databases",
//       "I’ve worked with complex queries and optimized schemas",
//     ],
//   },
// ];

// export default function AssessmentForm() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [isComplete, setIsComplete] = useState(false);

//   const handleAnswer = (option) => {
//     setAnswers({ ...answers, [questions[currentQuestion].id]: option });
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       console.log("User answers:", answers);
//       setIsComplete(true);
//       // TODO: Send answers to backend for assessment
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-slate-950">
//       <Card className="w-full max-w-2xl p-6 bg-slate-900 text-white shadow-2xl rounded-2xl">
//         <CardContent>
//           <h1 className="text-2xl font-semibold mb-6 text-center text-blue-400">
//             NextStep Assessment
//           </h1>

//           {!isComplete ? (
//             <>
//               <div className="mb-4">
//                 <h2 className="text-lg font-medium mb-4">
//                   {questions[currentQuestion].question}
//                 </h2>
//                 <div className="flex flex-col gap-3">
//                   {questions[currentQuestion].options.map((option, index) => (
//                     <Button
//                       key={index}
//                       onClick={() => handleAnswer(option)}
//                       className="bg-slate-800 hover:bg-slate-700 text-left justify-start py-3 px-4 rounded-xl"
//                     >
//                       {option}
//                     </Button>
//                   ))}
//                 </div>
//               </div>
//               <div className="mt-6 text-center text-sm text-gray-400">
//                 Question {currentQuestion + 1} of {questions.length}
//               </div>
//             </>
//           ) : (
//             <div className="text-center py-10">
//               <h2 className="text-2xl font-bold text-green-400 mb-4">
//                 🎉 Assessment Complete!
//               </h2>
//               <p className="text-gray-300 mb-6">
//                 Thank you for completing the assessment. Your responses have
//                 been submitted.
//               </p>
//               <Button className="bg-blue-600 hover:bg-blue-500">
//                 Continue
//               </Button>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
