import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function SalesInfo() {
  return (
    <div>
      <div className="flex bg-[#E9EFEC] h-[100vh]">
        <Sidebar />
        <div className="flex flex-col w-screen mr-2 ml-2">
          <Navbar />
          <div className="flex-1 flex-col overflow-x-hidden flex-grow p-2 bg-white mt-2 rounded-md">
            <div className="grid grid-cols-1">
              <div className="flex items-center justify-between w-full px-4">
                <h1 className="text-2xl font-bold text-center flex-grow">
                  Sales Order Info
                </h1>
                <div className="flex items-center space-x-2 py-2 pt-2">
                  <label className="text-xs font-medium">Date : </label>
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

              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

              <div className="w-full mt-5 overflow-x-auto pr-10">
                <div className="min-w-[1700px] w-full mb-10">
                  {/* Start Group 1 */}
                  <div className="flex flex-wrap pl-5 gap-x-5 gap-y-2">
                    {/* Start */}
                    <div className="flex items-center">
                      <label className="font-bold text-xs text-end pr-2">
                        Search Sales <br /> Order No
                      </label>
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-56 h-[50px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center">
                      <label className="font-bold text-xs text-end pr-2">
                        Sales <br /> Order No
                      </label>
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-64 h-[50px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex flex-col">
                      <div className="flex items-center pt-4">
                        <label className="font-bold text-xs text-center pr-2">
                          Quotation No
                        </label>
                        <input
                          type="text"
                          className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-64"
                        />
                      </div>
                      {/* End */}
                      {/* Start */}
                      <div className="flex items-center mt-2">
                        <label className="font-bold text-xs text-center pr-2">
                          Quotation Cat
                        </label>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-[#72aaf8] w-28 h-8">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                        <input
                          type="text"
                          className="bg-[#72aaf8] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[143px]"
                        />

                        <button className="bg-slate-300 h-8 w-32 px-5 rounded-lg hover:bg-slate-400 hover:text-white transition duration-300 ml-4">
                          Quote_Action
                        </button>
                      </div>
                      {/* End */}
                    </div>

                    <div className="flex items-center -mt-6 -ml-[146px]">
                      <button className="bg-slate-300 h-8 w-32 px-5 rounded-lg hover:bg-slate-400 hover:text-white transition duration-300">
                        Quote_View
                      </button>
                    </div>

                    <div className="flex items-center">
                      <button className="bg-slate-300 h-8 px-5 rounded-lg hover:bg-slate-400 hover:text-white transition duration-300">
                        Quot ➔
                      </button>
                    </div>

                    <div className="flex items-center -mt-8 pl-9">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        className="w-4 h-4 rounded-full"
                      />
                      <label htmlFor="checkbox1" className="text-sm pl-2">
                        Auto_Year_Change
                      </label>
                    </div>
                  </div>
                  {/* End Group 1 */}

                  {/* Start Group 2 */}
                  <div className="flex pl-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-end">
                      <label className="font-bold text-xs">
                        Request <br /> Delivery Date
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-46 h-[50px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[60px] pt-3">
                      <label className="font-bold text-xs">
                        Quantity/Remaining Qty
                      </label>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-52 pt-2">
                      <label className="font-bold text-xs">Unit Price</label>
                    </div>
                    <div className="relative w-[87px] pt-2">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="relative pt-2">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-16"
                      />
                    </div>
                    <div className="relative pt-2">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[105px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-20 pt-2">
                      <label className="font-bold text-xs">Sales Group</label>
                    </div>
                    <div className="relative w-[87px] pt-2">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="relative pt-2">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-52"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 2 */}

                  {/* Start Group 3 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-end">
                      <label className="font-bold text-xs">
                        Production <br /> Order Date
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-46 h-[50px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="relative pl-10">
                      <input
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-20"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-slate-300 border-solid border-2 border-gray-500 rounded-md py-0.5 w-20"
                      />
                    </div>
                    <div className="relative w-[87px]">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#72aaf8] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-[#72aaf8] border-solid border-2 border-gray-500 rounded-md py-0.5 w-20"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="relative w-[87px] ml-12">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-20"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-slate-300 border-solid border-2 border-gray-500 rounded-md py-0.5 w-[152px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[77px]">
                      <label className="font-bold text-xs">Sales Person</label>
                    </div>
                    <div className="relative w-[87px]">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-52"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 3 */}

                  {/* Start Group 4 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-4">
                      <label className="font-bold text-xs">Customer</label>
                    </div>
                    <div className="relative">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-28 h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[420px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-4">
                      <label className="font-bold text-xs">
                        Contract Document
                      </label>
                    </div>
                    <div className="relative">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-[87px] h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[167px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-8">
                      <label className="font-bold text-xs">
                        Delivery Destination
                      </label>
                    </div>
                    <div className="relative w-[87px]">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-52"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 4 */}

                  {/* Start Group 5 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[5px]">
                      <label className="font-bold text-xs">Long Name</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[534px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-6">
                      <label className="font-bold text-xs">
                        Delivery Category
                      </label>
                    </div>
                    <div className="relative">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-[87px] h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[167px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[87px]">
                      <label className="font-bold text-xs">Billing_CD</label>
                    </div>
                    <div className="relative w-[87px]">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-full h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-52"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 5 */}

                  {/* Start Group 6 */}
                  <div className="flex flex-wrap pl-5 gap-x-5 gap-y-2">
                    {/* Start */}
                    <div className="flex items-center">
                      <label className="font-bold text-xs text-end pr-2">
                        Goods_Name
                      </label>
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[535px] h-[50px]"
                      />
                    </div>
                    {/* End */}

                    {/* Start Checkboxes in Column */}
                    <div className="flex flex-col pl-1 pt-10 space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="checkbox2"
                          className="w-4 h-4 rounded-full"
                        />
                        <label htmlFor="checkbox2" className="text-sm pl-2">
                          SOrder Pending
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="checkbox3"
                          className="w-4 h-4 rounded-full"
                        />
                        <label htmlFor="checkbox3" className="text-sm pl-2">
                          Temporary Shipment
                        </label>
                      </div>
                    </div>
                    {/* End Checkboxes in Column */}

                    {/* Start */}
                    <div className="flex flex-col pl-[400px]">
                      <div className="flex items-center pt-4">
                        <label className="font-bold text-xs text-center pr-2">
                          Order Register Person
                        </label>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-52 h-8">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>

                      <div className="flex items-center mt-2 pl-1">
                        <label className="font-bold text-xs text-center pr-2">
                          Order Update Person
                        </label>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-52 h-8">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 6 */}

                  {/* Start Group 7 */}
                  <div className="flex flex-wrap pl-8 gap-x-5 gap-y-2 -mt-4">
                    {/* Start */}
                    <div className="flex items-center">
                      <label className="font-bold text-xs text-end pr-2">
                        Goods_Size
                      </label>
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[535px] h-[50px]"
                      />
                    </div>
                    {/* End */}

                    {/* Start Checkboxes in Column */}
                    <div className="flex flex-col pl-1 pt-6 space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="checkbox4"
                          className="w-4 h-4 rounded-full"
                        />
                        <label htmlFor="checkbox4" className="text-sm pl-2">
                          Stock
                        </label>
                      </div>
                    </div>
                    {/* End Checkboxes in Column */}

                    {/* Start */}
                    <div className="flex flex-col pl-[450px] pt-2">
                      <div className="flex items-center pt-4">
                        <label className="font-bold text-xs text-center pr-2 pl-4">
                          Specific Item
                        </label>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-20 h-8">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                        <input
                          type="text"
                          defaultValue="None"
                          className="bg-[#ff8989] border-solid border-2 border-gray-500 rounded-md py-0.5 w-56"
                        />
                      </div>

                      <div className="flex items-center mt-2 -ml-1">
                        <label className="font-bold text-xs text-center pr-2">
                          SO_Progress CAT
                        </label>
                        <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-20 h-8">
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                        <input
                          type="text"
                          className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-56"
                        />
                      </div>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 7 */}

                  {/* Start Group 8 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[5px]">
                      <label className="font-bold text-xs">
                        OrderNo Of Customer
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[380px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-8">
                      <label className="font-bold text-xs">Tolerance</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[250px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center -mt-1 ml-[292px]">
                      <label className="font-bold text-xs text-center pr-2">
                        Delivery Date CAT
                      </label>
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-white w-20 h-8">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-56"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 8 */}

                  {/* Start Group 9 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[5px]">
                      <label className="font-bold text-xs">Customer_Draw</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[415px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-6">
                      <label className="font-bold text-xs">Sales_Draw</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[160px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center ml-0.5">
                      <button className="bg-slate-300 h-8 px-5 rounded-lg hover:bg-slate-400 hover:text-white transition duration-300">
                        Setting
                      </button>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 9 */}

                  {/* Start Group 10 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[5px]">
                      <label className="font-bold text-xs">Company_Draw</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[415px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[27px]">
                      <label className="font-bold text-xs">Sales_Docu</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[160px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center ml-0.5">
                      <button className="bg-slate-300 h-8 px-5 rounded-lg hover:bg-slate-400 hover:text-white transition duration-300">
                        Setting
                      </button>
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 10 */}

                  {/* Start Group 11 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[5px]">
                      <label className="font-bold text-xs">Material1</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-5">
                      <label className="font-bold text-xs">H/T</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[400px]">
                      <label className="font-bold text-xs">
                        Confirm Delivery Date
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start Checkboxes in Column */}
                    <div className="flex flex-col pl-20 space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="checkbox5"
                          className="w-4 h-4 rounded-full"
                        />
                        <label htmlFor="checkbox5" className="text-sm pl-2">
                          SOrder Identification1
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="checkbox6"
                          className="w-4 h-4 rounded-full"
                        />
                        <label htmlFor="checkbox6" className="text-sm pl-2">
                          SOrder Identification2
                        </label>
                      </div>
                    </div>
                    {/* End Checkboxes in Column */}
                  </div>
                  {/* End Group 11 */}

                  {/* Start Group 12 */}
                  <div className="flex pl-[26px] ">
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[5px]">
                      <label className="font-bold text-xs">Material2</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-5">
                      <label className="font-bold text-xs">H/T</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <label className="font-bold text-xs text-center pr-2 pl-16 pt-1">
                      Item
                    </label>
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-20 h-8">
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <input
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-44"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[102px]">
                      <label className="font-bold text-xs">SOrder_Date</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start Checkboxes in Column */}
                    <div className="flex flex-col pl-20 pt-2 space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="checkbox7"
                          className="w-4 h-4 rounded-full"
                        />
                        <label htmlFor="checkbox7" className="text-sm pl-2">
                          SOrder Identification3
                        </label>
                      </div>
                    </div>
                    {/* End Checkboxes in Column */}
                  </div>
                  {/* End Group 12 */}

                  {/* Start Group 13 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[5px]">
                      <label className="font-bold text-xs">Material3</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-5">
                      <label className="font-bold text-xs">H/T</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 13 */}

                  {/* Start Group 14 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[5px]">
                      <label className="font-bold text-xs">Material4</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-5">
                      <label className="font-bold text-xs">H/T</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[447px]">
                      <label className="font-bold text-xs">SO_Sales_Date</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 14 */}

                  {/* Start Group 15 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[5px]">
                      <label className="font-bold text-xs">Material5</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-5">
                      <label className="font-bold text-xs">H/T</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <label className="font-bold text-xs text-center pr-2 pl-16 pt-1">
                      Customer Material
                    </label>
                    <input
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-44"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[47px]">
                      <label className="font-bold text-xs">
                        Production_Completed
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[30px]">
                      <label className="font-bold text-xs">
                        Production Completed Qty
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        defaultValue="0"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-20"
                      />
                    </div>

                    {/* End */}
                  </div>
                  {/* End Group 15 */}

                  {/* Start Group 16 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[15px]">
                      <label className="font-bold text-xs">Coating</label>
                    </div>
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-16 h-8">
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[105px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-5">
                      <label className="font-bold text-xs">C1_Detail</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[445px]">
                      <label className="font-bold text-xs">QC_Completed</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[35px]">
                      <label className="font-bold text-xs">
                        Inspection Completed Qty
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        defaultValue="0"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-20"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 16 */}

                  {/* Start Group 17 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-end -ml-6">
                      <label className="font-bold text-xs">Reg Category</label>
                    </div>
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-16 h-8">
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[105px]"
                      />
                    </div>
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-16 h-8">
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[105px]"
                      />
                    </div>
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-16 h-8">
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[105px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[385px]">
                      <label className="font-bold text-xs">Shipment_Date</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[103px]">
                      <label className="font-bold text-xs">Shipment_Qty</label>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        defaultValue="0"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-20"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 17 */}

                  {/* Start Group 18 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-end -ml-[10px] -mt-2">
                      <label className="font-bold text-xs">
                        Production <br /> Remark
                      </label>
                    </div>
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-32 h-8">
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[380px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[345px]">
                      <label className="font-bold text-xs">
                        Production_Calc_Date
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[113px]">
                      <label className="font-bold text-xs">Ac_Split_Qty</label>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        defaultValue="0"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-20"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 18 */}

                  {/* Start Group 19 */}
                  <div className="flex pl-[26px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-end -ml-[10px] -mt-2">
                      <label className="font-bold text-xs">
                        Sales <br /> Instructions
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[505px] h-10"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[392px]">
                      <label className="font-bold text-xs">SO_Reg_Date</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[130px]">
                      <label className="font-bold text-xs">Sales_Qty</label>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        defaultValue="0"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-20"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 19 */}

                  {/* Start Group 20 */}
                  <div className="flex pl-[38px] pt-3">
                    {/* Start */}
                    <div className="px-2 w-auto text-end -mt-2">
                      <label className="font-bold text-xs">
                        SO <br /> Remark
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[505px] h-10"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[392px]">
                      <label className="font-bold text-xs">SO_Upd_Date</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 20 */}
                </div>
              </div>
              <div className="bg-white p-3 mt-5">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                  <div className="grid grid-cols-4 gap-2">
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Search <br />
                      検索 (F1)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Edit <br />
                      編集 (F2)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      New Add <br />
                      追加 (F3)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Sub-Con <br />
                      手配 (F3)
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Plan <br />
                      計画 (F4)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      AII_P-Sheet <br />
                      全指示書(F5)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      (F7)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Master <br />
                      マスタ(F8)
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Save <br />
                      登録(F9)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Delete <br />
                      削除(F10)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white">
                      Nest Input <br />
                      次へ(F11)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Exit <br />
                      終了 (F12)
                    </button>
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
