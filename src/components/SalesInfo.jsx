import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSorder } from "../hooks/use-sorder";
import { useOrder } from "../hooks/use-order";
import { usePlan } from "../hooks/use-plan";
import Swal from "sweetalert2";

export default function SalesInfo() {
  const navigate = useNavigate();
  const [Search_SOrder_No, setSearch_SOrder_No] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [prevSorderData, setPrevSorderData] = useState(null);
  const generateSpaces = (count) => "\u00A0".repeat(count);

  const [buttonState, setButtonState] = useState({
    F1: true,
    F2: false,
    newAddButton: true,
    F3: false,
    F4: false,
    F5: false,
    F6: false,
    F7: false,
    F8: true,
    F9: false,
    F10: false,
    F11: false,
    F12: true,
  });

  const {
    SearchSorderData,
    setSorderData,
    sorderData,
    odquoteData,
    currencyData,
    createSOrder,
    editSOrders,
    deleteSOrder,
  } = useSorder();

  const {
    WorkgData,
    PriceData,
    WorkerData,
    CustomerData,
    Item1Data,
    ContractDocuData,
    SupplyData,
    SpecificData,
    OdProgressData,
    DeliveryData,
    CoatingData,
    Request1Data,
    Request2Data,
    Request3Data,
  } = useOrder();

  const { UnitsData } = usePlan();

  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;
    let formattedValue = value;

    if (type === "datetime-local" && value) {
      const dateWithCurrentTime = new Date(value);

      dateWithCurrentTime.setHours(dateWithCurrentTime.getHours() + 7);

      const localYear = dateWithCurrentTime.getFullYear();
      const localMonth = String(dateWithCurrentTime.getMonth() + 1).padStart(
        2,
        "0"
      );
      const localDay = String(dateWithCurrentTime.getDate()).padStart(2, "0");
      const localHours = String(dateWithCurrentTime.getHours()).padStart(
        2,
        "0"
      );
      const localMinutes = String(dateWithCurrentTime.getMinutes()).padStart(
        2,
        "0"
      );

      formattedValue = `${localYear}-${localMonth}-${localDay}T${localHours}:${localMinutes}`;
    }

    setSorderData((prevSordertData) => ({
      ...prevSordertData,
      [id]:
        type === "checkbox"
          ? checked
          : type === "datetime-local" && value
          ? formattedValue
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

  const toggleEditMode = () => {
    setIsEditable((prev) => !prev);
  };

  const handleF1Click = () => {
    if (Search_SOrder_No) {
      SearchSorderData(Search_SOrder_No)
        .then((data) => {
          if (!data) {
            Swal.fire({
              icon: "warning",
              title: "ไม่พบข้อมูล",
              text: "กรุณาตรวจสอบหมายเลขคำสั่งซื้ออีกครั้ง",
            });
          } else {
            setButtonState((prevState) => ({
              ...prevState,
              F1: false,
              F2: true,
              newAddButton: true,
              F3: true,
              F4: true,
              F5: true,
              F6: false,
              F7: false,
              F8: true,
              F9: false,
              F10: true,
              F11: true,
              F12: true,
            }));
            setSorderData((prevData) => ({
              ...prevData,
              ...data,
            }));

            if (data.SOrder_No) {
              setSearch_SOrder_No(data.SOrder_No);
            }
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "เกิดข้อผิดพลาด",
            text: error.message || "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์",
          });
        });
    } else {
      Swal.fire({
        icon: "info",
        title: "กรุณาใส่หมายเลขคำสั่งซื้อ",
      });
    }
  };

  const handleF2Click = () => {
    toggleEditMode();
    setIsEditMode(true);
    setIsAddMode(false);

    const sorderNoInput = document.getElementById("Search_SOrder_No");
    sorderNoInput.disabled = true;

    setButtonState((prevState) => ({
      ...prevState,
      F1: false,
      F2: false,
      newAddButton: false,
      F3: false,
      F4: false,
      F5: false,
      F6: false,
      F7: false,
      F8: false,
      F9: true,
      F10: false,
      F11: true,
      F12: true,
    }));
  };

  const handleF3Click = () => {
    toggleEditMode();
    setIsEditMode(false);
    setIsAddMode(true);

    const sorderNoInput = document.getElementById("Search_SOrder_No");
    sorderNoInput.disabled = true;

    setButtonState((prevState) => ({
      ...prevState,
      F1: false,
      F2: false,
      newAddButton: false,
      F3: false,
      F4: false,
      F5: false,
      F6: false,
      F7: false,
      F8: false,
      F9: true,
      F10: false,
      F11: true,
      F12: true,
    }));

    setSorderData("");
    setSearch_SOrder_No("");
  };

  const handleF8Click = async () => {
    try {
      Swal.fire({
        title: "Limit",
        html: "This feature is currently unavialable!<br>ปัจจุบันไม่สามารถใข้งานฟังก์ชั่นนี้ได้ !<br>現在この機能は使用出来7",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      console.error("Error in handleF8Click:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาติดต่อผู้ดูแลระบบ",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
    }
  };

  const handleF9Click = async () => {
    if (!sorderData || !sorderData.SOrder_No) {
      console.error("SOrder_No is missing");
      Swal.fire({
        icon: "error",
        title: "ข้อมูลไม่ครบถ้วน",
        text: "กรุณากรอกข้อมูล SOrder_No ก่อนบันทึก",
      });
      return;
    }

    try {
      const result = await Swal.fire({
        title: "ยืนยันการบันทึกข้อมูล",
        text: "คุณต้องการบันทึกข้อมูลนี้ใช่หรือไม่?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ใช่ !",
        cancelButtonText: "ยกเลิก",
      });

      if (result.isConfirmed) {
        let updatedSorderData = { ...sorderData };

        if (isEditMode) {
          // โหมดแก้ไข
          const response = await editSOrders(updatedSorderData);
          const sorderNoInput = document.getElementById("Search_SOrder_No");
          sorderNoInput.disabled = false;
          if (response) {
            Swal.fire({
              icon: "success",
              title: "บันทึกข้อมูลสำเร็จ!",
              text: "ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว",
            });

            setSorderData(response.sorder);

            setButtonState((prevState) => ({
              ...prevState,
              F1: true,
              F2: false,
              newAddButton: true,
              F3: false,
              F4: false,
              F5: false,
              F6: false,
              F7: false,
              F8: false,
              F9: true,
              F10: false,
              F11: true,
              F12: true,
            }));
          } else {
            Swal.fire({
              icon: "error",
              title: "บันทึกข้อมูลล้มเหลว!",
              text: "ไม่สามารถบันทึกข้อมูลได้ กรุณาลองอีกครั้ง",
            });
          }
        } else if (isAddMode) {
          // โหมดเพิ่มข้อมูล
          const isCreated = await createSOrder(updatedSorderData);
          if (isCreated) {
            Swal.fire({
              icon: "success",
              title: "บันทึกข้อมูลสำเร็จ!",
              text: "ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว",
            });
            setButtonState((prevState) => ({
              ...prevState,
              F1: false,
              F2: true,
              newAddButton: true,
              F3: false,
              F4: false,
              F5: false,
              F6: false,
              F7: false,
              F8: false,
              F9: true,
              F10: true,
              F11: true,
              F12: true,
            }));
          } else {
            Swal.fire({
              icon: "error",
              title: "บันทึกข้อมูลล้มเหลว!",
              text: "ไม่สามารถบันทึกข้อมูลได้ กรุณาลองอีกครั้ง",
            });
          }
        }
      }
    } catch (error) {
      console.error("Error handling F9 click:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด!",
        text: "เกิดปัญหาในการบันทึกข้อมูล กรุณาลองอีกครั้ง",
      });
    }
  };

  useEffect(() => {
    setPrevSorderData(sorderData);
  }, [sorderData]);

  const handleF10Click = async () => {
    if (!sorderData || !sorderData.SOrder_No) {
      console.error("SOrder_No is missing");
      Swal.fire({
        icon: "error",
        title: "ข้อมูลไม่ครบถ้วน",
        text: "กรุณากรอกข้อมูล SOrder_No ก่อนลบ",
      });
      return;
    }

    try {
      const result = await Swal.fire({
        title: "ยืนยันการลบข้อมูล",
        text: "คุณต้องการลบข้อมูลนี้ใช่หรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ใช่ !",
        cancelButtonText: "ยกเลิก",
      });

      if (result.isConfirmed) {
        const deletedSOrder = await deleteSOrder(sorderData);

        if (deletedSOrder) {
          Swal.fire({
            icon: "success",
            title: "ลบข้อมูลสำเร็จ!",
            text: "ข้อมูลของคุณถูกลบเรียบร้อยแล้ว",
          });

          setButtonState((prevState) => ({
            ...prevState,
            F1: true,
            F2: false,
            newAddButton: true,
            F3: false,
            F4: false,
            F5: false,
            F6: false,
            F7: false,
            F8: false,
            F9: true,
            F10: false,
            F11: true,
            F12: true,
          }));

          setSorderData("");
          setSearch_SOrder_No("");
          toggleEditMode();
          const sorderNoInput = document.getElementById("Search_SOrder_No");
          if (sorderNoInput) {
            sorderNoInput.disabled = false;
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "ลบข้อมูลล้มเหลว!",
            text: "ไม่สามารถลบข้อมูลได้ กรุณาลองอีกครั้ง",
          });
        }
      }
    } catch (error) {
      console.error("Error handling F10 click:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด!",
        text: "เกิดปัญหาในการลบข้อมูล กรุณาลองอีกครั้ง",
      });
    }
  };

  const handleF11Click = async () => {
    const sorderNoInput = document.getElementById("Search_SOrder_No");
    sorderNoInput.disabled = false;

    try {
      const result = await Swal.fire({
        title: "Confirm",
        html: "Would you like to make the next input?<br>ป้อนข้อมูลต่อไปหรือไม่ ?<br>次入力しますか?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      });

      if (result.isConfirmed) {
        const confirmCancelEdit = await Swal.fire({
          title: "Reconfirm",
          html: "Editing contents will be cancelled!<br>Really, are you sure?<br>เนื้อหาท่าการแก้ไขจะถูกยกเลิก!<br>แน่ใจจริงๆแล้วใช่หรือไม่?<br>編集中の内容が取消されます!<br>本当に宜しいで",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
        });

        if (confirmCancelEdit.isConfirmed) {
          setSorderData("");
          setSearch_SOrder_No("");
          toggleEditMode();

          setButtonState({
            F1: true,
            F2: false,
            newAddButton: true,
            F3: false,
            F4: false,
            F5: false,
            F6: false,
            F7: false,
            F8: true,
            F9: false,
            F10: false,
            F11: false,
            F12: true,
          });
        }
      }
    } catch (error) {
      console.error("Error in handleF11Click:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาลองอีกครั้ง",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
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
        setSorderData("");
        setSearch_SOrder_No("");
        navigate("/sales");
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

  const workGKey2 = sorderData?.Destination_CD;
  const workGAbbForRow2 = (WorkgData || [])
    .filter((workG) => workG.WorkG_CD === workGKey2)
    .map((workG) => workG.WorkG_Abb);

  const workGKey3 = sorderData?.Pro_Req_Dep_CD;
  const workGNameForRow = (WorkgData || [])
    .filter((workG) => workG.WorkG_CD === workGKey3)
    .map((workG) => workG.WorkG_Name);

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

  const workerKey2 = sorderData?.SO_Reg_Person_CD;
  const workerName1ForRow = (WorkerData || [])
    .filter((worker) => worker.Worker_CD === workerKey2)
    .map((worker) => worker.Worker_Name);

  const workerKey3 = sorderData?.SO_Upd_Person_CD;
  const workerName2ForRow = (WorkerData || [])
    .filter((worker) => worker.Worker_CD === workerKey3)
    .map((worker) => worker.Worker_Name);

  const customerKey = sorderData?.Customer_CD;
  const customerAbbForRow = (CustomerData || [])
    .filter((customer) => customer.Customer_CD === customerKey)
    .map((customer) => customer.Customer_Abb);

  const customerNameKey = sorderData?.Customer_CD;
  const customerNameForRow = (CustomerData || [])
    .filter((customer) => customer.Customer_CD === customerNameKey)
    .map((customer) => customer.Customer_Name);

  const item1Key = sorderData?.Item1_CD;
  const item1NameForRow = (Item1Data || [])
    .filter((item1) => item1.Item1_CD === item1Key)
    .map((item1) => item1.Item1_Name);

  const contractKey = sorderData?.Contract_Docu_CD;
  const contractNameForRow = (ContractDocuData || [])
    .filter((contract) => contract.Contract_Docu_CD === contractKey)
    .map((contract) => contract.Contract_Docu_Name);

  const supplyKey = sorderData?.Supply_CD;
  const supplyNameForRow = (SupplyData || [])
    .filter((supply) => supply.Supply_CD === supplyKey)
    .map((supply) => supply.Supply_Name);

  const specificKey = sorderData?.Specific_CD;
  const specificNameForRow = (SpecificData || [])
    .filter((specific) => specific.Specific_CD === specificKey)
    .map((specific) => specific.Specific_Name);

  const deliveryKey = sorderData?.Delivery_CD;
  const deliveryNameForRow = (DeliveryData || [])
    .filter((delivery) => delivery.Delivery_CD === deliveryKey)
    .map((delivery) => delivery.Delivery_Name);

  const coatingKey = sorderData?.Coating_CD;
  const coatingNameForRow = (CoatingData || [])
    .filter((coating) => coating.Coating_CD === coatingKey)
    .map((coating) => coating.Coating_Name);

  const request1Key = sorderData?.Request1_CD;
  const request1NameForRow = (Request1Data || [])
    .filter((request1) => request1.Request1_CD === request1Key)
    .map((request1) => request1.Request1_Name);

  const request2Key = sorderData?.Request2_CD;
  const request2NameForRow = (Request2Data || [])
    .filter((request2) => request2.Request2_CD === request2Key)
    .map((request2) => request2.Request2_Name);

  const request3Key = sorderData?.Request3_CD;
  const request3AbbForRow = (Request3Data || [])
    .filter((request3) => request3.Request3_CD === request3Key)
    .map((request3) => request3.Request3_Abb);

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
                        onChange={(e) => setSearch_SOrder_No(e.target.value)}
                        type="text"
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
                        disabled={!isEditable}
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
                          disabled={!isEditable}
                          type="text"
                          className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[275px]"
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
                          disabled={!isEditable}
                          className="border-gray-500 border-solid border-2 rounded-md bg-[#72aaf8] w-[50px] h-8"
                        >
                          <option value={sorderData?.Quote_CD}>
                            {sorderData?.Quote_CD}
                          </option>
                          {Array.isArray(odquoteData) &&
                          odquoteData.length > 0 ? (
                            <>
                              <option disabled>CD | Name | Remark</option>
                              {odquoteData.map((item, index) => (
                                <option key={index} value={item.Od_Quote_CD}>
                                  {item.Od_Quote_CD} | {item.Od_Quote_Abb} |{" "}
                                  {item.Od_Quote_Remark}
                                </option>
                              ))}
                            </>
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
                          disabled={!isEditable}
                          className="bg-[#72aaf8] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[213px] ml-2"
                        />
                      </div>
                      {/* End */}
                    </div>

                    <div className="flex items-center -mt-6 ">
                      <button className="bg-slate-300 h-8 w-32 px-5 rounded-lg transition duration-300 cursor-not-allowed">
                        Quote_View
                      </button>
                    </div>

                    <div className="flex items-center -ml-[165px] mt-14">
                      <button className="bg-slate-300  h-8 w-32 px-5 rounded-lg transition duration-300 ml-4 cursor-not-allowed">
                        Quote_Action
                      </button>
                    </div>

                    <div className="flex items-center">
                      <button className="bg-slate-300 h-8 px-5 rounded-lg hover:bg-slate-400 hover:text-white transition duration-300">
                        Quot ➔
                      </button>
                    </div>

                    <div className="flex items-center -mt-8 pl-9">
                      <input
                        defaultChecked
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
                        value={
                          sorderData?.Request_Delivery
                            ? new Date(sorderData.Request_Delivery)
                                .toISOString()
                                .split("T")[0]
                            : ""
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="date"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-46 h-[50px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[105px] pt-3">
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
                        disabled={!isEditable}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                      >
                        <option value={sorderData?.Currency_CD}>
                          {sorderData?.Currency_CD}
                        </option>
                        {Array.isArray(currencyData) &&
                        currencyData.length > 0 ? (
                          <>
                            <option disabled>Currency_CD | Currency_Abb</option>
                            {currencyData.map((item, index) => (
                              <option key={index} value={item.Currency_CD}>
                                {item.Currency_CD} | {item.Currency_Abb}
                              </option>
                            ))}
                          </>
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
                        disabled={!isEditable}
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
                        disabled={!isEditable}
                        type="number"
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
                        disabled={!isEditable}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                      >
                        <option value={sorderData?.Sales_Grp_CD}>
                          {sorderData?.Sales_Grp_CD}
                        </option>
                        {Array.isArray(WorkgData) && WorkgData.length > 0 ? (
                          <>
                            <option disabled>WorkG_CD | WorkG_Abb</option>
                            {WorkgData.map((item, index) => (
                              <option key={index} value={item.WorkG_CD}>
                                {item.WorkG_CD} | {item.WorkG_Abb}
                              </option>
                            ))}
                          </>
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
                        disabled={!isEditable}
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
                        disabled={!isEditable}
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
                        disabled={!isEditable}
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
                        disabled={!isEditable}
                        type="text"
                        className="bg-slate-300 border-solid border-2 border-gray-500 rounded-md py-0.5 w-20 ml-2"
                      />
                    </div>
                    <div className="relative w-[87px] ml-1">
                      <select
                        id="Unit_CD"
                        value={sorderData?.Unit_CD || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#72aaf8] w-full h-8"
                      >
                        <option value={sorderData?.Unit_CD}>
                          {sorderData?.Unit_CD}
                        </option>
                        {Array.isArray(UnitsData) && UnitsData.length > 0 ? (
                          <>
                            <option disabled>Unit_CD | Unit_Name</option>
                            {UnitsData.map((item, index) => (
                              <option key={index} value={item.Unit_CD}>
                                {item.Unit_CD} | {item.Unit_Name}
                              </option>
                            ))}
                          </>
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
                        disabled={!isEditable}
                        type="text"
                        className="bg-[#72aaf8] border-solid border-2 border-gray-500 rounded-md py-0.5 w-20 ml-2"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="relative w-[87px] ml-16">
                      <select
                        id="Price_CD"
                        value={sorderData?.Price_CD || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                      >
                        <option value={sorderData?.Price_CD}>
                          {sorderData?.Price_CD}
                        </option>
                        {Array.isArray(PriceData) && PriceData.length > 0 ? (
                          <>
                            <option disabled>Price_CD | Price_Abb</option>
                            {PriceData.map((item, index) => (
                              <option key={index} value={item.Price_CD}>
                                {item.Price_CD} | {item.Price_Abb}
                              </option>
                            ))}
                          </>
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
                        disabled={!isEditable}
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
                        disabled={!isEditable}
                        type="text"
                        className="bg-slate-300 border-solid border-2 border-gray-500 rounded-md py-0.5 w-[160px] ml-2"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[78px]">
                      <label className="font-bold text-xs">Sales Person</label>
                    </div>
                    <div className="relative w-[87px]">
                      <select
                        id="Sales_Person_CD"
                        value={sorderData?.Sales_Person_CD || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                      >
                        <option value={sorderData?.Sales_Person_CD}>
                          {sorderData?.Sales_Person_CD}
                        </option>
                        {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
                          <>
                            <option disabled>Worker_CD | Worker_Abb</option>
                            {WorkerData.map((item, index) => (
                              <option key={index} value={item.Worker_CD}>
                                {item.Worker_CD} | {item.Worker_Abb}
                              </option>
                            ))}
                          </>
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
                        disabled={!isEditable}
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
                        disabled={!isEditable}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-28 h-8"
                      >
                        <option value={sorderData?.Customer_CD}>
                          {sorderData?.Customer_CD}
                        </option>
                        {Array.isArray(CustomerData) &&
                        CustomerData.length > 0 ? (
                          <>
                            <option disabled>Customer_CD | Customer_Abb</option>
                            {CustomerData.map((item, index) => (
                              <option key={index} value={item.Customer_CD}>
                                {item.Customer_CD} | {item.Customer_Abb}
                              </option>
                            ))}
                          </>
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
                        disabled={!isEditable}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[413px] ml-2"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-6">
                      <label className="font-bold text-xs">
                        Contract Document
                      </label>
                    </div>
                    <div className="relative">
                      <select
                        id="Contract_Docu_CD"
                        value={sorderData?.Contract_Docu_CD || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        className="border-gray-500 border-solid border-2 rounded-md bg-white w-[87px] h-8"
                      >
                        <option value={sorderData?.Contract_Docu_CD}>
                          {sorderData?.Contract_Docu_CD}
                        </option>
                        {Array.isArray(ContractDocuData) &&
                        ContractDocuData.length > 0 ? (
                          <>
                            <option disabled>
                              Currency_CD | Contract_Docu_Name
                            </option>
                            {ContractDocuData.map((item, index) => (
                              <option key={index} value={item.Contract_Docu_CD}>
                                {item.Contract_Docu_CD} |{" "}
                                {item.Contract_Docu_Name}
                              </option>
                            ))}
                          </>
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        readOnly
                        id="Contract_Docu_Name"
                        value={contractNameForRow}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                      <select
                        id="Destination_CD"
                        value={sorderData?.Destination_CD || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        className="border-gray-500 border-solid border-2 rounded-md bg-white w-full h-8"
                      >
                        <option value={sorderData?.Destination_CD}>
                          {sorderData?.Destination_CD}
                        </option>
                        {Array.isArray(WorkgData) && WorkgData.length > 0 ? (
                          <>
                            <option disabled>WorkG_CD | WorkG_Abb</option>
                            {WorkgData.map((item, index) => (
                              <option key={index} value={item.WorkG_CD}>
                                {item.WorkG_CD} | {item.WorkG_Abb}
                              </option>
                            ))}
                          </>
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        readOnly
                        id="Delivery_Name"
                        value={workGAbbForRow2}
                        disabled={!isEditable}
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
                        readOnly
                        id="Customer_Name"
                        value={customerNameForRow}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                      <select
                        id="Supply_CD"
                        value={sorderData?.Supply_CD || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        className="border-gray-500 border-solid border-2 rounded-md bg-white w-[87px] h-8"
                      >
                        <option value={sorderData?.Supply_CD}>
                          {sorderData?.Supply_CD}
                        </option>
                        {Array.isArray(SupplyData) && SupplyData.length > 0 ? (
                          <>
                            <option disabled>Supply_CD | Supply_Abb</option>
                            {SupplyData.map((item, index) => (
                              <option key={index} value={item.Supply_CD}>
                                {item.Supply_CD} | {item.Supply_Abb}
                              </option>
                            ))}
                          </>
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        readOnly
                        id="Supply_Name"
                        value={supplyNameForRow}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                      <select
                        id="Billing_CD"
                        disabled
                        className="border-gray-500 border-solid border-2 rounded-md bg-white w-full h-8"
                      >
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        readOnly
                        type="text"
                        disabled={!isEditable}
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
                        id="Goods_Name"
                        type="text"
                        value={sorderData?.Goods_Name || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[535px] h-[50px]"
                      />
                    </div>
                    {/* End */}

                    {/* Start */}
                    <div className="flex flex-col ml-[410px]">
                      <div className="flex items-center mt-4">
                        <label className="font-bold text-xs text-center pr-2">
                          Order Register Person
                        </label>
                        <select
                          id="SO_Reg_Person_CD"
                          value={sorderData?.SO_Reg_Person_CD || ""}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                          className="border-gray-500 border-solid border-2 rounded-md bg-white w-[87px] h-8"
                        >
                          <option value={sorderData?.SO_Reg_Person_CD}>
                            {sorderData?.SO_Reg_Person_CD}
                          </option>
                          {Array.isArray(WorkerData) &&
                          WorkerData.length > 0 ? (
                            <>
                              <option disabled>
                                Worker_CD | Worker_Name | Worker_Remark
                              </option>
                              {WorkerData.map((item, index) => (
                                <option key={index} value={item.Worker_CD}>
                                  {item.Worker_CD} | {item.Worker_Name} |{" "}
                                  {item.Worker_Remark}
                                </option>
                              ))}
                            </>
                          ) : (
                            <option value="">ไม่มีข้อมูล</option>
                          )}
                        </select>
                        <input
                          readOnly
                          id="SO_Reg_Person_Name"
                          value={workerName1ForRow}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                          type="text"
                          className="ml-2 border-gray-500 border-solid border-2 rounded-md bg-white w-32 h-8"
                        />
                      </div>

                      <div className="flex items-center pl-1 pt-2">
                        <label className="font-bold text-xs text-center pr-2">
                          Order Update Person
                        </label>
                        <select
                          id="SO_Upd_Person_CD"
                          value={sorderData?.SO_Upd_Person_CD || ""}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                          className="border-gray-500 border-solid border-2 rounded-md bg-white w-[87px] h-8"
                        >
                          <option value={sorderData?.SO_Upd_Person_CD}>
                            {sorderData?.SO_Upd_Person_CD}
                          </option>
                          {Array.isArray(WorkerData) &&
                          WorkerData.length > 0 ? (
                            <>
                              <option disabled>
                                Worker_CD | Worker_Name | Worker_Remark
                              </option>
                              {WorkerData.map((item, index) => (
                                <option key={index} value={item.Worker_CD}>
                                  {item.Worker_CD} | {item.Worker_Name} |{" "}
                                  {item.Worker_Remark}
                                </option>
                              ))}
                            </>
                          ) : (
                            <option value="">ไม่มีข้อมูล</option>
                          )}
                        </select>
                        <input
                          readOnly
                          id="SO_Upd_Person_Name"
                          value={workerName2ForRow}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                          type="text"
                          className="ml-2 border-gray-500 border-solid border-2 rounded-md bg-white w-32 h-8"
                        />
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
                        id="Goods_Size"
                        value={sorderData?.Goods_Size || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[535px] h-[50px]"
                      />
                    </div>
                    {/* End */}

                    {/* Start Checkboxes in Column */}
                    <div className="flex flex-col pl-1 -mt-3 space-y-1">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="SO_Pending"
                          checked={sorderData?.SO_Pending || false}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                          className="w-4 h-4 rounded-full"
                        />
                        <label htmlFor="SO_Pending" className="text-sm pl-2">
                          SOrder Pending
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="Temp_Shipment"
                          checked={sorderData?.Temp_Shipment || false}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                          className="w-4 h-4 rounded-full"
                        />
                        <label htmlFor="Temp_Shipment" className="text-sm pl-2">
                          Temporary Shipment
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="Stock"
                          checked={sorderData?.Stock || false}
                          onChange={handleInputChange}
                          disabled={true}
                          className="w-4 h-4 rounded-full"
                        />
                        <label htmlFor="Stock" className="text-sm pl-2">
                          Stock
                        </label>
                      </div>
                    </div>
                    {/* End Checkboxes in Column */}

                    {/* Start */}
                    <div className="flex flex-col pl-[267px] pt-2">
                      <div className="flex items-center pt-4">
                        <label className="font-bold text-xs text-center pr-2 pl-4">
                          Specific Item
                        </label>
                        <select
                          id="Specific_CD"
                          value={sorderData?.Specific_CD || ""}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                          className="border-gray-500 border-solid border-2 rounded-md bg-white w-[87px] h-8"
                        >
                          <option value={sorderData?.Specific_CD}>
                            {sorderData?.Specific_CD}
                          </option>
                          {Array.isArray(SpecificData) &&
                          SpecificData.length > 0 ? (
                            <>
                              <option disabled>
                                Specific_CD | Specific_Name | Specific_Remark
                              </option>
                              {SpecificData.map((item, index) => (
                                <option key={index} value={item.Specific_CD}>
                                  {item.Specific_CD} | {item.Specific_Name} |{" "}
                                  {item.Specific_Remark}
                                </option>
                              ))}
                            </>
                          ) : (
                            <option value="">ไม่มีข้อมูล</option>
                          )}
                        </select>
                        <input
                          readOnly
                          id="Specific_Name"
                          value={specificNameForRow}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                          type="text"
                          className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-56 ml-2"
                        />
                      </div>

                      <div className="flex items-center mt-2 -ml-[6px]">
                        <label className="font-bold text-xs text-center pr-2">
                          SO_Progress CAT
                        </label>
                        <select
                          id="SO_Progress_CD"
                          value={sorderData?.SO_Progress_CD || ""}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                          className="border-gray-500 border-solid border-2 rounded-md bg-white w-[87px] h-8"
                        >
                          <option value={sorderData?.SO_Progress_CD}>
                            {sorderData?.SO_Progress_CD}
                          </option>
                          {Array.isArray(OdProgressData) &&
                          OdProgressData.length > 0 ? (
                            <>
                              <option disabled>
                                Od_Progress_CD | Od_Progress_Name |
                                Od_Progress_Remark
                              </option>
                              {OdProgressData.map((item, index) => (
                                <option key={index} value={item.Od_Progress_CD}>
                                  {item.Od_Progress_CD} |{" "}
                                  {item.Od_Progress_Name} |{" "}
                                  {item.Od_Progress_Remark}
                                </option>
                              ))}
                            </>
                          ) : (
                            <option value="">ไม่มีข้อมูล</option>
                          )}
                        </select>
                        <input
                          readOnly
                          type="text"
                          disabled={!isEditable}
                          defaultValue="None"
                          className="bg-[#ff8989] border-solid border-2 border-gray-500 rounded-md py-0.5 w-56 ml-2"
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
                        id="Od_No_of_Custom"
                        value={sorderData?.Od_No_of_Custom || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[380px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-8">
                      <label className="font-bold text-xs">Tolerance</label>
                    </div>
                    <div className="relative">
                      <input
                        id="Tolerance"
                        value={sorderData?.Tolerance || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[250px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center -mt-1 ml-[202px]">
                      <label className="font-bold text-xs text-center pr-2">
                        Delivery Date CAT
                      </label>
                      <select
                        id="Delivery_CD"
                        value={sorderData?.Delivery_CD || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        className="border-gray-500 border-solid border-2 rounded-md bg-white w-[87px] h-8"
                      >
                        <option value={sorderData?.Delivery_CD}>
                          {sorderData?.Delivery_CD}
                        </option>
                        {Array.isArray(DeliveryData) &&
                        DeliveryData.length > 0 ? (
                          <>
                            <option disabled>
                              Delivery_CD | Delivery_Name | Delivery_Remark
                            </option>
                            {DeliveryData.map((item, index) => (
                              <option key={index} value={item.Delivery_CD}>
                                {item.Delivery_CD} | {item.Delivery_Name} |{" "}
                                {item.Delivery_Remark}
                              </option>
                            ))}
                          </>
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                      <input
                        readOnly
                        id="Delivery_Name"
                        value={deliveryNameForRow}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                        id="Customer_Draw"
                        value={sorderData?.Customer_Draw || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                        id="Sales_Draw"
                        value={sorderData?.Sales_Draw || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[160px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center ml-0.5">
                      <button
                        id="Setting1"
                        disabled={!isEditable}
                        className="bg-slate-300 h-8 px-5 rounded-lg hover:bg-slate-400 hover:text-white transition duration-300"
                      >
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
                        id="Company_Draw"
                        value={sorderData?.Company_Draw || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[415px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-center pl-[27px]">
                      <label className="font-bold text-xs">Sales_Docu</label>
                    </div>
                    <div className="relative">
                      <input
                        id="Sales_Docu"
                        value={sorderData?.Sales_Docu || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[160px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="flex items-center ml-0.5">
                      <button
                        id="Setting2"
                        disabled={!isEditable}
                        className="bg-slate-300 h-8 px-5 rounded-lg hover:bg-slate-400 hover:text-white transition duration-300"
                      >
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
                        id="Material1"
                        value={sorderData?.Material1 || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                        id="H_Treatment1"
                        value={sorderData?.H_Treatment1 || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[410px]">
                      <label className="font-bold text-xs">
                        Confirm Delivery Date
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="Confirm_Delivery"
                        value={
                          sorderData?.Confirm_Delivery
                            ? new Date(sorderData.Confirm_Delivery)
                                .toISOString()
                                .split("T")[0]
                            : ""
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="date"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start Checkboxes in Column */}
                    <div className="flex flex-col pl-20 space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="SO_CAT1"
                          checked={sorderData?.SO_CAT1 || false}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                          className="w-4 h-4 rounded-full"
                        />
                        <label htmlFor="SO_CAT1" className="text-sm pl-2">
                          SOrder Identification1
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="SO_CAT2"
                          checked={sorderData?.SO_CAT2 || false}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                          className="w-4 h-4 rounded-full"
                        />
                        <label htmlFor="SO_CAT2" className="text-sm pl-2">
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
                        id="Material2"
                        value={sorderData?.Material2 || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                        id="H_Treatment2"
                        value={sorderData?.H_Treatment2 || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <label className="font-bold text-xs text-center pr-2 pl-16 pt-1">
                      Item
                    </label>
                    <select
                      id="Item1_CD"
                      value={sorderData?.Item1_CD || ""}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-20 h-8"
                    >
                      <option value={sorderData?.Item1_CD}>
                        {sorderData?.Item1_CD}
                      </option>
                      {Array.isArray(Item1Data) && Item1Data.length > 0 ? (
                        <>
                          <option disabled>Item1_CD | Item1_Name</option>
                          {Item1Data.map((item, index) => (
                            <option key={index} value={item.Item1_CD}>
                              {item.Item1_CD} | {item.Item1_Name}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                    <input
                      readOnly
                      type="text"
                      value={item1NameForRow}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-56 ml-2"
                    />
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[56px]">
                      <label className="font-bold text-xs">SOrder_Date</label>
                    </div>
                    <div className="relative">
                      <input
                        id="SOrder_Date"
                        value={
                          sorderData?.SOrder_Date
                            ? new Date(sorderData.SOrder_Date)
                                .toISOString()
                                .split("T")[0]
                            : ""
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="date"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start Checkboxes in Column */}
                    <div className="flex flex-col pl-20 pt-2 space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="SO_CAT3"
                          checked={sorderData?.SO_CAT3 || false}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                          className="w-4 h-4 rounded-full"
                        />
                        <label htmlFor="SO_CAT3" className="text-sm pl-2">
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
                        id="Material3"
                        value={sorderData?.Material3 || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                        id="H_Treatment3"
                        value={sorderData?.H_Treatment3 || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                        id="Material4"
                        value={sorderData?.Material4 || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                        id="H_Treatment4"
                        value={sorderData?.H_Treatment4 || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                        id="SO_Sales_Date"
                        value={
                          sorderData?.SO_Sales_Date
                            ? new Date(sorderData.SO_Sales_Date)
                                .toISOString()
                                .substring(0, 16)
                            : ""
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="datetime-local"
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
                        id="Material5"
                        value={sorderData?.Material5 || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                        id="H_Treatment5"
                        value={sorderData?.H_Treatment5 || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                      id="Custom_Material"
                      value={sorderData?.Custom_Material || ""}
                      onChange={handleInputChange}
                      disabled={!isEditable}
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
                        id="Pd_Complete_Date"
                        value={
                          sorderData?.Pd_Complete_Date
                            ? new Date(sorderData.Pd_Complete_Date)
                                .toISOString()
                                .substring(0, 16)
                            : ""
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="datetime-local"
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
                        id="Pd_Complete_Qty"
                        value={
                          sorderData?.Pd_Complete_Qty ||
                          sorderData?.Pd_Complete_Qty === 0
                            ? sorderData.Pd_Complete_Qty
                            : 0
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="number"
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
                    <select
                      id="Coating_CD"
                      value={sorderData?.Coating_CD || ""}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border-gray-500 border-solid border-2 rounded-md bg-white w-16 h-8"
                    >
                      <option value={sorderData?.Coating_CD}>
                        {sorderData?.Coating_CD}
                      </option>
                      {Array.isArray(CoatingData) && CoatingData.length > 0 ? (
                        <>
                          <option disabled>Coating_CD | Coating_Name</option>
                          {CoatingData.sort(
                            (a, b) => a.Coating_CD - b.Coating_CD
                          ).map((item, index) => (
                            <option key={index} value={item.Coating_CD}>
                              {item.Coating_CD} | {item.Coating_Name}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                    <div className="relative">
                      <input
                        readOnly
                        id="Coating_Name"
                        value={coatingNameForRow}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[105px] ml-2"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-3">
                      <label className="font-bold text-xs">C1_Detail</label>
                    </div>
                    <div className="relative">
                      <input
                        id="Coating"
                        value={sorderData?.Coating || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[453px]">
                      <label className="font-bold text-xs">QC_Completed</label>
                    </div>
                    <div className="relative">
                      <input
                        id="I_Completed_Date"
                        value={
                          sorderData?.I_Completed_Date
                            ? new Date(sorderData.I_Completed_Date)
                                .toISOString()
                                .substring(0, 16)
                            : ""
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="datetime-local"
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
                        id="I_Complete_Qty"
                        value={
                          sorderData?.I_Complete_Qty ||
                          sorderData?.I_Complete_Qty === 0
                            ? sorderData.I_Complete_Qty
                            : 0
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="number"
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
                    <select
                      id="Request1_CD"
                      value={sorderData?.Request1_CD || ""}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-16 h-8"
                    >
                      <option value={sorderData?.Request1_CD}>
                        {sorderData?.Request1_CD}
                      </option>
                      {Array.isArray(Request1Data) &&
                      Request1Data.length > 0 ? (
                        <>
                          <option disabled>Request1_CD | Request1_Name</option>
                          {Request1Data.map((item, index) => (
                            <option key={index} value={item.Request1_CD}>
                              {item.Request1_CD} | {item.Request1_Name}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                    <div className="relative">
                      <input
                        readOnly
                        id="Request1_Name"
                        value={request1NameForRow}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[105px] ml-2"
                      />
                    </div>
                    <select
                      id="Request2_CD"
                      value={sorderData?.Request2_CD || ""}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-16 h-8 ml-2"
                    >
                      <option value={sorderData?.Request2_CD}>
                        {sorderData?.Request2_CD}
                      </option>
                      {Array.isArray(Request2Data) &&
                      Request2Data.length > 0 ? (
                        <>
                          <option disabled>Request2_CD | Request2_Name</option>
                          {Request2Data.map((item, index) => (
                            <option key={index} value={item.Request2_CD}>
                              {item.Request2_CD} | {item.Request2_Name}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                    <div className="relative">
                      <input
                        readOnly
                        id="Request2_Name"
                        value={request2NameForRow}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[105px] ml-2"
                      />
                    </div>
                    <select
                      id="Request3_CD"
                      value={sorderData?.Request3_CD || ""}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-16 h-8 ml-2"
                    >
                      <option value={sorderData?.Request3_CD}>
                        {sorderData?.Request3_CD}
                      </option>
                      {Array.isArray(Request3Data) &&
                      Request3Data.length > 0 ? (
                        <>
                          <option disabled>
                            Request3_CD | Request3_Abb | Request3_Name
                          </option>
                          {Request3Data.map((item, index) => (
                            <option key={index} value={item.Request3_CD}>
                              {item.Request3_CD} | {item.Request3_Abb} |{" "}
                              {item.Request3_Name}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                    <div className="relative">
                      <input
                        readOnly
                        id="Request3_Abb"
                        value={request3AbbForRow}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                        id="Shipment_Date"
                        value={
                          sorderData?.Shipment_Date
                            ? new Date(sorderData.Shipment_Date)
                                .toISOString()
                                .substring(0, 16)
                            : ""
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="datetime-local"
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
                        id="Shipment_Qty"
                        value={
                          sorderData?.Shipment_Qty ||
                          sorderData?.Shipment_Qty === 0
                            ? sorderData.Shipment_Qty
                            : 0
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="number"
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
                    <select
                      id="Pro_Req_Dep_CD"
                      value={sorderData?.Pro_Req_Dep_CD || ""}
                      onChange={handleInputChange}
                      disabled={!isEditable}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-32 h-8"
                    >
                      <option value={sorderData?.Pro_Req_Dep_CD}>
                        {sorderData?.Pro_Req_Dep_CD}
                      </option>
                      {Array.isArray(WorkgData) && WorkgData.length > 0 ? (
                        <>
                          <option disabled>WorkG_CD | WorkG_Name</option>
                          {WorkgData.map((item, index) => (
                            <option key={index} value={item.WorkG_CD}>
                              {item.WorkG_CD} | {item.WorkG_Name}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                    <div className="relative">
                      <input
                        readOnly
                        id="WorkG_Name"
                        value={workGNameForRow}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[373px] ml-2"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[353px]">
                      <label className="font-bold text-xs">
                        Production_Calc_Date
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="Pd_Calc_Date"
                        value={
                          sorderData?.Pd_Calc_Date
                            ? new Date(sorderData.Pd_Calc_Date)
                                .toISOString()
                                .substring(0, 16)
                            : ""
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="datetime-local"
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
                        id="Ac_Split_Qty"
                        value={
                          sorderData?.Ac_Split_Qty ||
                          sorderData?.Ac_Split_Qty === 0
                            ? sorderData.Ac_Split_Qty
                            : 0
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="number"
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
                        id="SO_Instructions"
                        value={sorderData?.SO_Instructions || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
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
                        id="SO_Reg_Date"
                        value={
                          sorderData?.SO_Reg_Date
                            ? new Date(sorderData.SO_Reg_Date)
                                .toISOString()
                                .substring(0, 16)
                            : ""
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="datetime-local"
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
                        id="Sales_Qty"
                        value={
                          sorderData?.Sales_Qty || sorderData?.Sales_Qty === 0
                            ? sorderData.Sales_Qty
                            : 0
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="number"
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
                        id="SO_Remark"
                        value={sorderData?.SO_Remark || ""}
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="text"
                        className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md py-0.5 w-[505px] h-10"
                      />
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="px-2 w-auto text-end pl-[400px]">
                      <label className="font-bold text-xs">SO_Upd_Date</label>
                    </div>
                    <div className="relative">
                      <input
                        id="SO_Upd_Date"
                        value={
                          sorderData?.SO_Upd_Date
                            ? new Date(sorderData.SO_Upd_Date)
                                .toISOString()
                                .substring(0, 16)
                            : ""
                        }
                        onChange={handleInputChange}
                        disabled={!isEditable}
                        type="datetime-local"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md py-0.5 w-[200px]"
                      />
                    </div>
                    {/* End */}
                  </div>
                  {/* End Group 20 */}
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
                  onClick={handleF1Click}
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  Search <br />
                  検索 (F1)
                </button>
                <button
                  id="F2"
                  onClick={handleF2Click}
                  disabled={!buttonState.F2}
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  Edit <br />
                  編集 (F2)
                </button>
                <button
                  id="newAddButton"
                  onClick={handleF3Click}
                  disabled={!buttonState.newAddButton}
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  New Add <br />
                  追加 (F3)
                </button>
                <button
                  id="F3"
                  disabled={!buttonState.F3}
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  Sub-Con <br />
                  手配 (F3)
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button
                  id="F4"
                  disabled={!buttonState.F4}
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  Plan <br />
                  計画 (F4)
                </button>
                <button
                  id="F5"
                  disabled={!buttonState.F5}
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  AII_P-Sheet <br />
                  全指示書(F5)
                </button>
                <button
                  id="F7"
                  disabled={!buttonState.F7}
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  (F7)
                </button>
                <button
                  id="F8"
                  disabled={!buttonState.F8}
                  onClick={handleF8Click}
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  Master <br />
                  マスタ(F8)
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button
                  id="F9"
                  disabled={!buttonState.F9}
                  onClick={handleF9Click}
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  Save <br />
                  登録(F9)
                </button>
                <button
                  id="F10"
                  disabled={!buttonState.F10}
                  onClick={handleF10Click}
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  Delete <br />
                  削除(F10)
                </button>
                <button
                  id="F11"
                  disabled={!buttonState.F11}
                  onClick={handleF11Click}
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  Nest Input <br />
                  次へ(F11)
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
    </div>
  );
}

const searchPermission = (status) => {
  document.getElementById("Search_SOrder_No").disabled = !status;
};
