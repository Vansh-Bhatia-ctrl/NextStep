import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@clerk/nextjs";

const QuizSection = ({ learningContent }) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { getToken } = useAuth();

  const handleOptionClick = (questionIndex, optionIndex) => {
    if (isSubmitted) return;
    setSelectedOption({ ...selectedOption, [questionIndex]: optionIndex });
  };

  const handleSubmit = async () => {
    const totalQuestions = learningContent[0]?.quiz.length || 0;
    const answeredQuestions = Object.keys(selectedOption).length;

    if (answeredQuestions <= 1) {
      alert("Please answer all the questions before submitting!");
      return;
    }

    if (answeredQuestions > totalQuestions) {
      const confirmSubmit = window.confirm(
        `You have answered ${answeredQuestions} out of ${totalQuestions} questions. Do you want to submit anyway?`
      );
      if (!confirmSubmit) return;
    }
    setIsSubmitted(true);

    try {
      const token = await getToken();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/api/quiz/lessonquizanswers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            lessonId: learningContent[0]?.lessonId,
            answers: selectedOption,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error saving the answers.");
      }

      const data = await response.json();
      console.log(`Answers saved successfully: ${data}`);
    } catch (error) {
      console.error(
        `Something went wrong, please try again!, Error message: ${error.message} Actual Error: ${error}`
      );
    }
  };

  const getOptionColor = (questionIndex, optionIndex, correctOptionIndex) => {
    if (!isSubmitted) {
      return selectedOption[questionIndex] === optionIndex
        ? "bg-blue-500/20 text-blue-400 border-blue-400"
        : "bg-custom-gray-400 text-white border-slate-300";
    }

    const isSelected = selectedOption[questionIndex] === optionIndex;
    const isCorrect = optionIndex === correctOptionIndex;

    if (isSelected && isCorrect) {
      return "bg-green-500/20 text-green-400 border-green-400";
    } else if (isSelected && !isCorrect) {
      return "bg-red-500/20 text-red-400 border-red-400";
    } else if (!isSelected && isCorrect) {
      return "bg-green-500/20 text-green-400 border-green-400";
    } else {
      return "bg-custom-gray-400 text-gray-400 border-slate-600";
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="lg:max-w-[1100px] lg:mx-auto">
          <div className="p-4 mt-6">
            {/*Quiz Header Section*/}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-4 lg:p-8">
              <p className="text-white font-bold text-2xl md:text-3xl">
                Knowledge Check
              </p>
              <p className="text-gray-300 mt-4 md:text-lg">
                Test your understanding of the concepts covered in this lesson.
              </p>
            </div>

            {/*Questions Section*/}
            <div className="mt-7 space-y-6">
              {learningContent[0]?.quiz.map((c, i) => (
                <div
                  key={i}
                  className="bg-custom-gray-300 border border-slate-600 p-6 rounded-xl"
                >
                  <div>
                    <p className="text-white font-semibold md:text-lg">
                      {c.question}
                    </p>
                  </div>

                  <div className="w-[100%] mt-5 space-y-5">
                    {c.options.map((opt, index) => (
                      <button
                        onClick={() => handleOptionClick(i, index)}
                        key={index}
                        disabled={isSubmitted}
                        className={`w-full p-4 border rounded-xl transition-all ease-in ${
                          !isSubmitted && "hover:scale-102"
                        } ${getOptionColor(i, index, c.correctOption[0])} ${
                          isSubmitted ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                      >
                        <p className="md:text-lg">{opt}</p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-6 text-center flex items-center justify-center gap-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className={`p-3 rounded-xl text-white transition-all ease-in ${
                    isSubmitted
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                  }`}
                >
                  {isSubmitted ? "Quiz Submitted" : "Submit Quiz"}
                </button>

                {isSubmitted && (
                  <button className="p-3 rounded-xl text-white transition-all ease-in bg-green-600 hover:bg-green-700 cursor-pointer">
                    Mark Lesson as completed
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default QuizSection;
