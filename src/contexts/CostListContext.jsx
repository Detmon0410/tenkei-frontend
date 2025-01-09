import { useState, createContext, useEffect } from "react";
import axios from "../configs/axios";

export const CostListContext = createContext();

export default function CostListContextProvider({ children }) {
  const [costListData, setCostListData] = useState(null);
  const [WorkerData, setWorkerData] = useState([]);
  const [scheduleData, setScheduleData] = useState(null);
  const [plprogressData, setPlProgressData] = useState(null);
  //const [formState, setFormState] = useState(initialFormState);
  // ฟังก์ชันสำหรับดึงข้อมูล cost list
  const fetchCostList = async (costListData) => {
    try {
      const response = await axios.post("/orderlist/fecth-orderlist",costListData); 

      if (response.data) {
        setCostListData(response.data);
        // console.log("Cost list data fetched successfully",costListData);
        // console.log("Response Data:", response.data);
      } else {
        console.log("No data found");
      }
    } catch (error) {
      console.error("Error fetching cost list data:", error);
    }
  };

  const fetchWorker = async () => {
    try {
      const response = await axios.get("/order/worker");

      setWorkerData(response.data.data.worker);
      return response;
    } catch (error) {
      console.error("Error fetching worker groups:", error);
      throw error;
    }
  };

  const fetchSchedule = async () => { 
    try {
        const response = await axios.get("/schedule/fetch-schedule"); 
      
        setScheduleData(response.data.data.schedule);
        return response; 
    } catch (error) {
        console.error("Error fetching schedule :", error);
        throw error; 
    }
};

const fetchPlprogress = async () => {
  try {
    const response = await axios.get("/plprogress/fetch-plprogress");

    setPlProgressData(response.data.data.plprogress);
    return response;
  } catch (error) {
    console.error("Error fetching PL Progress :", error);
    throw error;
  }
};

  // เรียก fetchCostList เมื่อ component ถูกโหลด
  useEffect(() => {
    fetchCostList(); 
    fetchWorker(); 
    fetchSchedule();
    fetchPlprogress();
    

}, []);

    const initialFormState = {
        S_Order_No: { enabled: false },
        S_NAV_Name: { enabled: false },
        S_Product_Name: { enabled: true },
        S_NAV_Size: { enabled: false },
        S_Product_Size: { enabled: false },
        S_Customer_Draw: { enabled: false },
        S_Company_Draw: { enabled: false },
        S_Product_Draw: { enabled: false },
        S_Sl_Instructions: { enabled: false },
        S_Pd_Instructions: { enabled: false },
        S_Pd_Remark: { enabled: false },
        S_I_Remark: { enabled: false },
        S_St_Pd_Grp_CD: { enabled: true },
        S_St_Pd_Grp_Abb: { enabled: true },
        S_Ed_Pd_Grp_CD: { enabled: true },
        S_Ed_Pd_Grp_Abb: { enabled: true },
        S_No_Pd_Grp_CD1: { enabled: true },
        S_No_Pd_Grp_Abb1: { enabled: true },
        S_No_Pd_Grp_CD2: { enabled: true },
        S_No_Pd_Grp_Abb2: { enabled: true },
        S_Price_CD: { enabled: false },
        S_Price_Name: { enabled: false },
        S_Customer_CD1: { enabled: true },
        S_Customer_Abb1: { enabled: true },
        S_Customer_CD2: { enabled: true },
        S_Customer_Abb2: { enabled: true },
        S_Customer_CD3: { enabled: true },
        S_Customer_Abb3: { enabled: true },
        S_No_Customer_CD: { enabled: true },
        S_No_Customer_Abb: { enabled: true },
        S_Customer_Name1: { enabled: false },
        S_Customer_Name2: { enabled: false },
        S_Customer_Name3: { enabled: false },
        S_Od_No_of_Custom: { enabled: false },
        S_Specific_CD1: { enabled: true },
        S_Specific_Name1: { enabled: true },
        S_Specific_CD2: { enabled: true },
        S_Specific_Name2: { enabled: true },
        S_No_Specific_CD1: { enabled: true },
        S_No_Specific_Name1: { enabled: true },
        S_No_Specific_CD2: { enabled: true },
        S_No_Specific_Name2: { enabled: true },
        S_Coating_CD1: { enabled: true },
        S_Coating_Name1: { enabled: true },
        S_Coating_CD2: { enabled: true },
        S_Coating_Name2: { enabled: true },
        S_Coating_CD3: { enabled: true },
        S_Coating_Name3: { enabled: true },
        S_No_Coating_CD: { enabled: true },
        S_No_Coating_Name: { enabled: true },
        S_Od_Ctl_Person_CD: { enabled: true },
        S_Od_Ctl_Person_Name: { enabled: true },
        S_Sl_Grp_CD: { enabled: true },
        S_Sl_Grp_Name: { enabled: true },
        S_Sl_Person_CD: { enabled: true },
        S_Sl_Person_Name: { enabled: true },
        S_Request1_CD: { enabled: false },
        S_Request1_Name: { enabled: false },
        S_Request2_CD: { enabled: false },
        S_Request2_Name: { enabled: false },
        S_Request3_CD: { enabled: false },
        S_Request3_Name: { enabled: false },
        S_Material1: { enabled: false },
        S_Material2: { enabled: false },
        S_Item1_CD: { enabled: true },
        S_Item1_Name: { enabled: true },
        S_Item2_CD: { enabled: false },
        S_Item2_Name: { enabled: false },
        S_Item3_CD: { enabled: false },
        S_Item3_Name: { enabled: false },
        S_Item4_CD: { enabled: false },
        S_Item4_Name: { enabled: false },
        S_Od_Pending: { enabled: false },
        S_Temp_Shipment: { enabled: false },
        S_Unreceived: { enabled: false },
        S_Od_CAT1: { enabled: false },
        S_Od_CAT2: { enabled: false },
        S_Od_CAT3: { enabled: false },
        S_St_Od_Progress_CD: { enabled: true },
        S_Ed_Od_Progress_CD: { enabled: true },
        S_St_Delivery_CD: { enabled: false },
        S_Ed_Delivery_CD: { enabled: false },
        S_St_Schedule_CD: { enabled: false },
        S_Ed_Schedule_CD: { enabled: false },
        S_St_Target_CD: { enabled: false },
        S_Ed_Target_CD: { enabled: false },
        S_St_Request_Delivery: { enabled: false },
        S_Ed_Request_Delivery: { enabled: false },
        S_St_NAV_Delivery: { enabled: false },
        S_Ed_NAV_Delivery: { enabled: false },
        S_St_Confirm_Delivery: { enabled: false },
        S_Ed_Confirm_Delivery: { enabled: false },
        S_St_Product_Delivery: { enabled: true },
        S_Ed_Product_Delivery: { enabled: true },
        S_St_Pd_Received_Date: { enabled: false },
        S_Ed_Pd_Received_Date: { enabled: false },
        S_St_Pd_Complete_Date: { enabled: false },
        S_Ed_Pd_Complete_Date: { enabled: false },
        S_St_I_Complete_Date: { enabled: false },
        S_Ed_I_Complete_Date: { enabled: false },
        S_St_Shipment_Date: { enabled: false },
        S_Ed_Shipment_Date: { enabled: false },
        S_St_Calc_Date: { enabled: false },
        S_Ed_Calc_Date: { enabled: false },
        S_Parts_No: { enabled: false },
        S_Parts_Pending: { enabled: false },
        S_Parts_CAT1: { enabled: false },
        S_Parts_CAT2: { enabled: false },
        S_Parts_CAT3: { enabled: false },
        S_St_Parts_Delivery: { enabled: false },
        S_Ed_Parts_Delivery: { enabled: false },
        S_Pl_Reg_Person_CD: { enabled: true },
        S_Pl_Reg_Person_Name: { enabled: true },
        S_Parts_Material: { enabled: false },
        S_Parts_Instructions: { enabled: false },
        S_Parts_Remark: { enabled: false },
        S_Parts_Information: { enabled: true },
        S_St_Pl_Progress_CD: { enabled: true },
        S_Ed_Pl_Progress_CD: { enabled: true }
      };


    return (
        <CostListContext.Provider
          value={{
            initialFormState,
            costListData,
            setCostListData,
            fetchCostList,
            fetchWorker,
            WorkerData,
            setScheduleData,
            scheduleData,
            plprogressData,
            fetchPlprogress,
            setPlProgressData,
          }}
        >
          {children}
        </CostListContext.Provider>
      );
    }
  }

  const fetchWorkerGroups = async () => {
    try {
      const response = await axios.get("/order/workerG");
      console.log(response.data.data.workerg)
      setWorkergData(response.data.data.workerg); // เข้าถึงข้อมูล workerg อย่างถูกต้อง
      return response;
    } catch (error) {
      console.error("Error fetching worker groups:", error);
      throw error;
    }
  };

  const fetchWorker = async () => {
    try {
      const response = await axios.get("/order/worker");

      setWorkerData(response.data.data.worker);
      return response;
    } catch (error) {
      console.error("Error fetching worker groups:", error);
      throw error;
    }
  };

  const fetchWorkg = async () => {
    try {
      const response = await axios.get("/workg/fetch-workg");

      setWorkgData(response.data.data.workg);
      return response;
    } catch (error) {
      console.error("Error fetching worker workg:", error);
      throw error;
    }
  };

  const fetchCoating = async () => {
    try {
      const response = await axios.get("/coating/fetch-coating");

      setCoatingData(response.data.data.coating);
      return response;
    } catch (error) {
      console.error("Error fetching coating :", error);
      throw error;
    }
  };

  const fetchPrice = async () => {
    try {
      const response = await axios.get("/price/fetch-price");

      setPriceData(response.data.data.price);
      return response;
    } catch (error) {
      console.error("Error fetching coating :", error);
      throw error;
    }
  };

  const fetchSpecific = async () => {
    try {
      const response = await axios.get("/specific/fetch-specific");

      setSpecificData(response.data.data.specific);
      return response;
    } catch (error) {
      console.error("Error fetching Unit :", error);
      throw error;
    }
  };

  const fetchDelivery = async () => {
    try {
      const response = await axios.get("/delivery/fetch-delivery");

      setDeliveryData(response.data.data.delivery);
      return response;
    } catch (error) {
      console.error("Error fetching Unit :", error);
      throw error;
    }
  };

  const fetchCustomer = async () => {
    try {
      const response = await axios.get("/order/customer");
      setCustomerData(response.data.data.customer);

      return response;
    } catch (error) {
      console.error("Error fetching worker groups:", error);
      throw error;
    }
  };

  const fetchRequest1 = async () => {
    try {
      const response = await axios.get("/order/request1");
      setRequest1Data(response.data.data.request1);

      return response;
    } catch (error) {
      console.error("Error fetching request1 data:", error); // เปลี่ยนข้อความแสดงข้อผิดพลาดให้ชัดเจนขึ้น
      throw error;
    }
  };

  const fetchRequest2 = async () => {
    try {
      const response = await axios.get("/order/request2");
      setRequest2Data(response.data.data.request2);

      return response;
    } catch (error) {
      console.error("Error fetching request2 data:", error); // เปลี่ยนข้อความแสดงข้อผิดพลาดให้ชัดเจนขึ้น
      throw error;
    }
  };

  const fetchRequest3 = async () => {
    try {
      const response = await axios.get("/order/request3");
      setRequest3Data(response.data.data.request3);

      return response;
    } catch (error) {
      console.error("Error fetching request3 data:", error); // เปลี่ยนข้อความแสดงข้อผิดพลาดให้ชัดเจนขึ้น
      throw error;
    }
  };

  const fetchItem1 = async () => {
    try {
      const response = await axios.get("/item1/fetch-item1");

      setItem1Data(response.data.data.item1);
      return response;
    } catch (error) {
      console.error("Error fetching item1 :", error);
      throw error;
    }
  };

  // const fetchItem2 = async () => {
  //   try {
  //     const response = await axios.get("/item1/fetch-item1");

  //     setItem1Data(response.data.data.item2);
  //     return response;
  //   } catch (error) {
  //     console.error("Error fetching item2 :", error);
  //     throw error;
  //   }
  // };

  // const fetchItem3 = async () => {
  //   try {
  //     const response = await axios.get("/item1/fetch-item1");

  //     setItem3Data(response.data.data.item3);
  //     return response;
  //   } catch (error) {
  //     console.error("Error fetching item3 :", error);
  //     throw error;
  //   }
  // };

  // const fetchItem4 = async () => {
  //   try {
  //     const response = await axios.get("/item1/fetch-item1");

  //     setItem4Data(response.data.data.item4);
  //     return response;
  //   } catch (error) {
  //     console.error("Error fetching item4 :", error);
  //     throw error;
  //   }
  // };

  const fetchOdprogress = async () => {
    try {
      const response = await axios.get("/odprogress/fetch-odprogress");

      setOdProgressData(response.data.data.progress);
      return response;
    } catch (error) {
      console.error("Error fetching Unit :", error);
      throw error;
    }
  };

  const fetchPlprogress = async () => {
    try {
      const response = await axios.get("/plprogress/fetch-plprogress");

      setPlProgressData(response.data.data.plprogress);
      return response;
    } catch (error) {
      console.error("Error fetching PL Progress :", error);
      throw error;
    }
  };

  const fetchSchedule = async () => {
    try {
      const response = await axios.get("/schedule/fetch-schedule");

      setScheduleData(response.data.data.schedule);
      return response;
    } catch (error) {
      console.error("Error fetching schedule :", error);
      throw error;
    }
  };

  const fetchTarget = async () => {
    try {
      const response = await axios.get("/target/fetch-target");

      setTargetData(response.data.data.target);
      return response;
    } catch (error) {
      console.error("Error fetching target :", error);
      throw error;
    }
  };


  useEffect(() => {
    fetchWorkerGroups();
    fetchWorker();
    fetchWorkg();
    fetchCoating();
    fetchPrice();
    fetchSpecific();
    fetchDelivery();
    fetchCustomer();
    fetchRequest1();
    fetchRequest2();
    fetchRequest3();
    fetchItem1();
    fetchOdprogress();
    fetchPlprogress();
    fetchSchedule();
    fetchCostList();
    fetchTarget();
  }, []);

  return (
    <CostListContext.Provider
      value={{
        initialFormState,
        costListData,
        setCostListData,
        CustomerData,
        WorkerData,
        WorkergData,
        Request1Data,
        Request2Data,
        Request3Data,
        CoatingData,
        Item1Data,
        WorkgData,
        PriceData,
        SpecificData,
        OdProgressData,
        DeliveryData,
        scheduleData,
        PlProgressData,
        TargetData,
        setCustomerData,
        setWorkerData,
        setWorkergData,
        setRequest1Data,
        setRequest2Data,
        setRequest3Data,
        setCoatingData,
        setItem1Data,
        setWorkgData,
        setPriceData,
        setSpecificData,
        setOdProgressData,
        setDeliveryData,
        setScheduleData,
        setPlProgressData,
        setTargetData,
        fetchCostList
      }}
    >
      {children}
    </CostListContext.Provider>
  );
}
