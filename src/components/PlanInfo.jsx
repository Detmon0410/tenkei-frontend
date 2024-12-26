import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOrder } from "../hooks/use-order";
import { usePurchase } from "../hooks/use-purchase";
import { usePlan } from "../hooks/use-plan";
import { useCost } from "../hooks/use-cost";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function PlanInfo() {
    const navigate = useNavigate();
    const location = useLocation();
  const { searchOrderNo: initialSearchOrderNo = "" } = location.state || {};
  const [searchOrderNo, setSearchOrderNo] = useState(initialSearchOrderNo);
  const [autoYearChange, setAutoYearChange] = useState(false);
  const [searchPlanNo, setSearchPlanNo] = useState("");
  const {
    orderData,
    searchOrderData,
    setOrderData,
    WorkgData,
    setWorkgData,
    WorkerData,
    setWorkerData,
    SpecificData,
    setSpecificData,
    CustomerData,
    setCustomerData,
    Request3Data,
    CoatingData,
    setCoatingData,
    OdProgressData,
    setOdProgressData,
    DeliveryData,
    setDeliveryData,
    PriceData,
    setPriceData,
    TargetData,
    setTargetData,
    SupplyData,
    setSupplyData,
  } = useOrder();
  const {
    planData,
    setPlanData,
    selectedPlanNo,
    setSelectedPlanNo,
    searchPartsData,
    qmprocessData,
    processData,
    plprogressData,
    setPlProgressData,
    ScheduleData,
    setScheduleData,
    PartsData,
    UnitsData,
    createPlan,
    createSchedule,
    createResult,
    createWip,
    selectPartsData,
    deleteResult,
    deletePlan,
    deleteSchedule,
    deleteWip,
  } = usePlan();
  const { ProcessCData } = useCost();
  const { purchaseData, setPurchaseData } = usePurchase();
  const [selectedSalesPersonAbb, setSelectedSalesPerson] = useState("");
  const [SpecificName, setSpecificName] = useState("");
  const [selectedCustomerAbb, setSelectedCustomerAbb] = useState("");
  const [coatingName, setCoatingName] = useState("");
  const [OdProgressName, setOdProgressName] = useState("");
  const [DeliveryName, setDeliveryName] = useState("");
  const [PriceName, setPriceName] = useState("");
  const [UnitName, setUnitName] = useState("");
  const [targetName, setTargetName] = useState("");
  const [ProgressName, setProgressName] = useState("");
  const [Person_Name, setPerson_Name] = useState("");
  const [updPerson_Name, setupdPerson_Name] = useState("");
  const [Schedule_Name, setSchedule_Name] = useState("");
  const [Stagnat_Scale, setStagnat_Scale] = useState("");
  const [ManHour_Scale, setManHour_Scale] = useState("");
  const [Search_Odpt_No, setSearch_Odpt_No] = useState("");
  const inputs = Array.from({ length: 36 }, (_, i) => i + 1);

  const handleInputChange = (event, isPurchase, isPlan = false) => {
    const { id, value, type, checked } = event.target;

    if (isPurchase) {
      setPurchaseData((prevPurchaseData) => ({
        ...prevPurchaseData,
        [id]: type === "checkbox" ? checked : value === "" ? null : value,
      }));
    } else if (isPlan) {
      setPlanData((prevOrderData) => ({
        ...prevOrderData,
        [id]: type === "checkbox" ? checked : value === "" ? null : value,
      }));
    } else {
      setOrderData((prevOrderData) => ({
        ...prevOrderData,
        [id]: type === "checkbox" ? checked : value === "" ? null : value,
      }));
    }

    if (id === "Search_Order_No") {
      setSearchOrderNo(value);
      if (value) {
        searchOrderData(value);
        searchPartsData(value);
      }
    }
  };

  const isSearchOrderNoFilled = searchOrderNo !== "";

  const handlePlanInputChange = async (event) => {
    const { id, value, type, checked } = event.target;
    let formattedValue = value;

    // แปลงวันที่และเวลาเป็น ISO8601
    if (type === "datetime-local" && value) {
      const dateWithCurrentTime = new Date(value);
      formattedValue = dateWithCurrentTime.toISOString();
    }

    setPlanData((prevPlanData) => ({
      ...prevPlanData,
      [id]:
        type === "checkbox"
          ? checked
          : type === "date" && value !== ""
          ? new Date(`${value}T00:00:00.000Z`).toISOString()
          : value === ""
          ? null
          : value,
    }));

    if (id === "Search_Parts_No") {
      setSearchPlanNo(value);
      setSearch_Odpt_No(`${searchOrderNo || ""}${value}`);
    }
  };

  const handleSearch_Order_NoChange = async (newOrder_No) => {
    if (searchOrderNo) {
      await searchOrderData(searchOrderNo);
    }
  };

  useEffect(() => {
    handleSearch_Order_NoChange();
  }, [searchOrderNo]);

  const handleF3Click = () => {
    try {
      setPlanData((prevData) => ({
        ...prevData,
        Order_No: orderData?.Order_No || "",
      }));
    } catch (error) {
      console.error("Error in handleF3Click:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาติดต่อผู้ดูแลระบบ",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
    }
  };

  const handleF4Click = async () => {
    try {
      const orderExists = await searchOrderData(searchOrderNo);
      if (orderExists) {
        navigate("/purchase-info", { state: { searchOrderNo } });
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

  const handleF9Click = async () => {
    try {
      const orderExists = await searchOrderData(orderData.Order_No);
      if (orderExists) {
        const PlanExists = await selectPartsData(
          orderData.Order_No,
          planData?.Parts_No
        );

        if (PlanExists) {
          const result = await Swal.fire({
            title: "ต้องการแก้ไขข้อมูลหรือไม่",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "ใช่",
            cancelButtonText: "ไม่ใช่",
          });
          if (result.isConfirmed) {
            await createResult();
            await createPlan();
            await createSchedule();
            await createWip();
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
            await createResult();
            await createPlan();
            await createSchedule();
            await createWip();
          }
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

  const handleF10Click = async () => {
    try {
      // ตรวจสอบว่า planData มีข้อมูล Order_No และ Parts_No หรือไม่
      if (!planData?.Order_No || !planData?.Parts_No) {
        Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด",
          text: "ไม่พบข้อมูลที่ต้องการลบ โปรดตรวจสอบข้อมูลก่อนดำเนินการ.",
        });
        return;
      }

      // แสดงกล่องยืนยันการลบข้อมูล
      const result = await Swal.fire({
        title: "ยืนยันการลบ?",
        text: "คุณต้องการลบข้อมูลนี้หรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ใช่, ลบเลย!",
        cancelButtonText: "ยกเลิก",
      });

      if (result.isConfirmed) {
        // ลบข้อมูล
        await deleteWip(planData.Order_No, planData?.Parts_No);
        await deleteSchedule(planData.Order_No, planData?.Parts_No);
        await deletePlan(planData.Order_No, planData?.Parts_No);
        await deleteResult(planData.Order_No, planData?.Parts_No);

        // แสดงข้อความแจ้งเตือนความสำเร็จ
        Swal.fire(
          "ลบเรียบร้อย!",
          "ข้อมูลของคุณได้ถูกลบเรียบร้อยแล้ว.",
          "success"
        );
      }
    } catch (error) {
      // จัดการข้อผิดพลาดและแจ้งผู้ใช้
      console.error("Error during F10_Click:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถลบข้อมูลได้ โปรดติดต่อผู้ดูแลระบบ.",
      });
    }
  };

  const handleF12Click = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to reset the form data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, reset it!",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setSearchOrderNo("");
        setOrderData({});
        // console.log("Form reset to initial state.");
        Swal.fire("Reset!", "The form data has been reset.", "success");
      } else {
        // console.log("Reset action cancelled.");
      }
    });
  };

  useEffect(() => {
    if (orderData?.Od_Ctl_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === orderData.Od_Ctl_Person_CD
      );
      setSelectedSalesPerson(selectedGroup ? selectedGroup.Worker_Abb : "");
    }

    if (planData?.Pl_Reg_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === planData.Pl_Reg_Person_CD
      );
      setPerson_Name(selectedGroup ? selectedGroup.Worker_Abb : "");
    }

    if (planData?.Pl_Upd_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === planData.Pl_Upd_Person_CD
      );
      setupdPerson_Name(selectedGroup ? selectedGroup.Worker_Abb : "");
    }
    if (planData?.Pt_Unit_CD && UnitsData.length > 0) {
      const selectedGroup = UnitsData.find(
        (item) => item.Unit_CD === planData?.Pt_Unit_CD
      );
      setUnitName(selectedGroup ? selectedGroup.Unit_Abb : "");
    }
  }, [
    orderData?.Od_Ctl_Person_CD,
    planData?.Pl_Reg_Person_CD,
    planData?.Pl_Upd_Person_CD,
    planData?.Pt_Unit_CD,
    UnitsData,
    WorkerData,
  ]);

  useEffect(() => {
    if (orderData?.Specific_CD && SpecificData.length > 0) {
      const selectedGroup = SpecificData.find(
        (item) => item.Specific_CD === orderData?.Specific_CD
      );

      setSpecificName(selectedGroup ? selectedGroup.Specific_Name : "");
    }
  }, [orderData?.Specific_CD, SpecificData]);

  useEffect(() => {
    if (orderData?.Customer_CD && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === orderData.Customer_CD
      );

      setSelectedCustomerAbb(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
  }, [orderData?.Customer_CD, CustomerData]);

  useEffect(() => {
    if (orderData?.Coating_CD && CoatingData.length > 0) {
      const selectedGroup = CoatingData.find(
        (item) => item.Coating_CD === orderData.Coating_CD
      );

      setCoatingName(selectedGroup ? selectedGroup.Coating_Name : "");
    }
  }, [orderData?.Coating_CD, CoatingData]);

  useEffect(() => {
    if (orderData?.Od_Progress_CD && OdProgressData.length > 0) {
      const selectedGroup = OdProgressData.find(
        (item) => item.Od_Progress_CD === orderData.Od_Progress_CD
      );

      setOdProgressName(selectedGroup ? selectedGroup.Od_Progress_Name : "");
    }
  }, [orderData?.Od_Progress_CD, OdProgressData]);

  useEffect(() => {
    if (orderData?.Delivery_CD && DeliveryData.length > 0) {
      const selectedGroup = DeliveryData.find(
        (item) => item.Delivery_CD === orderData.Delivery_CD
      );

      setDeliveryName(selectedGroup ? selectedGroup.Delivery_Name : "");
    }
  }, [orderData?.Delivery_CD, DeliveryData]);

  useEffect(() => {
    if (orderData?.Price_CD && PriceData.length > 0) {
      const selectedGroup = PriceData.find(
        (item) => item.Price_CD === orderData?.Price_CD
      );

      setPriceName(selectedGroup ? selectedGroup.Price_Name : "");
    }
  }, [orderData?.Price_CD, PriceData]);

  useEffect(() => {
    if (orderData?.Target_CD && TargetData.length > 0) {
      const selectedGroup = TargetData.find(
        (item) => item.Target_CD === orderData.Target_CD
      );

      setTargetName(selectedGroup ? selectedGroup.Target_Name : "");
    }
  }, [orderData?.Target_CD, TargetData]);

  useEffect(() => {
    if (planData?.Pl_Progress_CD && plprogressData.length > 0) {
      const selectedGroup = plprogressData.find(
        (item) => item.Pl_Progress_CD === planData.Pl_Progress_CD
      );

      setProgressName(selectedGroup ? selectedGroup.Pl_Progress_Symbol : "");
    }
  }, [planData?.Pl_Progress_CD, plprogressData]);

  useEffect(() => {
    if (planData?.Pl_Schedule_CD && ScheduleData.length > 0) {
      const selectedGroup = ScheduleData.find(
        (item) => item.Schedule_CD === planData.Pl_Schedule_CD
      );

      setSchedule_Name(selectedGroup ? selectedGroup.Schedule_Symbol : "");
      setStagnat_Scale(selectedGroup ? selectedGroup.Stagnat_Scale : "");
      setManHour_Scale(
        selectedGroup ? Math.round(selectedGroup.ManHour_Scale) : ""
      );
    }
  }, [planData?.Pl_Schedule_CD, ScheduleData]);

  useEffect(() => {
    if (Search_Odpt_No) {
      selectPartsData(searchOrderNo, searchPlanNo);
    }
  }, [Search_Odpt_No]);

  const rows = inputs.map((id) => {
    const processKey = planData?.[`PPC${id}`];
    const ProcessNamesForRow = (ProcessCData || [])
      .filter((Process) => Process.Process_CD === processKey)
      .map((Process) => Process.Process_Abb);
    return {
      mp: (
        <div>
          <div className="flex space-x-2 w-full">
            <input
              id={`QPPC${id}`}
              type="text"
              value={planData?.[`QPPC${id}`] || ""}
              onChange={handlePlanInputChange}
              className="border rounded px-2 py-1 text-xs w-20 h-6 mt-5"
            />
            <div className="flex flex-col items-end w-full">
              <button className="bg-gray-300 px-2 py-1 rounded-l text-xs h-5">
                ▼
              </button>
              <input
                id={`QRMT${id}`}
                type="text"
                value={planData?.[`QRMT${id}`] || ""}
                onChange={handlePlanInputChange}
                className="border rounded px-2 py-1 text-xs w-20"
              />
            </div>
          </div>
        </div>
      ),
      plan_process: (
        <div>
          <select
            id={`PPC${id}`}
            value={planData?.[`PPC${id}`] || ""}
            onChange={handlePlanInputChange}
            className="border rounded px-2 py-1 text-xs w-full"
          >
            <option value={planData?.[`PPC${id}`] || ""}>
              {ProcessNamesForRow}
            </option>
            {Array.isArray(qmprocessData) && qmprocessData.length > 0 ? (
              qmprocessData.map((item, index) => (
                <option key={index} value={item.Process_CD}>
                  {item.Process_Abb}
                </option>
              ))
            ) : (
              <option value="">ไม่มีข้อมูล</option>
            )}
          </select>
        </div>
      ),
      min: (
        <div>
          <input
            id={`PMT${id}`}
            type="text"
            value={
              planData?.[`PMT${id}`] !== undefined &&
              planData?.[`PMT${id}`] !== null
                ? planData?.[`PMT${id}`]
                : ""
            }
            onChange={handlePlanInputChange}
            className="border rounded px-2 py-1 text-xs w-full"
          />
        </div>
      ),
      mind: (
        <div>
          <input
            id={`PPT${id}`}
            type="text"
            value={
              planData?.[`PPT${id}`] !== undefined &&
              planData?.[`PPT${id}`] !== null
                ? planData?.[`PPT${id}`]
                : ""
            }
            onChange={handlePlanInputChange}
            className="border rounded px-2 py-1 text-xs w-full"
          />
        </div>
      ),
      time: (
        <div className="space-x-1">
          <select
            id={`T_Type${id}`}
            value={planData?.[`T_Type${id}`] || ""}
            onChange={handlePlanInputChange}
            className="border rounded px-2 py-1 text-xs w-12"
          >
            <option value={planData?.[`T_Type${id}`] || ""}>
              {planData?.[`T_Type${id}`]}
            </option>
            <option value=""></option>
            <option value="P">P</option>
            <option value="L">L</option>
          </select>
          <select
            id={`P_Type${id}`}
            value={planData?.[`P_Type${id}`] || ""}
            onChange={handlePlanInputChange}
            className="border rounded px-2 py-1 text-xs w-12"
          >
            <option value={planData?.[`P_Type${id}`] || ""}>
              {planData?.[`P_Type${id}`]}
            </option>
            <option value=""></option>
            <option value="M">M</option>
            <option value="A">A</option>
            <option value="O">O</option>
          </select>
          <select
            id={`S_Type${id}`}
            value={planData?.[`S_Type${id}`] || ""}
            onChange={handlePlanInputChange}
            className="border rounded px-2 py-1 text-xs w-12"
          >
            <option value={planData?.[`S_Type${id}`] || ""}>
              {planData?.[`S_Type${id}`]}
            </option>
            <option value=""></option>
            <option value="C">C</option>
            <option value="F">F</option>
          </select>
        </div>
      ),
      plan_date: (
        <div>
          <input
            id={`PPD${id}`}
            type="date"
            value={
              planData?.[`PPD${id}`]
                ? new Date(planData[`PPD${id}`]).toISOString().split("T")[0]
                : ""
            }
            onChange={handlePlanInputChange}
            className="border rounded px-2 py-1 text-xs w-full"
          />
        </div>
      ),
      instructions: (
        <div>
          <input
            id={`PPV${id}`}
            type="text"
            value={planData?.[`PPV${id}`] || ""}
            onChange={handlePlanInputChange}
            className="border rounded px-2 py-1 text-xs w-full"
          />
        </div>
      ),
      result_date: (
        <div>
          <input
            id={`RPD${id}`}
            type="date"
            value={
              planData?.[`RPD${id}`]
                ? new Date(planData[`RPD${id}`]).toISOString().split("T")[0]
                : ""
            }
            onChange={handlePlanInputChange}
            className="border rounded px-2 py-1 text-xs w-full"
          />
        </div>
      ),
      resultmachine: (
        <div>
          <input
            id={`RMT${id}`}
            type="text"
            value={
              planData?.[`RMT${id}`] !== undefined &&
              planData?.[`RMT${id}`] !== null
                ? planData?.[`RMT${id}`]
                : ""
            }
            onChange={handlePlanInputChange}
            className="border rounded px-2 py-1 text-xs w-full"
          />
        </div>
      ),
      result_person: (
        <div>
          <input
            id={`RPT${id}`}
            type="text"
            value={
              planData?.[`RPT${id}`] !== undefined &&
              planData?.[`RPT${id}`] !== null
                ? planData?.[`RPT${id}`]
                : ""
            }
            onChange={handlePlanInputChange}
            className="border rounded px-2 py-1 text-xs w-full"
          />
        </div>
      ),
      resultqty: (
        <div>
          <input
            id={`RPN${id}`}
            type="text"
            value={
              planData?.[`RPN${id}`] !== undefined &&
              planData?.[`RPN${id}`] !== null
                ? planData?.[`RPN${id}`]
                : ""
            }
            onChange={handlePlanInputChange}
            className="border rounded px-2 py-1 text-xs w-full"
          />
        </div>
      ),
      asp: (
        <p className="mb-6 text-sm font-normal text-gray-500 sm:px-16 dark:text-gray-400">
          {planData?.[`ASP${id}`] !== undefined &&
          planData?.[`ASP${id}`] !== null
            ? planData?.[`ASP${id}`]
            : ""}
        </p>
      ),
      bk: (
        <p className="mb-6 text-sm font-normal text-gray-500 sm:px-16 dark:text-gray-400">
          {planData?.[`BKD${id}`] !== undefined &&
          planData?.[`BKD${id}`] !== null
            ? planData?.[`BKD${id}`]
            : ""}
        </p>
      ),
      pi_machine: (
        <input
          disabled
          id={`PML${id}`}
          type="text"
          value={
            planData?.[`PML${id}`] !== undefined &&
            planData?.[`PML${id}`] !== null
              ? planData?.[`PML${id}`]
              : ""
          }
          onChange={handlePlanInputChange}
          className="border-none text-center  text-gray-500 dark:text-gray-400 text-sm w-36"
        />
      ),
      pi_person: (
        <input
          disabled
          id={`PPL${id}`}
          type="text"
          value={
            planData?.[`PPL${id}`] !== undefined &&
            planData?.[`PPL${id}`] !== null
              ? planData?.[`PPL${id}`]
              : ""
          }
          onChange={handlePlanInputChange}
          className="border-none text-center  text-gray-500 dark:text-gray-400 text-sm w-36"
        />
      ),
    };
  });

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col p-2 overflow-x-auto">
          <div className="bg-white grid grid-cols-1">
            <div className="flex justify-center items-center">
              <h1 className="text-2xl font-bold ">Plan Info</h1>
            </div>
            <div className="overflow-x-auto w-full h-full">
              <div className="flex space-x-4 w-full">
                {/* ส่วนของ div ซ้าย */}
                <div className="p-4 space-y-4 min-w-[900px] flex-shrink-0 w-2/3">
                  <div className="flex items-center space-x-2 justify-start">
                    <label className="text-xs font-medium">Date:</label>
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
                    <div className="inline-flex space-x-0">
                      <button className="bg-gray-300 px-2 py-1 rounded-l text-xs">
                        GRA
                      </button>
                      <button className="bg-gray-300 px-2 py-1 rounded-r text-xs">
                        List
                      </button>
                    </div>
                    <div className="flex flex-row space-x-4 min-w-[300px] w-full px-1 py-1">
                      {/* บรรทัดของ Date */}
                      <div className="flex items-center space-x-2">
                        <label className="text-xs font-medium">Date:</label>
                        <input
                          type="date"
                          className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs"
                        />
                      </div>

                      {/* บรรทัดของ Checkbox */}
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox border-gray-400 rounded"
                        />
                        <label className="text-xs font-medium">
                          Auto_Year_Change
                        </label>
                      </div>

                      {/* บรรทัดของ Target_PrG */}
                      <div className="flex items-center space-x-2">
                        <label className="text-xs font-medium">
                          Target_PrG
                        </label>
                        <select className="border-2 border-gray-500 rounded-md bg-[#ccffff] px-2 py-1 text-xs">
                          <option value="">Select</option>
                        </select>
                      </div>

                      {/* บรรทัดของ Target_Date */}
                      <div className="flex items-center space-x-2">
                        <label className="text-xs font-medium">
                          Target_Date
                        </label>
                        <input
                          type="date"
                          className="border-2 border-gray-500 rounded-md bg-[#ccffff] px-2 py-1 text-xs"
                        />
                        <span className="text-xs font-medium">~</span>
                        <input
                          type="date"
                          className="border-2 border-gray-500 rounded-md bg-[#ccffff] px-2 py-1 text-xs"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <label className="text-xs font-medium">
                        Search_Order_No
                      </label>
                      <input
                        id="Search_Order_No"
                        type="text"
                        value={searchOrderNo || ""}
                        onChange={handleInputChange}
                        className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ccffff] w-32"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <label className="text-xs font-medium">
                        Search_Parts_No
                      </label>
                      <select
                        id="Search_Parts_No"
                        value={searchPlanNo || ""}
                        onChange={handlePlanInputChange}
                        className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ccffff] w-18"
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

                    <div className="flex items-center space-x-2">
                      <label className="text-xs font-medium">
                        Search_Odpt_No
                      </label>
                      <input
                        disabled
                        id="Search_Odpt_No"
                        value={Search_Odpt_No || ""}
                        onChange={(e) => handlePlanInputChange(e)}
                        type="text"
                        className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-20"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <label className="text-xs font-medium">Order_No</label>
                      <input
                        disabled
                        value={planData?.Order_No || ""}
                        onChange={handlePlanInputChange}
                        type="text"
                        className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-20"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <label className="text-xs font-medium">Odpt_No</label>
                      <input
                        disabled
                        id="OdPt_No"
                        value={planData?.OdPt_No || ""}
                        onChange={handlePlanInputChange}
                        type="text"
                        className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-20"
                      />
                    </div>

                    <div className="flex space-x-1">
                      <button className="bg-gray-300 py-1 px-2 rounded text-xs">
                        PP
                      </button>
                      <button className="bg-gray-300 py-1 px-2 rounded text-xs">
                        PD
                      </button>
                      <button className="bg-gray-300 py-1 px-2 rounded text-xs">
                        RD
                      </button>
                    </div>
                  </div>
                </div>

                {/* ส่วนของ div ขวา */}
              </div>
              <hr className="border-y-[1px] border-gray-300" />
            </div>

            <div className="overflow-x-auto w-full">
              <div className="grid grid-cols-12 min-w-[1800px]">
                <div className="w-full content-start ms-5 mt-4">
                  <label className=" text-xs">Order_Info</label>
                </div>
                <br />
                <div className="col-span-12 me-5 mt-5 ml-14 ">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-9">
                      {/* Group 1 */}
                      <div className="gap-2 flex mb-4 justify-start me-5">
                        <div className="flex gap-2 w-auto">
                          <label className="w-auto  text-xs">Od_No</label>
                          <div className="w-32 ml-1">
                            <input
                              disabled
                              id="Order_No"
                              value={orderData?.Order_No || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto item ">
                          <label className="w-16 text-xs">Product_Grp</label>
                          <select
                            id="Product_Grp_CD"
                            className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99] w-36"
                          >
                            <option value={orderData?.Product_Grp_CD || ""}>
                              {orderData?.Product_Grp_CD || ""}
                            </option>
                            {Array.isArray(WorkgData) &&
                            WorkgData.length > 0 ? (
                              WorkgData.map((item, index) => (
                                <option key={index} value={item.WorkG_CD}>
                                  {item.WorkG_CD}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                          </select>
                        </div>
                        <div className="flex gap-2 w-auto ml-0.5">
                          <label className="w-auto text-xs">Mate1</label>
                          <div className="w-auto flex gap-1">
                            <input
                              disabled
                              id="Material1"
                              value={orderData?.Material1 || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />

                            <input
                              disabled
                              id="H_Treatment1"
                              value={orderData?.H_Treatment1 || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">PO No</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <input
                              type="text"
                              id="Od_No_of_Custom"
                              value={orderData?.Od_No_of_Custom || ""}
                              onChange={handleInputChange}
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-20 text-xs">Od_Ctl_Person</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <select
                              id="Od_Ctl_Person_CD"
                              value={orderData?.Od_Ctl_Person_CD || ""}
                              onChange={handleInputChange}
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99] "
                            >
                              <option value={orderData?.Od_Ctl_Person_CD || ""}>
                                {orderData?.Od_Ctl_Person_CD || ""}
                              </option>
                              {Array.isArray(WorkerData) &&
                              WorkerData.length > 0 ? (
                                WorkerData.map((item, index) => (
                                  <option key={index} value={item.Worker_CD}>
                                    {item.Worker_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                            <input
                              value={selectedSalesPersonAbb}
                              onChange={(event) => setWorkerData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto mr-1">
                          <label className="w-8 text-xs">Sales</label>
                          <div className="w-auto flex gap-1">
                            <input
                              value={orderData?.Sales_Person_CD || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-10">
                          <label className="w-10 text-xs">Specific</label>
                          <div className="w-auto flex gap-1">
                            <select
                              id="Specific_CD"
                              value={orderData?.Specific_CD || ""}
                              onChange={handleInputChange}
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99] "
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
                              value={SpecificName || ""}
                              onChange={(event) => setSpecificData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-5">
                          <label className="w-auto  text-xs">Pd_Receive</label>
                          <div className="w-auto">
                            <input
                              id="Pd_Received_Date"
                              value={orderData?.Pd_Received_Date || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Group 2 */}
                      <div className="gap-2 flex mb-4 justify-start me-5">
                        <div className="flex gap-2 w-auto">
                          <label className="w-10  text-xs">Request</label>
                          <div className="w-32">
                            <input
                              disabled
                              id="Request_Delivery"
                              value={
                                orderData?.Request_Delivery
                                  ? new Date(
                                      orderData.Request_Delivery
                                    ).toLocaleDateString("th-TH", {
                                      day: "2-digit",
                                      month: "2-digit",
                                      year: "2-digit",
                                    })
                                  : ""
                              }
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-12 text-xs">Customer</label>
                          <div className="w-auto flex gap-1">
                            <select
                              id="Customer_CD"
                              value={orderData?.Customer_CD || ""}
                              onChange={handleInputChange}
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99] "
                            >
                              <option value={orderData?.Customer_CD || ""}>
                                {orderData?.Customer_CD || ""}
                              </option>
                              {Array.isArray(CustomerData) &&
                              CustomerData.length > 0 ? (
                                CustomerData.map((item, index) => (
                                  <option key={index} value={item.Customer_CD}>
                                    {item.Customer_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                            <input
                              value={selectedCustomerAbb || ""}
                              onChange={(event) => setCustomerData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[87px]"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-auto text-xs">Mate2</label>
                          <div className="w-auto flex gap-1">
                            <input
                              disabled
                              id="Material2"
                              value={orderData?.Material2 || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />

                            <input
                              disabled
                              id="H_Treatment2"
                              value={orderData?.H_Treatment2 || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Req3</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99] w-24">
                              <option value={orderData?.Request3_CD || ""}>
                                {orderData?.Request3_CD || ""}
                              </option>
                              {Array.isArray(Request3Data) &&
                              Request3Data.length > 0 ? (
                                Request3Data.map((item, index) => (
                                  <option key={index} value={item.Request3_CD}>
                                    {item.Request3_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Coating</label>
                          <div className="w-auto flex gap-1 ">
                            <select
                              id="Coating_CD"
                              value={orderData?.Coating_CD || ""}
                              onChange={handleInputChange}
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99] "
                            >
                              <option value={orderData?.Coating_CD || ""}>
                                {orderData?.Coating_CD || ""}
                              </option>
                              {Array.isArray(CoatingData) &&
                              CoatingData.length > 0 ? (
                                CoatingData.map((item, index) => (
                                  <option key={index} value={item.Coating_CD}>
                                    {item.Coating_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                            <input
                              value={coatingName || ""}
                              onChange={(event) => setCoatingData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-8">
                          <label className="w-8 text-xs">Detail</label>
                          <div className="w-auto flex gap-1">
                            <input
                              id="Coating"
                              value={orderData?.Coating || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-28"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-16 text-xs ml-4">
                            Od_Progress
                          </label>
                          <div className="w-auto flex gap-1">
                            <select
                              id="Od_Progress_CD"
                              value={orderData?.Od_Progress_CD || ""}
                              onChange={handleInputChange}
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99]  "
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
                              value={OdProgressName || ""}
                              onChange={(event) => setOdProgressData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-7">
                          <label className="w-auto  text-xs">Pd_Comp</label>
                          <div className="w-auto">
                            <input
                              id="Pd_Complete_Date"
                              value={orderData?.Pd_Complete_Date || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Group 3 */}
                      <div className="gap-2 flex mb-4 justify-start ">
                        <div className="flex gap-2 w-auto">
                          <label className="w-auto  text-xs">Product</label>
                          <div className="w-32">
                            <input
                              disabled
                              id="Product_Delivery"
                              value={
                                orderData?.Product_Delivery
                                  ? new Date(
                                      orderData.Product_Delivery
                                    ).toLocaleDateString("th-TH", {
                                      day: "2-digit",
                                      month: "2-digit",
                                      year: "2-digit",
                                    })
                                  : ""
                              }
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Pd_name</label>
                          <div className="w-40 ml-2">
                            <input
                              disabled
                              id="Product_Name"
                              value={orderData?.Product_Name || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-auto text-xs">Mate3</label>
                          <div className="w-auto flex gap-1">
                            <input
                              disabled
                              id="Material3"
                              value={orderData?.Material3 || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />

                            <input
                              disabled
                              id="H_Treatment3"
                              value={orderData?.H_Treatment3 || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Qty</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <input
                              disabled
                              id="Quantity"
                              value={orderData?.Quantity || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-12"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-3">
                          <div className="w-auto flex gap-1 ">
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded"
                            />
                            <label className="text-xs mt-1">Od_Pending</label>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-6">
                          <label className="w-20 text-xs">Product_Docu</label>
                          <div className="w-auto flex gap-1">
                            <input
                              id="Product_Docu"
                              value={orderData?.Product_Docu || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-30"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-6">
                          <label className="w-10 text-xs ml-5">Delivery</label>
                          <div className="w-auto flex gap-1">
                            <select
                              id="Delivery_CD"
                              value={orderData?.Delivery_CD || ""}
                              onChange={handleInputChange}
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99]  "
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
                              value={DeliveryName || ""}
                              onChange={(event) => setDeliveryData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-6">
                          <label className="w-auto  text-xs">QC_Comp</label>
                          <div className="w-auto">
                            <input
                              id="I_Completed_Date"
                              value={orderData?.I_Completed_Date || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Group 4 */}
                      <div className="gap-2 flex mb-4 justify-start ">
                        <div className="flex gap-2 w-auto">
                          <label className="w-auto  text-xs">Confirm</label>
                          <div className="w-32">
                            <input
                              disabled
                              id="Confirm_Delivery"
                              value={
                                orderData?.Confirm_Delivery
                                  ? new Date(
                                      orderData.Confirm_Delivery
                                    ).toLocaleDateString("th-TH", {
                                      day: "2-digit",
                                      month: "2-digit",
                                      year: "2-digit",
                                    })
                                  : ""
                              }
                              type="text"
                              className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Pd_Size</label>
                          <div className="w-40 ml-2">
                            <input
                              disabled
                              id="Product_Size"
                              value={orderData?.Product_Size || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-auto text-xs">Mate4</label>
                          <div className="w-auto flex gap-1">
                            <input
                              disabled
                              id="Material4"
                              value={orderData?.Material4 || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />

                            <input
                              disabled
                              id="H_Treatment4"
                              value={orderData?.H_Treatment4 || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Price</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <select
                              id="Price_CD"
                              value={orderData?.Price_CD || ""}
                              onChange={handleInputChange}
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99]  w-12"
                            >
                              <option value={orderData?.Price_CD || ""}>
                                {orderData?.Price_CD || ""}
                              </option>
                              {Array.isArray(PriceData) &&
                              PriceData.length > 0 ? (
                                PriceData.map((item, index) => (
                                  <option key={index} value={item.Price_CD}>
                                    {item.Price_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                            <input
                              value={PriceName || ""}
                              onChange={(event) => setPriceData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-12"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-3">
                          <div className="w-auto flex gap-1 ">
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded"
                            />
                            <label className="text-xs mt-1">
                              Temp_Shipment
                            </label>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-1.5">
                          <label className="w-20 text-xs">Supple_Docu</label>
                          <div className="w-auto flex gap-1">
                            <input
                              id="Supple_Docu"
                              value={orderData?.Supple_Docu || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-30"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-7">
                          <label className="w-8 text-xs ml-5 item">
                            Target
                          </label>
                          <div className="w-auto flex gap-1">
                            <select
                              id="Target_CD"
                              value={orderData?.Target_CD || ""}
                              onChange={handleInputChange}
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99]  "
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
                              value={targetName || ""}
                              onChange={(event) => setTargetData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-6">
                          <label className="w-auto  text-xs">Shipment</label>
                          <div className="w-auto">
                            <input
                              id="Shipment_Date"
                              value={orderData?.Shipment_Date || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Group 5 */}
                      <div className="gap-2 flex mb-4 justify-start ">
                        <div className="flex gap-2 w-auto">
                          <label className="w-auto  text-xs">Nav</label>
                          <div className="w-auto">
                            <input
                              id="NAV_Delivery"
                              value={orderData?.NAV_Delivery || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-32 ml-5"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Pd_Draw</label>
                          <div className="w-40 ml-2">
                            <input
                              disabled
                              id="Product_Draw"
                              value={orderData?.Product_Draw || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-auto text-xs">Mate5</label>
                          <div className="w-auto flex gap-1">
                            <input
                              disabled
                              id="Material5"
                              value={orderData?.Material5 || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />

                            <input
                              disabled
                              id="H_Treatment5"
                              value={orderData?.H_Treatment5 || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-whtie border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-10 text-xs">Supple</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <select className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99]  w-24">
                              <option value={orderData?.Supply_CD || ""}>
                                {orderData?.Supply_CD || ""}
                              </option>
                              {Array.isArray(SupplyData) &&
                              SupplyData.length > 0 ? (
                                SupplyData.map((item, index) => (
                                  <option key={index} value={item.Supply_CD}>
                                    {item.Supply_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-[18px]">
                          <div className="w-auto flex gap-1 ">
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded"
                            />
                            <label className="text-xs mt-1">Unreceived</label>
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-6 "
                            />
                            <label className="text-xs mt-1">Od_CAT1</label>
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-6"
                            />
                            <label className="text-xs mt-1">Od_CAT2</label>
                            <input
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-6"
                            />
                            <label className="text-xs mt-1">Od_CAT3</label>
                          </div>
                        </div>

                        <div className="flex gap-2 w-auto ml-[96px]">
                          <label className="w-20 text-xs ml-5 item">
                            Pd_Target_Qty
                          </label>
                          <div className="w-auto flex gap-1">
                            <input
                              id="Pd_Target_Qty"
                              value={orderData?.Pd_Target_Qty || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-2">
                          <label className="w-auto  text-xs">
                            Calc_Process
                          </label>
                          <div className="w-auto">
                            <input
                              id="Calc_Process_Date"
                              value={orderData?.Calc_Process_Date || ""}
                              onChange={handleInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                            />
                          </div>
                        </div>
                      </div>

                      <hr className="border-y-[1px] border-gray-300 w-[1700px]" />

                      {/* Group 6 */}
                      <div className="gap-2 flex mb-4 justify-start mt-4">
                        <div className="flex gap-2 w-auto">
                          <label className="w-10  text-xs">Parts_No</label>
                          <div className="w-auto">
                            <input
                              id="Parts_No"
                              value={planData?.Parts_No || ""}
                              onChange={handlePlanInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-[45px] ml-1"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <label className="w-16 text-xs">Parts_Delivery</label>
                          <div className="w-auto flex gap-1">
                            <input
                              id="Pt_Delivery"
                              value={
                                planData?.Pt_Delivery
                                  ? new Date(planData.Pt_Delivery)
                                      .toISOString()
                                      .split("T")[0]
                                  : ""
                              }
                              onChange={handlePlanInputChange}
                              type="date"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w- ml-1.5"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-2">
                          <label className="w-10 text-xs">Parts_List</label>
                        </div>
                        <div className="flex gap-2 w-auto ml-9">
                          <label className="w-14 text-xs">RegPerson</label>
                          <div className="w-auto flex gap-1 mr-1">
                            <select
                              id="Pl_Reg_Person_CD"
                              value={planData?.Pl_Reg_Person_CD || ""}
                              onChange={handlePlanInputChange}
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99]  w-24"
                            >
                              <option value={planData?.Pl_Reg_Person_CD}>
                                {planData?.Pl_Reg_Person_CD}
                              </option>
                              {Array.isArray(WorkerData) &&
                              WorkerData.length > 0 ? (
                                WorkerData.map((item, index) => (
                                  <option key={index} value={item.Worker_CD}>
                                    {item.Worker_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                            <input
                              id="Pl_Reg_Person_Name"
                              value={Person_Name || ""}
                              onChange={(event) => setWorkerData(event)}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24 ml-1.5"
                            />
                            <label className="w-32 text-xs ml-5">
                              Company Information
                            </label>
                            <label className="w-24 text-xs">
                              Note/Remark/Info
                            </label>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-[18px]">
                          <div className="w-auto flex gap-1 ">
                            <input
                              id="Pt_CAT1"
                              value={planData?.Pt_CAT1 || ""}
                              onChange={handlePlanInputChange}
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-5 "
                            />
                            <label className="text-xs mt-2">Pt_CAT1</label>
                            <input
                              id="Pt_CAT2"
                              value={planData?.Pt_CAT2 || ""}
                              onChange={handlePlanInputChange}
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-5"
                            />
                            <label className="text-xs mt-2">Pt_CAT2</label>
                            <input
                              id="Pt_CAT3"
                              value={planData?.Pt_CAT3 || ""}
                              onChange={handlePlanInputChange}
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-5"
                            />
                            <label className="text-xs mt-2">Pt_CAT3</label>
                          </div>
                        </div>

                        <div className="flex gap-2 w-auto -ml-2">
                          <label className="w-10 text-xs ml-5 item">
                            Progress
                          </label>
                          <div className="w-auto flex gap-1">
                            <select
                              id="Pl_Progress_CD"
                              value={planData?.Pl_Progress_CD || ""}
                              onChange={handlePlanInputChange}
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99]  "
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
                              type="text"
                              id="Pl_Progress_Name"
                              value={ProgressName || ""}
                              onChange={(event) => setPlProgressData(event)}
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-12">
                          <label className="w-auto  text-xs">Plan_Reg</label>
                          <div className="w-auto">
                            <input
                              id="Pl_Reg_Date"
                              value={
                                planData?.Pl_Reg_Date
                                  ? planData.Pl_Reg_Date.substring(0, 16) // แสดงเป็น YYYY-MM-DDTHH:MM
                                  : ""
                              }
                              onChange={handlePlanInputChange}
                              type="datetime-local"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[170px]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Group 7 */}
                      <div className="gap-2 flex mb-4 justify-start mt-4">
                        <div className="flex flex-col gap-4 w-auto">
                          <div className="flex items-center gap-2">
                            <label className="w-11 text-xs">Pt_Name</label>
                            <div className="w-auto">
                              <select
                                id="Parts_CD"
                                value={planData?.Parts_CD || ""}
                                onChange={handlePlanInputChange}
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99] w-24"
                              >
                                {/* หากมี Parts_CD ใน planData ให้แสดงตัวเลือกแรก */}
                                <option value={planData?.Parts_CD}>
                                  {(Array.isArray(PartsData) &&
                                    PartsData.find(
                                      (item) =>
                                        item?.Parts_CD === planData?.Parts_CD
                                    )?.Parts_Abb) ||
                                    ""}
                                </option>

                                {Array.isArray(PartsData) &&
                                PartsData.length > 0 ? (
                                  PartsData.map((item, index) => (
                                    <option key={index} value={item.Parts_CD}>
                                      {item.Parts_Abb}
                                    </option>
                                  ))
                                ) : (
                                  <option value="">ไม่มีข้อมูล</option>
                                )}
                              </select>
                            </div>

                            <label className="w-10 text-xs ml-7">Pt_Mate</label>
                            <div className="w-auto">
                              <input
                                type="text"
                                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-24 h-7"
                              />
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <label className="w-11 text-xs">Pt_Qty</label>
                            <div className="w-auto flex gap-1">
                              <input
                                id="Pt_Qty"
                                value={planData?.Pt_Qty || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-10 h-7"
                              />
                              <select
                                id="Pt_Unit_CD"
                                value={planData?.Pt_Unit_CD || ""}
                                onChange={handlePlanInputChange}
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99] w-14 "
                              >
                                <option value={planData?.Pt_Unit_CD || ""}>
                                  {UnitName}
                                </option>
                                {Array.isArray(UnitsData) &&
                                UnitsData.length > 0 ? (
                                  UnitsData.map((item, index) => (
                                    <option key={index} value={item.Unit_CD}>
                                      {item.Unit_Abb}
                                    </option>
                                  ))
                                ) : (
                                  <option value="">ไม่มีข้อมูล</option>
                                )}
                              </select>
                            </div>
                            <input
                              id="Pt_Split"
                              value={planData?.Pt_Split || ""}
                              onChange={handlePlanInputChange}
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-2"
                            />
                            <label className="text-xs ">Split</label>
                            <label className="w-7 text-xs ml-4">Sp_Qty</label>
                            <input
                              id="Pt_Spare_Qty"
                              value={planData?.Pt_Spare_Qty || ""}
                              onChange={handlePlanInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-14 ml-1.5 h-7"
                            />
                          </div>

                          <div className="flex items-center gap-2">
                            <label className="w-20 text-xs">
                              Connect_Od_No
                            </label>
                            <div className="w-auto">
                              <input
                                id="Connect_Od_No"
                                value={planData?.Connect_Od_No || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-32  h-7"
                              />
                            </div>
                            <label className="w-8 text-xs ml-1">NG_Qty</label>
                            <div className="w-auto flex gap-1">
                              <input
                                id="Pt_NG_Qty"
                                value={planData?.Pt_NG_Qty || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-14 ml-1.5 h-7"
                              />
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <label className="w-20 text-xs">
                              Connect_Pt_No
                            </label>
                            <div className="w-auto flex gap-1">
                              <input
                                id="Connect_Pt_No"
                                value={planData?.Connect_Pt_No || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-10 h-7"
                              />
                              <input
                                id="Connect_Pt_Abb"
                                value={planData?.Connect_Pt_Abb || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-20 h-7"
                              />
                            </div>
                            <input
                              id="Pt_Pending"
                              value={planData?.Pt_Pending || ""}
                              onChange={handlePlanInputChange}
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-2"
                            />
                            <label className="text-xs ">Pt_pend</label>
                          </div>

                          <div className="flex items-center gap-2">
                            <label className="w-20 text-xs">
                              Connect_Pr_No
                            </label>
                            <div className="w-auto flex gap-1">
                              <input
                                id="Connect_Pr_No"
                                value={planData?.Connect_Pr_No || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md px-1 w-10 h-7"
                              />
                              <input
                                id="Connect_Pr_Abb"
                                value={planData?.Connect_Pr_Abb || ""}
                                onChange={handlePlanInputChange}
                                type="text"
                                className="bg-[#ccffcc] border-solid border-2 border-gray-500 rounded-md  w-20 h-7"
                              />
                            </div>
                            <input
                              id="Outside"
                              value={planData?.Outside || ""}
                              onChange={handlePlanInputChange}
                              type="checkbox"
                              className="form-checkbox border-gray-400 rounded ml-2"
                            />
                            <label className="text-xs ">Outside</label>
                          </div>
                        </div>

                        <div className="flex gap-2 w-auto ">
                          <div className="w-auto flex gap-1">
                            <div className=" border border-gray-300 overflow-hidden">
                              <table className="w-[360px] h-[10px] border-collapse text-xs">
                                <thead>
                                  <tr className="bg-gray-100">
                                    <th className="border border-gray-300 py-2 px-1 text-center">
                                      P.
                                    </th>
                                    <th className="border border-gray-300 py-2 px-1 text-center">
                                      PI.
                                    </th>
                                    <th className="border border-gray-300 py-2 px-1 text-center">
                                      Part
                                    </th>
                                    <th className="border border-gray-300 py-2 px-1 text-center">
                                      Pt_Delivery
                                    </th>
                                    <th className="border border-gray-300 py-2 px-1 text-center">
                                      Pt_
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {Array.isArray(selectedPlanNo) &&
                                  selectedPlanNo.length > 0 ? (
                                    selectedPlanNo.map((item, index) => (
                                      <tr key={index}>
                                        <td className="border border-gray-300 h-8">
                                          {item.Parts_No}
                                        </td>
                                        <td className="border border-gray-300 h-8">
                                          {item.Pl_Progress_CD}
                                        </td>
                                        <td className="border border-gray-300 h-8">
                                          {item.Parts_No}
                                        </td>
                                        <td className="border border-gray-300 h-8">
                                          {item.Pt_Delivery}
                                        </td>
                                        <td className="border border-gray-300 h-8">
                                          {item.Pt_Material}
                                        </td>
                                      </tr>
                                    ))
                                  ) : (
                                    <tr>
                                      <td className="border border-gray-300 h-8"></td>
                                      <td className="border border-gray-300 h-8"></td>
                                      <td className="border border-gray-300 h-8"></td>
                                      <td className="border border-gray-300 h-8"></td>
                                      <td className="border border-gray-300 h-8"></td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>

                              <div className="flex justify-between items-center p-2 border-t border-gray-300">
                                <button className="text-gray-500 focus:outline-none">
                                  ◀
                                </button>
                                <button className="text-gray-500 focus:outline-none">
                                  ▶
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2 w-auto ml-[18px] h-20">
                          <div className="w-auto flex flex-col gap-2">
                            {[1, 2, 3, 4, 5, 6].map((info) => (
                              <div
                                className="flex items-center mb-2"
                                key={info}
                              >
                                <label className="text-xs mr-2">{info}</label>
                                <select
                                  id={`Info${info}`}
                                  value={planData?.[`Info${info}`] || ""}
                                  onChange={handlePlanInputChange}
                                  className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs w-24"
                                >
                                  <option value=""></option>
                                  {Array.isArray(processData) &&
                                  processData.length > 0 ? (
                                    processData.map((item, index) => (
                                      <option
                                        key={index}
                                        value={item.Process_CD}
                                      >
                                        {item.Process_Abb}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">ไม่มีข้อมูล</option>
                                  )}
                                </select>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 w-auto ml-[18px] h-10">
                          <div className="w-16 flex flex-col gap-2">
                            {[1, 2, 3, 4, 5, 6].map((chk) => (
                              <div
                                className="flex items-center h-full py-2"
                                key={chk}
                              >
                                <label className="text-xs mr-2">
                                  Chk {chk}
                                </label>
                                <input
                                  id={`Info_Chk${chk}`}
                                  value={planData?.[`Info_Chk${chk}`] || ""}
                                  onChange={handlePlanInputChange}
                                  type="checkbox"
                                  className="form-checkbox border-gray-400 rounded ml-2"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ">
                          <div className="w-auto">
                            <table className="w-[500px] text-xs border border-gray-300">
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 h-44 w-1/2"></td>
                                  <td className="border border-gray-300 h-24 w-1/2"></td>
                                </tr>
                                <tr>
                                  <td
                                    className="border border-gray-300 h-8"
                                    colSpan="2"
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 w-auto ">
                          <div className="flex gap-2 w-auto ml-[50px]">
                            <label className="w-auto text-xs">Pt_Comp</label>
                            <div className="w-auto">
                              <input
                                id="Pt_Complete_Date"
                                value={
                                  planData?.Pt_Complete_Date
                                    ? new Date(planData.Pt_Complete_Date)
                                        .toISOString()
                                        .split("T")[0]
                                    : ""
                                }
                                onChange={handlePlanInputChange}
                                type="date"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 w-auto ml-[45px]">
                            <label className="w-auto text-xs">QC_Comp</label>
                            <div className="w-auto">
                              <input
                                id="Pt_I_Date"
                                value={
                                  planData?.Pt_I_Date
                                    ? new Date(planData.Pt_I_Date)
                                        .toISOString()
                                        .split("T")[0]
                                    : ""
                                }
                                onChange={handlePlanInputChange}
                                type="date"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[150px]"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 w-auto ml-[50px]">
                            <label className="w-auto text-xs">Plan_Upd</label>
                            <div className="w-auto">
                              <input
                                id="Pl_Upd_Date"
                                value={
                                  planData?.Pl_Upd_Date
                                    ? planData.Pl_Upd_Date.substring(0, 16)
                                    : ""
                                }
                                onChange={handlePlanInputChange}
                                type="datetime-local"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[170px]"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 w-auto ml-4">
                            <label className="w-auto text-xs">UpdPerson</label>
                            <div className="w-auto">
                              <select
                                id="Pl_Upd_Person_CD"
                                value={planData?.Pl_Upd_Person_CD}
                                onChange={handlePlanInputChange}
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99] w-full "
                              >
                                <option value={planData?.Pl_Upd_Person_CD}>
                                  {planData?.Pl_Upd_Person_CD}
                                </option>
                                {Array.isArray(WorkerData) &&
                                WorkerData.length > 0 ? (
                                  WorkerData.map((item, index) => (
                                    <option key={index} value={item.Worker_CD}>
                                      {item.Worker_CD}
                                    </option>
                                  ))
                                ) : (
                                  <option value="">ไม่มีข้อมูล</option>
                                )}
                              </select>
                              <input
                                id="Pl_Upd_Person_Name"
                                value={updPerson_Name || ""}
                                onChange={(event) => setWorkerData(event)}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full mt-1"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 w-auto ml-7">
                            <label className="w-auto text-xs">Schedule</label>
                            <div className="flex gap-2 w-auto">
                              <select
                                id="Pl_Schedule_CD"
                                value={planData?.Pl_Schedule_CD || ""}
                                onChange={handlePlanInputChange}
                                className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99] w-full "
                              >
                                <option value={planData?.Pl_Schedule_CD || ""}>
                                  {planData?.Pl_Schedule_CD || ""}
                                </option>
                                {Array.isArray(ScheduleData) &&
                                ScheduleData.length > 0 ? (
                                  ScheduleData.map((item, index) => (
                                    <option
                                      key={index}
                                      value={item.Schedule_CD}
                                    >
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

                          <div className="flex gap-2 w-auto">
                            <label className="w-auto text-xs">
                              Starnat|ManHour_Scale
                            </label>
                            <div className="flex gap-2 w-auto">
                              <input
                                id="Stagnat_Scale"
                                value={Stagnat_Scale || ""}
                                onChange={(event) => setScheduleData(event)}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-14"
                              />
                              <input
                                id="ManHour_Scale"
                                value={ManHour_Scale || ""}
                                onChange={(event) => setScheduleData(event)}
                                type="text"
                                className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-16"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Group 8 */}
                      <div className="gap-2 flex mb-4 justify-start mt-4 ml-16">
                        <div className="flex gap-2 w-auto">
                          <label className="w-24  text-xs">
                            PI_Quote_OdPt_No
                          </label>
                          <div className="w-auto">
                            <input
                              disabled
                              id="Pl_Quote_OdPt_No"
                              value={planData?.Pl_Quote_OdPt_No || ""}
                              onChange={handlePlanInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-40 ml-1"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-3">
                          <label className="w-20 text-xs">Start_Rev_Days</label>
                          <div className="w-auto flex gap-1">
                            <input
                              id="Pl_St_Rev_Day"
                              value={planData?.Pl_St_Rev_Day || ""}
                              onChange={handlePlanInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-14 ml-1"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-10">
                          <label className="w-20 text-xs">End_Rev_Days</label>
                          <div className="w-auto flex gap-1">
                            <input
                              id="Pl_Ed_Rev_Day"
                              value={planData?.Pl_Ed_Rev_Day || ""}
                              onChange={handlePlanInputChange}
                              type="text"
                              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-14 ml-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto w-full">
              <div className="grid grid-cols-12 min-w-auto">
                <div className="col-span-12 me-5 mt-5  ">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-9">
                      {/* Group 9 */}
                      <div className="gap-2 flex mb-4 justify-start mt-4 ml-16">
                        <div className="flex gap-2 w-auto">
                          <label className="w-10  text-xs">PI_Quote</label>
                          <div className="w-auto">
                            <input
                              id="PI_Quote"
                              value={planData?.PI_Quote || ""}
                              onChange={handlePlanInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-40 ml-1"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-3">
                          <label className="w-24 text-xs">
                            In_Inst(TooPcNo)
                          </label>
                          <div className="w-auto flex gap-1">
                            <button className="bg-gray-300 py-1 px-2 rounded text-xs">
                              ScheduleCalc
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-5">
                          <label className="w-10 text-xs">Type</label>
                          <div className="w-auto flex gap-1">
                            <select
                              id="Sc_Make_Type"
                              value={planData?.Sc_Make_Type || ""}
                              onChange={handlePlanInputChange}
                              className="border-2 border-gray-500 rounded-md px-2 py-1 text-xs bg-[#ffff99] w-24 "
                            >
                              <option value=""></option>
                              <option value="Forward">Forward</option>
                              <option value="Equality">Equality</option>
                              <option value="Backward">Backward</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-2 w-auto ml-5">
                          <input
                            id="Money_Object"
                            value={planData?.Money_Object || ""}
                            onChange={handlePlanInputChange}
                            type="checkbox"
                            className="form-checkbox border-gray-400 rounded ml-2"
                          />
                          <label className="text-xs mr-2 mt-1">
                            Money_Object
                          </label>

                          <div className="w-auto flex gap-1">
                            <input
                              id="Amount"
                              value={planData?.Amount || ""}
                              onChange={handlePlanInputChange}
                              type="text"
                              className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-24ml-1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Group 10 */}
                      <div className="gap-2 flex mb-4 justify-start mt-4 ">
                        <div className="flex gap-2 w-auto">
                          <table className="table-auto bg-white border-2 border-black text-xs">
                            <thead className="sticky top-0 z-10 bg-white">
                              <tr className="text-black font-bold text-xs">
                                <th
                                  colSpan="2"
                                  className="py-1 px-2 text-center"
                                >
                                  <button className="bg-gray-300 py-1 px-2 rounded text-xs text-gray-500">
                                    Quote_Info_View
                                  </button>
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  <button className="bg-gray-300 py-1 px-2 rounded text-xs text-gray-500 h-10">
                                    All ➔
                                  </button>
                                </th>
                                <th className="py-1 px-10 w-auto" rowSpan="2">
                                  Plan_Process
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  Plan Machine(min)
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  PlanMachine (min)|(D)
                                </th>
                                <th className="py-1 px-10 w-auto" rowSpan="2">
                                  Time/Proce/Sche
                                </th>
                                <th className="py-1 px-10 w-auto" rowSpan="2">
                                  Plan_Date
                                </th>
                                <th className="py-1 px-20 w-auto" rowSpan="2">
                                  Instructions
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  Result_Date
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  Result Machine (min/Lot)
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  Result Person (min/Lot)
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  Result Qty
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  <button className="bg-gray-300 py-1 px-2 rounded text-xs text-gray-500">
                                    ASP Schedule Reflect
                                  </button>
                                </th>
                                <th className="py-1 px-3 w-auto" rowSpan="2">
                                  <div className="flex gap-1">
                                    <button className="bg-gray-300 py-1 px-2 rounded text-xs text-gray-500">
                                      Schedule_BK
                                    </button>
                                    <button className="bg-gray-300 py-1 px-2 rounded text-xs text-gray-500">
                                      Schedule_RE
                                    </button>
                                  </div>
                                </th>
                                <th className="py-1 px-2 w-auto" rowSpan="2">
                                  PI_Machine Lot_Time (min/Lot)
                                </th>
                                <th className="py-1 px-2 w-auto" rowSpan="2">
                                  PI_Person Lot_time (min/Lot)
                                </th>
                              </tr>
                              <tr className="text-black font-bold text-xs">
                                <th className="py-1 px-2 w-auto">No.</th>
                                <th className="py-1 px-5 w-auto">M|P(m/p)</th>
                              </tr>
                            </thead>

                            <tbody>
                              {rows.map((row, rowIndex) => {
                                return (
                                  <tr
                                    key={rowIndex}
                                    className="border border-black border-dashed"
                                  >
                                    {/* Column for Row Number */}
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto">
                                      {rowIndex + 1}
                                    </td>

                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.mp}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div>
                                        <button className="bg-gray-300 py-1 px-2 rounded text-xs text-gray-500 h-8 font-bold">
                                          ➔
                                        </button>
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.plan_process}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.min}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.mind}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.time}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.plan_date}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.instructions}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.result_date}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.resultmachine}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.result_person}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.resultqty}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.asp}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.bk}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.pi_machine}
                                      </div>
                                    </td>
                                    <td className="py-1 px-2 border border-gray-300 text-center w-auto align-center">
                                      <div className="text-center">
                                        {row.pi_person}
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-4 flex mb-4  mt-4 ml-16 flex-row flex-wrap min-w-[2000px] justify-between ">
                    <div className="bg-white p-3 mt-5">
                      <div className="flex flex-wrap gap-4">
                        <button
                          className={`bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center ${
                            !isSearchOrderNoFilled
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={!isSearchOrderNoFilled}
                        >
                          Plan Copy <br /> 引用 (F1)
                        </button>
                        <button
                          className={`bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center ${
                            !isSearchOrderNoFilled
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={!isSearchOrderNoFilled}
                        >
                          Edit <br /> 編集 (F2)
                        </button>
                        <button
                          className={`bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center ${
                            !isSearchOrderNoFilled
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={!isSearchOrderNoFilled}
                          onClick={handleF3Click}
                        >
                          New Add <br /> 追加 (F3)
                        </button>
                        <button
                          className={`bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center ${
                            !isSearchOrderNoFilled
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={!isSearchOrderNoFilled}
                          onClick={handleF4Click}
                        >
                          Sub-Con <br /> 手配 (F4)
                        </button>
                        <button
                          className={`bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center ${
                            !isSearchOrderNoFilled
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={!isSearchOrderNoFilled}
                        >
                          Plan <br /> 計画 (F5)
                        </button>
                        <button
                          className={`bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center ${
                            !isSearchOrderNoFilled
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={!isSearchOrderNoFilled}
                        >
                          P Sheet All <br /> 全頁 (F6)
                        </button>
                        <button
                          className={`bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center ${
                            !isSearchOrderNoFilled
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={!isSearchOrderNoFilled}
                        >
                          P Sheet 1P <br /> 1頁 (F7)
                        </button>
                        <button
                          className={`bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center ${
                            !isSearchOrderNoFilled
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={!isSearchOrderNoFilled}
                        >
                          NextParts <br /> 別部 (F8)
                        </button>
                        <button
                          className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center"
                          onClick={handleF9Click}
                        >
                          Save <br /> 登録 (F9)
                        </button>
                        <button
                          className={`bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center ${
                            !isSearchOrderNoFilled
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={!isSearchOrderNoFilled}
                          onClick={handleF10Click}
                        >
                          Delete <br /> 削除 (F10)
                        </button>
                        <button
                          className={`bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white w-auto text-center ${
                            !isSearchOrderNoFilled
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={!isSearchOrderNoFilled}
                        >
                          NextInput <br /> 次へ (F11)
                        </button>
                        <button
                          className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center"
                          onClick={handleF12Click}
                        >
                          Exit <br /> 終了 (F12)
                        </button>
                      </div>
                    </div>

                    <div className="p-4 max-w-lg mx-auto">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        {/* MaxEnd_No */}
                        <label
                          htmlFor="max-end-no"
                          className="col-span-2 text-xs text-right pr-2"
                        >
                          MaxEnd_No
                        </label>
                        <input
                          disabled
                          id="Max_No"
                          value={planData?.Max_No || 0}
                          onChange={handlePlanInputChange}
                          type="text"
                          className="col-span-2 border-2 border-gray-500 rounded-md p-1 w-full"
                        />
                        <input
                          disabled
                          id="End_No"
                          value={planData?.End_No || ""}
                          onChange={handlePlanInputChange}
                          type="text"
                          className="col-span-2 border-2 border-gray-500 rounded-md p-1 w-full"
                        />

                        {/* Total */}
                        <label
                          htmlFor="total"
                          className="col-span-2 text-xs text-right pr-2"
                        >
                          Total
                        </label>
                        <input
                          disabled
                          id="Total_M_Time"
                          value={
                            planData?.Total_M_Time !== undefined &&
                            planData?.Total_M_Time !== null
                              ? planData?.Total_M_Time
                              : ""
                          }
                          onChange={handlePlanInputChange}
                          type="text"
                          className="col-span-2 border-2 border-gray-500 rounded-md p-1 w-full"
                        />
                        <input
                          disabled
                          id="Total_P_Time"
                          value={
                            planData?.Total_P_Time !== undefined &&
                            planData?.Total_P_Time !== null
                              ? planData?.Total_P_Time
                              : ""
                          }
                          onChange={handlePlanInputChange}
                          type="text"
                          className="col-span-2 border-2 border-gray-500 rounded-md p-1 w-full"
                        />

                        {/* Now_No */}
                        <label
                          htmlFor="now-no"
                          className="col-span-2 text-xs text-right pr-2"
                        >
                          Now_No
                        </label>
                        <input
                          disabled
                          id="Now_No"
                          value={
                            planData?.Now_No !== undefined &&
                            planData?.Now_No !== null
                              ? planData?.Now_No
                              : ""
                          }
                          onChange={handlePlanInputChange}
                          type="text"
                          className="col-span-2 border-2 border-gray-500 rounded-md p-1 w-full"
                        />

                        {/* Re_Total */}
                        <label
                          htmlFor="re-total"
                          className="col-span-2 text-xs text-right pr-2"
                        >
                          Re_Total
                        </label>
                        <input
                          disabled
                          id="Re_Total_M_Time"
                          value={
                            planData?.Re_Total_M_Time !== undefined &&
                            planData?.Re_Total_M_Time !== null
                              ? planData?.Re_Total_M_Time
                              : ""
                          }
                          onChange={handlePlanInputChange}
                          type="text"
                          className="col-span-2 border-2 border-gray-500 rounded-md p-1 w-full"
                        />
                        <input
                          disabled
                          id="Re_Total_P_Time"
                          value={
                            planData?.Re_Total_P_Time !== undefined &&
                            planData?.Re_Total_P_Time !== null
                              ? planData?.Re_Total_P_Time
                              : ""
                          }
                          onChange={handlePlanInputChange}
                          type="text"
                          className="col-span-2 border-2 border-gray-500 rounded-md p-1 w-full"
                        />
                        <br></br>
                        {/* Re_Pr_Qty */}
                        <label
                          htmlFor="re-pr-qty"
                          className="col-span-2 text-xs text-right pr-2"
                        >
                          Re_Pr_Qty
                        </label>
                        <input
                          disabled
                          id="Re_Pr_Qty"
                          value={
                            planData?.Re_Pr_Qty !== undefined &&
                            planData?.Re_Pr_Qty !== null
                              ? planData?.Re_Pr_Qty
                              : ""
                          }
                          onChange={handlePlanInputChange}
                          type="text"
                          className="col-span-2 border-2 border-gray-500 rounded-md p-1 w-full"
                        />

                        {/* Re_Total_N */}
                        <label
                          htmlFor="re-total-n"
                          className="col-span-2 text-xs text-right pr-2"
                        >
                          Re_Total_N
                        </label>
                        <input
                          disabled
                          id="Re_Total_N_Time"
                          value={
                            planData?.Re_Total_N_Time !== undefined &&
                            planData?.Re_Total_N_Time !== null
                              ? planData?.Re_Total_N_Time
                              : ""
                          }
                          onChange={handlePlanInputChange}
                          type="text"
                          className="col-span-2 border-2 border-gray-500 rounded-md p-1 w-full"
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
  );
}

const searchPermission = (status) => {
  document.getElementById("Search_Order_No").disabled = !status;
};
