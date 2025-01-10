import { useState, createContext, useEffect, useContext } from "react";
import axios from "../configs/axios";

export const SorderContext = createContext();

export default function SorderContextProvider({ children }) {
  const [sorderData, setSorderData] = useState(null);
  const [odquoteData, setOdquoteData] = useState(null);
  const [currencyData, setCurrencyData] = useState(null);

  const formLoad = async () => {
    try {
      const response = await axios.get("/sorder/check-sorder");

      return response;
    } catch (error) {
      console.error("Error check sorder :", error);
      throw error;
    }
  };

  const SearchSorderData = async (sorderNo) => {
    try {
      const response = await axios.post("/sorder/search-sorder", {
        SOrder_No: sorderNo,
      });

      if (response.data && response.data.data && response.data.data.sorder) {
        setSorderData(response.data.data.sorder);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching Sorder data:", error);
      return false;
    }
  };

  const createSOrder = async (sorderData) => {
    try {
      console.log("Data being sent to API:", sorderData);

      const response = await axios.post("/sorder/create-sorder", sorderData);

      if (response.data && response.data.sorder) {
        setSorderData(response.data.sorder);
        // console.log('SOrder created successfully:', response.data.sorder);
        return true;
      } else {
        console.error("Invalid response structure:", response.data);
        return false;
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Validation error:", error.response.data.message);
      } else {
        console.error("Error creating SOrder:", error.message);
      }
      return false;
    }
  };

  const editSOrders = async () => {
    try {
      const response = await axios.put("/sorder/edit-sorder", sorderData);
      // console.log("SOrder updated successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error updating order:",
        error.response?.data || error.message
      );
      throw new Error("Failed to update sorder");
    }
  };

  const deleteSOrder = async (sorderData) => {
    try {
      const response = await axios.delete(`/sorder/delete-sorder`, {
        data: { SOrder_No: sorderData.SOrder_No },
      });

      // console.log("SOrder deleted successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting sorder:", error);
      throw new Error("Failed to delete sorder");
    }
  };

  const fetchOdquote = async () => {
    try {
      const response = await axios.get("/odquote/fetch-odquote");
      setOdquoteData(response.data?.data?.odquote || []);
    } catch (error) {
      console.error("Error fetching odquote data:", error);
    }
  };
  const fetchCurrency = async () => {
    try {
      const response = await axios.get("/currency/fetch-currency");
      setCurrencyData(response.data?.data?.currency || []);
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };

  useEffect(() => {
    fetchOdquote();
    fetchCurrency();
  }, []);
  return (
    <SorderContext.Provider
      value={{
        formLoad,
        SearchSorderData,
        setSorderData,
        sorderData,
        odquoteData,
        setOdquoteData,
        currencyData,
        createSOrder,
        editSOrders,
        deleteSOrder,
      }}
    >
      {children}
    </SorderContext.Provider>
  );
}
