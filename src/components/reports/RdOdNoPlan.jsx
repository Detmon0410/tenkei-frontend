
import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function RdOdNoPlan() {
  // กำหนดข้อมูลในรูปแบบ Array
  const rows = [
    {
      pds: "PDS",
      planDate: <div className="bg-yellow-400">16/07</div>,
      pdsDeli: "19/08",
      orderPartsNo: "MOR2406307",
      no: "-07",
      jood: "●",
      customerProductionName1: "NSPT (RAYONG)",
      customerProductionName2: "3 GROOVE DIE (OY",
      cat1: "Bird",
      cat2: "C",
      cat3: "N",
      ptNameMaterial: "TIP3",
      ptNameMaterial2: "D40",
      planQty: "1/6",
      thisPlan: "No12",
      ship: "SHIP(v)",
      mSetPSet: { main: "0", sub: "0" },
      processData: [
        {
          process1: "EW",
          process2: <div className="bg-black text-white">10/7</div>,
          process3: "LP",
          process4: "14/8",
        },
        {
          process1: "MT",
          process2: <div className="bg-black text-white">10/7</div>,
          process3: "QC-WI",
          process4: "14/8",
        },
        {
          process1: "L",
          process2: <div className="bg-black text-white">10/7</div>,
          process3: "=>GF",
          process4: "14/8",
        },
        {
          process1: "GF",
          process2: <div className="bg-black text-white">10/7</div>,
        },
        {
          process1: "EW",
          process2: <div className="bg-black text-white">10/7</div>,
        },
        {
          process1: "EDM",
          process2: <div className="bg-black text-white">10/7</div>,
        },
        { process1: "LP", process2: <div className="bg-yellow-300">10/7</div> },
        {
          process1: "QC-WI",
          process2: <div className="bg-yellow-300">10/7</div>,
        },
        { process1: "MT", process2: <div className="bg-yellow-300">10/7</div> },
        {
          process1: "QLP",
          process2: <div className="bg-yellow-300">10/7</div>,
        },
        {
          process1: "QC-WI",
          process2: <div className="bg-yellow-300">10/7</div>,
        },
        {
          process1: <div className="bg-yellow-300">SHIP(V)</div>,
          process2: <div className="bg-yellow-300">10/7</div>,
        },
        { process1: "COA_J", process2: "1/7" },
        { process1: "LP_ARP", process2: "10/7" },
        { process1: "QC-WIP", process2: "10/7" },
        { process1: "M-1", process2: "11/7" },
        { process1: "MT", process2: "11/7" },
        { process1: "QC-WI", process2: "11/7" },
        { process1: "L", process2: "11/7" },
        { process1: "GF", process2: "11/7" },
        { process1: "GI", process2: "11/7" },
        { process1: "GO", process2: "11/7" },
        { process1: "EW", process2: "11/7" },
        { process1: "GF", process2: "11/7" },
      ],
      ptNoteInfo: [
        <div className="flex justify-end items-end h-full text-right">
          LP(7) 150
        </div>,
        <div className="flex justify-end items-end h-full text-right">
          TIP#3, 19/8(86200) 2/8
        </div>,
      ],
    },
    {
      pds: "PDS",
      planDate: <div className="bg-yellow-400">16/07</div>,
      pdsDeli: "19/08",
      orderPartsNo: "MOR2406307",
      no: "-07",
      jood: "●",
      customerProductionName1: "NSPT (RAYONG)",
      customerProductionName2: "3 GROOVE DIE (OY",
      cat1: "Bird",
      cat2: "C",
      cat3: "N",
      ptNameMaterial: "TIP3",
      ptNameMaterial2: "D40",
      planQty: "1/6",
      thisPlan: "No12",
      ship: "SHIP(v)",
      mSetPSet: { main: "0", sub: "0" },
      processData: [
        {
          process1: "EW",
          process2: <div className="bg-black text-white">10/7</div>,
          process3: "LP",
          process4: "14/8",
        },
        {
          process1: "MT",
          process2: <div className="bg-black text-white">10/7</div>,
          process3: "QC-WI",
          process4: "14/8",
        },
        {
          process1: "L",
          process2: <div className="bg-black text-white">10/7</div>,
          process3: "=>GF",
          process4: "14/8",
        },
        {
          process1: "GF",
          process2: <div className="bg-black text-white">10/7</div>,
        },
        {
          process1: "EW",
          process2: <div className="bg-black text-white">10/7</div>,
        },
        {
          process1: "EDM",
          process2: <div className="bg-black text-white">10/7</div>,
        },
        { process1: "LP", process2: <div className="bg-yellow-300">10/7</div> },
        {
          process1: "QC-WI",
          process2: <div className="bg-yellow-300">10/7</div>,
        },
        { process1: "MT", process2: <div className="bg-yellow-300">10/7</div> },
        {
          process1: "QLP",
          process2: <div className="bg-yellow-300">10/7</div>,
        },
        {
          process1: "QC-WI",
          process2: <div className="bg-yellow-300">10/7</div>,
        },
        {
          process1: <div className="bg-yellow-300">SHIP(V)</div>,
          process2: <div className="bg-yellow-300">10/7</div>,
        },
        { process1: "COA_J", process2: "1/7" },
        { process1: "LP_ARP", process2: "10/7" },
        { process1: "QC-WIP", process2: "10/7" },
        { process1: "M-1", process2: "11/7" },
        { process1: "MT", process2: "11/7" },
        { process1: "QC-WI", process2: "11/7" },
        { process1: "L", process2: "11/7" },
        { process1: "GF", process2: "11/7" },
        { process1: "GI", process2: "11/7" },
        { process1: "GO", process2: "11/7" },
        { process1: "EW", process2: "11/7" },
        { process1: "GF", process2: "11/7" },
      ],
      ptNoteInfo: [
        <div className="flex justify-end items-end h-full text-right">
          LP(7) 150
        </div>,
        <div className="flex justify-end items-end h-full text-right">
          TIP#3, 19/8(86200) 2/8
        </div>,
      ],
    },
  ];

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <div className="overflow-x-auto max-h-[100vh] max-w-full">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <td className="text-[12px]" colSpan="3">
                  <div className="bg-white p-2 rounded shadow-lg text-xs">
                    <div className="flex justify-between text-blue-800 font-bold mb-0 whitespace-nowrap">
                      {/* Target_Plan_Process_Date section */}
                      <div className="flex items-center space-x-1">
                        <span className="text-xs">
                          Target_Plan_Process_Date:
                        </span>
                        <span className="font-normal text-black">
                          16/04/2024
                        </span>
                        <span> ~ </span>
                        <span className="font-normal text-black">
                          31/10/2024
                        </span>
                      </div>

                      {/* Create_Date and Page section */}
                      <div className="relative w-full">
                        <div className="absolute right-0 flex items-center space-x-2">
                          <span>Create_Date:</span>
                          <span className="font-normal">24/07/24 15:38:30</span>
                          <span className="px-6">Page: 1/4</span>
                        </div>
                      </div>
                    </div>

                    {/* Process Group Section */}
                    <div className="flex items-center space-x-2 mt-4">
                      <div className="font-bold text-blue-800 text-lg">
                        Process_Grp:
                      </div>

                      {/* T40190 Section */}
                      <div className="flex items-center border border-black px-4 py-2 text-base">
                        <span className="font-bold">T40190</span>
                      </div>

                      {/* QC Shipping Vendor */}
                      <div className="flex items-center border border-black px-4 py-2 text-base">
                        <span className="font-bold text-center whitespace-nowrap">
                          QC Shipping Vendor
                        </span>
                      </div>

                      {/* Process Group Plan List */}
                      <div className="flex flex-col items-center -mt-5 space-x-10">
                        <span className="font-bold text-lg text-blue-800 text-center">
                          Process_Grp_Plan_List
                        </span>
                        <div className="flex justify-center space-x-8 mt-2">
                          <button className="bg-red-500 text-white font-bold px-8 py-1 text-sm">
                            Self
                          </button>
                          <button className="bg-orange-500 text-white font-bold px-8 py-1 text-sm">
                            1Before
                          </button>
                          <button className="bg-orange-500 text-white font-bold px-8 py-1 text-sm">
                            2Before
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </thead>
          </table>
        </div>

        <div className="container mx-auto min-w-full">
          <div className="overflow-x-auto max-h-[70vh]">
            <table className="table-auto bg-white border-2 border-blue-800 text-xs">
              <thead className="sticky top-0 z-10 bg-white">
                <tr className="text-blue-800 font-bold text-xs border border-blue-800">
                  <th
                    className="py-5 px-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    Plan_Date
                  </th>
                  <th
                    className="py-0.25 px-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    PDS_Deli
                  </th>
                  <th
                    className="py-0.25 px-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    Order_Parts_No
                  </th>
                  <th
                    className="py-0.25 px-2 border border-blue-800 border-dashed relative w-auto"
                    rowSpan="2"
                  >
                    <span className="absolute top-0 right-0 text-right border border-dashed border-blue-800 px-1">
                      CAT
                    </span>
                    Customer/Production_Name
                  </th>
                  <th
                    className="py-0.25 px-2 border border-blue-800 border-dashed w-auto"
                    rowSpan="2"
                  >
                    PT_Name Material
                  </th>
                  <th
                    className="py-0.25 px-2 border border-blue-800 border-dashed w-auto"
                    rowSpan="2"
                  >
                    Plan Qty
                  </th>
                  <th
                    className="py-0.25 px-2 border border-blue-800 border-dashed w-auto"
                    rowSpan="2"
                  >
                    This Plan
                  </th>
                  <th
                    className="py-0.25 px-2 border border-blue-800 border-dashed w-auto"
                    rowSpan="2"
                  >
                    M_Set P_Set
                  </th>
                  <th className="py-0.25 px-2 border-blue-800" colSpan="24">
                    Process
                  </th>
                  <th
                    className="py-0.25 px-2 min-w-40 border border-dashed border-blue-800 w-auto"
                    rowSpan="2"
                  >
                    PT_Note/Info
                  </th>
                </tr>
                <tr className="text-blue-800 font-bold border-b border-blue-800 text-xs">
                  {[...Array(24)].map((_, index) => (
                    <th
                      key={index}
                      className="py-0.25 px-2 w-auto border border-dashed border-blue-800"
                    >
                      {index + 1}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, rowIndex) => {
                  const processData = [
                    ...row.processData,
                    ...Array.from(
                      { length: 24 - row.processData.length },
                      () => ({ process1: "", process2: "" })
                    ),
                  ].slice(0, 24);

                  // ใช้ bg-blue-100 สำหรับแถวที่เป็นคู่
                  const rowColor =
                    rowIndex % 2 === 0 ? "bg-[#cffff9]" : "bg-white";

                  return (
                    <tr
                      key={rowIndex}
                      className={`border border-blue-800 border-dashed ${rowColor} `}
                    >
                      <td className="py-0.25 border border-blue-800 border-dashed text-center w-auto">
                        <div className="text-top">{row.planDate}</div>
                        <div>{row.pds}</div>
                      </td>
                      <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto align-top">
                        <div className="text-top">{row.pdsDeli}</div>
                      </td>

                      <td className="py-0.25 px-2 border border-blue-800 border-dashed align-top w-auto">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col items-start">
                            <p>{row.orderPartsNo}</p>
                            <span className="text-black text-lg mt-1">
                              {row.jood}
                            </span>
                          </div>
                          <p className="top-0 right-0 text-right">{row.no}</p>
                        </div>
                      </td>
                      <td className="py-0.25 px-2 border border-blue-800 border-dashed relative w-auto">
                        <div className="absolute top-0 left-0 text-left">
                          <p>{row.customerProductionName1}</p>
                        </div>
                        <div className="absolute top-4 left-3 text-left">
                          <p>{row.customerProductionName2}</p>
                        </div>

                        <div className="absolute top-0 right-0 flex flex-col items-end">
                          <span className="border border-dashed border-blue-800 text-xs">
                            {row.cat1}
                          </span>
                          <div className="flex">
                            <span className="border border-dashed border-blue-800 px-1 text-xs">
                              {row.cat2}
                            </span>
                            <span className="border border-dashed border-blue-800 px-1 text-xs">
                              {row.cat3}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                        <p>{row.ptNameMaterial}</p>
                        <span className="text-xs mt-1">
                          {row.ptNameMaterial2}
                        </span>
                      </td>
                      <td className="py-0.25 px-2 border border-blue-800 border-dashed w-auto">
                        {row.planQty}
                      </td>
                      <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                        <p>{row.thisPlan}</p>
                        <span className="text-xs mt-1">{row.ship}</span>
                      </td>
                      <td className="py-0.25 px-2 border border-blue-800 border-dashed align-top text-right w-auto">
                        <div className="flex flex-col items-end">
                          <p>{row.mSetPSet.main}</p>
                          <span className="text-xs mt-1">
                            {row.mSetPSet.sub}
                          </span>
                        </div>
                      </td>
                      {processData.map((process, procIndex) => (
                        <td
                          key={`${rowIndex}-${procIndex}`}
                          className="border border-blue-800 border-dashed text-center min-w-[60px] align-top leading-none"
                        >
                          <div>{process.process1}</div>
                          <div>{process.process2}</div>
                          <div>{process.process3}</div>
                          <div>{process.process4}</div>
                        </td>
                      ))}

                      <td className="py-0.25 px-2 border border-blue-800 border-dashed w-auto">
                        {row.ptNoteInfo.map((info, infoIndex) => (
                          <div
                            key={`ptNote-${rowIndex}-${infoIndex}`}
                            className="flex justify-end items-end h-full text-right"
                          >
                            {info}
                          </div>
                        ))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

