// import { useState, createContext, useEffect } from "react";
// import axios from "../configs/axios";

// export const PlanContext = createContext();

// export default function PlanContextProvider({ children }) {
//   const [planData, setPlanData] = useState(null);
//   const [selectedPlanNo, setSelectedPlanNo] = useState(null);
//   const [qmprocessData, setQMprocessData] = useState(null);
//   const [processData, setProcessData] = useState(null);
//   const [plprogressData, setPlProgressData] = useState(null);
//   const [ScheduleData, setScheduleData] = useState(null);
//   const [PartsData, setPartsData] = useState(null);
//   const searchPartsData = async (orderNo) => {
//     try {
//       const response = await axios.post("/plan/search-order-plan", {
//         Order_No: orderNo,
//       });

//       if (
//         response.data &&
//         response.data.data &&
//         Array.isArray(response.data.data.partsNo)
//       ) {
//         setSelectedPlanNo(response.data.data.partsNo);
//         return true;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.error("Error fetching order data:", error);
//       return false;
//     }
//   };

//   const selectPartsData = async (orderNo, partsNO) => {
//     try {
//       const response = await axios.post("/plan/search-part-plan", {
//         Order_No: orderNo,
//         Parts_No: partsNO,
//       });

//       if (
//         response.data &&
//         response.data.data &&
//         Array.isArray(response.data.data)
//       ) {
//         setPlanData(response.data.data);
//         return true;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.error("Error fetching order data:", error);
//       return false;
//     }
//   };

//   const QM_Process = async () => {
//     try {
//       const response = await axios.get("/process/fetch-qmprocess");
//       console.log("Fetched Data:", response.data.data.process); // ตรวจสอบข้อมูล
//       setQMprocessData(response.data.data.process); // เข้าถึงข้อมูล process อย่างถูกต้อง
//       return response;
//     } catch (error) {
//       console.error("Error fetching process groups:", error);
//       throw error;
//     }
//   };

//   const Process = async () => {
//     try {
//       const response = await axios.get("/process/fetch-process");
//       console.log("Fetched Data:", response.data.data.process); // ตรวจสอบข้อมูล
//       setProcessData(response.data.data.process); // เข้าถึงข้อมูล process อย่างถูกต้อง
//       return response;
//     } catch (error) {
//       console.error("Error fetching process groups:", error);
//       throw error;
//     }
//   };

//   const fetchPlprogress = async () => {
//     try {
//       const response = await axios.get("/plprogress/fetch-plprogress");
//       console.log("Fetched Data:", response.data.data.plprogress);
//       setPlProgressData(response.data.data.plprogress);
//       return response;
//     } catch (error) {
//       console.error("Error fetching plprogress groups:", error);
//       throw error;
//     }
//   };

//   const fetchSchedule = async () => {
//     try {
//       const response = await axios.get("/schedule/fetch-schedule");
//       console.log("Fetched Data:", response.data.data.schedule);
//       setScheduleData(response.data.data.schedule);
//       return response;
//     } catch (error) {
//       console.error("Error fetching schedule groups:", error);
//       throw error;
//     }
//   };

//   const fetchParts = async () => {
//     try {
//       const response = await axios.get("/parts/fetch-parts");
//       console.log("Fetched Data:", response.data.data.parts);
//       setPartsData(response.data.data.parts);
//       return response;
//     } catch (error) {
//       console.error("Error fetching parts groups:", error);
//       throw error;
//     }
//   };

//   useEffect(() => {
//     QM_Process();
//     Process();
//     fetchPlprogress();
//     fetchSchedule();
//     fetchParts();
//   }, []);

//   return (
//     <PlanContext.Provider
//       value={{
//         planData,
//         setPlanData,
//         selectedPlanNo,
//         setSelectedPlanNo,
//         searchPartsData,
//         selectPartsData,
//         qmprocessData,
//         processData,
//         plprogressData,
//         setPlProgressData,
//         ScheduleData,
//         setScheduleData,
//         PartsData,
//       }}
//     >
//       {children}
//     </PlanContext.Provider>
//   );
// }

import { useState, createContext, useEffect } from "react";
import axios from "../configs/axios";

export const PlanContext = createContext();

export default function PlanContextProvider({ children }) {
  const [planData, setPlanData] = useState([]); // Default to empty array
  const [selectedPlanNo, setSelectedPlanNo] = useState([]);
  const [qmprocessData, setQMprocessData] = useState(null);
  const [processData, setProcessData] = useState(null);
  const [plprogressData, setPlProgressData] = useState(null);
  const [ScheduleData, setScheduleData] = useState(null);
  const [PartsData, setPartsData] = useState(null);
  const [UnitsData, setUnitsData] = useState(null);


  const fetch_All_Plan = async () => {
    try {
      const response = await axios.get("/plan/fetch-all-plan");
      setPlanData(response.data.data.plan); 

      return response;
    } catch (error) {
      console.error("Error fetching Plans:", error);
      throw error; 
    }
  };

  const searchPartsData = async (orderNo) => {
    try {
      const response = await axios.post("/plan/search-order-plan", {
        Order_No: orderNo,
      });

      if (
        response.data &&
        response.data.data &&
        Array.isArray(response.data.data.partsNo)
      ) {
        setSelectedPlanNo(response.data.data.partsNo);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching order data:", error);
      return false;
    }
  };

  const selectPartsData = async (orderNo, partsNO) => {
    try {
      const response = await axios.post("/plan/search-part-plan", {
        Order_No: orderNo,
        Parts_No: partsNO,
      });

      if (response.data && response.data.data && response.data.data.plan) {
        setPlanData(response.data.data.plan);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching part data:", error);
      return false;
    }
  };

  const QM_Process = async () => {
    try {
      const response = await axios.get("/process/fetch-qmprocess");
      setQMprocessData(response.data?.data?.process || []);
    } catch (error) {
      console.error("Error fetching QM process:", error);
    }
  };

  const Process = async () => {
    try {
      const response = await axios.get("/process/fetch-process");
      setProcessData(response.data?.data?.process || []);
    } catch (error) {
      console.error("Error fetching process:", error);
    }
  };

  const fetchPlprogress = async () => {
    try {
      const response = await axios.get("/plprogress/fetch-plprogress");
      setPlProgressData(response.data?.data?.plprogress || []);
    } catch (error) {
      console.error("Error fetching progress data:", error);
    }
  };

  const fetchUnits = async () => {
    try {
      const response = await axios.get("/unit/fetch-unit");
      setUnitsData(response.data?.data?.unit || []);
    } catch (error) {
      console.error("Error fetching unit data:", error);
    }
  };

  const fetchSchedule = async () => {
    try {
      const response = await axios.get("/schedule/fetch-schedule");
      setScheduleData(response.data?.data?.schedule || []);
    } catch (error) {
      console.error("Error fetching schedule data:", error);
    }
  };

  const fetchParts = async () => {
    try {
      const response = await axios.get("/parts/fetch-parts");
      setPartsData(response.data?.data?.parts || []);
    } catch (error) {
      console.error("Error fetching parts groups:", error);
      throw error;
    }
  };

  const createResult = async () => {
    try {
      const response = await axios.post("/plan/create-result", planData);
      console.log("result created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error creating result:",
        error.response?.data || error.message
      );
      throw new Error("Failed to create result");
    }
  };

  const createWip = async () => {
    try {
      const response = await axios.post("/plan/create-wip", planData);
      console.log("wip created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error creating wip:",
        error.response?.data || error.message
      );
      throw new Error("Failed to create wip");
    }
  };

  const createSchedule = async () => {
    try {
      const response = await axios.post("/plan/create-schedule", planData);
      console.log("schedule created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error creating schedule:",
        error.response?.data || error.message
      );
      throw new Error("Failed to create schedule");
    }
  };

  const createPlan = async () => {
    try {
      const response = await axios.post("/plan/create-plan", planData);
      console.log("plan created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error creating plan:",
        error.response?.data || error.message
      );
      throw new Error("Failed to create plan");
    }
  };

  const deleteWip = async () => {
    try {
      const response = await axios.post(`/plan/delete-wip`, planData);

      console.log("WIP deleted successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error deleting WIP:",
        error.response?.data || error.message
      );
      throw new Error("Failed to delete WIP");
    }
  };
  const deleteSchedule = async () => {
    try {
      const response = await axios.post(`/plan/delete-schedule`, planData);

      console.log("Schedule deleted successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting Schedule:", error);
      throw new Error("Failed to delete Schedule");
    }
  };

  const deletePlan = async () => {
    try {
      const response = await axios.post(`/plan/delete-plan`, planData);

      console.log("Plan deleted successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting Plan:", error);
      throw new Error("Failed to delete Plan");
    }
  };

  const deleteResult = async () => {
    try {
      const response = await axios.post(`/plan/delete-result`, planData);

      console.log("Result deleted successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting Result:", error);
      throw new Error("Failed to delete Result");
    }
  };

  useEffect(() => {
    QM_Process();
    Process();
    fetchPlprogress();
    fetchSchedule();
    fetchParts();
    fetchUnits();
    fetch_All_Plan();
  }, []);

  return (
    <PlanContext.Provider
      value={{
        UnitsData,
        planData,
        setPlanData,
        selectedPlanNo,
        setSelectedPlanNo,
        searchPartsData,
        selectPartsData,
        fetch_All_Plan,
        qmprocessData,
        processData,
        plprogressData,
        setPlProgressData,
        ScheduleData,
        setScheduleData,
        PartsData,
        createResult,
        createWip,
        createSchedule,
        createPlan,
        deleteResult,
        deletePlan,
        deleteSchedule,
        deleteWip,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}
