import { useState, createContext, useEffect } from "react";
import axios from "../configs/axios";

export const CostContext = createContext();

export default function CostContextProvider({ children }) {
  const [CostData, setCostData] = useState(null);
  const [CostNoData, setCostNo] = useState(null);
  const [ResourceData, setResourceData] = useState(null);
  const [CsProgressData, setCsProgressData] = useState(null);
  const [PlanppcData, setPlanppcData] = useState(null);
  const [ProcessCData, setProcessCData] = useState(null);

  const SearchCostData = async (orderNo, partsNO) => {
    try {
      const response = await axios.post("/cost/cost-part", {
        Order_No: orderNo,
        Parts_No: partsNO,
      });

      if (response.data && response.data.data && response.data.data.cost) {
        setCostNo(response.data.data.cost);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching Cost data:", error);
      return false;
    }
  };

  const fetchResource = async () => {
    try {
      const response = await axios.get("/resource/fetch-resource");
      setResourceData(response.data.data.resource);

      return response;
    } catch (error) {
      console.error("Error fetching resource:", error);
      throw error;
    }
  };

  const fetchCsProgress = async () => {
    try {
      const response = await axios.get("/csprogress/fetch-csprogress");
      setCsProgressData(response.data.data.csprogress);

      return response;
    } catch (error) {
      console.error("Error fetching csprogress:", error);
      throw error;
    }
  };

  const fetchPlanppc = async () => {
    try {
      const response = await axios.get("/planppc/fetch-planppc");
      setPlanppcData(response.data.data.planppc);

      return response;
    } catch (error) {
      console.error("Error fetching planppc:", error);
      throw error;
    }
  };

  const SearchCostNo = async (orderNo, partsNO, CostNo) => {
    try {
      const response = await axios.post("/cost/cost-no", {
        Order_No: orderNo,
        Parts_No: partsNO,
        Cost_No: CostNo,
      });

      if (response.data && response.data.data && response.data.data.cost) {
        setCostData(response.data.data.cost);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching Cost data:", error);
      return false;
    }
  };

  const editCost = async () => {
    try {
      const response = await axios.put("/cost/cost-update", CostData);
      console.log("Cost updated successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error updating Cost:",
        error.response?.data || error.message
      );
      throw new Error("Failed to update Cost");
    }
  };

  const createCost = async () => {
    try {
      const response = await axios.post("/cost/cost-add", CostData);
      console.log("Cost create successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error create Cost:",
        error.response?.data || error.message
      );
      throw new Error("Failed to update Cost");
    }
  };

  const fetchProcessCost = async () => {
    try {
      const response = await axios.get("/process/fetch-processC");
      setProcessCData(response.data.data.process);

      return response;
    } catch (error) {
      console.error("Error fetching process:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchResource();
    fetchCsProgress();
    fetchPlanppc();
    fetchProcessCost();
  }, []);

  return (
    <CostContext.Provider
      value={{
        CostData,
        setCostData,
        SearchCostData,
        CostNoData,
        setCostNo,
        ResourceData,
        setResourceData,
        CsProgressData,
        setCsProgressData,
        SearchCostNo,
        editCost,
        createCost,
        PlanppcData,
        setPlanppcData,
        ProcessCData,
        setProcessCData,
      }}
    >
      {children}
    </CostContext.Provider>
  );
}
