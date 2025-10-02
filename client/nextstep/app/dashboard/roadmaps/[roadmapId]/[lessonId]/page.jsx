"use client";
import AdditionalResources from "@/app/components/AdditionalResources";
import AiChatSection from "@/app/components/AiChatSection";
import CodeExampleSection from "@/app/components/CodeExampleSection";
import CommonMistakes from "@/app/components/CommonMistakes";
import ExerciseSection from "@/app/components/ExerciseSection";
import ExplanationSection from "@/app/components/ExplanationSection";
import LearningTips from "@/app/components/LearningTips";
import LessonsHeader from "@/app/components/LessonsHeader";
import LessonTitle from "@/app/components/LessonTitle";
import QuizSection from "@/app/components/QuizSection";
import RealWorldApplication from "@/app/components/RealWorldApplication";
import useModuleStore from "@/app/store/useModulesStore";
import useUiStore from "@/app/store/useUiStore";
import { AnimatePresence, motion } from "framer-motion";

import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { selectedOption } = useUiStore();
  const { learningContent, lessons } = useModuleStore();
  const params = useParams();
  const lessonId = params.lessonId;

  const lessonSpecificLearningContent = learningContent.filter(
    (lc) => lc.lessonId === lessonId
  );

  const lessonSpecificLessonId = lessons.filter((li) => li._id === lessonId);

  console.log(
    "page specific learning content: ",
    lessonSpecificLearningContent,
    lessonSpecificLessonId
  );
  return (
    <>
      <div>
        <div>
          <div>
            <LessonsHeader />
            <AnimatePresence>
              {selectedOption === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-4"
                >
                  <div className="lg:max-w-7xl lg:mx-auto">
                    <LessonTitle
                      lessonId={lessonSpecificLessonId}
                      learningContent={lessonSpecificLearningContent}
                    />

                    {/*Explanation Section*/}
                    <ExplanationSection
                      learningContent={lessonSpecificLearningContent}
                    />

                    {/*Code Examples Section*/}
                    <CodeExampleSection
                      learningContent={lessonSpecificLearningContent}
                    />

                    {/*Real-World Application Section*/}
                    <RealWorldApplication
                      learningContent={lessonSpecificLearningContent}
                    />

                    {/*Learning Tips Section*/}
                    <LearningTips
                      learningContent={lessonSpecificLearningContent}
                    />

                    {/*Common Mistakes Section*/}
                    <CommonMistakes
                      learningContent={lessonSpecificLearningContent}
                    />

                    {/*Additional Resources Section*/}
                    <AdditionalResources
                      learningContent={lessonSpecificLearningContent}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {selectedOption === 2 && (
                <ExerciseSection
                  learningContent={lessonSpecificLearningContent}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {selectedOption === 3 && (
                <QuizSection learningContent={lessonSpecificLearningContent} />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {selectedOption === 4 && <AiChatSection />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
