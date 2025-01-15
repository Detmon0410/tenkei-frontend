import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export function Tenkei_FG_Sum() {
  const [allSelected, setAllSelected] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    Order_FG: false,
    FG_SUM: false,
    FG_SUM_Date: false,
    FG_SUM_Item1: false,
    FG_SUM_Item1G: false,
    FG_SUM_Type: false,
    FG_SUM_Week: false,
  });

  const handleAllSelect = () => {
    const newValue = !allSelected;
    setAllSelected(newValue);
    setCheckboxes((prev) =>
      Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: newValue }), {})
    );
  };

  const handleCheckboxChange = (key) => {
    setCheckboxes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col p-2 overflow-x-auto">
          <div className="bg-white grid grid-cols-1">
            <div className="flex justify-center items-center">
              <h1 className="text-2xl font-bold ">TENKEI FG SUM</h1>
            </div>
            <div className="space-x-4 p-4 bg-gray-200 flex mt-5 overflow-x-auto min-w-[100px] items-center lg:justify-center justify-start">
              {/* First Column */}
              <div className="flex flex-col space-y-2">
                {[
                  "Order_FG",
                  "FG_SUM",
                  "FG_SUM_Date",
                  "FG_SUM_Item1",
                  "FG_SUM_Item1G",
                ].map((key) => (
                  <label key={key} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={checkboxes[key]}
                      onChange={() => handleCheckboxChange(key)}
                    />
                    <span>{key}</span>
                  </label>
                ))}
              </div>
              {/* Second Column */}
              <div className="flex flex-col space-y-2">
                {["FG_SUM_Type", "FG_SUM_Week"].map((key) => (
                  <label key={key} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={checkboxes[key]}
                      onChange={() => handleCheckboxChange(key)}
                    />
                    <span>{key}</span>
                  </label>
                ))}
              </div>
              {/* Third Column */}
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={allSelected}
                    onChange={handleAllSelect}
                  />
                  <span>All_Select</span>
                </label>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Execute
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
