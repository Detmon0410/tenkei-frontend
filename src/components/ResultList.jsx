import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export function ResultList() {
  return (
    <div>
      <div className="flex bg-[#E9EFEC] h-[100vh]">
        <Sidebar />
        <div className="flex flex-col w-screen mr-2 ml-2">
          <Navbar />
          <div className="flex-1 flex-col overflow-x-hidden flex-grow p-2 bg-white mt-2 rounded-md">
            <div className="grid grid-cols-1">
              <h1 className="text-2xl font-bold mt-3 text-center">
                Result List
              </h1>
              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
