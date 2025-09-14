"use client";
import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import Link from "next/link";
import useUserStore from "../store/useUserStore";

const Page = () => {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();
  const setUserInStore = useUserStore((s) => s.setUser);

  const [fetchedQuestions, setFetchedQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
  const [userSaved, setUserSaved] = useState(false);

  const totalQuestions = fetchedQuestions.length;

  const saveUserToDb = async () => {
    try {
      const token = await getToken();

      if (!isLoaded || !user) return;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/api/saveUser/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            clerkUserId: user.id,
            name: user.fullName,
            email: user.primaryEmailAddress.emailAddress,
          }),
        }
      );

      if (response.ok) {
        console.log("Data saved successfully.");
        setUserSaved(true);
      }
      const data = await response.json();

      setUserInStore({
        clerkUserId: user.id,
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        onBoardingStatus: false,
      });
    } catch (error) {
      console.log("Something went wrong please try again.", error);
    }
  };

  const fetchQuestionsFromDb = async () => {
    try {
      const token = await getToken();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/api/getQuestions/questions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      setFetchedQuestions(data.questionsData || []);
      setIsLoadingQuestions(false);
    } catch (error) {
      console.log("Error fetching questions", error);
      setIsLoadingQuestions(false);
    }
  };

  const submitAnswers = async () => {
    try {
      const token = await getToken();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/api/saveAnswers/answers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            answers: userAnswers,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Assessment submitted successfully", data);
      } else {
        const errorData = await response.json();
        console.log("Error submitting assessment: ", errorData.message);
      }
    } catch (error) {
      console.error("Error submitting assessment:", error);
    }
  };

  useEffect(() => {
    if (isLoaded && user && !userSaved) {
      saveUserToDb();
    }
  }, [user, isLoaded, userSaved]);

  useEffect(() => {
    if (isLoaded && user && userSaved) {
      fetchQuestionsFromDb();
    }
  }, [isLoaded, user, userSaved]);

  useEffect(() => {
    if (isFinished && userAnswers.length === totalQuestions) {
      submitAnswers();
    }
  }, [isFinished, userAnswers, totalQuestions]);

  const handleSelectedOption = (selectedOption) => {
    const currentQuestion = fetchedQuestions[currentIndex];
    const newAnswer = {
      question: currentQuestion.question,
      weight: currentQuestion.weight,
      selectedOption: selectedOption.label,
      score: selectedOption.score,
    };

    setUserAnswers((prev) => [...prev, newAnswer]);
    if (currentIndex >= totalQuestions - 1) {
      setIsFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setIsFinished(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen w-screen bg-custom-gray-100 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (isLoadingQuestions) {
    return (
      <div className="min-h-screen w-screen bg-custom-gray-100 flex items-center justify-center">
        <div className="text-white text-xl">
          Loading assessment questions...
        </div>
      </div>
    );
  }

  const currentQuestion = fetchedQuestions[currentIndex] ?? {
    question: "",
    options: [],
  };

  return (
    <>
      <div className="min-h-screen w-screen bg-custom-gray-100 flex items-center justify-center overflow-x-hidden">
        <div className="w-[90vh] flex items-center justify-center">
          <div className="bg-custom-gray-200 h-full w-[90%] md:w-[100%] p-9 rounded-xl border-2 border-blue-700">
            <div className="text-center">
              <p className="text-blue-400 font-semibold text-4xl">
                NextStep Assessment
              </p>
            </div>

            {!isFinished && totalQuestions > 0 && (
              <>
                <div className="text-center mt-5">
                  <p className="text-white text-lg font-semibold whitespace-pre-wrap">
                    {currentQuestion.question}
                  </p>

                  <div className="flex flex-col">
                    {currentQuestion.options?.map((option, index) => (
                      <button
                        onClick={() => {
                          handleSelectedOption(option);
                        }}
                        key={index}
                        className="mt-5 bg-custom-gray-400 p-2 rounded-xl hover:bg-custom-gray-500 transition-all duration-300 ease-in-out cursor-pointer"
                      >
                        <p className="text-white font-semibol text-sm text-start">
                          {option.label}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-slate-600 font-semibold">
                    Question {currentIndex + 1} of {totalQuestions}
                  </p>
                </div>{" "}
              </>
            )}

            {isFinished && (
              <div className="mt-13 text-center space-y-7">
                <p className="text-green-400 font-bold text-xl whitespace-nowrap">
                  🎉 Assessment Complete!
                </p>
                <p className="text-white mt-5 font-semibold ">
                  Thank you for completing the assessment. Your responses have
                  been submitted.
                </p>
                <Link
                  href="/choosecareerpath"
                  className="bg-blue-700 text-white font-semibold p-2 rounded-xl hover:bg-blue-600 duration-300 transform-all ease-in-out cursor-pointer"
                >
                  Continue
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
