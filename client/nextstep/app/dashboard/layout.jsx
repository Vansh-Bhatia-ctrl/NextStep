import React from "react";
import SideBar from "../components/SideBar";

const layout = async ({ children }) => {
  return (
    <div className="min-h-screen w-screen bg-custom-gray-100 overflow-x-hidden pt-18 flex">
      <SideBar />

      <div className="flex-1 overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default layout;
