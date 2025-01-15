import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { IoIosArrowRoundForward } from "react-icons/io";

const rows = [
  {
    orderno: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ccffff]" />
    ),
    customer: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    nav: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    qty: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
    progess: (
      <div className="flex space-x-2 w-full ">
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
  },
  {
    orderno: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ccffff]" />
    ),
    customer: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    nav: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    qty: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
    progess: (
      <div className="flex space-x-2 w-full ">
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
  },
  {
    orderno: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ccffff]" />
    ),
    customer: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    nav: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    qty: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
    progess: (
      <div className="flex space-x-2 w-full ">
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
  },
  {
    orderno: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ccffff]" />
    ),
    customer: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    nav: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    qty: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
    progess: (
      <div className="flex space-x-2 w-full ">
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
  },
  {
    orderno: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ccffff]" />
    ),
    customer: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    nav: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    qty: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
    progess: (
      <div className="flex space-x-2 w-full ">
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
  },
  {
    orderno: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ccffff]" />
    ),
    customer: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    nav: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    qty: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
    progess: (
      <div className="flex space-x-2 w-full ">
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
  },
  {
    orderno: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ccffff]" />
    ),
    customer: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    nav: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    qty: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
    progess: (
      <div className="flex space-x-2 w-full ">
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
  },
  {
    orderno: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ccffff]" />
    ),
    customer: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    nav: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    qty: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
    progess: (
      <div className="flex space-x-2 w-full ">
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
  },
  {
    orderno: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ccffff]" />
    ),
    customer: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    nav: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    qty: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
    progess: (
      <div className="flex space-x-2 w-full ">
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
  },
  {
    orderno: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ccffff]" />
    ),
    customer: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    nav: <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />,
    qty: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
    progess: (
      <div className="flex space-x-2 w-full ">
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
      </div>
    ),
  },
];

const rows2 = [
  {
    orderno2: (
      <p className="text-sm font-bold text-center md:flex-1 md:text-center ">
        Request_Date
      </p>
    ),
    customer2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold text-center md:flex-1 md:text-center mt-2">
          Product_Date
        </p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    nav2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ffff99]" />
    ),
    qty2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold w-32 mt-2">Confirm Date</p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    progess2: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
      </div>
    ),
  },
  {
    orderno2: (
      <p className="text-sm font-bold text-center md:flex-1 md:text-center ">
        Request_Date
      </p>
    ),
    customer2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold text-center md:flex-1 md:text-center mt-2 ">
          Product_Date
        </p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    nav2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ffff99]" />
    ),
    qty2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold w-32 mt-2">Confirm Date</p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    progess2: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
      </div>
    ),
  },
  {
    orderno2: (
      <p className="text-sm font-bold text-center md:flex-1 md:text-center ">
        Request_Date
      </p>
    ),
    customer2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold text-center md:flex-1 md:text-center mt-2">
          Product_Date
        </p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    nav2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ffff99]" />
    ),
    qty2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold w-32 mt-2">Confirm Date</p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    progess2: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
      </div>
    ),
  },
  {
    orderno2: (
      <p className="text-sm font-bold text-center md:flex-1 md:text-center ">
        Request_Date
      </p>
    ),
    customer2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold text-center md:flex-1 md:text-center mt-2">
          Product_Date
        </p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    nav2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ffff99]" />
    ),
    qty2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold w-32 mt-2">Confirm Date</p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    progess2: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
      </div>
    ),
  },
  {
    orderno2: (
      <p className="text-sm font-bold text-center md:flex-1 md:text-center ">
        Request_Date
      </p>
    ),
    customer2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold text-center md:flex-1 md:text-center mt-2">
          Product_Date
        </p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    nav2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ffff99]" />
    ),
    qty2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold w-32 mt-2">Confirm Date</p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    progess2: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
      </div>
    ),
  },
  {
    orderno2: (
      <p className="text-sm font-bold text-center md:flex-1 md:text-center ">
        Request_Date
      </p>
    ),
    customer2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold text-center md:flex-1 md:text-center mt-2">
          Product_Date
        </p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    nav2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ffff99]" />
    ),
    qty2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold w-32 mt-2">Confirm Date</p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    progess2: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
      </div>
    ),
  },
  {
    orderno2: (
      <p className="text-sm font-bold text-center md:flex-1 md:text-center ">
        Request_Date
      </p>
    ),
    customer2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold text-center md:flex-1 md:text-center mt-2">
          Product_Date
        </p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    nav2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ffff99]" />
    ),
    qty2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold w-32 mt-2">Confirm Date</p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    progess2: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
      </div>
    ),
  },
  {
    orderno2: (
      <p className="text-sm font-bold text-center md:flex-1 md:text-center ">
        Request_Date
      </p>
    ),
    customer2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold text-center md:flex-1 md:text-center mt-2">
          Product_Date
        </p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    nav2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ffff99]" />
    ),
    qty2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold w-32 mt-2">Confirm Date</p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    progess2: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
      </div>
    ),
  },
  {
    orderno2: (
      <p className="text-sm font-bold text-center md:flex-1 md:text-center ">
        Request_Date
      </p>
    ),
    customer2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold text-center md:flex-1 md:text-center mt-2">
          Product_Date
        </p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    nav2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ffff99]" />
    ),
    qty2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold w-32 mt-2">Confirm Date</p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    progess2: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
      </div>
    ),
  },
  {
    orderno2: (
      <p className="text-sm font-bold text-center md:flex-1 md:text-center ">
        Request_Date
      </p>
    ),
    customer2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-white" />
    ),

    abb2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold text-center md:flex-1 md:text-center mt-2">
          Product_Date
        </p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    nav2: (
      <input type="text" className=" px-2 py-1 text-xs w-full bg-[#ffff99]" />
    ),
    qty2: (
      <div className="flex space-x-2 w-full ">
        <p className="text-xs font-bold w-32 mt-2">Confirm Date</p>
        <input
          type="date"
          id="date"
          name="date"
          className="border border-gray-300 h-8 w-full bg-white "
        />
      </div>
    ),
    progess2: (
      <div className="flex space-x-2 w-full ">
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs w-full "
        />
        <input type="text" className="border rounded px-2 py-1 text-xs w-14 " />
      </div>
    ),
  },
];

export function DeliveryDate() {
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col p-2 overflow-x-auto ">
          <div className="bg-white grid grid-cols-1">
            <div className="overflow-x-auto w-full h-full">
              <div className="flex flex-col md:flex-row items-center justify-center h-16 px-4 bg-[#00ffff] ">
                <h1 className="text-2xl font-bold text-center md:flex-1 md:text-center">
                  Delivery Date Change
                </h1>

                <div className="flex items-center mt-2 md:mt-0 md:ml-auto">
                  <span className="mr-2 font-bold">Date:</span>
                  <input
                    type="text"
                    className="border-2 border-gray-500 rounded-md px-2 py-1 text-sm w-32"
                    value={new Date().toLocaleDateString("th-TH", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto overflow-y-auto max-h-[500px] w-full">
              <table className="bg-white text-xs w-full border-collapse">
                <thead className="sticky top-0 z-10 bg-gray-300">
                  <tr className="text-black font-bold text-xs">
                    <th className="py-1 px-3 w-10 text-end border-b border-gray-300">
                      Change_Date :
                    </th>
                    <th className="py-1 px-2 text-start h-[40px] w-14 border-b border-gray-300">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="border border-black h-full w-full bg-[#cc99ff]"
                      />
                    </th>
                    <th className="py-1 px-3 w-[300px] border-b border-gray-300">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox border-gray-400 rounded"
                        />
                        <label className="text-xs font-medium">
                          Auto_Year_Change
                        </label>
                      </div>
                    </th>
                    <th className="py-1 px-3 w-[300px] border-b border-gray-300"></th>
                    <th className="py-1 px-3 w-[300px] border-b border-gray-300"></th>
                    <th className="py-1 px-3 w-[300px] border-b border-gray-300"></th>
                  </tr>
                </thead>

                <thead className="sticky top-8 z-10 bg-gray-300 h-8">
                  <tr className="text-black font-bold text-xs">
                    <th className="py-1 px-16 w-10 border border-black">
                      Order_No
                    </th>
                    <th className="py-1 px-10 w-14 border border-black">
                      Customer
                    </th>
                    <th className="py-1 px-5 w-[100px] text-start border border-black">
                      _Abb
                    </th>
                    <th className="py-1 px-10 w-[400px] border border-black">
                      NAV_Goods_Name
                    </th>
                    <th className="py-1 px-10 w-[50px] border border-black">
                      Qty
                    </th>
                    <th className="py-1 px-10 w-[200px] border border-black">
                      Progress
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row, rowIndex) => {
                    const row2 = rows2[rowIndex]; // ดึงแถวที่ตรงกันจาก rows2
                    return (
                      <React.Fragment key={rowIndex}>
                        {/* แสดงแถวจาก rows */}
                        <tr className="border border-gray-300">
                          <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center bg-[#ccffff]">
                            <div className="text-center">{row.orderno}</div>
                          </td>
                          <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                            <div className="text-center">{row.customer}</div>
                          </td>
                          <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                            <div className="text-center">{row.abb}</div>
                          </td>
                          <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                            <div className="text-center">{row.nav}</div>
                          </td>
                          <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                            <div className="text-center">{row.qty}</div>
                          </td>
                          <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                            <div className="text-center">{row.progess}</div>
                          </td>
                        </tr>

                        {/* แสดงแถวจาก rows2 */}
                        {row2 && (
                          <tr className="border border-gray-300">
                            <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center bg-gray-300">
                              <div className="text-center">{row2.orderno2}</div>
                            </td>
                            <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                              <div className="text-center">
                                {row2.customer2}
                              </div>
                            </td>
                            <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                              <div className="text-center">{row2.abb2}</div>
                            </td>
                            <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center bg-[#ffff99]">
                              <div className="text-center">{row2.nav2}</div>
                            </td>
                            <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                              <div className="text-center">{row2.qty2}</div>
                            </td>
                            <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                              <div className="text-center">{row2.progess2}</div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-white p-3 mt-5 sticky bottom-0 z-10">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <div className="grid grid-cols-4 gap-2">
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white cursor-not-allowed opacity-50"
                disabled
              >
                (F1)
              </button>
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white cursor-not-allowed opacity-50"
                disabled
              >
                (F2)
              </button>
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white cursor-not-allowed opacity-50"
                disabled
              >
                (F3)
              </button>
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white cursor-not-allowed opacity-50"
                disabled
              >
                (F4)
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white cursor-not-allowed opacity-50"
                disabled
              >
                (F5)
              </button>
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white cursor-not-allowed opacity-50"
                disabled
              >
                (F6)
              </button>
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white cursor-not-allowed opacity-50"
                disabled
              >
                (F7)
              </button>
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white cursor-not-allowed opacity-50"
                disabled
              >
                (F8)
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white cursor-not-allowed opacity-50"
                disabled
              >
                Action <br />
                実行(F9)
              </button>
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white cursor-not-allowed opacity-50"
                disabled
              >
                (F10)
              </button>
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white">
                NextInput <br />
                次へ (F11)
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
  );
}
