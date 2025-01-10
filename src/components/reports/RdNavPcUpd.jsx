import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

 
const RdNavPcUpd = () => {
//  const data =[
//   {
//       "updated": [
//           {
//               "Order_No": "APRC",
//               "Procure_No": "APRC",
//               "OdPc_No": "APRCAPRC",
//               "OdPcLn_No": "APRCAPRC1250055",
//               "Vendor_CAT": null,
//               "Vendor_CD": "F0001",
//               "Pc_Name": "VD45 CEMENTED CARBIDE 444",
//               "Pc_Material": "PUNCH DIA.27.6x51.4L [OY 3297]",
//               "Pc_Mate_Docu": null,
//               "Temp_Price": null,
//               "Price_CD": null,
//               "Unit_Price": 6500,
//               "Pc_Qty": 2,
//               "Pc_Unit_CD": "2",
//               "Pc_Person_CD": "F021",
//               "Pc_Date": "2024-01-03T17:00:00.000Z",
//               "Pc_Req_Delivery": "2024-01-03T17:00:00.000Z",
//               "Pc_Req_Delivery_CD": null,
//               "Pc_Ans_Delivery": null,
//               "Pc_Ans_Delivery_CD": null,
//               "Pc_Delivery_Judge": null,
//               "Pc_Progress_CD": "2",
//               "Pc_Send_Date": null,
//               "Pc_Arrival_Date": null,
//               "Pc_Arrival_Qty": 0,
//               "Pc_Cancel_Date": null,
//               "Procure_Docu": null,
//               "Pc_Remark": null,
//               "Print": null,
//               "Pc_Reg_Date": null,
//               "Pc_Upd_Date": "2025-01-10T14:35:56.000Z",
//               "Pc_NAV_Reg_Date": "2022-12-01T00:55:00.000Z",
//               "Pc_NAV_Upd_Date": "2022-12-01T07:56:00.000Z",
//               "Pc_Line_No": 1250055
//           }
//       ],
//       "old": [
//           {
//               "Order_No": "APRC",
//               "Procure_No": "APRC",
//               "OdPc_No": "APRCAPRC",
//               "OdPcLn_No": "APRCAPRC1250055",
//               "Vendor_CAT": null,
//               "Vendor_CD": "F0001",
//               "Pc_Name": "VD45 CEMENTED CARBIDE ERR",
//               "Pc_Material": "PUNCH DIA.27.6x51.4L [OY 3297]",
//               "Pc_Mate_Docu": null,
//               "Temp_Price": null,
//               "Price_CD": null,
//               "Unit_Price": 6500,
//               "Pc_Qty": 2,
//               "Pc_Unit_CD": "2",
//               "Pc_Person_CD": "F021",
//               "Pc_Date": "2024-01-03T17:00:00.000Z",
//               "Pc_Req_Delivery": "2024-01-03T17:00:00.000Z",
//               "Pc_Req_Delivery_CD": null,
//               "Pc_Ans_Delivery": null,
//               "Pc_Ans_Delivery_CD": null,
//               "Pc_Delivery_Judge": null,
//               "Pc_Progress_CD": "2",
//               "Pc_Send_Date": null,
//               "Pc_Arrival_Date": null,
//               "Pc_Arrival_Qty": 0,
//               "Pc_Cancel_Date": null,
//               "Procure_Docu": null,
//               "Pc_Remark": null,
//               "Print": null,
//               "Pc_Reg_Date": null,
//               "Pc_Upd_Date": "2025-01-10T14:31:10.000Z",
//               "Pc_NAV_Reg_Date": "2022-12-01T00:55:00.000Z",
//               "Pc_NAV_Upd_Date": "2022-12-01T07:56:00.000Z",
//               "Pc_Line_No": 1250055
//           }
//       ],
//       "stage": "update"
//   }
// ]       
const navigate=useNavigate();
  const location = useLocation();
  const data = location.state;
  const isUpdated = (oldString, newString) => oldString !== newString;

  // Now you can log or display the data
  console.log("Data received in RdNavPcUpd:", data);
 
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      
      <div className="flex flex-col w-screen mr-2 ml-2">
        
        <div className="flex flex-col overflow-x-auto flex-grow p-2">
          {/* Header Section */}
          {/* <div className="bg-white py-2">
            <div className="w-full overflow-x-auto">
              <div className="flex items-center justify-between p-1 w-full">
                <div className="flex flex-col">
                  {data.length > 0 ? (
                    <ul className="list-disc pl-6 mb-4">
                      {data.map((result, index) => (
                        <li key={index}>
                          <pre className="bg-gray-100 p-2 rounded">
                            {JSON.stringify(result, null, 2)}
                          </pre>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-gray-500 mb-4">No results to display.</div>
                  )}
                </div>
              </div>
            </div>
          </div> */}
          <div className="bg-white py-2">
            <div className="w-full overflow-x-auto">
              <div className="flex items-center justify-between p-1 w-full">
                <div className="flex items-start">
                  <span className="font-bold text-blue-900 w-28 text-[14px] pl-5 pt-1">
                    Product_Grp:
                  </span>
                  <div className="flex border border-black divide-x divide-black min-w-[20px] min-h-[30px] items-center">
                    <input
                      type="text"
                      className="px-[10px] py-[2px] border-black overflow-hidden text-xs w-[100px] text-center"
                      value="FTC-P1"
                      disabled
                    />
                    <input
                      type="text"
                      className="px-[10px] py-[2px] border-black overflow-hidden text-xs w-[100px] text-center"
                      value="FTC-PDS"
                      disabled
                    />
                  </div>
                </div>
 
                <div className="flex items-center space-x-2 mx-auto flex-shrink-0">
                  <span className="font-bold text-blue-900 text-[20px]">
                    Purchase Info Update List
                  </span>
                </div>
 
                <div className="flex items-center space-x-2 mr-5 flex-shrink-0">
                  <span className="font-bold text-blue-900 text-[14px]">
                    Make_Ti:
                  </span>
                  <span className="text-[12px]">25/07/24 00:00:00</span>
                  <span className="font-bold text-blue-900 text-[14px]">
                    Page:
                  </span>
                  <span className="text-[12px]">1/1</span>
                </div>
              </div>
 
              <div className="flex items-start ml-20">
                <span className="font-bold text-blue-900 w-auto text-xs pl-8 pt-1">
                  Top : Before_Data
                </span>
              </div>
              <div className="flex items-start ml-20">
                <span className="font-bold text-blue-900 w-auto text-xs pl-8 pt-1">
                  Under : After_Data
                </span>
              </div>
            </div>
          </div>
          <div className="container mx-auto min-w-full">
            <div className="overflow-x-auto max-h-[70vh]">
              <table className="min-w-full bg-white border border-solid border-[#000080]">
                <tbody>
                {data.map(({updated,old}=row, index) => (
                    <React.Fragment key={index}>
                      <tr className="text-center text-[12px] bg-white">
                        <td
                          className="py-1 px-10 text-center text-blue-800 font-bold"
                          align="left"
                        >
                          <span>Order_No</span>
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                        <span>PC_Date</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value={old[0].Pc_Date}
                            className="ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm"
                            disabled
                          />
                          
                        </td>
                        <td className="text-blue-800 font-bold text-right relative">
                          <span>PC_Req_Delivery</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value={old[0].Pc_Req_Delivery}
                            className="ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold "
                          align="right"
                        >
                          <span>Unit_Price</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={old[0].Unit_Price}
                            className="ml-1 pl-1 bg-transparent text-left w-[80px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>PC_Person_CD</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={old[0].PO_Person_CD}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Vendor_CD</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={old[0].Vendor_CD}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-5 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>OdPcLn_No</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={old[0].OdPcLn_No}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>
 
                      <tr className="text-center text-[12px] bg-white">
                        <td>
                          <input
                            type="text"
                            value={old[0].Order_No}
                            className="ml-1 bg-transparent text-center text-xs font-bold w-[120px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value={updated[0].Pc_Date}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(old[0].Pc_Date, updated[0].Pc_Date) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                        <td className="text-blue-800 font-bold text-right relative">
                          <span>Upd</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value={updated[0].Pc_Req_Delivery}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(old[0].Pc_Req_Delivery, updated[0].Pc_Req_Delivery) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={updated[0].Unit_Price}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(old[0].Unit_Price, updated[0].Unit_Price) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={updated[0].Pc_Person_CD}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(old[0].Pc_Person_CD, updated[0].Pc_Person_CD) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={updated[0].Vendor_CD	}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(old[0].Vendor_CD	, updated[0].Vendor_CD	) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={updated[0].OdPcLn_No}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(old[0].OdPcLn_No, updated[0].OdPcLn_No) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                      </tr>
 
                      <tr className="text-center text-[12px] bg-white">
                        <td
                          className="py-1 px-10 text-center text-blue-800 font-bold"
                          align="left"
                        >
                          <span>PC_No</span>
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>NAV_Reg_Date</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value={old[0].Pc_NAV_Reg_Date}
                            className="ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td className="text-blue-800 font-bold text-right relative">
                          <span>PC_Ans_Delivery</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value={old[0].Pc_Ans_Delivery}
                            className="ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>PC_Quantity</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={old[0].Pc_Qty}
                            className="ml-1 pl-1 bg-transparent text-left w-[80px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Unit_CD</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={old[0].Pc_Unit_CD}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>PC_Item_Name</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={old[0].Pc_Name}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>PC_Progress_CD</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={old[0].Pc_Progress_CD}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>
 
                      <tr className="text-center text-[12px] bg-white">
                        <td>
                          <input
                            type="text"
                            value={old[0].Procure_No}
                            className="ml-1 bg-transparent text-center text-xs font-bold w-[120px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
 
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value={updated[0].Pc_NAV_Reg_Date}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(old[0].Reg_DeliveryInput, updated[0].Reg_DeliveryInput) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                        <td className="text-blue-800 font-bold text-right relative">
                          <span>Upd</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value={updated[0].Pc_Ans_Delivery}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(old[0].Pc_Ans_Delivery, updated[0].Pc_Ans_Delivery) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={updated[0].Pc_Qty}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(old[0].Pc_Qty, updated[0].Pc_Qty) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={updated[0].Pc_Unit_CD}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(old[0].Pc_Unit_CD, updated[0].Pc_Unit_CD) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={updated[0].Pc_Name}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(old[0].Pc_Name, updated[0].Pc_Name) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={updated[0].Pc_Progress_CD}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(old[0].Pc_Progress_CD, updated[0].Pc_Progress_CD) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                      </tr>
 
                      <tr className="text-center text-[12px] bg-white">
                        <td
                          className="py-1 px-10 text-center text-blue-800 font-bold"
                          align="left"
                        >
                          <span>PC_Line_No</span>
                        </td>
 
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>NAV_Upd_Date</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value={old[0].Pc_NAV_Upd_Date}
                            className="ml-1 pl-2 bg-transparent  w-[150px] border border-black rounded-sm text-center"
                            disabled
                          />
                        </td>
                        <td className="text-blue-800 font-bold text-right relative">
                          <span>PC_Arrival_Date</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value={old[0].Pc_Arrival_Date}
                            className="ml-1 pr-1 bg-transparent text-center w-[150px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Arrival_Qty</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={old[0].Pc_Arrival_Qty}
                            className="ml-1 pl-1 bg-transparent text-left w-[80px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>PC_Material</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={old[0].Pc_Material}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>
 
                      <tr className="text-center text-[12px] bg-white">
                        <td>
                          <input
                            type="text"
                            value={old[0].OdPcLn_No}
                            className="ml-1 bg-transparent text-center text-xs font-bold w-[120px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
 
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value={updated[0].Pc_NAV_Upd_Date}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(updated[0].Pc_NAV_Upd_Date, old[0].Pc_NAV_Upd_Date) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                        <td className="text-blue-800 font-bold text-right relative">
                          <span>Upd</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value={updated[0].Pc_Arrival_Date}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(updated[0].Pc_Arrival_Date, old[0].Pc_Arrival_Date) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={updated[0].Pc_Arrival_Qty}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(updated[0].Pc_Arrival_Qty, old[0].Pc_Arrival_Qty) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>Upd</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={updated[0].Pc_Material}
                            className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${isUpdated(updated[0].Pc_Material, old[0].Pc_Material) ? 'bg-orange-500' : ''}`}
                            disabled
                          />
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex items-center justify-center  mt-5 ">
  <button className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-[150px] flex justify-center" onClick={()=>navigate(-1)}>
    Back
  </button>
</div>
        </div>
        
      </div>
      
    </div>
    

  );
}
export default RdNavPcUpd;