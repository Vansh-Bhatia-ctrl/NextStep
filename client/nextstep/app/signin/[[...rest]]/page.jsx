"use client";
import { SignIn } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import React from "react";

const page = () => {
  const { userId, isLoaded } = useAuth();
  return (
    <>
      <div className="bg-custom-gray-100 min-h-screen w-screen overflow-x-hidden">
        <div className="flex  items-center justify-center gap-8 xl:gap-40">
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-2 xl:w-[30%]">
            <p className="text-white font-extrabold text-5xl text-center tracking-wide leading-tight">
              Step Into Your <span className="text-blue-400">NextStep</span>
            </p>
            <p className="text-white font-semibold text-center">
              Unlock AI-powered guidance, personalized learning paths, and
              connections that accelerate your career journey.
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            {!isLoaded ? (
              <p className="text-white">Loading...</p>
            ) : (
              <SignIn signUpUrl="/signup" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
