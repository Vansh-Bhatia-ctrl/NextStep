import React, { useState } from "react";
import { motion } from "framer-motion";

const QuizSection = ({ learningContent }) => {
  const [selectedOption, setSelectedOption] = useState({});

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
                        onClick={() =>
                          setSelectedOption({ ...selectedOption, [i]: index })
                        }
                        key={index}
                        className={`w-full  p-4 border border-slate-300 rounded-xl hover:scale-102 transition-all ease-in ${
                          selectedOption[i] === index
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-custom-gray-400 text-white"
                        }`}
                      >
                        <p className="md:text-lg">{opt}</p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-6 text-center">
                <button className="bg-blue-600 p-3 rounded-xl text-white hover:bg-blue-700 transition-all ease-in cursor-pointer">
                  Submit Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default QuizSection;
