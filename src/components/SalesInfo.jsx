import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSorder } from "../hooks/use-sorder";
import { useOrder } from "../hooks/use-order";
import { usePlan } from "../hooks/use-plan";
import Swal from "sweetalert2";
export default function SalesInfo() {
  const [Search_SOrder_No, setSearch_SOrder_No] = useState("");

  const {
    formLoad,
    SearchSorderData,
    setSorderData,
    sorderData,
    odquoteData,
    currencyData,
  } = useSorder();
  const { WorkgData, PriceData, WorkerData, CustomerData } = useOrder();
  const { UnitsData } = usePlan();
  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;
    setSorderData((prevSordertData) => ({
      ...prevSordertData,
      [id]:
        type === "checkbox"
          ? checked
          : type === "date" && value !== ""
          ? new Date(`${value}T00:00:00.000Z`).toISOString()
          : value === ""
          ? null
          : value,
    }));

    if (id === "Search_SOrder_No") {
      setSearch_SOrder_No(value);
    }
  };
  const handleBlur = () => {
    if (Search_SOrder_No) {
      SearchSorderData(Search_SOrder_No)
        .then((data) => {
          if (!data) {
            Swal.fire({
              icon: "warning",
              title: "ไม่พบข้อมูล",
              text: "กรุณาตรวจสอบหมายเลขคำสั่งซื้ออีกครั้ง",
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "เกิดข้อผิดพลาด",
            text: error.message || "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์",
          });
        });
    }
  };
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await formLoad();
        if (data && data.count > 0) {
          searchPermission(true);
        } else {
          await Swal.fire({
            icon: "warning",
            title: "No Data Found",
            html: `
                     None of the received order data is available!<br>
                     ไม่มีข้อมูลยอดรับออเดอร์แม้แต่รายการเดียว!<br>
                     受注データが1件もありません。
                   `,
            confirmButtonText: "OK",
          }).then(() => {
            searchPermission(false);
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while checking the data.",
          confirmButtonText: "OK",
        });
      }
    };

    loadData();
  }, []);
  const quoteKey = sorderData?.Quote_CD;
  const quoteNamesForRow = (odquoteData || [])
    .filter((quote) => quote.Od_Quote_CD === quoteKey)
    .map((quote) => quote.Od_Quote_Abb);

  const currencyKey = sorderData?.Currency_CD;
  const currencyAbbForRow = (currencyData || [])
    .filter((currency) => currency.Currency_CD === currencyKey)
    .map((currency) => currency.Currency_Abb);

  const workGKey = sorderData?.Sales_Grp_CD;
  const workGAbbForRow = (WorkgData || [])
    .filter((workG) => workG.WorkG_CD === workGKey)
    .map((workG) => workG.WorkG_Abb);

  const unitKey = sorderData?.Unit_CD;
  const unitNamesForRow = (UnitsData || [])
    .filter((unit) => unit.Unit_CD === unitKey)
    .map((unit) => unit.Unit_Name);

  const priceKey = sorderData?.Price_CD;
  const priceAbbForRow = (PriceData || [])
    .filter((price) => price.Price_CD === priceKey)
    .map((price) => price.Price_Abb);

  const workerKey = sorderData?.Sales_Person_CD;
  const workerAbbForRow = (WorkerData || [])
    .filter((worker) => worker.Worker_CD === workerKey)
    .map((worker) => worker.Worker_Abb);

  const customerKey = sorderData?.Customer_CD;
  const customerAbbForRow = (CustomerData || [])
    .filter((customer) => customer.Customer_CD === customerKey)
    .map((customer) => customer.Customer_Abb);

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
                        id="Search_SOrder_No"
                        value={Search_SOrder_No}
                        onChange={handleInputChange}
                        type="text"
                        onBlur={handleBlur}
                        maxLength={12}
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
                        id="SOrder_No"
                        value={sorderData?.SOrder_No || ""}
                        onChange={handleInputChange}
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
                          id="Quote_No"
                          value={sorderData?.Quote_No || ""}
                          onChange={handleInputChange}
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
                        <select
                          id="Quote_CD"
                          value={sorderData?.Quote_CD || ""}
                          onChange={handleInputChange}
                          className="border-gray-500 border-solid border-2 rounded-md bg-[#72aaf8] w-28 h-8"
                        >
                          <option value={sorderData?.Quote_CD}>
                            {sorderData?.Quote_CD}
                          </option>
                          {Array.isArray(odquoteData) &&
                          odquoteData.length > 0 ? (
                            odquoteData.map((item, index) => (
                              <option key={index} value={item.Od_Quote_CD}>
                                {item.Od_Quote_CD}
                              </option>
                            ))
                          ) : (
                            <option value="">ไม่มีข้อมูล</option>
                          )}
                        </select>
                        <input
                          readOnly
                          id="Quote_Name"
                          type="text"
                          value={quoteNamesForRow}
                          onChange={handleInputChange}
                          className="bg-[#72aaf8] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[143px] ml-2"
                        />

                        <button className="bg-slate-300  h-8 w-32 px-5 rounded-lg hover:bg-slate-400 hover:text-white transition duration-300 ml-4">
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
                        id="Request_Delivery"
                        value={sorderData?.Request_Delivery || ""}
                        onChange={handleInputChange}
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
                      <select
                        id="Currency_CD"
                        value={sorderData?.Currency_CD || ""}
                        onChange={handleInputChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                      >
                        <option value={sorderData?.Currency_CD}>
                          {sorderData?.Currency_CD}
                        </option>
                        {Array.isArray(currencyData) &&
                        currencyData.length > 0 ? (
                          currencyData.map((item, index) => (
                            <option key={index} value={item.Currency_CD}>
                              {item.Currency_CD}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                    </div>
                    <div className="relative pt-2">
                      <input
                        readOnly
                        id="Currency_Name"
                        value={currencyAbbForRow}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-16 ml-2"
                      />
                    </div>
                    <div className="relative pt-2">
                      <input
                        id="Unit_Price"
                        value={
                          sorderData?.Unit_Price || sorderData?.Unit_Price === 0
                            ? sorderData.Unit_Price
                            : 0
                        }
                        onChange={handleInputChange}
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[105px] ml-2"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-20 pt-2">
                      <label className="font-bold text-xs">Sales Group</label>
                    </div>
                    <div className="relative w-[87px] pt-2">
                      <select
                        id="Sales_Grp_CD"
                        value={sorderData?.Sales_Grp_CD || ""}
                        onChange={handleInputChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                      >
                        <option value={sorderData?.Sales_Grp_CD}>
                          {sorderData?.Sales_Grp_CD}
                        </option>
                        {Array.isArray(WorkgData) && WorkgData.length > 0 ? (
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
                    <div className="relative pt-2">
                      <input
                        readOnly
                        id="Sales_Grp_Name"
                        value={workGAbbForRow}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-52 ml-2"
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
                        id="Pd_Order_Date"
                        value={
                          sorderData?.Pd_Order_Date
                            ? new Date(sorderData.Pd_Order_Date)
                                .toISOString()
                                .split("T")[0]
                            : ""
                        }
                        onChange={handleInputChange}
                        type="date"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-46 h-[50px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="relative pl-10">
                      <input
                        id="Quantity"
                        value={
                          sorderData?.Quantity || sorderData?.Quantity === 0
                            ? sorderData.Quantity
                            : 0
                        }
                        onChange={handleInputChange}
                        type="text"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md py-0.5 w-20"
                      />
                    </div>
                    <div className="relative">
                      <input
                        readOnly
                        id="Remaining_Quantity"
                        value={
                          (sorderData?.Quantity || 0) -
                          (sorderData?.Sales_Qty || 0)
                        }
                        onChange={handleInputChange}
                        type="text"
                        className="bg-slate-300 border-solid border-2 border-gray-500 rounded-md py-0.5 w-20 ml-2"
                      />
                    </div>
                    <div className="relative w-[87px] ml-1">
                      <select
                        id="Unit_CD"
                        value={sorderData?.Unit_CD || ""}
                        onChange={handleInputChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#72aaf8] w-full h-8"
                      >
                        <option value={sorderData?.Unit_CD}>
                          {sorderData?.Unit_CD}
                        </option>
                        {Array.isArray(UnitsData) && UnitsData.length > 0 ? (
                          UnitsData.map((item, index) => (
                            <option key={index} value={item.Unit_CD}>
                              {item.Unit_CD}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        readOnly
                        id="Unit_Name"
                        value={unitNamesForRow}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-[#72aaf8] border-solid border-2 border-gray-500 rounded-md py-0.5 w-20 ml-2"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="relative w-[87px] ml-12">
                      <select
                        id="Price_CD"
                        value={sorderData?.Price_CD || ""}
                        onChange={handleInputChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                      >
                        <option value={sorderData?.Price_CD}>
                          {sorderData?.Price_CD}
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
                    </div>
                    <div className="relative">
                      <input
                        readOnly
                        id="Price_Name"
                        value={priceAbbForRow}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-20 ml-2"
                      />
                    </div>
                    <div className="relative">
                      <input
                        readOnly
                        id="Price"
                        value={
                          (sorderData?.Quantity || 0) *
                          (sorderData?.Unit_Price || 0)
                        }
                        onChange={handleInputChange}
                        type="text"
                        className="bg-slate-300 border-solid border-2 border-gray-500 rounded-md py-0.5 w-[152px] ml-2"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[59px]">
                      <label className="font-bold text-xs">Sales Person</label>
                    </div>
                    <div className="relative w-[87px]">
                      <select
                        id="Sales_Person_CD"
                        value={sorderData?.Sales_Person_CD || ""}
                        onChange={handleInputChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                      >
                        <option value={sorderData?.Sales_Person_CD}>
                          {sorderData?.Sales_Person_CD}
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
                    <div className="relative">
                      <input
                        readOnly
                        id="Sales_Person_Name"
                        value={workerAbbForRow}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-52 ml-2"
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
                      <select
                        id="Customer_CD"
                        value={sorderData?.Customer_CD || ""}
                        onChange={handleInputChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-28 h-8"
                      >
                        <option value={sorderData?.Customer_CD}>
                          {sorderData?.Customer_CD}
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
                    </div>
                    <div className="relative">
                      <input
                        readOnly
                        id="Customer_Abb"
                        value={customerAbbForRow}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[420px] ml-2"
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
                      <select
                        id="Contract_Docu_CD"
                        value={sorderData?.Contract_Docu_CD || ""}
                        onChange={handleInputChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-white w-[87px] h-8"
                      >
                        <option value={sorderData?.Contract_Docu_CD}>{sorderData?.Contract_Docu_CD}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[167px] ml-2"
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
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-52 ml-2"
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
                    <div className="px-2 w-auto text-center pl-8">
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
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[167px] ml-2"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[90px]">
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
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-52 ml-2"
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
                          className="bg-[#ff8989] border-solid border-2 border-gray-500 rounded-md py-0.5 w-56 ml-2"
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
                          className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-56 ml-2"
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
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-56 ml-2"
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
                      className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-44 ml-2"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[94px]">
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
                    <div className="px-2 w-auto text-end pl-[455px]">
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
                    <div className="px-2 w-auto text-end pl-[55px]">
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
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[105px] ml-2"
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
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[105px] ml-2"
                      />
                    </div>
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-16 h-8 ml-2">
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[105px] ml-2"
                      />
                    </div>
                    <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-16 h-8 ml-2">
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <div className="relative">
                      <input
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[105px] ml-2"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[352px]">
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
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[380px] ml-2"
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
                    <div className="px-2 w-auto text-end pl-[400px]">
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
                    <div className="px-2 w-auto text-end pl-[400spx]">
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

const searchPermission = (status) => {
  document.getElementById("Search_SOrder_No").disabled = !status;
};
const editPermission = (status) => {
  document.getElementById("SOrder_No").disabled = !status;
  document.getElementById("Request_Delivery").disabled = !status;
  document.getElementById("Pd_Order_Date").disabled = !status;
  document.getElementById("Confirm_Delivery").disabled = !status;
  document.getElementById("SOrder_Date").disabled = !status;
  document.getElementById("SO_Pending").disabled = !status;
  document.getElementById("Temp_Shipment").disabled = !status;
  document.getElementById("SO_CAT1").disabled = !status;
  document.getElementById("SO_CAT2").disabled = !status;
  document.getElementById("SO_CAT3").disabled = !status;
  document.getElementById("Goods_Name").disabled = !status;
  document.getElementById("Goods_Size").disabled = !status;
  document.getElementById("Customer_Draw").disabled = !status;
  document.getElementById("Company_Draw").disabled = !status;
  document.getElementById("Quantity").disabled = !status;
  document.getElementById("Unit_CD").disabled = !status;
  document.getElementById("Currency_CD").disabled = !status;
  document.getElementById("SO_Instructions").disabled = !status;
  document.getElementById("SO_Remark").disabled = !status;
  document.getElementById("Sales_Grp_CD").disabled = !status;
  document.getElementById("Sales_Person_CD").disabled = !status;
  document.getElementById("Request1_CD").disabled = !status;
  document.getElementById("Request2_CD").disabled = !status;
  document.getElementById("Request3_CD").disabled = !status;
  document.getElementById("Material1").disabled = !status;
  document.getElementById("H_Treatment1").disabled = !status;
  document.getElementById("Material2").disabled = !status;
  document.getElementById("H_Treatment2").disabled = !status;
  document.getElementById("Material3").disabled = !status;
  document.getElementById("H_Treatment3").disabled = !status;
  document.getElementById("Material4").disabled = !status;
  document.getElementById("H_Treatment4").disabled = !status;
  document.getElementById("Material5").disabled = !status;
  document.getElementById("H_Treatment5").disabled = !status;
  document.getElementById("Tolerance").disabled = !status;
  document.getElementById("Coating_CD").disabled = !status;
  document.getElementById("Coating_Name").disabled = !status;
  document.getElementById("Coating").disabled = !status;
  document.getElementById("Quote_No").disabled = !status;
  document.getElementById("Quote_CD").disabled = !status;
  document.getElementById("Item1_CD").disabled = !status;
  document.getElementById("Custom_Material").disabled = !status;
  document.getElementById("Od_No_of_Custom").disabled = !status;
  document.getElementById("SO_Sales_Date").disabled = !status;
  document.getElementById("Pd_Complete_Date").disabled = !status;
  document.getElementById("I_Completed_Date").disabled = !status;
  document.getElementById("Shipment_Date").disabled = !status;
  document.getElementById("Pd_Calc_Date").disabled = !status;
  document.getElementById("SO_Reg_Date").disabled = !status;
  document.getElementById("SO_Upd_Date").disabled = !status;
  document.getElementById("Customer_CD").disabled = !status;
  document.getElementById("Supply_CD").disabled = !status;
  document.getElementById("Destination_CD").disabled = !status;
  document.getElementById("Contract_Docu_CD").disabled = !status;
  document.getElementById("Price_CD").disabled = !status;
  document.getElementById("Unit_Price").disabled = !status;
  document.getElementById("SO_Reg_Person_CD").disabled = !status;
  document.getElementById("SO_Upd_Person_CD").disabled = !status;
  document.getElementById("Specific_CD").disabled = !status;
  document.getElementById("SO_Progress_CD").disabled = !status;
  document.getElementById("Delivery_CD").disabled = !status;
  document.getElementById("Pd_Complete_Qty").disabled = !status;
  document.getElementById("I_Complete_Qty").disabled = !status;
  document.getElementById("Shipment_Qty").disabled = !status;
  document.getElementById("Ac_Split_Qty").disabled = !status;
  document.getElementById("Sales_Qty").disabled = !status;
  document.getElementById("Sales_Draw").disabled = !status;
  document.getElementById("Sales_Draw_Set").disabled = !status;
  document.getElementById("Sales_Docu").disabled = !status;
  document.getElementById("Sales_Docu_Set").disabled = !status;
  document.getElementById("Quote_No_Reflect").disabled = !status;
};
