import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Searchplan() {
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col p-2 overflow-x-auto">
          <div className="bg-white grid grid-cols-1 pr-4">
            <div className="flex items-center justify-between w-full px-4">
              <h1 className="text-2xl font-bold text-center flex-grow">
                Search_Plan
              </h1>
              <div className="flex items-center space-x-2 py-2">
                <label className="text-xs font-medium">Date:</label>
                <input
                  type="text"
                  className="border-2 border-gray-500 rounded-md px-2 py-1 text-sm w-32 text-center"
                  value={new Date().toLocaleDateString("th-TH", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                  readOnly
                />
              </div>
            </div>

            <hr className="border-y-[1px] border-gray-300" />

            <div className="overflow-x-auto w-full ">
              <div className="grid grid-cols-12 min-w-[1800px] ">
                <div className="w-full content-start ms-5 mt-4">
                  <label className=" text-xs">Order_Info_Search_LBL</label>
                </div>
                <br />
                <div className="col-span-12 me-5 mt-5 ml-14 ">
                  <div className="grid grid-cols-12 gap-4 ">
                    <div className="col-span-12 md:col-span-9">
                      {/* Group 1 */}
                      <div className="gap-10 flex mb-4 justify-start me-5 ">
                        <div className="flex gap-6 w-48 ">
                          <label className="w-24 text-xs mt-2">
                            Search_Type
                          </label>
                          <div className="w-auto">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99] w-32 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex  w-auto  gap-7 ml-[734px]">
                          <label className="w-auto text-xs mt-2">
                            Otl_Person_CD
                          </label>
                          <div className="w-auto flex gap-2">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8 bg-[#ccffff]">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 gap-2">
                          <label className="w-24 text-xs -mt-1">
                            Od_Progress_CD
                          </label>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                          <span className="text-lg font-bold">~</span>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                        </div>
                      </div>

                      {/* Group 2 */}
                      <div className="gap-10 flex mb-4 justify-start me-5 ">
                        <div className="flex gap-7 w-48 ">
                          <label className="w-24 text-xs mt-2">
                            S_Material1
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-32 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-7 ml-8">
                          <label className="w-auto text-xs mt-2">
                            Material1
                          </label>
                          <div className="w-auto ml-[14px]">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-7 ml-4">
                          <label className="mt-2 w-auto text-xs">
                            S_H_Treatment1
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex  w-auto  gap-7 ml-[239px]">
                          <label className="w-auto text-xs mt-2">
                            S_St_Grp_CD
                          </label>
                          <div className="w-auto flex gap-2">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-white w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 gap-2">
                          <label className="w-24 text-xs -mt-1">
                            Request_Delivery
                          </label>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                          <span className="text-lg font-bold">~</span>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                        </div>
                      </div>
                      {/* Group 3 */}
                      <div className="gap-10 flex mb-4 justify-start me-5 ">
                        <div className="flex gap-7 w-48 ">
                          <label className="w-24 text-xs mt-2">
                            S_Material2
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-32 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-7 ml-8">
                          <label className="w-auto text-xs mt-2">
                            Material2
                          </label>
                          <div className="w-auto ml-[14px]">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-7 ml-4">
                          <label className="mt-2 w-auto text-xs">
                            S_H_Treatment2
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex  w-auto gap-7 ml-[214px]">
                          <label className="w-auto text-xs mt-2">
                            S_St_Person_CDP
                          </label>
                          <div className="w-auto flex gap-2">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-white w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 gap-2 ">
                          <label className="w-24 text-xs -mt-1">
                            St_NAV__Delivery
                          </label>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                          <span className="text-lg font-bold">~</span>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                        </div>
                      </div>
                      {/* Group 4 */}
                      <div className="gap-10 flex mb-4 justify-start me-5 ">
                        <div className="flex gap-2 w-48 ">
                          <label className="w-24 text-xs mt-2">
                            Product_Name
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-32 h-8 bg-[#ccffff]"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-7 ml-8">
                          <label className="w-auto text-xs mt-2">
                            Request_CD
                          </label>
                          <div className="flex gap-2 w-[450px]">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-white w-14 h-8 ">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-14 h-8"
                            />
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-white w-14 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-32 h-8"
                            />
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ccffff] w-14 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-14 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex  w-auto  gap-7  ml-[475px] ">
                          <label className="w-16 text-xs mt-1 mr-2">
                            S_Specific_CD
                          </label>
                          <div className="w-auto flex gap-2">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ccffff] w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 gap-2 ">
                          <label className="w-24 text-xs -mt-1">
                            St_Confirm_Delivery
                          </label>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                          <span className="text-lg font-bold">~</span>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                        </div>
                      </div>

                      {/* Group 5*/}
                      <div className="gap-10 flex mb-4 justify-start me-5 ">
                        <div className="flex gap-10 w-48 ">
                          <label className="w-24 text-xs mt-2">NAV_Size</label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-32 h-8 "
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-[14px] ml-[30px]">
                          <label className="w-auto text-xs mt-2">
                            St_Coating_CD
                          </label>
                          <div className="flex gap-2 w-[450px]">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ccffff] w-14 h-8  ">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>

                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-14 h-8"
                            />
                            <label className="w-auto text-xs mt-2">
                              St_Coating_CD
                            </label>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-32 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex  w-auto  gap-7  ml-[484px] ">
                          <label className="w-16 text-xs mt-1 ">
                            S_Item1_CD
                          </label>
                          <div className="w-auto flex gap-2">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ccffff] w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 gap-2 ">
                          <label className="w-24 text-xs -mt-1">
                            St_Product_Delivery
                          </label>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32 bg-[#ccffff]"
                          />
                          <span className="text-lg font-bold">~</span>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32 bg-[#ccffff]"
                          />
                        </div>
                      </div>

                      {/* Group 6*/}
                      <div className="gap-10 flex mb-4 justify-start me-5 ">
                        <div className="flex gap-5 w-48 ">
                          <label className="w-24 text-xs mt-2">
                            Product_Size
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-32 h-8 bg-[#ccffff]"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-1 ml-[29px]">
                          <label className="w-auto text-xs mt-2">
                            St_Customer_CD
                          </label>
                          <div className="flex gap-2 w-[250px]">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ccffff] w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-36 h-8 "
                            />
                            <label className="w-auto text-xs mt-2">
                              Customer_Name
                            </label>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-32 h-8 bg-[#ccffff]"
                            />
                          </div>
                        </div>
                        <div className="flex  w-auto gap-7  ml-[484px] ">
                          <label className="w-16 text-xs mt-1 ">
                            S_Item2_CD
                          </label>
                          <div className="w-auto flex gap-2">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs  w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 gap-2 ">
                          <label className="w-24 text-xs -mt-1">
                            St_Recieve_Date
                          </label>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32 bg-[#ccffff]"
                          />
                          <span className="text-lg font-bold">~</span>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32 bg-[#ccffff]"
                          />
                        </div>
                      </div>
                      {/* Group 7*/}
                      <div className="gap-10 flex mb-4 justify-start me-5 ">
                        <div className="flex gap-[2px] w-48 ">
                          <label className="w-24 text-xs mt-2">
                            Customer_Draw
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-32 h-8 "
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-1 ml-[29px]">
                          <label className="w-auto text-xs mt-2">
                            St_Customer_CD
                          </label>
                          <div className="flex gap-2 w-[250px]">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ff99cc] w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-36 h-8 "
                            />
                            <label className="w-auto text-xs mt-2">
                              No_of_Customer
                            </label>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-32 h-8 "
                            />
                          </div>
                        </div>
                        <div className="flex  w-auto  gap-7  ml-[484px] ">
                          <label className="w-16 text-xs mt-1 ">
                            S_Item3_CD
                          </label>
                          <div className="w-auto flex gap-2">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs  w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 gap-2 ">
                          <label className="w-24 text-xs -mt-1">
                            St_Complete_Date
                          </label>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32 "
                          />
                          <span className="text-lg font-bold">~</span>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32 "
                          />
                        </div>
                      </div>
                      {/* Group 8*/}
                      <div className="gap-10 flex mb-4 justify-start me-5 ">
                        <div className="flex gap-[2px] w-48 ">
                          <label className="w-24 text-xs mt-2">
                            Company_Draw
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-32 h-8 "
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-[18px] ml-[29px]">
                          <label className="w-auto text-xs mt-2">
                            St_Pd_Grp_CD
                          </label>
                          <div className="flex gap-2 w-[500px]">
                            <div className="flex gap-2 w-[500px]">
                              <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ccffff] w-24 h-8">
                                <option value=""></option>
                                <option value="part1">Part 1</option>
                                <option value="part2">Part 2</option>
                                <option value="part3">Part 3</option>
                              </select>
                              <input
                                type="text"
                                className="border border-black rounded px-2 py-1 text-xs w-32"
                              />
                              <span className="text-lg font-bold">~</span>
                              <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ccffff] w-24 h-8">
                                <option value=""></option>
                                <option value="part1">Part 1</option>
                                <option value="part2">Part 2</option>
                                <option value="part3">Part 3</option>
                              </select>
                              <input
                                type="text"
                                className="border border-black rounded px-2 py-1 text-xs w-32"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex  w-auto gap-7  ml-[484px] ">
                          <label className="w-16 text-xs mt-1 ">
                            S_Item4_CD
                          </label>
                          <div className="w-auto flex gap-2">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs  w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 gap-2 ">
                          <label className="w-24 text-xs -mt-1">
                            St_Complete_Date
                          </label>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32 "
                          />
                          <span className="text-lg font-bold">~</span>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32 "
                          />
                        </div>
                      </div>
                      {/* Group 9*/}
                      <div className="gap-10 flex mb-4 justify-start me-5 ">
                        <div className="flex gap-3 w-48 ">
                          <label className="w-24 text-xs mt-2">
                            Product_Draw
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-32 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-3 ml-[28px]">
                          <label className="w-auto text-xs mt-2">
                            St_Pd_Grp_CD1
                          </label>
                          <div className="flex gap-2 w-[600px]">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ff99cc] w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-36 h-8 "
                            />
                            <label className="w-auto text-xs mt-2">
                              Instructions
                            </label>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8 bg-[#ccffff]"
                            />
                            <label className="w-auto text-xs mt-2">
                              Pd_Remark
                            </label>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex  w-auto  gap-7  ml-[484px] ">
                          <label className="w-16 text-xs mt-1">
                            S_I_Remark
                          </label>
                          <div className="w-auto flex gap-2">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs  w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 gap-2 ">
                          <label className="w-24 text-xs -mt-1">
                            Shipment_Date
                          </label>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                          <span className="text-lg font-bold">~</span>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                        </div>
                      </div>

                      {/* Group 10*/}
                      <div className="gap-10 flex mb-4 justify-start me-5 ">
                        <div className="flex gap-6 w-48 ">
                          <label className="w-24 text-xs mt-2">
                            Instructions
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-32 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-3 ml-[28px]">
                          <label className="w-auto text-xs mt-2">
                            St_Pd_Grp_CD2
                          </label>
                          <div className="flex gap-2 w-[600px]">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ff99cc] w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-36 h-8 "
                            />
                            <label className="w-auto text-xs mt-2">
                              S_Od_CAT1
                            </label>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8 bg-[#ccffff]"
                            />
                            <label className="w-auto text-xs mt-2">
                              S_Od_CAT_2
                            </label>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex  w-auto  gap-7  ml-[483px] ">
                          <label className="w-16 text-xs mt-1 ">
                            S_Od_CAT_3
                          </label>
                          <div className="w-auto flex gap-2">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs  w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 gap-2 ">
                          <label className="w-24 text-xs -mt-1">
                            S_St_Calc_Date
                          </label>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                          <span className="text-lg font-bold">~</span>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto w-full">
              <div className="grid grid-cols-12 min-w-[1550px]">
                <div className="col-span-12 me-5 mt-5 ml-14 ">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-9">
                      {/* Group 1*/}
                      <div className="gap-8 flex mb-4 justify-start me-5 ">
                        <div>
                          <label className="w-20 text-xs mt-2">
                            [Plan_Info_Search]
                          </label>
                        </div>
                        <div className="flex gap-6 w-48 ">
                          <label className="w-24 text-xs mt-2">S_Part_No</label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-8 ml-[10px]">
                          <label className="w-auto text-xs mt-2">
                            Parts_CAT1
                          </label>
                          <div className="flex gap-2 w-[600px]">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex w-48 gap-8 ml-[10px]">
                          <label className="w-auto text-xs mt-2">
                            Parts_Pending
                          </label>
                          <div className="flex gap-2 w-[600px]">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex w-48 gap-8 ml-[10px]">
                          <label className="w-auto text-xs mt-2">
                            Parts_CAT2
                          </label>
                          <div className="flex gap-2 w-[600px]">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex w-48 gap-8 ml-[10px]">
                          <label className="w-auto text-xs mt-2">
                            Parts_CAT3
                          </label>
                          <div className="flex gap-2 w-[600px]">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8">
                              <option value=""></option>
                              <option value="part1">Part 1</option>
                              <option value="part2">Part 2</option>
                              <option value="part3">Part 3</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 gap-2 ">
                          <label className="w-24 text-xs -mt-1">
                            Parts_Delivery
                          </label>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                          <span className="text-lg font-bold">~</span>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                        </div>
                      </div>

                      {/* Group2 */}
                      <div className="gap-8 flex mb-4 justify-start me-5 ">
                        <div>
                          <label className="w-20 text-xs mt-2">
                            [Reg_Person_CD]
                          </label>
                        </div>
                        <div className="flex gap-6 w-48 ml-[6px]">
                          <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8 bg-[#ccffff]">
                            <option value=""></option>
                            <option value="part1">Part 1</option>
                            <option value="part2">Part 2</option>
                            <option value="part3">Part 3</option>
                          </select>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-4 ml-[10px]">
                          <label className="w-auto text-xs mt-2">
                            Parts_Material
                          </label>
                          <div className="w-auto flex gap-2 ">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8 "
                            />
                          </div>
                        </div>

                        <div className="flex w-48 gap-11 ml-[15px]">
                          <label className="w-auto text-xs mt-2">
                            Instructions
                          </label>
                          <div className="w-auto flex gap-2 ml-1">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8 bg-[#ccffff]"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-5 ml-[10px]">
                          <label className="w-auto text-xs mt-2">
                            Parts_Remark
                          </label>
                          <div className="w-auto flex gap-2 ml-[1px]">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8 bg-[#ccffff]"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-7 ml-[10px]">
                          <label className="w-auto text-xs mt-2">
                            Imformaton
                          </label>
                          <div className="w-auto flex gap-2 ml-1">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8 bg-[#ccffff]"
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 gap-2 ml-1 ">
                          <label className="w-24 text-xs -mt-1">
                            St_Complete_Date
                          </label>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                          <span className="text-lg font-bold">~</span>
                          <input
                            type="text"
                            className="border border-black rounded px-2 py-1 text-xs h-8 w-32"
                          />
                        </div>
                      </div>

                      {/* Group 3*/}
                      <div className="gap-8 flex mb-4 justify-start me-5 ">
                        <div>
                          <label className="w-20 text-xs mt-2">[List]</label>
                        </div>
                        <div className="flex gap-6 w-48 ml-16">
                          <label className="w-24 text-xs mt-2 ml-1">
                            Select_Od_No
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8 bg-[#cc99ff]"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-[18px] ml-[15px]">
                          <label className="w-auto text-xs mt-2">
                            Select_Pt_No
                          </label>
                          <div className="w-auto ml-1">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8 bg-[#cc99ff]"
                            />
                          </div>
                        </div>

                        <div className="flex w-48 gap-8 ml-[14px]">
                          <label className="w-auto text-xs mt-2">
                            Pl_List_ViewW(22.8~40cm)
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8 bg-[#ffff99]"
                            />
                          </div>
                        </div>
                        <div className="flex w-48 gap-8 ml-[106px]">
                          <label className="w-auto text-xs mt-2">
                            Pl_List_ViewH(3~15cm)
                          </label>
                          <div className="w-auto">
                            <input
                              type="text"
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24 h-8 bg-[#ffff99]"
                            />
                          </div>
                        </div>
                        <div className="w-auto ml-20">
                          <button className="bg-blue-500 text-white text-xs py-2 px-4 rounded-md hover:bg-blue-600 w-48">
                            Change_View
                          </button>
                        </div>
                      </div>

                      {/* Group 4 table */}
                      <div className="gap-2 flex mb-4 justify-start">
                        <div className="flex gap-2 w-auto">
                          <div className="w-auto">
                            <div className="overflow-x-auto">
                              <div className="overflow-x-auto">
                                <table className="min-w-[1450px] border border-gray-300 bg-white border-collapse">
                                  <thead className="bg-gray-100">
                                    <tr>
                                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                                        Product_Delivery
                                      </th>
                                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                                        Order_No
                                      </th>
                                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                                        Parts_No
                                      </th>
                                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                                        Customer_CD
                                      </th>
                                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                                        Customer_Abb
                                      </th>
                                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                                        Product_Name
                                      </th>
                                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                                        Product_Size
                                      </th>
                                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                                        Product_Draw
                                      </th>
                                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                                        Od_Ctl_Person_CD
                                      </th>
                                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border border-gray-300">
                                        Pl_Reg_Person_CD
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="h-10">
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                    </tr>
                                    <tr className="h-10">
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                    </tr>
                                    <tr className="h-10">
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                      <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300"></td>
                                    </tr>
                                  </tbody>
                                </table>
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
          <div className="bg-white p-3 mt-5 sticky bottom-0 z-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              <div className="grid grid-cols-4 gap-2">
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white ">
                  Search
                  <br />
                  検索(F1)
                </button>
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white ">
                  Setting
                  <br />
                  設定(F2)
                </button>
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white ">
                  Show
                  <br />
                  照会(F3)
                </button>
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white  ">
                  Sub-Con <br />
                  手配(F4)
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white ">
                  Plan <br />
                  計画(F5)
                </button>
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white ">
                  All PS <br />
                  全指(F6)
                </button>

                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white cursor-not-allowed opacity-50">
                  (F7)
                </button>
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white ">
                  Data
                  <br />
                  データ (F8)
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white ">
                  ⭢ CSV
                  <br />
                  (F9)
                </button>
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white ">
                  QuoteSet <br />引 設(F10)
                </button>
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white">
                  Clear
                  <br />
                  クリア (F11)
                </button>
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white">
                  Exit
                  <br />
                  終了 (F12)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchplan;
