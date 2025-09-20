import React from "react";
import CompletionData from "@/app/components/CompletionData";
import CourseModules from "@/app/components/CourseModules";
import CourseNavbar from "@/app/components/CourseNavbar";
import LearningInsights from "@/app/components/LearningInsights";
import ModuleHeader from "@/app/components/ModuleHeader";
import QuickActions from "@/app/components/QuickActions";
import PrevAndNextBttns from "@/app/components/PrevAndNextBttns";

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
                  <ModuleHeader level={roadmapId} />

                  <CourseModules level={roadmapId} />
                </div>
              </div>
            </div>

            <div>
              <div className="p-4">
                <CompletionData />

                <QuickActions />

                <LearningInsights />
                <PrevAndNextBttns />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
