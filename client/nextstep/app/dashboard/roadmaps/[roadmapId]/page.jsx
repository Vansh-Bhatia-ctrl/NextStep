import CommonMistakesandExpertInsight from "@/app/components/CommonMistakesandExpertInsight";
import CourseContentHeader from "@/app/components/CourseContentHeader";
import ExampleSection from "@/app/components/ExampleSection";
import Explanation from "@/app/components/Explanation";
import ResourcesSection from "@/app/components/ResourcesSection";
import RoadmapsHeader from "@/app/components/RoadmapsHeader";
import React from "react";

const page = async ({ params }) => {
  const { roadmapId } = await params;

  return (
    <>
      <div>
        <div>
          <RoadmapsHeader />
        </div>

        <div className="mt-4 p-2 lg:max-w-5xl lg:mx-auto xl:max-w-[1470px] xl:mx-auto">
          <CourseContentHeader />
          <div className="mt-6">
            <Explanation />
          </div>
          <div className="mt-6">
            <ExampleSection />
          </div>
          <div className="mt-6">
            <CommonMistakesandExpertInsight />
          </div>

          <div className="mt-6">
            <ResourcesSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
