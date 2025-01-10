import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function RdNavPcUpd() {
  const data1 = [
    {
      orderNoInpurt: "",
      orderNoInpurt2: "",
      orderNoInpurt3: "",
      // 1
      PO_Date: "",
      PO_Req_Delivery: "",
      Unit_Price: "",
      PO_Person_CD: "",
      Vendor_CD: "",
      OdPcLn_No: "",
      // 2
      UpdInput21: "",
      UpdInput22: "",
      UpdInput23: "",
      UpdInput24: "",
      UpdInput25: "",
      UpdInput26: "",
      //  3
      NAV_Reg_Date: "",
      PO_Ans_Delivery: "",
      PO_Quantity: "",
      Unit_CD: "",
      PO_Item_Name: "",
      PO_Progress_CD: "",
      // 4
      UpdInput41: " ",
      UpdInput42: "",
      UpdInput43: "",
      UpdInput44: "",
      UpdInput45: "",
      UpdInput46: "",

      // 5
      NAV_Upd_Date	: "",
      PO_Arrival_Date: "",
      Arrival_Qty: "",
      PO_Material: "",
      // 6
      UpdInput61: "",
      UpdInput62: "",
      UpdInput63: "",
      UpdInput64: "",
    },
  ];
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
                  {data1.map((row, index) => (
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
                          <span>PO_Date</span>
                        </td>
                        <td align="left">
                          <input
                            type="text"
                            value={row.PO_Date}
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
                            value={row.PO_Req_Delivery}
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
                            value={row.Unit_Price}
                            className="ml-1 pl-1 bg-transparent text-left w-[80px] border border-black rounded-sm"
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
                            value={row.PO_Person_CD}
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
                            value={row.Vendor_CD}
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
                            value={row.OdPcLn_No}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td>
                          <input
                            type="text"
                            value={row.orderNoInpurt}
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
                            value={row.UpdInput21}
                            className="ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td className="text-blue-800 font-bold text-right relative">
                          <span>Upd</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value={row.UpdInput22}
                            className="ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm"
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
                            value={row.UpdInput23}
                            className="ml-1 pl-1 bg-transparent text-left w-[80px] border border-black rounded-sm"
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
                            value={row.UpdInput24}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
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
                            value={row.UpdInput25}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
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
                            value={row.UpdInput26}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
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
                            value={row.NAV_Reg_Date}
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
                            value={row.PO_Ans_Delivery}
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
                            value={row.PO_Quantity}
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
                            value={row.Unit_CD}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
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
                            value={row.PO_Item_Name}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
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
                            value={row.PO_Progress_CD}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td>
                          <input
                            type="text"
                            value={row.orderNoInpurt2}
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
                            value={row.Reg_DevileryInput}
                            className="ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm bg-yellow-400"
                            disabled
                          />
                        </td>
                        <td className="text-blue-800 font-bold text-right relative">
                          <span>Upd</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value={row.UpdInput41}
                            className="ml-1 bg-transparent text-center w-[150px] border border-black rounded-sm"
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
                            value={row.UpdInput42}
                            className="ml-1 pl-1 bg-transparent text-left w-[80px] border border-black rounded-sm"
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
                            value={row.UpdInput43}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
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
                            value={row.UpdInput44}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm bg-yellow-400"
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
                            value={row.UpdInput45}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
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
                            value={row.NAV_Upd_Date}
                            className="ml-1 pl-2 bg-transparent  w-[150px] border border-black rounded-sm text-center"
                            disabled
                          />
                        </td>
                        <td className="text-blue-800 font-bold text-right relative">
                          <span>PO_Arrival_Date</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value={row.PO_Arrival_Date}
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
                            value={row.Arrival_Qty}
                            className="ml-1 pl-1 bg-transparent text-left w-[80px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                        <td
                          className="pl-10 text-blue-800 font-bold"
                          align="right"
                        >
                          <span>PO_Material</span>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={row.PO_Material}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
                            disabled
                          />
                        </td>
                      </tr>

                      <tr className="text-center text-[12px] bg-white">
                        <td>
                          <input
                            type="text"
                            value={row.orderNoInpurt3}
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
                            value={row.UpdInput61}
                            className="ml-1 pl-2 bg-transparent text-center w-[150px] border border-black rounded-sm bg-yellow-400"
                            disabled
                          />
                        </td>
                        <td className="text-blue-800 font-bold text-right relative">
                          <span>Upd</span>
                        </td>
                        <td align="right">
                          <input
                            type="text"
                            value={row.UpdInput62}
                            className="ml-1 pr-1 bg-transparent text-center w-[150px] border border-black rounded-sm"
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
                            value={row.UpdInput63}
                            className="ml-1 pl-1 bg-transparent text-left w-[80px] border border-black rounded-sm"
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
                            value={row.UpdInput64}
                            className="ml-1 pl-1 bg-transparent text-left w-[100px] border border-black rounded-sm"
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
        </div>
      </div>
    </div>
  );
}
