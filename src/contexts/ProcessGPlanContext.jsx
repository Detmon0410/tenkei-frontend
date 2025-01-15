import { useState, createContext, useEffect, useContext } from "react";
import axios from "../configs/axios";

export const ProcessGPlanContext = createContext();

export default function ProcessGPlanContextProvider({ children }) {
  const [processGPlanData, setProcessGPlanData] = useState(null);
  const [processGData, setProcessGData] = useState(null);
  const [TTprocessGData, setTTProcessGData] = useState([]);

  const fetchProcessgPlanData = async (processGPlanData) => {
    try {
      const response = await axios.get(
        "/processg/fetch-processg-plan",
        processGPlanData
      );

      if (response.data) {
        setProcessGPlanData(response.data);

        return true;
      } else {
        console.log("No data found");
        return false;
      }
    } catch (error) {
      console.error("Error fetching processg plan data:", error);
      return false;
    }
  };

  const fetchProcessg = async () => {
    try {
      const response = await axios.get("/processg/fetch-processg");
      // console.log("Fetched data:", response.data);
      setProcessGData(response.data.data.processg || []);
    } catch (error) {
      // console.error("Error fetching processg:", error);
    }
  };

  const fetchTTProcessg = async () => {
    try {
      const response = await axios.get("/processg/fetch-ttprocessg");
      // console.log("Fetched data:", response.data);
      setTTProcessGData(response.data.data.processg || []);
    } catch (error) {
      // console.error("Error fetching ttprocessg:", error);
    }
  };

  useEffect(() => {
    fetchProcessg();
    fetchTTProcessg();
  }, []);

  return (
    <ProcessGPlanContext.Provider
      value={{
        processGPlanData,
        setProcessGPlanData,
        fetchProcessgPlanData,
        processGData,
        setProcessGData,
        fetchProcessg,
        TTprocessGData,
        setTTProcessGData,
        fetchTTProcessg,
      }}
    >
      {children}
    </ProcessGPlanContext.Provider>
  );
}
