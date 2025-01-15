import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export function Status() {
  return (
    <div>
      <div className="flex bg-[#E9EFEC] h-[100vh]">
        <Sidebar />
        <div className="flex flex-col w-screen mr-2 ml-2">
          <Navbar />
          <div className="flex-1 flex-col overflow-x-hidden flex-grow p-2 bg-white mt-2 rounded-md">
            <div className="grid grid-cols-1">
              <h1 className="text-2xl font-bold mt-3 text-center">Status</h1>
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
                            <label className="w-10 text-xs mt-2">
                              Obj_Od_No
                            </label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-8"
                              />
                            </div>
                          </div>

                          <div className="flex  w-auto  gap-7 ml-[50px]">
                            <label className="w-16 text-xs mt-2">
                              Old_Obj_Od_No
                            </label>
                            <div className="w-auto flex gap-2">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-8"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center">
                            <label className="text-xs  w-24 text-end">
                              Sort
                            </label>
                            <div className="w-3/5">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-44">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex gap-2 items-center justify-center ">
                            <input type="checkbox" className="w-6 h-6" />
                            <label className="text-xs  bg-[#ffff99] ">
                              Info_View
                            </label>
                          </div>
                        </div>

                        {/* Group 2 */}
                        <div className="gap-10 flex mb-4 justify-start  ">
                          <div className="flex gap-6 w-48 ">
                            <label className="w-10 text-xs mt-2">
                              Obi_Pt_No
                            </label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-8"
                              />
                            </div>
                          </div>

                          <div className="flex  w-auto  gap-7 ml-[50px]">
                            <label className="w-16 text-xs mt-2">
                              Old_Obi_Pt_No
                            </label>
                            <div className="w-auto flex gap-2">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-8"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center">
                            <label className="text-xs  w-24 text-end">
                              Print_Object
                            </label>
                            <div className="w-3/5">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-44">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex gap-2 items-center justify-center">
                            <input type="checkbox" className="w-6 h-6" />
                            <label className="text-xs  bg-[#ffff99] ">
                              Color_Separate
                            </label>
                          </div>
                        </div>

                        {/* Group 3 */}
                        <div className="gap-10 flex mb-4 justify-start  ">
                          <div className="flex gap-6 w-48 ">
                            <label className="w-10 text-xs mt-2">
                              Obi_Cs_No
                            </label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-8"
                              />
                            </div>
                          </div>

                          <div className="flex  w-auto  gap-7 ml-[50px]">
                            <label className="w-16 text-xs mt-2">
                              Old_Obj_Cs_No
                            </label>
                            <div className="w-auto flex gap-2">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-8"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center">
                            <label className="text-xs  w-24 text-end">
                              Mark_Days
                            </label>
                            <div className="w-auto flex gap-2">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-7 bg-[#ffff99] "
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center justify-center">
                            <input type="checkbox" className="w-6 h-6" />
                            <label className="text-xs  bg-[#ffff99] ">
                              Result_Date_View
                            </label>
                          </div>
                        </div>

                        {/* Group 4 */}
                        <div className="gap-10 flex mb-4 justify-start ">
                          <div className="flex gap-6 w-48 ">
                            <label className="w-10 text-xs mt-2">
                              Obj_Pr_No
                            </label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-8"
                              />
                            </div>
                          </div>

                          <div className="flex  w-auto  gap-7 ml-[50px]">
                            <label className="w-16 text-xs mt-2">
                              Old_Obj_Pr_No
                            </label>
                            <div className="w-auto flex gap-2">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-8"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center ml-4">
                            <label className="text-xs  w-24 text-end">
                              Od_Pend
                            </label>
                            <div className="w-3/5">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-20 ">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex gap-2 items-center ml-16">
                            <label className="text-xs  w-16 text-end">
                              Pt_Pend
                            </label>
                            <div className="w-3/5">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-28">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Group 5 */}
                        <div className="gap-10 flex mb-4 justify-start  ">
                          <div className="flex gap-6 w-48 ">
                            <label className="w-10 text-xs mt-2">
                              Act_Pr_No
                            </label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-8"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center ml-[390px]">
                            <label className="text-xs  w-24 text-end">
                              Customer1
                            </label>
                            <div className="w-3/5">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-20 ">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-7 -ml-8"
                            />
                          </div>

                          <div className="flex gap-2 items-center -ml-6">
                            <label className="text-xs  w-16 text-end">
                              Cus_Name1
                            </label>
                            <div className="w-3/5">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-28 h-7 ml-0.5 bg-[#ccffff]"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Group 6 */}
                        <div className="gap-10 flex mb-4 justify-start  ">
                          <div className="flex gap-2 items-center ml-[623px]">
                            <label className="text-xs  w-24 text-end">
                              Customer2
                            </label>
                            <div className="w-3/5">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-20 ">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-7 -ml-8"
                            />
                          </div>

                          <div className="flex gap-2 items-center -ml-6">
                            <label className="text-xs  w-16 text-end">
                              Cus_Name2
                            </label>
                            <div className="w-3/5">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-28 h-7 ml-0.5 bg-[#ccffff]"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Group 7 */}
                        <div className="gap-10 flex mb-4 justify-start ">
                          <div className="flex gap-2 items-center ml-[623px]">
                            <label className="text-xs  w-24 text-end">
                              Customer3
                            </label>
                            <div className="w-3/5">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-20 ">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-7 -ml-8"
                            />
                          </div>

                          <div className="flex gap-2 items-center -ml-6">
                            <label className="text-xs  w-16 text-end">
                              Cus_Name3
                            </label>
                            <div className="w-3/5">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-28 h-7 ml-0.5 bg-[#ccffff]"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Group 8 */}
                        <div className="gap-10 flex mb-4 justify-start  ">
                          <div className="flex gap-2 items-center ml-[615px]">
                            <label className="text-xs  w-24 text-end">
                              Not_Customer
                            </label>
                            <div className="w-3/5">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-20 ">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-7 -ml-6"
                            />
                          </div>

                          <div className="flex gap-2 items-center -ml-10">
                            <label className="text-xs  w-16 text-end">
                              Item1
                            </label>
                            <div className="w-3/5">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-16 ">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-20 h-7 -ml-5 "
                            />
                          </div>
                        </div>

                        {/* Group 9 */}
                        <div className="gap-10 flex mb-4 justify-start ">
                          <div className="flex gap-2 items-center ml-[600px]">
                            <label className="text-xs  w-24 text-end">
                              Order_Progress
                            </label>
                            <div className="w-3/5">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-44 ">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex gap-2 items-center -ml-14">
                            <label className="text-xl  w-16 text-end pr-3">
                              ~
                            </label>
                            <div className="w-3/5">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-[149px] ">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Group 10 */}
                        <div className="gap-10 flex mb-4 justify-start  ">
                          <div className="flex gap-6 w-48 ">
                            <label className="w-12 text-xs mt-2">
                              Obj_PrG_CD
                            </label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-8"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center ml-[370px]">
                            <label className="text-xs  w-24 text-end">
                              Plan_Progress
                            </label>
                            <div className="w-3/5">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-44 ">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex gap-2 items-center -ml-14">
                            <label className="text-xl  w-16 text-end pr-3">
                              ~
                            </label>
                            <div className="w-3/5">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-[149px] ">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Group 11 */}
                        <div className="gap-10 flex mb-4 justify-start  ">
                          <div className="flex gap-6 w-48 ">
                            <label className="w-12 text-xs mt-2">
                              Obj_Pr_CD
                            </label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-8"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center ml-[370px]">
                            <label className="text-xs  w-24 text-end">
                              Parts_No
                            </label>
                            <div className="w-3/5">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-7 bg-[#ccffff]"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center -ml-14">
                            <label className="text-xl  w-16 text-end pr-3">
                              ~
                            </label>
                            <div className="w-3/5">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-[150px] h-7 bg-[#ccffff]"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Group 12 */}
                        <div className="gap-10 flex mb-4 justify-start  -ml-2">
                          <div className="flex gap-6 w-48 ">
                            <label className="w-14 text-xs mt-2">
                              TT_WIP_Name
                            </label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-8"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center ml-[480px]">
                            <label className="text-xs  w-24 text-end">
                              Days_Before
                            </label>
                            <div className="w-3/5">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-20 h-7 bg-[#ffffcc]"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center -ml-[49px]">
                            <label className="text-xl  w-16 text-end pr-3">
                              ~
                            </label>

                            <label className="text-xs  w-24 text-end -ml-2">
                              Days_After
                            </label>
                            <div className="w-3/5">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-20 h-7 bg-[#ffffcc]"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Group 13 */}
                        <div className="gap-10 flex mb-4 justify-start -ml-8">
                          <div className="flex gap-6 w-48 ">
                            <label className="w-20 text-xs mt-2">
                              WIP_Extract_Time
                            </label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-8"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center ml-[400px]">
                            <label className="text-xs  w-24 text-end">
                              Plan_Date
                            </label>
                            <div className="w-3/5">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-20 h-7 bg-[#ccffff]"
                              />
                            </div>
                            <div className="flex gap-2 items-center justify-center -ml-5">
                              <input type="checkbox" className="w-6 h-6" />
                              <label className="text-xs  bg-[#ffff99] ">
                                Result_Search
                              </label>
                            </div>
                          </div>

                          <div className="flex gap-2 items-center -ml-[49px]">
                            <label className="text-xl  w-16 text-end pr-3">
                              ~
                            </label>

                            <div className="w-3/5">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-[155px] h-7 bg-[#ccffff]"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Group 14 */}
                        <div className="gap-10 flex mb-4 justify-start ">
                          <div className="flex gap-6 w-48 ">
                            <div className="flex gap-2 items-center justify-center -ml-5">
                              <input type="checkbox" className="w-6 h-6" />
                              <label className="text-xl  bg-[#ffff99] ">
                                Cost_New
                              </label>
                            </div>
                          </div>

                          <div className="flex flex-col gap-4">
                            <div className="flex gap-2 items-center ml-2">
                              <label className="text-xs w-24 text-end">
                                Id_Od_Progress
                              </label>
                              <div className="w-3/5">
                                <select className="border-gray-500 border-solid border-2 rounded-md  w-16">
                                  <option value=""></option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                </select>
                              </div>
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-7 -ml-9"
                              />
                            </div>
                            <div className="flex gap-2 items-center ml-1.5">
                              <label className="text-xs w-24 text-end">
                                Old_PI_Progress
                              </label>
                              <div className="w-3/5">
                                <select className="border-gray-500 border-solid border-2 rounded-md  w-16">
                                  <option value=""></option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                </select>
                              </div>
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-7 -ml-9"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center ml-[110px]">
                            <label className="text-xs  w-24 text-end">
                              Result Date
                            </label>
                            <div className="w-3/5">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-40 h-7 bg-[#ccffff]"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 items-center -ml-[49px]">
                            <label className="text-xl  w-16 text-end pr-3">
                              ~
                            </label>

                            <div className="w-3/5">
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-[155px] h-7 bg-[#ccffff]"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Group 15 */}
                        <div className="gap-10 flex mb-4 justify-start ">
                          <div className="flex gap-6 w-48 ">
                            <div className="flex gap-2 items-center justify-center -ml-5">
                              <input type="checkbox" className="w-6 h-6" />
                              <label className="text-xl  bg-[#ffff99] ">
                                Cost_Save
                              </label>
                            </div>
                          </div>

                          <div className="flex flex-col gap-4">
                            <div className="flex gap-2 items-center ml-[10px]">
                              <label className="text-xs w-24 text-end">
                                Id_Cs_Progress
                              </label>
                              <div className="w-3/5 ">
                                <select className="border-gray-500 border-solid border-2 rounded-md  w-16">
                                  <option value=""></option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                </select>
                              </div>
                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-44 h-7 -ml-[60px]"
                              />
                              <div className="flex gap-2 items-center ml-[115px]">
                                <label className="text-xs  w-24 text-end">
                                  ProcessG
                                </label>
                                <div className="w-3/5">
                                  <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-80">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2 items-center ml-1.5">
                              <label className="text-xs w-24 text-end ml-[10px]">
                                Old_Cs_Progress
                              </label>

                              <input
                                type="text"
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-52 h-7 ml-1"
                              />
                              <div className="flex gap-2 items-center ml-[115px]">
                                <label className="text-xs  w-24 text-end">
                                  TG_Process
                                </label>
                                <div className="w-3/5">
                                  <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-80">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Group 16 */}
                        <div className="gap-10 flex mb-4 justify-start ">
                          <div className="flex gap-6 w-48 ">
                            <div className="flex gap-2 items-center justify-center -ml-5">
                              <input type="checkbox" className="w-6 h-6" />
                              <label className="text-xl  bg-[#ffff99] ">
                                Cost_Multi
                              </label>
                            </div>
                          </div>

                          <div className="flex gap-6 w-48 ">
                            <div className="flex gap-2 items-center justify-center -ml-5">
                              <input type="checkbox" className="w-6 h-6" />
                              <label className="text-xl  bg-[#ffff99] ">
                                Old_Cs_Final
                              </label>
                            </div>
                          </div>

                          <div className="flex gap-2 items-center justify-center ml-[400px]">
                            <input type="checkbox" className="w-6 h-6" />
                            <label className="text-sm  font-medium w-36">
                              ProcessG List View
                            </label>
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
    </div>
  );
}
