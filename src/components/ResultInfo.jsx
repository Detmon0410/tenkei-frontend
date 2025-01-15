import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useResult } from "../hooks/use-result";
import { useOrder } from "../hooks/use-order";
import { usePlan } from "../hooks/use-plan";

export default function ResultInfo() {
  const inputs = Array.from({ length: 12 }, (_, i) => i + 1);
  const inputs2 = Array.from({ length: 12 }, (_, i) => i + 13);
  const inputs3 = Array.from({ length: 12 }, (_, i) => i + 25);
  const inputs4 = Array.from({ length: 6 }, (_, i) => i + 1);

  const [selectedCustomerAbb, setSelectedCustomerAbb] = useState("");
  const [selectedWorkGName, setSelectedWorkGName] = useState("");
  const [personName, setPersonName] = useState("");
  const [selectedSalesPersonAbb, setSelectedSalesPerson] = useState("");
  const [SpecificName, setSpecificName] = useState("");
  const [OdProgressName, setOdProgressName] = useState("");
  const [DeliveryName, setDeliveryName] = useState("");
  const [targetName, setTargetName] = useState("");
  const [unitName, setUnitName] = useState("");
  const [PriceName, setPriceName] = useState("");
  const [supplyName, setSupplyName] = useState("");
  const [coatingName, setCoatingName] = useState("");

  const {
    planData,
    setPlanData,
    searchPartsData,
    selectedPlanNo,
    selectPartsData,
    PartsData,
    plprogressData,
    setPlProgressData,
    ScheduleData,
    setScheduleData,
  } = usePlan();
  const {
    CoatingData,
    SupplyData,
    PriceData,
    UnitData,
    TargetData,
    DeliveryData,
    OdProgressData,
    orderData,
    WorkergData,
    WorkerData,
    SpecificData,
    setOrderData,
    searchOrderData,
    setCustomerData,
    CustomerData,
    setWorkergData,
    setWorkerData,
    setSpecificData,
    setOdProgressData,
    setDeliveryData,
    setTargetData,
    setUnitData,
    setPriceData,
    setSupplyData,
    setCoatingData,
  } = useOrder();
  const { ResultData, setResultData, SearchResultData } = useResult();

  const navigate = useNavigate();
  const location = useLocation();
  const { searchOrderNo: initialSearchOrderNo = "" } = location.state || {};
  const { searchPlanNo: initialSearchPlanNo = "" } = location.state || {};
  const [searchOrderNo, setSearchOrderNo] = useState(initialSearchOrderNo);
  const [searchPlanNo, setSearchPlanNo] = useState(initialSearchPlanNo);
  const [Search_Odpt_No, setSearch_Odpt_No] = useState("");
  const [Person_Name, setPerson_Name] = useState("");
  const [PartName, setPartName] = useState("");
  const [ProgressName, setProgressName] = useState("");
  const [Schedule_Name, setSchedule_Name] = useState("");

  const formatDateTime = (date) => {
    if (!date) return "";
    const d = new Date(date);

    // ดึงข้อมูลวันที่ในรูปแบบ UTC
    const day = String(d.getUTCDate()).padStart(2, "0");
    const month = String(d.getUTCMonth() + 1).padStart(2, "0");
    const year = d.getUTCFullYear();

    // ดึงข้อมูลเวลาในรูปแบบ UTC
    const hours = String(d.getUTCHours()).padStart(2, "0");
    const minutes = String(d.getUTCMinutes()).padStart(2, "0");
    const seconds = String(d.getUTCSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const handleOrderInputChange = async (event) => {
    const { id, value, type, checked } = event.target;

    setOrderData((prevOrdertData) => ({
      ...prevOrdertData,
      [id]: type === "checkbox" ? checked : value === "" ? null : value,
    }));

    if (id === "Search_Order_No") {
      setSearchOrderNo(value);
      if (value) {
        searchOrderData(value);
        searchPartsData(value);
      }
    }
  };

  const handlePlanInputChange = async (event) => {
    const { id, value, type, checked } = event.target;

    setPlanData((prevPlanData) => ({
      ...prevPlanData,
      [id]: type === "checkbox" ? checked : value === "" ? null : value,
    }));

    if (id === "Search_Parts_No") {
      setSearchPlanNo(value);
      setSearch_Odpt_No(`${searchOrderNo || ""}-${value}`);
    }
  };

  const handleResultInputChange = async (event) => {
    const { id, value, type, checked } = event.target;

    setResultData((prevResultData) => ({
      ...prevResultData,
      [id]: type === "checkbox" ? checked : value === "" ? null : value,
    }));
  };

  const handleF4Click = async () => {
    try {
      const orderExists = await searchOrderData(searchOrderNo);
      if (orderExists) {
        navigate("/cost-info", { state: { searchOrderNo, searchPlanNo } });
      } else {
        await Swal.fire({
          title: "ข้อมูลไม่ถูกต้อง",
          text: "ไม่มีพบหมายเลข order",
          icon: "warning",
          confirmButtonText: "ตกลง",
        });
      }
    } catch (error) {
      alert("Error occurs when F4_Click\nPlease contact system administrator.");
    }
  };

  useEffect(() => {
    if (Search_Odpt_No) {
      selectPartsData(searchOrderNo, searchPlanNo);
      SearchResultData(searchOrderNo, searchPlanNo);
    }
  }, [Search_Odpt_No]);

  useEffect(() => {
    if (orderData?.Customer_CD && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === orderData.Customer_CD
      );

      setSelectedCustomerAbb(selectedGroup ? selectedGroup.Customer_Name : "");
    }
    if (orderData?.Product_Grp_CD && WorkergData.length > 0) {
      const selectedGroup = WorkergData.find(
        (item) => item.WorkG_CD === orderData.Product_Grp_CD
      );
      setSelectedWorkGName(selectedGroup ? selectedGroup.WorkG_Name : "");
    }
    if (orderData?.Od_Ctl_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === orderData.Od_Ctl_Person_CD
      );
      setPersonName(selectedGroup ? selectedGroup.Worker_Name : "");
    }
    if (orderData?.Sales_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === orderData.Sales_Person_CD
      );
      setSelectedSalesPerson(selectedGroup ? selectedGroup.Worker_Abb : "");
    }
    if (orderData?.Specific_CD && SpecificData.length > 0) {
      const selectedGroup = SpecificData.find(
        (item) => item.Specific_CD === orderData.Specific_CD
      );

      setSpecificName(selectedGroup ? selectedGroup.Specific_Name : "");
    }
    if (orderData?.Od_Progress_CD && OdProgressData.length > 0) {
      const selectedGroup = OdProgressData.find(
        (item) => item.Od_Progress_CD === orderData.Od_Progress_CD
      );

      setOdProgressName(selectedGroup ? selectedGroup.Od_Progress_Name : "");
    }
    if (orderData?.Delivery_CD && DeliveryData.length > 0) {
      const selectedGroup = DeliveryData.find(
        (item) => item.Delivery_CD === orderData.Delivery_CD
      );

      setDeliveryName(selectedGroup ? selectedGroup.Delivery_Name : "");
    }
    if (orderData?.Target_CD && TargetData.length > 0) {
      const selectedGroup = TargetData.find(
        (item) => item.Target_CD === orderData.Target_CD
      );

      setTargetName(selectedGroup ? selectedGroup.Target_Name : "");
    }
    if (orderData?.Unit_CD && UnitData.length > 0) {
      const selectedGroup = UnitData.find(
        (item) => item.Unit_CD === orderData.Unit_CD
      );

      setUnitName(selectedGroup ? selectedGroup.Unit_Name : "");
    }
    if (orderData?.Unit_Price && PriceData.length > 0) {
      const selectedGroup = PriceData.find(
        (item) => item.Price_CD === orderData.Unit_Price
      );

      setPriceName(selectedGroup ? selectedGroup.Price_Name : "");
    }
    if (orderData?.Supply_CD && SupplyData.length > 0) {
      const selectedGroup = SupplyData.find(
        (item) => item.Supply_CD === orderData.Supply_CD
      );

      setSupplyName(selectedGroup ? selectedGroup.Supply_Name : "");
    }
    if (orderData?.Coating_CD && CoatingData.length > 0) {
      const selectedGroup = CoatingData.find(
        (item) => item.Coating_CD === orderData.Coating_CD
      );

      setCoatingName(selectedGroup ? selectedGroup.Coating_Name : "none");
    }
  }, [
    orderData?.Customer_CD,
    orderData?.Product_Grp_CD,
    orderData?.Od_Ctl_Person_CD,
    orderData?.Specific_CD,
    orderData?.Od_Progress_CD,
    orderData?.Delivery_CD,
    orderData?.Target_CD,
    DeliveryData,
    SpecificData,
    CustomerData,
    OdProgressData,
    TargetData,
  ]);

  useEffect(() => {
    if (planData?.Pl_Reg_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === planData.Pl_Reg_Person_CD
      );
      setPerson_Name(selectedGroup ? selectedGroup.Worker_Abb : "");
    }

    if (planData?.Parts_CD && PartsData.length > 0) {
      const selectedGroup = PartsData.find(
        (item) => item.Parts_CD === planData.Parts_CD
      );
      setPartName(selectedGroup ? selectedGroup.Parts_Name : "");
    }
    if (planData?.Pl_Progress_CD && plprogressData.length > 0) {
      const selectedGroup = plprogressData.find(
        (item) => item.Pl_Progress_CD === planData.Pl_Progress_CD
      );

      setProgressName(selectedGroup ? selectedGroup.Pl_Progress_Symbol : "");
    }
    if (planData?.Pl_Schedule_CD && ScheduleData.length > 0) {
      const selectedGroup = ScheduleData.find(
        (item) => item.Schedule_CD === planData.Pl_Schedule_CD
      );

      setSchedule_Name(selectedGroup ? selectedGroup.Schedule_Symbol : "");
    }
  }, [
    planData?.Pl_Progress_CD,
    planData?.Pl_Schedule_CD,
    ScheduleData,
    plprogressData,
  ]);

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col overflow-x-hidden flex-grow p-2 bg-white mt-2 rounded-md">
          <div className="grid grid-cols-1">
            <h1 className="text-2xl font-bold mt-3 text-center">Result Info</h1>
            <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

            <div>
              <div className="w-full overflow-x-auto">
                <div className="min-w-[1600px] w-full">
                  <div className="mx-5 py-4">
                    <div className="grid grid-cols-5 w-full items-center gap-2 mb-3">
                      <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">
                          Search_Order_No
                        </label>
                        <div className="w-3/5">
                          <input
                            id="Search_Order_No"
                            value={searchOrderNo || ""}
                            onChange={handleOrderInputChange}
                            type="text"
                            className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">
                          Search_Parts_No
                        </label>
                        <div className="w-3/5">
                          <select
                            id="Search_Parts_No"
                            value={searchPlanNo || ""}
                            onChange={(e) => handlePlanInputChange(e)}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                          >
                            <option value="">เลือกข้อมูล</option>
                            {Array.isArray(selectedPlanNo) &&
                            selectedPlanNo.length > 0 ? (
                              selectedPlanNo.map((item, index) => (
                                <option key={index} value={item.Parts_No}>
                                  {item.Parts_No}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">
                          Search_OdPtL_No
                        </label>
                        <div className="w-3/5">
                          <input
                            id="Search_Odpt_No"
                            value={Search_Odpt_No || ""}
                            onChange={(e) => handlePlanInputChange(e)}
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">
                          End_No
                        </label>
                        <div className="w-3/5">
                          <input
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">
                          Total(min)
                        </label>
                        <div className="w-3/5 flex justify-between items-center gap-2">
                          <input
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                          <label className="font-medium text-xs">~</label>
                          <input
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 w-full items-center gap-2 mb-3">
                      <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">
                          Target_ProcessL_Grp
                        </label>
                        <div className="w-3/5">
                          <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">
                          Target_Process_Date
                        </label>
                        <div className="w-3/5 flex justify-between items-center gap-2">
                          <input
                            type="text"
                            className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                          <label className="font-medium text-xs">~</label>
                          <input
                            type="text"
                            className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div></div>
                      <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">
                          Now_No
                        </label>
                        <div className="w-3/5">
                          <input
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">
                          Re_Tatal
                        </label>
                        <div className="w-3/5 flex justify-between items-center gap-2">
                          <input
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                          <label className="font-medium text-xs">~</label>
                          <input
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 items-center gap-2 mb-3">
                      <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">
                          Sort
                        </label>
                        <div className="w-3/5">
                          <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">
                          Mark_Days
                        </label>
                        <div className="w-3/5">
                          <input
                            type="text"
                            className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center gap-5">
                        <div className="flex gap-2 items-center">
                          <input type="checkbox" className="w-6 h-6" />
                          <label className="text-xs font-medium">
                            Color_Separate
                          </label>
                        </div>
                        <div className="flex gap-2 items-center">
                          <input type="checkbox" className="w-6 h-6" />
                          <label className="text-xs font-medium">
                            Info_View
                          </label>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">
                          Re_Process
                        </label>
                        <div className="w-3/5">
                          <input
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <label className="text-xs font-medium w-2/5 text-end">
                          Re_Total_Net
                        </label>
                        <div className="w-3/5">
                          <input
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

              <div className="w-full overflow-x-auto pr-10">
                <div className="min-w-[1600px] w-full">
                  <div className="grid grid-cols-12 mx-5 py-2">
                    <div className="flex items-start">
                      <label className="text-xs font-bold">
                        Order_Info_Search
                      </label>
                    </div>
                    <div className="col-span-11 grid grid-cols-1">
                      <div className="grid grid-cols-5 gap-2 items-center mb-3">
                        <div className="flex gap-2">
                          <label className="font-medium text-xs w-2/5">
                            Product_Grp
                          </label>
                          <div className="w-3/5 flex gap-1 justify-between">
                            <input
                              id="Product_Grp_CD"
                              value={orderData?.Product_Grp_CD || ""}
                              onChange={handleOrderInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                            <input
                              id="Product_Grp_Name"
                              value={selectedWorkGName || ""}
                              onChange={(event) => setWorkergData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 items-center">
                          <div className="flex gap-2 items-center justify-center">
                            <input type="checkbox" className="w-6 h-6" />
                            <label className="text-xs font-medium">
                              Od_Pending
                            </label>
                          </div>
                          <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5 text-end">
                              Ctl_Person
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Od_Ctl_Person"
                                value={personName || ""}
                                onChange={(event) => setWorkerData(event)}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5 text-end">
                              Sales_Person
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Sales_Person"
                                value={selectedSalesPersonAbb}
                                onChange={(event) => setWorkerData(event)}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <label className="text-xs font-medium w-2/5 text-end">
                            Specific
                          </label>
                          <div className="flex gap-2 w-3/5">
                            <select
                              id="Specific_CD"
                              value={orderData?.Specific_CD || ""}
                              onChange={handleOrderInputChange}
                              className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                            >
                              <option value={orderData?.Specific_CD || ""}>
                                {orderData?.Specific_CD || ""}
                              </option>
                              {Array.isArray(SpecificData) &&
                              SpecificData.length > 0 ? (
                                SpecificData.map((item, index) => (
                                  <option key={index} value={item.Specific_CD}>
                                    {item.Specific_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                            <input
                              id="Specific_Name"
                              value={SpecificName || ""}
                              onChange={(event) => setSpecificData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 gap-2 items-center mb-3">
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs">
                            Received
                          </label>
                          <div className="w-3/5">
                            <input
                              id="Pd_Received_Date"
                              value={formatDateTime(
                                orderData?.Pd_Received_Date || ""
                              )}
                              onChange={handleOrderInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-4 gap-2 items-center ">
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Customer
                            </label>
                            <div className="w-3/5 flex justify-between gap-2">
                              <input
                                id="Customer_CD"
                                value={orderData?.Customer_CD || ""}
                                onChange={handleOrderInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                              <input
                                id="Customer_CD_Name"
                                value={selectedCustomerAbb || ""}
                                onChange={(event) => setCustomerData(event)}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Qty
                            </label>
                            <div className="w-3/5 flex justify-between gap-2">
                              <input
                                id="Quantity"
                                value={orderData?.Quantity || ""}
                                onChange={handleOrderInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                              <input
                                id="Unit_CD_Name"
                                value={unitName || ""}
                                onChange={(event) => setUnitData(event)}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Price
                            </label>
                            <div className="w-3/5 flex justify-between gap-2">
                              <input
                                id="Price_Name"
                                value={PriceName || ""}
                                onChange={(event) => setPriceData(event)}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                              <input
                                id="Unit_Price"
                                value={orderData?.Unit_Price || ""}
                                onChange={handleOrderInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Supply
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Supply_CD_Name"
                                value={supplyName || ""}
                                onChange={(event) => setSupplyData(event)}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs text-end">
                            Progress
                          </label>
                          <div className="w-3/5 flex justify-between gap-2">
                            <select
                              id="Od_Progress_CD"
                              value={orderData?.Od_Progress_CD || ""}
                              onChange={handleOrderInputChange}
                              className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                            >
                              <option value={orderData?.Od_Progress_CD || ""}>
                                {orderData?.Od_Progress_CD || ""}
                              </option>
                              {Array.isArray(OdProgressData) &&
                              OdProgressData.length > 0 ? (
                                OdProgressData.map((item, index) => (
                                  <option
                                    key={index}
                                    value={item.Od_Progress_CD}
                                  >
                                    {item.Od_Progress_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                            <input
                              id="Od_Progress_Name"
                              value={OdProgressName || ""}
                              onChange={(event) => setOdProgressData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 gap-2 items-center mb-3">
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs">
                            Request
                          </label>
                          <div className="w-3/5">
                            <input
                              id="Request_Delivery"
                              value={formatDateTime(
                                orderData?.Request_Delivery || ""
                              )}
                              onChange={handleOrderInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-4 items-center gap-2">
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Product
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Product_Name"
                                value={orderData?.Product_Name || ""}
                                onChange={handleOrderInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Req3
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Request3_CD"
                                value={orderData?.Request3_CD || ""}
                                onChange={handleOrderInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Coating
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Coating_Name"
                                value={coatingName || "none"}
                                onChange={(event) => setCoatingData(event)}
                                type="text"
                                className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Detail
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Coating"
                                value={orderData?.Coating || ""}
                                onChange={handleOrderInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs text-end">
                            Delivery
                          </label>
                          <div className="w-3/5 flex justify-between gap-2">
                            <select
                              id="Delivery_CD"
                              value={orderData?.Delivery_CD || ""}
                              onChange={handleOrderInputChange}
                              className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                            >
                              <option value={orderData?.Delivery_CD || ""}>
                                {orderData?.Delivery_CD || ""}
                              </option>
                              {Array.isArray(DeliveryData) &&
                              DeliveryData.length > 0 ? (
                                DeliveryData.map((item, index) => (
                                  <option key={index} value={item.Delivery_CD}>
                                    {item.Delivery_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                            <input
                              id="Delivery_Name"
                              value={DeliveryName || ""}
                              onChange={(event) => setDeliveryData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 gap-2 items-center mb-3">
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs ">
                            Product
                          </label>
                          <div className="w-3/5">
                            <input
                              id="Product_Delivery"
                              value={formatDateTime(
                                orderData?.Product_Delivery || ""
                              )}
                              onChange={handleOrderInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 items-center gap-2">
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Size
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Product_Size"
                                value={orderData?.Product_Size || ""}
                                onChange={handleOrderInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Mate1
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Material1"
                                value={orderData?.Material1 || ""}
                                onChange={handleOrderInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              P_Docu
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Product_Docu"
                                value={orderData?.Product_Docu || ""}
                                onChange={handleOrderInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs text-end">
                            Target
                          </label>
                          <div className="w-3/5 flex justify-between gap-2">
                            <select
                              id="Target_CD"
                              value={orderData?.Target_CD || ""}
                              onChange={handleOrderInputChange}
                              className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                            >
                              <option value={orderData?.Target_CD || ""}>
                                {orderData?.Target_CD || ""}
                              </option>
                              {Array.isArray(TargetData) &&
                              TargetData.length > 0 ? (
                                TargetData.map((item, index) => (
                                  <option key={index} value={item.Target_CD}>
                                    {item.Target_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                            <input
                              id="Target_Name"
                              value={targetName || ""}
                              onChange={(event) => setTargetData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 gap-2 items-center mb-3">
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs ">
                            Confirm
                          </label>
                          <div className="w-3/5">
                            <input
                              id="Confirm_Delivery"
                              value={formatDateTime(
                                orderData?.Confirm_Delivery || ""
                              )}
                              onChange={handleOrderInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2 items-center">
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Draw
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Product_Draw"
                                value={orderData?.Product_Draw || ""}
                                onChange={handleOrderInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Mate2
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Material2"
                                value={orderData?.Material2 || ""}
                                onChange={handleOrderInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              S_Docu
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Supple_Docu"
                                value={orderData?.Supple_Docu || ""}
                                onChange={handleOrderInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs text-end">
                            Pd_Complete
                          </label>
                          <div className="w-3/5">
                            <input
                              id="Pd_Complete_Date"
                              value={orderData?.Pd_Complete_Date || ""}
                              onChange={handleOrderInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

              <div className="w-full mt-5 overflow-x-auto pr-10">
                <div className="min-w-[1800px] w-full">
                  <div className="grid grid-cols-12 py-2">
                    <div className="flex items-start ml-7">
                      <label className="text-xs font-bold">Parts_Info</label>
                    </div>
                    <div className="col-span-11 grid grid-cols-1 -ml-1">
                      <div className="grid grid-cols-5 items-center gap-2 mb-3">
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs">
                            Parts_No
                          </label>
                          <div className="w-40 -ml-4">
                            <input
                              id="Parts_No"
                              value={planData?.Parts_No || ""}
                              onChange={handlePlanInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-2">
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Order_Parts_No
                            </label>
                            <div className="w-3/5">
                              <input
                                id="OdPt_No"
                                value={planData?.OdPt_No || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-center items-center gap-2">
                            <input
                              id="Pt_Pending"
                              value={planData?.Pt_Pending || ""}
                              onChange={handlePlanInputChange}
                              type="checkbox"
                              className="w-6 h-6"
                            />
                            <label className="w-2/5 font-medium text-xs">
                              Pt_Pending
                            </label>
                          </div>
                          <div className="flex justify-between items-center gap-2">
                            <label className="w-2/5 font-medium text-xs text-end">
                              Pl_Req_Person
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Pl_Reg_Person_Name"
                                value={Person_Name || ""}
                                onChange={(event) => setWorkerData(event)}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <label className="w-2/5 font-medium text-xs text-end">
                            Pl_Ed_Rev
                          </label>
                          <div className="w-3/5">
                            <input
                              id="Pl_Ed_Rev_Day"
                              value={planData?.Pl_Ed_Rev_Day || ""}
                              onChange={handlePlanInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 items-center gap-2 mb-3">
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs">
                            Pt_Name
                          </label>
                          <div className="w-40 -ml-4">
                            <input
                              id="Parts_Name"
                              value={PartName || ""}
                              onChange={(event) => selectPartsData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="col-span-3 flex justify-between items-center gap-2">
                          <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium w-2/5">
                              Pt_Mate
                            </label>
                            <div className="w-4/5">
                              <input
                                id="Pt_Material"
                                value={planData?.Pt_Material || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 items-center">
                            <label className="text-xs font-medium ml-5">
                              Pt_Qty
                            </label>
                            <div className="w-24">
                              <input
                                id="Pt_Qty"
                                value={planData?.Pt_Qty || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <div className="w-24">
                              <input
                                id="Pt_Unit"
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-center gap-2 items-center w-2/12">
                            <input
                              id="Pt_Split"
                              value={planData?.Pt_Split || ""}
                              onChange={handlePlanInputChange}
                              type="checkbox"
                              className="h-6 w-6"
                            />
                            <label className="text-xs font-medium">Split</label>
                          </div>
                          <div className="flex justify-between gap-1 items-center w-2/12">
                            <label className="text-xs font-medium w-1/5">
                              Spare
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Pt_Spare_Qty"
                                value={planData?.Pt_Spare_Qty || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between gap-2 items-center w-2/12">
                            <label className="text-xs font-medium w-1/5">
                              NG
                            </label>
                            <div className="w-4/5">
                              <input
                                id="Pt_NG_Qty"
                                value={planData?.Pt_NG_Qty || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between gap-2 items-center w-5/12">
                            <label className="text-xs font-medium w-4/12">
                              Connect_Od_No
                            </label>
                            <div className="w-7/12">
                              <input
                                id="Connect_Od_No"
                                value={planData?.Connect_Od_No || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <label className="text-xs font-medium w-2/5 text-end">
                            Progress
                          </label>
                          <div className="flex gap-2 w-3/5">
                            <select
                              id="Pl_Progress_CD"
                              value={planData?.Pl_Progress_CD || ""}
                              onChange={handlePlanInputChange}
                              className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff00] w-full"
                            >
                              <option value={planData?.Pl_Progress_CD || ""}>
                                {planData?.Pl_Progress_CD || ""}
                              </option>
                              {Array.isArray(plprogressData) &&
                              plprogressData.length > 0 ? (
                                plprogressData.map((item, index) => (
                                  <option
                                    key={index}
                                    value={item.Pl_Progress_CD}
                                  >
                                    {item.Pl_Progress_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                            <input
                              id="Pl_Progress_Name"
                              value={ProgressName || ""}
                              onChange={(event) => setPlProgressData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 items-center gap-2 mb-3">
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs">
                            Parts_Deli
                          </label>
                          <div className="w-40 -ml-4">
                            <input
                              id="Pt_Delivery"
                              value={formatDateTime(
                                planData?.Pt_Delivery || ""
                              )}
                              onChange={handlePlanInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-2 items-center gap-2">
                          <div className="flex justify-start items-center gap-2 ml-32">
                            <label className="font-medium text-xs w-2/12">
                              Pt_Note
                            </label>
                            <div className="w-40">
                              <input
                                id="Pt_Instructions"
                                value={planData?.Pt_Instructions || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex justify-start items-center gap-2">
                            <label className="font-medium text-xs w-auto">
                              Connect_Pt_No
                            </label>
                            <div className="w-24">
                              <input
                                id="Connect_Pt_No"
                                value={planData?.Connect_Pt_No || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <div className="w-24">
                              <input
                                id="Connect_Pt_Name"
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <label className="text-xs font-medium w-2/5 text-end items-center mt-1">
                            Schedule
                          </label>
                          <div className="flex gap-2 w-3/5">
                            <select
                              id="Pl_Schedule_CD"
                              value={planData?.Pl_Schedule_CD || ""}
                              onChange={handlePlanInputChange}
                              className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                            >
                              <option value={planData?.Pl_Schedule_CD || ""}>
                                {planData?.Pl_Schedule_CD || ""}
                              </option>
                              {Array.isArray(ScheduleData) &&
                              ScheduleData.length > 0 ? (
                                ScheduleData.map((item, index) => (
                                  <option key={index} value={item.Schedule_CD}>
                                    {item.Schedule_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                            <input
                              id="Pl_Schedule_Name"
                              value={Schedule_Name || ""}
                              onChange={(event) => setScheduleData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 items-center gap-2 mb-3">
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs">
                            Plan_Reg
                          </label>
                          <div className="w-40 -ml-4">
                            <input
                              id="Pl_Reg_Date"
                              value={formatDateTime(
                                planData?.Pl_Reg_Date || ""
                              )}
                              onChange={handlePlanInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-2 items-center gap-2">
                          <div className="flex gap-2 items-center justify-start ml-32">
                            <label className="w-2/12 font-medium text-xs">
                              Pt_Info
                            </label>
                            <div className="w-40">
                              <input
                                id="Pt_Information"
                                value={planData?.Pt_Information || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 items-center justify-start">
                            <label className="text-xs font-medium w-auto text-start">
                              Connect_Pr_No
                            </label>
                            <div className="w-24">
                              <input
                                id="Connect_Pr_No"
                                value={planData?.Connect_Pr_No || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                            <div className="w-24">
                              <input
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <label className="w-2/5 font-medium text-xs text-end">
                            Pt_Complete
                          </label>
                          <div className="w-3/5">
                            <input
                              id="Pt_Complete"
                              value={planData?.Pt_Complete || ""}
                              onChange={handlePlanInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 items-center gap-2 mb-3">
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs">
                            Plan_Upd
                          </label>
                          <div className="w-40 -ml-4">
                            <input
                              id="Pl_Upd_Date"
                              value={formatDateTime(
                                planData?.Pl_Upd_Date || ""
                              )}
                              onChange={handlePlanInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="col-span-4 flex justify-between items-center gap-2">
                          <label className="font-medium text-xs">Info</label>
                          {inputs4.map((id) => (
                            <div key={id} className="flex gap-1 items-center">
                              <label className="font-medium text-xs">
                                {id}
                              </label>
                              <div className="flex gap-2 pr-5">
                                <input
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                                <input
                                  id={`Info_Chk${id}`}
                                  value={planData?.[`Info_Chk${id}`] || ""}
                                  onChange={handlePlanInputChange}
                                  type="checkbox"
                                  className="h-6 w-6"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-5 items-center gap-2 mb-3">
                        <div className="flex gap-2">
                          <label className="w-2/5 font-medium text-xs">
                            Order_No
                          </label>
                          <div className="w-40 -ml-4">
                            <input
                              id="Order_No"
                              value={ResultData?.Order_No || ""}
                              onChange={handleResultInputChange}
                              type="text"
                              className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="col-span-4 flex items-center gap-2">
                          <div className="flex gap-2 items-center w-2/12">
                            <label className="font-medium text-xs">
                              Parts_No
                            </label>
                            <div className="w-3/5">
                              <input
                                id="Parts_No"
                                value={ResultData?.Parts_No || ""}
                                onChange={handleResultInputChange}
                                type="text"
                                className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 items-center w-2/12">
                            <label className="font-medium text-xs">
                              Target_No
                            </label>
                            <div className="w-3/5">
                              <input
                                type="text"
                                className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 items-center w-2/12">
                            <label className="font-medium text-xs">
                              MV_Range
                            </label>
                            <div className="w-3/5">
                              <select
                                id="Move_Range"
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                                defaultValue="Plan_Exclude"
                              >
                                <option value="Plan_Exclude">
                                  Plan_Exclude
                                </option>
                                <option value="Plan_Include">
                                  Plan_Include
                                </option>
                                <option value="Plan_Exclude">
                                  Plan_Exclude
                                </option>
                                <option value="ResultDay_Only">
                                  ResultDay_Only
                                </option>
                                <option value="ResultDay_Except">
                                  ResultDay_Except
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="flex gap-2 items-center w-2/12">
                            <label className="font-medium text-xs">
                              Date_Rev_Days
                            </label>
                            <div className="w-2/5">
                              <input
                                type="text"
                                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 items-center pr-3">
                            <label className="font-medium text-xs">
                              Auto_Finish
                            </label>
                            <input type="checkbox" className="w-6 h-6" />
                          </div>
                          <div className="flex gap-2 items-center pr-3">
                            <label className="font-medium text-xs">
                              Plan_Edit
                            </label>
                            <input type="checkbox" className="w-6 h-6" />
                          </div>
                          <div className="flex gap-2 items-center">
                            <label className="font-medium text-xs">Admin</label>
                            <input type="checkbox" className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

              <div className="w-full overflow-x-auto">
                <div className="min-w-[1600px] w-full">
                  <div className="grid grid-cols-12 mx-5 pb-7">
                    <div></div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 text-center">
                      {inputs.map((id) => (
                        <label key={id} className="font-medium text-xs">
                          No{id}
                        </label>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">
                        Process_Name
                      </label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs.map((id) => (
                        <div key={id}>
                          <select
                            id={`PPC${id}`}
                            value={planData?.[`PPC${id}`] || ""}
                            onChange={handlePlanInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                          >
                            <option value={planData?.[`PPC${id}`] || ""}>
                              {planData?.[`PPC${id}`] || ""}
                            </option>
                          </select>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">Plan_M_Time</label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs.map((id) => (
                        <div className="flex gap-2 items-center" key={id}>
                          <input
                            id={`PMT${id}`}
                            value={
                              planData?.[`PMT${id}`] !== undefined &&
                              planData?.[`PMT${id}`] !== null
                                ? planData?.[`PMT${id}`]
                                : ""
                            }
                            onChange={handlePlanInputChange}
                            type="text"
                            className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                          <label className="font-medium text-xs">min/L</label>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">Plan_P_Time</label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs.map((id) => (
                        <div className="flex gap-2 items-center" key={id}>
                          <input
                            id={`PPT${id}`}
                            value={
                              planData?.[`PPT${id}`] !== undefined &&
                              planData?.[`PPT${id}`] !== null
                                ? planData?.[`PPT${id}`]
                                : ""
                            }
                            onChange={handlePlanInputChange}
                            type="text"
                            className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                          <label className="font-medium text-xs">min/L</label>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">
                        Plan_Process_Date
                      </label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs.map((id) => (
                        <div key={id}>
                          <input
                            id={`PPD${id}`}
                            value={formatDateTime(planData?.[`PPD${id}`] || "")}
                            onChange={handlePlanInputChange}
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">Result_Date</label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs.map((id) => (
                        <div key={id}>
                          <input
                            id={`RPD${id}`}
                            value={formatDateTime(
                              ResultData?.[`RPD${id}`] || ""
                            )}
                            onChange={handleResultInputChange}
                            type="text"
                            className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">
                        Rs_M(min/lot)
                      </label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs.map((id) => (
                        <div key={id}>
                          <input
                            id={`RMT${id}`}
                            value={
                              planData?.[`RMT${id}`] !== undefined &&
                              planData?.[`RMT${id}`] !== null
                                ? planData?.[`RMT${id}`]
                                : ""
                            }
                            onChange={handleResultInputChange}
                            type="text"
                            className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">
                        Rs_P(min/lot)
                      </label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs.map((id) => (
                        <div key={id}>
                          <input
                            id={`RPT${id}`}
                            value={
                              planData?.[`RPT${id}`] !== undefined &&
                              planData?.[`RPT${id}`] !== null
                                ? planData?.[`RPT${id}`]
                                : ""
                            }
                            onChange={handleResultInputChange}
                            type="text"
                            className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">Result_Qty</label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs.map((id) => (
                        <div key={id}>
                          <input
                            id={`RPN${id}`}
                            value={
                              planData?.[`RPN${id}`] !== undefined &&
                              planData?.[`RPN${id}`] !== null
                                ? planData?.[`RPN${id}`]
                                : ""
                            }
                            onChange={handleResultInputChange}
                            type="text"
                            className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

              <div className="w-full overflow-x-auto">
                <div className="min-w-[1600px] w-full">
                  <div className="grid grid-cols-12 mx-5 pb-7">
                    <div></div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 text-center">
                      {inputs2.map((id) => (
                        <label key={id} className="font-medium text-xs">
                          No{id}
                        </label>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">
                        Process_Name
                      </label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs2.map((id) => (
                        <div key={id}>
                          <select
                            id={`PPC${id}`}
                            value={planData?.[`PPC${id}`] || ""}
                            onChange={handlePlanInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                          >
                            <option value={planData?.[`PPC${id}`] || ""}>
                              {planData?.[`PPC${id}`] || ""}
                            </option>
                          </select>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">Plan_M_Time</label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs2.map((id) => (
                        <div className="flex gap-2 items-center" key={id}>
                          <input
                            id={`PMT${id}`}
                            value={
                              planData?.[`PMT${id}`] !== undefined &&
                              planData?.[`PMT${id}`] !== null
                                ? planData?.[`PMT${id}`]
                                : ""
                            }
                            onChange={handlePlanInputChange}
                            type="text"
                            className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                          <label className="font-medium text-xs">min/L</label>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">Plan_P_Time</label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs2.map((id) => (
                        <div className="flex gap-2 items-center" key={id}>
                          <input
                            id={`PPT${id}`}
                            value={
                              planData?.[`PPT${id}`] !== undefined &&
                              planData?.[`PPT${id}`] !== null
                                ? planData?.[`PPT${id}`]
                                : ""
                            }
                            onChange={handlePlanInputChange}
                            type="text"
                            className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                          <label className="font-medium text-xs">min/L</label>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">
                        Plan_Process_Date
                      </label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs2.map((id) => (
                        <div key={id}>
                          <input
                            id={`PPD${id}`}
                            value={formatDateTime(planData?.[`PPD${id}`] || "")}
                            onChange={handlePlanInputChange}
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">Result_Date</label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs2.map((id) => (
                        <div key={id}>
                          <input
                            id={`RPD${id}`}
                            value={formatDateTime(
                              ResultData?.[`RPD${id}`] || ""
                            )}
                            onChange={handleResultInputChange}
                            type="text"
                            className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">
                        Rs_M(min/lot)
                      </label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs2.map((id) => (
                        <div key={id}>
                          <input
                            id={`RMT${id}`}
                            value={
                              planData?.[`RMT${id}`] !== undefined &&
                              planData?.[`RMT${id}`] !== null
                                ? planData?.[`RMT${id}`]
                                : ""
                            }
                            onChange={handleResultInputChange}
                            type="text"
                            className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">
                        Rs_P(min/lot)
                      </label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs2.map((id) => (
                        <div key={id}>
                          <input
                            id={`RPT${id}`}
                            value={
                              planData?.[`RPT${id}`] !== undefined &&
                              planData?.[`RPT${id}`] !== null
                                ? planData?.[`RPT${id}`]
                                : ""
                            }
                            onChange={handleResultInputChange}
                            type="text"
                            className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">Result_Qty</label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs2.map((id) => (
                        <div key={id}>
                          <input
                            id={`RPN${id}`}
                            value={
                              planData?.[`RPN${id}`] !== undefined &&
                              planData?.[`RPN${id}`] !== null
                                ? planData?.[`RPN${id}`]
                                : ""
                            }
                            onChange={handleResultInputChange}
                            type="text"
                            className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

              <div className="w-full overflow-x-auto">
                <div className="min-w-[1600px] w-full">
                  <div className="grid grid-cols-12 mx-5 pb-7">
                    <div></div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 text-center">
                      {inputs3.map((id) => (
                        <label key={id} className="font-medium text-xs">
                          No{id}
                        </label>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">
                        Process_Name
                      </label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs3.map((id) => (
                        <div key={id}>
                          <select
                            id={`PPC${id}`}
                            value={planData?.[`PPC${id}`] || ""}
                            onChange={handlePlanInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                          >
                            <option value={planData?.[`PPC${id}`] || ""}>
                              {planData?.[`PPC${id}`] || ""}
                            </option>
                          </select>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">Plan_M_Time</label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs3.map((id) => (
                        <div className="flex gap-2 items-center" key={id}>
                          <input
                            id={`PMT${id}`}
                            value={
                              planData?.[`PMT${id}`] !== undefined &&
                              planData?.[`PMT${id}`] !== null
                                ? planData?.[`PMT${id}`]
                                : ""
                            }
                            onChange={handlePlanInputChange}
                            type="text"
                            className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                          <label className="font-medium text-xs">min/L</label>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">Plan_P_Time</label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs3.map((id) => (
                        <div className="flex gap-2 items-center" key={id}>
                          <input
                            id={`PPT${id}`}
                            value={
                              planData?.[`PPT${id}`] !== undefined &&
                              planData?.[`PPT${id}`] !== null
                                ? planData?.[`PPT${id}`]
                                : ""
                            }
                            onChange={handlePlanInputChange}
                            type="text"
                            className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                          <label className="font-medium text-xs">min/L</label>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">
                        Plan_Process_Date
                      </label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs3.map((id) => (
                        <div key={id}>
                          <input
                            id={`PPD${id}`}
                            value={formatDateTime(planData?.[`PPD${id}`] || "")}
                            onChange={handlePlanInputChange}
                            type="text"
                            className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">Result_Date</label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs3.map((id) => (
                        <div key={id}>
                          <input
                            id={`RPD${id}`}
                            value={formatDateTime(
                              ResultData?.[`RPD${id}`] || ""
                            )}
                            onChange={handleResultInputChange}
                            type="text"
                            className="bg-[#fecc99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">
                        Rs_M(min/lot)
                      </label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs3.map((id) => (
                        <div key={id}>
                          <input
                            id={`RMT${id}`}
                            value={
                              planData?.[`RMT${id}`] !== undefined &&
                              planData?.[`RMT${id}`] !== null
                                ? planData?.[`RMT${id}`]
                                : ""
                            }
                            onChange={handleResultInputChange}
                            type="text"
                            className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">
                        Rs_P(min/lot)
                      </label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs3.map((id) => (
                        <div key={id}>
                          <input
                            id={`RPT${id}`}
                            value={
                              planData?.[`RPT${id}`] !== undefined &&
                              planData?.[`RPT${id}`] !== null
                                ? planData?.[`RPT${id}`]
                                : ""
                            }
                            onChange={handleResultInputChange}
                            type="text"
                            className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="font-medium text-xs">Result_Qty</label>
                    </div>
                    <div className="col-span-11 grid grid-cols-12 gap-2 mt-3">
                      {inputs3.map((id) => (
                        <div key={id}>
                          <input
                            id={`RPN${id}`}
                            value={
                              planData?.[`RPN${id}`] !== undefined &&
                              planData?.[`RPN${id}`] !== null
                                ? planData?.[`RPN${id}`]
                                : ""
                            }
                            onChange={handleResultInputChange}
                            type="text"
                            className="bg-[#99ccff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

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
                    <button
                      onClick={handleF4Click}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
                    >
                      PDS <br />
                      Input(F4)
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
                        <IoIosArrowRoundForward className="font-medium text-2xl" />
                        CSV
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
    </div>
  );
}
