import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useOrder } from "../hooks/use-order";
import { usePlan } from "../hooks/use-plan";
import { useCost } from "../hooks/use-cost";
import Swal from "sweetalert2";
const CostInfo = () => {
  const [isOdPtNoHidden, setIsOdPtNoHidden] = useState(false);
  const [searchOrderNo, setSearchOrderNo] = useState("");
  const [searchPlanNo, setSearchPlanNo] = useState("");
  const [searchCostNo, setSearchCostNo] = useState("");
  const [Search_OdPt_No, setSearch_OdPt_No] = useState("");
  const [Search_OdPtCs_No, setSearch_OdPtCs_No] = useState("");
  const [Process_Name, setProcess_Name] = useState([]);
  const [Person_Name, setPerson_Name] = useState("");
  const [Resource_Name, setResource_Name] = useState("");
  const [Cs_Progress_Abb_Name, setCs_Progress_Abb_Name] = useState("");

  const {
    planData,
    setPlanData,
    searchPartsData,
    selectedPlanNo,
    selectPartsData,
    processData,
  } = usePlan();
  const { WorkerData, setOrderData, searchOrderData, setWorkerData } =
    useOrder();
  const {
    SearchCostData,
    CostData,
    setCostData,
    CostNoData,
    setCostNo,
    ResourceData,
    setResourceData,
    CsProgressData,
    SearchCostNo,
    editCost,
    createCost,
    PlanppcData,
    setPlanppcData,
    ProcessCData,
    setProcessCData,
    setCsProgressData,
  } = useCost();

  const headers = [
    "Cost_No",
    "Process_No",
    "Process_Name",
    "Machine_CD",
    "Machine_Name",
    "Machine_Time",
    "Worker_CD",
    "Worker_Name",
    "Person_Time",
    "Process_Date",
    "Process_Qty",
    "Cost_Progress_CD",
    "Cost_Progress",
    "Complete_Date",
    "Complete_Qty",
    "Cost_Remark",
    "Register_Date",
    "Modify_Date",
  ];

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

  const handleF3Click = async () => {
    const isDataFetched = await SearchCostData(searchOrderNo, searchPlanNo);

    // เช็คว่า Search Part No. เป็นค่าว่าง
    if (searchPlanNo === "") {
      Swal.fire({
        title: "กรุณากรอกข้อมูล Search Part No.",
        icon: "warning",
        confirmButtonText: "ตกลง",
      });
      return; // ออกจากฟังก์ชัน
    }

    // หากดึงข้อมูลสำเร็จ
    if (isDataFetched) {
      // ตรวจสอบว่า CostNoData เป็นอาร์เรย์ที่มีข้อมูล
      const costList =
        Array.isArray(CostNoData) && CostNoData.length > 0
          ? CostNoData.map((item) => item.Cost_No)
          : [];
      let newCostNo = "001";

      if (costList.length > 0) {
        const maxCostNo = costList.reduce((max, current) => {
          const numericValue = parseInt(current, 10);
          return !isNaN(numericValue) && numericValue > max
            ? numericValue
            : max;
        }, 0);
        newCostNo = String(maxCostNo + 1).padStart(3, "0"); // เพิ่ม 1 และเติม 0 ด้านหน้า
      }

      // อัปเดต CostData
      setCostData((prevState) => ({
        ...prevState,
        Order_No: searchOrderNo,
        Parts_No: searchPlanNo,
        OdPt_No: searchOrderNo + searchPlanNo,
        Cost_No: newCostNo,
        CPD: new Date().toISOString().split("T")[0],
      }));

      setSearch_OdPt_No(`${searchOrderNo || ""}${searchPlanNo || ""}`);
      setIsOdPtNoHidden(true);
    } else {
      Swal.fire({
        title: "ไม่พบข้อมูล Cost",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
    }
  };

  const handleF9Click = async () => {
    try {
      const costExists = await SearchCostNo(
        searchOrderNo,
        searchPlanNo,
        searchCostNo
      );

      if (costExists) {
        const result = await Swal.fire({
          title: "ต้องการแก้ไขข้อมูลหรือไม่",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "ใช่",
          cancelButtonText: "ไม่ใช่",
        });

        if (result.isConfirmed) {
          const OdPtCs_No = document.getElementById("OdPtCs_No").value;

          await editCost(OdPtCs_No);
        }
      } else {
        const result = await Swal.fire({
          title: "ต้องการบันทึกข้อมูลหรือไม่",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "ใช่",
          cancelButtonText: "ไม่ใช่",
        });

        if (result.isConfirmed) {
          await createCost();
        }
      }
    } catch (error) {
      console.error("Error in handleF9Click:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาติดต่อผู้ดูแลระบบ",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
    }
  };
  const rows = Array.from({ length: 10 }, (_, rowIndex) => (
    <tr
      key={rowIndex}
      className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
    >
      {headers.map((_, colIndex) => (
        <td key={colIndex} className="px-4 py-2 border border-black text-sm">
          <p type="text" className="w-28 h-7 p-1" />
        </td>
      ))}
    </tr>
  ));

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
    }
  };

  const handleCostInputChange = async (event) => {
    const { id, value, type, checked } = event.target;

    setCostData((prevPlanData) => ({
      ...prevPlanData,
      [id]: type === "checkbox" ? checked : value === "" ? null : value,
    }));

    if (id === "Search_Cost_No") {
      setSearchCostNo(value);
      setSearch_OdPt_No(`${searchOrderNo || ""}${searchPlanNo || ""}`);
      setSearch_OdPtCs_No(
        `${searchOrderNo || ""}${searchPlanNo || ""}${value}`
      );
    }
  };

  useEffect(() => {
    if (searchPlanNo) {
      SearchCostData(searchOrderNo, searchPlanNo);
      selectPartsData(searchOrderNo, searchPlanNo);
    }
    if (searchCostNo) {
      SearchCostNo(searchOrderNo, searchPlanNo, searchCostNo);
    }
  }, [searchPlanNo, searchCostNo]);

  useEffect(() => {
    if (CostData?.CPC && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === CostData?.CPC
      );
      setPerson_Name(selectedGroup ? selectedGroup.Worker_Abb : "");
    }

    if (CostData?.CMC && ResourceData.length > 0) {
      const selectedGroup = ResourceData.find(
        (item) => item.Resource_CD === CostData?.CMC
      );
      setResource_Name(selectedGroup ? selectedGroup.Resource_Symbol : "");
    }
    if (CostData?.Cs_Progress_CD && CsProgressData.length > 0) {
      const selectedGroup = CsProgressData.find(
        (item) => item.Cs_Progress_CD === CostData?.Cs_Progress_CD
      );
      setCs_Progress_Abb_Name(
        selectedGroup ? selectedGroup.Cs_Progress_Abb : ""
      );
    }

    if (
      CostData?.Process_No &&
      Array.isArray(ProcessCData) &&
      ProcessCData.length > 0
    ) {
      const processKey = planData?.[`PPC${CostData.Process_No}`];
      const selectedGroup = ProcessCData.find(
        (item) => item.Process_CD === processKey
      );
      setProcess_Name(selectedGroup ? selectedGroup.Process_Abb : "");
    }
  }, [
    CostData?.Cs_Progress_CD,
    CostData?.CPC,
    WorkerData,
    CostData?.CMC,
    ResourceData,
    CostData?.Process_No,
    processData,
    CsProgressData,
  ]);



  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col overflow-x-auto flex-grow p-2 bg-white mt-2 rounded-md">
          <h1 className="text-2xl font-bold mt-3 text-center">Cost Info</h1>
          <hr className="my-6 h-0.5 border-t-0 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 mb-2">
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-bold">Search Order No.</label>
              <input
                id="Search_Order_No"
                value={searchOrderNo || ""}
                onChange={handleOrderInputChange}
                type="text"
                className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full xl:w-46"
              />
            </div>

            <div className="flex flex-col space-y-1 relative">
              <label className="text-xs font-bold">Search Part No.</label>
              <div className="relative w-full">
                <select
                  id="Search_Parts_No"
                  value={searchPlanNo || ""}
                  onChange={(e) => handlePlanInputChange(e)}
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
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

            <div className="flex flex-col space-y-1 relative">
              <label className="text-xs font-bold">Search Cost No.</label>
              <div className="relative w-full">
                <select
                  id="Search_Cost_No"
                  value={searchCostNo || ""}
                  onChange={(e) => handleCostInputChange(e)}
                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                >
                  <option value="">เลือกข้อมูล</option>
                  {Array.isArray(CostNoData) && CostNoData.length > 0 ? (
                    CostNoData.map((item, index) => (
                      <option key={index} value={item.Cost_No}>
                        {item.Cost_No}
                      </option>
                    ))
                  ) : (
                    <option value="">ไม่มีข้อมูล</option>
                  )}
                </select>
              </div>
            </div>

            <div className="flex items-center pl-3 w-full pt-4">
              <input type="checkbox" id="checkbox1" className="mr-2" />
              <label htmlFor="checkbox1" className="text-sm">
                Process List View
              </label>
              <input type="checkbox" id="Auto_Year_Change"     className="mr-2 ml-3" />
              <label htmlFor="Auto_Year_Change" className="text-sm">
                Auto Year Change
              </label>
            </div>

            <div className="flex flex-col space-y-1 relative pr-2">
              <label className="text-xs font-bold">Search_OdPt_No</label>
              <div className="relative w-full">
                <input
                  disabled
                  id="Search_OdPt_No"
                  value={Search_OdPt_No}
                  onChange={(e) => handleCostInputChange(e)}
                  type="text"
                  className="border-gray-500 border-solid border-2 rounded-md bg-white w-full h-8"
                ></input>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
            <div className="flex items-center space-x-2">
              <label className="text-xs font-bold w-[70px]">Order No.</label>
              <input
                disabled
                id="Order_No"
                value={CostData?.Order_No || ""}
                onChange={handleCostInputChange}
                type="text"
                className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
              />
            </div>

            <div className="flex flex-col space-y-1 ml-auto pr-2">
              <div className="flex items-center space-x-2 lg:ml-auto">
                <label className="text-xs font-bold w-full xl:w-28">
                  Search OdPtCs No.
                </label>
                <input
                  disabled
                  id="Search_OdPtCs_No"
                  value={Search_OdPtCs_No}
                  onChange={(e) => handleCostInputChange(e)}
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-80"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
            <div className="flex items-center space-x-2">
              <label className="text-xs font-bold w-[70px]">Parts No.</label>
              <input
                disabled
                id="Parts_No"
                value={CostData?.Parts_No || ""}
                onChange={handleCostInputChange}
                type="text"
                className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
            <div className="flex items-center space-x-2">
              <input
                disabled
                id="OdPt_No"
                value={CostData?.OdPt_No || ""}
                onChange={handleCostInputChange}
                type="hidden"
                className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
            <div className="flex items-center space-x-2">
              <label className="text-xs font-bold w-[70px]">Cost No.</label>
              <input
                disabled
                id="Cost_No"
                value={CostData?.Cost_No || ""}
                onChange={handleCostInputChange}
                type="text"
                className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
            <div className="flex items-center space-x-2">
              <input
                disabled
                id="OdPtCs_No"
                value={CostData?.OdPtCs_No || ""}
                onChange={handleCostInputChange}
                type="hidden"
                className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <label className="text-xs font-bold w-[105px] lg:w-[70px]">
                Process No.
              </label>
              <div className="flex items-center gap-2">
                <div className="relative w-full sm:w-20 lg:w-20 xl:w-20">
                  <select
                    id="Process_No"
                    value={CostData?.Process_No || ""}
                    onChange={handleCostInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                  >
                    <option value={CostData?.Process_No}>
                      {CostData?.Process_No}
                    </option>
                    {Array.isArray(PlanppcData) && PlanppcData.length > 0 ? (
                      PlanppcData.sort((a, b) => a.Process_No - b.Process_No) // เรียงลำดับจากน้อยไปหามาก
                        .map((item, index) => (
                          <option key={index} value={item.Process_No}>
                            {item.Process_No}
                          </option>
                        ))
                    ) : (
                      <option value="">ไม่มีข้อมูล</option>
                    )}
                  </select>
                </div>
                <input
                  id="Process_Name"
                  value={Process_Name || ""}
                  onChange={(event) => setProcessCData(event)}
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-full sm:w-[90px] lg:w-[95px] xl:w-[150px]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1">
              <div className="mt-3 lg:mt-20 lg:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2">
                <div className="flex items-center space-x-2">
                  <label className="text-xs font-bold whitespace-nowrap">
                    Machine CD(CMC)
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="relative w-full xl:w-28">
                      <select
                        id="CMC"
                        value={CostData?.CMC || ""}
                        onChange={handleCostInputChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffcc] w-full h-8"
                      >
                        <option value={CostData?.CMC || ""}>
                          {CostData?.CMC || ""}
                        </option>
                        {Array.isArray(ResourceData) &&
                        ResourceData.length > 0 ? (
                          ResourceData.map((item, index) => (
                            <option key={index} value={item.Resource_CD}>
                              {item.Resource_CD}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                    </div>
                    <input
                      id="Resource_Name"
                      value={Resource_Name || ""}
                      onChange={(event) => setResourceData(event)}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-full xl:w-[110px]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-8">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Machine Time
                  </label>
                  <input
                    id="CMT"
                    value={CostData?.CMT ?? ""}
                    onChange={handleCostInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="lg:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2">
                <div className="flex items-center space-x-5">
                  <label className="text-xs font-bold whitespace-nowrap">
                    Worker CD(CPC)
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="relative w-full xl:w-28">
                      <select
                        id="CPC"
                        value={CostData?.CPC || ""}
                        onChange={handleCostInputChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffcc] w-full h-8"
                      >
                        <option value={CostData?.CPC || ""}>
                          {CostData?.CPC || ""}
                        </option>
                        {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
                          WorkerData.map((item, index) => (
                            <option key={index} value={item.Worker_CD}>
                              {item.Worker_CD}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                    </div>
                    <input
                      id="Worker_Name"
                      value={Person_Name || ""}
                      onChange={(event) => setWorkerData(event)}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-full xl:w-[110px]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-2">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Person_Time(CPT)
                  </label>
                  <input
                    id="CPT"
                    value={CostData?.CPT ?? ""}
                    onChange={handleCostInputChange}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-9">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Process_Date
                  </label>
                  <input
                    id="CPD"
                    value={
                      CostData && CostData.CPD
                        ? CostData.CPD.substring(0, 10)
                        : ""
                    }
                    onChange={(event) => handleCostInputChange(event)}
                    type="date"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-2">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Process_Qty(CPN)
                  </label>
                  <input
                    id="CPN"
                    value={CostData?.CPN ?? ""}
                    onChange={handleCostInputChange}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="lg:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2">
                <div className="flex items-center space-x-8">
                  <label className="text-xs font-bold whitespace-nowrap">
                    Cost_Progress
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="relative w-full xl:w-28">
                      <select
                        id="Cs_Progress_CD"
                        value={CostData?.Cs_Progress_CD || ""}
                        onChange={handleCostInputChange}
                        className={`border-gray-500 border-solid border-2 rounded-md w-full h-8 ${
                          CostData?.Cs_Progress_CD === "5"
                            ? "bg-red-500"
                            : CostData?.Cs_Progress_CD === "4"
                            ? "bg-yellow-500"
                            : CostData?.Cs_Progress_CD === "3"
                            ? "bg-orange-500"
                            : "bg-[#ffff99]"
                        }`}
                      >
                        <option value={CostData?.Cs_Progress_CD}>
                          {CostData?.Cs_Progress_CD}
                        </option>
                        {Array.isArray(CsProgressData) &&
                        CsProgressData.length > 0 ? (
                          CsProgressData.map((item, index) => (
                            <option key={index} value={item.Cs_Progress_CD}>
                              {item.Cs_Progress_CD}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                    </div>
                    <input
                      id="Cs_Progress_Abb"
                      value={Cs_Progress_Abb_Name || ""}
                      onChange={(event) => setCsProgressData(event)}
                      type="text"
                      className={`border-solid border-2 border-gray-500 rounded-md py-0.5 w-full xl:w-[150px] ${
                        CostData?.Cs_Progress_CD === "5"
                          ? "bg-red-500"
                          : CostData?.Cs_Progress_CD === "4"
                          ? "bg-yellow-500"
                          : CostData?.Cs_Progress_CD === "3"
                          ? "bg-orange-500"
                          : "bg-[#ffff99]"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-6">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Complete_Date
                  </label>
                  <input
                    id="Cs_Complete_Date"
                    value={
                      CostData && CostData.Cs_Complete_Date
                        ? CostData.Cs_Complete_Date.substring(0, 10)
                        : ""
                    }
                    onChange={(event) => handleCostInputChange(event)}
                    type="date"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-7">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Complete_Qty
                  </label>
                  <input
                    id="Cs_Complete_Qty"
                    value={CostData?.Cs_Complete_Qty ?? ""}
                    onChange={handleCostInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="flex flex-col pl-28 pt-1 w-full">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="Outside"
                    value={CostData?.Outside || ""}
                    onChange={handleCostInputChange}
                    className="mr-2 w-5 h-5 rounded-full"
                  />
                  <label htmlFor="Outside" className="text-sm">
                    Outside
                  </label>
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="Cs_Final_Complete"
                    value={CostData?.Cs_Final_Complete || ""}
                    onChange={handleCostInputChange}
                    className="mr-2 w-5 h-5 rounded-full"
                  />
                  <label htmlFor="Cs_Final_Complete" className="text-sm">
                    Final_Complete
                  </label>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2 mb-2">
                <div className="flex items-center">
                  <label className="text-xs font-bold w-40 xl:w-28 whitespace-nowrap">
                    Cs_Remark
                  </label>
                  <textarea
                    id="Cs_Remark"
                    value={CostData?.Cs_Remark || ""}
                    onChange={handleCostInputChange}
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-full xl:w-60"
                    rows="2"
                  />
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-4">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Cs_Register_Date
                  </label>
                  <input
                    id="Cs_Register_Date"
                    value={formatDateTime(CostData?.Cs_Register_Date)}
                    onChange={handleCostInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-5">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Cs_Modify_Date
                  </label>
                  <input
                    id="Cs_Modify_Date"
                    value={formatDateTime(CostData?.Cs_Modify_Date)}
                    onChange={handleCostInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 xl:w-60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center lg:space-x-9">
                  <div className="flex items-center -mt-9 ">
                    <label className="text-xs font-bold w-28 whitespace-nowrap">
                      Sequence_No
                    </label>
                    <input
                      id="Sequence_No"
                      value={CostData?.Sequence_No || ""}
                      onChange={handleCostInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md -ml-0.5 py-0.5 w-20 sm:w-[182px] xl:w-[182px]"
                    />
                  </div>
                  <div className="flex items-center flex-wrap">
                    <div className="flex items-center space-x-3 pl-2 sm:pl-5 lg:pl-0">
                      <label className="text-xs font-bold w-auto whitespace-nowrap">
                        Pr_No
                      </label>
                      <input
                        id="Pr_No"
                        value={CostData?.Pr_No || ""}
                        onChange={handleCostInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-20 sm:w-40 xl:w-40"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mt-2 pl-2 sm:pl-5 lg:pl-0 w-full">
                      <label className="text-xs font-bold w-auto whitespace-nowrap">
                        Err_No
                      </label>
                      <input
                        id="Err_N"
                        value={CostData?.Err_N || ""}
                        onChange={handleCostInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-20 sm:w-40 xl:w-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 p-4 flex flex-col items-start w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-2">
                <div className="flex items-center space-x-7">
                  <label className="text-xs font-bold w-28 whitespace-nowrap">
                    Costs_List QC-FG_Comp
                  </label>
                  <input
                    id="QCFG_Comp_Qty"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-40 sm:w-full"
                  />
                </div>
              </div>
              <div className="overflow-x-auto w-full">
                <div className="overflow-y-auto max-h-96">
                  <table className="min-w-full bg-white border border-black table-auto">
                    <thead>
                      <tr>
                        {headers.map((header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-xs font-medium text-gray-700 border border-black text-left sticky top-0 bg-gray-200"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="border border-black">
                      {Array.isArray(CostNoData) && CostNoData.length > 0
                        ? CostNoData.map((item, index) => {
                            const workerNamesForRow = WorkerData.filter(
                              (worker) => worker.Worker_CD === item.CPC
                            ).map((worker) => worker.Worker_Abb);

                            const ResourceNamesForRow = ResourceData.filter(
                              (resource) => resource.Resource_CD === item.CMC
                            ).map((resource) => resource.Resource_Abb);

                            const CsProgressNamesForRow = CsProgressData.filter(
                              (csprogress) =>
                                csprogress.Cs_Progress_CD ===
                                item.Cs_Progress_CD
                            ).map(
                              (csprogress) => csprogress.Cs_Progress_Symbol
                            );

                            const processKey =
                              planData?.[`PPC${item.Process_No}`];

                            const ProcessNamesForRow = ProcessCData.filter(
                              (Process) => Process.Process_CD === processKey
                            ).map((Process) => Process.Process_Abb);

                            return (
                              <tr
                                key={index}
                                className={
                                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                }
                              >
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">{item.Cost_No}</p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">
                                    {item.Process_No}
                                  </p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-48 h-7 p-1">
                                    {ProcessNamesForRow.length > 0
                                      ? ProcessNamesForRow.join(", ")
                                      : "N/A"}
                                  </p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">{item.CMC}</p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-48 h-7 p-1">
                                    {ResourceNamesForRow.length > 0
                                      ? ResourceNamesForRow.join(", ")
                                      : "N/A"}
                                  </p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">{item.CMT}</p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">{item.CPC}</p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">
                                    {workerNamesForRow.length > 0
                                      ? workerNamesForRow.join(", ")
                                      : "N/A"}
                                  </p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">{item.CPT}</p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">
                                    {new Date(item.CPD).toLocaleDateString(
                                      "en-GB"
                                    )}
                                  </p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">{item.CPN}</p>
                                </td>
                                <td
                                  className={`px-4 py-2 border border-black text-sm ${
                                    item.Cs_Progress_CD === "5"
                                      ? "bg-red-500 text-white"
                                      : item.Cs_Progress_CD === "4"
                                      ? "bg-yellow-500 text-black"
                                      : item.Cs_Progress_CD === "3"
                                      ? "bg-orange-500 text-white"
                                      : ""
                                  }`}
                                >
                                  <p className="w-full h-full p-1">
                                    {item.Cs_Progress_CD}
                                  </p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">
                                    {CsProgressNamesForRow.length > 0
                                      ? CsProgressNamesForRow.join(", ")
                                      : "N/A"}
                                  </p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">
                                    {new Date(
                                      item.Cs_Complete_Date
                                    ).toLocaleDateString("en-GB")}
                                  </p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">
                                    {item.Cs_Complete_Qty}
                                  </p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">
                                    {item.Cs_Remark}
                                  </p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">
                                    {new Date(
                                      item.Cs_Register_Date
                                    ).toLocaleDateString("en-GB")}
                                  </p>
                                </td>
                                <td className="px-4 py-2 border border-black text-sm">
                                  <p className="w-28 h-7 p-1">
                                    {new Date(
                                      item.Cs_Modify_Date
                                    ).toLocaleDateString("en-GB")}
                                  </p>
                                </td>
                              </tr>
                            );
                          })
                        : rows}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 mt-5">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              <div className="grid grid-cols-4 gap-2">
                <button disabled className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  (F1)
                </button>
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Edit <br />
                  編集(F2)
                </button>
                <button
                  onClick={handleF3Click}
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
                >
                  New_Add <br />
                  追加(F3)
                </button>
                <button disabled className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  (F4)
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button disabled className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  (F5)
                </button>
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Result_View <br />
                  (F6)
                </button>
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Next_Cost <br />
                  別原(F7)
                </button>
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Next_Parts
                  <br />
                  別部(F8)
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button
                  onClick={handleF9Click}
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
                >
                  Save
                  <br />
                  登録(F9)
                </button>

                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                  Delete
                  <br />
                  取消(F10)
                </button>
                <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white">
                  Next_Input <br />
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
  );
};

export default CostInfo;
