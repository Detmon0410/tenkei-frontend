import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export function Tenkei_WI_Sum() {
  const [allSelected, setAllSelected] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    Plan_WI: false,
    WI_SUM: false,
    WI_SUM_Coating: false,
    WI_SUM_Compound: false,
    WI_SUM_Item1: false,
    WI_SUM_Item_1G: false,

    WI_SUM_Outside: false,
    WI_SUM_Pending: false,
    WI_SUM_Plan: false,
    WI_SUM_Progress: false,
    WI_SUM_Type: false,
    WI_SUM_Week: false,
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
              <h1 className="text-2xl font-bold ">TENKEI WI SUM</h1>
            </div>
            <div className="space-x-4 p-4 bg-gray-200 flex mt-5 overflow-x-auto min-w-[100px] items-center lg:justify-center justify-start">
              {/* First Column */}
              <div className="flex flex-col space-y-2">
                {[
                  "Plan_WI",
                  "WI_SUM",
                  "WI_SUM_Coating",
                  "WI_SUM_Compound",
                  "WI_SUM_Item1",
                  "WI_SUM_Item_1G",
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
                {[
                  "WI_SUM_Outside",
                  "WI_SUM_Pending",
                  "WI_SUM_Plan",
                  "WI_SUM_Progress",
                  "WI_SUM_Type",
                  "WI_SUM_Week",
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
