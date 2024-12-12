import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useCostList } from "../hooks/use-costlist";

export default function CostList() {
  const { initialFormState, costListData, setCostListData } = useCostList();

  const [formState, setFormState] = useState(initialFormState);

  const Initial_Item = (flag) => {
    if (flag) {
      setFormState(initialFormState);
    }
  };

  const enableFields = (fieldNames) => {
    setFormState((prevState) => {
      const updatedFields = { ...prevState };
      fieldNames.forEach((field) => {
        if (updatedFields[field]) {
          updatedFields[field].enabled = true;
        }
      });
      return updatedFields;
    });
  };

  const disableFields = (fieldNames) => {
    setFormState((prevState) => {
      const updatedFields = { ...prevState };
      fieldNames.forEach((field) => {
        if (updatedFields[field]) {
          updatedFields[field].enabled = false;
        }
      });
      return updatedFields;
    });
  };

  // ฟังก์ชันสำหรับจัดการประเภทการค้นหา
  const Search_Type_AfterUpdate = (searchType) => {
    switch (searchType) {
      case "Simple":
        Initial_Item(true);
        disableFields([
          "S_Order_No",
          "S_NAV_Name",
          "S_NAV_Size",
          "S_Product_Size",
          "S_Customer_Draw",
          "S_Company_Draw",
          "S_Product_Draw",
          "S_Sl_Instructions",
          "S_Pd_Instructions",
          "S_Pd_Remark",
          "S_I_Remark",
          "S_Price_CD",
          "S_Price_Name",
          "S_Customer_Name1",
          "S_Customer_Name2",
          "S_Customer_Name3",
          "S_Od_No_of_Custom",
          "S_Request1_CD",
          "S_Request1_Name",
          "S_Request2_CD",
          "S_Request2_Name",
          "S_Request3_CD",
          "S_Request3_Name",
          "S_Material1",
          "S_Material2",
          "S_Item2_CD",
          "S_Item2_Name",
          "S_Item3_CD",
          "S_Item3_Name",
          "S_Item4_CD",
          "S_Item4_Name",
          "S_Od_Pending",
          "S_Temp_Shipment",
          "S_Unreceived",
          "S_Od_CAT1",
          "S_Od_CAT2",
          "S_Od_CAT3",
          "S_St_Delivery_CD",
          "S_Ed_Delivery_CD",
          "S_St_Schedule_CD",
          "S_Ed_Schedule_CD",
          "S_St_Target_CD",
          "S_Ed_Target_CD",
          "S_St_Request_Delivery",
          "S_Ed_Request_Delivery",
          "S_St_NAV_Delivery",
          "S_Ed_NAV_Delivery",
          "S_St_Confirm_Delivery",
          "S_Ed_Confirm_Delivery",
          "S_St_Pd_Received_Date",
          "S_Ed_Pd_Received_Date",
          "S_St_Pd_Complete_Date",
          "S_Ed_Pd_Complete_Date",
          "S_St_I_Complete_Date",
          "S_Ed_I_Complete_Date",
          "S_St_Shipment_Date",
          "S_Ed_Shipment_Date",
          "S_St_Calc_Date",
          "S_Ed_Calc_Date",
          "S_Parts_No",
          "S_Parts_Pending",
          "S_Parts_CAT1",
          "S_Parts_CAT2",
          "S_Parts_CAT3",
          "S_St_Parts_Delivery",
          "S_Ed_Parts_Delivery",
          "S_Parts_Material",
          "S_Parts_Instructions",
          "S_Parts_Remark",
        ]);
        break;

      case "Normal":
        Initial_Item(true);
        enableFields([
          "S_Order_No",
          "S_Pd_Instructions",
          "S_Pd_Remark",
          "S_Customer_Name1",
          "S_Customer_Name2",
          "S_Customer_Name3",
          "S_Request3_CD",
          "S_Request3_Name",
          "S_Od_Pending",
          "S_Temp_Shipment",
          "S_Unreceived",
          "S_Od_CAT1",
          "S_Od_CAT2",
          "S_Od_CAT3",
          "S_St_Target_CD",
          "S_Ed_Target_CD",
          "S_St_Request_Delivery",
          "S_Ed_Request_Delivery",
          "S_St_NAV_Delivery",
          "S_Ed_NAV_Delivery",
          "S_St_Confirm_Delivery",
          "S_Ed_Confirm_Delivery",
          "S_Parts_No",
          "S_Parts_Pending",
          "S_Parts_CAT1",
          "S_Parts_CAT2",
          "S_Parts_CAT3",
          "S_St_Parts_Delivery",
          "S_Ed_Parts_Delivery",
          "S_Parts_Instructions",
          "S_Parts_Remark",
        ]);
        disableFields([
          "S_NAV_Name",
          "S_NAV_Size",
          "S_Product_Size",
          "S_Customer_Draw",
          "S_Company_Draw",
          "S_Product_Draw",
          "S_Sl_Instructions",

          "S_I_Remark",
          "S_Price_CD",
          "S_Price_Name",

          "S_Od_No_of_Custom",
          "S_Request1_CD",
          "S_Request1_Name",
          "S_Request2_CD",
          "S_Request2_Name",

          "S_Material1",
          "S_Material2",
          "S_Item2_CD",
          "S_Item2_Name",
          "S_Item3_CD",
          "S_Item3_Name",
          "S_Item4_CD",
          "S_Item4_Name",

          "S_Unreceived",
          "S_Od_CAT1",
          "S_Od_CAT2",
          "S_Od_CAT3",
          "S_St_Delivery_CD",
          "S_Ed_Delivery_CD",
          "S_St_Schedule_CD",
          "S_Ed_Schedule_CD",

          "S_St_Pd_Received_Date",
          "S_Ed_Pd_Received_Date",
          "S_St_Pd_Complete_Date",
          "S_Ed_Pd_Complete_Date",
          "S_St_I_Complete_Date",
          "S_Ed_I_Complete_Date",
          "S_St_Shipment_Date",
          "S_Ed_Shipment_Date",
          "S_St_Calc_Date",
          "S_Ed_Calc_Date",

          "S_Parts_Material",
        ]);
        break;

      case "Detail":
        Initial_Item(true);
        enableFields([
          "S_Order_No",
          "S_NAV_Name",
          "S_NAV_Size",
          "S_Product_Size",
          "S_Customer_Draw",
          "S_Company_Draw",
          "S_Product_Draw",
          "S_Sl_Instructions",
          "S_Pd_Instructions",
          "S_Pd_Remark",
          "S_I_Remark",
          "S_Price_CD",
          "S_Price_Name",
          "S_Customer_Name1",
          "S_Customer_Name2",
          "S_Customer_Name3",
          "S_Od_No_of_Custom",
          "S_Request1_CD",
          "S_Request1_Name",
          "S_Request2_CD",
          "S_Request2_Name",
          "S_Request3_CD",
          "S_Request3_Name",
          "S_Material1",
          "S_Material2",
          "S_Item2_CD",
          "S_Item2_Name",
          "S_Item3_CD",
          "S_Item3_Name",
          "S_Item4_CD",
          "S_Item4_Name",
          "S_Od_Pending",
          "S_Temp_Shipment",
          "S_Unreceived",
          "S_Od_CAT1",
          "S_Od_CAT2",
          "S_Od_CAT3",
          "S_St_Delivery_CD",
          "S_Ed_Delivery_CD",
          "S_St_Schedule_CD",
          "S_Ed_Schedule_CD",
          "S_St_Target_CD",
          "S_Ed_Target_CD",
          "S_St_Request_Delivery",
          "S_Ed_Request_Delivery",
          "S_St_NAV_Delivery",
          "S_Ed_NAV_Delivery",
          "S_St_Confirm_Delivery",
          "S_Ed_Confirm_Delivery",
          "S_St_Pd_Received_Date",
          "S_Ed_Pd_Received_Date",
          "S_St_Pd_Complete_Date",
          "S_Ed_Pd_Complete_Date",
          "S_St_I_Complete_Date",
          "S_Ed_I_Complete_Date",
          "S_St_Shipment_Date",
          "S_Ed_Shipment_Date",
          "S_St_Calc_Date",
          "S_Ed_Calc_Date",
          "S_Parts_No",
          "S_Parts_Pending",
          "S_Parts_CAT1",
          "S_Parts_CAT2",
          "S_Parts_CAT3",
          "S_St_Parts_Delivery",
          "S_Ed_Parts_Delivery",
          "S_Parts_Material",
          "S_Parts_Instructions",
          "S_Parts_Remark",
        ]);
        break;

      default:
        break;
    }
  };

  const handleCostListInputChange = async (event) => {
    const { id, value, type, checked } = event.target;

    setCostListData((prevCostListData) => ({
      ...prevCostListData,
      [id]: type === "checkbox" ? checked : value === "" ? null : value,
    }));
  };
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />

        <div className="flex-1 flex-col overflow-x-auto flex-grow p-2">
          <div className="bg-stone-300 grid grid-cols-1">
            <div className="bg-white w-11/12 mt-5 rounded-2xl mx-auto shadow-xl">
              <div className="flex justify-center py-4">
                <label className="text-xl font-bold">Cost List</label>
              </div>
              <hr />
              <div className="container mx-auto px-4 overflow-x-auto ">
                <div className="flex flex-nowrap justify-between items-center gap-2 py-2">
                  <div className="flex w-full md:w-auto">
                    <label className="w-[100px] font-medium">Search_Type</label>
                    <div className="w-24">
                      <select
                        onChange={(e) =>
                          Search_Type_AfterUpdate(e.target.value)
                        }
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                      >
                        <option value="Simple">Simple</option>
                        <option value="Normal">Normal</option>
                        <option value="Detail">Detail</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex w-full md:w-auto px-10">
                    <label className="w-[70px] font-medium">Delivery</label>
                    <div className="w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                        <option value="Request">Request</option>
                        <option value="NAV">NAV</option>
                        <option value="Confirm">Confirm</option>
                        <option value="Product">Product</option>
                        <option value="Parts">Parts</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex w-full md:w-auto">
                    <label className="w-[80px] font-medium">Delivery2</label>
                    <div className="w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                        <option value="Request">Request</option>
                        <option value="NAV">NAV</option>
                        <option value="Confirm">Confirm</option>
                        <option value="Product">Product</option>
                        <option value="Parts">Parts</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex w-full md:w-auto px-10">
                    <label className="w-[80px] font-medium">Delivery3</label>
                    <div className="w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                        <option value="Request">Request</option>
                        <option value="NAV">NAV</option>
                        <option value="Confirm">Confirm</option>
                        <option value="Product">Product</option>
                        <option value="Parts">Parts</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex w-full md:w-auto">
                    <label className="w-[120px] font-medium">
                      View_Schedule
                    </label>
                    <div className="w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                        <option value="Manual">Manual</option>
                        <option value="ASP">ASP</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex w-full md:w-auto px-10">
                    <label className="w-[100px] font-medium">Plan_Target</label>
                    <div className="w-24">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                        <option value=""></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="overflow-x-auto w-full">
                <div className="grid grid-cols-12 min-w-[1400px]">
                  <div className="w-full content-start ms-5 mt-4">
                    <label className="font-bold text-sm">
                      Order_Info_Search
                    </label>
                  </div>
                  <br />
                  <div className="col-span-12 me-5 mt-5 ml-14 overflow-x-auto">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-9">
                        {/* Group 1 */}
                        <div className="gap-2 flex mb-4 justify-start me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Format
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                <option value="Progress">Progress</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex gap-2 w-48 ml-4">
                            <label className="w-24 font-medium text-sm ">
                              Change_Page
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                <option value="No_Change_Page">
                                  No_Change_Page
                                </option>
                                <option value="Product_Section">
                                  Product_Section
                                </option>
                                <option value="Specific_Item">
                                  Specific_Item
                                </option>
                                <option value="Section_SpecItem">
                                  Section_SpecItem
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="flex ml-4 w-48 ">
                            <label className="w-24 font-medium text-sm">
                              Target
                            </label>
                            <div className="w-24">
                              <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full">
                                <option value="Production">Production</option>
                                <option value="QC">QC</option>
                                <option value="Administrator">
                                  Administrator
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* Group 2 */}
                        <div className="gap-2 flex mb-4 items-center justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Order_No
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_Order_No.enabled}
                                id="S_Order_No"
                                value={costListData?.S_Order_No || ""}
                                onChange={handleCostListInputChange}
                                type="text"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Order_No.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="flex w-48 bg-[#ffff99]">
                            <div className="flex w-24 gap-1 items-center">
                              <div className="w-auto flex me-1">
                                <input
                                  id="Info_View"
                                  value={costListData?.Info_View || ""}
                                  onChange={handleCostListInputChange}
                                  type="checkbox"
                                  className="w-6 h-6"
                                />
                              </div>
                              <label className="text-xs font-medium ">
                                Into_View
                              </label>
                            </div>
                            <div className="flex w-24 gap-1 items-center">
                              <div className="w-auto flex me-1">
                                <input
                                  id="Pl_Color_Separate"
                                  value={costListData?.Pl_Color_Separate || ""}
                                  onChange={handleCostListInputChange}
                                  type="checkbox"
                                  className="w-6 h-6"
                                />
                              </div>
                              <label className="text-xs font-medium ">
                                PI_Colo
                              </label>
                            </div>
                          </div>
                          <div className="flex  mr-3 w-56">
                            <label className="w-32 font-medium text-sm">
                              Mark_Days
                            </label>
                            <div className="w-32 ">
                              <input
                                id="Mark_Days"
                                value={costListData?.Mark_Days || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className="h-6 bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-auto gap-2 ms-5">
                            <label className="w-20 font-medium text-sm">
                              Ctl_Person
                            </label>
                            <div className="w-24">
                              <select
                                id="S_Od_Ctl_Person_CD"
                                value={costListData?.S_Od_Ctl_Person_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 3 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              NAV_Name
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_NAV_Name.enabled}
                                id="S_NAV_Name"
                                value={costListData?.S_NAV_Name || ""}
                                onChange={handleCostListInputChange}
                                type="text"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_NAV_Name.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="flex w-[400px] gap-2 ml-2 mr-8">
                            <label className="w-auto font-medium text-sm">
                              Product_Grp
                            </label>
                            <div className="w-24">
                              <select
                                id="S_St_Pd_Grp_CD"
                                value={costListData?.S_St_Pd_Grp_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-24 ">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>

                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>

                            <div className="w-24 ">
                              <select
                                id="S_Ed_Pd_Grp_CD"
                                value={costListData?.S_Ed_Pd_Grp_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>

                          <div className="flex justify-between w-auto gap-2 ms-5">
                            <label className="w-20 font-medium text-sm">
                              Sales_grp
                            </label>
                            <div className="w-24">
                              <select
                                id="S_Sl_Grp_CD"
                                value={costListData?.S_Sl_Grp_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 4 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Product_Name
                            </label>
                            <div className="w-24">
                              <input
                                id="S_Product_Name"
                                value={costListData?.S_Product_Name || ""}
                                onChange={handleCostListInputChange}
                                type="text"
                                className="h-6 bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex  w-48 gap-2 mr-5">
                            <label className="w-auto font-medium text-sm">
                              Not_Pd_Grp1
                            </label>
                            <div className="w-24">
                              <select
                                id="S_No_Pd_Grp_CD1"
                                value={costListData?.S_No_Pd_Grp_CD1 || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-20">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full mr-4"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-48 gap-2">
                            <label className=" font-medium text-sm mr-5">
                              Price_CAT
                            </label>
                            <div className=" w-16">
                              <select
                                disabled={!formState.S_Price_CD.enabled}
                                id="S_Price_CD"
                                value={costListData?.S_Price_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Price_CD.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-16 ">
                              <input
                                disabled={!formState.S_Price_Name.enabled}
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-auto gap-2 ms-5">
                            <label className="w-20 font-medium text-sm">
                              Sales_Person
                            </label>
                            <div className="w-24">
                              <select
                                id="S_Sl_Person_CD"
                                value={costListData?.S_Sl_Person_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 5 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              NAV_Size
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_NAV_Size.enabled}
                                id="S_NAV_Size"
                                value={costListData?.S_NAV_Size || ""}
                                onChange={handleCostListInputChange}
                                type="text"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_NAV_Size.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-48 gap-2 mr-5">
                            <label className="w-auto font-medium text-sm">
                              Not_Pd_Grp2
                            </label>
                            <div className="w-24">
                              <select
                                id="S_No_Pd_Grp_CD2"
                                value={costListData?.S_No_Pd_Grp_CD2 || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-20">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-auto gap-2 mr-3">
                            <label className="w-auto font-medium text-sm">
                              Request_CAT
                            </label>
                            <div className="w-16">
                              <select
                                disabled={!formState.S_Request1_CD.enabled}
                                id="S_Request1_CD"
                                value={costListData?.S_Request1_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Request1_CD.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-16">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <div className="w-16">
                              <select
                                disabled={!formState.S_Request2_CD.enabled}
                                id="S_Request2_CD"
                                value={costListData?.S_Request2_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Request2_CD.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-16">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <div className="w-16">
                              <select
                                disabled={!formState.S_Request3_CD.enabled}
                                id="S_Request3_CD"
                                value={costListData?.S_Request3_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Request3_CD.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-16">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 6 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="w-1/2 flex gap-2">
                            <div className="flex gap-2 w-48">
                              <label className="w-24 font-medium text-sm">
                                Product_Size
                              </label>
                              <div className="w-24">
                                <input
                                  disabled={!formState.S_Product_Size.enabled}
                                  id="S_Product_Size"
                                  value={costListData?.S_Product_Size || ""}
                                  onChange={handleCostListInputChange}
                                  type="text"
                                  className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                    formState.S_Product_Size.enabled
                                      ? "bg-[#ccffff] border-gray-500"
                                      : "bg-white border-gray-500"
                                  }`}
                                />
                              </div>
                            </div>
                            <div className="flex justify-between gap-2 ms-3 flex-wrap">
                              <div className="flex gap-2 w-full sm:w-52">
                                <label className="w-auto font-medium text-sm">
                                  Customer1
                                </label>
                                <div className="w-28">
                                  <select
                                    id="S_Customer_CD1"
                                    value={costListData?.S_Customer_CD1 || ""}
                                    onChange={handleCostListInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                                  >
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                  </select>
                                </div>
                                <div className="w-28">
                                  <input
                                    type="text"
                                    className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-between gap-2 ">
                              <div className="flex gap-2 w-full ml-4">
                                <label className="w-24 font-medium text-sm">
                                  Customer1
                                </label>
                                <div className="w-auto">
                                  <input
                                    type="text"
                                    className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                                  />
                                </div>
                              </div>

                              <div className="flex  w-28 ">
                                <label className="ml-4 w-24 font-medium text-sm">
                                  Mate1
                                </label>
                                <div className="w-auto ml-5">
                                  <input
                                    disabled={!formState.S_Material1.enabled}
                                    id="S_Material1"
                                    value={costListData?.S_Material1 || ""}
                                    onChange={handleCostListInputChange}
                                    type="text"
                                    className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                      formState.S_Material1.enabled
                                        ? "bg-[#ccffff] border-gray-500"
                                        : "bg-white border-gray-500"
                                    }`}
                                  />
                                </div>
                              </div>

                              <div className="flex  w-28 ">
                                <label className="ml-4 w-24 font-medium text-sm">
                                  Mate2
                                </label>
                                <div className="w-auto ml-5">
                                  <input
                                    disabled={!formState.S_Material2.enabled}
                                    id="S_Material2"
                                    value={costListData?.S_Material2 || ""}
                                    onChange={handleCostListInputChange}
                                    type="text"
                                    className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                      formState.S_Material2.enabled
                                        ? "bg-[#ccffff] border-gray-500"
                                        : "bg-white border-gray-500"
                                    }`}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Group 7 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Cus_Draw_No
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_Customer_Draw.enabled}
                                id="S_Customer_Draw"
                                value={costListData?.S_Customer_Draw || ""}
                                onChange={handleCostListInputChange}
                                type="text"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Customer_Draw.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Customer2
                            </label>
                            <div className="w-28">
                              <select
                                id="S_Customer_Draw"
                                value={costListData?.S_Customer_CD2 || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Customer2
                            </label>
                            <div className="w-24 ">
                              <input
                                id="S_Customer_Draw"
                                value={costListData?.S_Customer_CD2 || ""}
                                onChange={handleCostListInputChange}
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Item1
                            </label>
                            <div className="w-28">
                              <select
                                id="S_Item1_CD"
                                value={costListData?.S_Item1_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 8 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Com_Draw_No
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_Company_Draw.enabled}
                                id="S_Customer_Draw"
                                value={costListData?.S_Company_Draw || ""}
                                onChange={handleCostListInputChange}
                                type="text"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Company_Draw.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Customer3
                            </label>
                            <div className="w-28">
                              <select
                                id="S_Customer_CD3"
                                value={costListData?.S_Customer_CD3 || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Customer3
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Item2
                            </label>
                            <div className="w-28">
                              <select
                                disabled={!formState.S_Item2_CD.enabled}
                                id="S_Item2_CD"
                                value={costListData?.S_Item2_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Item2_CD.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 9 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Pd_Draw_No
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_Product_Draw.enabled}
                                id="S_Product_Draw"
                                value={costListData?.S_Product_Draw || ""}
                                onChange={handleCostListInputChange}
                                type="text"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Product_Draw.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Not_Customer
                            </label>
                            <div className="w-28">
                              <select
                                id="S_No_Customer_CD"
                                value={costListData?.S_No_Customer_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Not_Customer
                            </label>
                            <div className="w-24">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Item3
                            </label>
                            <div className="w-28">
                              <select
                                disabled={!formState.S_Item3_CD.enabled}
                                id="S_Item3_CD"
                                value={costListData?.S_Item3_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Item3_CD.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 10 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Sales_Note
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_Sl_Instructions.enabled}
                                id="S_Sl_Instructions"
                                value={costListData?.S_Sl_Instructions || ""}
                                onChange={handleCostListInputChange}
                                type="text"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Sl_Instructions.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Specific1
                            </label>
                            <div className="w-28">
                              <select
                                id="S_Specific_CD1"
                                value={costListData?.S_Specific_CD1 || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Coating1
                            </label>
                            <div className="w-28">
                              <select
                                id="S_Coating_CD1"
                                value={costListData?.S_Coating_CD1 || ""}
                                onChange={handleCostListInputChange}
                                className="h-6 border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Item4
                            </label>
                            <div className="w-28">
                              <select
                                disabled={!formState.S_Item4_CD.enabled}
                                id="S_Item4_CD"
                                value={costListData?.S_Item4_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Item4_CD.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 11 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Pd_Note
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_Pd_Instructions.enabled}
                                id="S_Pd_Instructions"
                                value={costListData?.S_Pd_Instructions || ""}
                                onChange={handleCostListInputChange}
                                type="text"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Pd_Instructions.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Specific2
                            </label>
                            <div className="w-28">
                              <select
                                id="S_Specific_CD2"
                                value={costListData?.S_Specific_CD2 || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Coating2
                            </label>
                            <div className="w-28">
                              <select
                                id="S_Coating_CD2"
                                value={costListData?.S_Coating_CD2 || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Od_Pent
                            </label>
                            <div className="w-28">
                              <select
                                disabled={!formState.S_Od_Pending.enabled}
                                id="S_Od_Pending"
                                value={costListData?.S_Od_Pending || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Od_Pending.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex gap-2 w-auto">
                            <label className="w-auto font-medium text-sm">
                              Od_CAT1
                            </label>
                            <div className="w-28">
                              <select
                                disabled={!formState.S_Od_CAT1.enabled}
                                id="S_Od_CAT1"
                                value={costListData?.S_Od_CAT1 || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Od_CAT1.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* Group 12 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              Pd_Remark
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_Pd_Remark.enabled}
                                id="S_Pd_Remark"
                                value={costListData?.S_Pd_Remark || ""}
                                onChange={handleCostListInputChange}
                                type="text"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Pd_Remark.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Not_Specific1
                            </label>
                            <div className="w-28">
                              <select
                                id="S_No_Specific_CD1"
                                value={costListData?.S_No_Specific_CD1 || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Coating3
                            </label>
                            <div className="w-28">
                              <select
                                id="S_Coating_CD3"
                                value={costListData?.S_Coating_CD3 || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              TempShip
                            </label>
                            <div className="w-28">
                              <select
                                disabled={!formState.S_Temp_Shipment.enabled}
                                id="S_Temp_Shipment"
                                value={costListData?.S_Temp_Shipment || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Temp_Shipment.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex gap-2 w-auto">
                            <label className="w-auto font-medium text-sm">
                              Od_CAT2
                            </label>
                            <div className="w-28">
                              <select
                                disabled={!formState.S_Od_CAT2.enabled}
                                id="S_Od_CAT2"
                                value={costListData?.S_Od_CAT2 || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Od_CAT2.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* Group 13 */}
                        <div className="gap-2 flex mb-4 justify-between me-5">
                          <div className="flex gap-2 w-48">
                            <label className="w-24 font-medium text-sm">
                              QC_Remark
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_I_Remark.enabled}
                                id="S_I_Remark"
                                value={costListData?.S_I_Remark || ""}
                                onChange={handleCostListInputChange}
                                type="text"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_I_Remark.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-52">
                            <label className="w-auto font-medium text-sm">
                              Not_Specitic2
                            </label>
                            <div className="w-28">
                              <select
                                id="S_No_Specific_CD2"
                                value={costListData?.S_No_Specific_CD2 || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Not_Coat
                            </label>
                            <div className="w-28">
                              <select
                                id="S_No_Coating_CD"
                                value={costListData?.S_No_Coating_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Unrecive
                            </label>
                            <div className="w-28">
                              <select
                                disabled={!formState.S_Unreceived.enabled}
                                id="S_Unreceived"
                                value={costListData?.S_Unreceived || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Unreceived.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex gap-2 w-auto">
                            <label className="w-auto font-medium text-sm">
                              Od_CAT3
                            </label>
                            <div className="w-28">
                              <select
                                disabled={!formState.S_Od_CAT3.enabled}
                                id="S_Od_CAT3"
                                value={costListData?.S_Od_CAT3 || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Od_CAT3.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3">
                        {/* Group 1 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Order_Progress
                            </label>
                            <div className="w-24">
                              <select
                                id="S_St_Od_Progress_CD"
                                value={costListData?.S_St_Od_Progress_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <select
                                id="S_Ed_Od_Progress_CD"
                                value={costListData?.S_Ed_Od_Progress_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* Group 2 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Delivery_CAT
                            </label>
                            <div className="w-24">
                              <select
                                disabled={!formState.S_St_Delivery_CD.enabled}
                                id="S_St_Delivery_CD"
                                value={costListData?.S_St_Delivery_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_St_Delivery_CD.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <select
                                disabled={!formState.S_Ed_Delivery_CD.enabled}
                                id="S_Ed_Delivery_CD"
                                value={costListData?.S_Ed_Delivery_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Ed_Delivery_CD.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* Group 3 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Schedule_CAT
                            </label>
                            <div className="w-24">
                              <select
                                disabled={!formState.S_St_Schedule_CD.enabled}
                                id="S_St_Schedule_CD"
                                value={costListData?.S_St_Schedule_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_St_Schedule_CD.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <select
                                disabled={!formState.S_Ed_Schedule_CD.enabled}
                                id="S_Ed_Schedule_CD"
                                value={costListData?.S_Ed_Schedule_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Ed_Schedule_CD.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* Group 4 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Target_CAT
                            </label>
                            <div className="w-24">
                              <select
                                disabled={!formState.S_St_Target_CD.enabled}
                                id="S_St_Target_CD"
                                value={costListData?.S_St_Target_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_St_Target_CD.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <select
                                disabled={!formState.S_Ed_Target_CD.enabled}
                                id="S_Ed_Target_CD"
                                value={costListData?.S_Ed_Target_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                                  formState.S_Ed_Target_CD.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* Group 5 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Request_Delivery
                            </label>
                            <div className="w-24">
                              <input
                                disabled={
                                  !formState.S_St_Request_Delivery.enabled
                                }
                                id="S_St_Request_Delivery"
                                value={
                                  costListData?.S_St_Request_Delivery || ""
                                }
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_St_Request_Delivery.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                disabled={
                                  !formState.S_Ed_Request_Delivery.enabled
                                }
                                id="S_Ed_Request_Delivery"
                                value={
                                  costListData?.S_Ed_Request_Delivery || ""
                                }
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Ed_Request_Delivery.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 6 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Nav Delivery
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_St_NAV_Delivery.enabled}
                                id="S_St_NAV_Delivery"
                                value={costListData?.S_St_NAV_Delivery || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_St_NAV_Delivery.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_Ed_NAV_Delivery.enabled}
                                id="S_Ed_NAV_Delivery"
                                value={costListData?.S_Ed_NAV_Delivery || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Ed_NAV_Delivery.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 7 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Confirm_Delivery
                            </label>
                            <div className="w-24">
                              <input
                                disabled={
                                  !formState.S_St_Confirm_Delivery.enabled
                                }
                                id="S_St_Confirm_Delivery"
                                value={
                                  costListData?.S_St_Confirm_Delivery || ""
                                }
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_St_Confirm_Delivery.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                disabled={
                                  !formState.S_Ed_Confirm_Delivery.enabled
                                }
                                id="S_Ed_Confirm_Delivery"
                                value={
                                  costListData?.S_Ed_Confirm_Delivery || ""
                                }
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Ed_Confirm_Delivery.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 8 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Product_Delivery
                            </label>
                            <div className="w-24">
                              <input
                                id="S_St_Product_Delivery"
                                value={
                                  costListData?.S_St_Product_Delivery || ""
                                }
                                onChange={handleCostListInputChange}
                                type="date"
                                className="h-6 bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                id="S_Ed_Product_Delivery"
                                value={
                                  costListData?.S_Ed_Product_Delivery || ""
                                }
                                onChange={handleCostListInputChange}
                                type="date"
                                className="h-6 bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 9 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Product_Received
                            </label>
                            <div className="w-24">
                              <input
                                disabled={
                                  !formState.S_St_Pd_Received_Date.enabled
                                }
                                id="S_St_Pd_Received_Date"
                                value={
                                  costListData?.S_St_Pd_Received_Date || ""
                                }
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_St_Pd_Received_Date.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                disabled={
                                  !formState.S_Ed_Pd_Received_Date.enabled
                                }
                                id="S_Ed_Pd_Received_Date"
                                value={
                                  costListData?.S_Ed_Pd_Received_Date || ""
                                }
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Ed_Pd_Received_Date.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 10 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Product_Complete
                            </label>
                            <div className="w-24">
                              <input
                                disabled={
                                  !formState.S_St_Pd_Complete_Date.enabled
                                }
                                id="S_St_Pd_Complete_Date"
                                value={
                                  costListData?.S_St_Pd_Complete_Date || ""
                                }
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_St_Pd_Complete_Date.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                disabled={
                                  !formState.S_Ed_Pd_Complete_Date.enabled
                                }
                                id="S_Ed_Pd_Complete_Date"
                                value={
                                  costListData?.S_Ed_Pd_Complete_Date || ""
                                }
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Ed_Pd_Complete_Date.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 11 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              QC_Complete
                            </label>
                            <div className="w-24">
                              <input
                                disabled={
                                  !formState.S_St_I_Complete_Date.enabled
                                }
                                id="S_St_I_Complete_Date"
                                value={costListData?.S_St_I_Complete_Date || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_St_I_Complete_Date.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                disabled={
                                  !formState.S_Ed_I_Complete_Date.enabled
                                }
                                id="S_Ed_I_Complete_Date"
                                value={costListData?.S_Ed_I_Complete_Date || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Ed_I_Complete_Date.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 12 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Shipment_Date
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_St_Shipment_Date.enabled}
                                id="S_St_Shipment_Date"
                                value={costListData?.S_St_Shipment_Date || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_St_Shipment_Date.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_Ed_Shipment_Date.enabled}
                                id="S_Ed_Shipment_Date"
                                value={costListData?.S_Ed_Shipment_Date || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Ed_Shipment_Date.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Group 13 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-medium text-sm">
                              Cale_Date
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_St_Calc_Date.enabled}
                                id="S_St_Calc_Date"
                                value={costListData?.S_St_Calc_Date || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_St_Calc_Date.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_Ed_Calc_Date.enabled}
                                id="S_Ed_Calc_Date"
                                value={costListData?.S_Ed_Calc_Date || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                                  formState.S_Ed_Calc_Date.enabled
                                    ? "bg-[#ccffff] border-gray-500"
                                    : "bg-white border-gray-500"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              {/* plan-info-search */}

              <div className="w-full content-start ms-5 mt-4">
                <label className="font-bold text-sm">Plan_Info_Search</label>
              </div>
              <div className="container sm:overflow-x-auto lg:overflow-x-flow-hidden w-full">
                <div className="col-span-12  me-5 mt-5 ml-14">
                  {/* Group 1 */}
                  <div className="flex flex-warp justify-start gap-2 mb-2 items-center">
                    <div className="flex item-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-8">
                        Parts_No
                      </label>
                      <div className="items-center w-full mr-5">
                        <input
                          disabled={!formState.S_Parts_No.enabled}
                          id="S_Parts_No"
                          value={costListData?.S_Parts_No || ""}
                          onChange={handleCostListInputChange}
                          type="date"
                          className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                            formState.S_Parts_No.enabled
                              ? "bg-[#ccffff] border-gray-500"
                              : "bg-white border-gray-500"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-3">
                        Parts_Pend
                      </label>
                      <div className="items-center w-full mr-5">
                        <select
                          disabled={!formState.S_Parts_Pending.enabled}
                          id="S_Parts_Pending"
                          value={costListData?.S_Parts_Pending || ""}
                          onChange={handleCostListInputChange}
                          className={`border-gray-500 border-solid border-2 rounded-md  w-full ${
                            formState.S_Parts_Pending.enabled
                              ? "bg-[#ccffff] border-gray-500"
                              : "bg-white border-gray-500"
                          }`}
                        >
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <label className="w-auto font-medium text-sm mr-7">
                          Pt_CAT1
                        </label>
                        <div className="items-center w-full">
                          <select
                            disabled={!formState.S_Parts_CAT1.enabled}
                            id="S_Parts_CAT1"
                            value={costListData?.S_Parts_CAT1 || ""}
                            onChange={handleCostListInputChange}
                            className={`border-gray-500 border-solid border-2 rounded-md  w-24 h-6 ${
                              formState.S_Parts_CAT1.enabled
                                ? "bg-[#ccffff] border-gray-500"
                                : "bg-white border-gray-500"
                            }`}
                          >
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Group 2 */}
                  <div className="flex flex-warp justify-start gap-2 mb-4 items-center">
                    <div className="flex item-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-9">
                        Pt_CAT2
                      </label>
                      <div className="items-center w-full mr-5">
                        <select
                          disabled={!formState.S_Parts_CAT1.enabled}
                          id="S_Parts_CAT1"
                          value={costListData?.S_Parts_CAT1 || ""}
                          onChange={handleCostListInputChange}
                          className={`border-gray-500 border-solid border-2 rounded-md  w-24 h-6 ${
                            formState.S_Parts_CAT1.enabled
                              ? "bg-[#ccffff] border-gray-500"
                              : "bg-white border-gray-500"
                          }`}
                        >
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-7">
                        Pt_CAT3
                      </label>
                      <div className="items-center w-full">
                        <select
                          disabled={!formState.S_Parts_CAT3.enabled}
                          id="S_Parts_CAT3"
                          value={costListData?.S_Parts_CAT3 || ""}
                          onChange={handleCostListInputChange}
                          className={`border-gray-500 border-solid border-2 rounded-md  w-24 h-6 ${
                            formState.S_Parts_CAT3.enabled
                              ? "bg-[#ccffff] border-gray-500"
                              : "bg-white border-gray-500"
                          }`}
                        >
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* group3 */}
                  <div className="flex flex-warp justify-start gap-2 mb-2 items-center">
                    <div className="flex item-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-4">
                        Reg_Person
                      </label>
                      <div className="items-center w-full mr-5">
                        <select
                          id="S_Pl_Reg_Person_CD"
                          value={costListData?.S_Pl_Reg_Person_CD || ""}
                          onChange={handleCostListInputChange}
                          className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-24 h-6"
                        >
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-3">
                        Parts_Mate
                      </label>
                      <div className="items-center w-full mr-5">
                        <select
                          disabled={!formState.S_Parts_Material.enabled}
                          id="S_Parts_Material"
                          value={costListData?.S_Parts_Material || ""}
                          onChange={handleCostListInputChange}
                          className={`border-gray-500 border-solid border-2 rounded-md  w-24 h-6 ${
                            formState.S_Parts_Material.enabled
                              ? "bg-[#ccffff] border-gray-500"
                              : "bg-white border-gray-500"
                          }`}
                        >
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <label className="w-auto font-medium text-sm mr-3">
                          Parts_Note
                        </label>
                        <div className="items-center w-full">
                          <select
                            disabled={!formState.S_Parts_Instructions.enabled}
                            id="S_Parts_Instructions"
                            value={costListData?.S_Parts_Instructions || ""}
                            onChange={handleCostListInputChange}
                            className={`border-gray-500 border-solid border-2 rounded-md  w-24 h-6 ${
                              formState.S_Parts_Instructions.enabled
                                ? "bg-[#ccffff] border-gray-500"
                                : "bg-white border-gray-500"
                            }`}
                          >
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Group 4*/}
                  <div className="flex flex-warp justify-start gap-2 mb-4 items-center">
                    <div className="flex item-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-5">
                        Pt_Remark
                      </label>
                      <div className="items-center w-full mr-5">
                        <select
                          disabled={!formState.S_Parts_Remark.enabled}
                          id="S_Parts_Remark"
                          value={costListData?.S_Parts_Remark || ""}
                          onChange={handleCostListInputChange}
                          className={`border-gray-500 border-solid border-2 rounded-md  w-24 h-6 ${
                            formState.S_Parts_Remark.enabled
                              ? "bg-[#ccffff] border-gray-500"
                              : "bg-white border-gray-500"
                          }`}
                        >
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-medium text-sm mr-5">
                        Parts_Info
                      </label>
                      <div className="items-center w-full">
                        <input
                          id="S_Parts_Information"
                          value={costListData?.S_Parts_Information || ""}
                          onChange={handleCostListInputChange}
                          type="text"
                          className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Group 5*/}
                  <div className="flex flex-warp justify-start gap-4 mb-2 ">
                    <div className="flex item-center gap-2">
                      <label className="w-auto font-medium text-sm ">
                        Parts_Delivery
                      </label>
                      <div className="items-center">
                        <input
                          disabled={!formState.S_St_Parts_Delivery.enabled}
                          id="S_St_Parts_Delivery"
                          value={costListData?.S_St_Parts_Delivery || ""}
                          onChange={handleCostListInputChange}
                          type="date"
                          className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                            formState.S_St_Parts_Delivery.enabled
                              ? "bg-[#ccffff] border-gray-500"
                              : "bg-white border-gray-500"
                          }`}
                        />
                      </div>
                      <label className="font-medium text-sm">~</label>
                      <div>
                        <input
                          disabled={!formState.S_Ed_Parts_Delivery.enabled}
                          id="S_Ed_Parts_Delivery"
                          value={costListData?.S_Ed_Parts_Delivery || ""}
                          onChange={handleCostListInputChange}
                          type="date"
                          className={`h-6 border-solid border-2 rounded-md px-1 w-full ${
                            formState.S_Ed_Parts_Delivery.enabled
                              ? "bg-[#ccffff] border-gray-500"
                              : "bg-white border-gray-500"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-medium text-sm ">
                        Pl_Progress
                      </label>
                      <div className="w-full">
                        <select
                          id="S_St_Pl_Progress_CD"
                          value={costListData?.S_St_Pl_Progress_CD || ""}
                          onChange={handleCostListInputChange}
                          className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-24 h-6"
                        >
                          <option value=""></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <label className="font-medium text-sm">~</label>
                      <div className=" w-full pr-2">
                        <select
                          id="S_Ed_Pl_Progress_CD"
                          value={costListData?.S_Ed_Pl_Progress_CD || ""}
                          onChange={handleCostListInputChange}
                          className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-24 h-6"
                        >
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
              {/* Cost-Info-Seacrh */}
              <div className="p-2">
                <div className="mb-2">
                  <label className="font-bold text-sm pl-4">
                    Cost_Info_Search
                  </label>
                </div>
                <div className="flex gap-6 mb-2 justify-end pr-3">
                  <div className="flex item-center gap-2">
                    <label className="w-auto font-medium text-sm ">
                      Process_Date
                    </label>
                    <div>
                      <input
                        id="S_St_Process_Date"
                        value={costListData?.S_St_Process_Date || ""}
                        onChange={handleCostListInputChange}
                        type="date"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                      />
                    </div>
                    <label className="font-medium text-sm">~</label>
                    <div>
                      <input
                        id="S_Ed_Process_Date"
                        value={costListData?.S_Ed_Process_Date || ""}
                        onChange={handleCostListInputChange}
                        type="date"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-6  justify-end pr-3">
                  <div className="flex item-center gap-2">
                    <label className="w-auto font-medium text-sm ">
                      Complete_Date
                    </label>
                    <div>
                      <input
                        id="S_St_Complete_Date"
                        value={costListData?.S_St_Complete_Date || ""}
                        onChange={handleCostListInputChange}
                        type="date"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                      />
                    </div>
                    <label className="font-medium text-sm">~</label>
                    <div>
                      <input
                        id="S_Ed_Complete_Date"
                        value={costListData?.S_Ed_Complete_Date || ""}
                        onChange={handleCostListInputChange}
                        type="date"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Result_Search */}
              <div className="overflow-x-auto w-full">
                <div className="flex">
                  <div className="p-2">
                    <div>
                      <label className="font-bold text-sm pl-4">
                        Result_Search
                      </label>
                    </div>
                    <div className="flex item-center gap-4 pl-4">
                      <div className="flex w-full gap-4">
                        {/* div ย่อยที่ 1 */}
                        <div className="flex gap-6">
                          <div className="flex  item-center gap-2">
                            <label className="w-auto font-medium text-sm ">
                              Select_Od_No
                            </label>
                          </div>
                          <div>
                            <input
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                            />
                          </div>
                          {/* div ย่อยที่ 2 */}
                          <div className="flex gap-6">
                            <div className="flex  item-center gap-2">
                              <label className="w-auto font-medium text-sm ">
                                Select_Pt_No
                              </label>
                            </div>
                            <div>
                              <input
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                              />
                            </div>
                            {/* div ย่อยที่ 3 */}
                            <div className="flex gap-6">
                              <div className=" ">
                                <div className="flex item-center gap-2">
                                  <div className="flex  item-center gap-2">
                                    <label className="w-auto font-medium text-sm ">
                                      l_List_View_W(22.8)
                                    </label>
                                  </div>
                                  <div>
                                    <input
                                      type="text"
                                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* div ย่อยที่ 4 */}
                              <div className="flex gap-6">
                                <div className="flex item-center">
                                  <label className="w-auto font-medium text-sm">
                                    Pl_List_ViewH(3~15cm)
                                  </label>
                                </div>
                                <div>
                                  <input
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-6"
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

              <div className="flex justify-end p-4">
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Change_View
                </button>
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
                    Setting <br />
                    設定 (F2)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    Show <br />
                    照会 (F3)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    Target <br />
                    対象 (F4)
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    Product <br />
                    部門 (F5)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    Calc <br />
                    生産 (F6)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    List <br />一 覽 (F7)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    Data <br />
                    データ (F8)
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    <label className="flex justify-center items-center">
                      <IoIosArrowRoundForward className="font-medium text-2xl" />{" "}
                      CSV{" "}
                    </label>
                    (F9)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                    (F10)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white">
                    Clear <br />
                    クリア (F11)
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
  );
}
