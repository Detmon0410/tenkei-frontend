import { useState, createContext, useEffect } from "react";
import axios from "../configs/axios";


export const ResultContext = createContext();

export default function ResultContextProvider({ children }) {
    const [ResultData, setResultData] = useState(null);

    const SearchResultData = async (orderNo, partsNO) => {
        try {
          const response = await axios.post("/result/result-plan", {
            Order_No: orderNo,
            Parts_No: partsNO,
          });
    
          if (response.data && response.data.data && response.data.data.result) { 
            setResultData(response.data.data.result);
            return true; 
          } else {
            return false;
          }
         
        } catch (error) {
          console.error("Error fetching Result data:", error);
          return false;
        }
      };


    return (
        <ResultContext.Provider
          value={{
            ResultData,
            setResultData,
            SearchResultData,
          }}
        >
          {children}
        </ResultContext.Provider>
      );
    }
    