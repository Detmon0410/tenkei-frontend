import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export function EC1() {
  return (
    <div>
      <div className="flex bg-[#E9EFEC] h-[100vh]">
        <Sidebar />
        <div className="flex flex-col w-screen mr-2 ml-2">
          <Navbar />
          <div className="flex-1 flex-col overflow-x-hidden flex-grow p-2 bg-white mt-2 rounded-md">
            <div className="grid grid-cols-1">
              <h1 className="text-2xl font-bold mt-3 text-center">EC 1</h1>
              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

              <div className="w-full mt-5 overflow-x-auto pr-10">
                <div className="min-w-[1800px] w-full mb-7">
                  {/* Start Group 1 */}
                  <div className="flex pl-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center">
                      <label className="font-bold text-xs">Search_Type</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Delivery1</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Delivery2</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Delivery3</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">View_Schedule</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Plan_Target
                        </label>
                        <select className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-20">
                          <option value=""></option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 1 */}

                  {/* Start Group 2 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pr-[52px]">
                      <label className="font-bold text-xs">
                        [Order_Info_Search]
                      </label>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center">
                      <label className="font-bold text-xs">Format</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-20">
                      <label className="font-bold text-xs">Change_Page</label>
                    </div>
                    <div className="relative w-40 lg:w-56">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-12">
                      <label className="font-bold text-xs">Target</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[50px]">
                      <label className="font-bold text-xs">Mark_days</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Order_Progress
                        </label>
                        <select className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-20">
                          <option value=""></option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <select className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-20">
                          <option value=""></option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 1 */}

                  {/* Start Group 2 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pr-[38px]">
                      <label className="font-bold text-xs">Order_No</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-5 pl-10">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        className="w-5 h-5 rounded-full"
                      />
                      <label
                        htmlFor="checkbox1"
                        className="text-sm bg-[#ffff99]"
                      >
                        Info_View
                      </label>

                      <input
                        type="checkbox"
                        id="checkbox2"
                        className="w-5 h-5 rounded-full"
                      />
                      <label
                        htmlFor="checkbox2"
                        className="text-sm bg-[#ffff99]"
                      >
                        color_View
                      </label>

                      <input
                        type="checkbox"
                        id="checkbox3"
                        className="w-5 h-5 rounded-full"
                      />
                      <label
                        htmlFor="checkbox3"
                        className="text-sm bg-[#ffff99]"
                      >
                        Result_Date_View
                      </label>

                      <input
                        type="checkbox"
                        id="checkbox4"
                        className="w-5 h-5 rounded-full"
                      />
                      <label
                        htmlFor="checkbox4"
                        className="text-sm bg-[#ffff99]"
                      >
                        CT_View
                      </label>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-44">
                      <label className="font-bold text-xs">Ctl_Person</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Delivery_CAT
                        </label>
                        <select className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-20">
                          <option value=""></option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <select className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-20">
                          <option value=""></option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 2 */}

                  {/* Start Group 3 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pr-7">
                      <label className="font-bold text-xs">NAV_Name</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Product_Grp</label>
                    </div>
                    <div className="relative w-24 ml-1">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    <span className="text-lg mx-3">~</span>
                    {/* Start */}
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[123px]">
                      <label className="font-bold text-xs">Sales_Grp</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Schedule_CAT
                        </label>
                        <select className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-20">
                          <option value=""></option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <select className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-20">
                          <option value=""></option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 3 */}

                  {/* Start Group 4 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center">
                      <label className="font-bold text-xs">Product_Name</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Not_Pd_Grp1</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Price_CAT</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[54px]">
                      <label className="font-bold text-xs">Sales_Person</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Target__CAT
                        </label>
                        <select className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-20">
                          <option value=""></option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <select className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-20">
                          <option value=""></option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 4 */}

                  {/* Start Group 5 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pr-10">
                      <label className="font-bold text-xs">NAV_Size</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Not_Pd_Grp2</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Request_CAT</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />

                    <div className="relative w-24 ml-1">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />

                    <div className="relative w-24 ml-1">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}

                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Request_Delivery
                        </label>
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 5 */}

                  {/* Start Group 6 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pr-5">
                      <label className="font-bold text-xs">Product_Size</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-10">
                      <label className="font-bold text-xs">Customer1</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[265px]">
                      <label className="font-bold text-xs">
                        Od_No_of_Customer
                      </label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-56 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Mate1</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-28 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          NAV_Delivery
                        </label>
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 6 */}

                  {/* Start Group 7 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pr-4">
                      <label className="font-bold text-xs">Cus_Draw_No</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-10">
                      <label className="font-bold text-xs">Customer2</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-8">
                      <label className="font-bold text-xs">Cus_Name1</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-52 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Item1</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Mate2</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-28 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Confirm_Delivery
                        </label>
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 7 */}

                  {/* Start Group 8 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pr-3">
                      <label className="font-bold text-xs">Com_Draw_No</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-10">
                      <label className="font-bold text-xs">Customer3</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-8">
                      <label className="font-bold text-xs">Cus_Name2</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-52 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Item2</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Mate3</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-28 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Product_Received
                        </label>
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 8 */}

                  {/* Start Group 9 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pr-6">
                      <label className="font-bold text-xs">Pd_Draw_No</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-5">
                      <label className="font-bold text-xs">Not_Customer</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-8">
                      <label className="font-bold text-xs">Cus_Name3</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-52 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Item3</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Mate4</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-28 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Product_Received
                        </label>
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 9 */}

                  {/* Start Group 10 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pr-8">
                      <label className="font-bold text-xs">Sales_Note</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[52px]">
                      <label className="font-bold text-xs">Specific1</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-12">
                      <label className="font-bold text-xs">Coating1</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-28 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Item4</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Mate5</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-28 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Product_Complete
                        </label>
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 10 */}

                  {/* Start Group 11 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pr-[45px]">
                      <label className="font-bold text-xs">Pd_Note</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[52px]">
                      <label className="font-bold text-xs">Specific2</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-12">
                      <label className="font-bold text-xs">Coating2</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-28 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-20">
                      <label className="font-bold text-xs">Od_Pent</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[83px]">
                      <label className="font-bold text-xs">Od_CAT1</label>
                    </div>
                    <div className="relative w-28">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          QC_Complete
                        </label>
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 11 */}

                  {/* Start Group 12 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pr-[30px]">
                      <label className="font-bold text-xs">Pd_Remark</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-7">
                      <label className="font-bold text-xs">Not_Specific1</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-12">
                      <label className="font-bold text-xs">Coating3</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-28 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[69px]">
                      <label className="font-bold text-xs">TempShip</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[83px]">
                      <label className="font-bold text-xs">Od_CAT2</label>
                    </div>
                    <div className="relative w-28">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Shipment_Date
                        </label>
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 12 */}

                  {/* Start Group 13 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pr-7">
                      <label className="font-bold text-xs">QC_Remark</label>
                    </div>
                    <div className="relative w-40 lg:w-44">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[28px]">
                      <label className="font-bold text-xs">Not_Specific2</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[46px]">
                      <label className="font-bold text-xs">Not_Coat</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-28 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[75px]">
                      <label className="font-bold text-xs">Unrecive</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[83px]">
                      <label className="font-bold text-xs">Od_CAT3</label>
                    </div>
                    <div className="relative w-28">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Calc_Date
                        </label>
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 13 */}

                  {/* Start Group 14 */}
                  <div className="flex pl-5 mt-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center">
                      <label className="font-bold text-xs">EXT_Date_Time</label>
                    </div>
                    <div className="relative w-40 lg:w-60">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[587px]">
                      <label className="font-bold text-xs">Target_Year</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ffff99] border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[83px]">
                      <label className="font-bold text-xs">Target_Mount</label>
                    </div>
                    <div className="relative w-28">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Calc_Process
                        </label>
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 14 */}
                </div>
              </div>

              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

              <div className="flex items-center font-bold pl-2">
                <label className="mr-2">Plan_Info_Search</label>
              </div>

              <div className="w-full mt-5 overflow-x-auto pr-10">
                <div className="min-w-[1800px] w-full mb-7">
                  {/* Start Group 1 */}
                  <div className="flex pl-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-3">
                      <label className="font-bold text-xs">Parts_No</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-32 ml-7"
                    />
                    {/* End */}
                    <span className="text-lg mx-3">~</span>
                    {/* Start */}
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-16">
                      <label className="font-bold text-xs">Pt_Qty</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-32 ml-4"
                    />
                    {/* End */}
                    <span className="text-lg mx-3">~</span>
                    {/* Start */}
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-20">
                      <label className="font-bold text-xs">Money_Obj</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-52">
                      <label className="font-bold text-xs">Pt_CAT1</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}

                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Plan_Progress
                        </label>
                        <select className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-20">
                          <option value=""></option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <select className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-20">
                          <option value=""></option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 1 */}

                  {/* Start Group 2 */}
                  <div className="flex pl-5 mt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-3">
                      <label className="font-bold text-xs">Pt_Name</label>
                    </div>
                    <div className="relative w-40 ml-7">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[181px]">
                      <label className="font-bold text-xs">Pt_Sp_Qty</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-32 ml-4"
                    />
                    {/* End */}
                    <span className="text-lg mx-3">~</span>
                    {/* Start */}
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[100px]">
                      <label className="font-bold text-xs">Outside</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-52">
                      <label className="font-bold text-xs">Pt_CAT2</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}

                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Parts_Delivery
                        </label>
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <input
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 2 */}

                  {/* Start Group 3 */}
                  <div className="flex pl-5 mt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-3">
                      <label className="font-bold text-xs">Req_Person</label>
                    </div>
                    <div className="relative w-32 ml-4">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-10">
                      <label className="font-bold text-xs">Pt_Mate</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-32 ml-4"
                    />
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-16">
                      <label className="font-bold text-xs">Pt_NG_Qty</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}
                    <span className="text-lg mx-3">~</span>
                    {/* Start */}
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-32 ml-1"
                    />
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-10">
                      <label className="font-bold text-xs">Pt_Pend</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[52px]">
                      <label className="font-bold text-xs">Pt_CAT3</label>
                    </div>
                    <div className="relative w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}

                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">
                          Pl_Process_Date
                        </label>
                        <input
                          type="text"
                          className="bg-[#4fe2e2] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>

                      <span className="text-lg">~</span>

                      <div className="relative">
                        <input
                          type="text"
                          className="bg-[#4fe2e2] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-20"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 3 */}

                  {/* Start Group 4 */}
                  <div className="flex pl-5 mt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-3">
                      <label className="font-bold text-xs">Part_Note</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-32 ml-6"
                    />
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[158px]">
                      <label className="font-bold text-xs">Pt_Remark</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-32 ml-4"
                    />
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[67px]">
                      <label className="font-bold text-xs">Parts_Info</label>
                    </div>
                    <input
                      type="text"
                      className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-40 ml-1"
                    />
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-8">
                      <label className="font-bold text-xs">Sort1</label>
                    </div>
                    <div className="relative w-32">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-8">
                      <label className="font-bold text-xs">Sort2</label>
                    </div>
                    <div className="relative w-32">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}

                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-8">
                      <label className="font-bold text-xs">Sort3</label>
                    </div>
                    <div className="relative w-32">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center space-x-2 ml-auto">
                      <div className="flex items-center relative">
                        <label className="text-xs font-bold mr-1">Sort4</label>
                        <input
                          type="text"
                          className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-36"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 4 */}
                </div>
              </div>

              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

              <div className="w-full mt-5 overflow-x-auto pr-10">
                <div className="min-w-[1000px] w-full mb-7">
                  {/* Start Group 1 */}
                  <div className="flex pl-5">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pr-[52px]">
                      <label className="font-bold text-xs">
                        [List]
                      </label>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center">
                      <label className="font-bold text-xs">Select_Od_No</label>
                    </div>
                    <div className="relative w-40 lg:w-56">
                      <input
                        type="text"
                        className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-10">
                      <label className="font-bold text-xs">Select_Pt_No</label>
                    </div>
                    <div className="relative w-40 lg:w-56">
                      <input
                        type="text"
                        className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 1 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
