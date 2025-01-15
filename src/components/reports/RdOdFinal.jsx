

import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function RdOdFinal() {
  // ข้อมูลจำลองในรูปแบบ Array
  const rows = [
    {
      pds: "RO",
      pds2: "25/12/2018",
      pds3: "24/12/2018",
      pds4: "24/12/2018",
      pds5: "SAM1810003",
      pds6: "FDC02 FDC02[E]",
      pds7: "PECH PUNCH",
      pds8: "D40",
      pds9: "37",
      pds10: "1",
      pds101: "0",
      pds11: "2",
      pds12: "0",
      pds13: "0",
      pds14: "2",
      pds15: "0",
      pds16: "",
    },
    {
        pds: "RO",
        pds2: "25/12/2018",
        pds3: "24/12/2018",
        pds4: "24/12/2018",
        pds5: "SAM1810003",
        pds6: "FDC02 FDC02[E]",
        pds7: "PECH PUNCH",
        pds8: "D40",
        pds9: "37",
        pds10: "1",
        pds101: "0",
        pds11: "2",
        pds12: "0",
        pds13: "0",
        pds14: "2",
        pds15: "0",
        pds16: "",
      },
  ];

  const summaryRows1 = [
    {
      label: "Calc_Process_Date_Sum:",
      value: 4,
      qty: 0,
      sumTotal: 0,
      total: (148227.422).toFixed(3),
      remark: "",
    },
  ];

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh] ">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <div className="bg-white py-2">
          <div className="w-full overflow-x-auto">
            <div className="flex items-center justify-between p-1 w-full">
              <div className="flex items-start">
                <span className="font-bold text-blue-900 w-28 text-xs pl-5 pt-1">
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
                <span className="font-bold text-blue-900 text-lg">
                Final Completed List
                </span>
              </div>

              <div className="flex items-center space-x-2 ml-auto flex-shrink-0">
                <span className="font-bold text-blue-900 text-xs">
                  Create_Date:
                </span>
                <span className="text-xs">25/07/24 10:55:33</span>
                <span className="font-bold text-blue-900 text-xs">Page:</span>
                <span className="text-xs">1/2</span>
              </div>
            </div>

            <div className="flex items-start ml-1 -mt-1">
              <span className="font-bold text-blue-900 w-28 text-xs pl-8 pt-1">
                Ctl_Person:
              </span>
              <div className="flex border border-black divide-x divide-black min-w-[20px] min-h-[30px] items-center">
                <input
                  type="text"
                  className="px-[10px] py-[2px] border-black overflow-hidden text-xs w-[100px] text-center"
                  value=""
                  disabled
                />
                <input
                  type="text"
                  className="px-[10px] py-[2px] border-black overflow-hidden text-xs w-[100px] text-center"
                  value=""
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto max-h-[100vh] ">
          <table className="table-auto bg-white border-2 border-blue-800 text-xs">
            <thead className="sticky top-0 z-10 bg-white">
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Progress
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Confirm Delivery
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Product Delivery
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Request Delivery
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Order_No
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Customer
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                NAV_Goods_Name
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Material 1/2
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Item CD
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Req CAT
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Qty
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Unit Price
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Comp Qty
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Rest Qty
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Rest Sum
              </th>
              <th
                className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                rowSpan="2"
              >
                Instructions/Remark
              </th>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds2}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds3}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds4}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds5}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds6}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds7}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds8}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds9}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    <div className="flex justify-between w-full">
                      <span className="text-left">{row.pds10}</span>
                      <span className="text-right">{row.pds101}</span>
                    </div>
                  </td>

                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds11}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds12}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds13}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds14}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds15}
                  </td>
                  <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                    {row.pds16}
                  </td>
                </tr>
              ))}
            </tbody>
            <tbody className="bg-[#cffff9] font-bold text-[12px]">
                  {summaryRows1.map((item, index) => (
                    <tr key={index}>
                      <td
                        colSpan="10"
                        className="py-1 text-right text-[#000080]"
                      >
                        {item.label}
                      </td>
                      <td className="pr-0.5 text-right">{item.value}</td>
                      <td colSpan="2" className="pr-0.5 text-right">
                        {item.qty}
                      </td>
                      <td className="pr-0.5 text-right">{item.sumTotal}</td>
                      <td className="pr-0.5 text-center">{item.total}</td>
                      <td className="pr-0.5 text-right">{item.remark}</td>
                    </tr>
                  ))}
                </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
