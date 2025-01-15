import { useState, createContext, useEffect, useContext } from "react";
import axios from "../configs/axios";

export const OrderListContext = createContext();

export default function OrderListContextProvider({ children }) {
  const [orderListData, setOrderListData] = useState({
    S_Ed_Od_Progress_CD: "4",
  });
  const [scheduleData, setScheduleData] = useState(null);

  const fetchOrderListData = async (orderListData) => {
    try {
      // Assuming orderListData is required for the API
      const response = await axios.post(
        "/orderlist/fecth-orderlist",
        orderListData
      );

      if (response.data) {
        setOrderListData(response.data);

        return true;
      } else {
        console.log("No data found");
        return false;
      }
    } catch (error) {
      console.error("Error fetching order list data:", error);
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

  useEffect(() => {
    fetchSchedule();
  }, []);

  return (
    <OrderListContext.Provider
      value={{
        orderListData,
        scheduleData,
        setOrderListData,
        fetchOrderListData,
        setScheduleData,
      }}
    >
      {children}
    </OrderListContext.Provider>
  );
}
