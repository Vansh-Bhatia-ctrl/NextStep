import RoadmapsHeader from "@/app/components/RoadmapsHeader";
import React from "react";

const page = async ({ params }) => {
  const { roadmapId } = await params;

  return (
    <>
      <div>
        <div className="overflow-x-hidden min-w-screen">
          <RoadmapsHeader />
        </div>
      </div>
    </>
  );
};

export default page;
