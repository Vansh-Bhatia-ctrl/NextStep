import React from "react";
import WelcomeSections from "../components/WelcomeSections";

const page = () => {
  return (
    <>
      <div className="min-h-screen w-screen bg-custom-gray-100 overflow-x-hidden pt-18">
        <div className="flex">
          {/*Sidebar*/}
          <div className="fixed inset-y-0 left-0 bg-custom-gray-300 w-[270px] hidden md:block "></div>

          <div className="flex-1 md:ml-[270px]">
            {/*Welcome/Progress section*/}
            <div className="text-center">
              <WelcomeSections />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
