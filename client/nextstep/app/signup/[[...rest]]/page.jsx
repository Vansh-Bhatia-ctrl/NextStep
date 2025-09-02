"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <div className="min-h-screen w-screen overflow-x-hidden bg-custom-gray-100">
        <div className="flex items-center gap-20 justify-center">
          <div className="hidden text-center xl:w-[45%] lg:flex lg:flex-col lg:items-center lg:justify-center">
            <p className="text-white font-extrabold text-5xl leading-tight tracking-wide text-center">
              Join <span className="text-blue-400">NextStep</span>
            </p>
            <p className="text-white font-semibold text-center">
              Create your account today and unlock AI-powered guidance,
              personalized learning paths, and connections that accelerate your
              career journey.
            </p>
          </div>
          <div className="flex items-center justify-center mt-8 lg:mr-4 xl:mr-0">
            <SignUp signInUrl="/signin" afterSignUpUrl="/onboarding" />
          </div>
        </div>
      </div>
    </>
  );
}
