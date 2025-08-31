"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left section - tagline */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] items-center justify-center p-12">
        <div className="text-center text-white max-w-md space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Join <span className="text-blue-400">NextStep</span>
          </h1>
          <p className="text-lg text-gray-300">
            Create your account today and unlock AI-powered guidance,
            personalized learning paths, and connections that accelerate your
            career journey.
          </p>
        </div>
      </div>

      {/* Right section - signup form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-950">
        <div className="w-full max-w-md p-6">
          <SignUp
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-800 p-8",
                headerTitle: "text-2xl font-bold text-white text-center mb-2",
                headerSubtitle: "text-gray-400 text-center mb-6",
                socialButtonsBlockButton:
                  "w-full flex items-center justify-center gap-3 bg-gray-800 text-white rounded-lg py-3 font-medium hover:bg-blue-600 transition-all duration-200 mb-3",
                formButtonPrimary:
                  "w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold transition-all duration-200 mt-4",
                formFieldLabel: "text-gray-300 font-medium mb-1",
                formFieldInput:
                  "w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 transition",
                footerAction: "text-gray-400 text-center mt-4",
                footerActionLink:
                  "text-blue-400 hover:text-blue-300 font-medium",
              },
            }}
            redirectUrl="/feed"
          />
        </div>
      </div>
    </div>
  );
}
