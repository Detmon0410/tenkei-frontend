import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useCostList } from "../hooks/use-costlist";
import { useCost } from "../hooks/use-cost";
import { useOrder } from "../hooks/use-order";
import Swal from "sweetalert2";
//import Select from 'react-select';

export default function CostList() {
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonState, setButtonState] = useState({
      F1: false,
      F2: false,
      F3: true,
      F4: false,
      F5: false,
      F6: true,
      F7: true,
      F8: true,
      F9: true,
      F10: false,
      F11: true,
      F12: true,
    });
  const { initialFormState, 
          WorkerData, 
          setWorkerData,
          costListData,
          setCostListData,
          scheduleData,
          plprogressData,
          fetchCostList,
        } = useCostList();

    const {
      OdProgressData,
      setWorkgData,
      WorkgData,
      CustomerData,
      setCustomerData,
      SpecificData,
      setSpecificData,
      PriceData,
      setPriceData,
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
      DeliveryData,
      TargetData,
    } = useOrder();
  // const [costListData, setCostListData] = useCostList();
  const { searchOrderNo: initialSearchOrderNo = "" } = location.state || {};
  const [formState, setFormState] = useState(initialFormState);
  const [selectedSalesGrpAbb, setSelectedSalesGrpAbb] = useState("");
  const [selectedSalesGrpAbb2, setSelectedSalesGrpAbb2] = useState("");
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
  const [coatingName, setCoatingName] = useState("");
  const [coatingName2, setCoatingName2] = useState("");
  const [coatingName3, setCoatingName3] = useState("");
  const [coatingName4, setCoatingName4] = useState("");
  const [selectedWorker, setSelectedWorker] = useState("");
  const [selectedWorkerDisplay, setSelectedWorkerDisplay] = useState("");
  const [isTableVisible, setIsTableVisible] = useState(false);

  useEffect(() => {
      if (costListData?.S_Od_Ctl_Person_CD && WorkerData.length > 0) {
        const selectedGroup = WorkerData.find(
          (item) => item.Worker_CD === costListData?.S_Od_Ctl_Person_CD
        );
  
        setSelectedSalesGrpAbb(selectedGroup ? selectedGroup.Worker_Abb : "");
      }
  
      if (costListData?.S_Sl_Person_CD && WorkerData.length > 0) {
        const selectedGroup = WorkerData.find(
          (item) => item.Worker_CD === costListData?.S_Sl_Person_CD
        );
  
        setSelectedSalesGrpAbb2(selectedGroup ? selectedGroup.Worker_Abb : "");
      }
      if (costListData?.S_Pl_Reg_Person_CD && WorkerData.length > 0) {
        const selectedGroup = WorkerData.find(
          (item) => item.Worker_CD === costListData?.S_Pl_Reg_Person_CD
        );
  
        setSelectedWorker(selectedGroup ? selectedGroup.Worker_Abb : "");
      }
    }, [
      costListData?.S_Od_Ctl_Person_CD,
      costListData?.S_Sl_Person_CD,
      costListData?.S_Pl_Reg_Person_CD,
      WorkerData,
    ]);
  useEffect(() => {
    
    if (costListData?.S_St_Pd_Grp_CD && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === costListData?.S_St_Pd_Grp_CD
      );
      setDestinationName(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }
    if (costListData?.S_Ed_Pd_Grp_CD && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === costListData?.S_Ed_Pd_Grp_CD
      );
      setDestinationName2(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }
    if (costListData?.S_No_Pd_Grp_CD1 && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === costListData?.S_No_Pd_Grp_CD1
      );
      setDestinationName3(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }
    if (costListData?.S_No_Pd_Grp_CD2 && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === costListData?.S_No_Pd_Grp_CD2
      );
      setDestinationName4(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }

    if (costListData?.S_Sl_Grp_CD && WorkgData.length > 0) {
      const selectedGroup = WorkgData.find(
        (item) => item.WorkG_CD === costListData?.S_Sl_Grp_CD
      );
      setDestinationName5(selectedGroup ? selectedGroup.WorkG_Abb : "");
    }
  }, [
    costListData?.S_St_Pd_Grp_CD,
    costListData?.S_Ed_Pd_Grp_CD,
    costListData?.S_No_Pd_Grp_CD1,
    costListData?.S_No_Pd_Grp_CD2,
    costListData?.S_Sl_Grp_CD,
    WorkgData,
  ]);
  useEffect(() => {
    if (costListData?.S_Customer_CD1 && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === costListData?.S_Customer_CD1
      );
      setSelectedCustomerAbb(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
    if (costListData?.S_Customer_CD2 && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === costListData?.S_Customer_CD2
      );
      setSelectedCustomerAbb2(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
    if (costListData?.S_Customer_CD3 && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === costListData?.S_Customer_CD3
      );
      setSelectedCustomerAbb3(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
    if (costListData?.S_No_Customer_CD && CustomerData.length > 0) {
      const selectedGroup = CustomerData.find(
        (item) => item.Customer_CD === costListData?.S_No_Customer_CD
      );
      setSelectedCustomerAbb4(selectedGroup ? selectedGroup.Customer_Abb : "");
    }
  }, [
    costListData?.S_Customer_CD1,
    costListData?.S_Customer_CD2,
    costListData?.S_Customer_CD3,
    costListData?.S_No_Customer_CD,
    CustomerData,
  ]);

  useEffect(() => {
      if (costListData?.S_Specific_CD1 && SpecificData.length > 0) {
        const selectedGroup = SpecificData.find(
          (item) => item.Specific_CD === costListData?.S_Specific_CD1
        );
        setSpecificName(selectedGroup ? selectedGroup.Specific_Abb : "");
      }
  
      if (costListData?.S_Specific_CD2 && SpecificData.length > 0) {
        const selectedGroup = SpecificData.find(
          (item) => item.Specific_CD === costListData?.S_Specific_CD2
        );
        setSpecificName2(selectedGroup ? selectedGroup.Specific_Abb : "");
      }
  
      if (costListData?.S_No_Specific_CD1 && SpecificData.length > 0) {
        const selectedGroup = SpecificData.find(
          (item) => item.Specific_CD === costListData?.S_No_Specific_CD1
        );
        setSpecificName3(selectedGroup ? selectedGroup.Specific_Abb : "");
      }
  
      if (costListData?.S_No_Specific_CD2 && SpecificData.length > 0) {
        const selectedGroup = SpecificData.find(
          (item) => item.Specific_CD === costListData?.S_No_Specific_CD2
        );
        setSpecificName4(selectedGroup ? selectedGroup.Specific_Abb : "");
      }
    }, [
      costListData?.S_Specific_CD1,
      costListData?.S_Specific_CD2,
      costListData?.S_No_Specific_CD1,
      costListData?.S_No_Specific_CD2,
      SpecificData,
    ]);
  
    useEffect(() => {
      if (costListData?.S_Price_CD && PriceData.length > 0) {
        const selectedGroup = PriceData.find(
          (item) => item.Price_CD === costListData?.S_Price_CD
          
        );  
        setPriceName(selectedGroup ? selectedGroup.Price_Symbol : "");
      }
    }, [costListData?.S_Price_CD, PriceData]);
  
    useEffect(() => {
      if (costListData?.S_Request1_CD && Request1Data.length > 0) {
        const selectedGroup = Request1Data.find(
          (item) => item.Request1_CD === costListData?.S_Request1_CD
        );
  
        setRequest1Name(selectedGroup ? selectedGroup.Request1_Abb : "");
      }
      if (costListData?.S_Request2_CD && Request2Data.length > 0) {
        const selectedGroup = Request2Data.find(
          (item) => item.Request2_CD === costListData?.S_Request2_CD
        );
  
        setRequest2Name(selectedGroup ? selectedGroup.Request2_Abb : "");
      }
      if (costListData?.S_Request3_CD && Request3Data.length > 0) {
        const selectedGroup = Request3Data.find(
          (item) => item.Request3_CD === costListData?.S_Request3_CD
        );
  
        setRequest3Name(selectedGroup ? selectedGroup.Request3_Abb : "");
      }
    }, [
      costListData?.S_Request1_CD,
      costListData?.S_Request2_CD,
      costListData?.S_Request3_CD,
      Request1Data,
      Request2Data,
      Request3Data,
    ]);
    useEffect(() => {
      if (costListData?.S_Item1_CD && Item1Data.length > 0) {
        const selectedGroup = Item1Data.find(
          (item) => item.Item1_CD === costListData?.S_Item1_CD
        );
  
        setItemName(selectedGroup ? selectedGroup.Item1_Abb : "");
      }
    }, [costListData?.S_Item1_CD, Item1Data]);
  
  
    useEffect(() => {
      if (costListData?.S_Coating_CD1 && CoatingData.length > 0) {
        const selectedGroup = CoatingData.find(
          (item) => item.Coating_CD === costListData?.S_Coating_CD1
        );
  
        setCoatingName(selectedGroup ? selectedGroup.Coating_Symbol : "");
      }
      if (costListData?.S_Coating_CD2 && CoatingData.length > 0) {
        const selectedGroup = CoatingData.find(
          (item) => item.Coating_CD === costListData?.S_Coating_CD2
        );
  
        setCoatingName2(selectedGroup ? selectedGroup.Coating_Symbol : "");
      }
      if (costListData?.S_Coating_CD3 && CoatingData.length > 0) {
        const selectedGroup = CoatingData.find(
          (item) => item.Coating_CD === costListData?.S_Coating_CD3
        );
  
        setCoatingName3(selectedGroup ? selectedGroup.Coating_Symbol : "");
      }
      if (costListData?.S_No_Coating_CD && CoatingData.length > 0) {
        const selectedGroup = CoatingData.find(
          (item) => item.Coating_CD === costListData?.S_No_Coating_CD
        );
  
        setCoatingName4(selectedGroup ? selectedGroup.Coating_Symbol : "");
      }
    }, [
      costListData?.S_Coating_CD1,
      costListData?.S_Coating_CD2,
      costListData?.S_Coating_CD3,
      costListData?.S_No_Coating_CD,
      CoatingData,
    ]);

  // useEffect(() => {
  //   if (costListData) {
  //      // ใช้ข้อมูลจาก API ที่ได้รับconsole.log("ข้อมูล Cost List:", costListData);
  //   }
  // }, [costListData]);
  
  const Initial_Item = (flag) => {
    if (flag) {
      setFormState(initialFormState);
    }
  };

  const [filteredCostListData, setFilteredCostListData] = useState([]);

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

  const handleSearchTypeChange = (event) => {
    const selectedType = event.target.value;
    Search_Type_AfterUpdate(selectedType);
  };

  const handleCostListInputChange = async (event) => {
    const { id, value, type, checked } = event.target;

    setCostListData((prevCostListData) => {
      let updatedData = {
        ...prevCostListData,
        [id]: type === "checkbox" ? checked : value === "" ? null : value,
        [id]: value === "" ? null : value,
      };
  
      // ถ้าเลือก S_St_Pd_Grp_CD ให้ตั้ง S_Ed_Pd_Grp_CD เท่ากับค่าเดียวกัน
      if (id === "S_St_Pd_Grp_CD") {
        updatedData.S_Ed_Pd_Grp_CD = value;
  
        // ถ้าค่า S_St_Pd_Grp_CD เป็น null ให้ตั้ง S_No_Pd_Grp_Abb เป็น null
        if (value === "" || value === null) {
          setDestinationName(null);
        }
      }
  
      // ถ้าเลือก S_Ed_Pd_Grp_CD เป็น null ให้ตั้ง S_Ed_Pd_Grp_Abb เป็น null
        if (id === "S_Ed_Pd_Grp_CD" && (value === "" || value === null)) {
          setDestinationName(null);
        }
  
      // ถ้าเลือก S_Od_Ctl_Person_CD ให้ตั้งค่า selectedSalesGrpAbb
      if (id === "S_Pl_Reg_Person_CD") {
        const selectedWorker = WorkerData.find((item) => item.Worker_CD === value);
  
        // กำหนดข้อความที่จะแสดงใน select (แค่ Worker_CD ที่เลือก)
        setSelectedWorkerDisplay(selectedWorker ? selectedWorker.Worker_CD : "");
  
        // อัปเดต Worker_Remark ใน costListData
        updatedData.Worker_Remark = selectedWorker ? selectedWorker.Worker_Remark : null;
      }
      
      return updatedData;
    });
  };
  
  const handleF3Click = async () => {
    setIsTableVisible((prevIsTableVisible) => {
      // Toggle การแสดงตาราง
      const newTableVisibility = !prevIsTableVisible;
  
      // Toggle ปุ่ม F2
      setButtonState((prevState) => ({
        ...prevState,
        F2: newTableVisibility, // เปิด/ปิด F2 ตามสถานะของตาราง
      }));
  
      return newTableVisibility;
    });
  
    // ดึงข้อมูลจาก API
    const costListData = { Order_No :"id",Customer_CD : 'value'}; // ถ้าคุณมีข้อมูลที่ต้องการส่งไปใน API ให้ระบุที่นี่
    await fetchCostList(costListData);  // เรียกฟังก์ชัน fetchCostList
  
    // console.log("F3 clicked, data fetched",costListData);
  };
  
  const handleF11Click = () => {
    window.location.reload();
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

        <div className="flex-1 flex-col overflow-x-auto flex-grow p-2">
          <div className="bg-stone-300 grid grid-cols-1">
          {isTableVisible && costListData.length > 0 && (
            <table className="border-collapse border border-gray-400 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">Order No</th>
                  <th className="border border-gray-400 px-4 py-2">Product Name</th>
                  <th className="border border-gray-400 px-4 py-2">Quantity</th>
                  <th className="border border-gray-400 px-4 py-2">Customer</th>
                </tr>
              </thead>
              <tbody>
                {costListData.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-4 py-2">{item.Order_No}</td>
                    <td className="border border-gray-400 px-4 py-2">{item.Product_Name}</td>
                    <td className="border border-gray-400 px-4 py-2">{item.Quantity}</td>
                    <td className="border border-gray-400 px-4 py-2">{item.TM_Customer.Customer_Name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

            <div className="bg-white w-11/12 mt-5 rounded-2xl mx-auto shadow-xl">
              <div className="flex justify-center py-4">
                <h1 className="text-xl font-bold">Cost List</h1>
              </div>
              <hr />
              <div className="container mx-auto px-4 overflow-x-auto ">
                <div className="flex flex-nowrap justify-between items-center gap-2 py-3">
                  <div className="flex flex-col space-y-1 relative">
                    <label className="w-[100px] text-sm font-bold">
                      Search_Type
                    </label>
                    <div className="relative w-full lg:w-60 xl:w-44">
                      <select
                        onChange={handleSearchTypeChange}
                        className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full"
                      >
                        <option value="Simple">Simple</option>
                        <option value="Normal">Normal</option>
                        <option value="Detail">Detail</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1 relative">
                    <label className="w-[70px] text-sm font-bold">
                      Delivery1
                    </label>
                    <div className="relative w-full lg:w-60 xl:w-44">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8 ps-2.5 text-md">
                        <option value="Request">Request</option>
                        <option value="NAV">NAV</option>
                        <option value="Confirm">Confirm</option>
                        <option value="Product">Product</option>
                        <option value="Parts">Parts</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 relative">
                    <label className="w-[80px] text-sm font-bold">
                      Delivery2
                    </label>
                    <div className="relative w-full lg:w-60 xl:w-44">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8 ps-2.5 text-md">
                        <option value="Request">Request</option>
                        <option value="NAV">NAV</option>
                        <option value="Confirm">Confirm</option>
                        <option value="Product">Product</option>
                        <option value="Parts">Parts</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 relative">
                    <label className="w-[80px] text-sm font-bold">
                      Delivery3
                    </label>
                    <div className="relative w-full lg:w-60 xl:w-44">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8 ps-2.5 text-md">
                        <option value="Request">Request</option>
                        <option value="NAV">NAV</option>
                        <option value="Confirm">Confirm</option>
                        <option value="Product">Product</option>
                        <option value="Parts">Parts</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 relative">
                    <label className="w-[120px] text-sm font-bold">
                      View_Schedule
                    </label>
                    <div className="relative w-full lg:w-60 xl:w-44">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8 ps-2.5 text-md">
                        <option value="Manual">Manual</option>
                        <option value="ASP">ASP</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1 relative">
                    <label className="w-[100px] text-sm font-bold">
                      Plan_Target
                    </label>
                    <div className="relative w-full lg:w-60 xl:w-44">
                      <select className="border-gray-500 border-solid border-2 rounded-md bg-[#ffff99] w-full h-8 ps-2.5 text-md">
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
                <div className="">
                  <div className="w-full content-start ms-5 mt-4">
                    <label className="font-bold text-md">
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
                          <label className="w-20 font-medium text-sm">
                            Ctl_Person
                          </label>
                          <div className="w-24">
                            <select
                              disabled={!formState?.S_Od_Ctl_Person_CD}
                              id="S_Od_Ctl_Person_CD"
                              value={costListData?.S_Od_Ctl_Person_CD || ""}
                              onChange={handleCostListInputChange}
                              className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                            >
                              <option value=""></option>
                              {Array.isArray(WorkerData) && 
                              WorkerData.length > 0 ? (
                                WorkerData.map((item, index) => (
                                  <option
                                   key={index} 
                                   value={item.Worker_CD}
                                   >
                                    {item.Worker_CD}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                            </select>
                          </div>

                          <div className="w-24">
                            <input
                              disabled={!formState?.S_Od_Ctl_Person_Name}
                              type="text"
                              id="S_Od_Ctl_Person_Name"
                              value={selectedSalesGrpAbb || ""}  // ใช้ || "" เพื่อให้เป็นช่องว่างหากเป็น null
                              onChange={handleCostListInputChange}
                              className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                            />
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
                                disabled={!formState.S_St_Pd_Grp_CD}
                                id="S_St_Pd_Grp_CD"
                                value={costListData?.S_St_Pd_Grp_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                {Array.isArray(WorkgData) &&
                                      WorkgData.length > 0 ? (
                                        WorkgData.map((item, index) => (
                                          <option
                                            key={index}
                                            value={item.WorkG_CD}
                                          >
                                            {item.WorkG_CD}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">ไม่มีข้อมูล</option>
                                      )}
                              </select>
                            </div>
                            <div className="w-24 ">
                              <input
                                disabled={!formState.S_No_Pd_Grp_Abb1}
                                id="S_No_Pd_Grp_Abb"
                                value={destinationName|| ""}
                                onChange={(event) => setWorkgData(event)}
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>

                            <label className="w-auto font-medium text-sm">
                              ~
                            </label>

                            <div className="w-24 ">
                              <select
                                disabled={!formState.S_Ed_Pd_Grp_CD}
                                id="S_Ed_Pd_Grp_CD"
                                value={costListData?.S_Ed_Pd_Grp_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                {Array.isArray(WorkgData) &&
                                      WorkgData.length > 0 ? (
                                        WorkgData.map((item, index) => (
                                          <option
                                            key={index}
                                            value={item.WorkG_CD}
                                          >
                                            {item.WorkG_CD}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">ไม่มีข้อมูล</option>
                                      )}
                              </select>
                            </div>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_Ed_Pd_Grp_Abb}
                                id="S_Ed_Pd_Grp_Abb"
                                value={destinationName|| ""}
                                onChange={(event) => setWorkgData(event)}
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
                                {Array.isArray(WorkgData) &&
                                      WorkgData.length > 0 ? (
                                        WorkgData.map((item, index) => (
                                          <option
                                            key={index}
                                            value={item.WorkG_CD}
                                          >
                                            {item.WorkG_CD}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">ไม่มีข้อมูล</option>
                                      )}
                              </select>
                            </div>
                            <div className="w-24">
                              <input
                                disabled={!formState.S_Sl_Grp_Name}
                                id="S_Sl_Grp_Name"
                                value={destinationName5|| ""}
                                onChange={(event) => setWorkgData(event)}
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
                                {Array.isArray(WorkgData) &&
                                    WorkgData.length > 0 ? (
                                      WorkgData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.WorkG_CD}
                                        >
                                          {item.WorkG_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                              </select>
                            </div>
                            <div className="w-20">
                              <input
                                disabled={!formState.noPdGrpAbb1}
                                id="S_No_Pd_Grp_Abb1"
                                value={destinationName3}
                                onChange={(event) => setWorkgData(event)}
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
                            </div>
                            <div className="w-16 ">
                              <input
                                disabled={!formState.S_Price_Name.enabled}
                                id="S_Price_Name"
                                    value={PriceName || ""}
                                    onChange={(event) => setPriceData(event)}
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
                                {Array.isArray(WorkerData) &&
                                    WorkerData.length > 0 ? (
                                      WorkerData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Worker_CD}
                                        >
                                          {item.Worker_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                              </select>
                            </div>
                            <div className="w-24">
                              <input
                                disabled={!formState.slPersonName}
                                id="S_Sl_Person_Name"
                                value={selectedSalesGrpAbb2 || ""}
                                onChange={(event) => setWorkerData(event)}
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
                                {Array.isArray(WorkgData) &&
                                    WorkgData.length > 0 ? (
                                      WorkgData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.WorkG_CD}
                                        >
                                          {item.WorkG_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                              </select>
                            </div>
                            <div className="w-20">
                              <input
                                disabled={!formState.S_No_Pd_Grp_Abb2}
                                id="S_No_Pd_Grp_Abb2"
                                value={destinationName4}
                                onChange={(event) => setWorkgData(event)}
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
                            </div>
                            <div className="w-16">
                              <input
                                disabled={!formState.request1Name}
                                id="S_Request1_Name"
                                value={request1Name}
                                onChange={(event) => setRequest1Data(event)}
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
                            </div>
                            <div className="w-16">
                              <input
                                disabled={!formState.S_Request2_Name}
                                id="S_Request2_Name"
                                value={request2Name}
                                onChange={(event) => setRequest2Data(event)}
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
                            </div>
                            <div className="w-16">
                              <input
                                disabled={!formState.S_Request3_Name}
                                id="S_Request3_Name"
                                value={request3Name}
                                onChange={(event) => setRequest3Data(event)}
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
                                    {Array.isArray(CustomerData) &&
                                    CustomerData.length > 0 ? (
                                      CustomerData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Customer_CD}
                                        >
                                          {item.Customer_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                                  </select>
                                </div>
                                <div className="w-28">
                                  <input
                                    disabled={!formState.S_Customer_Abb1}
                                    id="S_Customer_Abb1"
                                    value={selectedCustomerAbb || ""}
                                    onChange={(event) => setCustomerData(event)}
                                    type="text"
                                    className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                                  />
                                </div>
                              </div>
                            </div>

                        <div className="flex justify-between gap-2 ">
                          <div className="flex gap-2 w-full ml-4">
                            <label className="w-24 font-bold text-xs">
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
                            <label className="ml-4 w-24 font-bold text-xs">
                              Mate1
                            </label>
                            <div className="w-auto ml-5">
                              <input
                                disabled={!formState.S_Material1.enabled}
                                id="S_Material1"
                                value={costListData?.S_Material1 || ""}
                                onChange={handleCostListInputChange}
                                type="text"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_Material1.enabled
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
                                disabled={!formState.S_Customer_CD2}
                                id="S_Customer_CD2"
                                value={costListData?.S_Customer_CD2 || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                {Array.isArray(CustomerData) &&
                                    CustomerData.length > 0 ? (
                                      CustomerData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Customer_CD}
                                        >
                                          {item.Customer_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                disabled={!formState.S_Customer_Abb2}
                                id="S_Customer_Abb2"
                                value={selectedCustomerAbb2 || ""}
                                onChange={(event) => setCustomerData(event)}
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
                                disabled={!formState.S_Item1_CD}
                                id="S_Item1_CD"
                                value={costListData?.S_Item1_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                {Array.isArray(Item1Data) &&
                                      Item1Data.length > 0 ? (
                                        Item1Data.map((item, index) => (
                                          <option
                                            key={index}
                                            value={item.Item1_CD}
                                          >
                                            {item.Item1_CD}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">ไม่มีข้อมูล</option>
                                      )}
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                disabled={!formState.S_Item1_Name}
                                id="S_Item1_Name"
                                value={itemName || ""}
                                onChange={(event) => setItem1Data(event)}
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
                                {Array.isArray(CustomerData) &&
                                    CustomerData.length > 0 ? (
                                      CustomerData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Customer_CD}
                                        >
                                          {item.Customer_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                disabled={!formState.customerAbb3}
                                id="S_Customer_Abb3"
                                value={selectedCustomerAbb3 || ""}
                                onChange={(event) => setCustomerData(event)}
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
                                <option value="2">none</option>
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
                                {Array.isArray(CustomerData) &&
                                    CustomerData.length > 0 ? (
                                      CustomerData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Customer_CD}
                                        >
                                          {item.Customer_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                disabled={!formState.noCustomerAbb}
                                id="S_No_Customer_Abb"
                                value={selectedCustomerAbb4 || ""}
                                onChange={(event) => setCustomerData(event)}
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
                                {Array.isArray(SpecificData) &&
                                    SpecificData.length > 0 ? (
                                      SpecificData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Specific_CD}
                                        >
                                          {item.Specific_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                disabled={!formState.specificName1}
                                id="S_Specific_Name1"
                                value={SpecificName || ""}
                                onChange={(event) => setSpecificData(event)}
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
                                {Array.isArray(CoatingData) &&
                                    CoatingData.length > 0 ? (
                                      CoatingData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Coating_CD}
                                        >
                                          {item.Coating_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                disabled={!formState.coatingName1}
                                id="S_Coating_Name1"
                                value={coatingName || ""}
                                onChange={(event) => setCoatingData(event)}
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
                                {Array.isArray(SpecificData) &&
                                    SpecificData.length > 0 ? (
                                      SpecificData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Specific_CD}
                                        >
                                          {item.Specific_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                disabled={!formState.specificName2}
                                id="S_Specific_Name2"
                                value={SpecificName2 || ""}
                                onChange={(event) => setSpecificData(event)}
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
                                {Array.isArray(CoatingData) &&
                                      CoatingData.length > 0 ? (
                                        CoatingData.map((item, index) => (
                                          <option
                                            key={index}
                                            value={item.Coating_CD}
                                          >
                                            {item.Coating_CD}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">ไม่มีข้อมูล</option>
                                      )}
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                 disabled={!formState.coatingName2}
                                 id="S_Coating_Name1"
                                 value={coatingName2 || ""}
                                 onChange={(event) =>
                                   setCoatingData(event)
                                 }
                                type="text"
                                className="h-6 bg-white border-solid border-2 border-gray-500 rounded-md px-1 w-full"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 w-40">
                            <label className="w-auto font-medium text-sm">
                              Od_Pend
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
                                <option value="true">Yes</option>
                                <option value="false">No</option>
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
                                <option value="true">Yes</option>
                                <option value="false">No</option>
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
                                {Array.isArray(SpecificData) &&
                                    SpecificData.length > 0 ? (
                                      SpecificData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Specific_CD}
                                        >
                                          {item.Specific_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                disabled={!formState.noSpecificName1}
                                id="S_No_Specific_Name1"
                                value={SpecificName3 || ""}
                                onChange={(event) => setSpecificData(event)}
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
                                {Array.isArray(CoatingData) &&
                                      CoatingData.length > 0 ? (
                                        CoatingData.map((item, index) => (
                                          <option
                                            key={index}
                                            value={item.Coating_CD}
                                          >
                                            {item.Coating_CD}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">ไม่มีข้อมูล</option>
                                      )}
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                disabled={!formState.coatingName3}
                                id="S_Coating_Name3"
                                value={coatingName3 || ""}
                                onChange={(event) =>
                                  setCoatingData(event)
                                }
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
                                <option value="true">Yes</option>
                                <option value="false">No</option>
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
                                <option value="true">Yes</option>
                                <option value="false">No</option>
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
                              Not_Specific2
                            </label>
                            <div className="w-28">
                              <select
                                id="S_No_Specific_CD2"
                                value={costListData?.S_No_Specific_CD2 || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ff99cc] w-full"
                              >
                                <option value=""></option>
                                {Array.isArray(SpecificData) &&
                                    SpecificData.length > 0 ? (
                                      SpecificData.map((item, index) => (
                                        <option
                                          key={index}
                                          value={item.Specific_CD}
                                        >
                                          {item.Specific_CD}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">ไม่มีข้อมูล</option>
                                    )}
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                disabled={!formState.noSpecificName2}
                                id="S_No_Specific_Name2"
                                value={SpecificName4 || ""}
                                onChange={(event) => setSpecificData(event)}
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
                                {Array.isArray(CoatingData) &&
                                      CoatingData.length > 0 ? (
                                        CoatingData.map((item, index) => (
                                          <option
                                            key={index}
                                            value={item.Coating_CD}
                                          >
                                            {item.Coating_CD}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="">ไม่มีข้อมูล</option>
                                      )}
                              </select>
                            </div>
                            <div className="w-28">
                              <input
                                disabled={!formState.noCoatingName}
                                id="S_No_Coating_Name"
                                value={coatingName4 || ""}
                                onChange={(event) =>
                                  setCoatingData(event)
                                }
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
                                <option value="true">Yes</option>
                                <option value="false">No</option>
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
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3">
                        {/* Group 1 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-bold text-xs">
                              Order_Progress
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <select
                                id="S_St_Od_Progress_CD"
                                value={costListData?.S_St_Od_Progress_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                {Array.isArray(OdProgressData) &&
                                  OdProgressData.length > 0 ? (
                                    OdProgressData.map((item, index) => (
                                      <option
                                        key={index}
                                        value={item.Od_Progress_CD}
                                      >
                                        {item.Od_Progress_Symbol}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">ไม่มีข้อมูล</option>
                                  )}
                              </select>
                            </div>
                            <label className="w-auto font-bold text-xs">
                              ~
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <select
                                id="S_Ed_Od_Progress_CD"
                                value={costListData?.S_Ed_Od_Progress_CD || ""}
                                onChange={handleCostListInputChange}
                                className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-full"
                              >
                                <option value=""></option>
                                {Array.isArray(OdProgressData) &&
                                  OdProgressData.length > 0 ? (
                                    OdProgressData.map((item, index) => (
                                      <option
                                        key={index}
                                        value={item.Od_Progress_CD}
                                      >
                                        {item.Od_Progress_Symbol}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">ไม่มีข้อมูล</option>
                                  )}
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* Group 2 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-bold text-xs">
                              Delivery_CAT
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <select
                                disabled={!formState.S_St_Delivery_CD.enabled}
                                id="S_St_Delivery_CD"
                                value={costListData?.S_St_Delivery_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${formState.S_St_Delivery_CD.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
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
                            <label className="w-auto font-bold text-xs">
                              ~
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <select
                                disabled={!formState.S_Ed_Delivery_CD.enabled}
                                id="S_Ed_Delivery_CD"
                                value={costListData?.S_Ed_Delivery_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${formState.S_Ed_Delivery_CD.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
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
                        {/* Group 3 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-bold text-xs">
                              Schedule_CAT
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <select
                                disabled={!formState.S_St_Schedule_CD.enabled}
                                id="S_St_Schedule_CD"
                                value={costListData?.S_St_Schedule_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${formState.S_St_Schedule_CD.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
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
                            <label className="w-auto font-bold text-xs">
                              ~
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <select
                                disabled={!formState.S_Ed_Schedule_CD.enabled}
                                id="S_Ed_Schedule_CD"
                                value={costListData?.S_Ed_Schedule_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${formState.S_Ed_Schedule_CD.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
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
                        {/* Group 4 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-bold text-xs">
                              Target_CAT
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <select
                                disabled={!formState.S_St_Target_CD.enabled}
                                id="S_St_Target_CD"
                                value={costListData?.S_St_Target_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${formState.S_St_Target_CD.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
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
                            <label className="w-auto font-bold text-xs">
                              ~
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <select
                                disabled={!formState.S_Ed_Target_CD.enabled}
                                id="S_Ed_Target_CD"
                                value={costListData?.S_Ed_Target_CD || ""}
                                onChange={handleCostListInputChange}
                                className={`border-gray-500 border-solid border-2 rounded-md  w-full ${formState.S_Ed_Target_CD.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
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
                        {/* Group 5 */}
                        <div className="mb-4">
                          <div className="flex gap-2 justify-end">
                            <label className="w-28 font-bold text-xs">
                              Request_Delivery
                            </label>
                            <div className="relative w-40 lg:w-44">
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
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_St_Request_Delivery.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
                              />
                            </div>
                            <label className="w-auto font-bold text-xs">
                              ~
                            </label>
                            <div className="relative w-40 lg:w-44">
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
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_Ed_Request_Delivery.enabled
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
                            <label className="w-28 font-bold text-xs">
                              Nav Delivery
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <input
                                disabled={!formState.S_St_NAV_Delivery.enabled}
                                id="S_St_NAV_Delivery"
                                value={costListData?.S_St_NAV_Delivery || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_St_NAV_Delivery.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
                              />
                            </div>
                            <label className="w-auto font-bold text-xs">
                              ~
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <input
                                disabled={!formState.S_Ed_NAV_Delivery.enabled}
                                id="S_Ed_NAV_Delivery"
                                value={costListData?.S_Ed_NAV_Delivery || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_Ed_NAV_Delivery.enabled
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
                            <label className="w-28 font-bold text-xs">
                              Confirm_Delivery
                            </label>
                            <div className="relative w-40 lg:w-44">
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
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_St_Confirm_Delivery.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
                              />
                            </div>
                            <label className="w-auto font-bold text-xs">
                              ~
                            </label>
                            <div className="relative w-40 lg:w-44">
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
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_Ed_Confirm_Delivery.enabled
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
                            <label className="w-28 font-bold text-xs">
                              Product_Delivery
                            </label>
                            <div className="relative w-40 lg:w-44">
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
                            <label className="w-auto font-bold text-xs">
                              ~
                            </label>
                            <div className="relative w-40 lg:w-44">
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
                            <label className="w-28 font-bold text-xs">
                              Product_Received
                            </label>
                            <div className="relative w-40 lg:w-44">
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
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_St_Pd_Received_Date.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
                              />
                            </div>
                            <label className="w-auto font-bold text-xs">
                              ~
                            </label>
                            <div className="relative w-40 lg:w-44">
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
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_Ed_Pd_Received_Date.enabled
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
                            <label className="w-28 font-bold text-xs">
                              Product_Complete
                            </label>
                            <div className="relative w-40 lg:w-44">
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
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_St_Pd_Complete_Date.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
                              />
                            </div>
                            <label className="w-auto font-bold text-xs">
                              ~
                            </label>
                            <div className="relative w-40 lg:w-44">
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
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_Ed_Pd_Complete_Date.enabled
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
                            <label className="w-28 font-bold text-xs">
                              QC_Complete
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <input
                                disabled={
                                  !formState.S_St_I_Complete_Date.enabled
                                }
                                id="S_St_I_Complete_Date"
                                value={costListData?.S_St_I_Complete_Date || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_St_I_Complete_Date.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
                              />
                            </div>
                            <label className="w-auto font-bold text-xs">
                              ~
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <input
                                disabled={
                                  !formState.S_Ed_I_Complete_Date.enabled
                                }
                                id="S_Ed_I_Complete_Date"
                                value={costListData?.S_Ed_I_Complete_Date || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_Ed_I_Complete_Date.enabled
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
                            <label className="w-28 font-bold text-xs">
                              Shipment_Date
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <input
                                disabled={!formState.S_St_Shipment_Date.enabled}
                                id="S_St_Shipment_Date"
                                value={costListData?.S_St_Shipment_Date || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_St_Shipment_Date.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
                              />
                            </div>
                            <label className="w-auto font-bold text-xs">
                              ~
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <input
                                disabled={!formState.S_Ed_Shipment_Date.enabled}
                                id="S_Ed_Shipment_Date"
                                value={costListData?.S_Ed_Shipment_Date || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_Ed_Shipment_Date.enabled
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
                            <label className="w-28 font-bold text-xs">
                              Cale_Date
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <input
                                disabled={!formState.S_St_Calc_Date.enabled}
                                id="S_St_Calc_Date"
                                value={costListData?.S_St_Calc_Date || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_St_Calc_Date.enabled
                                  ? "bg-[#ccffff] border-gray-500"
                                  : "bg-white border-gray-500"
                                  }`}
                              />
                            </div>
                            <label className="w-auto font-bold text-xs">
                              ~
                            </label>
                            <div className="relative w-40 lg:w-44">
                              <input
                                disabled={!formState.S_Ed_Calc_Date.enabled}
                                id="S_Ed_Calc_Date"
                                value={costListData?.S_Ed_Calc_Date || ""}
                                onChange={handleCostListInputChange}
                                type="date"
                                className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_Ed_Calc_Date.enabled
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
                      <label className="w-auto font-bold text-xs mr-8">
                        Parts_No
                      </label>
                      <div className="items-center w-full mr-5">
                        <input
                          disabled={!formState.S_Parts_No.enabled}
                          id="S_Parts_No"
                          value={costListData?.S_Parts_No || ""}
                          onChange={handleCostListInputChange}
                          type="date"
                          className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_Parts_No.enabled
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-white border-gray-500"
                            }`}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-bold text-xs mr-3">
                        Parts_Pend
                      </label>
                      <div className="items-center w-full mr-5">
                        <select
                          disabled={!formState.S_Parts_Pending.enabled}
                          id="S_Parts_Pending"
                          value={costListData?.S_Parts_Pending || ""}
                          onChange={handleCostListInputChange}
                          className={`border-gray-500 border-solid border-2 rounded-md  w-full ${formState.S_Parts_Pending.enabled
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-white border-gray-500"
                            }`}
                        >
                          <option value=""></option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <label className="w-auto font-bold text-xs mr-7">
                          Pt_CAT1
                        </label>
                        <div className="items-center w-full">
                          <select
                            disabled={!formState.S_Parts_CAT1.enabled}
                            id="S_Parts_CAT1"
                            value={costListData?.S_Parts_CAT1 || ""}
                            onChange={handleCostListInputChange}
                            className={`border-gray-500 border-solid border-2 rounded-md  w-24 h-6 ${formState.S_Parts_CAT1.enabled
                              ? "bg-[#ccffff] border-gray-500"
                              : "bg-white border-gray-500"
                              }`}
                          >
                            <option value=""></option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Group 2 */}
                  <div className="flex flex-warp justify-start gap-2 mb-4 items-center">
                    <div className="flex item-center gap-2 ">
                      <label className="w-auto font-bold text-xs mr-9">
                        Pt_CAT2
                      </label>
                      <div className="items-center w-full mr-5">
                        <select
                          disabled={!formState.S_Parts_CAT1.enabled}
                          id="S_Parts_CAT1"
                          value={costListData?.S_Parts_CAT1 || ""}
                          onChange={handleCostListInputChange}
                          className={`border-gray-500 border-solid border-2 rounded-md  w-24 h-6 ${formState.S_Parts_CAT1.enabled
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-white border-gray-500"
                            }`}
                        >
                          <option value=""></option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-bold text-xs mr-7">
                        Pt_CAT3
                      </label>
                      <div className="items-center w-full">
                        <select
                          disabled={!formState.S_Parts_CAT3.enabled}
                          id="S_Parts_CAT3"
                          value={costListData?.S_Parts_CAT3 || ""}
                          onChange={handleCostListInputChange}
                          className={`border-gray-500 border-solid border-2 rounded-md  w-24 h-6 ${formState.S_Parts_CAT3.enabled
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-white border-gray-500"
                            }`}
                        >
                          <option value=""></option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* group3 */}
                  <div className="flex flex-warp justify-start gap-2 mb-2 items-center">
                    <div className="flex item-center gap-2 ">
                      <label className="w-auto font-bold text-xs mr-4">
                        Reg_Person
                      </label>
                      <div className="items-center w-full mr-5">
                        <select
                            id="S_Pl_Reg_Person_CD"
                            value={costListData?.S_Pl_Reg_Person_CD || ""}
                            onChange={handleCostListInputChange}
                            className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-24 h-6"
                          >
                            <option value="">
                              {/* ถ้าค่าที่เลือกไม่มีการกำหนดจะแสดงข้อความนี้ */}
                              
                            </option>
                            {Array.isArray(WorkerData) && WorkerData.length > 0 ? (
                              WorkerData.map((item, index) => (
                                <option key={index} value={item.Worker_CD}>
                                  {/* แสดงข้อมูลทั้งหมด (Worker_CD - Worker_Abb - Worker_Remark) */}
                                  {`${item.Worker_CD} - ${item.Worker_Abb} - ${item.Worker_Remark}`}
                                </option>
                              ))
                            ) : (
                              <option value="">ไม่มีข้อมูล</option>
                            )}
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-bold text-xs mr-3">
                        Parts_Mate
                      </label>
                      <div className="items-center w-full mr-5">
                        <input
                          disabled={!formState.S_Parts_Material.enabled}
                          id="S_Parts_Material"
                          value={costListData?.S_Parts_Material || ""}
                          onChange={handleCostListInputChange}
                          className={`border-gray-500 border-solid border-2 rounded-md  w-24 h-6 ${formState.S_Parts_Material.enabled
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-white border-gray-500"
                            }`}
                        >
                          
                        </input>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <label className="w-auto font-bold text-xs mr-3">
                          Parts_Note
                        </label>
                        <div className="items-center w-full">
                          <input
                            disabled={!formState.S_Parts_Instructions.enabled}
                            id="S_Parts_Instructions"
                            value={costListData?.S_Parts_Instructions || ""}
                            onChange={handleCostListInputChange}
                            className={`border-gray-500 border-solid border-2 rounded-md  w-24 h-6 ${formState.S_Parts_Instructions.enabled
                              ? "bg-[#ccffff] border-gray-500"
                              : "bg-white border-gray-500"
                              }`}
                          >
                            
                          </input>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Group 4*/}
                  <div className="flex flex-warp justify-start gap-2 mb-4 items-center">
                    <div className="flex item-center gap-2 ">
                      <label className="w-auto font-bold text-xs mr-5">
                        Pt_Remark
                      </label>
                      <div className="items-center w-full mr-5">
                        <input
                          disabled={!formState.S_Parts_Remark.enabled}
                          id="S_Parts_Remark"
                          value={costListData?.S_Parts_Remark || ""}
                          onChange={handleCostListInputChange}
                          className={`border-gray-500 border-solid border-2 rounded-md  w-24 h-6 ${formState.S_Parts_Remark.enabled
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-white border-gray-500"
                            }`}
                        >
                          
                        </input>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-bold text-xs mr-5">
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
                      <label className="w-auto font-bold text-xs ">
                        Parts_Delivery
                      </label>
                      <div className="items-center">
                        <input
                          disabled={!formState.S_St_Parts_Delivery.enabled}
                          id="S_St_Parts_Delivery"
                          value={costListData?.S_St_Parts_Delivery || ""}
                          onChange={handleCostListInputChange}
                          type="date"
                          className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_St_Parts_Delivery.enabled
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-white border-gray-500"
                            }`}
                        />
                      </div>
                      <label className="font-bold text-xs">~</label>
                      <div>
                        <input
                          disabled={!formState.S_Ed_Parts_Delivery.enabled}
                          id="S_Ed_Parts_Delivery"
                          value={costListData?.S_Ed_Parts_Delivery || ""}
                          onChange={handleCostListInputChange}
                          type="date"
                          className={`h-6 border-solid border-2 rounded-md px-1 w-full ${formState.S_Ed_Parts_Delivery.enabled
                            ? "bg-[#ccffff] border-gray-500"
                            : "bg-white border-gray-500"
                            }`}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <label className="w-auto font-bold text-xs ">
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
                          {Array.isArray(plprogressData) &&
                              plprogressData.length > 0 ? (
                                plprogressData.map((item, index) => (
                                  <option
                                    key={index}
                                    value={item.Pl_Progress_CD}
                                  >
                                    {item.Pl_Progress_Symbol}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
                        </select>
                      </div>
                      <label className="font-bold text-xs">~</label>
                      <div className=" w-full pr-2">
                        <select
                          id="S_Ed_Pl_Progress_CD"
                          value={costListData?.S_Ed_Pl_Progress_CD || ""}
                          onChange={handleCostListInputChange}
                          className="border-gray-500 border-solid border-2 rounded-md bg-[#ccffff] w-24 h-6"
                        >
                          <option value=""></option>
                          {Array.isArray(plprogressData) &&
                              plprogressData.length > 0 ? (
                                plprogressData.map((item, index) => (
                                  <option
                                    key={index}
                                    value={item.Pl_Progress_CD}
                                  >
                                    {item.Pl_Progress_Symbol}
                                  </option>
                                ))
                              ) : (
                                <option value="">ไม่มีข้อมูล</option>
                              )}
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
                    <label className="w-auto font-bold text-xs ">
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
                    <label className="font-bold text-xs">~</label>
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
                    <label className="w-auto font-bold text-xs ">
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
                    <label className="font-bold text-xs">~</label>
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
                            <label className="w-auto font-bold text-xs ">
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
                              <label className="w-auto font-bold text-xs ">
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
                                    <label className="w-auto font-bold text-xs ">
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
                                  <label className="w-auto font-bold text-xs">
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
                <button className="bg-blue-500 p-3 rounded-md hover:bg-blue-700 font-medium text-white">
                  Change_View
                </button>
              </div>
              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />
              <div className="overflow-x-auto w-full mt-4">
                <table className="min-w-full table-auto border-collapse border border-gray-800 shadow-md rounded-md">
                  <thead className="bg-gray-200 text-black">
                    <tr>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Product_Delivery
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Order_No
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Parts_No
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Product_Grp
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Customer_CD
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Customer_Abb
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[400px]">
                        Product_Name
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[400px]">
                        Product_Size
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[250px]">
                        Product_Draw
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Quantity
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Pd_Calc_Qty
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[200px]">
                        Unit
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[150px]">
                        Target
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium min-w-[400px]">
                        Product_Docu
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Sales_Grp
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Sales_Person
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Request1
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Request2
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Request3
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Material1
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Material2
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Coating_CD
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Item1
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Item2
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Item3
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Item4
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Price
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Unit_Price
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Pd_Received_Date
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Request_Delivery
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        NAV_Delivery
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        I_Completed_Date
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Pd_Calc_Date
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Shipment_Date
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Specific
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Confirm_Delivery
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Delivery
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Schedule
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Od_Progress
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Sl_Instructions
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Pd_Instructions
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Pd_Remark
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        I_Remark
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Pd_Complete_Date
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Supple_Docu
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process1
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process2
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process3
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process4
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process5
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process6
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process7
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process8
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process9
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process10
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process11
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process12
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process13
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process14
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process15
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process16
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process17
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process18
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process19
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process20
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process21
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process22
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process23
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process24
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process25
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process26
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process27
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process28
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process29
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process30
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process31
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process32
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process33
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process34
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process35
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center text-sm font-medium">
                        Process36
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCostListData.length > 0 &&
                      filteredCostListData.map((order, index) => (
                        <tr
                          key={index}
                          className="bg-white transition-colors duration-300"
                        >
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Product_Delivery
                              ? new Date(
                                order.Product_Delivery
                              ).toLocaleDateString("en-GB")
                              : ""}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Order_No}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Parts_No */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Product_Grp_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Customer_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Customer_Abb */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Product_Name}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Product_Size}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Product_Draw}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Quantity}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Pd_Calc_Qty}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Unit_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Target_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Product_Docu}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Sales_Grp_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Sales_Person_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Request1_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Request2_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Request3_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Material1}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Material2}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Coating_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Item1_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Item2_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Item3_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Item4_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Price_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Unit_Price}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Pd_Received_Date
                              ? new Date(
                                order.Pd_Received_Date
                              ).toLocaleDateString("en-GB")
                              : ""}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Request_Delivery
                              ? new Date(
                                order.Request_Delivery
                              ).toLocaleDateString("en-GB")
                              : ""}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.NAV_Delivery
                              ? new Date(order.NAV_Delivery).toLocaleDateString(
                                "en-GB"
                              )
                              : ""}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.I_Completed_Date
                              ? new Date(
                                order.I_Completed_Date
                              ).toLocaleDateString("en-GB")
                              : ""}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Pd_Calc_Date
                              ? new Date(order.Pd_Calc_Date).toLocaleDateString(
                                "en-GB"
                              )
                              : ""}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Shipment_Date
                              ? new Date(
                                order.Shipment_Date
                              ).toLocaleDateString("en-GB")
                              : ""}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Specific_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Confirm_Delivery
                              ? new Date(
                                order.Confirm_Delivery
                              ).toLocaleDateString("en-GB")
                              : ""}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Delivery_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Schedule_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Od_Progress_CD}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Sl_Instructions}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Pd_Instructions}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Pd_Remark}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.I_Remark}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Pd_Complete_Date
                              ? new Date(
                                order.Pd_Complete_Date
                              ).toLocaleDateString("en-GB")
                              : ""}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {order.Supple_Docu}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process1 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process2 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process3 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process4 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process5 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process6 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process7 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process8 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process9 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process10 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process11 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process12 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process13 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process14 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process15 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process16 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process17 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process18 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process19 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process20 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process21 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process22 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process23 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process24 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process25 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process26 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process27 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process28 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process29 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process30 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process31 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process32 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process33 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process34 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process35 */}
                          </td>
                          <td className="border border-gray-300 px-6 py-3 text-sm text-gray-800">
                            {/* Process36 */}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white p-3 mt-5">
              <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                <div className="grid grid-cols-4 gap-2">
                  <button 
                    className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
                    disabled
                  >
                    Search 
                    検索 (F1)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
                  disabled={!buttonState.F2}>
                    Setting <br />
                    設定 (F2)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white"
                  onClick={handleF3Click}>
                    Show <br />
                    照会 (F3)
                  </button>
               
                  <button 
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
                  disabled>
                    Target <br />
                    対象 (F4)
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
                  disabled>
                    Product <br />
                    部門 (F5)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-md hover:bg-blue-700 font-medium text-white">
                    Calc <br />
                    生産 (F6)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-md hover:bg-blue-700 font-medium text-white">
                    List <br />一 覽 (F7)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-md hover:bg-blue-700 font-medium text-white">
                    Data <br />
                    データ (F8)
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <button className="bg-blue-500 p-3 rounded-md hover:bg-blue-700 font-medium text-white">
                    <label className="flex justify-center items-center">
                      <IoIosArrowRoundForward className="font-medium text-2xl" />{" "}
                      CSV{" "}
                    </label>
                    (F9)
                  </button>
                  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
                  disabled>
                    (F10)
                  </button>
                  <button 
                    onClick={handleF11Click}
                    className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-sm text-white">
                    Clear <br />
                    クリア (F11)
                  </button>
                  <button 
                    disabled={!buttonState.F12}
                    id="F12"
                    onClick={handleF12Click}
                    className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500">
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
