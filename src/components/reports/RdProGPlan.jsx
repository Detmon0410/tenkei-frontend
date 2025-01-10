import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import html2pdf from "html2pdf.js";
import "../fonts/CODE39.ttf";

export default function RdProGPlan() {
  const navigate = useNavigate();
  const reportRef = useRef();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const startDate = queryParams.get("startDate");
  const endDate = queryParams.get("endDate");

  const styles = {
    fontFamily: "CODE39",
  };

  useEffect(() => {
    handleViewPDF();
    // navigate("/processg-plan-list");
  }, []);

  const getCurrentDateTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const rows = [
    {
      pds: "PDS",
      planDate: "16/07",
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
          process2: "10/7",
          process3: "LP",
          process4: "14/8",
        },
        {
          process1: "MT",
          process2: "10/7",
          process3: "QC-WI",
          process4: "14/8",
        },
        {
          process1: "L",
          process2: "10/7",
          process3: "=>GF",
          process4: "14/8",
        },
        {
          process1: "GF",
          process2: "10/7",
        },
        {
          process1: "EW",
          process2: "10/7",
        },
        {
          process1: "EDM",
          process2: "10/7",
        },
        { process1: "LP", process2: "10/7" },
        {
          process1: "QC-WI",
          process2: "10/7",
        },
        { process1: "MT", process2: "10/7" },
        {
          process1: "QLP",
          process2: "10/7",
        },
        {
          process1: "QC-WI",
          process2: "10/7",
        },
        {
          process1: "SHIP(V)",
          process2: "10/7",
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
      planDate: "16/07",
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
          process2: "10/7",
          process3: "LP",
          process4: "14/8",
        },
        {
          process1: "MT",
          process2: "10/7",
          process3: "QC-WI",
          process4: "14/8",
        },
        {
          process1: "L",
          process2: "10/7",
          process3: "=>GF",
          process4: "14/8",
        },
        {
          process1: "GF",
          process2: "10/7",
        },
        {
          process1: "EW",
          process2: "10/7",
        },
        {
          process1: "EDM",
          process2: "10/7",
        },
        { process1: "LP", process2: "10/7" },
        {
          process1: "QC-WI",
          process2: "10/7",
        },
        { process1: "MT", process2: "10/7" },
        {
          process1: "QLP",
          process2: "10/7",
        },
        {
          process1: "QC-WI",
          process2: "10/7",
        },
        {
          process1: "SHIP(V)",
          process2: "10/7",
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

  const handleViewPDF = () => {
    const element = reportRef.current;

    const options = {
      filename: `ProcessG_Plan.pdf`,
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "landscape",
        compress: true,
        autoSize: true,
      },
    };

    html2pdf()
      .from(element)
      .set(options)
      .outputPdf("blob")
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      });
  };

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh] w-full p-2">
      <div className="flex flex-col w-full">
        <div className="flex justify-end p-4">
          <button
            onClick={handleViewPDF}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          >
            View PDF
          </button>
        </div>

        <div
          ref={reportRef}
          className="w-auto"
          style={{ ...styles, maxWidth: "100%" }}
        >
          <table className="min-w-full bg-white text-[8px] table-fixed">
            <thead>
              <tr>
                <td className="text-[12px]" colSpan="3">
                  <div className="bg-white p-2 rounded text-xs">
                    <div className="flex justify-between text-blue-800 font-bold whitespace-nowrap">
                      {/* Target_Plan_Process_Date section */}
                      <div className="flex items-center space-x-1">
                        <span className="text-xs">
                          Target_Plan_Process_Date:
                        </span>
                        <span className="font-normal text-black">
                          {formatDate(startDate)}
                        </span>
                        <span> ~ </span>
                        <span className="font-normal text-black">
                          {formatDate(endDate)}
                        </span>
                      </div>

                      {/* Create_Date and Page section */}
                      <div className="relative w-full">
                        <div className="absolute right-0 flex items-center space-x-2">
                          <span>Create_Date:</span>
                          <span className="font-normal">
                            {getCurrentDateTime()}
                          </span>
                          <span className="px-6">Page: 1/1</span>
                        </div>
                      </div>
                    </div>

                    {/* Process Group Section */}
                    <div className="flex items-center space-x-2 mt-4 pb-5">
                      <div className="font-bold text-blue-800 text-lg mt-1">
                        Process_Grp:
                      </div>

                      {/* T40190 Section */}
                      <div className="flex items-center border border-black px-4 py-2 text-base mt-5">
                        <span
                          className="font-bold text-center"
                          style={{ transform: "translateY(-10px)" }}
                        >
                          T40190
                        </span>
                      </div>

                      {/* QC Shipping Vendor */}
                      <div className="flex items-center border border-black px-4 py-2 text-base mt-5">
                        <span
                          className="font-bold text-center"
                          style={{ transform: "translateY(-10px)" }}
                        >
                          QC Shipping Vendor
                        </span>
                      </div>

                      {/* Process Group Plan List */}
                      <div className="flex flex-col items-center -mt-5 space-x-10">
                        <span className="font-bold text-lg text-blue-800 text-center">
                          Process_Grp_Plan_List
                        </span>
                        <div className="flex justify-center space-x-8 mt-3">
                          <button className="bg-red-500 text-white font-bold px-8 pt-1 pb-2 text-sm">
                            <span style={{ transform: "translateY(-7px)" }}>
                              Self
                            </span>
                          </button>
                          <button className="bg-orange-500 text-white font-bold px-8 pt-1 pb-2 text-sm">
                            <span style={{ transform: "translateY(-7px)" }}>
                              1Before
                            </span>
                          </button>
                          <button className="bg-orange-500 text-white font-bold px-8 pt-1 pb-2 text-sm">
                            <span style={{ transform: "translateY(-7px)" }}>
                              2Before
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </thead>
          </table>

          <div className="container w-full">
            <div
              className="overflow-x-auto max-h-[70vh]"
              style={{ transform: "scale(0.60)", transformOrigin: "top left" }}
            >
              <table className="table-auto bg-white border-2 border-blue-800">
                <thead className="sticky top-0 z-10 bg-white">
                  <tr className="text-blue-800 font-bold">
                    <th
                      className="py-2 px-1 border border-blue-800 border-dashed text-xs w-auto"
                      rowSpan="2"
                    >
                      <span style={{ transform: "translateY(-10px)" }}>
                        Plan_Date
                      </span>
                    </th>
                    <th
                      className="py-1 px-1 border border-blue-800 border-dashed text-xs w-auto"
                      rowSpan="2"
                    >
                      <span style={{ transform: "translateY(-10px)" }}>
                        PDS_Deli
                      </span>
                    </th>
                    <th
                      className="py-1 px-1 border border-blue-800 border-dashed text-xs w-auto"
                      rowSpan="2"
                    >
                      <span style={{ transform: "translateY(-10px)" }}>
                        Order_Parts_No
                      </span>
                    </th>
                    <th
                      className="py-1 px-1 border border-blue-800 border-dashed relative w-auto"
                      rowSpan="2"
                    >
                      <span className="absolute top-0 right-0 text-right border border-dashed border-blue-800 px-1 text-xs">
                        <span style={{ transform: "translateY(-9px)" }}>
                          CAT
                        </span>
                      </span>
                      <span
                        className="text-xs"
                        style={{ transform: "translateY(-10px)" }}
                      >
                        Customer/Production_Name
                      </span>
                    </th>
                    <th
                      className="py-1 px-1 border border-blue-800 border-dashed text-xs w-auto"
                      rowSpan="2"
                    >
                      <span style={{ transform: "translateY(-10px)" }}>
                        PT_Name Material
                      </span>
                    </th>
                    <th
                      className="py-1 px-1 border border-blue-800 border-dashed text-xs w-auto"
                      rowSpan="2"
                    >
                      <span style={{ transform: "translateY(-10px)" }}>
                        Plan Qty
                      </span>
                    </th>
                    <th
                      className="py-1 px-1 border border-blue-800 border-dashed text-xs w-auto"
                      rowSpan="2"
                    >
                      <span style={{ transform: "translateY(-10px)" }}>
                        This Plan
                      </span>
                    </th>
                    <th
                      className="py-1 px-1 border border-blue-800 border-dashed text-xs w-auto"
                      rowSpan="2"
                    >
                      <span style={{ transform: "translateY(-10px)" }}>
                        M_Set P_Set
                      </span>
                    </th>
                    <th
                      className="py-1 px-1 border-blue-800 text-xs"
                      colSpan="24"
                    >
                      <span style={{ transform: "translateY(-10px)" }}>
                        Process
                      </span>
                    </th>
                    <th
                      className="py-1 px-1 min-w-40 border border-dashed border-blue-800 text-xs w-auto"
                      rowSpan="2"
                    >
                      <span style={{ transform: "translateY(-10px)" }}>
                        PT_Note/Info
                      </span>
                    </th>
                  </tr>
                  <tr className="text-blue-800 font-bold border-b border-blue-800 text-xs">
                    {[...Array(24)].map((_, index) => (
                      <th
                        key={index}
                        className="py-1 px-1 w-auto border border-dashed border-blue-800 text-xs"
                      >
                        <span style={{ transform: "translateY(-10px)" }}>
                          {index + 1}
                        </span>
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

                    const rowColor =
                      rowIndex % 2 === 0 ? "bg-[#cffff9]" : "bg-white";

                    return (
                      <tr
                        key={rowIndex}
                        className={`border border-blue-800 border-dashed text-xs ${rowColor}`}
                      >
                        <td className="py-1 px-1 border border-blue-800 border-dashed text-center w-auto">
                         <div className="flex flex-col items-center">
                          <span style={{ transform: "translateY(-10px)" }}>
                            {row.planDate}
                          </span>

                          <span style={{ transform: "translateY(-10px)" }}>
                            {row.pds}
                          </span>
                          </div>
                        </td>
                        <td className="py-1 px-1 border border-blue-800 border-dashed text-center w-auto">
                          <span style={{ transform: "translateY(-10px)" }}>
                            {row.pdsDeli}
                          </span>
                        </td>

                        <td className="py-1 px-1 border border-blue-800 border-dashed text-center w-auto">
                          <div className="flex justify-between items-start">
                            <div className="flex flex-col items-start">
                              <span>{row.orderPartsNo}</span>
                              <span className="text-black text-xs mt-1">
                                {row.jood}
                              </span>
                            </div>
                            <span className="text-right text-xs">{row.no}</span>
                          </div>
                        </td>
                        <td className="py-1 px-1 border border-blue-800 border-dashed relative text-xs w-auto">
                          <div className="absolute top-0 left-0 text-left">
                            {row.customerProductionName1}
                          </div>
                          <div className="absolute top-4 left-3 text-left">
                            {row.customerProductionName2}
                          </div>
                          <div className="absolute top-0 right-0 flex flex-col items-end">
                            <span className="border border-dashed border-blue-800 text-xs">
                              <span style={{ transform: "translateY(-10px)" }}>
                                {row.cat1}
                              </span>
                            </span>
                            <div className="flex">
                              <span className="border border-dashed border-blue-800 px-1 text-xs">
                                <span style={{ transform: "translateY(-7px)" }}>
                                  {row.cat2}
                                </span>
                              </span>
                              <span className="border border-dashed border-blue-800 px-1 text-xs">
                                <span style={{ transform: "translateY(-7px)" }}>
                                  {row.cat3}
                                </span>
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="py-1 px-1 border border-blue-800 border-dashed text-center text-xs w-auto">
                          <span style={{ transform: "translateY(-10px)" }}>
                            {row.ptNameMaterial}
                          </span>
                          <span
                            className="text-xs mt-1"
                            style={{ transform: "translateY(-10px)" }}
                          >
                            {row.ptNameMaterial2}
                          </span>
                        </td>
                        <td className="py-1 px-1 border border-blue-800 border-dashed text-xs w-auto">
                          <span style={{ transform: "translateY(-10px)" }}>
                            {row.planQty}
                          </span>
                        </td>
                        <td className="py-1 px-1 border border-blue-800 border-dashed text-center text-xs w-auto">
                          <span style={{ transform: "translateY(-10px)" }}>
                            {row.thisPlan}
                          </span>
                          <span
                            className="text-xs mt-1"
                            style={{ transform: "translateY(-10px)" }}
                          >
                            {row.ship}
                          </span>
                        </td>
                        <td className="py-1 px-1 border border-blue-800 border-dashed align-top text-right text-xs w-auto">
                          <div className="flex flex-col items-end">
                            <span>{row.mSetPSet.main}</span>
                            <span className="text-xs mt-1">
                              {row.mSetPSet.sub}
                            </span>
                          </div>
                        </td>
                        {processData.map((process, procIndex) => (
                          <td
                            key={`${rowIndex}-${procIndex}`}
                            className="border border-blue-800 border-dashed text-center text-xs align-top leading-none min-w-[47px]"
                          >
                            <div className="flex flex-col items-center">
                            <span style={{ transform: "translateY(-5px)" }}>
                              {process.process1}
                            </span>
                            <span style={{ transform: "translateY(-5px)" }}>
                              {process.process2}
                            </span>
                            </div>
                          </td>
                        ))}
                        <td className="py-1 px-1 border border-blue-800 border-dashed text-xs w-auto">
                          {row.ptNoteInfo.map((info, infoIndex) => (
                            <div
                              key={`ptNote-${rowIndex}-${infoIndex}`}
                              className="flex justify-end items-end h-full text-right"
                            >
                              <span style={{ transform: "translateY(-10px)" }}>
                                {info}
                              </span>
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
    </div>
  );
}
