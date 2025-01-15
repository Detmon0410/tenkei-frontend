import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function LinkDashborad() {
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col overflow-x-hidden flex-grow p-2 bg-white mt-2 rounded-md">
          <h1 className="text-2xl font-bold mt-3 text-center">Link</h1>
          <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

          <div className="overflow-x-auto w-full bg-white ">
            <div className="grid grid-cols-12 min-w-auto ">
              <br />
              <div className="col-span-12 me-5 mt-5 ml-14 ">
                <div className="grid grid-cols-12 gap-4 ">
                  <div className="col-span-12 md:col-span-9">
                    {/* Group 1 */}
                    <div className="gap-10 flex mb-4 justify-start me-5 ">
                      <div className="flex gap-6 w-48 ">
                        <label className="w-24 text-xs mt-2">LINK_Name1</label>
                        <div className="w-auto">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8"
                          />
                        </div>
                      </div>

                      <div className="flex  w-auto  gap-7 ml-[250px]">
                        <label className="w-auto text-xs mt-2">
                          LINK_Name6
                        </label>
                        <div className="w-auto flex gap-2">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Group 2 */}
                    <div className="gap-10 flex mb-4 justify-start me-5 ">
                      <div className="flex gap-6 w-48 ">
                        <label className="w-24 text-xs mt-2">LINK1</label>
                        <div className="w-auto">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8 ml-[36px]"
                          />
                        </div>
                      </div>

                      <div className="flex  w-auto  gap-7 ml-[250px]">
                        <label className="w-auto text-xs mt-2">LINK6</label>
                        <div className="w-auto flex gap-2">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8 ml-[38px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Group 3 */}
                    <div className="gap-10 flex mb-4 justify-start me-5 ">
                      <div className="flex gap-6 w-48 ">
                        <label className="w-24 text-xs mt-2">LINK_Name2</label>
                        <div className="w-auto">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8"
                          />
                        </div>
                      </div>

                      <div className="flex  w-auto  gap-7 ml-[250px]">
                        <label className="w-auto text-xs mt-2">
                          LINK_Name7
                        </label>
                        <div className="w-auto flex gap-2">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Group 4 */}
                    <div className="gap-10 flex mb-4 justify-start me-5 ">
                      <div className="flex gap-6 w-48 ">
                        <label className="w-24 text-xs mt-2">LINK2</label>
                        <div className="w-auto">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8 ml-[36px]"
                          />
                        </div>
                      </div>

                      <div className="flex  w-auto  gap-7 ml-[250px]">
                        <label className="w-auto text-xs mt-2">LINK7</label>
                        <div className="w-auto flex gap-2">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8 ml-[38px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Group 5 */}
                    <div className="gap-10 flex mb-4 justify-start me-5 ">
                      <div className="flex gap-6 w-48 ">
                        <label className="w-24 text-xs mt-2">LINK_Name3</label>
                        <div className="w-auto">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8"
                          />
                        </div>
                      </div>

                      <div className="flex  w-auto  gap-7 ml-[250px]">
                        <label className="w-auto text-xs mt-2">
                          LINK_Name8
                        </label>
                        <div className="w-auto flex gap-2">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Group 6 */}
                    <div className="gap-10 flex mb-4 justify-start me-5 ">
                      <div className="flex gap-6 w-48 ">
                        <label className="w-24 text-xs mt-2">LINK3</label>
                        <div className="w-auto">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8 ml-[36px]"
                          />
                        </div>
                      </div>

                      <div className="flex  w-auto  gap-7 ml-[250px]">
                        <label className="w-auto text-xs mt-2">LINK8</label>
                        <div className="w-auto flex gap-2">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8 ml-[38px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Group 7 */}
                    <div className="gap-10 flex mb-4 justify-start me-5 ">
                      <div className="flex gap-6 w-48 ">
                        <label className="w-24 text-xs mt-2">LINK_Name4</label>
                        <div className="w-auto">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8"
                          />
                        </div>
                      </div>

                      <div className="flex  w-auto  gap-7 ml-[250px]">
                        <label className="w-auto text-xs mt-2">
                          LINK_Name9
                        </label>
                        <div className="w-auto flex gap-2">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Group 8 */}
                    <div className="gap-10 flex mb-4 justify-start me-5 ">
                      <div className="flex gap-6 w-48 ">
                        <label className="w-24 text-xs mt-2">LINK4</label>
                        <div className="w-auto">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8 ml-[36px]"
                          />
                        </div>
                      </div>

                      <div className="flex  w-auto  gap-7 ml-[250px]">
                        <label className="w-auto text-xs mt-2">LINK9</label>
                        <div className="w-auto flex gap-2">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8 ml-[38px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Group 9 */}
                    <div className="gap-10 flex mb-4 justify-start me-5 ">
                      <div className="flex gap-6 w-48 ">
                        <label className="w-24 text-xs mt-2">LINK_Name5</label>
                        <div className="w-auto">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8"
                          />
                        </div>
                      </div>

                      <div className="flex  w-auto  gap-7 ml-[250px]">
                        <label className="w-14 text-xs mt-2">LINK_Name10</label>
                        <div className="w-auto flex gap-2">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8 ml-[15px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Group 10 */}
                    <div className="gap-10 flex mb-4 justify-start me-5 ">
                      <div className="flex gap-6 w-48 ">
                        <label className="w-24 text-xs mt-2">LINK5</label>
                        <div className="w-auto">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8 ml-[36px]"
                          />
                        </div>
                      </div>

                      <div className="flex  w-auto  gap-7 ml-[250px]">
                        <label className="w-auto text-xs mt-2">LINK10</label>
                        <div className="w-auto flex gap-2">
                          <input
                            type="text"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-80 h-8 ml-[34px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
