import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function RD_NAV_Od_Upd() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state?.[0] || {}; // เข้าถึง object แรกของ state

    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
    
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    const isValueChanged = (oldValue, newValue) => {
      return oldValue !== newValue;
    };

    // สร้าง array ของคู่ old และ updated orders
    const orderPairs = data.old?.map((oldOrder, index) => ({
      old: oldOrder.existingOrder,
      updated: data.updated[index].updatedOrder
    })) || [];

    return (
      <div className="flex bg-[#E9EFEC] h-[100vh]">
        <div className="flex flex-col w-screen mr-2 ml-2">
          {/* ส่วน header เหมือนเดิม */}
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
                      Order Update Info List
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mr-5 flex-shrink-0">
                    <span className="font-bold text-blue-900 text-[14px]">
                      Create_Date:
                    </span>
                    <span className="text-[12px]">{new Date().toLocaleDateString()}</span>
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
            
              {orderPairs.map((pair, index) => (
                <React.Fragment key={index}>
                  <div className="container mx-auto min-w-full mt-3">
                    <div className="overflow-x-auto max-h-[70vh]">
                      <table className="min-w-full border-4 border-blue-800 mt-4 ">
                        <tbody>
                        <tr className="text-center text-[12px] bg-white ">
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
                            <span>Order_Date</span>
                          </td>
                          <td align="left">
                            <input
                              type="text"
                              value={formatDate(pair.old.Order_Date)}
                              className="ml-1 bg-transparent text-center w-[120px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-72px" }}
                          >
                            <span>Customer_CD</span>
                          </td>
                          <td align="right">
                            <input
                              type="text"
                              value={pair.old.Customer_CD}
                              className="ml-1 bg-transparent text-center w-[70px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                             className="text-blue-800 font-bold text-right relative"
                             style={{ right: "-12px" }}
                          >
                            <span>NAV_Item_Name</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.NAV_Name}
                              className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>Material1</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.Material1}
                              className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>H_Treatment1</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.H_Treatment1}
                              className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                        </tr>
                      
                        <tr className="text-center text-[12px] bg-white">
                          <td>
                            <input
                              type="text"
                              value={pair.old.Order_No}
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
                              value={formatDate(pair.updated.Order_Date)}
                              className={`ml-1 bg-transparent text-center w-[120px] border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Order_Date,
                                  pair.updated.Order_Date
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-72px" }}
                          >
                            <span>Upd</span>
                          </td>
                          <td align="right">
                            <input
                              type="text"
                              value={pair.updated.Customer_CD}
                              className={`bg-transparent text-center text-black font-bold w-[70px] border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Customer_CD,
                                  pair.updated.Customer_CD
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                          <td
                             className="text-blue-800 font-bold text-right relative"
                             style={{ right: "-12px" }}
                          >
                            <span>Upd</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.updated.NAV_Name}
                              className={`ml-1 pl-1 bg-transparent text-left w-[300px] text-black font-bold border border-black rounded-sm"  ${
                                isValueChanged(
                                  pair.old.NAV_Name,
                                  pair.updated.NAV_Name
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
                              value={pair.updated.Material1}
                              className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Material1,
                                  pair.updated.Material1
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
                              value={pair.updated.H_Treatment1}
                              className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.H_Treatment1,
                                  pair.updated.H_Treatment1
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                        </tr>

                        <tr className="text-center text-[12px] bg-white">
                          <td>
                            <input
                              type="text"
                              value="Request_CAT"
                              className="ml-1 bg-transparent text-center text-blue-800 font-bold w-[120px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>Reg_Devilery</span>
                          </td>
                          <td align="left">
                            <input
                              type="text"
                              value={formatDate(pair.old.Request_Delivery)}
                              className="ml-1 bg-transparent text-center w-[120px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-72px" }}
                          >
                            <span>Sales_Person_CD</span>
                          </td>
                          <td align="right">
                            <input
                              type="text"
                              value={pair.old.Sales_Person_CD}
                              className="ml-1 bg-transparent text-center w-[70px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                             className="text-blue-800 font-bold text-right relative"
                             style={{ right: "-12px" }}
                          >
                            <span>NAV_Item_Size</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.NAV_Size}
                              className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>Material2</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.Material2}
                              className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>H_Treatment2</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.H_Treatment2}
                              className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                        </tr>

                        <tr className="text-center text-[12px] bg-white">
                          <td className="flex pl-[20px]">
                            <input
                              type="text"
                              value="1"
                              className="bg-transparent text-center text-blue-800 font-bold w-[40px] border border-black rounded-sm"
                              disabled
                            />
                            <input
                              type="text"
                              value="2"
                              className="bg-transparent text-center text-blue-800 font-bold w-[40px] border border-black rounded-sm"
                              disabled
                            />
                            <input
                              type="text"
                              value="3"
                              className="bg-transparent text-center text-blue-800 font-bold w-[40px] border border-black rounded-sm"
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
                              value={formatDate(pair.updated.Request_Delivery)}
                              className={`ml-1 pl-1 bg-transparent text-left w-[120px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Request_Delivery,
                                  pair.updated.Request_Delivery
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-72px" }}
                          >
                            <span>Upd</span>
                          </td>
                          <td align="right">
                            <input
                              type="text"
                              value={pair.updated.Sales_Person_CD}
                              className={`ml-1 pl-1 bg-transparent text-left w-[70px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Sales_Person_CD,
                                  pair.updated.Sales_Person_CD
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-12px" }}
                          >
                            <span>Upd</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.updated.NAV_Size}
                              className={`ml-1 pl-1 bg-transparent text-left w-[300px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.NAV_Size,
                                  pair.updated.NAV_Size
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
                              value={pair.updated.Material2}
                              className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Material2,
                                  pair.updated.Material2
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
                              value={pair.updated.H_Treatment2}
                              className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.H_Treatment2,
                                  pair.updated.H_Treatment2
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                        </tr>

                        <tr className="text-center text-[12px] bg-white">
                          <td className="flex pl-[20px]">
                            <input
                              type="text"
                              value={pair.old.Request1_CD}
                              className="bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm"
                              disabled
                            />
                            <input
                              type="text"
                              value={pair.old.Request2_CD}
                              className="bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm"
                              disabled
                            />
                            <input
                              type="text"
                              value={pair.old.Request3_CD}
                              className="bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm"
                              disabled
                            />
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
                              value={formatDate(pair.old.Od_NAV_Upd_Date)}
                              className="ml-1 pl-1 bg-transparent text-left w-[120px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-72px" }}
                          >
                            <span>Unit_Price</span>
                          </td>
                          <td align="right">
                            <input
                              type="text"
                              value={pair.old.Unit_Price}
                              className="ml-1 pr-1 bg-transparent text-right w-[70px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-12px" }}
                          >
                            <span>Customer_Draw</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.Customer_Draw}
                              className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>Material3</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.Material3}
                              className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>H_Treatment3</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.H_Treatment2}
                              className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                        </tr>

                        <tr className="text-center text-[12px] bg-white">
                          <td className="flex pl-[20px]">
                            <input
                              type="text"
                              value={pair.updated.Request1_CD}
                              className={`bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Request1_CD,
                                  pair.updated.Request1_CD
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                            <input
                              type="text"
                              value={pair.updated.Request2_CD}
                              className={`bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Request2_CD,
                                  pair.updated.Request2_CD
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                            <input
                              type="text"
                              value={pair.updated.Request3_CD}
                              className={`bg-transparent text-center text-black font-bold w-[40px] border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Request3_CD,
                                  pair.updated.Request3_CD
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
                          <td align="left">
                            <input
                              type="text"
                              value={formatDate(pair.updated.Od_NAV_Upd_Date)}
                              className={`ml-1 pl-1 bg-transparent text-left w-[120px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Od_NAV_Upd_Date,
                                  pair.updated.Od_NAV_Upd_Date
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-72px" }}
                          >
                            <span>Upd</span>
                          </td>
                          <td align="right">
                          <input
                            type="text"
                            value={pair.updated.Unit_Price}
                            className={`ml-1 pl-1 bg-transparent text-left w-[70px] text-black font-bold border border-black rounded-sm ${
                              isValueChanged(
                                pair.old.Unit_Price,
                                pair.updated.Unit_Price
                              )
                                ? 'bg-yellow-400'
                                : 'bg-transparent'
                            }`}
                            disabled
                          />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-12px" }}
                          >
                            <span>Upd</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.updated.Customer_Draw}
                              className={`ml-1 pl-1 bg-transparent text-left w-[300px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Customer_Draw,
                                  pair.updated.Customer_Draw
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
                              value={pair.updated.Material3}
                              className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Material3,
                                  pair.updated.Material3
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
                              value={pair.updated.H_Treatment3}
                              className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.H_Treatment3,
                                  pair.updated.H_Treatment3
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                        </tr>

                        <tr className="text-center text-[12px] bg-white">
                          <td >
                            <input
                              type="text"
                              value="Item_CAT"
                              className="ml-1 bg-transparent text-center text-blue-800 font-bold w-[120px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-190px" }}
                          >
                            <span>Quantity</span>
                          </td>
                          <td
                            className="text-black text-right relative"
                            style={{ right: "-135px" }}
                          >
                            <input
                              type="text"
                              value={pair.old.Quantity}
                              className="ml-1 pr-1 bg-transparent text-right w-[80px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-112px" }}
                          >
                            <span>Unit_CD</span>
                          </td>
                          <td align="right">
                            <input
                              type="text"
                              value={pair.old.Unit_CD}
                              className="ml-1 bg-transparent text-center w-[30px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-12px" }}
                          >
                            <span>Company_Draw</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.Company_Draw}
                              className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>Material4</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.Material4}
                              className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>H_Treatment4</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.H_Treatment4}
                              className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                        </tr>

                        <tr className="text-center text-[12px] bg-white">
                          <td className="flex pl-[20px]">
                            <input
                              type="text"
                              value="1"
                              className="bg-transparent text-center text-blue-800 font-bold w-[30px] border border-black rounded-sm"
                              disabled
                            />
                            <input
                              type="text"
                              value="2"
                              className="bg-transparent text-center text-blue-800 font-bold w-[30px] border border-black rounded-sm"
                              disabled
                            />
                            <input
                              type="text"
                              value="3"
                              className="bg-transparent text-center text-blue-800 font-bold w-[30px] border border-black rounded-sm"
                              disabled
                            />
                            <input
                              type="text"
                              value="4"
                              className="bg-transparent text-center text-blue-800 font-bold w-[30px] border border-black rounded-sm"
                              disabled
                            />
                          </td>

                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-190px" }}
                          >
                            <span>Upd</span>
                          </td>
                          <td
                            className="text-black text-right relative"
                            style={{ right: "-135px" }}
                          >
                            <input
                              type="text"
                              value={pair.updated.Quantity}
                              className={`ml-1 pr-1 bg-transparent text-right w-[80px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Quantity,
                                  pair.updated.Quantity
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-112px" }}
                          >
                            <span>Upd</span>
                          </td>
                          <td align="right">
                            <input
                              type="text"
                              value={pair.updated.Unit_CD}
                              className={`ml-1  bg-transparent text-center w-[30px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Unit_CD,
                                  pair.updated.Unit_CD
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-12px" }}
                          >
                            <span>Upd</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.updated.Company_Draw}
                              className={`ml-1  bg-transparent text-center w-[300px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Company_Draw,
                                  pair.updated.Company_Draw
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
                              value={pair.updated.Material4}
                              className={`ml-1  bg-transparent text-center w-[100px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Material4,
                                  pair.updated.Material4
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
                              value={pair.updated.H_Treatment4}
                              className={`ml-1  bg-transparent text-center w-[100px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.H_Treatment4,
                                  pair.updated.H_Treatment4
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                        </tr>

                        <tr className="text-center text-[12px] bg-white">
                          <td className="flex pl-[20px]">
                            <input
                              type="text"
                              value={pair.old.Item1_CD}
                              className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                              disabled
                            />
                          
                            <input
                              type="text"
                              value={pair.old.Item2_CD}
                              className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                              disabled
                            />
                            <input
                              type="text"
                              value={pair.old.Item3_CD}
                              className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                              disabled
                            />
                            <input
                              type="text"
                              value={pair.old.Item4_CD}
                              className="bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm"
                              disabled
                            />
                          </td>

                          <td
                            className="text-blue-800 font-bold text-right"
                            colSpan="3"
                          >
                            <span>Tolerance</span>
                          </td>
                          <td align="left">
                            <input
                              type="text"
                              value={pair.old.Tolerance}
                              className="ml-1 pl-1 bg-transparent text-left w-[130px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                              className="text-blue-800 font-bold text-right relative"
                              style={{ right: "-12px" }}
                          >
                            <span>Coating</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.Coating}
                              className="ml-1 pl-1 bg-transparent text-left w-[300px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>Material5</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.Material5}
                              className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                          <td
                            className="pl-10 text-blue-800 font-bold"
                            align="right"
                          >
                            <span>H_Treatment5</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.old.H_Treatment5}
                              className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                              disabled
                            />
                          </td>
                        </tr>

                        <tr className="text-center text-[12px] bg-white border-b-4 border-blue-800">
                         <td className="flex pl-[20px]">
                          
                            <input
                              type="text"
                              value={pair.updated.Item1_CD}
                              className={`bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Item1_CD,
                                  pair.updated.Item1_CD
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                            <input
                              type="text"
                              value={pair.updated.Item2_CD}
                              className={`bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Item2_CD,
                                  pair.updated.Item2_CD
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                            <input
                              type="text"
                              value={pair.updated.Item3_CD}
                              className={`bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Item3_CD,
                                  pair.updated.Item3_CD
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                            <input
                              type="text"
                              value={pair.updated.Item4_CD}
                              className={`bg-transparent text-center text-black font-bold w-[30px] border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Item4_CD,
                                  pair.updated.Item4_CD
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>

                          <td
                            className="text-blue-800 font-bold text-right"
                            colSpan="3"
                          >
                            <span>Upd</span>
                          </td>
                          <td align="left">
                            <input
                              type="text"
                              value={pair.updated.Tolerance}
                              className={`ml-1 pl-1 bg-transparent text-left w-[130px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Tolerance,
                                  pair.updated.Tolerance
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                          
                          <td
                            className="text-blue-800 font-bold text-right relative"
                            style={{ right: "-12px" }}
                          >
                            <span>Upd</span>
                          </td>
                          <td>
                            <input
                              type="text"
                              value={pair.updated.Coating}
                              className={`ml-1 pl-1 bg-transparent text-left w-[300px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Coating,
                                  pair.updated.Coating
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
                              value={pair.updated.Material5}
                              className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.Material5,
                                  pair.updated.Material5
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
                              value={pair.updated.H_Treatment5}
                              className={`ml-1 pl-1 bg-transparent text-left w-[100px] text-black font-bold border border-black rounded-sm ${
                                isValueChanged(
                                  pair.old.H_Treatment5,
                                  pair.updated.H_Treatment5
                                )
                                  ? 'bg-yellow-400'
                                  : 'bg-transparent'
                              }`}
                              disabled
                            />
                          </td>
                        </tr> 
                        </tbody>
                      </table>
                    </div>
                  </div>
                </React.Fragment>
              ))}

              <div className="flex items-center justify-center mt-5">
                <button 
                  className="bg-blue-500 p-3 rounded-lg hover:bg-blue-700 font-medium text-white w-[150px] flex justify-center"
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}