import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

 
const RdNavPcUpd = () => {

  const navigate=useNavigate();
  const location = useLocation();
  const data = location.state;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // เดือนเริ่มจาก 0
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
  
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };
  
  const isValueChanged = (oldValue, newValue) => {
    return oldValue !== newValue;
  };

  // Now you can log or display the data
  console.log("Data received in RdNavPcUpd:", data);
 
  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      
      <div className="flex flex-col w-screen mr-2 ml-2">
        
        <div className="flex flex-col overflow-x-auto flex-grow p-2">
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
                    Make_Time:
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

              <table className="min-w-full border-4 border-blue-800 mt-4 ">
                <tbody>
                  {data.map(({updated,old}=row, index) => (
                    <React.Fragment key={index}>
                      <div className="px-1 py-1">
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
                          <span>PO_Date</span>
                          </td>
                          <td align="left">
                            <input
                              type="text"
                              value={formatDate(old[index].Pc_Date)}
                              className="ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm"
                              disabled
                            />
                            
                          </td>
                          <td className="text-blue-800 font-bold text-right relative">
                            <span>PO_Req_Delivery</span>
                          </td>
                          <td align="right">
                            <input
                              type="text"
                              value={formatDate(old[index].Pc_Req_Delivery)}
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
                              value={old[index].Unit_Price}
                              className="ml-1 pr-1 bg-transparent text-right w-[70px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>PO_Person_CD</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={old[index].PO_Person_CD}
                              className="ml-1 pl-1 bg-transparent text-center w-[60px] border border-black rounded-sm"
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
                              value={old[index].Vendor_CD}
                              className="ml-1  bg-transparent text-center w-[70px] border border-black rounded-sm"
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
                              value={old[index].OdPcLn_No}
                              className="ml-1 pl-1 bg-transparent text-left w-[150px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                        </tr>
  
                        <tr className="text-center text-[12px] bg-white">
                          <td>
                            <input
                              type="text"
                              value={old[index].Order_No}
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
                              value={formatDate(updated[index].Pc_Date)}
                              className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${
                                isValueChanged(
                                  old[index].Pc_Date,
                                  updated[index].Pc_Date
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                          <td className="text-blue-800 font-bold text-right relative">
                            <span>Upd</span>
                          </td>
                          <td align="right">
                            <input
                              type="text"
                              value={formatDate(updated[index].Pc_Req_Delivery)}
                              className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${
                                isValueChanged(
                                  old[index].Pc_Req_Delivery,
                                  updated[index].Pc_Req_Delivery
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
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
                              value={updated[index].Unit_Price}
                              className={`ml-1 pr-1 bg-transparent text-right w-[70px] border border-black rounded-sm ${
                                isValueChanged(
                                  old[index].Unit_Price,
                                  updated[index].Unit_Price
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
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
                              value={updated[index].Pc_Person_CD}
                              className={`ml-1 bg-transparent text-center w-[60px] border border-black rounded-sm  ${
                                isValueChanged(
                                  old[index].Pc_Person_CD,
                                  updated[index].Pc_Person_CD
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
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
                              value={updated[index].Vendor_CD	}
                              className={`ml-1 bg-transparent text-center w-[70px] border border-black rounded-sm ${
                                isValueChanged(
                                  old[index].Vendor_CD,
                                  updated[index].Vendor_CD
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
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
                              value={updated[index].OdPcLn_No}
                              className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm  ${
                                isValueChanged(
                                  old[index].OdPcLn_No,
                                  updated[index].OdPcLn_No
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                        </tr>
                        <tr className="text-center text-[12px] bg-white">
                          <td
                            className="py-1 px-10 text-center text-blue-800 font-bold"
                            align="left"
                          >
                            <span>PO_No</span>
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
                              value={formatDate(old[index].Pc_NAV_Reg_Date)}
                              className="ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td className="text-blue-800 font-bold text-right relative">
                            <span>PO_Ans_Delivery</span>
                          </td>
                          <td align="right">
                            <input
                              type="text"
                              value={formatDate(old[index].Pc_Ans_Delivery)}
                              className="ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>PO_Quantity</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={old[index].Pc_Qty}
                              className="ml-1 pr-1 bg-transparent text-right w-[70px] border border-black rounded-sm"
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
                              value={old[index].Pc_Unit_CD}
                              className="ml-1  bg-transparent text-center w-[35px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>PO_Item_Name</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={old[index].Pc_Name}
                              className="ml-1 bg-transparent text-left w-[180px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>PO_Progress_CD</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={old[index].Pc_Progress_CD}
                              className="ml-1 pl-1 bg-transparent text-left w-[40px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                        </tr>

                        <tr className="text-center text-[12px] bg-white">
                          <td>
                            <input
                              type="text"
                              value={old[index].Procure_No}
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
                              value={formatDate(updated[index].Pc_NAV_Reg_Date)}
                              className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${
                                isValueChanged(
                                  old[index].Pc_NAV_Reg_Date,
                                  updated[index].Pc_NAV_Reg_Date
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                          <td className="text-blue-800 font-bold text-right relative">
                            <span>Upd</span>
                          </td>
                          <td align="right">
                            <input
                              type="text"
                              value={updated[index].Pc_Ans_Delivery}
                              className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${
                                isValueChanged(
                                  old[index].Pc_Ans_Delivery,
                                  updated[index].Pc_Ans_Delivery
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
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
                              value={updated[index].Pc_Qty}
                              className={`ml-1 pr-1 bg-transparent text-right w-[70px] border border-black rounded-sm ${
                                isValueChanged(
                                  old[index].Pc_Qty,
                                  updated[index].Pc_Qty
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
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
                              value={updated[index].Pc_Unit_CD}
                              className={`ml-1 bg-transparent text-center w-[35px] border border-black rounded-sm ${
                                isValueChanged(
                                  old[index].Pc_Unit_CD,
                                  updated[index].Pc_Unit_CD
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
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
                              value={updated[index].Pc_Name}
                              className={`ml-1 bg-transparent text-center w-[180px] border border-black rounded-sm ${
                                isValueChanged(
                                  old[index].Pc_Name,
                                  updated[index].Pc_Name
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
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
                              value={updated[index].Pc_Progress_CD}
                              className={`ml-1 pl-1 bg-transparent text-left w-[40px] border border-black rounded-sm ${
                                isValueChanged(
                                  old[index].Pc_Progress_CD,
                                  updated[index].Pc_Progress_CD
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                        </tr>

                        <tr className="text-center text-[12px] bg-white">
                          <td
                            className="py-1 px-10 text-center text-blue-800 font-bold"
                            align="left"
                          >
                            <span>PO_Line_No</span>
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
                              value={formatDate(old[index].Pc_NAV_Upd_Date)}
                              className="ml-1  bg-transparent  w-[150px] border border-black rounded-sm text-center"
                              disabled
                            />
                          </td>
                          <td className="text-blue-800 font-bold text-right relative">
                            <span>PO_Arrival_Date</span>
                          </td>
                          <td align="right">
                            <input
                              type="text"
                              value={formatDate(old[index].Pc_Arrival_Date)}
                              className="ml-1  bg-transparent text-center w-[150px] border border-black rounded-sm"
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
                              value={old[index].Pc_Arrival_Qty}
                              className="ml-1 pr-1 bg-transparent text-right w-[70px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>PO_Material</span>
                          </td>
                          <td colSpan={2}>
                            <input
                              type="text"
                              value={old[index].Pc_Material}
                              className="ml-1 pl-1 bg-transparent text-left w-[180px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                        </tr>

                        <tr className="text-center text-[12px] bg-white">
                          <td>
                            <input
                              type="text"
                              value={old[index].OdPcLn_No}
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
                              value={formatDate(updated[index].Pc_NAV_Upd_Date)}
                              className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm  ${
                                isValueChanged(
                                  old[index].Pc_NAV_Upd_Date,
                                  updated[index].Pc_NAV_Upd_Date
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                          <td className="text-blue-800 font-bold text-right relative">
                            <span>Upd</span>
                          </td>
                          <td align="right">
                            <input
                              type="text"
                              value={updated[index].Pc_Arrival_Date}
                              className={`ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm ${
                                isValueChanged(
                                  old[index].Pc_Arrival_Date,
                                  updated[index].Pc_Arrival_Date
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
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
                              value={updated[index].Pc_Arrival_Qty}
                              className={`ml-1 bg-transparent text-center w-[70px] border border-black rounded-sm ${
                                isValueChanged(
                                  old[index].Pc_Arrival_Qty,
                                  updated[index].Pc_Arrival_Qty
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>Upd</span>
                          </td>
                          <td colSpan={2}>
                            <input
                              type="text"
                              value={updated[index].Pc_Material}
                              className={`ml-1 bg-transparent text-center w-[180px] border border-black rounded-sm ${
                                isValueChanged(
                                  old[index].Pc_Material,
                                  updated[index].Pc_Material
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                        </tr>

                      </div>
                    

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