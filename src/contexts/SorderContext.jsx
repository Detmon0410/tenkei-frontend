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
      }}
    >
      {children}
    </SorderContext.Provider>
  );
}
