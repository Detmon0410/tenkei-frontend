import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useOrder } from "../hooks/use-order";
import { usePlanList } from "../hooks/use-planlist";
import { usePlan } from "../hooks/use-plan";

export default function PlanList() {
  const [filteredOrderData, setFilteredOrderData] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [columnsVisibility, setColumnsVisibility] = useState({
    Product_Delivery: true,
    Order_No: true,
    Parts_No: true,
    Product_Grp: true,
    Customer_CD: true,
    Customer_Abb: true,
    Product_Name: true,
    Product_Size: true,
    Product_Draw: true,
    Quantity: true,
    Pd_Calc_Qty: true,
    Unit: true,
    Target: true,
    Product_Docu: true,
    Sales_Grp: true,
    Sales_Person: true,
    Request1: true,
    Request2: true,
    Request3: true,
    Material1: true,
    Material2: true,
    Coating_CD: true,
    Item1: true,
    Item2: true,
    Item3: true,
    Item4: true,
    Price: true,
    Unit_Price: true,
    Pd_Received_Date: true,
    Request_Delivery: true,
    NAV_Delivery: true,
    I_Completed_Date: true,
    Pd_Calc_Date: true,
    Shipment_Date: true,
    Specific: true,
    Confirm_Delivery: true,
    Delivery: true,
    Schedule: true,
    Od_Progress: true,
    Sl_Instructions: true,
    Pd_Instructions: true,
    Pd_Remark: true,
    I_Remark: true,
    Pd_Complete_Date: true,
    Supple_Docu: true,
    Process1: true,
    Process2: true,
    Process3: true,
    Process4: true,
    Process5: true,
    Process6: true,
    Process7: true,
    Process8: true,
    Process9: true,
    Process10: true,
    Process11: true,
    Process12: true,
    Process13: true,
    Process14: true,
    Process15: true,
    Process16: true,
    Process17: true,
    Process18: true,
    Process19: true,
    Process20: true,
    Process21: true,
    Process22: true,
    Process23: true,
    Process24: true,
    Process25: true,
    Process26: true,
    Process27: true,
    Process28: true,
    Process29: true,
    Process30: true,
    Process31: true,
    Process32: true,
    Process33: true,
    Process34: true,
    Process35: true,
    Process36: true,
  });

  const {
    fetchOrders,
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

  const { selectPartsData, setPlanData, planData, fetch_All_Plan } = usePlan();

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
  const [plRegPersonName, setPlRegPersonName] = useState("");

  const {
    planListData,
    setPlanListData,
    fetchPlanListData,
    scheduleData,
    PlProgressData,
    partsData,
  } = usePlanList();

  const [formState, setFormState] = useState({
    Order_No: false,
    NAV_Name: false,
    Product_Name: true,
    NAV_Size: false,
    Product_Size: false,
    Cus_Draw_No: false,
    Com_Draw_No: false,
    Pd_Draw_No: false,
    Sales_Note: false,
    Pd_Note: false,
    Pd_Remark: false,
    QC_Remark: false,
    Product_Grp: true,
    Product_Grp_Input: true,
    Not_Pd_Grp1: true,
    Not_Pd_Grp1_Input: true,
    Not_Pd_Grp2: true,
    Not_Pd_Grp2_Input: true,
    Customer1: true,
    Customer1_Input: true,
    Customer2: true,
    Customer2_Input: true,
    Customer3: true,
    Customer3_Input: true,
    Not_Customer: true,
    Not_Customer_Input: true,
    Specific1: true,
    Specific1_Input: true,
    Specific2: true,
    Specific2_Input: true,
    Not_Specific1: true,
    Not_Specific1_Input: true,
    Not_Specific2: true,
    Not_Specific2_Input: true,
    Product_Grp2: true,
    Product_Grp_Select2: true,
    Price_CAT: false,
    Price_CAT_Input: false,
    Request_CAT: false,
    Request_CAT_Input: false,
    Request_CAT_Select2: false,
    Request_CAT_Input2: false,
    Request_CAT_Select3: false,
    Request_CAT_Input3: false,
    Od_No_of_Customer: false,
    Cus_Name1: false,
    Cus_Name2: false,
    Cus_Name3: false,
    Coating1: true,
    Coating1_Input: true,
    Coating2: true,
    Coating2_Input: true,
    Coating3: true,
    Coating3_Input: true,
    Not_Coat: true,
    Not_Coat_Input: true,
    Ctl_Person: true,
    Ctl_Person_Input: true,
    Sales_Grp: true,
    Sales_Grp_Input: true,
    Sales_Person: true,
    Sales_Person_Input: true,
    Item1: true,
    Item1_Input: true,
    Item2: false,
    Item2_Input: false,
    Item3: false,
    Item3_Input: false,
    Item4: false,
    Item4_Input: false,
    Od_Pend: true,
    TempShip: false,
    Unreceived: false,
    Mate1: false,
    Mate2: false,
    Mate3: false,
    Mate4: false,
    Mate5: false,
    Od_CAT1: false,
    Od_CAT2: false,
    Od_CAT3: false,
    Order_Progress: true,
    Order_Progress_Select2: true,
    Delivery_CAT: false,
    Delivery_CAT_Select2: false,
    Schedule_CAT: false,
    Schedule_CAT_Select2: false,
    Target_CAT: false,
    Target_CAT_Select2: false,
    Request_Delivery: false,
    Request_Delivery_Input2: false,
    NAV_Delivery: false,
    NAV_Delivery_Input2: false,
    Confirm_Delivery: false,
    Confirm_Delivery_Input2: false,
    Product_Delivery: true,
    Product_Delivery_Input2: true,
    Product_Received: false,
    Product_Received_Input2: false,
    Product_Complete: false,
    Product_Complete_Input2: false,
    QC_Complete: false,
    QC_Complete_Input2: false,
    Shipment_Date: false,
    Shipment_Date_Input2: false,
    Calc_Date: false,
    Calc_Date_Input2: false,
    Cale_Process: false,
    Cale_Process_Input2: false,
    Req_Person: true,
    Req_Person_Input: true,
    Parts_Info: true,
    Sort1: true,
    Money_Obj: true,
    Outside: true,
    Pt_Pend: true,
    Sort2: true,
    Plan_Progress: true,
    Plan_Progress_Select2: true,
    Sort3: true,
    Pl_Process_Date: true,
    Pl_Process_Date_Input2: true,
    Sort4: true,
    Parts_No: false,
    Parts_No_Input2: false,
    Pt_Name: false,
    Part_Note: false,
    Pt_Qty: false,
    Pt_Qty_Input2: false,
    Pt_Sp_Qty: false,
    Pt_Sp_Qty_Input2: false,
    Pt_Mate: false,
    Pt_Remark: false,
    Pt_CAT1: false,
    Pt_CAT2: false,
    Pt_CAT3: false,
    Parts_Delivery: false,
    Parts_Delivery_Input2: false,
    Pt_NG_Qty: false,
    Pt_NG_Qty_Input2: false,
  });

  const initialItem = (isEnabled) => {
    if (isEnabled) {
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
      enableFields([
        "Product_Name",
        "Product_Grp",
        "Product_Grp_Input",
        "Not_Pd_Grp1",
        "Not_Pd_Grp1_Input",
        "Not_Pd_Grp2",
        "Not_Pd_Grp2_Input",
        "Customer1",
        "Customer1_Input",
        "Customer2",
        "Customer2_Input",
        "Customer3",
        "Customer3_Input",
        "Not_Customer",
        "Not_Customer_Input",
        "Specific1",
        "Specific1_Input",
        "Specific2",
        "Specific2_Input",
        "Not_Specific1",
        "Not_Specific1_Input",
        "Not_Specific2",
        "Not_Specific2_Input",
        "Product_Grp2",
        "Product_Grp_Select2",
        "Coating1",
        "Coating1_Input",
        "Coating2",
        "Coating2_Input",
        "Coating3",
        "Coating3_Input",
        "Not_Coat",
        "Not_Coat_Input",
        "Ctl_Person",
        "Ctl_Person_Input",
        "Sales_Grp",
        "Sales_Grp_Input",
        "Sales_Person",
        "Sales_Person_Input",
        "Item1",
        "Item1_Input",
        "Od_Pend",
        "Order_Progress",
        "Order_Progress_Select2",
        "Product_Delivery",
        "Product_Delivery_Input2",
        "Req_Person",
        "Req_Person_Input",
        "Parts_Info",
        "Sort1",
        "Money_Obj",
        "Outside",
        "Pt_Pend",
        "Sort2",
        "Plan_Progress",
        "Plan_Progress_Select2",
        "Sort3",
        "Pl_Process_Date",
        "Pl_Process_Date_Input2",
        "Sort4",
      ]);
      disableFields([
        "Order_No",
        "NAV_Name",
        "NAV_Size",
        "Product_Size",
        "Cus_Draw_No",
        "Com_Draw_No",
        "Pd_Draw_No",
        "Sales_Note",
        "Pd_Note",
        "Pd_Remark",
        "QC_Remark",
        "Price_CAT",
        "Price_CAT_Input",
        "Request_CAT",
        "Request_CAT_Input",
        "Request_CAT_Select2",
        "Request_CAT_Input2",
        "Request_CAT_Select3",
        "Request_CAT_Input3",
        "Od_No_of_Customer",
        "Cus_Name1",
        "Cus_Name2",
        "Cus_Name3",
        "Item2",
        "Item2_Input",
        "Item3",
        "Item3_Input",
        "Item4",
        "Item4_Input",
        "TempShip",
        "Unreceived",
        "Mate1",
        "Mate2",
        "Mate3",
        "Mate4",
        "Mate5",
        "Od_CAT1",
        "Od_CAT2",
        "Od_CAT3",
        "Delivery_CAT",
        "Delivery_CAT_Select2",
        "Schedule_CAT",
        "Schedule_CAT_Select2",
        "Target_CAT",
        "Target_CAT_Select2",
        "Request_Delivery",
        "Request_Delivery_Input2",
        "NAV_Delivery",
        "NAV_Delivery_Input2",
        "Confirm_Delivery",
        "Confirm_Delivery_Input2",
        "Product_Received",
        "Product_Received_Input2",
        "Product_Complete",
        "Product_Complete_Input2",
        "QC_Complete",
        "QC_Complete_Input2",
        "Shipment_Date",
        "Shipment_Date_Input2",
        "Calc_Date",
        "Calc_Date_Input2",
        "Cale_Process",
        "Cale_Process_Input2",
        "Parts_No",
        "Parts_No_Input2",
        "Pt_Name",
        "Part_Note",
        "Pt_Qty",
        "Pt_Qty_Input2",
        "Pt_Sp_Qty",
        "Pt_Sp_Qty_Input2",
        "Pt_Mate",
        "Pt_Remark",
        "Pt_CAT1",
        "Pt_CAT2",
        "Pt_CAT3",
        "Parts_Delivery",
        "Parts_Delivery_Input2",
        "Pt_NG_Qty",
        "Pt_NG_Qty_Input2",
      ]);
    } else if (searchType === "Normal") {
      initialItem(true);
      enableFields([
        "Order_Progress",
        "Order_Progress_Select2",
        "Product_Name",
        "Order_No",
        "Ctl_Person",
        "Ctl_Person_Input",
        "Product_Grp",
        "Product_Grp_Input",
        "Product_Grp2",
        "Product_Grp_Select2",
        "Sales_Grp",
        "Sales_Grp_Input",
        "Pd_Note",
        "Pd_Remark",
        "Not_Pd_Grp1",
        "Not_Pd_Grp1_Input",
        "Not_Pd_Grp2",
        "Not_Pd_Grp2_Input",
        "Customer1",
        "Customer1_Input",
        "Customer2",
        "Customer2_Input",
        "Customer3",
        "Customer3_Input",
        "Not_Customer",
        "Not_Customer_Input",
        "Specific1",
        "Specific1_Input",
        "Specific2",
        "Specific2_Input",
        "Not_Specific1",
        "Not_Specific1_Input",
        "Not_Specific2",
        "Not_Specific2_Input",
        "Cus_Name1",
        "Cus_Name2",
        "Cus_Name3",
        "Coating1",
        "Coating1_Input",
        "Coating2",
        "Coating2_Input",
        "Coating3",
        "Coating3_Input",
        "Not_Coat",
        "Not_Coat_Input",
        "Sales_Person",
        "Sales_Person_Input",
        "Item1",
        "Item1_Inpit",
        "Od_Pend",
        "TempShip",
        "Unreceived",
        "Od_CAT1",
        "Od_CAT2",
        "Od_CAT3",
        "Target_CAT",
        "Target_CAT_Select2",
        "Request_Delivery",
        "Request_Delivery_Input2",
        "NAV_Delivery",
        "NAV_Delivery_Input2",
        "Confirm_Delivery",
        "Confirm_Delivery_Input2",
        "Product_Delivery",
        "Product_Delivery_Select2",
        "Parts_No",
        "Parts_No_Input2",
        "Money_Obj",
        "Pt_CAT1",
        "Plan_Progress",
        "Plan_Progress_Select2",
        "Outside",
        "Pt_CAT2",
        "Parts_Delivery",
        "Parts_Delivery_Input2",
        "Req_Person",
        "Req_Person_Input",
        "Pt_Pend",
        "Pt_CAT3",
        "Pl_Process_Date",
        "Pl_Process_Date_Input2",
        "Part_Note",
        "Pt_Remark",
        "Parts_Info",
        "Sort1",
        "Sort2",
        "Sort3",
        "Sort4",
      ]);
      disableFields([
        // ฟิลด์ที่ต้องการปิดเมื่อเลือก Simple
        "NAV_Name",
        "NAV_Size",
        "Product_Size",
        "Cus_Draw_No",
        "Com_Draw_No",
        "Pd_Draw_No",
        "Sales_Note",
        "QC_Remark",
        "Price_CAT",
        "Price_CAT_Input",
        "Schedule_CAT",
        "Schedule_CAT_Select2",
        "Request_CAT",
        "Request_CAT_Input",
        "Request_CAT_Select2",
        "Request_CAT_Input2",
        "Request_CAT_Select3",
        "Request_CAT_Input3",
        "Od_No_of_Customer",
        "Item2",
        "Item2_Input",
        "Item3",
        "Item3_Input",
        "Item4",
        "Item4_Input",
        "Mate1",
        "Mate2",
        "Mate3",
        "Mate4",
        "Mate5",
        "Delivery_CAT",
        "Delivery_CAT_Select2",
        "Shipment_Date",
        "Shipment_Date_Input2",
        "Calc_Date",
        "Calc_Date_Input2",
        "Cale_Process",
        "Cale_Process_Input2",
        "Product_Received",
        "Product_Received_Input2",
        "Product_Complete",
        "Product_Complete_Input2",
        "QC_Complete",
        "QC_Complete_Input2",
        "Pt_Qty",
        "Pt_Qty_Input2",
        "Pt_Name",
        "Pt_Sp_Qty",
        "Pt_Sp_Qty_Input2",
        "Pt_Mate",
        "Pt_NG_Qty",
        "Pt_NG_Qty_Input2",
      ]);
    } else if (searchType === "Detail") {
      initialItem(true);
      enableFields([
        "Order_Progress",
        "Order_Progress_Select2",
        "Order_No",
        "Ctl_Person",
        "Ctl_Person_Input",
        "Product_Grp",
        "Product_Grp_Input",
        "Product_Grp2",
        "Product_Grp_Select2",
        "Sales_Grp",
        "Sales_Grp_Input",
        "Schedule_CAT",
        "Schedule_CAT_Select2",
        "Pd_Note",
        "Pd_Remark",
        "Not_Pd_Grp1",
        "Not_Pd_Grp1_Input",
        "Not_Pd_Grp2",
        "Not_Pd_Grp2_Input",
        "Customer1",
        "Customer1_Input",
        "Customer2",
        "Customer2_Input",
        "Customer3",
        "Customer3_Input",
        "Not_Customer",
        "Not_Customer_Input",
        "Specific1",
        "Specific1_Input",
        "Specific2",
        "Specific2_Input",
        "Not_Specific1",
        "Not_Specific1_Input",
        "Not_Specific2",
        "Not_Specific2_Input",
        "Cus_Name1",
        "Cus_Name2",
        "Cus_Name3",
        "Coating1",
        "Coating1_Input",
        "Coating2",
        "Coating2_Input",
        "Coating3",
        "Coating3_Input",
        "Not_Coat",
        "Not_Coat_Input",
        "Sales_Person",
        "Sales_Person_Input",
        "Item1",
        "Item1_Inpit",
        "Od_Pend",
        "TempShip",
        "Unreceived",
        "Od_CAT1",
        "Od_CAT2",
        "Od_CAT3",
        "Target_CAT",
        "Target_CAT_Select2",
        "Request_Delivery",
        "Request_Delivery_Input2",
        "NAV_Delivery",
        "NAV_Delivery_Input2",
        "Confirm_Delivery",
        "Confirm_Delivery_Input2",
        "Product_Delivery",
        "Product_Delivery_Select2",
        "NAV_Name",
        "Product_Name",
        "NAV_Size",
        "Product_Size",
        "Cus_Draw_No",
        "Com_Draw_No",
        "Pd_Draw_No",
        "Sales_Note",
        "QC_Remark",
        "Price_CAT",
        "Price_CAT_Input",
        "Request_CAT",
        "Request_CAT_Input",
        "Request_CAT_Select2",
        "Request_CAT_Input2",
        "Request_CAT_Select3",
        "Request_CAT_Input3",
        "Od_No_of_Customer",
        "Item2",
        "Item2_Input",
        "Item3",
        "Item3_Input",
        "Item4",
        "Item4_Input",
        "Mate1",
        "Mate2",
        "Mate3",
        "Mate4",
        "Mate5",
        "Delivery_CAT",
        "Delivery_CAT_Select2",
        "Shipment_Date",
        "Shipment_Date_Input2",
        "Calc_Date",
        "Calc_Date_Input2",
        "Cale_Process",
        "Cale_Process_Input2",
        "Product_Received",
        "Product_Received_Input2",
        "Product_Complete",
        "Product_Complete_Input2",
        "QC_Complete",
        "QC_Complete_Input2",
        "Parts_No",
        "Parts_No_Input2",
        "Money_Obj",
        "Pt_CAT1",
        "Plan_Progress",
        "Plan_Progress_Select2",
        "Outside",
        "Pt_CAT2",
        "Parts_Delivery",
        "Parts_Delivery_Input2",
        "Req_Person",
        "Req_Person_Input",
        "Pt_Qty",
        "Pt_Qty_Input2",
        "Pt_Name",
        "Pt_Sp_Qty",
        "Pt_Sp_Qty_Input2",
        "Pt_Mate",
        "Pt_NG_Qty",
        "Pt_NG_Qty_Input2",
        "Pt_CAT3",
        "Part_Note",
        "Pt_Remark",
      ]);
    }
  };

  // Handle change event for Search_Type select
  const handleSearchTypeChange = (event) => {
    const selectedType = event.target.value;
    Search_Type_AfterUpdate(selectedType);
  };

  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;

    setPlanListData((prevOrderData) => {
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
  };

  useEffect(() => {
    if (planListData?.S_St_Pd_Grp_CD && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === planListData?.S_St_Pd_Grp_CD
      );
      setDestinationName(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }
    if (planListData?.S_Ed_Pd_Grp_CD && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === planListData?.S_Ed_Pd_Grp_CD
      );
      setDestinationName2(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }
    if (planListData?.S_No_Pd_Grp_CD1 && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === planListData?.S_No_Pd_Grp_CD1
      );
      setDestinationName3(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }
    if (planListData?.S_No_Pd_Grp_CD2 && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === planListData?.S_No_Pd_Grp_CD2
      );
      setDestinationName4(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }

    if (planListData?.S_Sl_Grp_CD && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === planListData?.S_Sl_Grp_CD
      );
      setDestinationName5(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }
  }, [
    planListData?.S_St_Pd_Grp_CD,
    planListData?.S_Ed_Pd_Grp_CD,
    planListData?.S_No_Pd_Grp_CD1,
    planListData?.S_No_Pd_Grp_CD2,
    planListData?.S_Sl_Grp_CD,
    WorkgData,
  ]);

  useEffect(() => {
    if (planListData?.S_Customer_CD1 && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === planListData?.S_Customer_CD1
      );
      setSelectedCustomerAbb(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
    if (planListData?.S_Customer_CD2 && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === planListData?.S_Customer_CD2
      );
      setSelectedCustomerAbb2(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
    if (planListData?.S_Customer_CD3 && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === planListData?.S_Customer_CD3
      );
      setSelectedCustomerAbb3(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
    if (planListData?.S_No_Customer_CD && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === planListData?.S_No_Customer_CD
      );
      setSelectedCustomerAbb4(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
  }, [
    planListData?.S_Customer_CD1,
    planListData?.S_Customer_CD2,
    planListData?.S_Customer_CD3,
    planListData?.S_No_Customer_CD,
    CustomerData,
  ]);

  useEffect(() => {
    if (planListData?.S_Specific_CD1 && SpecificData.length > 0) {
      const selectedGroup = SpecificData.find(
        (item) => item.Specific_CD === planListData?.S_Specific_CD1
      );
      setSpecificName(selectedGroup ? selectedGroup.Specific_Abb : "");
    }

    if (planListData?.S_Specific_CD2 && SpecificData.length > 0) {
      const selectedGroup = SpecificData.find(
        (item) => item.Specific_CD === planListData?.S_Specific_CD2
      );
      setSpecificName2(selectedGroup ? selectedGroup.Specific_Abb : "");
    }

    if (planListData?.S_No_Specific_CD1 && SpecificData.length > 0) {
      const selectedGroup = SpecificData.find(
        (item) => item.Specific_CD === planListData?.S_No_Specific_CD1
      );
      setSpecificName3(selectedGroup ? selectedGroup.Specific_Abb : "");
    }

    if (planListData?.S_No_Specific_CD2 && SpecificData.length > 0) {
      const selectedGroup = SpecificData.find(
        (item) => item.Specific_CD === planListData?.S_No_Specific_CD2
      );
      setSpecificName4(selectedGroup ? selectedGroup.Specific_Abb : "");
    }
  }, [
    planListData?.S_Specific_CD1,
    planListData?.S_Specific_CD2,
    planListData?.S_No_Specific_CD1,
    planListData?.S_No_Specific_CD2,
    SpecificData,
  ]);

  useEffect(() => {
    if (planListData?.S_Price_CD && PriceData.length > 0) {
      const selectedGroup = PriceData.find(
        (item) => item.Price_CD === planListData?.S_Price_CD
      );

      setPriceName(selectedGroup ? selectedGroup.Price_Symbol : "");
    }
  }, [planListData?.S_Price_CD, PriceData]);

  useEffect(() => {
    if (planListData?.S_Request1_CD && Request1Data.length > 0) {
      const selectedGroup = Request1Data.find(
        (item) => item.Request1_CD === planListData?.S_Request1_CD
      );

      setRequest1Name(selectedGroup ? selectedGroup.Request1_Abb : "");
    }
    if (planListData?.S_Request2_CD && Request2Data.length > 0) {
      const selectedGroup = Request2Data.find(
        (item) => item.Request2_CD === planListData?.S_Request2_CD
      );

      setRequest2Name(selectedGroup ? selectedGroup.Request2_Abb : "");
    }
    if (planListData?.S_Request3_CD && Request3Data.length > 0) {
      const selectedGroup = Request3Data.find(
        (item) => item.Request3_CD === planListData?.S_Request3_CD
      );

      setRequest3Name(selectedGroup ? selectedGroup.Request3_Abb : "");
    }
  }, [
    planListData?.S_Request1_CD,
    planListData?.S_Request2_CD,
    planListData?.S_Request3_CD,
    Request1Data,
    Request2Data,
    Request3Data,
  ]);

  useEffect(() => {
    if (planListData?.S_Item1_CD && Item1Data.length > 0) {
      const selectedGroup = Item1Data.find(
        (item) => item.Item1_CD === planListData?.S_Item1_CD
      );

      setItemName(selectedGroup ? selectedGroup.Item1_Abb : "");
    }
  }, [planListData?.S_Item1_CD, Item1Data]);

  useEffect(() => {
    if (planListData?.S_Od_Ctl_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === planListData?.S_Od_Ctl_Person_CD
      );

      setSelectedSalesGrpAbb(selectedGroup ? selectedGroup.Worker_Abb : "");
    }

    if (planListData?.S_Sl_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === planListData?.S_Sl_Person_CD
      );

      setSelectedSalesGrpAbb2(selectedGroup ? selectedGroup.Worker_Abb : "");
    }

    if (planListData?.S_Pl_Reg_Person_CD && WorkerData.length > 0) {
      const selectedGroup = WorkerData.find(
        (item) => item.Worker_CD === planListData?.S_Pl_Reg_Person_CD
      );

      setPlRegPersonName(selectedGroup ? selectedGroup.Worker_Abb : "");
    }
  }, [
    planListData?.S_Od_Ctl_Person_CD,
    planListData?.S_Sl_Person_CD,
    planListData?.S_Pl_Reg_Person_CD,
    WorkerData,
  ]);

  useEffect(() => {
    if (planListData?.S_Coating_CD1 && CoatingData.length > 0) {
      const selectedGroup = CoatingData.find(
        (item) => item.Coating_CD === planListData?.S_Coating_CD1
      );

      setCoatingName(selectedGroup ? selectedGroup.Coating_Symbol : "");
    }
    if (planListData?.S_Coating_CD2 && CoatingData.length > 0) {
      const selectedGroup = CoatingData.find(
        (item) => item.Coating_CD === planListData?.S_Coating_CD2
      );

      setCoatingName2(selectedGroup ? selectedGroup.Coating_Symbol : "");
    }
    if (planListData?.S_Coating_CD3 && CoatingData.length > 0) {
      const selectedGroup = CoatingData.find(
        (item) => item.Coating_CD === planListData?.S_Coating_CD3
      );

      setCoatingName3(selectedGroup ? selectedGroup.Coating_Symbol : "");
    }
    if (planListData?.S_No_Coating_CD && CoatingData.length > 0) {
      const selectedGroup = CoatingData.find(
        (item) => item.Coating_CD === planListData?.S_No_Coating_CD
      );

      setCoatingName4(selectedGroup ? selectedGroup.Coating_Symbol : "");
    }
  }, [
    planListData?.S_Coating_CD1,
    planListData?.S_Coating_CD2,
    planListData?.S_Coating_CD3,
    planListData?.S_No_Coating_CD,
    CoatingData,
  ]);

  const handleF2Click = () => {
    setShowDialog(true);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setColumnsVisibility((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleCheckAll = (event) => {
    const isChecked = event.target.checked;
    const updatedVisibility = Object.keys(columnsVisibility).reduce(
      (acc, column) => {
        acc[column] = isChecked;
        return acc;
      },
      {}
    );
    setColumnsVisibility(updatedVisibility);
  };

  const handleF3Click = async () => {
    try {
      const response = await fetchOrders();
      const orders = response.data?.data?.orders;

      // console.log("Orders fetched:", orders);
      // console.log("Filters to apply:", planListData);

      if (!Array.isArray(orders)) {
        // console.error("Orders data is not an array:", orders);
        setFilteredOrderData([]);
        return;
      }

      const keyMapping = {
        S_St_Od_Progress_CD: "Od_Progress_CD",
        S_Ed_Od_Progress_CD: "Od_Progress_CD",
        S_Order_No: "Order_No",
        S_Od_Ctl_Person_CD: "Od_Ctl_Person_CD",
        S_St_Delivery_CD: "Delivery_CD",
        S_Ed_Delivery_CD: "Delivery_CD",
        S_NAV_Name: "NAV_Name",
        S_St_Pd_Grp_CD: "Product_Grp_CD",
        S_Ed_Pd_Grp_CD: "Product_Grp_CD",
        S_Sl_Grp_CD: "Sales_Grp_CD",
        S_St_Schedule_CD: "Schedule_CD",
        S_Ed_Schedule_CD: "Schedule_CD",
        S_Product_Name: "Product_Name",
        S_No_Pd_Grp_CD1: "Product_Grp_CD",
        S_Price_CD: "Price_CD",
        S_Sl_Person_CD: "Sales_Person_CD",
        S_St_Target_CD: "Target_CD",
        S_NAV_Size: "NAV_Size",
        S_No_Pd_Grp_CD2: "Product_Grp_CD",
        S_Request1_CD: "Request1_CD",
        S_Request2_CD: "Request2_CD",
        S_Request3_CD: "Request3_CD",
        S_St_Request_Delivery: "Request_Delivery",
        S_Ed_Request_Delivery: "Request_Delivery",
        S_Product_Size: "Product_Size",
        S_Customer_CD1: "Customer_CD",
        S_Material1: "Material1",
        S_St_NAV_Delivery: "NAV_Delivery",
        S_Ed_NAV_Delivery: "NAV_Delivery",
        S_Customer_Draw: "Customer_Draw",
        S_Customer_CD2: "Customer_CD",
        S_Item1_CD: "Item1_CD",
        S_Material2: "Material2",
        S_St_Confirm_Delivery: "Confirm_Delivery",
        S_Ed_Confirm_Delivery: "Confirm_Delivery",
        S_Company_Draw: "Company_Draw",
        S_Customer_CD3: "Customer_CD",
        S_Item2_CD: "Item2_CD",
        S_Material3: "Material3",
        S_St_Product_Delivery: "Product_Delivery",
        S_Ed_Product_Delivery: "Product_Delivery",
        S_Product_Draw: "Product_Draw",
        S_No_Customer_CD: "Customer_CD",
        S_Item3_CD: "Item3_CD",
        S_Material4: "Material4",
        S_St_Pd_Received_Date: "Pd_Received_Date",
        S_Ed_Pd_Received_Date: "Pd_Received_Date",
        S_Sl_instructions: "Sl_instructions",
        S_Specific_CD1: "Specific_CD",
        S_Coating_CD1: "Coating_CD",
        S_Item4_CD: "S_Item4_CD",
        S_Material5: "Material5",
        S_St_Pd_Complete_Date: "Pd_Complete_Date",
        S_Ed_Pd_Complete_Date: "Pd_Complete_Date",
        S_Pd_instructions: "Pd_Instructions",
        S_Specific_CD2: "Specific_CD",
        S_Coating_CD2: "Coating_CD",
        S_Od_Pending: "Od_Pending",
        S_Od_CAT1: "Od_CAT1",
        S_St_I_Complete_Date: "I_Completed_Date",
        S_Ed_I_Complete_Date: "I_Completed_Date",
        S_Pd_Remark: "Pd_Remark",
        S_No_Specific_CD1: "Specific_CD",
        S_Coating_CD3: "Coating_CD",
        S_Temp_Shipment: "Temp_Shipment",
        S_Od_CAT2: "Od_CAT2",
        S_St_Shipment_Date: "Shipment_Date",
        S_Ed_Shipment_Date: "Shipment_Date",
        S_I_Remark: "I_Remark",
        S_No_Specific_CD2: "Specific_CD",
        S_No_Coating_CD: "Coating_CD",
        S_Unreceived: "Unreceived",
        S_Od_CAT3: "Od_CAT3",
        S_St_Calc_Date: "Pd_Calc_Date",
        S_Ed_Calc_Date: "Pd_Calc_Date",
      };

      const filters = Object.entries(planListData)
        .filter(([key, value]) => value)
        .map(([key, value]) => [keyMapping[key] || key, value]);

      // console.log("Filters after mapping:", filters);

      const filteredData = orders.filter((order) =>
        filters.every(([key, value]) => {
          // console.log(
          //   `Checking order[${key}] (${order[key]}) against value (${JSON.stringify(value)})`
          // );

          // กรณี value เป็นออบเจกต์ และมี key "not"
          if (typeof value === "object" && value.not) {
            return order[key] !== value.not; // ตรวจสอบว่าไม่เท่ากับค่าใน "not"
          }

          // กรณี value เป็น string หรือค่าปกติ
          if (typeof order[key] === "string") {
            return order[key]?.toLowerCase().includes(value.toLowerCase());
          }

          // ตรวจสอบแบบปกติ
          return order[key] === value;
        })
      );

      // console.log("Filtered Data:", filteredData);

      if (filteredData.length > 0) {
        setFilteredOrderData(filteredData);
      } else {
        // console.log("No matching orders found.");
        setFilteredOrderData([]);
      }
    } catch (error) {
      console.error("Error handling F3 click:", error);
      setFilteredOrderData([]);
    }
  };

  const handleF11Click = () => {
    window.location.reload();
  };

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col overflow-x-hidden flex-grow p-2 bg-white mt-2 rounded-md">
          <div className="grid grid-cols-1">
            <h1 className="text-2xl font-bold mt-3 text-center">Plan List</h1>
            <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2 mb-2">
              <div className="flex flex-col space-y-1 relative">
                <label className="text-xs font-bold">Search_Type</label>
                <div className="relative w-full lg:w-60 xl:w-44">
                  <select
                    onChange={handleSearchTypeChange}
                    id="Search_Type"
                    defaultValue="Simple"
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                  >
                    <option value="Simple">Simple</option>
                    <option value="Normal">Normal</option>
                    <option value="Detail">Detail</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-1 relative">
                <label className="text-xs font-bold">Delivery1</label>
                <div className="relative w-full lg:w-60 xl:w-44">
                  <select
                    id="Delivery1"
                    defaultValue="Product"
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                  >
                    <option value="Request">Request</option>
                    <option value="NAV">NAV</option>
                    <option value="Comfirm">Comfirm</option>
                    <option value="Product">Product</option>
                    <option value="Parts">Parts</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-1 relative">
                <label className="text-xs font-bold">Delivery2</label>
                <div className="relative w-full lg:w-60 xl:w-44">
                  <select
                    id="Delivery2"
                    defaultValue="Comfirm"
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                  >
                    <option value="Request">Request</option>
                    <option value="NAV">NAV</option>
                    <option value="Comfirm">Comfirm</option>
                    <option value="Product">Product</option>
                    <option value="Parts">Parts</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-1 relative">
                <label className="text-xs font-bold">Delivery3</label>
                <div className="relative w-full lg:w-60 xl:w-44">
                  <select
                    id="Delivery3"
                    defaultValue="Request"
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                  >
                    <option value="Request">Request</option>
                    <option value="NAV">NAV</option>
                    <option value="Comfirm">Comfirm</option>
                    <option value="Product">Product</option>
                    <option value="Parts">Parts</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-1 relative">
                <label className="text-xs font-bold">View_Schedule</label>
                <div className="relative w-full lg:w-60 xl:w-44">
                  <select
                    id="View_Schedule"
                    defaultValue="Manual"
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                  >
                    <option value="Manual">Manual</option>
                    <option value="ASP">ASP</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-1 relative">
                <label className="text-xs font-bold">Plan_Target</label>
                <div className="relative w-full lg:w-60 xl:w-44">
                  <select
                    id="Plan_Target"
                    className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                  >
                    <option value=""></option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
            </div>

            <hr className="my-6 h-0.5 border-t-0 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

            <div className="flex items-center font-bold pl-2">
              <label className="mr-2">Order_Info_Search</label>
            </div>

            <div className="w-full mt-5 overflow-x-auto pr-10">
              <div className="min-w-[2000px] w-full mb-7">
                {/* Start Group 1 */}
                <div className="flex pl-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pr-[52px]">
                    <label className="font-bold text-xs">Format</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <select
                      id="Format"
                      defaultValue="Progress"
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                    >
                      <option value="Progress">Progress</option>
                    </select>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Change_Page</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <select
                      id="Change_Page"
                      defaultValue="No_Change_Page"
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                    >
                      <option value="No_Change_Page">No_Change_Page</option>
                      <option value="Product_Section">Product_Section</option>
                      <option value="Specific_Item">Specific_Item</option>
                      <option value="Section_SpecItem">Section_SpecItem</option>
                    </select>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Target</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <select
                      id="Target"
                      defaultValue="Production"
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                    >
                      <option value="Production">Production</option>
                      <option value="QC">QC</option>
                      <option value="Administator">Administator</option>
                    </select>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Mark_days</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <input
                      id="Mark_days"
                      type="date"
                      className="bg-[#ffff99] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-40"
                    />
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Order_Progress
                      </label>
                      <select
                        disabled={!formState.Order_Progress}
                        id="S_St_Od_Progress_CD"
                        value={planListData?.S_St_Od_Progress_CD || ""}
                        onChange={handleInputChange}
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-40"
                      >
                        <option value=""></option>
                        {Array.isArray(OdProgressData) &&
                        OdProgressData.length > 0 ? (
                          OdProgressData.map((item, index) => (
                            <option key={index} value={item.Od_Progress_CD}>
                              {item.Od_Progress_Symbol}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <select
                        disabled={!formState.Order_Progress_Select2}
                        id="S_Ed_Od_Progress_CD"
                        value={planListData?.S_Ed_Od_Progress_CD || ""}
                        onChange={(e) => handleInputChange(e)}
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-40"
                      >
                        <option value=""></option>
                        {Array.isArray(OdProgressData) &&
                        OdProgressData.length > 0 ? (
                          OdProgressData.map((item, index) => (
                            <option key={index} value={item.Od_Progress_CD}>
                              {item.Od_Progress_Symbol}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 1 */}

                {/* Start Group 2 */}
                <div className="flex pl-5 mt-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pr-[38px]">
                    <label className="font-bold text-xs">Order_No</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <input
                      disabled={!formState.Order_No}
                      id="S_Order_No"
                      value={planListData?.S_Order_No || ""}
                      onChange={handleInputChange}
                      type="text"
                      className={`border-solid border-2 rounded-md py-0.5 w-full ${
                        formState.Order_No
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    />
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="flex items-center space-x-5 pl-10">
                    <input
                      type="checkbox"
                      id="checkbox1"
                      defaultChecked
                      className="w-5 h-5 rounded-full"
                    />
                    <label htmlFor="checkbox1" className="text-sm bg-[#ffff99]">
                      Info_View
                    </label>

                    <input
                      type="checkbox"
                      id="checkbox2"
                      defaultChecked
                      className="w-5 h-5 rounded-full"
                    />
                    <label htmlFor="checkbox2" className="text-sm bg-[#ffff99]">
                      color_View
                    </label>

                    <input
                      type="checkbox"
                      id="checkbox3"
                      defaultChecked
                      className="w-5 h-5 rounded-full"
                    />
                    <label htmlFor="checkbox3" className="text-sm bg-[#ffff99]">
                      Result_Date_View
                    </label>

                    <input
                      type="checkbox"
                      id="checkbox4"
                      className="w-5 h-5 rounded-full"
                    />
                    <label htmlFor="checkbox4" className="text-sm bg-[#ffff99]">
                      CT_View
                    </label>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-44">
                    <label className="font-bold text-xs">Ctl_Person</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Ctl_Person}
                      id="S_Od_Ctl_Person_CD"
                      value={planListData?.S_Od_Ctl_Person_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_Od_Ctl_Person_CD}>
                        {planListData?.S_Od_Ctl_Person_CD}
                      </option>
                      {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
                        <>
                          <option disabled>
                            Worker_CD | Worker_Abb | Worker_Remark
                          </option>
                          {WorkerData.map((item, index) => (
                            <option key={index} value={item.Worker_CD}>
                              {item.Worker_CD} | {item.Worker_Abb} |{" "}
                              {item.Worker_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Ctl_Person_Input}
                    id="S_Od_Ctl_Person_Name"
                    value={selectedSalesGrpAbb || ""}
                    onChange={(event) => setWorkerData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Delivery_CAT
                      </label>
                      <select
                        disabled={!formState.Delivery_CAT}
                        id="S_St_Delivery_CD"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 appearance-none ${
                          formState.Delivery_CAT
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      >
                        <option value=""></option>
                        {Array.isArray(DeliveryData) &&
                        DeliveryData.length > 0 ? (
                          DeliveryData.map((item, index) => (
                            <option key={index} value={item.Delivery_CD}>
                              {item.Delivery_Symbol}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <select
                        disabled={!formState.Delivery_CAT_Select2}
                        id="S_Ed_Delivery_CD"
                        value={planListData?.S_Ed_Delivery_CD || ""}
                        onChange={handleInputChange}
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 appearance-none ${
                          formState.Delivery_CAT_Select2
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      >
                        <option value=""></option>
                        {Array.isArray(DeliveryData) &&
                        DeliveryData.length > 0 ? (
                          DeliveryData.map((item, index) => (
                            <option key={index} value={item.Delivery_CD}>
                              {item.Delivery_Symbol}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 2 */}

                {/* Start Group 3 */}
                <div className="flex pl-5 mt-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pr-7">
                    <label className="font-bold text-xs">NAV_Name</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <input
                      disabled={!formState.NAV_Name}
                      id="S_NAV_Name"
                      value={planListData?.S_NAV_Name || ""}
                      onChange={handleInputChange}
                      type="text"
                      className={`border-solid border-2 rounded-md py-0.5 w-full ${
                        formState.NAV_Name
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    />
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Product_Grp</label>
                  </div>
                  <div className="relative w-24 ml-1">
                    <select
                      disabled={!formState.Product_Grp}
                      id="S_St_Pd_Grp_CD"
                      value={planListData?.S_St_Pd_Grp_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_St_Pd_Grp_CD}>
                        {planListData?.S_St_Pd_Grp_CD}
                      </option>
                      {Array.isArray(WorkgData) && WorkgData.length > 0 ? (
                        <>
                          <option disabled>
                            WorkG_CD | WorkG_Abb | WorkG_Name | WorkG_Remark
                          </option>
                          {WorkgData.map((item, index) => (
                            <option key={index} value={item.WorkG_CD}>
                              {item.WorkG_CD} | {item.WorkG_Abb} |{" "}
                              {item.WorkG_Name} | {item.WorkG_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Product_Grp_Input}
                    id="S_No_Pd_Grp_Abb"
                    value={destinationName}
                    onChange={(event) => setWorkgData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  <span className="text-lg mx-3">~</span>
                  {/* Start */}
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Product_Grp2}
                      id="S_Ed_Pd_Grp_CD"
                      value={planListData?.S_Ed_Pd_Grp_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_Ed_Pd_Grp_CD}>
                        {planListData?.S_Ed_Pd_Grp_CD}
                      </option>
                      {Array.isArray(WorkgData) && WorkgData.length > 0 ? (
                        <>
                          <option disabled>
                            WorkG_CD | WorkG_Abb | WorkG_Name | WorkG_Remark
                          </option>
                          {WorkgData.map((item, index) => (
                            <option key={index} value={item.WorkG_CD}>
                              {item.WorkG_CD} | {item.WorkG_Abb} |{" "}
                              {item.WorkG_Name} | {item.WorkG_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Product_Grp_Select2}
                    id="S_Ed_Pd_Grp_Abb"
                    value={destinationName2}
                    onChange={(event) => setWorkgData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[123px]">
                    <label className="font-bold text-xs">Sales_Grp</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Sales_Grp}
                      id="S_Sl_Grp_CD"
                      value={planListData?.S_Sl_Grp_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_Sl_Grp_CD}>
                        {planListData?.S_Sl_Grp_CD}
                      </option>
                      {Array.isArray(WorkgData) && WorkgData.length > 0 ? (
                        <>
                          <option disabled>
                            WorkG_CD | WorkG_Abb | WorkG_Remark
                          </option>
                          {WorkgData.map((item, index) => (
                            <option key={index} value={item.WorkG_CD}>
                              {item.WorkG_CD} | {item.WorkG_Abb} |{" "}
                              {item.WorkG_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Sales_Grp_Input}
                    id="S_Sl_Grp_Name"
                    value={destinationName5}
                    onChange={(event) => setWorkgData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Schedule_CAT
                      </label>
                      <select
                        disabled={!formState.Schedule_CAT}
                        id="S_St_Schedule_CD"
                        value={planListData?.S_St_Schedule_CD || ""}
                        onChange={handleInputChange}
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 appearance-none ${
                          formState.Schedule_CAT
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      >
                        <option value=""></option>
                        {Array.isArray(scheduleData) &&
                        scheduleData.length > 0 ? (
                          scheduleData.map((item, index) => (
                            <option key={index} value={item.Schedule_CD}>
                              {item.Schedule_Symbol}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <select
                        disabled={!formState.Schedule_CAT_Select2}
                        id="S_Ed_Schedule_CD"
                        value={planListData?.S_Ed_Schedule_CD || ""}
                        onChange={handleInputChange}
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 appearance-none ${
                          formState.Schedule_CAT_Select2
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      >
                        <option value=""></option>
                        {Array.isArray(scheduleData) &&
                        scheduleData.length > 0 ? (
                          scheduleData.map((item, index) => (
                            <option key={index} value={item.Schedule_CD}>
                              {item.Schedule_Symbol}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 3 */}

                {/* Start Group 4 */}
                <div className="flex pl-5 mt-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center">
                    <label className="font-bold text-xs">Product_Name</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <input
                      disabled={!formState.Product_Name}
                      id="S_Product_Name"
                      value={planListData?.S_Product_Name || ""}
                      onChange={handleInputChange}
                      type="text"
                      className={`border-solid border-2 rounded-md py-0.5 w-full ${
                        formState.Product_Name
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    />
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[30px]">
                    <label className="font-bold text-xs">Not_Pd_Grp1</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Not_Pd_Grp1}
                      id="S_No_Pd_Grp_CD1"
                      value={planListData?.S_No_Pd_Grp_CD1?.not || ""}
                      onChange={(e) => {
                        const selectedValue = e.target.value;
                        handleInputChange({
                          target: {
                            id: "S_No_Pd_Grp_CD1",
                            value: { not: selectedValue },
                          },
                        });
                      }}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full h-8"
                    >
                      <option value={planListData?.S_No_Pd_Grp_CD1?.not}>
                        {planListData?.S_No_Pd_Grp_CD1?.not}
                      </option>
                      {Array.isArray(WorkgData) && WorkgData.length > 0 ? (
                        <>
                          <option disabled>
                            WorkG_CD | WorkG_Abb | WorkG_Name | WorkG_Remark
                          </option>
                          {WorkgData.map((item, index) => (
                            <option key={index} value={item.WorkG_CD}>
                              {item.WorkG_CD} | {item.WorkG_Abb} |{" "}
                              {item.WorkG_Name} | {item.WorkG_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Not_Pd_Grp1_Input}
                    id="S_No_Pd_Grp_Abb1"
                    value={destinationName3}
                    onChange={(event) => setWorkgData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Price_CAT</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Price_CAT}
                      id="S_Price_CD"
                      value={planListData?.S_Price_CD || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Price_CAT
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value={planListData?.S_Price_CD}>
                        {planListData?.S_Price_CD}
                      </option>
                      {Array.isArray(PriceData) && PriceData.length > 0 ? (
                        <>
                          <option disabled>
                            Price_CD | Price_Symbol | Price_Remark
                          </option>
                          {PriceData.map((item, index) => (
                            <option key={index} value={item.Price_CD}>
                              {item.Price_CD} | {item.Price_Symbol} |{" "}
                              {item.Price_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Price_CAT_Input}
                    id="S_Price_Name"
                    value={PriceName || ""}
                    onChange={(event) => setPriceData(event)}
                    type="text"
                    className={`border-solid border-2 rounded-md py-0.5 w-32 ml-1 ${
                      formState.Price_CAT_Input
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[54px]">
                    <label className="font-bold text-xs">Sales_Person</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Sales_Person}
                      id="S_Sl_Person_CD"
                      value={planListData?.S_Sl_Person_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_Sl_Person_CD}>
                        {planListData?.S_Sl_Person_CD}
                      </option>
                      {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
                        <>
                          <option disabled>
                            Worker_CD | Worker_Abb | Worker_Remark
                          </option>
                          {WorkerData.map((item, index) => (
                            <option key={index} value={item.Worker_CD}>
                              {item.Worker_CD} | {item.Worker_Abb} |{" "}
                              {item.Worker_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Sales_Person_Input}
                    id="S_Sl_Person_Name"
                    value={selectedSalesGrpAbb2 || ""}
                    onChange={(event) => setWorkerData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Target_CAT
                      </label>
                      <select
                        disabled={!formState.Target_CAT}
                        id="S_St_Target_CD"
                        value={planListData?.S_St_Target_CD || ""}
                        onChange={handleInputChange}
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 appearance-none ${
                          formState.Target_CAT
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      >
                        <option value=""></option>
                        {Array.isArray(TargetData) && TargetData.length > 0 ? (
                          TargetData.map((item, index) => (
                            <option key={index} value={item.Target_CD}>
                              {item.Target_Symbol}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <select
                        disabled={!formState.Target_CAT_Select2}
                        id="S_Ed_Target_CD"
                        value={planListData?.S_Ed_Target_CD || ""}
                        onChange={handleInputChange}
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 appearance-none ${
                          formState.Target_CAT_Select2
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      >
                        <option value=""></option>
                        {Array.isArray(TargetData) && TargetData.length > 0 ? (
                          TargetData.map((item, index) => (
                            <option key={index} value={item.Target_CD}>
                              {item.Target_Symbol}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 4 */}

                {/* Start Group 5 */}
                <div className="flex pl-5 mt-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pr-10">
                    <label className="font-bold text-xs">NAV_Size</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <input
                      disabled={!formState.NAV_Size}
                      id="S_NAV_Size"
                      value={planListData?.S_NAV_Size || ""}
                      onChange={handleInputChange}
                      type="text"
                      className={`border-solid border-2 rounded-md py-0.5 w-full ${
                        formState.NAV_Size
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    />
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Not_Pd_Grp2</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Not_Pd_Grp2}
                      id="S_No_Pd_Grp_CD2"
                      value={planListData?.S_No_Pd_Grp_CD2?.not || ""}
                      onChange={(e) => {
                        const selectedValue = e.target.value;
                        handleInputChange({
                          target: {
                            id: "S_No_Pd_Grp_CD2",
                            value: { not: selectedValue },
                          },
                        });
                      }}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full h-8"
                    >
                      <option value={planListData?.S_No_Pd_Grp_CD2?.not}>
                        {planListData?.S_No_Pd_Grp_CD2?.not}
                      </option>
                      {Array.isArray(WorkgData) && WorkgData.length > 0 ? (
                        <>
                          <option disabled>
                            WorkG_CD | WorkG_Abb | WorkG_Name | WorkG_Remark
                          </option>
                          {WorkgData.map((item, index) => (
                            <option key={index} value={item.WorkG_CD}>
                              {item.WorkG_CD} | {item.WorkG_Abb} |{" "}
                              {item.WorkG_Name} | {item.WorkG_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Not_Pd_Grp2_Input}
                    id="S_No_Pd_Grp_Abb2"
                    value={destinationName4}
                    onChange={(event) => setWorkgData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Request_CAT</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Request_CAT}
                      id="S_Request1_CD"
                      value={planListData?.S_Request1_CD || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Request_CAT
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value={planListData?.S_Request1_CD}>
                        {planListData?.S_Request1_CD}
                      </option>
                      {Array.isArray(Request1Data) &&
                      Request1Data.length > 0 ? (
                        <>
                          <option disabled>
                            Request1_CD | Request1_Abb | Request1_Remark
                          </option>
                          {Request1Data.map((item, index) => (
                            <option key={index} value={item.Request1_CD}>
                              {item.Request1_CD} | {item.Request1_Abb} |{" "}
                              {item.Request1_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Request_CAT_Input}
                    id="S_Request1_Name"
                    value={request1Name}
                    onChange={(event) => setRequest1Data(event)}
                    type="text"
                    className={`border-solid border-2 rounded-md py-0.5 w-32 ml-1 ${
                      formState.Request_CAT_Input
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />

                  <div className="relative w-24 ml-1">
                    <select
                      disabled={!formState.Request_CAT_Select2}
                      id="S_Request2_CD"
                      value={planListData?.S_Request2_CD || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Request_CAT_Select2
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value={planListData?.S_Request2_CD}>
                        {planListData?.S_Request2_CD}
                      </option>
                      {Array.isArray(Request2Data) &&
                      Request2Data.length > 0 ? (
                        <>
                          <option disabled>
                            Request2_CD | Request2_Abb | Request2_Remark
                          </option>
                          {Request2Data.map((item, index) => (
                            <option key={index} value={item.Request2_CD}>
                              {item.Request2_CD} | {item.Request2_Abb} |{" "}
                              {item.Request2_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Request_CAT_Input2}
                    id="S_Request2_Name"
                    value={request2Name}
                    onChange={(event) => setRequest2Data(event)}
                    type="text"
                    className={`border-solid border-2 rounded-md py-0.5 w-32 ml-1 ${
                      formState.Request_CAT_Input2
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />

                  <div className="relative w-24 ml-1">
                    <select
                      disabled={!formState.Request_CAT_Select3}
                      id="S_Request3_CD"
                      value={planListData?.S_Request3_CD || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Request_CAT_Select3
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value={planListData?.S_Request3_CD}>
                        {planListData?.S_Request3_CD}
                      </option>
                      {Array.isArray(Request3Data) &&
                      Request3Data.length > 0 ? (
                        <>
                          <option disabled>
                            Request3_CD | Request3_Abb | Request3_Remark
                          </option>
                          {Request3Data.map((item, index) => (
                            <option key={index} value={item.Request3_CD}>
                              {item.Request3_CD} | {item.Request3_Abb} |{" "}
                              {item.Request3_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Request_CAT_Input3}
                    id="S_Request3_Name"
                    value={request3Name}
                    onChange={(event) => setRequest3Data(event)}
                    type="text"
                    className={`border-solid border-2 rounded-md py-0.5 w-32 ml-1 ${
                      formState.Request_CAT_Input3
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}

                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Request_Delivery
                      </label>
                      <input
                        disabled={!formState.Request_Delivery}
                        id="S_St_Request_Delivery"
                        value={
                          planListData?.S_St_Request_Delivery
                            ? planListData.S_St_Request_Delivery.substring(
                                0,
                                10
                              )
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Request_Delivery
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <input
                        disabled={!formState.Request_Delivery_Input2}
                        id="S_Ed_Request_Delivery"
                        value={
                          planListData?.S_Ed_Request_Delivery
                            ? planListData.S_Ed_Request_Delivery.substring(
                                0,
                                10
                              )
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Request_Delivery_Input2
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 5 */}

                {/* Start Group 6 */}
                <div className="flex pl-5 mt-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pr-5">
                    <label className="font-bold text-xs">Product_Size</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <input
                      disabled={!formState.Product_Size}
                      id="S_Product_Size"
                      value={planListData?.S_Product_Size || ""}
                      onChange={handleInputChange}
                      type="text"
                      className={`border-solid border-2 rounded-md py-0.5 w-full ${
                        formState.Product_Size
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    />
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-10">
                    <label className="font-bold text-xs">Customer1</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Customer1}
                      id="S_Customer_CD1"
                      value={planListData?.S_Customer_CD1 || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_Customer_CD1}>
                        {planListData?.S_Customer_CD1}
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
                  <input
                    disabled={!formState.Customer1_Input}
                    id="S_Customer_Abb1"
                    value={selectedCustomerAbb || ""}
                    onChange={(event) => setCustomerData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[265px]">
                    <label className="font-bold text-xs">
                      Od_No_of_Customer
                    </label>
                  </div>
                  <input
                    disabled={!formState.Od_No_of_Customer}
                    id="S_Od_No_of_Custom"
                    value={planListData?.S_Od_No_of_Custom || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-56 ml-1 ${
                      formState.Od_No_of_Customer
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Mate1</label>
                  </div>
                  <input
                    disabled={!formState.Mate1}
                    id="S_Material1"
                    value={planListData?.S_Material1 || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md py-0.5 w-28 ml-1 ${
                      formState.Mate1
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        NAV_Delivery
                      </label>
                      <input
                        disabled={!formState.NAV_Delivery}
                        id="S_St_NAV_Delivery"
                        value={
                          planListData?.S_St_NAV_Delivery
                            ? planListData.S_St_NAV_Delivery.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.NAV_Delivery
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <input
                        disabled={!formState.NAV_Delivery_Input2}
                        id="S_Ed_NAV_Delivery"
                        value={
                          planListData?.S_Ed_NAV_Delivery
                            ? planListData.S_Ed_NAV_Delivery.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.NAV_Delivery_Input2
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 6 */}

                {/* Start Group 7 */}
                <div className="flex pl-5 mt-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pr-4">
                    <label className="font-bold text-xs">Cus_Draw_No</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <input
                      disabled={!formState.Cus_Draw_No}
                      id="S_Customer_Draw"
                      value={planListData?.S_Customer_Draw || ""}
                      onChange={handleInputChange}
                      type="text"
                      className={`border-solid border-2 rounded-md py-0.5 w-full ${
                        formState.Cus_Draw_No
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    />
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-10">
                    <label className="font-bold text-xs">Customer2</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Customer2}
                      id="S_Customer_CD2"
                      value={planListData?.S_Customer_CD2 || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_Customer_CD2}>
                        {planListData?.S_Customer_CD2}
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
                  <input
                    disabled={!formState.Customer2_Input}
                    id="S_Customer_Abb2"
                    value={selectedCustomerAbb2 || ""}
                    onChange={(event) => setCustomerData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-8">
                    <label className="font-bold text-xs">Cus_Name1</label>
                  </div>
                  <input
                    disabled={!formState.Cus_Name1}
                    id="S_Customer_Name1"
                    value={planListData?.S_Customer_Name1 || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-52 ml-1 ${
                      formState.Cus_Name1
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Item1</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Item1}
                      id="S_Item1_CD"
                      value={planListData?.S_Item1_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_Item1_CD}>
                        {planListData?.S_Item1_CD}
                      </option>
                      {Array.isArray(Item1Data) && Item1Data.length > 0 ? (
                        <>
                          <option disabled>
                            Item1_CD | Item1_Abb | Item1_Remark
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
                  <input
                    disabled={!formState.Item1_Input}
                    id="S_Item1_Name"
                    value={itemName || ""}
                    onChange={(event) => setItem1Data(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Mate2</label>
                  </div>
                  <input
                    disabled={!formState.Mate2}
                    id="S_Material2"
                    value={planListData?.S_Material2 || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md py-0.5 w-28 ml-1 ${
                      formState.Mate2
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Confirm_Delivery
                      </label>
                      <input
                        disabled={!formState.Confirm_Delivery}
                        id="S_St_Confirm_Delivery"
                        value={
                          planListData?.S_St_Confirm_Delivery
                            ? planListData.S_St_Confirm_Delivery.substring(
                                0,
                                10
                              )
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Confirm_Delivery
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <input
                        disabled={!formState.Confirm_Delivery_Input2}
                        id="S_Ed_Confirm_Delivery"
                        value={
                          planListData?.S_Ed_Confirm_Delivery
                            ? planListData.S_Ed_Confirm_Delivery.substring(
                                0,
                                10
                              )
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Confirm_Delivery_Input2
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 7 */}

                {/* Start Group 8 */}
                <div className="flex pl-5 mt-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pr-3">
                    <label className="font-bold text-xs">Com_Draw_No</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <input
                      disabled={!formState.Com_Draw_No}
                      id="S_Company_Draw"
                      value={planListData?.S_Company_Draw || ""}
                      onChange={handleInputChange}
                      type="text"
                      className={`border-solid border-2 rounded-md py-0.5 w-full ${
                        formState.Com_Draw_No
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    />
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-10">
                    <label className="font-bold text-xs">Customer3</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Customer3}
                      id="S_Customer_CD3"
                      value={planListData?.S_Customer_CD3 || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_Customer_CD3}>
                        {planListData?.S_Customer_CD3}
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
                  <input
                    disabled={!formState.Customer3_Input}
                    id="S_Customer_Abb3"
                    value={selectedCustomerAbb3 || ""}
                    onChange={(event) => setCustomerData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-8">
                    <label className="font-bold text-xs">Cus_Name2</label>
                  </div>
                  <input
                    disabled={!formState.Cus_Name2}
                    id="S_Customer_Name2"
                    value={planListData?.S_Customer_Name2 || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-52 ml-1 ${
                      formState.Cus_Name2
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Item2</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Item2}
                      id="S_Item2_CD"
                      value={planListData?.S_Item2_CD || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Item2
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <input
                    disabled={!formState.Item2_Input}
                    id="S_Item2_Name"
                    value={planListData?.S_Item2_Name || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md py-0.5 w-32 ml-1 ${
                      formState.Item2_Input
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Mate3</label>
                  </div>
                  <input
                    disabled={!formState.Mate3}
                    id="S_Material3"
                    value={planListData?.S_Material3 || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md py-0.5 w-28 ml-1 ${
                      formState.Mate3
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Product_Delivery
                      </label>
                      <input
                        disabled={!formState.Product_Delivery}
                        id="S_St_Product_Delivery"
                        value={
                          planListData?.S_St_Product_Delivery
                            ? planListData.S_St_Product_Delivery.substring(
                                0,
                                10
                              )
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-40"
                      />
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <input
                        disabled={!formState.Product_Delivery_Input2}
                        id="S_Ed_Product_Delivery"
                        value={
                          planListData?.S_Ed_Product_Delivery
                            ? planListData.S_Ed_Product_Delivery.substring(
                                0,
                                10
                              )
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-40"
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 8 */}

                {/* Start Group 9 */}
                <div className="flex pl-5 mt-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pr-6">
                    <label className="font-bold text-xs">Pd_Draw_No</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <input
                      disabled={!formState.Pd_Draw_No}
                      id="S_Product_Draw"
                      value={planListData?.S_Product_Draw || ""}
                      onChange={handleInputChange}
                      type="text"
                      className={`border-solid border-2 rounded-md py-0.5 w-full ${
                        formState.Pd_Draw_No
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    />
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-5">
                    <label className="font-bold text-xs">Not_Customer</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Not_Customer}
                      id="S_No_Customer_CD"
                      value={planListData?.S_No_Customer_CD?.not || ""}
                      onChange={(e) => {
                        const selectedValue = e.target.value;
                        handleInputChange({
                          target: {
                            id: "S_No_Customer_CD",
                            value: { not: selectedValue },
                          },
                        });
                      }}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full h-8"
                    >
                      <option value={planListData?.S_No_Customer_CD?.not}>
                        {planListData?.S_No_Customer_CD?.not}
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
                  <input
                    disabled={!formState.Not_Customer_Input}
                    id="S_No_Customer_Abb"
                    value={selectedCustomerAbb4 || ""}
                    onChange={(event) => setCustomerData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-8">
                    <label className="font-bold text-xs">Cus_Name3</label>
                  </div>
                  <input
                    disabled={!formState.Cus_Name3}
                    id="S_No_Customer_Name3"
                    value={planListData?.S_No_Customer_Name3 || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-52 ml-1 ${
                      formState.Cus_Name3
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Item3</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Item3}
                      id="S_Item3_CD"
                      value={planListData?.S_Item3_CD || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Item3
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <input
                    disabled={!formState.Item3_Input}
                    id="S_Item3_Name"
                    value={planListData?.S_Item3_Name || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md py-0.5 w-32 ml-1 ${
                      formState.Item3_Input
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Mate4</label>
                  </div>
                  <input
                    disabled={!formState.Mate4}
                    id="S_Material4"
                    value={planListData?.S_Material4 || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md py-0.5 w-28 ml-1 ${
                      formState.Mate4
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Product_Received
                      </label>
                      <input
                        disabled={!formState.Product_Received}
                        id="S_St_Pd_Received_Date"
                        value={
                          planListData?.S_St_Pd_Received_Date
                            ? planListData.S_St_Pd_Received_Date.substring(
                                0,
                                10
                              )
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Product_Received
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <input
                        disabled={!formState.Product_Received_Input2}
                        id="S_Ed_Pd_Received_Date"
                        value={
                          planListData?.S_Ed_Pd_Received_Date
                            ? planListData.S_Ed_Pd_Received_Date.substring(
                                0,
                                10
                              )
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Product_Received_Input2
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 9 */}

                {/* Start Group 10 */}
                <div className="flex pl-5 mt-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pr-8">
                    <label className="font-bold text-xs">Sales_Note</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <input
                      disabled={!formState.Sales_Note}
                      id="S_Sl_instructions"
                      value={planListData?.S_Sl_instructions || ""}
                      onChange={handleInputChange}
                      type="text"
                      className={`border-solid border-2 rounded-md py-0.5 w-full ${
                        formState.Sales_Note
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    />
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[52px]">
                    <label className="font-bold text-xs">Specific1</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Specific1}
                      id="S_Specific_CD1"
                      value={planListData?.S_Specific_CD1 || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_Specific_CD1}>
                        {planListData?.S_Specific_CD1}
                      </option>
                      {Array.isArray(SpecificData) &&
                      SpecificData.length > 0 ? (
                        <>
                          <option disabled>
                            Specific_CD | Specific_Abb | Specific_Remark
                          </option>
                          {SpecificData.map((item, index) => (
                            <option key={index} value={item.Specific_CD}>
                              {item.Specific_CD} | {item.Specific_Abb} |{" "}
                              {item.Specific_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Specific1_Input}
                    id="S_Specific_Name1"
                    value={SpecificName || ""}
                    onChange={(event) => setSpecificData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-12">
                    <label className="font-bold text-xs">Coating1</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Coating1}
                      id="S_Coating_CD1"
                      value={planListData?.S_Coating_CD1 || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_Coating_CD1}>
                        {planListData?.S_Coating_CD1}
                      </option>
                      {Array.isArray(CoatingData) && CoatingData.length > 0 ? (
                        <>
                          <option disabled>
                            Coating_CD | Coating_Symbol | Coating_Remark
                          </option>
                          {CoatingData.map((item, index) => (
                            <option key={index} value={item.Coating_CD}>
                              {item.Coating_CD} | {item.Coating_Symbol} |{" "}
                              {item.Coating_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Coating1_Input}
                    id="S_Coating_Name1"
                    value={coatingName || ""}
                    onChange={(event) => setCoatingData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-28 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Item4</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Item4}
                      id="S_Item4_CD"
                      value={planListData?.S_Item4_CD || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Item4
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <input
                    disabled={!formState.Item4_Input}
                    id="S_Item4_Name"
                    value={planListData?.S_Item4_Name || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md py-0.5 w-32 ml-1 ${
                      formState.Item4_Input
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Mate5</label>
                  </div>
                  <input
                    disabled={!formState.Mate5}
                    id="S_Material5"
                    value={planListData?.S_Material5 || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md py-0.5 w-28 ml-1 ${
                      formState.Mate5
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Product_Complete
                      </label>
                      <input
                        disabled={!formState.Product_Complete}
                        id="S_St_Pd_Complete_Date"
                        value={
                          planListData?.S_St_Pd_Complete_Date
                            ? planListData.S_St_Pd_Complete_Date.substring(
                                0,
                                10
                              )
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Product_Complete
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <input
                        disabled={!formState.Product_Complete_Input2}
                        id="S_Ed_Pd_Complete_Date"
                        value={
                          planListData?.S_Ed_Pd_Complete_Date
                            ? planListData.S_Ed_Pd_Complete_Date.substring(
                                0,
                                10
                              )
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Product_Complete_Input2
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 10 */}

                {/* Start Group 11 */}
                <div className="flex pl-5 mt-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pr-[45px]">
                    <label className="font-bold text-xs">Pd_Note</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <input
                      disabled={!formState.Pd_Note}
                      id="S_Pd_instructions"
                      value={planListData?.S_Pd_instructions || ""}
                      onChange={handleInputChange}
                      type="text"
                      className={`border-solid border-2 rounded-md py-0.5 w-full ${
                        formState.Pd_Note
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    />
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[52px]">
                    <label className="font-bold text-xs">Specific2</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Specific2}
                      id="S_Specific_CD2"
                      value={planListData?.S_Specific_CD2 || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_Specific_CD2}>
                        {planListData?.S_Specific_CD2}
                      </option>
                      {Array.isArray(SpecificData) &&
                      SpecificData.length > 0 ? (
                        <>
                          <option disabled>
                            Specific_CD | Specific_Abb | Specific_Remark
                          </option>
                          {SpecificData.map((item, index) => (
                            <option key={index} value={item.Specific_CD}>
                              {item.Specific_CD} | {item.Specific_Abb} |{" "}
                              {item.Specific_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Specific2_Input}
                    id="S_Specific_Name2"
                    value={SpecificName2 || ""}
                    onChange={(event) => setSpecificData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-12">
                    <label className="font-bold text-xs">Coating2</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Coating2}
                      id="S_Coating_CD2"
                      value={planListData?.S_Coating_CD2 || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_Coating_CD2}>
                        {planListData?.S_Coating_CD2}
                      </option>
                      {Array.isArray(CoatingData) && CoatingData.length > 0 ? (
                        <>
                          <option disabled>
                            Coating_CD | Coating_Symbol | Coating_Remark
                          </option>
                          {CoatingData.map((item, index) => (
                            <option key={index} value={item.Coating_CD}>
                              {item.Coating_CD} | {item.Coating_Symbol} |{" "}
                              {item.Coating_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Coating2_Input}
                    id="S_Coating_Name1"
                    value={coatingName2 || ""}
                    onChange={(event) => setCoatingData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-28 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-20">
                    <label className="font-bold text-xs">Od_Pend</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Od_Pend}
                      id="S_Od_Pending"
                      value={planListData?.S_Od_Pending || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value=""></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[82px]">
                    <label className="font-bold text-xs">Od_CAT1</label>
                  </div>
                  <div className="relative w-28">
                    <select
                      disabled={!formState.Od_CAT1}
                      id="S_Od_CAT1"
                      value={planListData?.S_Od_CAT1 || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Od_CAT1
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value=""></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        QC_Complete
                      </label>
                      <input
                        disabled={!formState.QC_Complete}
                        id="S_St_I_Complete_Date"
                        value={
                          planListData?.S_St_I_Complete_Date
                            ? planListData.S_St_I_Complete_Date.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.QC_Complete
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <input
                        disabled={!formState.QC_Complete_Input2}
                        id="S_Ed_I_Complete_Date"
                        value={
                          planListData?.S_Ed_I_Complete_Date
                            ? planListData.S_Ed_I_Complete_Date.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.QC_Complete_Input2
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 11 */}

                {/* Start Group 12 */}
                <div className="flex pl-5 mt-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pr-[30px]">
                    <label className="font-bold text-xs">Pd_Remark</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <input
                      disabled={!formState.Pd_Remark}
                      id="S_Pd_Remark"
                      value={planListData?.S_Pd_Remark || ""}
                      onChange={handleInputChange}
                      type="text"
                      className={`border-solid border-2 rounded-md py-0.5 w-full ${
                        formState.Pd_Remark
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    />
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-7">
                    <label className="font-bold text-xs">Not_Specific1</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Not_Specific1}
                      id="S_No_Specific_CD1"
                      value={planListData?.S_No_Specific_CD1?.not || ""}
                      onChange={(e) => {
                        const selectedValue = e.target.value;
                        handleInputChange({
                          target: {
                            id: "S_No_Specific_CD1",
                            value: { not: selectedValue },
                          },
                        });
                      }}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full h-8"
                    >
                      <option value={planListData?.S_No_Specific_CD1?.not}>
                        {planListData?.S_No_Specific_CD1?.not}
                      </option>
                      {Array.isArray(SpecificData) &&
                      SpecificData.length > 0 ? (
                        <>
                          <option disabled>
                            Specific_CD | Specific_Abb | Specific_Remark
                          </option>
                          {SpecificData.map((item, index) => (
                            <option key={index} value={item.Specific_CD}>
                              {item.Specific_CD} | {item.Specific_Abb} |{" "}
                              {item.Specific_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Not_Specific1_Input}
                    id="S_No_Specific_Name1"
                    value={SpecificName3 || ""}
                    onChange={(event) => setSpecificData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[46px]">
                    <label className="font-bold text-xs">Coating3</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Coating3}
                      id="S_Coating_CD3"
                      value={planListData?.S_Coating_CD3 || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value={planListData?.S_Coating_CD3}>
                        {planListData?.S_Coating_CD3}
                      </option>
                      {Array.isArray(CoatingData) && CoatingData.length > 0 ? (
                        <>
                          <option disabled>
                            Coating_CD | Coating_Symbol | Coating_Remark
                          </option>
                          {CoatingData.map((item, index) => (
                            <option key={index} value={item.Coating_CD}>
                              {item.Coating_CD} | {item.Coating_Symbol} |{" "}
                              {item.Coating_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Coating3_Input}
                    id="S_Coating_Name3"
                    value={coatingName3 || ""}
                    onChange={(event) => setCoatingData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-28 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[71px]">
                    <label className="font-bold text-xs">TempShip</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.TempShip}
                      id="S_Temp_Shipment"
                      value={planListData?.S_Temp_Shipment || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.TempShip
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value=""></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[82px]">
                    <label className="font-bold text-xs">Od_CAT2</label>
                  </div>
                  <div className="relative w-28">
                    <select
                      disabled={!formState.Od_CAT2}
                      id="S_Od_CAT2"
                      value={planListData?.S_Od_CAT2 || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Od_CAT2
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value=""></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Shipment_Date
                      </label>
                      <input
                        disabled={!formState.Shipment_Date}
                        id="S_St_Shipment_Date"
                        value={
                          planListData?.S_St_Shipment_Date
                            ? planListData.S_St_Shipment_Date.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Shipment_Date
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <input
                        disabled={!formState.Shipment_Date_Input2}
                        id="S_Ed_Shipment_Date"
                        value={
                          planListData?.S_Ed_Shipment_Date
                            ? planListData.S_Ed_Shipment_Date.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Shipment_Date_Input2
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 12 */}

                {/* Start Group 13 */}
                <div className="flex pl-5 mt-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pr-7">
                    <label className="font-bold text-xs">QC_Remark</label>
                  </div>
                  <div className="relative w-40 lg:w-44">
                    <input
                      disabled={!formState.QC_Remark}
                      id="S_I_Remark"
                      value={planListData?.S_I_Remark || ""}
                      onChange={handleInputChange}
                      type="text"
                      className={`border-solid border-2 rounded-md py-0.5 w-full ${
                        formState.QC_Remark
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    />
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[28px]">
                    <label className="font-bold text-xs">Not_Specific2</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Not_Specific2}
                      id="S_No_Specific_CD2"
                      value={planListData?.S_No_Specific_CD2?.not || ""}
                      onChange={(e) => {
                        const selectedValue = e.target.value;
                        handleInputChange({
                          target: {
                            id: "S_No_Specific_CD2",
                            value: { not: selectedValue },
                          },
                        });
                      }}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full h-8"
                    >
                      <option value={planListData?.S_No_Specific_CD2?.not}>
                        {planListData?.S_No_Specific_CD2?.not}
                      </option>
                      {Array.isArray(SpecificData) &&
                      SpecificData.length > 0 ? (
                        <>
                          <option disabled>
                            Specific_CD | Specific_Abb | Specific_Remark
                          </option>
                          {SpecificData.map((item, index) => (
                            <option key={index} value={item.Specific_CD}>
                              {item.Specific_CD} | {item.Specific_Abb} |{" "}
                              {item.Specific_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Not_Specific2_Input}
                    id="S_No_Specific_Name2"
                    value={SpecificName4 || ""}
                    onChange={(event) => setSpecificData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[46px]">
                    <label className="font-bold text-xs">Not_Coat</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Not_Coat}
                      id="S_No_Coating_CD"
                      value={planListData?.S_No_Coating_CD?.not || ""}
                      onChange={(e) => {
                        const selectedValue = e.target.value;
                        handleInputChange({
                          target: {
                            id: "S_No_Coating_CD",
                            value: { not: selectedValue },
                          },
                        });
                      }}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full h-8"
                    >
                      <option value={planListData?.S_No_Coating_CD?.not}>
                        {planListData?.S_No_Coating_CD?.not}
                      </option>
                      {Array.isArray(CoatingData) && CoatingData.length > 0 ? (
                        <>
                          <option disabled>
                            Coating_CD | Coating_Symbol | Coating_Remark
                          </option>
                          {CoatingData.map((item, index) => (
                            <option key={index} value={item.Coating_CD}>
                              {item.Coating_CD} | {item.Coating_Symbol} |{" "}
                              {item.Coating_Remark}
                            </option>
                          ))}
                        </>
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  <input
                    disabled={!formState.Not_Coat_Input}
                    id="S_No_Coating_Name"
                    value={coatingName4 || ""}
                    onChange={(event) => setCoatingData(event)}
                    type="text"
                    className="bg-white border-2 border-gray-500 rounded-md w-28 ml-1"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[63px]">
                    <label className="font-bold text-xs">Unreceived</label>
                  </div>
                  <div className="relative w-24 ml-0.5">
                    <select
                      disabled={!formState.Unreceived}
                      id="S_Unreceived"
                      value={planListData?.S_Unreceived || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Unreceived
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value=""></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[82px]">
                    <label className="font-bold text-xs">Od_CAT3</label>
                  </div>
                  <div className="relative w-28">
                    <select
                      disabled={!formState.Od_CAT3}
                      id="S_Od_CAT3"
                      value={planListData?.S_Od_CAT3 || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Od_CAT3
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value=""></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Calc_Date
                      </label>
                      <input
                        disabled={!formState.Calc_Date}
                        id="S_St_Calc_Date"
                        value={
                          planListData?.S_St_Calc_Date
                            ? planListData.S_St_Calc_Date.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Calc_Date
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <input
                        disabled={!formState.Calc_Date_Input2}
                        id="S_Ed_Calc_Date"
                        value={
                          planListData?.S_Ed_Calc_Date
                            ? planListData.S_Ed_Calc_Date.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Calc_Date_Input2
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 13 */}

                {/* Start Group 14 */}
                <div className="flex pl-5 mt-5">
                  {/* Start */}
                  <div className="px-10">
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-[150px]">
                      Target_Conv1 <br />
                      (● → ★)
                    </button>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="px-10">
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-[150px]">
                      Target_Conv2 <br />
                      (◻️ → ●)
                    </button>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="px-10">
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-[150px]">
                      Target_Conv3 <br />
                      (Null → ●)
                    </button>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="px-10">
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-[150px]">
                      Target_Conv4 <br />
                      (Null → ◻️)
                    </button>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="px-10">
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-[150px]">
                      Target_Conv5 <br />
                      (→ Null)
                    </button>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="px-10">
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-[150px] h-[70px]">
                      FG_SUM
                    </button>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Cale_Process
                      </label>
                      <input
                        disabled={!formState.Cale_Process}
                        id="S_St_Calc_Process_Date"
                        value={
                          planListData?.S_St_Calc_Process_Date
                            ? planListData.S_St_Calc_Process_Date.substring(
                                0,
                                10
                              )
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Cale_Process
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <input
                        disabled={!formState.Cale_Process_Input2}
                        id="S_Ed_Calc_Process_Date"
                        value={
                          planListData?.S_Ed_Calc_Process_Date
                            ? planListData.S_Ed_Calc_Process_Date.substring(
                                0,
                                10
                              )
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-40 ${
                          formState.Cale_Process_Input2
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 14 */}
              </div>
            </div>

            <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

            <div className="flex items-center font-bold pl-2">
              <label className="mr-2">Plan_Info_Search</label>
            </div>

            <div className="w-full mt-5 overflow-x-auto pr-10">
              <div className="min-w-[1900px] w-full mb-7">
                {/* Start Group 1 */}
                <div className="flex pl-5">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-3">
                    <label className="font-bold text-xs">Parts_No</label>
                  </div>
                  <input
                    disabled={!formState.Parts_No}
                    id="S_St_Parts_No"
                    value={planListData?.S_St_Parts_No || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-32 ml-7 ${
                      formState.Parts_No
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  <span className="text-lg mx-3">~</span>
                  {/* Start */}
                  <input
                    disabled={!formState.Parts_No_Input2}
                    id="S_Ed_Parts_No"
                    value={planListData?.S_Ed_Parts_No || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-32 ml-1 ${
                      formState.Parts_No_Input2
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-16">
                    <label className="font-bold text-xs">Pt_Qty</label>
                  </div>
                  <input
                    disabled={!formState.Pt_Qty}
                    id="S_St_Pt_Qty"
                    value={planListData?.S_St_Pt_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-32 ml-4 ${
                      formState.Pt_Qty
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  <span className="text-lg mx-3">~</span>
                  {/* Start */}
                  <input
                    disabled={!formState.Pt_Qty_Input2}
                    id="S_Ed_Pt_Qty"
                    value={planListData?.S_Ed_Pt_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-32 ml-1 ${
                      formState.Pt_Qty_Input2
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[235px]">
                    <label className="font-bold text-xs">Money_Obj</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Money_Obj}
                      id="S_Money_Object"
                      value={planListData?.S_Money_Object || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value=""></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-12">
                    <label className="font-bold text-xs">Pt_CAT1</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Pt_CAT1}
                      id="S_Parts_CAT1"
                      value={planListData?.S_Parts_CAT1 || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Pt_CAT1
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value=""></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Plan_Progress
                      </label>
                      <select
                        disabled={!formState.Plan_Progress}
                        id="S_St_Pl_Progress_CD"
                        value={planListData?.S_St_Pl_Progress_CD || ""}
                        onChange={handleInputChange}
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-36"
                      >
                        <option value=""></option>
                        {Array.isArray(PlProgressData) &&
                        PlProgressData.length > 0 ? (
                          PlProgressData.map((item, index) => (
                            <option key={index} value={item.Pl_Progress_CD}>
                              {item.Pl_Progress_Symbol}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <select
                        disabled={!formState.Plan_Progress_Select2}
                        id="S_Ed_Pl_Progress_CD"
                        value={planListData?.S_Ed_Pl_Progress_CD || ""}
                        onChange={handleInputChange}
                        className="bg-[#ccffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 appearance-none w-36"
                      >
                        <option value=""></option>
                        {Array.isArray(PlProgressData) &&
                        PlProgressData.length > 0 ? (
                          PlProgressData.map((item, index) => (
                            <option key={index} value={item.Pl_Progress_CD}>
                              {item.Pl_Progress_Symbol}
                            </option>
                          ))
                        ) : (
                          <option value="">ไม่มีข้อมูล</option>
                        )}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 1 */}

                {/* Start Group 2 */}
                <div className="flex pl-5 mt-3">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-3">
                    <label className="font-bold text-xs">Pt_Name</label>
                  </div>
                  <div className="relative w-40 ml-7">
                    <select
                      disabled={!formState.Pt_Name}
                      id="S_Parts_CD"
                      value={planListData?.S_Parts_CD || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Pt_Name
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value=""></option>
                      {Array.isArray(partsData) && partsData.length > 0 ? (
                        partsData.map((item, index) => (
                          <option key={index} value={item.Parts_CD}>
                            {item.Parts_Abb}
                          </option>
                        ))
                      ) : (
                        <option value="">ไม่มีข้อมูล</option>
                      )}
                    </select>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[181px]">
                    <label className="font-bold text-xs">Pt_Sp_Qty</label>
                  </div>
                  <input
                    disabled={!formState.Pt_Sp_Qty}
                    id="S_St_Pt_Sp_Qty"
                    value={planListData?.S_St_Pt_Sp_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-32 ml-4 ${
                      formState.Pt_Sp_Qty
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  <span className="text-lg mx-3">~</span>
                  {/* Start */}
                  <input
                    disabled={!formState.Pt_Sp_Qty_Input2}
                    id="S_Ed_Pt_Sp_Qty"
                    value={planListData?.S_Ed_Pt_Sp_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-32 ml-1 ${
                      formState.Pt_Sp_Qty_Input2
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[256px]">
                    <label className="font-bold text-xs">Outside</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Outside}
                      id="S_Outside"
                      value={planListData?.S_Outside || "false"}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value=""></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-12">
                    <label className="font-bold text-xs">Pt_CAT2</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Pt_CAT2}
                      id="S_Parts_CAT2"
                      value={planListData?.Pt_CAT2 || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Pt_CAT2
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value=""></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Parts_Delivery
                      </label>
                      <input
                        disabled={!formState.Parts_Delivery}
                        id="S_St_Parts_Delivery"
                        value={
                          planListData?.S_St_Parts_Delivery
                            ? planListData.S_St_Parts_Delivery.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-36 ${
                          formState.Parts_Delivery
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <input
                        disabled={!formState.Parts_Delivery_Input2}
                        id="S_Ed_Parts_Delivery"
                        value={
                          planListData?.S_Ed_Parts_Delivery
                            ? planListData.S_Ed_Parts_Delivery.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className={`border-solid border-2 rounded-md px-2 py-0.5 w-36 ${
                          formState.Parts_Delivery_Input2
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 2 */}

                {/* Start Group 3 */}
                <div className="flex pl-5 mt-3">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-3">
                    <label className="font-bold text-xs">Req_Person</label>
                  </div>
                  <div className="relative w-32 ml-4">
                    <select
                      disabled={!formState.Req_Person}
                      id="S_Pl_Reg_Person_CD"
                      value={planListData?.S_Pl_Reg_Person_CD || ""}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value=""></option>
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
                    disabled={!formState.Req_Person_Input}
                    id="S_Pl_Reg_Person_Name"
                    value={plRegPersonName}
                    onChange={(event) => setWorkgData(event)}
                    type="text"
                    className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-32 ml-1"
                  />
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-10">
                    <label className="font-bold text-xs">Pt_Mate</label>
                  </div>
                  <input
                    disabled={!formState.Pt_Mate}
                    id="S_Pt_Material"
                    value={planListData?.S_Pt_Material || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-32 ml-4 ${
                      formState.Pt_Mate
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-16">
                    <label className="font-bold text-xs">Pt_NG_Qty</label>
                  </div>
                  <input
                    disabled={!formState.Pt_NG_Qty}
                    id="S_St_Pt_NG_Qty"
                    value={planListData?.S_St_Pt_NG_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-32 ml-1 ${
                      formState.Pt_NG_Qty
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}
                  <span className="text-lg mx-3">~</span>
                  {/* Start */}
                  <input
                    disabled={!formState.Pt_NG_Qty_Input2}
                    id="S_Ed_Pt_NG_Qty"
                    value={planListData?.S_Ed_Pt_NG_Qty || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-32 ml-1 ${
                      formState.Pt_NG_Qty_Input2
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-10">
                    <label className="font-bold text-xs">Pt_Pend</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Pt_Pend}
                      id="S_Parts_Pending"
                      value={planListData?.S_Parts_Pending || "false"}
                      onChange={handleInputChange}
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full h-8"
                    >
                      <option value=""></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[47px]">
                    <label className="font-bold text-xs">Pt_CAT3</label>
                  </div>
                  <div className="relative w-24">
                    <select
                      disabled={!formState.Pt_CAT3}
                      id="S_Parts_CAT3"
                      value={planListData?.S_Parts_CAT3 || ""}
                      onChange={handleInputChange}
                      className={`border-solid border-2 rounded-md py-0.5 w-full h-8 ${
                        formState.Pt_CAT3
                          ? "bg-[#ccffff] border-gray-500"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      <option value=""></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">
                        Pl_Process_Date
                      </label>
                      <input
                        disabled={!formState.Pl_Process_Date}
                        id="S_St_Pl_Process_Date"
                        value={
                          planListData?.S_St_Pl_Process_Date
                            ? planListData.S_St_Pl_Process_Date.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className="bg-[#00ffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-36"
                      />
                    </div>

                    <span className="text-lg">~</span>

                    <div className="relative">
                      <input
                        disabled={!formState.Pl_Process_Date_Input2}
                        id="S_St_Ed_Process_Date"
                        value={
                          planListData?.S_St_Ed_Process_Date
                            ? planListData.S_St_Ed_Process_Date.substring(0, 10)
                            : ""
                        }
                        onChange={(event) => handleInputChange(event)}
                        type="date"
                        className="bg-[#00ffff] border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-36"
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 3 */}

                {/* Start Group 4 */}
                <div className="flex pl-5 mt-3">
                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-3">
                    <label className="font-bold text-xs">Part_Note</label>
                  </div>
                  <input
                    disabled={!formState.Part_Note}
                    id="S_Parts_Instructions"
                    value={planListData?.S_Parts_Instructions || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-32 ml-6 ${
                      formState.Part_Note
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-40">
                    <label className="font-bold text-xs">Pt_Remark</label>
                  </div>
                  <input
                    disabled={!formState.Pt_Remark}
                    id="S_Parts_Remark"
                    value={planListData?.S_Parts_Remark || ""}
                    onChange={handleInputChange}
                    type="text"
                    className={`border-solid border-2 rounded-md w-32 ml-4 ${
                      formState.Pt_Remark
                        ? "bg-[#ccffff] border-gray-500"
                        : "bg-gray-200 border-gray-400"
                    }`}
                  />
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-[65px]">
                    <label className="font-bold text-xs">Parts_Info</label>
                  </div>
                  <input
                    disabled={!formState.Parts_Info}
                    id="S_Parts_Information"
                    value={planListData?.S_Parts_Information || ""}
                    onChange={handleInputChange}
                    type="text"
                    className="bg-[#ccffff] border-2 border-gray-500 rounded-md w-40 ml-1"
                  />
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-10">
                    <label className="font-bold text-xs">Sort1</label>
                  </div>
                  <div className="relative w-40">
                    <select
                      disabled={!formState.Sort1}
                      id="Sort1"
                      defaultValue="Product_Delivery"
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                    >
                      <option value="OdPt_No">OdPt_No</option>
                      <option value="Product_Grp_CD">Product_Grp_CD</option>
                      <option value="Customer_CD">Customer_CD</option>
                      <option value="Request_Delivery">Request_Delivery</option>
                      <option value="Product_Delivery">Product_Delivery</option>
                      <option value="Confirm_Delivery">Confirm_Delivery</option>
                      <option value="Pt_Delivery">Pt_Delivery</option>
                    </select>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-4">
                    <label className="font-bold text-xs">Sort2</label>
                  </div>
                  <div className="relative w-40">
                    <select
                      disabled={!formState.Sort2}
                      id="Sort2"
                      defaultValue="Customer_CD"
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                    >
                      <option value="OdPt_No">OdPt_No</option>
                      <option value="Product_Grp_CD">Product_Grp_CD</option>
                      <option value="Customer_CD">Customer_CD</option>
                      <option value="Request_Delivery">Request_Delivery</option>
                      <option value="Product_Delivery">Product_Delivery</option>
                      <option value="Confirm_Delivery">Confirm_Delivery</option>
                      <option value="Pt_Delivery">Pt_Delivery</option>
                    </select>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="px-2 w-auto text-center pl-4">
                    <label className="font-bold text-xs">Sort3</label>
                  </div>
                  <div className="relative w-40">
                    <select
                      disabled={!formState.Sort3}
                      id="Sort3"
                      defaultValue="OdPt_No"
                      className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8"
                    >
                      <option value="OdPt_No">OdPt_No</option>
                      <option value="Product_Grp_CD">Product_Grp_CD</option>
                      <option value="Customer_CD">Customer_CD</option>
                      <option value="Request_Delivery">Request_Delivery</option>
                      <option value="Product_Delivery">Product_Delivery</option>
                      <option value="Confirm_Delivery">Confirm_Delivery</option>
                      <option value="Pt_Delivery">Pt_Delivery</option>
                    </select>
                  </div>
                  {/* End */}

                  {/* Start */}
                  <div className="flex items-center space-x-2 pl-4">
                    <div className="flex items-center relative">
                      <label className="text-xs font-bold mr-1">Sort..</label>
                      <input
                        disabled={!formState.Sort4}
                        id="Sort"
                        type="text"
                        className="bg-white border-solid border-2 border-gray-500 rounded-md px-2 py-0.5 w-40"
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 4 */}
              </div>
            </div>

            <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

            <div className="flex items-center font-bold pl-2">
              <label className="mr-2">List</label>
            </div>

            <div className="w-full mt-5 overflow-x-auto pr-10">
              <div className="min-w-[1400px] w-full mb-7">
                {/* Start Group 1 */}
                <div className="flex pl-5 items-center gap-3">
                  {/* Start */}
                  <div className="px-2 w-auto text-center">
                    <label className="font-bold text-xs">Select_Od_No</label>
                  </div>
                  <input
                    id="Select_Od_No"
                    type="text"
                    className="bg-[#cc99ff] border-2 border-gray-500 rounded-md w-32 h-8"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center">
                    <label className="font-bold text-xs">Select_Pt_No</label>
                  </div>
                  <input
                    id="Select_Pt_No"
                    type="text"
                    className="bg-[#cc99ff] border-2 border-gray-500 rounded-md w-32 h-8"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center">
                    <label className="font-bold text-xs">
                      List_View_W(22.8~40cm)
                    </label>
                  </div>
                  <input
                    id="Pl_List_ViewW"
                    type="text"
                    className="bg-[#ffff99] border-2 border-gray-500 rounded-md w-32 h-8"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center">
                    <label className="font-bold text-xs">
                      List_View_H(3~15cm)
                    </label>
                  </div>
                  <input
                    id="Pl_List_ViewH"
                    type="text"
                    className="bg-[#ffff99] border-2 border-gray-500 rounded-md w-32 h-8"
                  />
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center flex-none">
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-[150px]">
                      Change_View
                    </button>
                  </div>
                  {/* End */}
                  {/* Start */}
                  <div className="px-2 w-auto text-center flex-none pr-10">
                    <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-[150px]">
                      Plan_Result_Data
                    </button>
                  </div>
                  {/* End */}
                </div>
                {/* End Group 1 */}
              </div>
            </div>

            <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

            <div className="overflow-x-auto w-full mt-4">
              <table className="min-w-full table-auto border-collapse border border-gray-800 shadow-md rounded-lg">
                <thead className="bg-gray-200 text-black">
                  <tr>
                    {columnsVisibility.Product_Delivery && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Product_Delivery
                      </th>
                    )}
                    {columnsVisibility.Order_No && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Order_No
                      </th>
                    )}
                    {columnsVisibility.Parts_No && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[150px]">
                        Parts_No
                      </th>
                    )}
                    {columnsVisibility.Product_Grp && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Product_Grp
                      </th>
                    )}
                    {columnsVisibility.Customer_CD && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[200px]">
                        Customer_CD
                      </th>
                    )}
                    {columnsVisibility.Customer_Abb && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[250px]">
                        Customer_Abb
                      </th>
                    )}
                    {columnsVisibility.Product_Name && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[400px]">
                        Product_Name
                      </th>
                    )}
                    {columnsVisibility.Product_Size && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[400px]">
                        Product_Size
                      </th>
                    )}
                    {columnsVisibility.Product_Draw && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[250px]">
                        Product_Draw
                      </th>
                    )}
                    {columnsVisibility.Quantity && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Quantity
                      </th>
                    )}
                    {columnsVisibility.Pd_Calc_Qty && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Pd_Calc_Qty
                      </th>
                    )}
                    {columnsVisibility.Unit && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[200px]">
                        Unit
                      </th>
                    )}
                    {columnsVisibility.Target && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[150px]">
                        Target
                      </th>
                    )}
                    {columnsVisibility.Product_Docu && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[400px]">
                        Product_Docu
                      </th>
                    )}
                    {columnsVisibility.Sales_Grp && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Sales_Grp
                      </th>
                    )}
                    {columnsVisibility.Sales_Person && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Sales_Person
                      </th>
                    )}
                    {columnsVisibility.Request1 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Request1
                      </th>
                    )}
                    {columnsVisibility.Request2 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Request2
                      </th>
                    )}
                    {columnsVisibility.Request3 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Request3
                      </th>
                    )}
                    {columnsVisibility.Material1 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Material1
                      </th>
                    )}
                    {columnsVisibility.Material2 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Material2
                      </th>
                    )}
                    {columnsVisibility.Coating_CD && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Coating_CD
                      </th>
                    )}
                    {columnsVisibility.Item1 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Item1
                      </th>
                    )}
                    {columnsVisibility.Item2 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Item2
                      </th>
                    )}
                    {columnsVisibility.Item3 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Item3
                      </th>
                    )}
                    {columnsVisibility.Item4 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Item4
                      </th>
                    )}
                    {columnsVisibility.Price && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Price
                      </th>
                    )}
                    {columnsVisibility.Unit_Price && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Unit_Price
                      </th>
                    )}
                    {columnsVisibility.Pd_Received_Date && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Pd_Received_Date
                      </th>
                    )}
                    {columnsVisibility.Request_Delivery && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Request_Delivery
                      </th>
                    )}
                    {columnsVisibility.NAV_Delivery && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        NAV_Delivery
                      </th>
                    )}
                    {columnsVisibility.I_Completed_Date && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        I_Completed_Date
                      </th>
                    )}
                    {columnsVisibility.Pd_Calc_Date && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Pd_Calc_Date
                      </th>
                    )}
                    {columnsVisibility.Shipment_Date && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Shipment_Date
                      </th>
                    )}
                    {columnsVisibility.Specific && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Specific
                      </th>
                    )}
                    {columnsVisibility.Confirm_Delivery && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Confirm_Delivery
                      </th>
                    )}
                    {columnsVisibility.Delivery && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Delivery
                      </th>
                    )}
                    {columnsVisibility.Schedule && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Schedule
                      </th>
                    )}
                    {columnsVisibility.Od_Progress && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Od_Progress
                      </th>
                    )}
                    {columnsVisibility.Sl_Instructions && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Sl_Instructions
                      </th>
                    )}
                    {columnsVisibility.Pd_Instructions && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Pd_Instructions
                      </th>
                    )}
                    {columnsVisibility.Pd_Remark && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Pd_Remark
                      </th>
                    )}
                    {columnsVisibility.I_Remark && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        I_Remark
                      </th>
                    )}
                    {columnsVisibility.Pd_Complete_Date && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Pd_Complete_Date
                      </th>
                    )}
                    {columnsVisibility.Supple_Docu && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Supple_Docu
                      </th>
                    )}
                    {columnsVisibility.Process1 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process1
                      </th>
                    )}
                    {columnsVisibility.Process2 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process2
                      </th>
                    )}
                    {columnsVisibility.Process3 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process3
                      </th>
                    )}
                    {columnsVisibility.Process4 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process4
                      </th>
                    )}
                    {columnsVisibility.Process5 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process5
                      </th>
                    )}
                    {columnsVisibility.Process6 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process6
                      </th>
                    )}
                    {columnsVisibility.Process7 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process7
                      </th>
                    )}
                    {columnsVisibility.Process8 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process8
                      </th>
                    )}
                    {columnsVisibility.Process9 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process9
                      </th>
                    )}
                    {columnsVisibility.Process10 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process10
                      </th>
                    )}
                    {columnsVisibility.Process11 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process11
                      </th>
                    )}
                    {columnsVisibility.Process12 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process12
                      </th>
                    )}
                    {columnsVisibility.Process13 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process13
                      </th>
                    )}
                    {columnsVisibility.Process14 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process14
                      </th>
                    )}
                    {columnsVisibility.Process15 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process15
                      </th>
                    )}
                    {columnsVisibility.Process16 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process16
                      </th>
                    )}
                    {columnsVisibility.Process17 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process17
                      </th>
                    )}
                    {columnsVisibility.Process18 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process18
                      </th>
                    )}
                    {columnsVisibility.Process19 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process19
                      </th>
                    )}
                    {columnsVisibility.Process20 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process20
                      </th>
                    )}
                    {columnsVisibility.Process21 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process21
                      </th>
                    )}
                    {columnsVisibility.Process22 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process22
                      </th>
                    )}
                    {columnsVisibility.Process23 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process23
                      </th>
                    )}
                    {columnsVisibility.Process24 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process24
                      </th>
                    )}
                    {columnsVisibility.Process25 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process25
                      </th>
                    )}
                    {columnsVisibility.Process26 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process26
                      </th>
                    )}
                    {columnsVisibility.Process27 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process27
                      </th>
                    )}
                    {columnsVisibility.Process28 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process28
                      </th>
                    )}
                    {columnsVisibility.Process29 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process29
                      </th>
                    )}
                    {columnsVisibility.Process30 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process30
                      </th>
                    )}
                    {columnsVisibility.Process31 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process31
                      </th>
                    )}
                    {columnsVisibility.Process32 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process32
                      </th>
                    )}
                    {columnsVisibility.Process33 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process33
                      </th>
                    )}
                    {columnsVisibility.Process34 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process34
                      </th>
                    )}
                    {columnsVisibility.Process35 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process35
                      </th>
                    )}
                    {columnsVisibility.Process36 && (
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process36
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {filteredOrderData.length > 0 &&
                    filteredOrderData.map((order, index) => {
                      const customer = Array.isArray(CustomerData)
                        ? CustomerData.find(
                            (customer) =>
                              customer.Customer_CD === order.Customer_CD
                          )
                        : null;

                      const plan = Array.isArray(planData.data)
                        ? planData.data.find(
                            (plan) => plan.Order_No === order.Order_No
                          )
                        : null;

                      return (
                        <tr
                          key={index}
                          className="bg-white transition-colors duration-300"
                        >
                          {columnsVisibility.Product_Delivery && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Product_Delivery
                                ? new Date(
                                    order.Product_Delivery
                                  ).toLocaleDateString("en-GB")
                                : ""}
                            </td>
                          )}
                          {columnsVisibility.Order_No && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Order_No}
                            </td>
                          )}
                          {columnsVisibility.Parts_No && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {plan ? plan.Parts_No : ""}
                            </td>
                          )}
                          {columnsVisibility.Product_Grp && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Product_Grp_CD}
                            </td>
                          )}
                          {columnsVisibility.Customer_CD && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Customer_CD}
                            </td>
                          )}
                          {columnsVisibility.Customer_Abb && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {customer ? customer.Customer_Abb : ""}
                            </td>
                          )}
                          {columnsVisibility.Product_Name && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Product_Name}
                            </td>
                          )}
                          {columnsVisibility.Product_Size && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Product_Size}
                            </td>
                          )}
                          {columnsVisibility.Product_Draw && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Product_Draw}
                            </td>
                          )}
                          {columnsVisibility.Quantity && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Quantity}
                            </td>
                          )}
                          {columnsVisibility.Pd_Calc_Qty && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Pd_Calc_Qty}
                            </td>
                          )}
                          {columnsVisibility.Unit && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Unit_CD}
                            </td>
                          )}
                          {columnsVisibility.Target && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Target_CD}
                            </td>
                          )}
                          {columnsVisibility.Product_Docu && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Product_Docu}
                            </td>
                          )}
                          {columnsVisibility.Sales_Grp && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Sales_Grp_CD}
                            </td>
                          )}
                          {columnsVisibility.Sales_Person && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Sales_Person_CD}
                            </td>
                          )}
                          {columnsVisibility.Request1 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Request1_CD}
                            </td>
                          )}
                          {columnsVisibility.Request2 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Request2_CD}
                            </td>
                          )}
                          {columnsVisibility.Request3 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Request3_CD}
                            </td>
                          )}
                          {columnsVisibility.Material1 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Material1}
                            </td>
                          )}
                          {columnsVisibility.Material2 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Material2}
                            </td>
                          )}
                          {columnsVisibility.Coating_CD && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Coating_CD}
                            </td>
                          )}
                          {columnsVisibility.Item1 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Item1_CD}
                            </td>
                          )}
                          {columnsVisibility.Item2 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Item2_CD}
                            </td>
                          )}
                          {columnsVisibility.Item3 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Item3_CD}
                            </td>
                          )}
                          {columnsVisibility.Item4 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Item4_CD}
                            </td>
                          )}
                          {columnsVisibility.Price && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Price_CD}
                            </td>
                          )}
                          {columnsVisibility.Unit_Price && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Unit_Price}
                            </td>
                          )}
                          {columnsVisibility.Pd_Received_Date && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Pd_Received_Date
                                ? new Date(
                                    order.Pd_Received_Date
                                  ).toLocaleDateString("en-GB")
                                : ""}
                            </td>
                          )}
                          {columnsVisibility.Request_Delivery && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Request_Delivery
                                ? new Date(
                                    order.Request_Delivery
                                  ).toLocaleDateString("en-GB")
                                : ""}
                            </td>
                          )}
                          {columnsVisibility.NAV_Delivery && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.NAV_Delivery
                                ? new Date(
                                    order.NAV_Delivery
                                  ).toLocaleDateString("en-GB")
                                : ""}
                            </td>
                          )}
                          {columnsVisibility.I_Completed_Date && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.I_Completed_Date
                                ? new Date(
                                    order.I_Completed_Date
                                  ).toLocaleDateString("en-GB")
                                : ""}
                            </td>
                          )}
                          {columnsVisibility.Pd_Calc_Date && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Pd_Calc_Date
                                ? new Date(
                                    order.Pd_Calc_Date
                                  ).toLocaleDateString("en-GB")
                                : ""}
                            </td>
                          )}
                          {columnsVisibility.Shipment_Date && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Shipment_Date
                                ? new Date(
                                    order.Shipment_Date
                                  ).toLocaleDateString("en-GB")
                                : ""}
                            </td>
                          )}
                          {columnsVisibility.Specific && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Specific_CD}
                            </td>
                          )}
                          {columnsVisibility.Confirm_Delivery && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Confirm_Delivery
                                ? new Date(
                                    order.Confirm_Delivery
                                  ).toLocaleDateString("en-GB")
                                : ""}
                            </td>
                          )}
                          {columnsVisibility.Delivery && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Delivery_CD}
                            </td>
                          )}
                          {columnsVisibility.Schedule && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Schedule_CD}
                            </td>
                          )}
                          {columnsVisibility.Od_Progress && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Od_Progress_CD}
                            </td>
                          )}
                          {columnsVisibility.Sl_Instructions && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Sl_Instructions}
                            </td>
                          )}
                          {columnsVisibility.Pd_Instructions && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Pd_Instructions}
                            </td>
                          )}
                          {columnsVisibility.Pd_Remark && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Pd_Remark}
                            </td>
                          )}
                          {columnsVisibility.I_Remark && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.I_Remark}
                            </td>
                          )}
                          {columnsVisibility.Pd_Complete_Date && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Pd_Complete_Date
                                ? new Date(
                                    order.Pd_Complete_Date
                                  ).toLocaleDateString("en-GB")
                                : ""}
                            </td>
                          )}
                          {columnsVisibility.Supple_Docu && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {order.Supple_Docu}
                            </td>
                          )}
                          {columnsVisibility.Process1 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process1 */}
                            </td>
                          )}
                          {columnsVisibility.Process2 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process2 */}
                            </td>
                          )}
                          {columnsVisibility.Process3 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process3 */}
                            </td>
                          )}
                          {columnsVisibility.Process4 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process4 */}
                            </td>
                          )}
                          {columnsVisibility.Process5 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process5 */}
                            </td>
                          )}
                          {columnsVisibility.Process6 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process6 */}
                            </td>
                          )}
                          {columnsVisibility.Process7 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process7 */}
                            </td>
                          )}
                          {columnsVisibility.Process8 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process8 */}
                            </td>
                          )}
                          {columnsVisibility.Process9 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process9 */}
                            </td>
                          )}
                          {columnsVisibility.Process10 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process10 */}
                            </td>
                          )}
                          {columnsVisibility.Process11 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process11 */}
                            </td>
                          )}
                          {columnsVisibility.Process12 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process12 */}
                            </td>
                          )}
                          {columnsVisibility.Process13 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process13 */}
                            </td>
                          )}
                          {columnsVisibility.Process14 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process14 */}
                            </td>
                          )}
                          {columnsVisibility.Process15 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process15 */}
                            </td>
                          )}
                          {columnsVisibility.Process16 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process16 */}
                            </td>
                          )}
                          {columnsVisibility.Process17 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process17 */}
                            </td>
                          )}
                          {columnsVisibility.Process18 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process18 */}
                            </td>
                          )}
                          {columnsVisibility.Process19 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process19 */}
                            </td>
                          )}
                          {columnsVisibility.Process20 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process20 */}
                            </td>
                          )}
                          {columnsVisibility.Process21 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process21 */}
                            </td>
                          )}
                          {columnsVisibility.Process22 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process22 */}
                            </td>
                          )}
                          {columnsVisibility.Process23 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process23 */}
                            </td>
                          )}
                          {columnsVisibility.Process24 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process24 */}
                            </td>
                          )}
                          {columnsVisibility.Process25 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process25 */}
                            </td>
                          )}
                          {columnsVisibility.Process26 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process26 */}
                            </td>
                          )}
                          {columnsVisibility.Process27 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process27 */}
                            </td>
                          )}
                          {columnsVisibility.Process28 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process28 */}
                            </td>
                          )}
                          {columnsVisibility.Process29 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process29 */}
                            </td>
                          )}
                          {columnsVisibility.Process30 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process30 */}
                            </td>
                          )}
                          {columnsVisibility.Process31 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process31 */}
                            </td>
                          )}
                          {columnsVisibility.Process32 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process32 */}
                            </td>
                          )}
                          {columnsVisibility.Process33 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process33 */}
                            </td>
                          )}
                          {columnsVisibility.Process34 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process34 */}
                            </td>
                          )}
                          {columnsVisibility.Process35 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process35 */}
                            </td>
                          )}
                          {columnsVisibility.Process36 && (
                            <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                              {/* Process36 */}
                            </td>
                          )}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-white p-3 mt-5">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="grid grid-cols-4 gap-2">
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                Search <br />
                検索 (F1)
              </button>
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
                onClick={handleF2Click}
              >
                Setting <br />
                設定 (F2)
              </button>

              {showDialog && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
                    <h3 className="text-lg font-bold mb-4">Column Settings</h3>
                    <form className="max-h-[200px] overflow-y-auto">
                      {/* Check All button */}
                      <div className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id="checkAll"
                          onChange={handleCheckAll}
                          checked={Object.values(columnsVisibility).every(
                            (value) => value
                          )}
                          className="mr-2"
                        />
                        <label htmlFor="checkAll" className="text-sm">
                          Select All
                        </label>
                      </div>

                      <hr className="mb-2" />

                      {Object.keys(columnsVisibility).map((column) => (
                        <div key={column} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            id={column}
                            name={column}
                            checked={columnsVisibility[column]}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                          />
                          <label htmlFor={column} className="text-sm">
                            {column}
                          </label>
                        </div>
                      ))}
                    </form>
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={handleCloseDialog}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <button
                id="handleF3Click"
                onClick={handleF3Click}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
              >
                Show <br />
                照会 (F3)
              </button>
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
                disabled
              >
                (F4)
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
                disabled
              >
                (F5)
              </button>
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                Target <br />
                目標(F6)
              </button>
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                List <br />一 覽 (F7)
              </button>
              <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white">
                Data <br />
                データ(F8)
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
              <button
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
                disabled
              >
                (F10)
              </button>
              <button
                onClick={handleF11Click}
                className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white"
              >
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
  );
}
