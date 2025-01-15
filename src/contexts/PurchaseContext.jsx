import { useState, createContext, useEffect } from "react";
import axios from "../configs/axios";

export const PurchaseContext = createContext();

export default function PurchaseContextProvider({ children }) {
  const [purchaseData, setPurchaseData] = useState(null);
  const [selectedPurchaseNo, setSelectedPurchaseNo] = useState(null);
  const [poProgress, setpoProgress] = useState(null);
  const [inOutside, setInOutside] = useState(null);
  const [vendorCat, setVendorCat] = useState(null);

  const fetchpoProgress = async () => {
    try {
      const response = await axios.get("/pcprogress/fetch-pcprogress");
      setpoProgress(response.data.data.pcprogress);

      return response;
    } catch (error) {
      console.error("Error fetching pcprogress data:", error);
      throw error;
    }
  };

  const fetchInOutside = async () => {
    try {
      const response = await axios.get("/inoutside/fetch-inoutside");
      setInOutside(response.data.data.outside);

      return response;
    } catch (error) {
      console.error("Error fetching inoutside data:", error);
      throw error;
    }
  };

  const createPurchase = async () => {
    try {
      const response = await axios.post("/procure/add-procure", purchaseData);

      return response.data;
    } catch (error) {
      console.error(
        "Error creating order:",
        error.response?.data || error.message
      );
      throw new Error("Failed to create order");
    }
  };

  const searchPurchaseData = async (orderNo) => {
    try {
      const response = await axios.post("/procure/search-procure", {
        Order_No: orderNo,
      });

      if (
        response.data &&
        response.data.data &&
        Array.isArray(response.data.data.procure)
      ) {
        setSelectedPurchaseNo(response.data.data.procure);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching order data:", error);
      return false;
    }
  };

  const editProcure = async () => {
    try {
      const response = await axios.put("/procure/edit-procure", purchaseData);
      console.log("purchase updated successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error updating order:",
        error.response?.data || error.message
      );
      throw new Error("Failed to update order");
    }
  };
  const Vendor_CATProcure = async (Vendor_CAT) => {
    try {
      const response = await axios.post("/procure/select-vendor", {
        Vendor_CAT: Vendor_CAT,
      });

      // ตรวจสอบการตอบกลับจาก API
      if (response.data && response.data.data) {
        const data = response.data.data;
        if (Vendor_CAT === "0") {
          setVendorCat(
            data.map((item) => ({
              ...item,
              value: item.WorkG_CD,
              label: item.WorkG_CD,
            }))
          );
        } else if (Vendor_CAT === "1") {
          setVendorCat(
            data.map((item) => ({
              ...item,
              value: item.Vendor_CD,
              label: item.Vendor_CD,
            }))
          );
        }
      } else {
        console.error("No data returned from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return false;
    }
  };

  const searchProcureData = async (OdPcLn_No) => {
    try {
      const response = await axios.post("/procure/search-purchase", {
        OdPcLn_No: OdPcLn_No,
      });

      if (response.data && response.data.data && response.data.data.procure) {
        setPurchaseData(response.data.data.procure);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error in searchPurchaseData:", error);
    }
  };

  const deleteProcure = async () => {
    try {
      const response = await axios.delete(`/procure/delete-procure`, {
        data: { OdPcLn_No: purchaseData.OdPcLn_No },
      });

      console.log("purchaseData deleted successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting purchaseData:", error);
      throw new Error("Failed to delete purchaseData");
    }
  };

  useEffect(() => {
    fetchpoProgress();
    fetchInOutside();
  }, []);

  return (
    <PurchaseContext.Provider
      value={{
        setSelectedPurchaseNo,
        selectedPurchaseNo,
        purchaseData,
        setPurchaseData,
        createPurchase,
        searchPurchaseData,
        searchProcureData,
        editProcure,
        deleteProcure,
        poProgress,
        setpoProgress,
        inOutside,
        setInOutside,
        Vendor_CATProcure,
        vendorCat,
        setVendorCat,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}
