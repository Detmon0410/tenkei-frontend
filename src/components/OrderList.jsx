import React, { useState, useEffect } from "react";
import { FaCircle, FaSquareFull } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdStarRate } from "react-icons/md";
import { useOrder } from "../hooks/use-order";
import { useOrderList } from "../hooks/use-orderlist";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function OrderList() {
  const {
    orderData,
    setOrderData,
    setWorkgData,
    WorkgData,
    CustomerData,
    setCustomerData,
    SpecificData,
    setSpecificData,
    PriceData,
    setPriceData,
    WorkerData,
    setWorkerData,
    Request1Data,
    setRequest1Data,
    Request2Data,
    setRequest2Data,
    Request3Data,
    setRequest3Data,
    CoatingData,
    setCoatingData,
    Item1Data,
    setItem1Data,
    OdProgressData,
    DeliveryData,
    TargetData,
  } = useOrder();
  
  const [destinationName, setDestinationName] = useState("");
  const [destinationName2, setDestinationName2] = useState("");
  const [destinationName3, setDestinationName3] = useState("");
  const [destinationName4, setDestinationName4] = useState("");
  const [destinationName5, setDestinationName5] = useState("");
  const [selectedCustomerAbb, setSelectedCustomerAbb] = useState("");
  const [selectedCustomerAbb2, setSelectedCustomerAbb2] = useState("");
  const [selectedCustomerAbb3, setSelectedCustomerAbb3] = useState("");
  const [selectedCustomerAbb4, setSelectedCustomerAbb4] = useState("");
  const [SpecificName, setSpecificName] = useState("");
  const [SpecificName2, setSpecificName2] = useState("");
  const [SpecificName3, setSpecificName3] = useState("");
  const [SpecificName4, setSpecificName4] = useState("");
  const [PriceName, setPriceName] = useState("");
  const [request1Name, setRequest1Name] = useState("");
  const [request2Name, setRequest2Name] = useState("");
  const [request3Name, setRequest3Name] = useState("");
  const [itemName, setItemName] = useState("");
  const [selectedSalesGrpAbb, setSelectedSalesGrpAbb] = useState("");
  const [selectedSalesGrpAbb2, setSelectedSalesGrpAbb2] = useState("");
  const [coatingName, setCoatingName] = useState("");
  const [coatingName2, setCoatingName2] = useState("");
  const [coatingName3, setCoatingName3] = useState("");
  const [coatingName4, setCoatingName4] = useState("");
  const { orderListData, setOrderListData, fetchOrderListData, scheduleData } =
    useOrderList();
  const [formState, setFormState] = useState({
    targetYear: false,
    targetMonth: false,
    orderNo: false,
    navName: false,
    productName: true,
    navSize: false,
    productSize: false,
    customerDraw: false,
    companyDraw: false,
    productDraw: false,
    slInstructions: false,
    pdInstructions: false,
    pdNote: false,
    pdRemark: false,
    iRemark: false,
    stPdGrpCD: true,
    stPdGrpAbb: true,
    edPdGrpCD: true,
    edPdGrpAbb: true,
    noPdGrpCD1: true,
    noPdGrpAbb1: true,
    noPdGrpCD2: true,
    noPdGrpAbb2: true,
    priceCD: false,
    priceName: false,
    customerCD1: true,
    customerAbb1: true,
    customerCD2: true,
    customerAbb2: true,
    customerCD3: true,
    customerAbb3: true,
    noCustomerCD: true,
    noCustomerAbb: true,
    customerName1: false,
    customerName2: false,
    customerName3: false,
    specificCD1: true,
    specificName1: true,
    specificCD2: true,
    specificName2: true,
    noSpecificCD1: true,
    noSpecificName1: true,
    noSpecificCD2: true,
    noSpecificName2: true,
    coatingCD1: true,
    coatingName1: true,
    coatingCD2: true,
    coatingName2: true,
    coatingCD3: true,
    coatingName3: true,
    noCoatingCD: true,
    noCoatingName: true,
    odCtlPersonCD: true,
    odCtlPersonName: true,
    slGrpCD: true,
    slGrpName: true,
    slPersonCD: true,
    slPersonName: true,
    request1CD: false,
    request1Name: false,
    request2CD: false,
    request2Name: false,
    request3CD: false,
    request3Name: false,
    odNoOfCustom: false,
    item1CD: true,
    item1Name: true,
    item2CD: false,
    item2Name: false,
    item3CD: false,
    item3Name: false,
    item4CD: false,
    item4Name: false,
    material1: false,
    material2: false,
    material3: false,
    material4: false,
    material5: false,
    odPending: false,
    tempShipment: false,
    unreceived: false,
    odCAT1: false,
    odCAT2: false,
    odCAT3: false,
    stOdProgressCD: true,
    edOdProgressCD: true,
    stDeliveryCD: false,
    edDeliveryCD: false,
    stScheduleCD: false,
    edScheduleCD: false,
    stTargetCD: false,
    edTargetCD: false,
    stRequestDelivery: false,
    edRequestDelivery: false,
    stNAVDelivery: false,
    edNAVDelivery: false,
    stConfirmDelivery: false,
    edConfirmDelivery: false,
    stProductDelivery: true,
    edProductDelivery: true,
    stPdReceivedDate: false,
    edPdReceivedDate: false,
    stPdCompleteDate: false,
    edPdCompleteDate: false,
    stICompleteDate: true,
    edICompleteDate: true,
    stShipmentDate: false,
    edShipmentDate: false,
    stCalcDate: true,
    edCalcDate: true,
    stCalcProcessDate: true,
    edCalcProcessDate: true,
    stPlProcessDate: true,
    edPlProcessDate: true,
  });

  const generateSpaces = (count) => "\u00A0".repeat(count);

  const initialItem = (kyoka) => {
    if (kyoka) {
      setFormState((prevState) => ({
        ...prevState,
        // เปิดฟิลด์ที่ต้องการ
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        // ปิดฟิลด์ที่ต้องการ
      }));
    }
  };

  const enableFields = (fieldNames) => {
    setFormState((prevState) => {
      const updatedFields = { ...prevState };
      fieldNames.forEach((field) => (updatedFields[field] = true));
      return updatedFields;
    });
  };

  const disableFields = (fieldNames) => {
    setFormState((prevState) => {
      const updatedFields = { ...prevState };
      fieldNames.forEach((field) => (updatedFields[field] = false));
      return updatedFields;
    });
  };

  const Search_Type_AfterUpdate = (searchType) => {
    // ปิดฟิลด์ตามที่เลือก
    if (searchType === "Simple") {
      initialItem(true); // เปิดฟิลด์ที่ต้องการ
      disableFields([
        "orderNo",
        "navName",
        "navSize",
        "productSize",
        "customerDraw",
        "companyDraw",
        "productDraw",
        "slInstructions",
        "pdInstructions",
        "pdRemark",
        "iRemark",
        "priceCD",
        "priceName",
        "customerName1",
        "customerName2",
        "customerName3",
        "request1CD",
        "request1Name",
        "request2CD",
        "request2Name",
        "request3CD",
        "request3Name",
        "odNoOfCustom",
        "item2CD",
        "item2Name",
        "item3CD",
        "item3Name",
        "material1",
        "material2",
        "material3",
        "material4",
        "material5",
        "odPending",
        "tempShipment",
        "unreceived",
        "odCAT1",
        "odCAT2",
        "odCAT3",
        "stDeliveryCD",
        "edDeliveryCD",
        "stScheduleCD",
        "edScheduleCD",
        "stTargetCD",
        "edTargetCD",
        "stRequestDelivery",
        "edRequestDelivery",
        "stNAVDelivery",
        "edNAVDelivery",
        "stConfirmDelivery",
        "edConfirmDelivery",
        "stPdReceivedDate",
        "edPdReceivedDate",
        "stPdCompleteDate",
        "edPdCompleteDate",
        "stShipmentDate",
        "edShipmentDate",
      ]);
      disableFields([
        "navName",
        "navSize",
        "productSize",
        "customerDraw",
        "companyDraw",
        "productDraw",
        "slInstructions",
        "pdInstructions",
        "pdNote",
        "pdRemark",
        "iRemark",
        "priceCD",
        "priceName",
        "customerName1",
        "customerName2",
        "customerName3",
        "request1CD",
        "request1Name",
        "request2CD",
        "request2Name",
        "request3CD",
        "request3Name",
        "odNoOfCustom",
        "item2CD",
        "item2Name",
        "item3CD",
        "item3Name",
        "material1",
        "material2",
        "material3",
        "material4",
        "material5",
        "odPending",
        "tempShipment",
        "unreceived",
        "odCAT1",
        "odCAT2",
        "odCAT3",
        "stDeliveryCD",
        "edDeliveryCD",
        "stScheduleCD",
        "edScheduleCD",
        "stTargetCD",
        "edTargetCD",
        "stRequestDelivery",
        "edRequestDelivery",
        "stNAVDelivery",
        "edNAVDelivery",
        "stConfirmDelivery",
        "edConfirmDelivery",
        "stPdReceivedDate",
        "edPdReceivedDate",
        "stPdCompleteDate",
        "edPdCompleteDate",
        "stShipmentDate",
        "edShipmentDate",
      ]);
    } else if (searchType === "Normal") {
      initialItem(true);
      enableFields([
        "orderNo",
        "pdInstructions",
        "pdNote",
        "pdRemark",
        "customerName1",
        "customerName2",
        "customerName3",
        "request3CD",
        "request3Name",
        "odPending",
        "tempShipment",
        "unreceived",
        "odCAT1",
        "odCAT2",
        "odCAT3",
        "stTargetCD",
        "edTargetCD",
        "stRequestDelivery",
        "edRequestDelivery",
        "stNAVDelivery",
        "edNAVDelivery",
        "stConfirmDelivery",
        "edConfirmDelivery",
      ]);
      disableFields([
        // ฟิลด์ที่ต้องการปิดเมื่อเลือก Simple
        "navName",
        "navSize",
        "productSize",
        "customerDraw",
        "companyDraw",
        "productDraw",
        "slInstructions",
        "pdInstructions",
        "iRemark",
        "priceCD",
        "priceName",
        "customerName1",
        "customerName2",
        "customerName3",
        "request1CD",
        "request1Name",
        "request2CD",
        "request2Name",
        "request3CD",
        "request3Name",
        "odNoOfCustom",
        "item2CD",
        "item2Name",
        "item3CD",
        "item3Name",
        "material1",
        "material2",
        "material3",
        "material4",
        "material5",
        "odPending",
        "tempShipment",
        "unreceived",
        "odCAT1",
        "odCAT2",
        "odCAT3",
        "stDeliveryCD",
        "edDeliveryCD",
        "stScheduleCD",
        "edScheduleCD",
        "stTargetCD",
        "edTargetCD",
        "stRequestDelivery",
        "edRequestDelivery",
        "stNAVDelivery",
        "edNAVDelivery",
        "stConfirmDelivery",
        "edConfirmDelivery",
        "stPdReceivedDate",
        "edPdReceivedDate",
        "stPdCompleteDate",
        "edPdCompleteDate",
        "stShipmentDate",
        "edShipmentDate",
      ]);
    } else if (searchType === "Detail") {
      initialItem(true);
      enableFields([
        "orderNo",
        "navName",
        "navSize",
        "productSize",
        "customerDraw",
        "companyDraw",
        "productDraw",
        "slInstructions",
        "pdInstructions",
        "pdRemark",
        "iRemark",
        "priceCD",
        "priceName",
        "customerName1",
        "customerName2",
        "customerName3",
        "request1CD",
        "request1Name",
        "request2CD",
        "request2Name",
        "request3CD",
        "request3Name",
        "odNoOfCustom",
        "item2CD",
        "item2Name",
        "item3CD",
        "item3Name",
        "material1",
        "material2",
        "material3",
        "material4",
        "material5",
        "odPending",
        "tempShipment",
        "unreceived",
        "odCAT1",
        "odCAT2",
        "odCAT3",
        "stDeliveryCD",
        "edDeliveryCD",
        "stScheduleCD",
        "edScheduleCD",
        "stTargetCD",
        "edTargetCD",
        "stRequestDelivery",
        "edRequestDelivery",
        "stNAVDelivery",
        "edNAVDelivery",
        "stConfirmDelivery",
        "edConfirmDelivery",
        "stPdReceivedDate",
        "edPdReceivedDate",
        "stPdCompleteDate",
        "edPdCompleteDate",
        "stShipmentDate",
        "edShipmentDate",
      ]);
    }
  };

  // Handle change event for Search_Type select
  const handleSearchTypeChange = (event) => {
    const selectedType = event.target.value;
    Search_Type_AfterUpdate(selectedType);
  };

  const handleFormatChange = (format) => {
    switch (format) {
      case "Backlog":
        setOrderListData({
          ...orderListData, // เก็บค่าเดิมไว้
          Target_Year: null,
          Target_Month: null,
          S_St_Od_Progress_CD: null,
          S_Ed_Od_Progress_CD: 4,
          S_St_I_Complete_Date: null,
          S_Ed_I_Complete_Date: null,
          S_St_Calc_Process_Date: null,
          S_Ed_Calc_Process_Date: null,
        });
        disableFields(["targetYear", "targetMonth"]);
        break;
      case "Calc":
        setOrderListData({
          ...orderListData, // เก็บค่าเดิมไว้
          Target_Year: null,
          Target_Month: null,
          S_St_Od_Progress_CD: null,
          S_Ed_Od_Progress_CD: 8,
          S_St_I_Complete_Date: null,
          S_Ed_I_Complete_Date: null,
          S_St_Calc_Process_Date:
            new Date().toISOString().split("T")[0] + " 00:00:00.000",
          S_Ed_Calc_Process_Date:
            new Date().toISOString().split("T")[0] + " 00:00:00.000",
        });
        disableFields(["targetYear", "targetMonth"]);
        break;
      case "Final":
        setOrderListData({
          ...orderListData, // เก็บค่าเดิมไว้
          Target_Year: new Date().getFullYear(),
          Target_Month: new Date().getMonth() + 1,
          S_St_Od_Progress_CD: null,
          S_Ed_Od_Progress_CD: 8,
          S_St_I_Complete_Date:
            new Date().toISOString().split("T")[0] + " 00:00:00.000",
          S_Ed_I_Complete_Date:
            new Date().toISOString().split("T")[0] + " 00:00:00.000",
          S_St_Calc_Process_Date: null,
          S_Ed_Calc_Process_Date: null,
        });
        initialItem(true);
        enableFields(["targetYear", "targetMonth"]);
        break;
      default:
        break;
    }
  };

  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;

    setOrderListData((prevOrderData) => {
      let updatedData = {
        ...prevOrderData,
        [id]: type === "checkbox" ? checked : value === "" ? null : value,
      };

      // หาก id เป็น S_St_Pd_Grp_CD ให้ตั้งค่า S_Ed_Pd_Grp_CD ให้เท่ากัน
      if (id === "S_St_Pd_Grp_CD") {
        updatedData = {
          ...updatedData,
          S_Ed_Pd_Grp_CD: value,
        };
      }

      return updatedData;
    });

    // ตรวจสอบว่า id คือ Target_Year หรือ Target_Month
    if (id === "Target_Year" || id === "Target_Month") {
      setOrderListData((prevState) => {
        // ดึงวันที่ปัจจุบันหรือค่าเดิมของ S_St_I_Complete_Date
        const updatedDate = prevState.S_St_I_Complete_Date
          ? new Date(prevState.S_St_I_Complete_Date)
          : new Date(); // ถ้ายังไม่มีค่า ใช้วันที่ปัจจุบัน

        // อัปเดตปีหรือเดือนตาม id
        if (id === "Target_Year") {
          updatedDate.setFullYear(value);
        } else if (id === "Target_Month") {
          updatedDate.setMonth(value - 1); // setMonth ใช้ค่าตั้งแต่ 0 (มกราคม) ถึง 11 (ธันวาคม)
        }

        return {
          ...prevState,
          S_St_I_Complete_Date: updatedDate.toISOString().substring(0, 10), // แปลงวันที่กลับเป็นรูปแบบ YYYY-MM-DD
        };
      });
    }
  };

  const handleF3Click = async () => {
    const success = await fetchOrderListData(orderListData);

    if (success) {
      console.log("Order List Data:", orderListData); // แสดงข้อมูล orderListData ในคอนโซล
    } else {
      console.log("Error fetching order list data");
    }
  };

  useEffect(() => {
    
    if (orderListData?.S_St_Pd_Grp_CD && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === orderListData?.S_St_Pd_Grp_CD
      );
      setDestinationName(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }
    if (orderListData?.S_Ed_Pd_Grp_CD && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === orderListData?.S_Ed_Pd_Grp_CD
      );
      setDestinationName2(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }
    if (orderListData?.S_No_Pd_Grp_CD1 && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === orderListData?.S_No_Pd_Grp_CD1
      );
      setDestinationName3(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }
    if (orderListData?.S_No_Pd_Grp_CD2 && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === orderListData?.S_No_Pd_Grp_CD2
      );
      setDestinationName4(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }

    if (orderListData?.S_Sl_Grp_CD && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === orderListData?.S_Sl_Grp_CD
      );
      setDestinationName5(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }
  }, [
    orderListData?.S_St_Pd_Grp_CD,
    orderListData?.S_Ed_Pd_Grp_CD,
    orderListData?.S_No_Pd_Grp_CD1,
    orderListData?.S_No_Pd_Grp_CD2,
    orderListData?.S_Sl_Grp_CD,
    WorkgData,
  ]);
  // useEffect(() => {
  //   console.log('Updated data:', WorkerData);
  // }, [WorkerData]); // จะได้ผลลัพธ์เมื่อ data มีการอัพเดต
  

  useEffect(() => {
    if (orderListData?.S_Customer_CD1 && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === orderListData?.S_Customer_CD1
      );
      setSelectedCustomerAbb(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
    if (orderListData?.S_Customer_CD2 && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === orderListData?.S_Customer_CD2
      );
      setSelectedCustomerAbb2(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
    if (orderListData?.S_Customer_CD3 && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === orderListData?.S_Customer_CD3
      );
      setSelectedCustomerAbb3(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
    if (orderListData?.S_No_Customer_CD && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === orderListData?.S_No_Customer_CD
      );
      setSelectedCustomerAbb4(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
  }, [
    orderListData?.S_Customer_CD1,
    orderListData?.S_Customer_CD2,
    orderListData?.S_Customer_CD3,
    orderListData?.S_No_Customer_CD,
    CustomerData,
  ]);

  useEffect(() => {
    if (orderListData?.S_Specific_CD1 && SpecificData.length > 0) {
      const selectedGroup = SpecificData.find(
        (item) => item.Specific_CD === orderListData?.S_Specific_CD1
      );
      setSpecificName(selectedGroup ? selectedGroup.Specific_Abb : "");
    }

    if (orderListData?.S_Specific_CD2 && SpecificData.length > 0) {
      const selectedGroup = SpecificData.find(
        (item) => item.Specific_CD === orderListData?.S_Specific_CD2
      );
      setSpecificName2(selectedGroup ? selectedGroup.Specific_Abb : "");
    }

    if (orderListData?.S_No_Specific_CD1 && SpecificData.length > 0) {
      const selectedGroup = SpecificData.find(
        (item) => item.Specific_CD === orderListData?.S_No_Specific_CD1
      );
      setSpecificName3(selectedGroup ? selectedGroup.Specific_Abb : "");
    }

    if (orderListData?.S_No_Specific_CD2 && SpecificData.length > 0) {
      const selectedGroup = SpecificData.find(
        (item) => item.Specific_CD === orderListData?.S_No_Specific_CD2
      );
      setSpecificName4(selectedGroup ? selectedGroup.Specific_Abb : "");
    }
  }, [
    orderListData?.S_Specific_CD1,
    orderListData?.S_Specific_CD2,
    orderListData?.S_No_Specific_CD1,
    orderListData?.S_No_Specific_CD2,
    SpecificData,
  ]);

  useEffect(() => {
    if (orderListData?.S_Price_CD && PriceData.length > 0) {
      const selectedGroup = PriceData.find(
        (item) => item.Price_CD === orderListData?.S_Price_CD
        
      );  
      setPriceName(selectedGroup ? selectedGroup.Price_Symbol : "");
    }
  }, [orderListData?.S_Price_CD, PriceData]);

  useEffect(() => {
    if (orderListData?.S_Request1_CD && Request1Data.length > 0) {
      const selectedGroup = Request1Data.find(
        (item) => item.Request1_CD === orderListData?.S_Request1_CD
      );

      setRequest1Name(selectedGroup ? selectedGroup.Request1_Abb : "");
    }
    if (orderListData?.S_Request2_CD && Request2Data.length > 0) {
      const selectedGroup = Request2Data.find(
        (item) => item.Request2_CD === orderListData?.S_Request2_CD
      );

      setRequest2Name(selectedGroup ? selectedGroup.Request2_Abb : "");
    }
    if (orderListData?.S_Request3_CD && Request3Data.length > 0) {
      const selectedGroup = Request3Data.find(
        (item) => item.Request3_CD === orderListData?.S_Request3_CD
      );

      setRequest3Name(selectedGroup ? selectedGroup.Request3_Abb : "");
    }
  }, [
    orderListData?.S_Request1_CD,
    orderListData?.S_Request2_CD,
    orderListData?.S_Request3_CD,
    Request1Data,
    Request2Data,
    Request3Data,
  ]);
  useEffect(() => {
    if (orderListData?.S_Item1_CD && Item1Data.length > 0) {
      const selectedGroup = Item1Data.find(
        (item) => item.Item1_CD === orderListData?.S_Item1_CD
      );

      setItemName(selectedGroup ? selectedGroup.Item1_Abb : "");
    }
  }, [orderListData?.S_Item1_CD, Item1Data]);

  useEffect(() => {
    if (orderListData?.S_Od_Ctl_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === orderListData?.S_Od_Ctl_Person_CD
      );

      setSelectedSalesGrpAbb(selectedGroup ? selectedGroup.Worker_Abb : "");
    }

    if (orderListData?.S_Sl_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === orderListData?.S_Sl_Person_CD
      );

      setSelectedSalesGrpAbb2(selectedGroup ? selectedGroup.Worker_Abb : "");
    }
  }, [
    orderListData?.S_Od_Ctl_Person_CD,
    orderListData?.S_Sl_Person_CD,
    WorkerData,
  ]);

  useEffect(() => {
    if (orderListData?.S_Coating_CD1 && CoatingData.length > 0) {
      const selectedGroup = CoatingData.find(
        (item) => item.Coating_CD === orderListData?.S_Coating_CD1
      );

      setCoatingName(selectedGroup ? selectedGroup.Coating_Symbol : "");
    }
    if (orderListData?.S_Coating_CD2 && CoatingData.length > 0) {
      const selectedGroup = CoatingData.find(
        (item) => item.Coating_CD === orderListData?.S_Coating_CD2
      );

      setCoatingName2(selectedGroup ? selectedGroup.Coating_Symbol : "");
    }
    if (orderListData?.S_Coating_CD3 && CoatingData.length > 0) {
      const selectedGroup = CoatingData.find(
        (item) => item.Coating_CD === orderListData?.S_Coating_CD3
      );

      setCoatingName3(selectedGroup ? selectedGroup.Coating_Symbol : "");
    }
    if (orderListData?.S_No_Coating_CD && CoatingData.length > 0) {
      const selectedGroup = CoatingData.find(
        (item) => item.Coating_CD === orderListData?.S_No_Coating_CD
      );

      setCoatingName4(selectedGroup ? selectedGroup.Coating_Symbol : "");
    }
  }, [
    orderListData?.S_Coating_CD1,
    orderListData?.S_Coating_CD2,
    orderListData?.S_Coating_CD3,
    orderListData?.S_No_Coating_CD,
    CoatingData,
  ]);

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col overflow-x-auto flex-grow p-2">
          <div className="bg-white grid grid-cols-1">
            <div className="overflow-x-auto">
              <div className="grid gap-2 mx-5 py-4 min-w-[1000px]">
                <div className="flex justify-center items-center py-3">
                  <label className="text-xl font-bold">Order List</label>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between items-center mx-5 py-4 gap-4">
                  <div className="flex flex-col md:flex-row gap-2 md:items-center  w-full md:w-auto">
                    <label className="text-xs font-medium ">Search_Type</label>
                    <div className="w-full md:w-40">
                      <select
                        onChange={handleSearchTypeChange}
                        id="Search_Type"
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                      >
                        <option value="Simple">Simple</option>
                        <option value="Normal">Normal</option>
                        <option value="Detail">Detail</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:items-center w-full md:w-auto">
                    <label className="text-xs font-medium">Plan_Target</label>
                    <div className="w-full md:w-40">
                      <select
                        id="Plan_Target"
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                </div>

                <hr className="border-y-[1px] border-gray-300" />

                <div className="w-full overflow-x-auto">
                  <div className="min-w-[1800px] w-full">
                    <div className="mx-5 py-4">
                      <div className="grid grid-cols-12">
                        <div className="flex">
                          <label className="text-xs font-bold">
                            Order_Info_Search
                          </label>
                        </div>

                        <div className="col-span-12 md:col-span-11 grid grid-cols-1 mt-9 -ml-[150px]">
                          <div className="grid grid-cols-5 gap-4 mb-3">
                            {/* Format Section */}
                            <div className="flex gap-2 items-center ml-[62px]">
                              <label className="font-medium text-xs text-end">
                                Format
                              </label>
                              <div className="w-1/2 sm:w-3/5">
                                <select
                                  id="Format"
                                  onChange={(e) =>
                                    handleFormatChange(e.target.value)
                                  }
                                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                                >
                                  <option value="Backlog">Backlog</option>
                                  <option value="Calc">Calc</option>
                                  <option value="Final">Final</option>
                                </select>
                              </div>
                            </div>

                            {/* Change Page, Target Year, Target Month Section */}

                            <div className="flex gap-2 items-center">
                              <label className="font-medium text-xs w-2/5 text-end -ml-[100px]">
                                Change_Page
                              </label>
                              <div className="w-3/5">
                                <select
                                  id="Change_Page"
                                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                                >
                                  <option value="No_Change">No_Change</option>
                                  <option value="Product_Grp">
                                    Product_Grp
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="flex gap-2 items-center">
                              <label className="font-medium text-xs w-2/5 text-end -ml-[150px]">
                                Target_Year
                              </label>
                              <div className="w-3/5">
                                <input
                                  disabled={!formState.targetYear}
                                  id="Target_Year"
                                  value={orderListData?.Target_Year || ""} // แสดงค่า Target_Year จาก state หรือค่าว่างถ้าไม่มีค่า
                                  onChange={(e) => handleInputChange(e)} // ฟังก์ชันจัดการการเปลี่ยนแปลง
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>
                            <div className="flex gap-2 items-center">
                              <label className="text-xs font-medium w-2/5 text-end -ml-[180px]">
                                Target_Month
                              </label>
                              <div className="w-3/5">
                                <select
                                  disabled={!formState.targetMonth}
                                  id="Target_Month"
                                  value={orderListData?.Target_Month || ""}
                                  onChange={(e) => handleInputChange(e)}
                                  className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                >
                                  <option value=""></option>
                                  {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                      {i + 1}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            {/* Order Progress Section */}
                            <div className="flex items-center ml-auto">
                              <label className="text-xs font-medium text-end pr-2">
                                Order_Progress
                              </label>
                              <div className="flex gap-2">
                                <select
                                  disabled={!formState.stOdProgressCD}
                                  id="S_St_Od_Progress_CD"
                                  value={
                                    orderListData?.S_St_Od_Progress_CD || ""
                                  }
                                  onChange={handleInputChange}
                                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-12"
                                >
                                  <option disabled>Od_Progress_Symbol | Od_Progress_Remark </option>
                            
                                  {Array.isArray(OdProgressData) &&
                                  OdProgressData.length > 0 ? (
                                    OdProgressData.map((item, index) => (
                                      <option
                                        key={index}
                                        value={item.Od_Progress_CD}
                                      >
                                        {item.Od_Progress_Symbol}{generateSpaces(2)} |{" "}{item.Od_Progress_Remark}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">ไม่มีข้อมูล</option>
                                  )}
                                </select>
                                <label>~</label>
                                <select
                                  disabled={!formState.edOdProgressCD}
                                  id="S_Ed_Od_Progress_CD"
                                  value={
                                    orderListData?.S_Ed_Od_Progress_CD || ""
                                  }
                                  onChange={(e) => handleInputChange(e)}
                                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-12"
                                >
                                  <option disabled>Od_Progress_Symbol | Od_Progress_Remark </option>
                                 
                                  {Array.isArray(OdProgressData) &&
                                  OdProgressData.length > 0 ? (
                                    OdProgressData.map((item, index) => (
                                      <option
                                        key={index}
                                        value={item.Od_Progress_CD}
                                      >
                                         {item.Od_Progress_Symbol}{generateSpaces(2)} |{" "}{item.Od_Progress_Remark}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">ไม่มีข้อมูล</option>
                                  )}
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 mb-3">
                            {/* Order_No Field */}
                            <div className="flex gap-2">
                              <label className="font-medium text-xs text-end pt-1 pl-[50px]">
                                Order_No
                              </label>
                              <div className="w-40">
                                <input
                                  disabled={!formState.orderNo}
                                  id="S_Order_No"
                                  value={orderListData?.S_Order_No || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>

                            {/* Ctl_Person Field Group (Expands to 3 columns on larger screens) */}
                            <div className="flex gap-2 pl-[510px]">
                              <label className="text-xs font-medium text-end ml-[148px]">
                                Ctl_Person
                              </label>
                              <div className="flex gap-2 w-3/5">
                                <select
                                  disabled={!formState.odCtlPersonCD}
                                  id="S_Od_Ctl_Person_CD"
                                  value={
                                    orderListData?.S_Od_Ctl_Person_CD || ""
                                  }
                                  onChange={handleInputChange}
                                  className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                                >
                                  <option disabled>
                                    Worker_CD | Worker_Abb | Worker_Remark
                                  </option>
                                  <option
                                    value={orderListData?.S_Od_Ctl_Person_CD || ""}
                                  >
                                    {orderListData?.S_Od_Ctl_Person_CD || ""}
                                  </option>
                                  {Array.isArray(WorkerData) &&
                                  WorkerData.length > 0 ? (
                                    WorkerData.map((item, index) => (
                                      <option
                                        key={index}
                                        value={item.Worker_CD}
                                      >
                                        {item.Worker_CD}{generateSpaces(2)} |{" "}{item.Worker_Abb}{generateSpaces(2)} |{" "}{item.Worker_Remark}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">ไม่มีข้อมูล</option>
                                  )}
                                </select>
                                <input
                                  disabled={!formState.odCtlPersonName}
                                  id="S_Od_Ctl_Person_Name"
                                  value={selectedSalesGrpAbb || ""}
                                  onChange={(event) => setWorkerData(event)}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>

                            {/* Delivery_CAT Field */}
                            <div className="flex gap-2 items-center ml-auto">
                              <label className="text-xs font-medium text-end">
                                Delivery_CAT
                              </label>
                              <div className="flex gap-2">
                                <select
                                  disabled={!formState.stDeliveryCD}
                                  id="S_St_Delivery_CD"
                                  value={orderListData?.S_St_Delivery_CD || ""}
                                  onChange={handleInputChange}
                                  className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                >
                                  <option value=""></option>
                                  {Array.isArray(DeliveryData) &&
                                  DeliveryData.length > 0 ? (
                                    DeliveryData.map((item, index) => (
                                      <option
                                        key={index}
                                        value={item.Delivery_CD}
                                      >
                                        {item.Delivery_Symbol}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">ไม่มีข้อมูล</option>
                                  )}
                                </select>
                                <label>~</label>
                                <select
                                  disabled={!formState.edDeliveryCD}
                                  id="S_Ed_Delivery_CD"
                                  value={orderListData?.S_Ed_Delivery_CD || ""}
                                  onChange={handleInputChange}
                                  className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                >
                                  <option value=""></option>
                                  {Array.isArray(DeliveryData) &&
                                  DeliveryData.length > 0 ? (
                                    DeliveryData.map((item, index) => (
                                      <option
                                        key={index}
                                        value={item.Delivery_CD}
                                      >
                                        {item.Delivery_Symbol}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">ไม่มีข้อมูล</option>
                                  )}
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 mb-3 pl-5">
                            {/* Nav_Name Field */}
                            <div className="flex gap-2 pl-6">
                              <label className="font-medium text-xs text-end pt-1">
                                Nav_Name
                              </label>
                              <div className="w-40">
                                <input
                                  disabled={!formState.navName}
                                  id="S_NAV_Name"
                                  value={orderListData?.S_NAV_Name || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>

                            {/* Product_Grp Field Group - Spans 3 columns on large screens */}
                            <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                              <div className="col-span-2 grid grid-cols-1 gap-2">
                                <div className="w-full flex items-center gap-2">
                                  <label className="text-xs font-medium text-end pl-[48px]">
                                    Product_Grp
                                  </label>
                                  <div className="flex justify-between gap-2">
                                    <select
                                      disabled={!formState.stPdGrpCD}
                                      id="S_St_Pd_Grp_CD"
                                      value={
                                        orderListData?.S_St_Pd_Grp_CD || ""
                                      }
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-44"
                                    >
                                      <option disabled>
                                        WorkG_CD | WorkG_Abb | WorkG_Name |
                                        WorkG_Remark
                                      </option>
                                      <option
                                        value={
                                          orderListData?.S_St_Pd_Grp_CD || ""
                                        }
                                      >
                                        {orderListData?.S_St_Pd_Grp_CD || ""}
                                      </option>
                                      {Array.isArray(WorkgData) &&
                                      WorkgData.length > 0 ? (
                                        WorkgData.map((item, index) => (
                                          <option
                                            key={index}
                                            value={item.WorkG_CD}
                                          >
                                            {item.WorkG_CD}
                                            {generateSpaces(2)} |{" "}
                                            {item.WorkG_Abb}
                                            {generateSpaces(2)} |{" "}
                                            {item.WorkG_Name}
                                            {generateSpaces(2)} |{" "}
                                            {item.WorkG_Remark}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">ไม่มีข้อมูล</option>
                                      )}
                                    </select>
                                    <input
                                      disabled={!formState.noPdGrpAbb1}
                                      id="S_No_Pd_Grp_Abb"
                                      value={destinationName}
                                      onChange={(event) => setWorkgData(event)}
                                      type="text"
                                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-20"
                                    />
                                    <label>~</label>
                                    <select
                                      disabled={!formState.edPdGrpCD}
                                      id="S_Ed_Pd_Grp_CD"
                                      value={
                                        orderListData?.S_Ed_Pd_Grp_CD || ""
                                      }
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                                    >
                                      <option disabled>
                                        WorkG_CD | WorkG_Abb | WorkG_Name |
                                        WorkG_Remark
                                      </option>
                                      <option
                                        value={
                                          orderListData?.S_Ed_Pd_Grp_CD || ""
                                        }
                                      >
                                        {orderListData?.S_Ed_Pd_Grp_CD || ""}
                                      </option>
                                      {Array.isArray(WorkgData) &&
                                      WorkgData.length > 0 ? (
                                        WorkgData.map((item, index) => (
                                          <option
                                            key={index}
                                            value={item.WorkG_CD}
                                          >
                                            {item.WorkG_CD}
                                            {generateSpaces(2)} |{" "}
                                            {item.WorkG_Abb}
                                            {generateSpaces(2)} |{" "}
                                            {item.WorkG_Name}
                                            {generateSpaces(2)} |{" "}
                                            {item.WorkG_Remark}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">ไม่มีข้อมูล</option>
                                      )}
                                    </select>
                                    <input
                                      disabled={!formState.edPdGrpAbb}
                                      id="S_Ed_Pd_Grp_Abb"
                                      value={destinationName2}
                                      onChange={(event) => setWorkgData(event)}
                                      type="text"
                                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Sales_Grp Field */}
                              <div className="flex gap-2 items-center">
                                <label className="text-xs font-medium text-end -ml-[1px]">
                                  Sales_Grp
                                </label>
                                <div className="flex gap-2">
                                  <select
                                    disabled={!formState.slGrpCD}
                                    id="S_Sl_Grp_CD"
                                    value={orderListData?.S_Sl_Grp_CD || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-24"
                                  >
                                    <option disabled>WorkG_CD | WorkG_Abb | WorkG_Name | WorkG_Remark</option>
                            <option value={orderListData?.S_Sl_Grp_CD || ""}>
                              {orderListData?.S_Sl_Grp_CD || ""}
                            </option>
                                    {Array.isArray(WorkgData) &&
                                    WorkgData.length > 0 ? (
                                      WorkgData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.WorkG_CD}
                                        >
                                          {item.WorkG_CD}{generateSpaces(2)} |{" "}{item.WorkG_Abb}{generateSpaces(2)} |{" "}{item.WorkG_Name}{generateSpaces(2)} |{" "}{item.WorkG_Remark}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.slGrpName}
                                    id="S_Sl_Grp_Name"
                                    value={destinationName5}
                                    onChange={(event) => setWorkgData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md -ml-0.5 w-24"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Schedule_CAT Field */}
                            <div className="flex gap-2 items-center ml-auto">
                              <label className="text-xs font-medium text-end">
                                Schedule_CAT
                              </label>
                              <div className="flex gap-2">
                                <select
                                  disabled={!formState.stScheduleCD}
                                  id="S_St_Schedule_CD"
                                  value={orderListData?.S_St_Schedule_CD || ""}
                                  onChange={handleInputChange}
                                  className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                >
                                  <option value=""></option>
                                  {Array.isArray(scheduleData) &&
                                  scheduleData.length > 0 ? (
                                    scheduleData.map((item, index) => (
                                      <option
                                        key={index}
                                        value={item.Schedule_CD}
                                      >
                                        {item.Schedule_Symbol}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">ไม่มีข้อมูล</option>
                                  )}
                                </select>
                                <label>~</label>
                                <select
                                  disabled={!formState.edScheduleCD}
                                  id="S_Ed_Schedule_CD"
                                  value={orderListData?.S_Ed_Schedule_CD || ""}
                                  onChange={handleInputChange}
                                  className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                >
                                  <option value=""></option>
                                  {Array.isArray(scheduleData) &&
                                  scheduleData.length > 0 ? (
                                    scheduleData.map((item, index) => (
                                      <option
                                        key={index}
                                        value={item.Schedule_CD}
                                      >
                                        {item.Schedule_Symbol}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">ไม่มีข้อมูล</option>
                                  )}
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 mb-3 pl-6">
                            {/* Product_Name Field */}
                            <div className="flex gap-2">
                              <label className="text-xs font-medium text-end pt-1">
                                Product_Name
                              </label>
                              <div className="w-40">
                                <input
                                  disabled={!formState.productName}
                                  id="S_Product_Name"
                                  value={orderListData?.S_Product_Name || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>

                            {/* Fields Spanning 3 Columns for Larger Screens */}
                            <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                              {/* Not_Pd_Grp1 Field */}
                              <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs text-end pl-[47px]">
                                  Not_Pd_Grp1
                                </label>
                                <div className="flex gap-2">
                                  <select
                                    disabled={!formState.noPdGrpCD1}
                                    id="S_No_Pd_Grp_CD1"
                                    value={orderListData?.S_No_Pd_Grp_CD1 || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-20"
                                  >
                                     <option disabled>WorkG_CD | WorkG_Abb | WorkG_Name | WorkG_Remark</option>
                            <option value={orderListData?.S_No_Pd_Grp_CD1 || ""}>
                              {orderListData?.S_No_Pd_Grp_CD1 || ""}
                            </option>
                                    {Array.isArray(WorkgData) &&
                                    WorkgData.length > 0 ? (
                                      WorkgData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.WorkG_CD}
                                        >
                                          {item.WorkG_CD}{generateSpaces(2)} |{" "}{item.WorkG_Abb}{generateSpaces(2)} |{" "}{item.WorkG_Name}{generateSpaces(2)} |{" "}{item.WorkG_Remark}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.noPdGrpAbb1}
                                    id="S_No_Pd_Grp_Abb1"
                                    value={destinationName3}
                                    onChange={(event) => setWorkgData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-20"
                                  />
                                </div>
                              </div>

                              {/* Price_CAT Field */}
                              <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs text-end ml-[9px]">
                                  Price_CAT
                                </label>
                                <div className="flex gap-2 w-3/5">
                                  <select
                                    disabled={!formState.priceCD}
                                    id="S_Price_CD"
                                    value={orderListData?.S_Price_CD || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                  >
                                    <option value=""></option>
                                    {Array.isArray(PriceData) &&
                                    PriceData.length > 0 ? (
                                      PriceData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Price_CD}
                                        >
                                          {item.Price_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.priceName}
                                    id="S_Price_Name"
                                    value={PriceName || ""}
                                    onChange={(event) => setPriceData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                </div>
                              </div>

                              {/* Sales_Person Field */}
                              <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs text-end -ml-12">
                                  Sales_Person
                                </label>
                                <div className="flex gap-2 w-full">
                                  <select
                                    disabled={!formState.slPersonCD}
                                    id="S_Sl_Person_CD"
                                    value={orderListData?.S_Sl_Person_CD || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-24"
                                  >
                                     <option disabled>Worker_CD | Worker_Abb | Worker_Remark</option>
                            <option value={orderListData?.S_Sl_Person_CD || ""}>
                              {orderListData?.S_Sl_Person_CD || ""}
                            </option>
                                    {Array.isArray(WorkerData) &&
                                    WorkerData.length > 0 ? (
                                      WorkerData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Worker_CD}
                                        >
                                          {item.Worker_CD}{generateSpaces(2)} |{" "}{item.Worker_Abb}{generateSpaces(2)} |{" "}{item.Worker_Remark}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.slPersonName}
                                    id="S_Sl_Person_Name"
                                    value={selectedSalesGrpAbb2 || ""}
                                    onChange={(event) => setWorkerData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md w-24"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Target_CAT Field */}
                            <div className="flex gap-2 items-center ml-auto">
                              <label className="text-xs font-medium text-end -ml-3">
                                Target_CAT
                              </label>
                              <div className="flex gap-2">
                                <select
                                  disabled={!formState.stTargetCD}
                                  id="S_St_Target_CD"
                                  value={orderListData?.S_St_Target_CD || ""}
                                  onChange={handleInputChange}
                                  className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                >
                                  <option value=""></option>
                                  {Array.isArray(TargetData) &&
                                  TargetData.length > 0 ? (
                                    TargetData.map((item, index) => (
                                      <option
                                        key={index}
                                        value={item.Target_CD}
                                      >
                                        {item.Target_Symbol}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">ไม่มีข้อมูล</option>
                                  )}
                                </select>
                                <label>~</label>
                                <select
                                  disabled={!formState.edTargetCD}
                                  id="S_Ed_Target_CD"
                                  value={orderListData?.S_Ed_Target_CD || ""}
                                  onChange={handleInputChange}
                                  className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                >
                                  <option value=""></option>
                                  {Array.isArray(TargetData) &&
                                  TargetData.length > 0 ? (
                                    TargetData.map((item, index) => (
                                      <option
                                        key={index}
                                        value={item.Target_CD}
                                      >
                                        {item.Target_Symbol}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">ไม่มีข้อมูล</option>
                                  )}
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 mb-3 pl-[54px]">
                            {/* NAV_Size Field */}
                            <div className="flex gap-2">
                              <label className="text-xs font-medium text-end pt-1">
                                NAV_Size
                              </label>
                              <div className="w-40">
                                <input
                                  disabled={!formState.navSize}
                                  id="S_NAV_Size"
                                  value={orderListData?.S_NAV_Size || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>

                            {/* Fields Spanning 3 Columns for Larger Screens */}
                            <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                              {/* Not_Pd_Grp2 Field */}
                              <div className="flex gap-2 items-center pl-11">
                                <label className="font-medium text-xs text-end">
                                  Not_Pd_Grp2
                                </label>
                                <div className="flex gap-2">
                                  <select
                                    disabled={!formState.noPdGrpCD2}
                                    id="S_No_Pd_Grp_CD2"
                                    value={orderListData?.S_No_Pd_Grp_CD2 || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-20"
                                  >
                                     <option disabled>WorkG_CD | WorkG_Abb | WorkG_Name | WorkG_Remark</option>
                            <option value={orderData?.Target_CD || ""}>
                              {orderData?.Target_CD || ""}
                            </option>
                                    {Array.isArray(WorkgData) &&
                                    WorkgData.length > 0 ? (
                                      WorkgData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.WorkG_CD}
                                        >
                                          {item.WorkG_CD}{generateSpaces(2)} |{" "}{item.WorkG_Abb}{generateSpaces(2)} |{" "}{item.WorkG_Name}{generateSpaces(2)} |{" "}{item.WorkG_Remark}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.noPdGrpAbb2}
                                    id="S_No_Pd_Grp_Abb2"
                                    value={destinationName4}
                                    onChange={(event) => setWorkgData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[82px]"
                                  />
                                </div>
                              </div>

                              {/* Request_CAT Fields */}
                              <div className="col-span-2 flex gap-2 items-center -ml-[60px]">
                                <label className="text-xs font-medium ">
                                  Request_CAT
                                </label>
                                <div className="flex gap-1">
                                  <select
                                    disabled={!formState.request1CD}
                                    id="S_Request1_CD"
                                    value={orderListData?.S_Request1_CD || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                  >
                                    <option value=""></option>
                                    {Array.isArray(Request1Data) &&
                                    Request1Data.length > 0 ? (
                                      Request1Data.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Request1_CD}
                                        >
                                          {item.Request1_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.request1Name}
                                    id="S_Request1_Name"
                                    value={request1Name}
                                    onChange={(event) => setRequest1Data(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                  <select
                                    disabled={!formState.request2CD}
                                    id="S_Request2_CD"
                                    value={orderListData?.S_Request2_CD || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                  >
                                    <option value=""></option>
                                    {Array.isArray(Request2Data) &&
                                    Request2Data.length > 0 ? (
                                      Request2Data.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Request2_CD}
                                        >
                                          {item.Request2_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.request2Name}
                                    id="S_Request2_Name"
                                    value={request2Name}
                                    onChange={(event) => setRequest2Data(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                  <select
                                    disabled={!formState.request3CD}
                                    id="S_Request3_CD"
                                    value={orderListData?.S_Request3_CD || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                  >
                                    <option value=""></option>
                                    {Array.isArray(Request3Data) &&
                                    Request3Data.length > 0 ? (
                                      Request3Data.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Request3_CD}
                                        >
                                          {item.Request3_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.request3Name}
                                    id="S_Request3_Name"
                                    value={request3Name}
                                    onChange={(event) => setRequest3Data(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Request_Delivery Field */}
                            <div className="flex gap-2 items-center ml-auto">
                              <label className="text-xs font-medium text-end">
                                Request_Delivery
                              </label>
                              <div className="flex gap-2">
                                <input
                                  disabled={!formState.stRequestDelivery}
                                  id="S_St_Request_Delivery"
                                  value={
                                    orderListData?.S_St_Request_Delivery
                                      ? orderListData.S_St_Request_Delivery.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                                <input
                                  disabled={!formState.edRequestDelivery}
                                  id="S_Ed_Request_Delivery"
                                  value={
                                    orderListData?.S_Ed_Request_Delivery
                                      ? orderListData.S_Ed_Request_Delivery.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 mb-3 pl-[36px]">
                            {/* Product_Size Field */}
                            <div className="flex gap-2">
                              <label className="text-xs font-medium text-end pt-1">
                                Product_Size
                              </label>
                              <div className="w-40">
                                <input
                                  disabled={!formState.productSize}
                                  id="S_Product_Size"
                                  value={orderListData?.S_Product_Size || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>

                            {/* Customer and Related Fields */}
                            <div className="flex gap-2">
                              {/* Customer1 Field */}
                              <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs text-end pl-[58px]">
                                  Customer1
                                </label>
                                <div className="flex gap-2 w-44">
                                  <select
                                    disabled={!formState.customerCD1}
                                    id="S_Customer_CD1"
                                    value={orderListData?.S_Customer_CD1 || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                                  >
                                    <option disabled>Customer_CD | Customer_Abb | Customer_Name | Customer_Remark</option>
                            <option value={orderListData?.S_Customer_CD1 || ""}>
                              {orderListData?.S_Customer_CD1 || ""}
                            </option>
                                    {Array.isArray(CustomerData) &&
                                    CustomerData.length > 0 ? (
                                      CustomerData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Customer_CD}
                                        >
                                          {item.Customer_CD}{generateSpaces(2)} |{" "}{item.Customer_Abb}{generateSpaces(2)} |{" "}{item.Customer_Name}{generateSpaces(2)} |{" "}{item.Customer_Remark}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.customerAbb1}
                                    id="S_Customer_Abb1"
                                    value={selectedCustomerAbb || ""}
                                    onChange={(event) => setCustomerData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                </div>
                              </div>

                              {/* Od_No_of_Customer Field */}
                              <div className="flex gap-2">
                                <div className="flex justify-end items-center gap-2">
                                  <label className="text-xs font-medium w-auto text-end">
                                    Od_No_of_Customer
                                  </label>
                                  <div>
                                    <input
                                      disabled={!formState.odNoOfCustom}
                                      id="S_Od_No_of_Custom"
                                      value={
                                        orderListData?.S_Od_No_of_Custom || ""
                                      }
                                      onChange={handleInputChange}
                                      type="text"
                                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-36"
                                    />
                                  </div>
                                </div>
                                {/* Mate1 Field */}
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end pl-[252px]">
                                    Mate1
                                  </label>
                                  <div>
                                    <input
                                      disabled={!formState.material1}
                                      id="S_Material1"
                                      value={orderListData?.S_Material1 || ""}
                                      onChange={handleInputChange}
                                      type="text"
                                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* NAV_Delivery Fields */}
                            <div className="flex gap-2 items-center ml-auto">
                              <label className="text-xs font-medium text-end">
                                NAV_Delivery
                              </label>
                              <div className="flex gap-2 w-3/5">
                                <input
                                  disabled={!formState.stNAVDelivery}
                                  id="S_St_NAV_Delivery"
                                  value={
                                    orderListData?.S_St_NAV_Delivery
                                      ? orderListData.S_St_NAV_Delivery.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                                <input
                                  disabled={!formState.edNAVDelivery}
                                  id="S_Ed_NAV_Delivery"
                                  value={
                                    orderListData?.S_Ed_NAV_Delivery
                                      ? orderListData.S_Ed_NAV_Delivery.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 mb-3 pl-[31px]">
                            {/* Cus_Draw_No Field */}
                            <div className="flex gap-2">
                              <label className="text-xs font-medium text-end pt-1">
                                Cus_Draw_No
                              </label>
                              <div className="w-40">
                                <input
                                  disabled={!formState.customerDraw}
                                  id="S_Customer_Draw"
                                  value={orderListData?.S_Customer_Draw || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>

                            {/* Customer2 and Related Fields */}
                            <div className="flex gap-2">
                              {/* Customer2 Field */}
                              <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs text-end pl-14">
                                  Customer2
                                </label>
                                <div className="flex gap-2">
                                  <select
                                    disabled={!formState.customerCD2}
                                    id="S_Customer_CD2"
                                    value={orderListData?.S_Customer_CD2 || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-[84px]"
                                  >
                                    <option disabled>Customer_CD | Customer_Abb | Customer_Name | Customer_Remark</option>
                            <option value={orderListData?.S_Customer_CD2 || ""}>
                              {orderListData?.S_Customer_CD2 || ""}
                            </option>
                                    {Array.isArray(CustomerData) &&
                                    CustomerData.length > 0 ? (
                                      CustomerData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Customer_CD}
                                        >
                                          {item.Customer_CD}{generateSpaces(2)} |{" "}{item.Customer_Abb}{generateSpaces(2)} |{" "}{item.Customer_Name}{generateSpaces(2)} |{" "}{item.Customer_Remark}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.customerAbb2}
                                    id="S_Customer_Abb2"
                                    value={selectedCustomerAbb2 || ""}
                                    onChange={(event) => setCustomerData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[84px]"
                                  />
                                </div>
                              </div>

                              {/* Cus_Name1, Item1, Mate2 Fields */}
                              <div className="flex gap-2">
                                {/* Cus_Name1 Field */}
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end">
                                    Cus_Name1
                                  </label>
                                  <input
                                    disabled={!formState.customerName1}
                                    id="S_Customer_Name1"
                                    value={
                                      orderListData?.S_Customer_Name1 || ""
                                    }
                                    onChange={handleInputChange}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md w-20"
                                  />
                                </div>

                                {/* Item1 Field */}
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end">
                                    Item1
                                  </label>
                                  <div className="flex gap-2 w-2/3">
                                    <select
                                      disabled={!formState.item1CD}
                                      id="S_Item1_CD"
                                      value={orderListData?.S_Item1_CD || ""}
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-24"
                                    >
                                      <option disabled>Item1_CD | Item1_Abb | Item1_Remark</option>
                            <option value={orderListData?.S_Item1_CD || ""}>
                              {orderListData?.S_Item1_CD || ""}
                            </option>
                                      {Array.isArray(Item1Data) &&
                                      Item1Data.length > 0 ? (
                                        Item1Data.map((item, index) => (
                                          <option
                                            key={index}
                                            value={item.Item1_CD}
                                          >
                                            {item.Item1_CD}{generateSpaces(2)} |{" "}{item.Item1_Abb}{generateSpaces(2)} |{" "}{item.Item1_Remark}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">ไม่มีข้อมูล</option>
                                      )}
                                    </select>
                                    <input
                                      disabled={!formState.item1Name}
                                      id="S_Item1_Name"
                                      value={itemName || ""}
                                      onChange={(event) => setItem1Data(event)}
                                      type="text"
                                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-44"
                                    />
                                  </div>
                                </div>

                                {/* Mate2 Field */}
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium ml-[39px]">
                                    Mate2
                                  </label>
                                  <input
                                    disabled={!formState.material2}
                                    id="S_Material2"
                                    value={orderListData?.S_Material2 || ""}
                                    onChange={handleInputChange}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Confirm_Delivery Fields */}
                            <div className="flex gap-2 items-center ml-auto">
                              <label className="text-xs font-medium text-end">
                                Confirm_Delivery
                              </label>
                              <div className="flex gap-2 w-3/5">
                                <input
                                  disabled={!formState.stConfirmDelivery}
                                  id="S_St_Confirm_Delivery"
                                  value={
                                    orderListData?.S_St_Confirm_Delivery
                                      ? orderListData.S_St_Confirm_Delivery.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                                <input
                                  disabled={!formState.edConfirmDelivery}
                                  id="S_Ed_Confirm_Delivery"
                                  value={
                                    orderListData?.S_Ed_Confirm_Delivery
                                      ? orderListData.S_Ed_Confirm_Delivery.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 mb-3 pl-[27px]">
                            {/* Com_Draw_No Field */}
                            <div className="flex gap-2">
                              <label className="text-xs font-medium text-end pt-1">
                                Com_Draw_No
                              </label>
                              <div className="w-40">
                                <input
                                  disabled={!formState.companyDraw}
                                  id="S_Company_Draw"
                                  value={orderListData?.S_Company_Draw || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>

                            {/* Customer3, Cus_Name2, Item2 Fields */}
                            <div className="flex gap-2">
                              {/* Customer3 Field */}
                              <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs text-end pl-14">
                                  Customer3
                                </label>
                                <div className="flex gap-2">
                                  <select
                                    disabled={!formState.customerCD3}
                                    id="S_Customer_CD3"
                                    value={orderListData?.S_Customer_CD3 || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-[84px]"
                                  >
                                     <option disabled>Customer_CD | Customer_Abb | Customer_Name | Customer_Remark</option>
                            <option value={orderListData?.S_Customer_CD3 || ""}>
                              {orderListData?.S_Customer_CD3 || ""}
                            </option>
                                    {Array.isArray(CustomerData) &&
                                    CustomerData.length > 0 ? (
                                      CustomerData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Customer_CD}
                                        >
                                          {item.Customer_CD}{generateSpaces(2)} |{" "}{item.Customer_Abb}{generateSpaces(2)} |{" "}{item.Customer_Name}{generateSpaces(2)} |{" "}{item.Customer_Remark}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.customerAbb3}
                                    id="S_Customer_Abb3"
                                    value={selectedCustomerAbb3 || ""}
                                    onChange={(event) => setCustomerData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[84px]"
                                  />
                                </div>
                              </div>

                              {/* Cus_Name2, Item2, Mate3 Fields */}
                              <div className="flex gap-2">
                                {/* Cus_Name2 Field */}
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end -ml-1">
                                    Cus_Name2
                                  </label>
                                  <input
                                    disabled={!formState.customerName2}
                                    id="S_Customer_Name2"
                                    value={
                                      orderListData?.S_Customer_Name2 || ""
                                    }
                                    onChange={handleInputChange}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-20"
                                  />
                                </div>

                                {/* Item2 Field */}
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end">
                                    Item2
                                  </label>
                                  <div className="flex gap-2">
                                    <select
                                      disabled={!formState.item2CD}
                                      id="S_Item2_CD"
                                      value={orderListData?.S_Item2_CD || ""}
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-white w-[105px]"
                                    >
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                    </select>
                                    <input
                                      disabled={!formState.item2Name}
                                      id="S_Item2_Name"
                                      value={orderListData?.S_Item2_Name || ""}
                                      onChange={handleInputChange}
                                      type="text"
                                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[105px]"
                                    />
                                  </div>
                                </div>

                                {/* Mate3 Field */}
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end pl-[99px]">
                                    Mate3
                                  </label>
                                  <input
                                    disabled={!formState.material3}
                                    id="S_Material3"
                                    value={orderListData?.S_Material3 || ""}
                                    onChange={handleInputChange}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Product_Delivery Fields */}
                            <div className="flex gap-2 items-center ml-auto">
                              <label className="text-xs font-medium text-end">
                                Product_Delivery
                              </label>
                              <div className="flex gap-2 w-3/5">
                                <input
                                  disabled={!formState.stProductDelivery}
                                  id="S_St_Product_Delivery"
                                  value={
                                    orderListData?.S_St_Product_Delivery
                                      ? orderListData.S_St_Product_Delivery.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                                <input
                                  disabled={!formState.edProductDelivery}
                                  id="S_Ed_Product_Delivery"
                                  value={
                                    orderListData?.S_Ed_Product_Delivery
                                      ? orderListData.S_Ed_Product_Delivery.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Outer Grid Container */}
                          <div className="flex gap-2 mb-3 pl-[37px]">
                            {/* Pd_Draw_No Field */}
                            <div className="flex gap-2">
                              <label className="text-xs font-medium text-end pt-1">
                                Pd_Draw_No
                              </label>
                              <div className="w-40">
                                <input
                                  disabled={!formState.productDraw}
                                  id="S_Product_Draw"
                                  value={orderListData?.S_Product_Draw || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>

                            {/* Note_Customer Section */}
                            <div className="flex gap-2">
                              <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs text-end pl-[31px]">
                                  Note_Customer
                                </label>
                                <div className="flex gap-2">
                                  <select
                                    disabled={!formState.noCustomerCD}
                                    id="S_No_Customer_CD"
                                    value={
                                      orderListData?.S_No_Customer_CD || ""
                                    }
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-[85px]"
                                  >
                                     <option disabled>Customer_CD | Customer_Abb | Customer_Name | Customer_Remark</option>
                            <option value={orderListData?.S_No_Customer_CD || ""}>
                              {orderListData?.S_No_Customer_CD || ""}
                            </option>
                                    {Array.isArray(CustomerData) &&
                                    CustomerData.length > 0 ? (
                                      CustomerData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Customer_CD}
                                        >
                                          {item.Customer_CD}{generateSpaces(2)} |{" "}{item.Customer_Abb}{generateSpaces(2)} |{" "}{item.Customer_Name}{generateSpaces(2)} |{" "}{item.Customer_Remark}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.noCustomerAbb}
                                    id="S_No_Customer_Abb"
                                    value={selectedCustomerAbb4 || ""}
                                    onChange={(event) => setCustomerData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[85px]"
                                  />
                                </div>
                              </div>

                              {/* Additional Fields - Cus_Name3, Item3, Mate4 */}
                              <div className="flex gap-2">
                                {/* Cus_Name3 */}
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end -ml-1">
                                    Cus_Name3
                                  </label>
                                  <input
                                    disabled={!formState.customerName3}
                                    id="S_No_Customer_Name3"
                                    value={
                                      orderListData?.S_No_Customer_Name3 || ""
                                    }
                                    onChange={handleInputChange}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-20"
                                  />
                                </div>

                                {/* Item3 */}
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end">
                                    Item3
                                  </label>
                                  <div className="flex gap-2 w-4/5">
                                    <select
                                      disabled={!formState.item3CD}
                                      id="S_Item3_CD"
                                      value={orderListData?.S_Item3_CD || ""}
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                    >
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                    </select>
                                    <input
                                      disabled={!formState.item3Name}
                                      id="S_Item3_Name"
                                      type="text"
                                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                    />
                                  </div>
                                </div>

                                {/* Mate4 */}
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end pl-[84px]">
                                    Mate4
                                  </label>
                                  <input
                                    disabled={!formState.material4}
                                    id="S_Material4"
                                    value={orderListData?.S_Material4 || ""}
                                    onChange={handleInputChange}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Product_Received Fields */}
                            <div className="flex gap-2 items-center ml-auto">
                              <label className="text-xs font-medium text-end">
                                Product_Received
                              </label>
                              <div className="flex gap-2 w-3/5">
                                <input
                                  disabled={!formState.stPdReceivedDate}
                                  id="S_St_Pd_Received_Date"
                                  value={
                                    orderListData?.S_St_Pd_Received_Date
                                      ? orderListData.S_St_Pd_Received_Date.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                                <input
                                  disabled={!formState.edPdReceivedDate}
                                  id="S_Ed_Pd_Received_Date"
                                  value={
                                    orderListData?.S_Ed_Pd_Received_Date
                                      ? orderListData.S_Ed_Pd_Received_Date.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Second Group for Sales_Note Section */}
                          <div className="flex gap-2 mb-3 pl-[45px]">
                            {/* Sales_Note Field */}
                            <div className="flex gap-2">
                              <label className="text-xs font-medium text-end pt-1">
                                Sales_Note
                              </label>
                              <div className="w-40">
                                <input
                                  disabled={!formState.slInstructions}
                                  id="S_Sl_instructions"
                                  value={orderListData?.S_Sl_instructions || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>

                            {/* Specific1, Coating1, Item4 Section */}
                            <div className="flex gap-2">
                              {/* Specific1 */}
                              <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs text-end pl-[70px]">
                                  Specific1
                                </label>
                                <div className="flex gap-2">
                                  <select
                                    disabled={!formState.specificCD1}
                                    id="S_Specific_CD1"
                                    value={orderListData?.S_Specific_CD1 || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-[85px]"
                                  >
                                     <option disabled>Specific_CD | Specific_Abb | Specific_Remark</option>
                            <option value={orderListData?.S_Specific_CD1 || ""}>
                              {orderListData?.S_Specific_CD1 || ""}
                            </option>
                                    {Array.isArray(SpecificData) &&
                                    SpecificData.length > 0 ? (
                                      SpecificData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Specific_CD}
                                        >
                                          {item.Specific_CD}{generateSpaces(2)} |{" "}{item.Specific_Abb}{generateSpaces(2)} |{" "}{item.Specific_Remark}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.specificName1}
                                    id="S_Specific_Name1"
                                    value={SpecificName || ""}
                                    onChange={(event) => setSpecificData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[85px]"
                                  />
                                </div>
                              </div>

                              {/* Additional Fields - Coating1, Item4, Mate5 */}
                              <div className="flex gap-2">
                                {/* Coating1 */}
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end">
                                    Coating1
                                  </label>
                                  <select
                                    disabled={!formState.coatingCD1}
                                    id="S_Coating_CD1"
                                    value={orderListData?.S_Coating_CD1 || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-20"
                                  >
                                   <option disabled>Coating_CD | Coating_Symbol | Coating_Remark</option>
                            <option value={orderListData?.S_Coating_CD1 || ""}>
                              {orderListData?.S_Coating_CD1 || ""}
                            </option>
                                    {Array.isArray(CoatingData) &&
                                    CoatingData.length > 0 ? (
                                      CoatingData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Coating_CD}
                                        >
                                          {item.Coating_CD}{generateSpaces(2)} |{" "}{item.Coating_Symbol}{generateSpaces(2)} |{" "}{item.Coating_Remark}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.coatingName1}
                                    id="S_Coating_Name1"
                                    value={coatingName || ""}
                                    onChange={(event) => setCoatingData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[120px]"
                                  />
                                </div>

                                {/* Item4 */}
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end">
                                    Item4
                                  </label>
                                  <div className="flex gap-2">
                                    <select
                                      disabled={!formState.item4CD}
                                      id="S_Item4_CD"
                                      value={orderListData?.S_Item4_CD || ""}
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                    >
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                    </select>
                                    <input
                                      disabled={!formState.item4Name}
                                      id="S_Item4_Name"
                                      value={orderListData?.S_Item4_Name || ""}
                                      onChange={handleInputChange}
                                      type="text"
                                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                    />
                                  </div>
                                </div>

                                {/* Mate5 */}
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end pl-2">
                                    Mate5
                                  </label>
                                  <input
                                    disabled={!formState.material5}
                                    id="S_Material5"
                                    value={orderListData?.S_Material5 || ""}
                                    onChange={handleInputChange}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* Product_Complete Fields */}
                            <div className="flex gap-2 items-center ml-auto">
                              <label className="text-xs font-medium text-end">
                                Product_Complete
                              </label>
                              <div className="flex gap-2">
                                <input
                                  disabled={!formState.stPdCompleteDate}
                                  id="S_St_Pd_Complete_Date"
                                  value={
                                    orderListData?.S_St_Pd_Complete_Date
                                      ? orderListData.S_St_Pd_Complete_Date.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                                <input
                                  disabled={!formState.edPdCompleteDate}
                                  id="S_Ed_Pd_Complete_Date"
                                  value={
                                    orderListData?.S_Ed_Pd_Complete_Date
                                      ? orderListData.S_Ed_Pd_Complete_Date.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex mb-3 pl-[57px]">
                            <div className="flex gap-2">
                              <label className="text-xs font-medium text-end pt-1">
                                Pd_Note
                              </label>
                              <div className="w-40">
                                <input
                                  disabled={!formState.pdNote}
                                  id="S_Pd_instructions"
                                  value={orderListData?.S_Pd_instructions || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs text-end ml-[78px]">
                                  Specific2
                                </label>
                                <div className="flex gap-2">
                                  <select
                                    disabled={!formState.specificCD2}
                                    id="S_Specific_CD2"
                                    value={orderListData?.S_Specific_CD2 || ""}
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-[85px]"
                                  >
                                    <option disabled>Specific_CD | Specific_Abb | Specific_Remark</option>
                            <option value={orderListData?.S_Specific_CD2 || ""}>
                              {orderListData?.S_Specific_CD2 || ""}
                            </option>
                                    {Array.isArray(SpecificData) &&
                                    SpecificData.length > 0 ? (
                                      SpecificData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Specific_CD}
                                        >
                                           {item.Specific_CD}{generateSpaces(2)} |{" "}{item.Specific_Abb}{generateSpaces(2)} |{" "}{item.Specific_Remark}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.specificName2}
                                    id="S_Specific_Name2"
                                    value={SpecificName2 || ""}
                                    onChange={(event) => setSpecificData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[85px]"
                                  />
                                </div>
                              </div>

                              <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-2">
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end">
                                    Coating2
                                  </label>
                                  <div className="flex gap-2">
                                    <select
                                      disabled={!formState.coatingCD2}
                                      id="S_Coating_CD2"
                                      value={orderListData?.S_Coating_CD2 || ""}
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-20"
                                    >
                                      <option disabled>Specific_CD | Specific_Abb | Specific_Remark</option>
                            <option value={orderListData?.S_Coating_CD2 || ""}>
                              {orderListData?.S_Coating_CD2 || ""}
                            </option>
                                      {Array.isArray(CoatingData) &&
                                      CoatingData.length > 0 ? (
                                        CoatingData.map((item, index) => (
                                          <option
                                            key={index}
                                            value={item.Coating_CD}
                                          >
                                            {item.Coating_CD}{generateSpaces(2)} |{" "}{item.Coating_Symbol}{generateSpaces(2)} |{" "}{item.Coating_Remark}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">ไม่มีข้อมูล</option>
                                      )}
                                    </select>
                                    <input
                                      disabled={!formState.coatingName2}
                                      id="S_Coating_Name1"
                                      value={coatingName2 || ""}
                                      onChange={(event) =>
                                        setCoatingData(event)
                                      }
                                      type="text"
                                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[118px]"
                                    />
                                  </div>
                                </div>

                                <div className="flex gap-2 items-center">
                                  <label className="font-medium text-xs text-end pl-2">
                                    Od_Pend
                                  </label>
                                  <div className="flex gap-2">
                                    <select
                                      disabled={!formState.odPending}
                                      id="S_Od_Pending"
                                      value={orderListData?.S_Od_Pending || ""}
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-[#FFF] w-32"
                                    >
                                      <option value=""></option>
                                      <option value="true">Yes</option>
                                      <option value="false">No</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                  <label className="font-medium text-xs text-end -ml-10">
                                    Od_CAT1
                                  </label>
                                  <div className="flex gap-2">
                                    <select
                                      disabled={!formState.odCAT1}
                                      id="S_Od_CAT1"
                                      value={orderListData?.S_Od_CAT1 || ""}
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-[#FFF)] w-32"
                                    >
                                      <option value=""></option>
                                      <option value="true">Yes</option>
                                      <option value="false">No</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2 items-center ml-auto">
                              <label className="text-xs font-medium text-end">
                                QC_Complete
                              </label>
                              <div className="flex gap-2">
                                <input
                                  disabled={!formState.stICompleteDate}
                                  id="S_St_I_Complete_Date"
                                  value={
                                    orderListData?.S_St_I_Complete_Date
                                      ? orderListData.S_St_I_Complete_Date.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                                <input
                                  disabled={!formState.edICompleteDate}
                                  id="S_Ed_I_Complete_Date"
                                  value={
                                    orderListData?.S_Ed_I_Complete_Date
                                      ? orderListData.S_Ed_I_Complete_Date.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex mb-3 pl-[43px]">
                            <div className="flex gap-2">
                              <label className="text-xs font-medium text-end">
                                Pd_Remark
                              </label>
                              <div className="w-40">
                                <input
                                  disabled={!formState.pdRemark}
                                  id="S_Pd_Remark"
                                  value={orderListData?.S_Pd_Remark || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs text-end pl-14">
                                  Not_Specific1
                                </label>
                                <div className="flex gap-2">
                                  <select
                                    disabled={!formState.noSpecificCD1}
                                    id="S_No_Specific_CD1"
                                    value={
                                      orderListData?.S_No_Specific_CD1 || ""
                                    }
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-[85px]"
                                  >
                                   <option disabled>Specific_CD | Specific_Abb | Specific_Remark</option>
                            <option value={orderListData?.S_No_Specific_CD1 || ""}>
                              {orderListData?.S_No_Specific_CD1 || ""}
                            </option>
                                    {Array.isArray(SpecificData) &&
                                    SpecificData.length > 0 ? (
                                      SpecificData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Specific_CD}
                                        >
                                          {item.Specific_CD}{generateSpaces(2)} |{" "}{item.Specific_Abb}{generateSpaces(2)} |{" "}{item.Specific_Remark}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.noSpecificName1}
                                    id="S_No_Specific_Name1"
                                    value={SpecificName3 || ""}
                                    onChange={(event) => setSpecificData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[85px]"
                                  />
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end">
                                    Coating3
                                  </label>
                                  <div className="flex gap-2">
                                    <select
                                      disabled={!formState.coatingCD3}
                                      id="S_Coating_CD3"
                                      value={orderListData?.S_Coating_CD3 || ""}
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-20"
                                    >
                                      <option disabled>Coating_CD | Coating_Symbol | Coating_Remark</option>
                            <option value={orderListData?.S_Coating_CD3 || ""}>
                              {orderListData?.S_Coating_CD3 || ""}
                            </option>
                                      {Array.isArray(CoatingData) &&
                                      CoatingData.length > 0 ? (
                                        CoatingData.map((item, index) => (
                                          <option
                                            key={index}
                                            value={item.Coating_CD}
                                          >
                                             {item.Coating_CD}{generateSpaces(2)} |{" "}{item.Coating_Symbol}{generateSpaces(2)} |{" "}{item.Coating_Remark}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">ไม่มีข้อมูล</option>
                                      )}
                                    </select>
                                    <input
                                      disabled={!formState.coatingName3}
                                      id="S_Coating_Name3"
                                      value={coatingName3 || ""}
                                      onChange={(event) =>
                                        setCoatingData(event)
                                      }
                                      type="text"
                                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[115px]"
                                    />
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end">
                                    TempShip
                                  </label>
                                  <div className="w-14">
                                    <select
                                      disabled={!formState.tempShipment}
                                      id="S_Temp_Shipment"
                                      value={
                                        orderListData?.S_Temp_Shipment || ""
                                      }
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-white w-32"
                                    >
                                      <option value=""></option>
                                      <option value="true">Yes</option>
                                      <option value="false">No</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end pl-[95px]">
                                    Od_CAT2
                                  </label>
                                  <div className="w-32">
                                    <select
                                      disabled={!formState.odCAT2}
                                      id="S_Od_CAT2"
                                      value={orderListData?.S_Od_CAT2 || ""}
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                    >
                                      <option value=""></option>
                                      <option value="true">Yes</option>
                                      <option value="false">No</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-2 items-center ml-auto">
                              <label className="text-xs font-medium text-end">
                                Shipment_Date
                              </label>
                              <div className="flex gap-2">
                                <input
                                  disabled={!formState.stShipmentDate}
                                  id="S_St_Shipment_Date"
                                  value={
                                    orderListData?.S_St_Shipment_Date
                                      ? orderListData.S_St_Shipment_Date.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                                <input
                                  disabled={!formState.edShipmentDate}
                                  id="S_Ed_Shipment_Date"
                                  value={
                                    orderListData?.S_Ed_Shipment_Date
                                      ? orderListData.S_Ed_Shipment_Date.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 mb-3 pl-[40px]">
                            <div className="flex gap-2">
                              <label className="text-xs font-medium text-end pt-1">
                                QC_Remark
                              </label>
                              <div className="w-40">
                                <input
                                  disabled={!formState.iRemark}
                                  id="S_I_Remark"
                                  value={orderListData?.S_I_Remark || ""}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <div className="flex gap-2 items-center">
                                <label className="font-medium text-xs text-end pl-12">
                                  Not_Specific2
                                </label>
                                <div className="flex gap-2">
                                  <select
                                    disabled={!formState.noSpecificCD2}
                                    id="S_No_Specific_CD2"
                                    value={
                                      orderListData?.S_No_Specific_CD2 || ""
                                    }
                                    onChange={handleInputChange}
                                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-[85px]"
                                  >
                                  <option disabled>Specific_CD | Specific_Abb | Specific_Remark</option>
                            <option value={ orderListData?.S_No_Specific_CD2 || ""}>
                              { orderListData?.S_No_Specific_CD2 || ""}
                            </option>
                                    {Array.isArray(SpecificData) &&
                                    SpecificData.length > 0 ? (
                                      SpecificData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Specific_CD}
                                        >
                                          {item.Specific_CD}{generateSpaces(2)} |{" "}{item.Specific_Abb}{generateSpaces(2)} |{" "}{item.Specific_Remark}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                  <input
                                    disabled={!formState.noSpecificName2}
                                    id="S_No_Specific_Name2"
                                    value={SpecificName4 || ""}
                                    onChange={(event) => setSpecificData(event)}
                                    type="text"
                                    className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[85px]"
                                  />
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end">
                                    Not_Coat
                                  </label>
                                  <div className="flex gap-2 -ml-1">
                                    <select
                                      disabled={!formState.noCoatingCD}
                                      id="S_No_Coating_CD"
                                      value={
                                        orderListData?.S_No_Coating_CD || ""
                                      }
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-20"
                                    >
                                     <option disabled>Coating_CD | Coating_Symbol | Coating_Remark</option>
                            <option value={orderListData?.S_No_Coating_CD || ""}>
                              {orderListData?.S_No_Coating_CD || ""}
                            </option>
                                      {Array.isArray(CoatingData) &&
                                      CoatingData.length > 0 ? (
                                        CoatingData.map((item, index) => (
                                          <option
                                            key={index}
                                            value={item.Coating_CD}
                                          >
                                            {item.Coating_CD}{generateSpaces(2)} |{" "}{item.Coating_Symbol}{generateSpaces(2)} |{" "}{item.Coating_Remark}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">ไม่มีข้อมูล</option>
                                      )}
                                    </select>
                                    <input
                                      disabled={!formState.noCoatingName}
                                      id="S_No_Coating_Name"
                                      value={coatingName4 || ""}
                                      onChange={(event) =>
                                        setCoatingData(event)
                                      }
                                      type="text"
                                      className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-[115px]"
                                    />
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end pl-2">
                                    Unrecive
                                  </label>
                                  <div className="w-32">
                                    <select
                                      disabled={!formState.unreceived}
                                      id="S_Unreceived"
                                      value={orderListData?.S_Unreceived || ""}
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                    >
                                      <option value=""></option>
                                      <option value="true">Yes</option>
                                      <option value="false">No</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                  <label className="text-xs font-medium text-end pl-5">
                                    Od_CAT3
                                  </label>
                                  <div className="w-32">
                                    <select
                                      disabled={!formState.odCAT3}
                                      id="S_Od_CAT3"
                                      value={orderListData?.S_Od_CAT3 || ""}
                                      onChange={handleInputChange}
                                      className="border-gray-500 border-solid border-2 rounded-md bg-white w-full"
                                    >
                                      <option value=""></option>
                                      <option value="true">Yes</option>
                                      <option value="false">No</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2 items-center ml-auto">
                              <label className="text-xs font-medium text-end">
                                Calc_Date
                              </label>
                              <div className="flex gap-2">
                                <input
                                  disabled={!formState.stCalcDate}
                                  id="S_St_Calc_Date"
                                  value={
                                    orderListData?.S_St_Calc_Date
                                      ? orderListData.S_St_Calc_Date.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                                <input
                                  disabled={!formState.edCalcDate}
                                  id="S_Ed_Calc_Date"
                                  value={
                                    orderListData?.S_Ed_Calc_Date
                                      ? orderListData.S_Ed_Calc_Date.substring(
                                          0,
                                          10
                                        )
                                      : ""
                                  }
                                  onChange={(event) => handleInputChange(event)}
                                  type="date"
                                  className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-5 gap-2 mb-3">
                            <div className="grid grid-cols-6 col-span-4 gap-6">
                              <button className="h-16 w-40 bg-blue-500 rounded-lg hover:bg-blue-700">
                                <label className="text-white font-semibold text-sm">
                                  Target_Conv1
                                </label>
                                <label className="flex justify-center gap-2 items-center text-white">
                                  (
                                  <FaCircle />
                                  <IoIosArrowRoundForward className="text-2xl" />
                                  <MdStarRate />)
                                </label>
                              </button>
                              <button className="h-16 w-40 bg-blue-500 rounded-lg hover:bg-blue-700">
                                <label className="text-white font-semibold text-sm">
                                  Target_Conv2
                                </label>
                                <label className="flex justify-center gap-2 items-center text-white">
                                  (
                                  <FaSquareFull />
                                  <IoIosArrowRoundForward className="text-2xl" />
                                  <FaCircle />)
                                </label>
                              </button>
                              <button className="h-16 w-40 bg-blue-500 rounded-lg hover:bg-blue-700">
                                <label className="text-white font-semibold text-sm">
                                  Target_Conv3
                                </label>
                                <label className="flex justify-center gap-2 items-center text-white">
                                  ( Null
                                  <IoIosArrowRoundForward className="text-2xl" />
                                  <FaCircle />)
                                </label>
                              </button>
                              <button className="h-16 w-40 bg-blue-500 rounded-lg hover:bg-blue-700">
                                <label className="text-white font-semibold text-sm">
                                  Target_Conv4
                                </label>
                                <label className="flex justify-center gap-2 items-center text-white">
                                  ( Null
                                  <IoIosArrowRoundForward className="text-2xl" />
                                  <FaSquareFull />)
                                </label>
                              </button>
                              <button className="h-16 w-40 bg-blue-500 rounded-lg hover:bg-blue-700">
                                <label className="text-white font-semibold text-sm">
                                  Target_Conv5
                                </label>
                                <label className="flex justify-center gap-2 items-center text-white">
                                  (
                                  <IoIosArrowRoundForward className="text-2xl" />
                                  Null )
                                </label>
                              </button>
                              <button className="h-16 w-40 bg-blue-500 rounded-lg hover:bg-blue-700">
                                <label className="text-white font-semibold text-sm">
                                  FG_SUM
                                </label>
                              </button>
                            </div>

                            <div className="gap-2 items-center grid grid-cols-1">
                              <div className="flex gap-2 -ml-8">
                                <label className="text-xs font-medium pt-1">
                                  Cale_Process
                                </label>
                                <div className="flex gap-2">
                                  <input
                                    disabled={!formState.stCalcProcessDate}
                                    id="S_St_Calc_Process_Date"
                                    value={
                                      orderListData?.S_St_Calc_Process_Date
                                        ? orderListData.S_St_Calc_Process_Date.substring(
                                            0,
                                            10
                                          )
                                        : ""
                                    }
                                    onChange={(event) =>
                                      handleInputChange(event)
                                    }
                                    type="date"
                                    className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                  <input
                                    disabled={!formState.edCalcProcessDate}
                                    id="S_Ed_Calc_Process_Date"
                                    value={
                                      orderListData?.S_Ed_Calc_Process_Date
                                        ? orderListData.S_Ed_Calc_Process_Date.substring(
                                            0,
                                            10
                                          )
                                        : ""
                                    }
                                    onChange={(event) =>
                                      handleInputChange(event)
                                    }
                                    type="date"
                                    className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                </div>
                              </div>
                              <div className="flex gap-2 mt-1">
                                <label className="text-xs font-medium pt-1 -ml-12">
                                  Pl_Process_Date
                                </label>
                                <div className="flex gap-2 w-3/5">
                                  <input
                                    disabled={!formState.stPlProcessDate}
                                    id="S_St_Pl_Process_Date"
                                    value={
                                      orderListData?.S_St_Pl_Process_Date
                                        ? orderListData.S_St_Pl_Process_Date.substring(
                                            0,
                                            10
                                          )
                                        : ""
                                    }
                                    onChange={(event) =>
                                      handleInputChange(event)
                                    }
                                    type="date"
                                    className="bg-[#00ffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                  <input
                                    disabled={!formState.edPlProcessDate}
                                    id="S_Ed_Pl_Process_Date"
                                    value={
                                      orderListData?.S_Ed_Pl_Process_Date
                                        ? orderListData.S_Ed_Pl_Process_Date.substring(
                                            0,
                                            10
                                          )
                                        : ""
                                    }
                                    onChange={(event) =>
                                      handleInputChange(event)
                                    }
                                    type="date"
                                    className="bg-[#00ffff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
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

                <hr />

                <div className="grid grid-cols-12 gap-4 mx-5 py-4">
                  <div className="col-span-12 md:col-span-1 flex items-start">
                    <label className="text-xs font-bold">List</label>
                  </div>

                  <div className="col-span-12 md:col-span-11 grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-4 gap-4 mb-3">
                      {/* Sort1 */}
                      <div className="flex gap-2 items-center w-full">
                        <label className="font-medium text-xs w-1/3 sm:w-1/4">
                          Sort1
                        </label>
                        <div className="w-full">
                          <select
                            id="Sort1"
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      </div>

                      {/* Sort2 */}
                      <div className="flex gap-2 items-center w-full">
                        <label className="font-medium text-xs w-1/3 sm:w-1/4">
                          Sort2
                        </label>
                        <div className="w-full">
                          <input
                            id="Sort2"
                            type="text"
                            className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>

                      {/* Sort3 */}
                      <div className="flex gap-2 items-center w-full">
                        <label className="font-medium text-xs w-1/3 sm:w-1/4">
                          Sort3
                        </label>
                        <div className="w-full">
                          <input
                            id="Sort3"
                            type="text"
                            className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>

                      {/* Sort Additional */}
                      <div className="flex gap-2 items-center w-full">
                        <label className="font-medium text-xs w-1/3 sm:w-1/4">
                          Sort..
                        </label>
                        <div className="w-full">
                          <input
                            id="Sort"
                            type="text"
                            className="bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="flex justify-start w-full sm:w-1/3 lg:w-1/4">
                      <button className="bg-blue-500 h-full w-full rounded-md hover:bg-blue-700 py-2">
                        <span className="text-white text-xs">
                          Plan_Result_Data
                        </span>
                      </button>
                    </div>

                    {/* Second Row of Inputs */}
                    <div className="grid grid-cols-4 gap-4 items-center">
                      {/* Select_Od_No */}
                      <div className="flex gap-2 items-center w-full">
                        <label className="font-medium text-xs w-1/3 sm:w-1/4">
                          Select_Od_No
                        </label>
                        <div className="w-full">
                          <input
                            id="Select_Od_No"
                            type="text"
                            className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>

                      {/* Select_Pt_No */}
                      <div className="flex gap-2 items-center w-full">
                        <label className="font-medium text-xs w-1/3 sm:w-1/4">
                          Select_Pt_No
                        </label>
                        <div className="w-full">
                          <input
                            id="Select_Pt_No"
                            type="text"
                            className="bg-[#cc99ff] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>

                      {/* List_View_W */}
                      <div className="flex gap-2 items-center w-full">
                        <label className="font-medium text-xs w-1/3 sm:w-1/4">
                          List_View_W (22.8~40cm)
                        </label>
                        <div className="w-full">
                          <input
                            id="Od_List_ViewW"
                            type="text"
                            className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>

                      {/* List_View_H */}
                      <div className="flex gap-2 items-center w-full">
                        <label className="font-medium text-xs w-1/3 sm:w-1/4">
                          List_View_H (3-15cm)
                        </label>
                        <div className="w-full">
                          <input
                            id="Od_List_ViewH"
                            type="text"
                            className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Second Button */}
                    <div className="flex justify-start w-full sm:w-1/3 lg:w-1/4 mt-4">
                      <button className="bg-blue-500 h-full w-full rounded-md hover:bg-blue-700 py-2">
                        <span className="text-white text-xs">Change_View</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Product_Delivery
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Order_No
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Product_Grp_CD
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Customer_CD
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Product_Size
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Product_Draw
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Pd_Calc_Qty
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Unit
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Target
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderListData &&
                        orderListData.length > 0 &&
                        orderListData.map((item, index) => (
                          <tr key={index} className="bg-white dark:bg-gray-800">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {new Date(
                                item.Request_Delivery
                              ).toLocaleDateString("en-GB")}
                            </th>
                            <td className="px-6 py-4">{item.Order_No}</td>
                            <td className="px-6 py-4">{item.Product_Grp_CD}</td>
                            <td className="px-6 py-4">{item.Customer_CD}</td>
                            <td className="px-6 py-4">{item.Product_Size}</td>
                            <td className="px-6 py-4">{item.Product_Draw}</td>
                            <td className="px-6 py-4">{item.Quantity}</td>
                            <td className="px-6 py-4">{item.Pd_Calc_Qty}</td>
                            <td className="px-6 py-4">{item.Unit}</td>
                            <td className="px-6 py-4">{item.Target}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4">
                    {/* First button group */}
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Search <br />
                      検索 (F1)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Setting <br />
                      設定 (F2)
                    </button>
                    <button
                      onClick={handleF3Click}
                      className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
                    >
                      Show <br />
                      照会 (F3)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Target <br />
                      対象 (F4)
                    </button>
                    {/* Second button group */}
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Product <br />
                      部門 (F5)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Calc <br />
                      生産 (F6)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      List <br />一 覧 (F7)
                    </button>
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      Data <br />
                      データ (F8)
                    </button>
                    {/* Third button group */}
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                      <label className="flex justify-center items-center">
                        <IoIosArrowRoundForward className="font-medium text-2xl" />{" "}
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
