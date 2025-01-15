import { useState, createContext, useEffect, useContext } from "react"; // นำเข้า useContext ด้วย
import axios from "../configs/axios";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [orderData, setOrderData] = useState(null);
  const [WorkergData, setWorkergData] = useState(null);
  const [WorkgData, setWorkgData] = useState(null);
  const [WorkerData, setWorkerData] = useState(null);
  const [CustomerData, setCustomerData] = useState(null);
  const [Request1Data, setRequest1Data] = useState(null);
  const [Request2Data, setRequest2Data] = useState(null);
  const [Request3Data, setRequest3Data] = useState(null);
  const [CoatingData, setCoatingData] = useState(null);
  const [TargetData, setTargetData] = useState(null);
  const [Item1Data, setItem1Data] = useState(null);
  const [SupplyData, setSupplyData] = useState(null);
  const [UnitData, setUnitData] = useState(null);
  const [QuoteData, setQuoteData] = useState(null);
  const [PriceData, setPriceData] = useState(null);
  const [ContractDocuData, setContractDocu] = useState(null);
  const [SpecificData, setSpecificData] = useState(null);
  const [OdProgressData, setOdProgressData] = useState(null);
  const [DeliveryData, setDeliveryData] = useState(null);
  const [CalcData, setCalcData] = useState(null);
  const resetOrderData = () => {
    setOrderData((prevData) => ({
      ...prevData,
      Quantity: null,
      Product_Grp_CD: "",
      Od_CAT1: false,
      Od_CAT2: false,
      Od_CAT3: false,
      NAV_Name: "",
      Product_Name: "",
      NAV_Size: "",
      Product_Size: "",
      Customer_Draw: "",
      Company_Draw: "",
      Product_Draw: "",
      Unit_CD: "",
      Sl_Instructions: "",
      Pd_Instructions: "",
      Pd_Remark: "",
      I_Remark: "",
      Sales_Grp_CD: "",
      Sales_Person_CD: "",
      Request1_CD: "",
      Request2_CD: "",
      Request3_CD: "",
      Material1: "",
      H_Treatment1: "",
      Material2: "",
      H_Treatment2: "",
      Material3: "",
      H_Treatment3: "",
      Material4: "",
      H_Treatment4: "",
      Material5: "",
      H_Treatment5: "",
      Tolerance: "",
      Coating_CD: "",
      Coating: "",
      Quote_No: "",
      Quote_CD: "",
      Item1_CD: "",
      Custom_Material: "",
      Od_No_of_Custom: null,
      Pd_Received_Date: null,
      Pd_Complete_Date: null,
      Shipment_Date: null,
      Pd_Calc_Date: null,
      Calc_Process_Date: null,
      Od_Upd_Date: null,
      Customer_CD: "",
      Supply_CD: "",
      Destination_CD: "",
      Contract_Docu_CD: "",
      Unit_Price: null,
      Od_No_of_Pd_Split: null,
      Od_Ctl_Person_CD: "",
      Od_Reg_Person_CD: "",
      Od_Upd_Person_CD: "",
      Specific_CD: "",
      Od_Progress_CD: "",
      Delivery_CD: "",
      Schedule_CD: "",
      Target_CD: "",
      Pd_Target_Qty: null,
      Pd_Complete_Qty: null,
      I_Complete_Qty: null,
      Shipment_Qty: null,
      Pd_Split_Qty: null,
      Pd_Calc_Qty: null,
      NG_Qty: null,
      Request_Delivery: null,
      Product_Delivery: null,
      Confirm_Delivery: null,
      NAV_Delivery: null,
    }));
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/order/td-orders");
      setOrderData(response.data); // อัปเดตข้อมูลที่ได้จาก API

      return response; // คืนค่า response
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error; // ขว้างข้อผิดพลาดไปยัง caller
    }
  };

  const fetchWorkerGroups = async () => {
    try {
      const response = await axios.get("/order/workerG");

      setWorkergData(response.data.data.workerg); // เข้าถึงข้อมูล workerg อย่างถูกต้อง
      return response;
    } catch (error) {
      console.error("Error fetching worker groups:", error);
      throw error;
    }
  };

  const fetchQuote = async () => {
    try {
      const response = await axios.get("/odquote/fetch-odquote");

      setQuoteData(response.data.data.odquote);
      return response;
    } catch (error) {
      console.error("Error fetching odquote groups:", error);
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

  const fetchSupply = async () => {
    try {
      const response = await axios.get("/supply/fetch-supply");

      setSupplyData(response.data.data.supply);
      return response;
    } catch (error) {
      console.error("Error fetching coating :", error);
      throw error;
    }
  };

  const fetchprice = async () => {
    try {
      const response = await axios.get("/price/fetch-price");

      setPriceData(response.data.data.price);
      return response;
    } catch (error) {
      console.error("Error fetching coating :", error);
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

  const fetchUnit = async () => {
    try {
      const response = await axios.get("/unit/fetch-unit");

      setUnitData(response.data.data.unit);
      return response;
    } catch (error) {
      console.error("Error fetching Unit :", error);
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

  const fetchContractDocu = async () => {
    try {
      const response = await axios.get("/docu/fetch-docu");
      setContractDocu(response.data.data.docu);

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

  const CheckOrderData = async (orderNo) => {
    try {
      const response = await axios.post("/order/search-order", {
        Order_No: orderNo,
      });

      if (response.data && response.data.data && response.data.data.order) {
        
        return true;
      } else {
        resetOrderData();
        return false;
      }
    } catch (error) {
      console.error("Error fetching order data:", error);
      resetOrderData();
      return false;
    }
  };

  const searchOrderData = async (orderNo) => {
    try {
      const response = await axios.post("/order/search-order", {
        Order_No: orderNo,
      });

      if (response.data && response.data.data && response.data.data.order) {
        setOrderData(response.data.data.order);
        return true;
      } else {
        resetOrderData();
        return false;
      }
    } catch (error) {
      console.error("Error fetching order data:", error);
      resetOrderData();
      return false;
    }
  };

  const searchCalcData = async (orderNos) => {
    try {
      const response = await axios.post("/order/search-cal", orderNos);

      if (response.data && response.data.data) {
     
        setCalcData(response.data.data);
        return true;
      } else {
        console.log("No valid order data found.");
      }
    } catch (error) {
      console.error("Error fetching order data:", error);
      return false;
    }
  };

  const editOrders = async () => {
    try {
      const response = await axios.put("/order/edit-order", orderData);
      console.log("Order updated successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error updating order:",
        error.response?.data || error.message
      );
      throw new Error("Failed to update order");
    }
  };


  const createOrder = async () => {
    try {
      const response = await axios.post("/order/add-order", orderData);
      console.log("Order created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error creating order:",
        error.response?.data || error.message
      );
      throw new Error("Failed to create order");
    }
  };

  const deleteOrder = async (orderNo) => {
    try {
      const response = await axios.delete(`/order/delete-order`, {
        data: { Order_No: orderData.Order_No }, // ส่งค่า Order_No ใน body
      });

      console.log("Order deleted successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting order:", error);
      throw new Error("Failed to delete order");
    }
  };

  
  const editCalc = async () => {
    try {
      const response = await axios.post("/order/update-calc", CalcData);
      console.log("calc updated successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error updating calc:",
        error.response?.data || error.message
      );
      throw new Error("Failed to update calc");
    }
  };

  useEffect(() => {
    fetchWorkerGroups();
    fetchWorker();
    fetchCustomer();
    fetchRequest1();
    fetchRequest2();
    fetchRequest3();
    fetchCoating();
    fetchTarget();
    fetchSupply();
    fetchUnit();
    fetchItem1();
    fetchWorkg();
    fetchQuote();
    fetchprice();
    fetchContractDocu();
    fetchSpecific();
    fetchOdprogress();
    fetchDelivery();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        CustomerData,
        WorkerData,
        WorkergData,
        orderData,
        Request1Data,
        Request2Data,
        Request3Data,
        CoatingData,
        TargetData,
        Item1Data,
        SupplyData,
        UnitData,
        WorkgData,
        QuoteData,
        PriceData,
        ContractDocuData,
        SpecificData,
        OdProgressData,
        DeliveryData,
        CalcData,
        searchOrderData,
        fetchOrders,
        editOrders,
        fetchWorkerGroups,
        deleteOrder,
        setOrderData,
        createOrder,
        setWorkerData,
        setRequest1Data,
        setRequest2Data,
        setRequest3Data,
        setCoatingData,
        setTargetData,
        setItem1Data,
        setSupplyData,
        setUnitData,
        setWorkgData,
        setQuoteData,
        setPriceData,
        setContractDocu,
        setSpecificData,
        setOdProgressData,
        setDeliveryData,
        setCalcData,
        searchCalcData,
        editCalc,
        CheckOrderData,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
