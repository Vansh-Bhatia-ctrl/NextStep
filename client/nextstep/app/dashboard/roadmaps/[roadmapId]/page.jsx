import React from "react";
import CompletionData from "@/app/components/CompletionData";
import CourseModules from "@/app/components/CourseModules";
import CourseNavbar from "@/app/components/CourseNavbar";
import LearningInsights from "@/app/components/LearningInsights";
import ModuleHeader from "@/app/components/ModuleHeader";
import QuickActions from "@/app/components/QuickActions";
import { unstable_cache } from "next/cache";

const getCachedUserData = (userId) =>
  unstable_cache(
    async (token) => {
      const response = await fetch(
        "http://localhost:4000/api/getlevel/user-level",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error fetching user domain.");
      }

      return response.json();
    },
    [`user-domain-${userId}`],
    {
      revalidate: 300,
      tags: [`user-domain-${userId}`, "user-domains"],
    }
  );

const page = async ({ params }) => {
  const { roadmapId } = await params;

  return (
    <>
      <div>
        <div className="overflow-x-hidden min-w-screen">
          <CourseNavbar />
          <div className="lg:flex lg:flex-row lg:max-w-7xl lg:mx-auto">
            <div>
              <div>
                <div className="p-4">
                  <ModuleHeader />

                  <CourseModules />
                </div>
              </div>
            </div>

            <div>
              <div className="p-4">
                <CompletionData />

                <QuickActions />

                <LearningInsights />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
