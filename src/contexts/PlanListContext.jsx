import { useState, createContext, useEffect, useContext } from "react";
import axios from "../configs/axios";

export const PlanListContext = createContext();

export default function PlanListContextProvider({ children }) {
  const [planListData, setPlanListData] = useState(null);
  const [scheduleData, setScheduleData] = useState(null);
  const [PlProgressData, setPlProgressData] = useState(null);
  const [partsData, setPartsData] = useState(null);

  const fetchPlanListData = async (planListData) => {
    try {
      const response = await axios.get(
        "/planlist/fetch-planlist",
        planListData
      );

      if (response.data) {
        setPlanListData(response.data);

        return true;
      } else {
        console.log("No data found");
        return false;
      }
    } catch (error) {
      console.error("Error fetching plan list data:", error);
      return false;
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

  const fetchParts = async () => {
    try {
      const response = await axios.get("/parts/fetch-parts");

      setPartsData(response.data.data.parts);
      return response;
    } catch (error) {
      console.error("Error fetching Parts :", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchSchedule();
    fetchPlprogress();
    fetchParts();
  }, []);

  return (
    <PlanListContext.Provider
      value={{
        planListData,
        scheduleData,
        setScheduleData,
        setPlanListData,
        fetchPlanListData,
        PlProgressData,
        setPlProgressData,
        fetchPlprogress,
        fetchParts,
        partsData,
        setPartsData,
      }}
    >
      {children}
    </PlanListContext.Provider>
  );
}
