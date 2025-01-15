import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useOrder } from "../hooks/use-order";
import Swal from "sweetalert2";
export default function CalcComplete() {
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonState, setButtonState] = useState({
    F1: true,
    F2: true,
    F3: true,
    F4: true,
    F5: true,
    F6: true,
    F7: true,
    F8: true,
    F9: false,  
    F10: true,
    F11: false, // ปุ่ม F11 จะไม่ถูก disable
    F12: false, // ปุ่ม F12 จะไม่ถูก disable
  });
  const { searchOrderNo: initialSearchOrderNo = "" } = location.state || {};
  const [searchOrderNo, setSearchOrderNo] = useState(initialSearchOrderNo);
  const currentDate = new Date().toISOString().split("T")[0];
  const {
    CalcData,
    searchOrderData,
    setCalcData,
    searchCalcData,
    CustomerData,
    UnitData,
    OdProgressData,
    PriceData,
    editCalc,
  } = useOrder();
  const [searchValue, setSearchValue] = useState(
    [...Array(10)].reduce((acc, _, index) => {
      acc[`Action_Od_No${index + 1}`] = "";
      return acc;
    }, {})
  );

  const isSearchOrderNoFilled = Object.values(searchValue).some(value => value !== "");
  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;

    setCalcData((prevCalcData) => ({
      ...prevCalcData,
      [id]:
        type === "checkbox"
          ? checked
          : type === "date" && value !== ""
          ? new Date(`${value}T00:00:00.000Z`).toISOString()
          : value === ""
          ? null
          : value,
    }));

    [...Array(10)].forEach((_, index) => {
      if (id === `Action_Od_No${index + 1}`) {
        setSearchValue((prevSearchValue) => ({
          ...prevSearchValue,
          [id]: value,
        }));
      }
    });

  };

  const handleSearch_Order_NoChange = async () => {
    const orderNos = Object.keys(searchValue).reduce((acc, key) => {
      if (searchValue[key] !== "") {
        acc[key] = searchValue[key];
      }
      return acc;
    }, {});

    if (Object.keys(orderNos).length > 0) {
      await searchCalcData(orderNos);
    }
  };

  const handleF9Click = async () => {
    try {
      const orderExists = await searchOrderData(searchOrderNo);
      const result = await Swal.fire({
        title: "ต้องการแก้ไขข้อมูลหรือไม่",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "ใช่",
        cancelButtonText: "ไม่ใช่",
      });

      if (result.isConfirmed) {
       
        await editCalc();
  
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

  useEffect(() => {
    if (Object.keys(searchValue).some((key) => searchValue[key] !== "")) {
      handleSearch_Order_NoChange();
    }
  }, [searchValue]);
 
  const handleF11Click = () => {
    setCalcData((prevCalcData) => {
      const clearedData = {};
  
      for (let i = 1; i <= 10; i++) {
        clearedData[`Action_Od_No${i}`] = "";
        clearedData[`Order_No${i}`] = "";
        clearedData[`Customer_CD${i}`] = "";
        clearedData[`NAV_Name${i}`] = "";
        clearedData[`Quantity${i}`] = "";
        clearedData[`Action_Unit${i}`] = "";
        clearedData[`Od_Progress_CD${i}`] = "";
        clearedData[`Action_Od_Progress_Abb${i}`] = "";
      }
  
      return clearedData;
    });
  
    // ล้างข้อมูลใน searchValue ด้วย
    setSearchValue({});
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
           navigate("/dashboard")
        }
      } catch (error) {
        console.error("Error in handleF12Click:", error);
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "กรุณาลองอีกครั้ง",
          icon: "error",
          confirmButtonText: "ตกลง",
        }); // แจ้งเตือนผู้ใช้เกี่ยวกับข้อผิดพลาด
      }
    };
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col overflow-x-auto flex-grow p-2 bg-white">
          <div className="grid grid-cols-1">
            <div className="flex justify-center items-center py-3">
              <label className="text-xl font-bold">Calc Complete</label>
            </div>
            <hr className="mb-4" />

            <div className="flex mb-5 ml-auto">
              <div className="px-2 w-24 text-end">
                <label className="font-medium text-xs">Date</label>
              </div>
              <input
                type="date"
                className="bg-white border border-gray-500 rounded-md px-2 py-0.5 w-[200px]"
                name="txtProcessing_Date"
                value={currentDate}
                readOnly
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mx-5">
              <div className="flex flex-col items-center">
                <label className="font-medium text-xs mb-2">Calc Date</label>
                <input
                  id="Pd_Calc_Date"
                  value={
                    CalcData?.[`Pd_Calc_Date`]
                      ? new Date(CalcData[`Pd_Calc_Date`])
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  onChange={handleInputChange}
                  type="date"
                  className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-full lg:w-96"
                  name="Pd_Calc_Date"
                />
              </div>
              <div className="flex flex-col items-center">
                <label className="font-medium text-xs mb-2">Input Date</label>
                <input
                  id="Calc_Process_Date"
                  value={
                    CalcData?.[`Calc_Process_Date`]
                      ? new Date(CalcData[`Calc_Process_Date`])
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  onChange={handleInputChange}
                  type="date"
                  className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-full lg:w-96"
                  name="txtInput_Date"
                />
              </div>
            </div>

            <div className="w-full mt-5">
              <div className="w-full mb-5">
                {/* Header row */}
                <div className="flex p-1">
                  <div className="w-[150px] text-center font-medium text-xs">
                    Order_No
                  </div>
                  <div className="w-[150px] text-center font-medium text-xs">
                    Customer
                  </div>
                  <div className="w-[250px] text-center font-medium text-xs">
                    Abb
                  </div>
                  <div className="w-[250px] text-center font-medium text-xs">
                    NAV_Goods_Name
                  </div>
                  <div className="w-52 text-center font-medium text-xs">
                    Qty
                  </div>
                  <div className="w-16 text-center font-medium text-xs">
                    Progress
                  </div>
                </div>
                {[...Array(10)].map((_, index) => {
                  const CustomerKey = CalcData?.[`Customer_CD${index + 1}`];
                  const CustomerAbbForRow = (CustomerData || [])
                    .filter((Customer) => Customer.Customer_CD === CustomerKey)
                    .map((Customer) => Customer.Customer_Abb);
                  const UnitKey = CalcData?.[`Unit_CD${index + 1}`];
                  const UnitAbbForRow = (UnitData || [])
                    .filter((Unit) => Unit.Unit_CD === UnitKey)
                    .map((Unit) => Unit.Unit_Abb);
                  const OdProgressKey =
                    CalcData?.[`Od_Progress_CD${index + 1}`];
                  const OdProgressForRow = (OdProgressData || [])
                    .filter(
                      (OdProgress) =>
                        OdProgress.Od_Progress_CD === OdProgressKey
                    )
                    .map((OdProgress) => OdProgress.Od_Progress_Symbol);
                  const PriceKey = CalcData?.[`Price_CD${index + 1}`];
                  const PriceForRow = (PriceData || [])
                    .filter((Price) => Price.Price_CD === PriceKey)
                    .map((Price) => Price.Price_Symbol);

                  return (
                    <div key={index}>
                      {/* First Row of Inputs */}
                      <div className="flex p-1 gap-2 items-center">
                        <input
                          id={`Action_Od_No${index + 1}`}
                          value={
                            searchValue?.[`Action_Od_No${index + 1}`] || ""
                          }
                          onChange={handleInputChange}
                          type="text"
                          className="bg-[#ccffff] border border-gray-500 rounded-md px-2 w-[150px]"
                        />
                        <input
                          disabled
                          id={`Order_No${index + 1}`}
                          value={CalcData?.[`Order_No${index + 1}`] || ""}
                          onChange={handleInputChange}
                          type="hidden"
                          className="bg-white border border-gray-500 rounded-md px-2 w-[150px]"
                        />
                        <input
                          readOnly
                          id={`Customer_CD${index + 1}`}
                          value={CalcData?.[`Customer_CD${index + 1}`] || ""}
                          onChange={handleInputChange}
                          type="text"
                          className="bg-white border border-gray-500 rounded-md px-2 w-[150px]"
                        />
                        <input
                          readOnly
                          id={`Action_Customer_Abb${index + 1}`}
                          value={CustomerAbbForRow || ""}
                          onChange={handleInputChange}
                          type="text"
                          className="bg-white border border-gray-500 rounded-md px-2 w-[400px]"
                        />
                        <input
                          readOnly
                          id={`NAV_Name${index + 1}`}
                          value={CalcData?.[`NAV_Name${index + 1}`] || ""}
                          onChange={handleInputChange}
                          type="text"
                          className="bg-white border border-gray-500 rounded-md px-2 w-[400px]"
                        />
                        <input
                          readOnly
                          id={`Quantity${index + 1}`}
                          value={CalcData?.[`Quantity${index + 1}`] || ""}
                          onChange={handleInputChange}
                          type="text"
                          className="bg-white border border-gray-500 rounded-md px-2 w-16"
                        />
                        <input
                          readOnly
                          id={`Action_Unit${index + 1}`}
                          value={UnitAbbForRow || ""}
                          onChange={handleInputChange}
                          type="text"
                          className="bg-white border border-gray-500 rounded-md px-2 w-16"
                        />
                        <input
                          readOnly
                          id={`Od_Progress_CD${index + 1}`}
                          value={CalcData?.[`Od_Progress_CD${index + 1}`] || ""}
                          onChange={handleInputChange}
                          type="text"
                          className="bg-white border border-gray-500 rounded-md px-2 w-16"
                        />
                        <input
                          readOnly
                          id={`Action_Od_Progress_Abb${index + 1}`}
                          value={OdProgressForRow || ""}
                          onChange={handleInputChange}
                          type="text"
                          className="bg-white border border-gray-500 rounded-md px-2 w-16"
                        />
                      </div>

                      {/* Second Row with Labels and Inputs */}
                      <div className="flex p-1 gap-2 items-center">
                        <div className="px-2 text-center w-[150px]">
                          <label className="font-medium text-xs">
                            Pd_Remark
                          </label>
                        </div>
                        <input
                          id={`Pd_Remark${index + 1}`}
                          value={CalcData?.[`Pd_Remark${index + 1}`] || ""}
                          onChange={handleInputChange}
                          type="text"
                          className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[200px]"
                        />
                        <div className="px-2 text-center w-[80px]">
                          <label className="font-medium text-xs">QC</label>
                        </div>
                        <input
                          id={`I_Completed_Date${index + 1}`}
                          value={
                            CalcData?.[`I_Completed_Date${index + 1}`]
                              ? new Date(
                                  CalcData[`I_Completed_Date${index + 1}`]
                                )
                                  .toISOString()
                                  .split("T")[0]
                              : ""
                          }
                          onChange={handleInputChange}
                          type="date"
                          className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[140px]"
                        />
                        <div className="px-2 text-center w-[80px]">
                          <label className="font-medium text-xs">Ship</label>
                        </div>
                        <input
                          id={`Shipment_Date${index + 1}`}
                          value={
                            CalcData?.[`Shipment_Date${index + 1}`]
                              ? new Date(CalcData[`Shipment_Date${index + 1}`])
                                  .toISOString()
                                  .split("T")[0]
                              : ""
                          }
                          onChange={handleInputChange}
                          type="date"
                          className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[140px]"
                        />
                        <input
                          readOnly
                          id={`Temp_Shipment${index + 1}`}
                          value={CalcData?.[`Temp_Shipment${index + 1}`] || ""}
                          onChange={handleInputChange}
                          type="text"
                          className="bg-white border border-gray-500 rounded-md px-2 w-16"
                        />
                        <div className="px-2 text-center w-[80px]">
                          <label className="font-medium text-xs">Calc</label>
                        </div>
                        <input
                          id={`Pd_Calc_Date${index + 1}`}
                          value={
                            CalcData?.[`Pd_Calc_Date${index + 1}`]
                              ? new Date(CalcData[`Pd_Calc_Date${index + 1}`])
                                  .toISOString()
                                  .split("T")[0]
                              : ""
                          }
                          onChange={handleInputChange}
                          type="date"
                          className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[140px]"
                        />
                        <div className="px-2 text-center w-[80px]">
                          <label className="font-medium text-xs">Price</label>
                        </div>
                        <select
                          id={`Price_CD${index + 1}`}
                          value={CalcData?.[`Price_CD${index + 1}`] || ""}
                          onChange={handleInputChange}
                          className="border border-gray-500 rounded-md bg-[#ffff99] px-2 w-16"
                        >
                          <option
                            value={CalcData?.[`Price_CD${index + 1}`] || ""}
                          >
                            {CalcData?.[`Price_CD${index + 1}`] || ""}
                          </option>
                          {Array.isArray(PriceData) && PriceData.length > 0 ? (
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
                          readOnly
                          id={`Action_Price_Abb${index + 1}`}
                          value={PriceForRow || ""}
                          onChange={handleInputChange}
                          type="text"
                          className="bg-white border border-gray-500 rounded-md px-2 w-16"
                        />
                        <input
                          id={`Unit_Price${index + 1}`}
                          value={CalcData?.[`Unit_Price${index + 1}`] || ""}
                          onChange={handleInputChange}
                          type="text"
                          className="bg-[#ffff99] border border-gray-500 rounded-md px-2 w-[125px]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white p-3 mt-5">
              <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                <div className="grid grid-cols-4 gap-2">
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                  disabled={buttonState.F1}
                  id="F1">
                    (F1)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                  disabled={buttonState.F2}>
                    (F2)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                  disabled={buttonState.F3}>
                    (F3)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                  disabled={buttonState.F4}>
                    (F4)
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                  disabled={buttonState.F5}>
                    (F5)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                  disabled={buttonState.F6}>
                    (F6)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                  disabled={buttonState.F7}>
                    (F7)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                  disabled={buttonState.F8}>
                    (F8)
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <button
                   className={`bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-auto text-center ${
                    !isSearchOrderNoFilled
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={!isSearchOrderNoFilled}
                    onClick={handleF9Click}
                  >
                    Action
                    <br />
                    実行(F9)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500" 
                  disabled={buttonState.F10}>
                    (F10)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white"
                    id="F11"
                    onClick={handleF11Click}> 
                  
                    NextInput <br />
                    次へ (F11)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
                  disabled={buttonState.F12}
                  id="F12"
                  onClick={handleF12Click}>
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
