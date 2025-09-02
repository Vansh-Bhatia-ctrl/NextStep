"use client";
import React, { useEffect } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const OPTIONS = [
  {
    id: 1,
    option: "I've never coded before",
  },
  {
    id: 2,
    option: "Less than one year",
  },
  {
    id: 3,
    option: "1-3 years",
  },
  {
    id: 4,
    option: "3+ years",
  },
];
const Page = () => {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();
  const dispatch = useDispatch();

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
      }
      const data = await response.json();
      console.log(data);

      dispatch(
        setUser({
          clerkUserId: user.id,
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          onBoardingStatus: false,
        })
      );
    } catch (error) {
      console.log("Something went wrong please try again.", error);
    }
  };

  useEffect(() => {
    saveUserToDb();
  }, [user, isLoaded]);

  return (
    <>
      <div className="min-h-screen w-screen bg-custom-gray-100 flex items-center justify-center overflow-x-hidden">
        <div className="w-[90vh] flex items-center justify-center">
          <div className="bg-custom-gray-200 h-full w-[90%] md:w-[100%] p-9 rounded-xl border border-white -mt-25">
            <div className="text-center">
              <p className="text-blue-400 font-semibold text-4xl">
                NextStep Assessment
              </p>
            </div>

            <div className="text-center mt-5">
              <p className="text-white text-lg font-semibold whitespace-pre-wrap">
                How long have you been coding/programming?
              </p>

              {OPTIONS.map((option) => (
                <div
                  key={option.id}
                  className="mt-5 bg-custom-gray-400 p-2 rounded-xl hover:bg-custom-gray-500 transition-all duration-300 ease-in-out cursor-pointer"
                >
                  <p className="text-white font-semibol text-sm text-start">
                    {option.option}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-slate-600 font-semibold">Question 1of 8</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
