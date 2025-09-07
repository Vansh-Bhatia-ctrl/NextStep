import React from "react";
import SideBar from "../components/SideBar";

const layout = async ({ children }) => {
  return (
    <div className="min-h-screen w-screen bg-custom-gray-100 overflow-x-hidden pt-18 flex">
      <SideBar />

      <div className="flex-1 px-2 md:px-4 overflow-x-hidden md:-ml-[30px]">
        {children}
      </div>
    </div>
  );
};

export default layout;
