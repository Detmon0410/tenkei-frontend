import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";

import { useOrder } from "../hooks/use-order";
import { usePlan } from "../hooks/use-plan";
import { useProcessGPlan } from "../hooks/use-processgplan";

export default function ProcessG_Plan() {
  const navigate = useNavigate();
  const [checkOnly, setCheckOnly] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const [buttonState, setButtonState] = useState({
    F1: false,
    F2: false,
    F3: false,
    F4: false,
    F5: false,
    F6: false,
    F7: false,
    F8: false,
    F9: true,
    F10: false,
    F11: false,
    F12: true,
  });

  const { CustomerData, Item1Data, setCustomerData, OdProgressData } =
    useOrder();

  const {
    processGPlanData,
    setProcessGPlanData,
    processGData,
    TTprocessGData,
    setTTProcessGData,
  } = useProcessGPlan();

  const { planData, plprogressData, processData } = usePlan();

  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;

    setProcessGPlanData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value === "" ? null : value,
    }));
  };

  const handleCheckboxChange = (index) => {
    const updatedData = [...TTprocessGData];
    updatedData[index].List = !updatedData[index].List;
    setTTProcessGData(updatedData);
  };

  const handleCheckOnlyChange = () => {
    setCheckOnly(!checkOnly);
  };

  const handleCheckboxResultChange = () => {
    setIsChecked(!isChecked);
  };

  const filteredData = checkOnly
    ? TTprocessGData?.filter((item) => Boolean(item.List)) || []
    : TTprocessGData || [];

  const handleF9Click = () => {
    const Tg_St_Pl_Date = document.getElementById("Tg_St_Pl_Date").value;
    const Tg_Ed_Pl_Date = document.getElementById("Tg_Ed_Pl_Date").value;

    // if (!Tg_St_Pl_Date || !Tg_Ed_Pl_Date) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "วันที่ไม่ครบ",
    //     text: "กรุณากรอกวันที่เริ่มต้นและวันที่สิ้นสุด",
    //     confirmButtonText: "ตกลง",
    //   });
    //   return;
    // }

    const startDate = new Date(Tg_St_Pl_Date);
    const endDate = new Date(Tg_Ed_Pl_Date);

    if (startDate > endDate) {
      Swal.fire({
        icon: "warning",
        title: "วันที่ไม่ถูกต้อง",
        text: "วันที่เริ่มต้นต้องไม่มากกว่าวันที่สิ้นสุด",
        confirmButtonText: "ตกลง",
      });
      return;
    }

    const listViewChecked = document.getElementById("list-view").checked;

    if (listViewChecked) {
      navigate(
        `/reports/RD_ProG_Plan?startDate=${Tg_St_Pl_Date}&endDate=${Tg_Ed_Pl_Date}`
      );
    }
  };

  const handleF12Click = async () => {
    try {
      const confirmResult = await Swal.fire({
        title: "Confirm",
        html: "Do you want to close this window?<br>คุณต้องการปิดหน้าต่างนี้หรือไม่?<br>このウィンドウを閉じますか？",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      });

      if (confirmResult.isConfirmed) {
        setProcessGPlanData("");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error in handleF12Click:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาลองอีกครั้ง",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
    }
  };

  const customerAbbKey1 = processGPlanData?.S_Customer_CD1;
  const customerAbbForRow1 = (CustomerData || [])
    .filter((customer) => customer.Customer_CD === customerAbbKey1)
    .map((customer) => customer.Customer_Abb);

  const customerAbbKey2 = processGPlanData?.S_Customer_CD2;
  const customerAbbForRow2 = (CustomerData || [])
    .filter((customer) => customer.Customer_CD === customerAbbKey2)
    .map((customer) => customer.Customer_Abb);

  const customerAbbKey3 = processGPlanData?.S_Customer_CD3;
  const customerAbbForRow3 = (CustomerData || [])
    .filter((customer) => customer.Customer_CD === customerAbbKey3)
    .map((customer) => customer.Customer_Abb);

  const nocustomerAbbKey = processGPlanData?.S_No_Customer_CD;
  const nocustomerAbbForRow = (CustomerData || [])
    .filter((customer) => customer.Customer_CD === nocustomerAbbKey)
    .map((customer) => customer.Customer_Abb);

  const item1AbbKey = processGPlanData?.S_Item1_CD;
  const item1AbbForRow = (Item1Data || [])
    .filter((item1) => item1.Item1_CD === item1AbbKey)
    .map((item1) => item1.Item1_Abb);

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />

        <div className="flex-1 flex-col overflow-x-auto flex-grow p-2 bg-white">
          <div className="flex items-center justify-between w-full px-4 pb-3">
            <h1 className="text-2xl font-bold text-center flex-grow">
              ProcessG_Plan
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
          <hr />

          <div className="mx-5 p-4 grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="w-full ">
              <div>
                <label className="font-medium text-xs">
                  Target_ProG_Setting
                </label>
              </div>
              <div className="flex gap-2 items-center mb-3">
                <label className="font-medium text-xs">
                  Please Select ProcessG
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    id="check-only"
                    type="checkbox"
                    checked={checkOnly}
                    onChange={handleCheckOnlyChange}
                    className="h-4 w-4"
                  />
                  <label className="font-medium text-xs">Check_Only</label>
                </div>
              </div>

              <div
                className="sm:overflow-x-auto"
                style={{ maxHeight: "600px", overflowY: "auto" }}
              >
                <table className="border-2 border-black w-full">
                  <thead className="sticky top-0">
                    <tr>
                      <th className="py-3 bg-white border-2 border-black">
                        List
                      </th>
                      <th className="py-3 bg-white border-2 border-black">
                        ProcessG_CD
                      </th>
                      <th className="py-3 bg-white border-2 border-black">
                        ProcessG_Mark
                      </th>
                      <th className="py-3 bg-white border-2 border-black">
                        ProcessG_Name
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {filteredData && filteredData.length > 0 ? (
                      filteredData.map((item, index) => (
                        <tr key={index}>
                          <td className="py-3 bg-white border-2 border-black">
                            <input
                              type="checkbox"
                              className="w-4 h-4"
                              checked={item.List}
                              onChange={() => handleCheckboxChange(index)}
                            />
                          </td>
                          <td className="py-3 bg-white border-2 border-black">
                            {item.ProcessG_CD}
                          </td>
                          <td className="py-3 bg-white border-2 border-black">
                            {item.ProcessG_Mark}
                          </td>
                          <td className="py-3 bg-white border-2 border-black">
                            {item.ProcessG_Name}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="4"
                          className="py-3 bg-white border-2 border-black text-center"
                        >
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-2 mt-4 ">
                <div className="flex justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 w-28 h-10 rounded-lg">
                    <label className="text-white font-semibold">Default</label>
                  </button>
                </div>
                <div className="flex justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 w-28 h-10 rounded-lg">
                    <label className="text-white font-semibold">Clear</label>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-2 gap-2 items-center mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5 text-end">
                    Sort
                  </label>
                  <div className="w-3/5">
                    <select
                      defaultValue="Plan_Date"
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                    >
                      <option value=""></option>
                      <option value="Plan_Date">Plan_Date</option>
                      <option value="Product_Delivery">Product_Delivery</option>
                      <option value="Result_Date">Result_Date</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-auto items-center flex">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                  </div>
                  <div className="w-full items-center">
                    <input
                      type="text"
                      readOnly
                      defaultValue="Info_View"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5 text-end">
                    Print_Object
                  </label>
                  <div className="w-3/5">
                    <select
                      defaultValue="Yes"
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                    >
                      <option value=""></option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-auto items-center flex">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                  </div>
                  <div className="w-full items-center">
                    <input
                      type="text"
                      readOnly
                      defaultValue="Color_Separate"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5 text-end">
                    Mrk_Days
                  </label>
                  <div className="w-3/5">
                    <input
                      id=""
                      onChange={handleInputChange}
                      type="date"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-auto items-center flex">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                  </div>
                  <div className="w-full items-center">
                    <input
                      type="text"
                      defaultValue="Result_Date_View"
                      readOnly
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5 text-end">
                    Od_Pending
                  </label>
                  <div className="w-3/5">
                    <select
                      defaultValue="No"
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                    >
                      <option value=""></option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5 text-end">
                    Pt_Pending
                  </label>
                  <div className="w-3/5">
                    <select
                      defaultValue="No"
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                    >
                      <option value=""></option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5 text-end">
                    Customer1
                  </label>
                  <div className="w-3/5 flex gap-2">
                    <div className="w-1/2">
                      <select
                        id="S_Customer_CD1"
                        value={processGPlanData?.S_Customer_CD1 || ""}
                        onChange={handleInputChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                      >
                        <option value={processGPlanData?.S_Customer_CD1}>
                          {processGPlanData?.S_Customer_CD1}
                        </option>
                        {Array.isArray(CustomerData) &&
                        CustomerData.length > 0 ? (
                          <>
                            <option disabled>
                              Customer_CD | Customer_Abb | Customer_Name |
                              Customer_Remark
                            </option>
                            {CustomerData.map((item, index) => (
                              <option key={index} value={item.Customer_CD}>
                                {item.Customer_CD} | {item.Customer_Abb} |{" "}
                                {item.Customer_Name} | {item.Customer_Remark}
                              </option>
                            ))}
                          </>
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                    </div>
                    <div className="w-1/2">
                      <input
                        readOnly
                        id="S_Customer_Abb1"
                        value={customerAbbForRow1}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5 text-end">
                    Cus_Name1
                  </label>
                  <div className="w-3/5">
                    <input
                      id="S_Customer_Name1"
                      onChange={handleInputChange}
                      type="text"
                      className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5 text-end">
                    Customer2
                  </label>
                  <div className="w-3/5 flex gap-2">
                    <div className="w-1/2">
                      <select
                        id="S_Customer_CD2"
                        value={processGPlanData?.S_Customer_CD2 || ""}
                        onChange={handleInputChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                      >
                        <option value={processGPlanData?.S_Customer_CD2}>
                          {processGPlanData?.S_Customer_CD2}
                        </option>
                        {Array.isArray(CustomerData) &&
                        CustomerData.length > 0 ? (
                          <>
                            <option disabled>
                              Customer_CD | Customer_Abb | Customer_Name |
                              Customer_Remark
                            </option>
                            {CustomerData.map((item, index) => (
                              <option key={index} value={item.Customer_CD}>
                                {item.Customer_CD} | {item.Customer_Abb} |{" "}
                                {item.Customer_Name} | {item.Customer_Remark}
                              </option>
                            ))}
                          </>
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                    </div>
                    <div className="w-1/2">
                      <input
                        readOnly
                        id="S_Customer_Abb2"
                        value={customerAbbForRow2}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5 text-end">
                    Cus_Name2
                  </label>
                  <div className="w-3/5">
                    <input
                      id="S_Customer_Name2"
                      onChange={handleInputChange}
                      type="text"
                      className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5 text-end">
                    Customer3
                  </label>
                  <div className="w-3/5 flex gap-2">
                    <div className="w-1/2">
                      <select
                        id="S_Customer_CD3"
                        value={processGPlanData?.S_Customer_CD3 || ""}
                        onChange={handleInputChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                      >
                        <option value={processGPlanData?.S_Customer_CD3}>
                          {processGPlanData?.S_Customer_CD3}
                        </option>
                        {Array.isArray(CustomerData) &&
                        CustomerData.length > 0 ? (
                          <>
                            <option disabled>
                              Customer_CD | Customer_Abb | Customer_Name |
                              Customer_Remark
                            </option>
                            {CustomerData.map((item, index) => (
                              <option key={index} value={item.Customer_CD}>
                                {item.Customer_CD} | {item.Customer_Abb} |{" "}
                                {item.Customer_Name} | {item.Customer_Remark}
                              </option>
                            ))}
                          </>
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                    </div>
                    <div className="w-1/2">
                      <input
                        readOnly
                        id="S_Customer_Abb3"
                        value={customerAbbForRow3}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5 text-end">
                    Cus_Name3
                  </label>
                  <div className="w-3/5">
                    <input
                      id="S_Customer_Name3"
                      type="text"
                      onChange={handleInputChange}
                      className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center mb-3">
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5 text-end">
                    Not_Customer
                  </label>
                  <div className="w-3/5 flex gap-2">
                    <div className="w-1/2">
                      <select
                        id="S_No_Customer_CD"
                        value={processGPlanData?.S_No_Customer_CD?.not || ""}
                        onChange={(e) => {
                          const selectedValue = e.target.value;
                          handleInputChange({
                            target: {
                              id: "S_No_Customer_CD",
                              value: { not: selectedValue },
                            },
                          });
                        }}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                      >
                        <option value={processGPlanData?.S_No_Customer_CD?.not}>
                          {processGPlanData?.S_No_Customer_CD?.not}
                        </option>
                        {Array.isArray(CustomerData) &&
                        CustomerData.length > 0 ? (
                          <>
                            <option disabled>
                              Customer_CD | Customer_Abb | Customer_Name |
                              Customer_Remark
                            </option>
                            {CustomerData.map((item, index) => (
                              <option key={index} value={item.Customer_CD}>
                                {item.Customer_CD} | {item.Customer_Abb} |{" "}
                                {item.Customer_Name} | {item.Customer_Remark}
                              </option>
                            ))}
                          </>
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                    </div>
                    <div className="w-1/2">
                      <input
                        readOnly
                        id="S_No_Customer_Abb"
                        value={nocustomerAbbForRow}
                        onChange={(event) => setCustomerData(event)}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <label className="font-medium text-xs w-2/5 text-end">
                    Item1
                  </label>
                  <div className="w-3/5 flex gap-2">
                    <div className="w-1/2">
                      <select
                        id="S_Item1_CD"
                        value={processGPlanData?.S_Item1_CD || ""}
                        onChange={handleInputChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                      >
                        <option value={processGPlanData?.S_Item1_CD}>
                          {processGPlanData?.S_Item1_CD}
                        </option>
                        {Array.isArray(Item1Data) && Item1Data.length > 0 ? (
                          <>
                            <option disabled>
                              Item1_CD | Item1_Abb |Item1_Remark
                            </option>
                            {Item1Data.map((item, index) => (
                              <option key={index} value={item.Item1_CD}>
                                {item.Item1_CD} | {item.Item1_Abb} |{" "}
                                {item.Item1_Remark}
                              </option>
                            ))}
                          </>
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                    </div>
                    <div className="w-1/2">
                      <input
                        readOnly
                        id="S_Item1_Abb2"
                        value={item1AbbForRow}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-9 gap-2 mb-3">
                <div className="col-span-2 text-end">
                  <label className="font-medium text-xs">Order_Progress</label>
                </div>
                <div className="col-span-3">
                  <select
                    id="S_St_Od_Progress_CD"
                    value={processGPlanData?.S_St_Od_Progress_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                  >
                    <option value=""></option>
                    {Array.isArray(OdProgressData) &&
                    OdProgressData.length > 0 ? (
                      <>
                        <option disabled>Od_Progress_Symbol</option>
                        {OdProgressData.map((item, index) => (
                          <option key={index} value={item.Od_Progress_CD}>
                            {item.Od_Progress_Symbol}
                          </option>
                        ))}
                      </>
                    ) : (
                      <option value="">ไม่มีข้อมูล</option>
                    )}
                  </select>
                </div>
                <div className="col-span-1 text-center">
                  <label className="font-bold">~</label>
                </div>
                <div className="col-span-3">
                  <select
                    id="S_Ed_Od_Progress_CD"
                    value={processGPlanData?.S_Ed_Od_Progress_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                  >
                    <option value=""></option>
                    {Array.isArray(OdProgressData) &&
                    OdProgressData.length > 0 ? (
                      <>
                        <option disabled>Od_Progress_Symbol</option>
                        {OdProgressData.map((item, index) => (
                          <option key={index} value={item.Od_Progress_CD}>
                            {item.Od_Progress_Symbol}
                          </option>
                        ))}
                      </>
                    ) : (
                      <option value="">ไม่มีข้อมูล</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-9 gap-2 mb-3">
                <div className="col-span-2 text-end">
                  <label className="font-medium text-xs">Plan_Progress</label>
                </div>
                <div className="col-span-3">
                  <select
                    id="S_St_Pl_Progress_CD"
                    value={processGPlanData?.S_St_Pl_Progress_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                  >
                    <option value=""></option>
                    {Array.isArray(plprogressData) &&
                    plprogressData.length > 0 ? (
                      <>
                        <option disabled>Pl_Progress_Symbol</option>
                        {plprogressData.map((item, index) => (
                          <option key={index} value={item.Pl_Progress_CD}>
                            {item.Pl_Progress_Symbol}
                          </option>
                        ))}
                      </>
                    ) : (
                      <option value="">ไม่มีข้อมูล</option>
                    )}
                  </select>
                </div>
                <div className="col-span-1 text-center">
                  <label className="font-bold">~</label>
                </div>
                <div className="col-span-3">
                  <select
                    id="S_Ed_Pl_Progress_CD"
                    value={processGPlanData?.S_Ed_Pl_Progress_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                  >
                    <option value=""></option>
                    {Array.isArray(plprogressData) &&
                    plprogressData.length > 0 ? (
                      <>
                        <option disabled>Pl_Progress_Symbol</option>
                        {plprogressData.map((item, index) => (
                          <option key={index} value={item.Pl_Progress_CD}>
                            {item.Pl_Progress_Symbol}
                          </option>
                        ))}
                      </>
                    ) : (
                      <option value="">ไม่มีข้อมูล</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 mb-3">
                <div className="col-span-4 text-end">
                  <label className="font-medium text-xs">Parts_No</label>
                </div>
                <div className="col-span-3">
                  <input
                    id="S_St_Parts_No"
                    type="text"
                    onChange={handleInputChange}
                    className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
                <div className="col-span-1 text-center">
                  <label className="font-bold text-base">~</label>
                </div>
                <div className="col-span-3">
                  <input
                    id="S_Ed_Parts_No"
                    type="text"
                    onChange={handleInputChange}
                    className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
                <div className="col-span-1"></div>
              </div>
              <div className="grid grid-cols-12 gap-2 mb-3">
                <div className="col-span-4"></div>
                <div className="col-span-3 flex items-center gap-2">
                  <div>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                  <label className="font-medium text-xs">Days_Before</label>
                </div>
                <div className="col-span-1 text-center">
                  <label className="font-bold text-base">~</label>
                </div>
                <div className="col-span-3 flex items-center gap-2">
                  <div>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  </div>
                  <label className="font-medium text-xs">Days_After</label>
                </div>
                <div className="col-span-1"></div>
              </div>
              <div className="grid grid-cols-12 gap-2 mb-3">
                <div className="col-span-4 text-end">
                  <label className="font-medium text-xs">Plan_Date</label>
                </div>
                <div className="col-span-3">
                  <input
                    id="Tg_St_Pl_Date"
                    type="date"
                    onChange={handleInputChange}
                    className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
                <div className="col-span-1 text-center">
                  <label className="font-bold text-base">~</label>
                </div>
                <div className="col-span-3">
                  <input
                    id="Tg_Ed_Pl_Date"
                    type="date"
                    onChange={handleInputChange}
                    className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
                <div className="col-span-1"></div>
              </div>
              <div className="grid grid-cols-12 gap-2 mb-3">
                <div className="col-span-3"></div>
                <div className="col-span-1 flex justify-end items-center">
                  <input
                    id="check-result"
                    type="checkbox"
                    className="w-4 h-4"
                    onChange={handleCheckboxResultChange}
                  />
                </div>
                <div className="col-span-3">
                  <input
                    type="text"
                    defaultValue="Result_Search"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    readOnly
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 mb-3">
                <div className="col-span-4 text-end">
                  <label className="font-medium text-xs">Result_Date</label>
                </div>
                <div className="col-span-3">
                  <input
                    id="Tg_St_Rs_Date"
                    type="date"
                    className={`bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full ${
                      !isChecked ? "bg-gray-300 cursor-not-allowed" : ""
                    }`}
                    disabled={!isChecked}
                  />
                </div>
                <div className="col-span-1 text-center">
                  <label className="font-bold text-base">~</label>
                </div>
                <div className="col-span-3">
                  <input
                    id="Tg_Ed_Rs_Date"
                    type="date"
                    className={`bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full ${
                      !isChecked ? "bg-gray-300 cursor-not-allowed" : ""
                    }`}
                    disabled={!isChecked}
                  />
                </div>
                <div className="col-span-1"></div>
              </div>
              <div className="grid grid-cols-12 gap-2 mb-3">
                <div className="col-span-3 text-end">
                  <label className="font-medium text-xs">TG_ProcessG</label>
                </div>
                <div className="col-span-9">
                  <select
                    id="TG_ProcessG"
                    value={processGPlanData?.TG_ProcessG || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                  >
                    <option value=""></option>
                    {Array.isArray(processGData) && processGData.length > 0 ? (
                      <>
                        <option disabled>ProcessG_Mark</option>
                        {processGData.map((item, index) => (
                          <option key={index} value={item.ProcessG_CD}>
                            {item.ProcessG_Mark}
                          </option>
                        ))}
                      </>
                    ) : (
                      <option value="">ไม่มีข้อมูล</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 mb-3">
                <div className="col-span-3 text-end">
                  <label className="font-medium text-xs">TG_Process</label>
                </div>
                <div className="col-span-9">
                  <select
                    id="TG_Process"
                    value={processGPlanData?.TG_Process || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                  >
                    <option value=""></option>
                    {Array.isArray(processData) && processData.length > 0 ? (
                      <>
                        <option disabled>ProcessG_Abb</option>
                        {processData.map((item, index) => (
                          <option key={index} value={item.Process_CD}>
                            {item.Process_Abb}
                          </option>
                        ))}
                      </>
                    ) : (
                      <option value="">ไม่มีข้อมูล</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 items-center mb-3">
                <div className="col-span-6"></div>
                <div className="col-span-3">
                  <div className="flex gap-2 items-center">
                    <input
                      id="list-view"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4"
                    />
                    <label className="font-medium text-xs">
                      ProcessG List View
                    </label>
                  </div>
                </div>
                <div className="col-span-3"></div>
              </div>
              <div className="grid grid-cols-12 gap-2 items-center mb-3">
                <div className="col-span-6"></div>
                <div className="col-span-3">
                  <div className="flex gap-2 items-center">
                    <input
                      id="graph-view"
                      type="checkbox"
                      className="h-4 w-4"
                    />
                    <label className="font-medium text-xs">
                      ProcessG Graph View
                    </label>
                  </div>
                </div>
                <div className="col-span-3"></div>
              </div>
              <div className="grid grid-cols-12 gap-2 xl:ml-40 mt-5">
                <div className="flex justify-items-end items-end gap-2">
                  <input type="checkbox" defaultChecked className="h-6 w-6" />
                  <input
                    onChange={handleInputChange}
                    type="date"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-32"
                    value={new Date().toISOString().slice(0, 10)}
                  />
                  <label className="font-normal text-lg">Settles_Day</label>
                </div>
                <div className="col-span-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-3 mt-5">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <div className="grid grid-cols-4 gap-2">
              <button
                id="F1"
                disabled={!buttonState.F1}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
              >
                Search <br />
                検索 (F1)
              </button>
              <button
                id="F2"
                disabled={!buttonState.F2}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
              >
                設定 <br />
                (F2)
              </button>
              <button
                id="F3"
                disabled={!buttonState.F3}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
              >
                Show <br />
                照会 (F3)
              </button>
              <button
                id="F4"
                disabled={!buttonState.F4}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
              >
                検索リア <br />
                (F4)
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button
                id="F5"
                disabled={!buttonState.F5}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
              >
                追加 <br />
                (F5)
              </button>
              <button
                id="F6"
                disabled={!buttonState.F6}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
              >
                (F6)
              </button>
              <button
                id="F7"
                disabled={!buttonState.F7}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
              >
                List <br />一 覽 (F7)
              </button>
              <button
                id="F8"
                disabled={!buttonState.F8}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
              >
                (F8)
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button
                id="F9"
                disabled={!buttonState.F9}
                onClick={handleF9Click}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
              >
                Action <br />
                実行 (F9)
              </button>
              <button
                id="F10"
                disabled={!buttonState.F10}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
              >
                削除 <br />
                (F10)
              </button>
              <button
                id="F11"
                disabled={!buttonState.F11}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
              >
                次入力 <br />
                (F11)
              </button>
              <button
                id="F12"
                disabled={!buttonState.F12}
                onClick={handleF12Click}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
              >
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
