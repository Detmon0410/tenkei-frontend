import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../hooks/use-order";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function OrderInfo() {
  const navigate = useNavigate();
  const [searchOrderNo, setSearchOrderNo] = useState("");
  const [OrderNo, setOrderNo] = useState("");
  const [autoYearChange, setAutoYearChange] = useState(false);
  const [customerDraw, setCustomerDraw] = useState("");
  const [companyDraw, setCompanyDraw] = useState("");

 

  const handleAutoYearChange = (event) => {
    setAutoYearChange(event.target.checked);
  };

  const {
    CustomerData,
    WorkerData,
    WorkergData,
    orderData,
    searchOrderData,
    fetchOrders,
    editOrders,
    deleteOrder,
    setOrderData,
    createOrder,
  } = useOrder();

  // ฟังก์ชันสำหรับตรวจสอบว่าฟิลด์ว่างหรือไม่
  const confirmWhenSaveNull = (fieldName, defaultValue) => {
    const value = document.getElementById(fieldName).value;
    return value !== defaultValue && value.trim() !== "";
  };

  const handleF1Click = () => {
    if (searchOrderNo) {
      // ตรวจสอบว่ามีการกรอกหมายเลขคำสั่งซื้อ
      searchOrderData(searchOrderNo); // เรียกฟังก์ชันค้นหาข้อมูล
    } else {
      // ใช้ SweetAlert 2 แทน alert
      Swal.fire({
        title: "ข้อมูลไม่ถูกต้อง",
        text: "กรุณากรอกหมายเลขคำสั่งซื้อก่อน",
        icon: "warning",
        confirmButtonText: "ตกลง",
      });
    }
  };

  const handleF2Click = () => {
    try {
      // เรียกใช้ฟังก์ชัน Search_Permission
      searchPermission(false);

      // เรียกใช้ฟังก์ชัน Edit_Permission
      editPermission(true);

      const orderNoInput = document.getElementById("Order_No");

      orderNoInput.disabled = true;
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert("Error occurs when F2_Click\nPlease contact system administrator.");
    }
  };

  const handleF3Click = () => {
    try {
      searchPermission(false);
      editPermission(true);

      toggleButtons(false, true, true, false);
    } catch (error) {
      // จัดการข้อผิดพลาด
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาลองอีกครั้ง",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
      console.error("Error in F3_Click:", error); // แสดงข้อผิดพลาดใน Console
    }
  };

  const handleF4Click = () => {
    try {
      // ส่งค่า Search_Order_No ไปที่หน้า /plan-info
      navigate("/purchase-info", { state: { searchOrderNo: searchOrderNo } });
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert("Error occurs when F4_Click\nPlease contact system administrator.");
    }
  };

  const handleF5Click = () => {
    try {
      // ส่งค่า Search_Order_No ไปที่หน้า /plan-info
      navigate("/plan-info", { state: { OrderNo: orderData.Order_No } });
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert("Error occurs when F5_Click\nPlease contact system administrator.");
    }
  };

  const handleF6Click = async () => {
    try {
      // ตรวจสอบว่า OrderNo เป็นค่าว่างหรือไม่
      if (!OrderNo) {
        await Swal.fire({
          title: "ข้อมูลไม่ถูกต้อง",
          text: "(Order_No) เป็นค่าว่าง",
          icon: "warning",
          confirmButtonText: "ตกลง",
        }); // แสดงข้อความเตือนถ้า OrderNo ว่าง
        return; // ออกจากฟังก์ชัน
      }
      // ส่ง OrderNo เป็นพารามิเตอร์ใน URL
      navigate(`/reports/RD_Process_SheetPage/${orderData.Order_No}`, {
        state: { OrderNo },
      });
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert("Error occurs when F6_Click\nPlease contact system administrator.");
    }
  };

  const handleF9Click = async () => {
    try {
      // ตรวจสอบว่าฟิลด์ Order_No ถูกกรอกหรือไม่
      if (!confirmWhenSaveNull("Order_No", "")) {
        await Swal.fire({
          title: "ข้อมูลไม่ถูกต้อง",
          text: "(Order_No) เป็นค่าว่าง",
          icon: "warning",
          confirmButtonText: "ตกลง",
        });
        return; // ถ้าไม่ถูกกรอกให้หยุดทำงาน
      }

      // ตรวจสอบว่าฟิลด์ Quantity ถูกกรอกหรือไม่
      if (!confirmWhenSaveNull("Quantity", 0)) {
        await Swal.fire({
          title: "ข้อมูลไม่ถูกต้อง",
          text: "(Quantity) เป็นค่าว่าง",
          icon: "warning",
          confirmButtonText: "ตกลง",
        });
        return; // ถ้าไม่ถูกกรอกให้หยุดทำงาน
      }

       // ตรวจสอบว่ามี Order_No นี้อยู่ในฐานข้อมูลหรือไม่
       const orderExists = await searchOrderData(orderData.Order_No);

       if (orderExists) {
      
      const result = await Swal.fire({
        title: "ต้องการแก้ไขบันทึกข้อมูลหรือไม่",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "ใช่",
        cancelButtonText: "ไม่ใช่",
      });

      if (result.isConfirmed) {
        // ดึงค่าจากฟิลด์ Order_No ที่มี id="Order_No"
        const orderNo = document.getElementById("Order_No").value;

        // ดึงวันที่และเวลาปัจจุบัน
        const now = new Date();
        const formattedDate = now.toISOString(); // รูปแบบวันที่เป็น ISO 8601 เช่น "2024-10-23T08:30:00.000Z"

        // อัปเดตฟิลด์ Od_Upd_Date ในอินพุตให้แสดงวันที่ปัจจุบัน
        document.getElementById("Od_Upd_Date").value = formattedDate;
        orderData.Od_Upd_Date = formattedDate;

        await editOrders(orderNo);

        // ปิดการแก้ไขสิทธิ์
        editPermission(false);

        // ปิดปุ่ม F9
        document.getElementById("saveButton").disabled = true;
      } }   else { 

        const result = await Swal.fire({
        title: "ต้องการบันทึกข้อมูลหรือไม่",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "ใช่",
        cancelButtonText: "ไม่ใช่",
      });

      if (result.isConfirmed) {
  

        // ดึงวันที่และเวลาปัจจุบัน
        const now = new Date();
        const formattedDate = now.toISOString(); // รูปแบบวันที่เป็น ISO 8601 เช่น "2024-10-23T08:30:00.000Z"

        // อัปเดตฟิลด์ Od_Upd_Date ในอินพุตให้แสดงวันที่ปัจจุบัน
        document.getElementById("Od_Upd_Date").value = formattedDate;
        orderData.Od_Upd_Date = formattedDate;

        await createOrder();

        // ปิดการแก้ไขสิทธิ์
        editPermission(false);

        // ปิดปุ่ม F9
        document.getElementById("saveButton").disabled = true;
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

      // ตรวจสอบว่าผู้ใช้เลือก "ยืนยัน" หรือไม่
      if (result.isConfirmed) {
        const response = await deleteOrder(searchOrderNo); // เรียกใช้ฟังก์ชันลบคำสั่ง
        console.log("Delete result:", response);

        // แสดงข้อความว่าลบเรียบร้อยแล้ว
        Swal.fire(
          "ลบเรียบร้อย!",
          "ข้อมูลของคุณได้ถูกลบเรียบร้อยแล้ว.",
          "success"
        );
      }
    } catch (error) {
      // จัดการข้อผิดพลาด
      alert(
        "Error occurs when F10_Click\nPlease contact system administrator."
      );
    }
  };
  const handleF11Click = async () => {
    try {
      // ปิดการค้นหาและการแก้ไข
      searchPermission(false);
      editPermission(false);

      // ดึงข้อมูลคำสั่งซื้อจาก API
      const response = await fetchOrders(); // เรียกใช้ fetchOrders เพื่อดึงข้อมูลการสั่งซื้อ

      // ตรวจสอบว่ามีข้อมูลใน response หรือไม่
      if (!response || !response.data || response.data.length === 0) {
        Swal.fire({
          title: "ไม่มีข้อมูลคำสั่งซื้อ",
          icon: "warning",
          confirmButtonText: "ตกลง",
        }); // แจ้งเตือนผู้ใช้ว่าข้อมูลไม่มี
      } else {
        searchPermission(true);
      }
    } catch (error) {
      console.error("Error in handleF11Click:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาลองอีกครั้ง",
        icon: "error",
        confirmButtonText: "ตกลง",
      }); // แจ้งเตือนผู้ใช้เกี่ยวกับข้อผิดพลาด
    }
  };
  
  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;

    setOrderData((prevOrderData) => ({
        ...prevOrderData,
        [id]: type === "checkbox" ? checked : value === "" ? null : value,
    }));

    if (id === "Order_No") {
      searchOrderData(value); 
  }
};

  const handleRequestDeliveryChange = (newDeliveryDate) => {
    handleInputChange({
      target: { id: "Request_Delivery", value: newDeliveryDate },
    });
  };

  const handleProductDeliveryChange = (newProductDeliveryDate) => {
    handleInputChange({
      target: { id: "Product_Delivery", value: newProductDeliveryDate },
    });
  };

  const handleConfirmDeliveryChange = (newConfirmDeliveryDate) => {
    handleInputChange({
      target: { id: "Confirm_Delivery", value: newConfirmDeliveryDate },
    });
  };

  const handleNAVDeliveryChange = (newNAVDeliveryDate) => {
    handleInputChange({
      target: { id: "NAV_Delivery", value: newNAVDeliveryDate },
    });
  };

  const handleDeliveryDateUpdate = (deliveryDateStr, handleChange) => {
    // แปลงวันที่จากรูปแบบ DD/MM/YYYY เป็น Date object
    const parts = deliveryDateStr.split("/"); // แบ่งวันที่ออกเป็นส่วน ๆ
    const deliveryDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`); // สร้าง Date object โดยใช้รูปแบบ YYYY-MM-DD

    const now = new Date(); // วันที่ปัจจุบัน
    const differenceInDays = Math.floor(
      (now - deliveryDate) / (1000 * 60 * 60 * 24)
    ); // คำนวณความแตกต่างในวัน

    // ตรวจสอบว่าความแตกต่างมากกว่า 183 วันหรือไม่
    if (differenceInDays > 183) {
      const newDeliveryDate = new Date(
        deliveryDate.setFullYear(deliveryDate.getFullYear() + 1)
      ); // เพิ่มปี

      // แปลงวันที่ใหม่กลับไปเป็น DD/MM/YYYY
      const formattedNewDeliveryDate = `${newDeliveryDate.getFullYear()}-${String(
        newDeliveryDate.getMonth() + 1
      ).padStart(2, "0")}-${String(newDeliveryDate.getDate()).padStart(
        2,
        "0"
      )}`;
      // เรียกใช้ฟังก์ชันสำหรับการเปลี่ยนแปลงวันที่
      handleChange(formattedNewDeliveryDate);
    }
  };

  const handleRequestDeliveryAfterUpdate = () => {
    if (autoYearChange) {
      handleDeliveryDateUpdate(
        orderData.Request_Delivery,
        handleRequestDeliveryChange
      );
      handleDeliveryDateUpdate(
        orderData.Product_Delivery,
        handleProductDeliveryChange
      );
      handleDeliveryDateUpdate(
        orderData.Confirm_Delivery,
        handleConfirmDeliveryChange
      );
      handleDeliveryDateUpdate(orderData.NAV_Delivery, handleNAVDeliveryChange);
    }
  };

  useEffect(() => {
    if (
      autoYearChange &&
      orderData?.Request_Delivery &&
      orderData?.Product_Delivery &&
      orderData?.Confirm_Delivery &&
      orderData?.NAV_Delivery
    ) {
      handleRequestDeliveryAfterUpdate();
    }
  }, [
    autoYearChange,
    orderData?.Request_Delivery,
    orderData?.Product_Delivery,
    orderData?.Confirm_Delivery,
    orderData?.NAV_Delivery,
  ]);

  const handleProductName = (newProductName) => {
    handleInputChange({
      target: { id: "Product_Name", value: newProductName },
    });
  };

  const handleGoods_Name_Reflect = () => {
    handleProductName(orderData.NAV_Name); // เรียกใช้ฟังก์ชันเพื่ออัปเดต Product_Name ด้วยค่า navName
  };

  const handlenavSizeName = (newnavSizeName) => {
    handleInputChange({
      target: { id: "Product_Size", value: newnavSizeName },
    });
  };

  const handleGoods_Size_Reflect = () => {
    handlenavSizeName(orderData.NAV_Size);
  };

  const handProductDraw = (newProductDraw) => {
    handleInputChange({
      target: { id: "Product_Draw", value: newProductDraw },
    });
  };

  const handleConfirm = () => {
    const customer = orderData.Customer_Draw || customerDraw;
    const company = orderData.Company_Draw || companyDraw;

    if (customer) {
      if (company) {
        handProductDraw(`Com:${company}/Cus:${customer}`);
      } else {
        handProductDraw(`Cus:${customer}`);
      }
    } else {
      if (company) {
        handProductDraw(`Com:${company}`);
      } else {
        handProductDraw(null);
      }
    }
  };

  const handleDrawNoReflectClick = () => {
    const message = `
      Company Draw: ${orderData.Customer_Draw}
      Customer Draw: ${orderData.Company_Draw}
      Are you sure you want to proceed?
    `;

    Swal.fire({
      title: "Confirm Action",
      text: message,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        handleConfirm(); // เรียกใช้ฟังก์ชันยืนยันถ้าผู้ใช้กด Yes
      }
    });
  };

  const handPdTargetQty = (newPdTargetQty) => {
    handleInputChange({
      target: { id: "Pd_Target_Qty", value: newPdTargetQty },
    });
  };

  const handleQuantityChange = async (newQuantity) => {
    const result = await Swal.fire({
      title: "ยืนยันการเปลี่ยนแปลง",
      text: "คุณต้องการอัปเดตจำนวนหรือไม่?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "ใช่",
      cancelButtonText: "ไม่",
    });

    if (result.isConfirmed) {
      handPdTargetQty(orderData.Quantity); // ตั้งค่าจำนวนเป้าหมายเป็นค่าที่ใหม่
    } else {
      handPdTargetQty(orderData.Pd_Target_Qty); // ตั้งค่าจำนวนเป้าหมายกลับเป็นค่าเดิม
    }
  };

  useEffect(() => {
    if (orderData?.Quantity) {
      handleQuantityChange();
    }
  }, [orderData?.Quantity]);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5 py-4">
        {/* Search Order No */}
        <div className="flex gap-2 items-center">
          <label htmlFor="Search_Order_No" className="whitespace-nowrap">
            Search Order No
          </label>
          <input
            disabled
            id="Search_Order_No"
            value={searchOrderNo || ""}
            onChange={(e) => setSearchOrderNo(e.target.value)}
            type="text"
            className="bg-[#ccffff] border-2 border-gray-500 rounded-md px-2 w-full"
            placeholder="Search Order Number"
          />
        </div>

        {/* Order No */}
        <div className="flex gap-2 items-center">
          <label htmlFor="Order_No" className="whitespace-nowrap">
            Order No.
          </label>
          {orderData ? (
            <input
              disabled
              id="Order_No"
              value={orderData.Order_No || ""}
              onChange={handleInputChange}
              type="text"
              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1"
            />
          ) : (
            <input
              disabled
              id="Order_No"
              value={orderData?.Order_No || ""}
              onChange={handleInputChange}
              type="text"
              className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1"
            />
          )}
        </div>

        {/* Production Group */}
        <div className="flex gap-2 items-center">
          <label htmlFor="Product_Grp_CD" className="whitespace-nowrap">
            Production Group
          </label>
          {orderData ? (
            <select
              id="Product_Grp_CD"
              className="border-2 border-gray-500 rounded-md bg-white px-2 w-full"
            >
              <option value={orderData.Product_Grp_CD}>
                {orderData.Product_Grp_CD}
              </option>
              {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
                WorkergData.map((worker) => (
                  <option key={worker.WorkG_CD} value={worker.WorkG_CD}>
                    {worker.WorkG_CD}
                  </option>
                ))
              ) : (
                <option value="">No Worker Groups Available</option> // แสดงข้อความถ้าไม่มีข้อมูล
              )}
            </select>
          ) : (
            <select
              id="Product_Grp_CD"
              value={orderData?.Product_Grp_CD || ""}
              onChange={handleInputChange}
              className="border-2 border-gray-500 rounded-md bg-white px-2 w-full"
            >
              {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
                WorkergData.map((worker) => (
                  <option key={worker.WorkG_CD} value={worker.WorkG_CD}>
                    {worker.WorkG_CD}
                  </option>
                ))
              ) : (
                <option value="">No Worker Groups Available</option> // แสดงข้อความถ้าไม่มีข้อมูล
              )}
            </select>
          )}

          <input
            disabled
            id="Product_Grp_Input"
            type="text"
            className="bg-white border-2 border-gray-500 rounded-md px-2 w-full"
            placeholder="Enter Group"
          />
        </div>

        {/* Auto Year Change */}
        <div className="flex gap-2 items-center col-span-1 ">
          <input
            id="Auto_Year_Change"
            checked={autoYearChange}
            onChange={() => setAutoYearChange(!autoYearChange)}
            type="checkbox"
            className="w-6 h-6"
          />
          <label htmlFor="Auto_Year_Change" className="whitespace-nowrap">
            Auto Year Change Group
          </label>
        </div>
      </div>

      <hr className="border-y-[1px] border-gray-300" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mx-5 py-4">
        <div className="grid grid-cols-1">
          <div className="flex gap-1">
            <div className="w-7/12 content-around">
              {/* Request Delivery Date Group */}
              <div className="flex items-center mb-8">
                <label className="w-4/6 text-xs font-semibold">
                  Request Delivery Date
                </label>
                <div>
                  {orderData ? (
                    <input
                      disabled
                      id="Request_Delivery"
                      value={
                        orderData.Request_Delivery
                          ? orderData.Request_Delivery.substring(0, 10)
                          : ""
                      }
                      onChange={(event) => handleInputChange(event)}
                      type="date"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="Request_Delivery"
                      value={
                        orderData?.Request_Delivery
                          ? orderData.Request_Delivery.substring(0, 10)
                          : ""
                      }
                      onChange={(event) => handleInputChange(event)}
                      type="date"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center mb-8">
                <label className="w-4/6 text-xs font-semibold">
                  Production Delivery Date
                </label>
                <div>
                  {orderData ? (
                    <input
                      disabled
                      id="Product_Delivery"
                      value={
                        orderData.Product_Delivery
                          ? orderData.Product_Delivery.substring(0, 10)
                          : ""
                      }
                      onChange={(event) => handleInputChange(event)}
                      type="date"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      value={
                        orderData?.Product_Delivery
                          ? orderData.Product_Delivery.substring(0, 10)
                          : ""
                      }
                      onChange={(event) => handleInputChange(event)}
                      id="Product_Delivery"
                      type="date"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center mb-8  ">
                <label className="w-4/6 text-xs font-semibold">
                  Comfirm Delivery Date
                </label>
                <div>
                  {orderData ? (
                    <input
                      disabled
                      id="Confirm_Delivery"
                      value={
                        orderData.Confirm_Delivery
                          ? orderData.Confirm_Delivery.substring(0, 10)
                          : ""
                      }
                      onChange={(event) => handleInputChange(event)}
                      type="date"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="Confirm_Delivery"
                      value={
                        orderData?.Confirm_Delivery
                          ? orderData.Confirm_Delivery.substring(0, 10)
                          : ""
                      }
                      onChange={(event) => handleInputChange(event)}
                      type="date"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <label className="w-4/6 text-xs font-semibold">
                  NAV Delivery Date
                </label>
                <div>
                  {orderData ? (
                    <input
                      disabled
                      id="NAV_Delivery"
                      value={
                        orderData.NAV_Delivery
                          ? orderData.NAV_Delivery.substring(0, 10)
                          : ""
                      }
                      onChange={(event) => handleInputChange(event)}
                      type="date"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="NAV_Delivery"
                      value={
                        orderData?.NAV_Delivery
                          ? orderData.NAV_Delivery.substring(0, 10)
                          : ""
                      }
                      onChange={(event) => handleInputChange(event)}
                      type="date"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="w-5/12 content-around">
              <div className="flex items-center mb-3 gap-2">
              {orderData ? (
                <input
                  disabled
                  id="Od_Pending"
                  value={!!orderData.Od_Pending || ""}
                  onChange={handleInputChange}
                  type="checkbox"
                  className="w-6 h-6"
                />
              ) : (
                <input
                disabled
                id="Od_Pending"
                value={!!orderData?.Od_Pending || ""}
                onChange={handleInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              )}
                <label className="w-3/5 text-xs font-semibold">
                  Order Pending
                </label>
              </div>
              <div className="flex items-center mb-3 gap-2">
              {orderData ? (
                <input
                  disabled
                  id="Temp_Shipment"
                  value={!!orderData.Temp_Shipment || ""}
                  onChange={handleInputChange}
                  type="checkbox"
                  className="w-6 h-6"
                />
              ) : (
                <input
                disabled
                id="Temp_Shipment"
                value={!!orderData?.Temp_Shipment || ""}
                onChange={handleInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              )}
                <label className="w-3/5 text-xs font-semibold">
                  Temporary Shipment
                </label>
              </div>
              <div className="flex items-center mb-3 gap-2">
              {orderData ? (
                <input
                  disabled
                  id="Unreceived"
                  value={!!orderData.Unreceived || ""}
                  onChange={handleInputChange}
                  type="checkbox"
                  className="w-6 h-6"
                />
              ) : (
                <input
                disabled
                id="Unreceived"
                value={!!orderData?.Unreceived || ""}
                onChange={handleInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              )}
                <label className="w-3/5 text-xs font-semibold">
                  Unreceived
                </label>
              </div>
              <div className="flex items-center mb-3 gap-2">
              {orderData ? (
                <input
                  disabled
                  id="Od_CAT1"
                  value={!!orderData.Od_CAT1 || ""}
                  onChange={handleInputChange}
                  type="checkbox"
                  className="w-6 h-6"
                />
              ) : (
                <input
                disabled
                id="Od_CAT1"
                value={!!orderData?.Od_CAT1 || ""}
                onChange={handleInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              )}
                <label className="w-3/5 text-xs font-semibold">
                  Order Identification1
                </label>
              </div>
              <div className="flex items-center mb-3 gap-2">
              {orderData ? (
                <input
                  disabled
                  id="Od_CAT2"
                  value={!!orderData.Od_CAT2 || ""}
                  onChange={handleInputChange}
                  type="checkbox"
                  className="w-6 h-6"
                />
              ) : (
                <input
                disabled
                id="Od_CAT2"
                value={!!orderData?.Od_CAT2 || ""}
                onChange={handleInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              )}
                <label className="w-3/5 text-xs font-semibold">
                  Order Identification2
                </label>
              </div>
              <div className="flex items-center gap-2">
              {orderData ? (
                <input
                  disabled
                  id="Od_CAT3"
                  value={!!orderData.Od_CAT3 || ""}
                  onChange={handleInputChange}
                  type="checkbox"
                  className="w-6 h-6"
                />
              ) : (
                <input
                disabled
                id="Od_CAT3"
                value={!!orderData?.Od_CAT3 || ""}
                onChange={handleInputChange}
                type="checkbox"
                className="w-6 h-6"
              />
              )}
                <label className="w-3/5 text-xs font-semibold">
                  Order Identification3
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                NAV Goods Name
              </label>
              <div className="w-3/6">
                {orderData ? (
                  <input
                    disabled
                    id="NAV_Name"
                    type="text"
                    value={orderData.NAV_Name || ""}
                    onChange={handleInputChange}
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="NAV_Name"
                    type="text"
                    value={orderData?.NAV_Name || ""}
                    onChange={handleInputChange}
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
              <div className="w-1/6">
                <button
                  onClick={handleGoods_Name_Reflect}
                  className="bg-blue-500 text-white text-lg w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center"
                >
                  <FaArrowDownLong />
                </button>
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Goods Name
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Product_Name"
                    type="text"
                    value={orderData.Product_Name || ""}
                    onChange={(event) => handleInputChange(event)}
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Product_Name"
                    type="text"
                    value={orderData?.Product_Name || ""}
                    onChange={(event) => handleInputChange(event)}
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                NAV Goods Size
              </label>
              <div className="w-3/6">
                {orderData ? (
                  <input
                    disabled
                    id="NAV_Size"
                    type="text"
                    value={orderData.NAV_Size || ""}
                    onChange={handleInputChange}
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="NAV_Size"
                    type="text"
                    value={orderData?.NAV_Size || ""}
                    onChange={handleInputChange}
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
              <div className="w-1/6">
                <button
                  onClick={handleGoods_Size_Reflect}
                  className="bg-blue-500 text-white text-lg w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center"
                >
                  <FaArrowDownLong />
                </button>
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Goods Size
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Product_Size"
                    type="text"
                    value={orderData.Product_Size || ""}
                    onChange={(event) => handleInputChange(event)}
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Product_Size"
                    type="text"
                    value={orderData?.Product_Size || ""}
                    onChange={(event) => handleInputChange(event)}
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <div className="w-5/6">
                <div className="flex gap-2  mb-2">
                  <label className="text-xs font-semibold w-2/5">
                    Cutomer_Draw
                  </label>
                  <div className="w-3/5">
                    {orderData ? (
                      <input
                        disabled
                        id="Customer_Draw"
                        value={orderData.Customer_Draw || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                        disabled
                        id="Customer_Draw"
                        value={orderData?.Customer_Draw || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <label className="text-xs font-semibold w-2/5">
                    Company_Draw
                  </label>
                  <div className="w-3/5">
                    {orderData ? (
                      <input
                        disabled
                        id="Company_Draw"
                        value={orderData.Company_Draw || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    ) : (
                      <input
                        disabled
                        id="Company_Draw"
                        value={orderData?.Company_Draw || ""}
                        onChange={handleInputChange}
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="w-1/6">
                <button
                  onClick={handleDrawNoReflectClick}
                  className="bg-blue-500 text-white text-lg w-full py-[22px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center"
                >
                  <FaArrowDownLong />
                </button>
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Draw
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Product_Draw"
                    value={orderData.Product_Draw || ""}
                    onChange={(event) => handleInputChange(event)}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Product_Draw"
                    value={orderData?.Product_Draw || ""}
                    onChange={(event) => handleInputChange(event)}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex justify-between w-full gap-2 mb-2">
              <div className="w-7/12 flex gap-1 items-center">
                <label className="text-xs font-semibold w-5/12">Quantity</label>
                <div className="w-3/12">
                  {orderData ? (
                    <input
                      disabled
                      id="Quantity"
                      value={orderData.Quantity || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="Quantity"
                      value={orderData?.Quantity || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
                <div className="w-2/12">
                  {orderData ? (
                    <select
                      disabled
                      id="Unit_CD"
                      value={orderData.Unit_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                    >
                      <option value={orderData.Unit_CD || ""}>
                        {orderData.Unit_CD || ""}
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  ) : (
                    <select
                      disabled
                      id="Unit_CD"
                      value={orderData?.Unit_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  )}
                </div>
                <div className="w-3/12">
                  <input
                    disabled
                    id="Unit_CD_Input"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="w-5/12 flex items-center">
                <label className="text-xs font-semibold w-1/2">
                  Remaining Qty
                </label>
                <div className="w-1/2">
                  {orderData ? (
                    <input
                      disabled
                      id="Remainning_Quantity"
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id=""
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Sale Instructions
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Sl_Instructions"
                    value={orderData.Sl_Instructions || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Sl_Instructions"
                    value={orderData?.Sl_Instructions || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex w-full gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Instructions
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Pd_Instructions"
                    value={orderData.Pd_Instructions || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Pd_Instructions"
                    value={orderData?.Pd_Instructions || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex w-full gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Remark
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Pd_Remark"
                    value={orderData.Pd_Remark || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Pd_Remark"
                    value={orderData?.Pd_Remark || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex w-full gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Inspection Remark
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="I_Remark"
                    value={orderData.I_Remark || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="I_Remark"
                    value={orderData?.I_Remark || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-1/5">Sales Group</label>
              <div className="w-2/5">
                {orderData ? (
                  <select
                    disabled
                    id="Sales_Grp_CD"
                    value={orderData.Sales_Grp_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value={orderData.Sales_Grp_CD || ""}>
                      {orderData.Sales_Grp_CD || ""}
                    </option>
                    {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
                      WorkergData.map((worker) => (
                        <option key={worker.WorkG_CD} value={worker.WorkG_CD}>
                          {worker.WorkG_CD}
                        </option>
                      ))
                    ) : (
                      <option value="">No Worker Groups Available</option> // แสดงข้อความถ้าไม่มีข้อมูล
                    )}
                  </select>
                ) : (
                  <select
                    disabled
                    id="Sales_Grp_CD"
                    value={orderData?.Sales_Grp_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
                      WorkergData.map((worker) => (
                        <option key={worker.WorkG_CD} value={worker.WorkG_CD}>
                          {worker.WorkG_CD}
                        </option>
                      ))
                    ) : (
                      <option value="">No Worker Groups Available</option> // แสดงข้อความถ้าไม่มีข้อมูล
                    )}
                  </select>
                )}
              </div>
              <div className="w-2/5">
                <input
                  disabled
                  id="Sales_Grp_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-1/5">
                Sales Person
              </label>
              <div className="w-2/5">
                {orderData ? (
                  <select
                    disabled
                    id="Sales_Person_CD"
                    value={orderData.Sales_Person_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                  >
                    <option value={orderData.Sales_Person_CD || ""}>
                      {orderData.Sales_Person_CD || ""}
                    </option>
                    {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
                      WorkerData.map((worker) => (
                        <option key={worker.Worker_CD} value={worker.Worker_CD}>
                          {worker.Worker_CD}{" "}
                          {/* หรือใช้ worker.WorkerName ถ้าต้องการแสดงชื่อ */}
                        </option>
                      ))
                    ) : (
                      <option value="">No Workers Available</option> // ข้อความเมื่อไม่มีข้อมูล
                    )}
                  </select>
                ) : (
                  <select
                    disabled
                    id="Sales_Person_CD"
                    value={orderData?.Sales_Person_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                  >
                    {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
                      WorkerData.map((worker) => (
                        <option key={worker.Worker_CD} value={worker.Worker_CD}>
                          {worker.Worker_CD}{" "}
                        </option>
                      ))
                    ) : (
                      <option value="">No Workers Available</option> // ข้อความเมื่อไม่มีข้อมูล
                    )}
                  </select>
                )}
              </div>
              <div className="w-2/5">
                <input
                  disabled
                  id="Sales_Person_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex items-center w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-2/12">
                Req Category
              </label>
              <div className="w-1/12">
                {orderData ? (
                  <select
                    disabled
                    id="Request1_CD"
                    value={orderData.Request1_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value={orderData.Request1_CD || ""}>
                      {orderData.Request1_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Request1_CD"
                    value={orderData?.Request1_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/12">
                <input
                  disabled
                  id="Request1_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-1/12">
                {orderData ? (
                  <select
                    disabled
                    id="Request2_CD"
                    value={orderData.Request2_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                  >
                    <option value={orderData.Request2_CD || ""}>
                      {orderData.Request2_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Request2_CD"
                    value={orderData?.Request2_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/12">
                <input
                  disabled
                  id="Request2_CD_Input"
                  type="text"
                  className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-1/12">
                {orderData ? (
                  <select
                    disabled
                    id="Request3_CD"
                    value={orderData.Request3_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value={orderData.Request3_CD || ""}>
                      {orderData.Request3_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Request3_CD"
                    value={orderData?.Request3_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/12">
                <input
                  disabled
                  id="Request3_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <div className="flex w-full gap-2">
                <label className="text-xs font-semibold w-2/5">Material1</label>
                <div className="w-3/5">
                  {orderData ? (
                    <input
                      disabled
                      id="Material1"
                      value={orderData.Material1 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="Material1"
                      value={orderData?.Material1 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
              <div className="flex w-full gap-2 mb-2">
                <label className="text-xs font-semibold w-1/5">H/T</label>
                <div className="w-4/5">
                  {orderData ? (
                    <input
                      disabled
                      id="H_Treatment1"
                      value={orderData.H_Treatment1 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="H_Treatment1"
                      value={orderData?.H_Treatment1 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-2/5">Material2</label>
                <div className="w-3/5">
                  {orderData ? (
                    <input
                      disabled
                      id="Material2"
                      value={orderData.Material2 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="Material2"
                      value={orderData?.Material2 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-1/5">H/T</label>
                <div className="w-4/5">
                  {orderData ? (
                    <input
                      disabled
                      id="H_Treatment2"
                      value={orderData.H_Treatment2 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="H_Treatment2"
                      value={orderData?.H_Treatment2 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-2/5">Material3</label>
                <div className="w-3/5">
                  {orderData ? (
                    <input
                      disabled
                      id="Material3"
                      value={orderData.Material3 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="Material3"
                      value={orderData?.Material3 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-1/5">H/T</label>
                <div className="w-4/5">
                  {orderData ? (
                    <input
                      disabled
                      id="H_Treatment3"
                      value={orderData.H_Treatment3 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="H_Treatment3"
                      value={orderData?.H_Treatment3 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-2/5">Material4</label>
                <div className="w-3/5">
                  {orderData ? (
                    <input
                      disabled
                      id="Material4"
                      value={orderData.Material4 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="Material4"
                      value={orderData?.Material4 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-1/5">H/T</label>
                <div className="w-4/5">
                  {orderData ? (
                    <input
                      disabled
                      id="H_Treatment4"
                      value={orderData.H_Treatment4 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="H_Treatment4"
                      value={orderData?.H_Treatment4 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-2/5">Material5</label>
                <div className="w-3/5">
                  {orderData ? (
                    <input
                      disabled
                      id="Material5"
                      value={orderData.Material5 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="Material5"
                      value={orderData?.Material5 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
              <div className="flex w-1/2 gap-2">
                <label className="text-xs font-semibold w-1/5">H/T</label>
                <div className="w-4/5">
                  {orderData ? (
                    <input
                      disabled
                      id="H_Treatment5"
                      value={orderData.H_Treatment5 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="H_Treatment5"
                      value={orderData?.H_Treatment5 || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-2 mb-2">
              <div className="flex w-2/5 gap-2">
                <label className="text-xs font-semibold w-2/6">Coating</label>
                <div className="w-2/6">
                  {orderData ? (
                    <select
                      disabled
                      id="Coating_CD"
                      value={orderData.Coating_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                    >
                      <option value={orderData.Coating_CD || ""}>
                        {orderData.Coating_CD || ""}
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  ) : (
                    <select
                      disabled
                      id="Coating_CD"
                      value={orderData?.Coating_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  )}
                </div>
                <div className="w-2/6">
                  <input
                    disabled
                    id="Coating_Name"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
              <div className="flex w-3/5 gap-2">
                <label className="text-xs font-semibold w-2/6">CT_Detail</label>
                <div className="w-4/6">
                  {orderData ? (
                    <input
                      disabled
                      id="Coating"
                      value={orderData.Coating || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="Coating"
                      value={orderData?.Coating || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <label className="text-xs font-semibold w-1/5">Tolerance</label>
              <div className="w-4/5">
                {orderData ? (
                  <input
                    disabled
                    id="Tolerance"
                    value={orderData.Tolerance || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Tolerance"
                    value={orderData?.Tolerance || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex w-full gap-2 mb-2">
              <div className="flex w-6/12 gap-2 items-center">
                <label className="text-xs font-semibold w-2/5">
                  Quotation No
                </label>
                <div className="w-3/5">
                  {orderData ? (
                    <input
                      disabled
                      id="Quote_No"
                      value={orderData.Quote_No || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  ) : (
                    <input
                      disabled
                      id="Quote_No"
                      value={orderData?.Quote_No || ""}
                      onChange={handleInputChange}
                      type="text"
                      className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                    />
                  )}
                </div>
              </div>
              <div className="flex w-6/12 gap-2 items-center">
                <label className="text-xs font-semibold w-1/5">CAT</label>
                <div className="w-2/5">
                  {orderData ? (
                    <select
                      disabled
                      id="Quote_CD"
                      value={orderData.Quote_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                    >
                      <option value={orderData.Quote_CD || ""}>
                        {orderData.Quote_CD || ""}
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  ) : (
                    <select
                      disabled
                      id="Quote_CD"
                      value={orderData?.Quote_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  )}
                </div>
                <div className="w-2/5">
                  <input
                    disabled
                    id="Quote_CD_Input"
                    type="text"
                    className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-1/5">Item</label>
              <div className="w-2/5">
                {orderData ? (
                  <select
                    disabled
                    id="Item1_CD"
                    value={orderData.Item1_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                  >
                    <option value={orderData.Item1_CD || ""}>
                      {orderData.Item1_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Item1_CD"
                    value={orderData?.Item1_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/5">
                <input
                  disabled
                  id="Item1_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex w-full items-center mb-2">
              <label className="text-xs font-semibold w-3/12">
                Customer Materail
              </label>
              <div className="w-9/12">
                {orderData ? (
                  <input
                    disabled
                    id="Custom_Material"
                    value={orderData.Custom_Material || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Custom_Material"
                    value={orderData?.Custom_Material || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex w-full items-center mb-2">
              <label className="text-xs font-semibold w-1/5">PO No</label>
              <div className="w-4/5">
                {orderData ? (
                  <input
                    disabled
                    id="Od_No_of_Custom"
                    value={orderData.Od_No_of_Custom || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Od_No_of_Custom"
                    value={orderData?.Od_No_of_Custom || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-1/5">
                Production Docu
              </label>
              <div className="w-3/5">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-1/5">
                <button className="bg-blue-500 text-white w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px]">
                  Setting
                </button>
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-1/5">
                Supplement_Docu
              </label>
              <div className="w-3/5">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
              <div className="w-1/5">
                <button className="bg-blue-500 text-white w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px]">
                  Setting
                </button>
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production_Received
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Pd_Received_Date"
                    value={orderData.Pd_Received_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Pd_Received_Date"
                    value={orderData?.Pd_Received_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production_Completed
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Pd_Complete_Date"
                    value={orderData.Pd_Complete_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Pd_Complete_Date"
                    value={orderData?.Pd_Complete_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                QC_Completed
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="I_Completed_Date"
                    value={orderData.I_Completed_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="I_Completed_Date"
                    value={orderData?.I_Completed_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Shipment_Date
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Shipment_Date"
                    value={orderData.Shipment_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Shipment_Date"
                    value={orderData?.Shipment_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production_Calc_Date
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Pd_Calc_Date"
                    value={orderData.Pd_Calc_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Pd_Calc_Date"
                    value={orderData?.Pd_Calc_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Calc_processing_Data
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Calc_Process_Date"
                    value={orderData.Calc_Process_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Calc_Process_Date"
                    value={orderData?.Calc_Process_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex w-full items-center gap-2 mb-2">
              <label className="text-xs font-semibold w-2/6">
                Order_Modify_Date
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Od_Upd_Date"
                    value={orderData.Od_Upd_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Od_Upd_Date"
                    value={orderData?.Od_Upd_Date || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="grid justify-between">
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">Customer</label>
              <div className="w-2/6">
                {orderData ? (
                  <select
                    disabled
                    id="Customer_CD"
                    value={orderData.Customer_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                  >
                    <option value={orderData.Customer_CD || ""}>
                      {orderData.Customer_CD || ""}
                    </option>
                    {Array.isArray(CustomerData) && CustomerData.length > 0 ? (
                      CustomerData.map((customer) => (
                        <option
                          key={customer.Customer_CD}
                          value={customer.Customer_CD}
                        >
                          {customer.Customer_CD}
                        </option>
                      ))
                    ) : (
                      <option value="">No Customers Available</option> // ข้อความเมื่อไม่มีข้อมูล
                    )}
                  </select>
                ) : (
                  <select
                    disabled
                    id="Customer_CD"
                    value={orderData?.Customer_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                  >
                    {Array.isArray(CustomerData) && CustomerData.length > 0 ? (
                      CustomerData.map((customer) => (
                        <option
                          key={customer.Customer_CD}
                          value={customer.Customer_CD}
                        >
                          {customer.Customer_CD}
                        </option>
                      ))
                    ) : (
                      <option value="">No Customers Available</option> // ข้อความเมื่อไม่มีข้อมูล
                    )}
                  </select>
                )}
              </div>

              <div className="w-2/6">
                <input
                  disabled
                  id="Customer_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">Long Name</label>
              <div className="w-4/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Delivery Category
              </label>
              <div className="w-2/6">
                {orderData ? (
                  <select
                    disabled
                    id="Supply_CD"
                    value={orderData.Supply_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                  >
                    <option value={orderData.Supply_CD || ""}>
                      {orderData.Supply_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Supply_CD"
                    value={orderData?.Supply_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id="Supply_CD_Input"
                  type="text"
                  className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Delivery Destination
              </label>
              <div className="w-2/6">
                {orderData ? (
                  <select
                    disabled
                    id="Destination_CD"
                    value={orderData.Destination_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                  >
                    <option value={orderData.Destination_CD || ""}>
                      {orderData.Destination_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Destination_CD"
                    value={orderData?.Destination_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id="Destination_CD_Input"
                  type="text"
                  className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Contract Document
              </label>
              <div className="w-2/6">
                {orderData ? (
                  <select
                    disabled
                    id="Contract_Docu_CD"
                    value={orderData.Contract_Docu_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                  >
                    <option value={orderData.Contract_Docu_CD || ""}>
                      {orderData.Contract_Docu_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Contract_Docu_CD"
                    value={orderData?.Contract_Docu_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id="Contract_Docu_CD_Input"
                  type="text"
                  className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">Unit Price</label>
              <div className="w-2/6">
                {orderData ? (
                  <select
                    id="Unit_Price"
                    value={orderData.Unit_Price || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                  >
                    <option value={orderData.Unit_Price || ""}>
                      {orderData.Unit_Price || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    id="Unit_Price"
                    value={orderData?.Unit_Price || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/6 flex gap-1">
                <div className="w-2/5">
                  <input
                    disabled
                    id="Unit_Price_Input"
                    type="text"
                    className="bg-[#ff99cc] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
                <div className="w-3/5">
                  <input
                    disabled
                    id="Unit_Price_Input2"
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Order No of Production Split
              </label>
              <div className="w-3/6">
                {orderData ? (
                  <input
                    disabled
                    id="Od_No_of_Pd_Split"
                    value={orderData.Od_No_of_Pd_Split || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Od_No_of_Pd_Split"
                    value={orderData?.Od_No_of_Pd_Split || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-[#ffff00] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
              <div className="w-1/6">
                <button className="bg-blue-500 text-white w-full py-[5px] rounded-md hover:bg-blue-700 text-[12px] flex justify-center items-center gap-2">
                  Quot <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Order Controller Person
              </label>
              <div className="w-2/6">
                {orderData ? (
                  <select
                    disabled
                    id="Od_Ctl_Person_CD"
                    value={orderData.Od_Ctl_Person_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value={orderData.Od_Ctl_Person_CD || ""}>
                      {orderData.Od_Ctl_Person_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Od_Ctl_Person_CD"
                    value={orderData?.Od_Ctl_Person_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id="Od_Ctl_Person_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Order Register Person
              </label>
              <div className="w-2/6">
                {orderData ? (
                  <select
                    disabled
                    id="Od_Reg_Person_CD"
                    value={orderData.Od_Reg_Person_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value={orderData.Od_Reg_Person_CD || ""}>
                      {orderData.Od_Reg_Person_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Od_Reg_Person_CD"
                    value={orderData?.Od_Reg_Person_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id="Od_Reg_Person_CD_Input"
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Order Update Person
              </label>
              <div className="w-2/6">
                {orderData ? (
                  <select
                    disabled
                    id="Od_Upd_Person_CD"
                    value={orderData.Od_Upd_Person_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value={orderData.Od_Upd_Person_CD || ""}>
                      {orderData.Od_Upd_Person_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Od_Upd_Person_CD"
                    value={orderData?.Od_Upd_Person_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Specific Item
              </label>
              <div className="w-2/6">
                {orderData ? (
                  <select
                    disabled
                    id="Specific_CD"
                    value={orderData.Specific_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value={orderData.Specific_CD || ""}>
                      {orderData.Specific_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Specific_CD"
                    value={orderData?.Specific_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Order Progress CAT
              </label>
              <div className="w-2/6">
                {orderData ? (
                  <select
                    disabled
                    id="Od_Progress_CD"
                    value={orderData.Od_Progress_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value={orderData.Od_Progress_CD || ""}>
                      {orderData.Od_Progress_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Od_Progress_CD"
                    value={orderData?.Od_Progress_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Delivery Date CAT
              </label>
              <div className="w-2/6">
                {orderData ? (
                  <select
                    disabled
                    id="Delivery_CD"
                    value={orderData.Delivery_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value={orderData.Delivery_CD || ""}>
                      {orderData.Delivery_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Delivery_CD"
                    value={orderData?.Delivery_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Schedule CAT
              </label>
              <div className="w-2/6">
                {orderData ? (
                  <select
                    disabled
                    id="Schedule_CD"
                    value={orderData.Schedule_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value={orderData.Schedule_CD || ""}>
                      {orderData.Schedule_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Schedule_CD"
                    value={orderData?.Schedule_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">Target CAT</label>
              <div className="w-2/6">
                {orderData ? (
                  <select
                    disabled
                    id="Target_CD"
                    value={orderData.Target_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value={orderData.Target_CD || ""}>
                      {orderData.Target_CD || ""}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                ) : (
                  <select
                    disabled
                    id="Target_CD"
                    value={orderData?.Target_CD || ""}
                    onChange={handleInputChange}
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
              <div className="w-2/6">
                <input
                  disabled
                  id=""
                  type="text"
                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Target Qty
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Pd_Target_Qty"
                    value={orderData.Pd_Target_Qty || ""}
                    onChange={(event) => handleInputChange(event)}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Pd_Target_Qty"
                    value={orderData?.Pd_Target_Qty || ""}
                    onChange={(event) => handleInputChange(event)}
                    type="text"
                    className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Pruduction Completed Qty
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Pd_Complete_Qty"
                    value={orderData.Pd_Complete_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Pd_Complete_Qty"
                    value={orderData?.Pd_Complete_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Inspection Completed Qty
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="I_Complete_Qty"
                    value={orderData.I_Complete_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="I_Complete_Qty"
                    value={orderData?.I_Complete_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Delivery Qty
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Shipment_Qty"
                    value={orderData.Shipment_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Shipment_Qty"
                    value={orderData?.Shipment_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Split Qty
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Pd_Split_Qty"
                    value={orderData.Pd_Split_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Pd_Split_Qty"
                    value={orderData?.Pd_Split_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">
                Production Calculation Qty
              </label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="Pd_Calc_Qty"
                    value={orderData.Pd_Calc_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="Pd_Calc_Qty"
                    value={orderData?.Pd_Calc_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <label className="text-xs font-semibold w-2/6">NG Qty</label>
              <div className="w-4/6">
                {orderData ? (
                  <input
                    disabled
                    id="NG_Qty"
                    value={orderData.NG_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                ) : (
                  <input
                    disabled
                    id="NG_Qty"
                    value={orderData?.NG_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {/* Column of Buttons */}
          <button
            id="searchButton"
            onClick={handleF1Click}
            className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
          >
            Search <br />
            検索 (F1)
          </button>
          <button
            id="editButton"
            onClick={handleF2Click}
            className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
          >
            Edit <br />
            編集 (F2)
          </button>
          <button
            id="newAddButton"
            onClick={handleF3Click}
            className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
          >
            New Add <br />
            追加 (F3)
          </button>
          <button
            onClick={handleF4Click}
            className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
          >
            Order <br />
            受注 (F4)
          </button>

          <button
            onClick={handleF5Click}
            className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
          >
            Plan <br />
            計画 (F5)
          </button>
          <button
            onClick={handleF6Click}
            className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
          >
            PS All <br />
            全頁 (F6)
          </button>
          <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
            List <br />一 覽 (F7)
          </button>
          <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
            NextParts <br />
            別部 (F8)
          </button>

          <button
            id="saveButton"
            onClick={handleF9Click}
            className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
          >
            Save <br />
            登録 (F9)
          </button>
          <button
            onClick={handleF10Click}
            className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
          >
            Delete <br />
            削除 (F10)
          </button>
          <button
            id="nextInputButton"
            onClick={handleF11Click}
            className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white"
          >
            NextInput <br />
            次へ (F11)
          </button>
          <button
            id="exitButton"
            className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
          >
            Exit <br />
            終了 (F12)
          </button>
        </div>
      </div>
    </div>
  );
}

const searchPermission = (status) => {
  document.getElementById("Search_Order_No").disabled = !status;
};

const editPermission = (status) => {
 
  document.getElementById("Order_No").disabled = !status;
  document.getElementById("Product_Grp_CD").disabled = !status;
  document.getElementById("Request_Delivery").disabled = !status;
  document.getElementById("Product_Delivery").disabled = !status;
  document.getElementById("Confirm_Delivery").disabled = !status;
  document.getElementById("NAV_Delivery").disabled = !status;
  document.getElementById("Od_Pending").disabled = !status;
  document.getElementById("Temp_Shipment").disabled = !status;
  document.getElementById("Unreceived").disabled = !status;
  document.getElementById("Od_CAT1").disabled = !status;
  document.getElementById("Od_CAT2").disabled = !status;
  document.getElementById("Od_CAT3").disabled = !status;
  document.getElementById("NAV_Name").disabled = !status;
  document.getElementById("Product_Name").disabled = !status;
  document.getElementById("NAV_Size").disabled = !status;
  document.getElementById("Product_Size").disabled = !status;
  document.getElementById("Customer_Draw").disabled = !status;
  document.getElementById("Company_Draw").disabled = !status;
  document.getElementById("Product_Draw").disabled = !status;
  document.getElementById("Quantity").disabled = !status;
  document.getElementById("Unit_CD").disabled = !status;
  document.getElementById("Sl_Instructions").disabled = !status;
  document.getElementById("Pd_Instructions").disabled = !status;
  document.getElementById("Pd_Remark").disabled = !status;
  document.getElementById("I_Remark").disabled = !status;
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
  document.getElementById("Coating").disabled = !status;
  document.getElementById("Quote_No").disabled = !status;
  document.getElementById("Quote_CD").disabled = !status;
  document.getElementById("Item1_CD").disabled = !status;
  document.getElementById("Custom_Material").disabled = !status;
  document.getElementById("Od_No_of_Custom").disabled = !status;
  document.getElementById("Pd_Received_Date").disabled = !status;
  document.getElementById("Pd_Complete_Date").disabled = !status;
  document.getElementById("Shipment_Date").disabled = !status;
  document.getElementById("Pd_Calc_Date").disabled = !status;
  document.getElementById("Calc_Process_Date").disabled = !status;
  document.getElementById("Od_Upd_Date").disabled = !status;
  document.getElementById("Customer_CD").disabled = !status;
  document.getElementById("Supply_CD").disabled = !status;
  document.getElementById("Destination_CD").disabled = !status;
  document.getElementById("Contract_Docu_CD").disabled = !status;
  document.getElementById("Unit_Price").disabled = !status;
  document.getElementById("Od_No_of_Pd_Split").disabled = !status;
  document.getElementById("Od_Ctl_Person_CD").disabled = !status;
  document.getElementById("Od_Reg_Person_CD").disabled = !status;
  document.getElementById("Od_Upd_Person_CD").disabled = !status;
  document.getElementById("Specific_CD").disabled = !status;
  document.getElementById("Od_Progress_CD").disabled = !status;
  document.getElementById("Delivery_CD").disabled = !status;
  document.getElementById("Schedule_CD").disabled = !status;
  document.getElementById("Target_CD").disabled = !status;
  document.getElementById("Pd_Target_Qty").disabled = !status;
  document.getElementById("Pd_Complete_Qty").disabled = !status;
  document.getElementById("I_Complete_Qty").disabled = !status;
  document.getElementById("Shipment_Qty").disabled = !status;
  document.getElementById("Pd_Split_Qty").disabled = !status;
  document.getElementById("Pd_Calc_Qty").disabled = !status;
  document.getElementById("NG_Qty").disabled = !status;
};

const toggleButtons = (f3, f9, f11, f12) => {
  document.getElementById("newAddButton").disabled = !f3;
  document.getElementById("saveButton").disabled = !f9;
  document.getElementById("nextInputButton").disabled = !f11;
  document.getElementById("exitButton").disabled = !f12;
};
