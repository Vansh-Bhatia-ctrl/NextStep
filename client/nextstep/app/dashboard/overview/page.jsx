import RecentActivity from "@/app/components/RecentActivity";
import UserStats from "@/app/components/UserStats";
import WelcomeSections from "@/app/components/WelcomeSections";
import React from "react";

const page = () => {
  return (
    <>
      <div className="px-2 md:px-4 min-h-screen w-screen bg-custom-gray-100 overflow-x-hidden md:-ml-[30px]">
        <div className="flex-1 md:ml-[270px] px-2 md:px-4 pr-4">
          {/*Welcome/Progress section*/}
          <div className="text-center">
            <WelcomeSections />
          </div>

          {/*User stats section*/}
          <div className="mt-4">
            <UserStats />
          </div>

          {/*Recent Activity Section*/}
          <div className="mt-4">
            <RecentActivity />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
