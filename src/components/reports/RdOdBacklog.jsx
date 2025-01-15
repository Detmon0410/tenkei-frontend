import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import html2pdf from "html2pdf.js";
import "../fonts/CODE39.ttf";

export default function RdOdBacklog() {
  const navigate = useNavigate();
  const reportRef = useRef();
  const styles = {
    fontFamily: "CODE39",
  };

  useEffect(() => {
    const processPDFAndNavigate = async () => {
      try {
        await handleViewPDF(); 
        navigate("/order-list", { replace: true });
      } catch (error) {
        console.error("Error processing PDF or navigating:", error);
      }
    };

    processPDFAndNavigate();
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

  const handleViewPDF = async () => {
    const element = reportRef.current;

    const options = {
      filename: `RD_Od_Backlog.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
    };

    html2pdf()
      .from(element)
      .set(options)
      .outputPdf("blob") // ส่งออกเป็น Blob
      .then((blob) => {
        const url = URL.createObjectURL(blob); // สร้าง Blob URL
        window.open(url, "_blank"); // เปิดในแท็บใหม่
      });
  };

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
      <div className="flex flex-col w-screen mr-2 ml-2">
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
          <div className="bg-white py-2">
            <div className="w-full overflow-x-auto">
              <div className="flex items-center justify-between p-1 w-full">
                <div className="flex items-start">
                  <span className="font-bold text-blue-900 w-28 text-xs pl-5 pt-1">
                    Product_Grp:
                  </span>

                  <div
                    className="px-[10px] py-[2px] border border-black text-xs w-[100px] h-6 text-center"
                    style={{ transform: "translateY(7px)" }}
                  >
                    <span style={{ transform: "translateY(-8px)" }}>
                      FTC-P1
                    </span>
                  </div>
                  <div
                    className="px-[10px] py-[2px] border border-black text-xs w-[100px] h-6 text-center"
                    style={{ transform: "translateY(7px)" }}
                  >
                    <span style={{ transform: "translateY(-8px)" }}>
                      FTC-PDS
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-auto flex-shrink-0">
                  <span className="font-bold text-blue-900 text-lg">
                    Order Backlog List
                  </span>
                </div>

                <div className="flex items-center space-x-2 ml-auto mr-2 flex-shrink-0">
                  <span className="font-bold text-blue-900 text-xs">
                    Create_Date:
                  </span>
                  <span className="text-xs">{getCurrentDateTime()}</span>
                  <span className="font-bold text-blue-900 text-xs">Page:</span>
                  <span className="text-xs">1/1</span>
                </div>
              </div>

              <div className="flex items-start ml-1 mt-1">
                <span
                  className="font-bold text-blue-900 w-28 text-xs pl-8 pt-1"
                  style={{ transform: "translateY(-7px)" }}
                >
                  Ctl_Person:
                </span>
                <div className="px-[10px] py-[2px] border border-black text-xs w-[100px] h-6 text-center">
                  <span></span>
                </div>
                <div className="px-[10px] py-[2px] border border-black text-xs w-[100px] h-6 text-center">
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto max-h-[100vh] w-full">
            <table className="table-auto min-w-full bg-white border-2 border-blue-800 text-xs">
              <thead className=" bg-white">
                <tr>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Progress
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Confirm Delivery
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Product Delivery
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Request Delivery
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Order_No
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Customer
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      NAV_Goods_Name
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Material 1/2
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Item <br />
                      CD
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Req <br />
                      CAT
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>Qty</span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Unit <br />
                      Price
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Comp <br />
                      Qty
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Rest <br />
                      Qty
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Rest <br />
                      Sum
                    </span>
                  </th>
                  <th
                    className="px-1 py-2 border border-blue-800 border-dashed text-xs w-auto"
                    rowSpan="2"
                  >
                    <span style={{ transform: "translateY(-7px)" }}>
                      Instructions/Remark
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds2}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds3}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds4}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds5}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds6}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds7}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds8}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds9}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <div className="flex justify-between w-full">
                        <span
                          style={{ transform: "translateY(-7px)" }}
                          className="text-left"
                        >
                          {row.pds10}
                        </span>
                        <span
                          style={{ transform: "translateY(-7px)" }}
                          className="text-right"
                        >
                          {row.pds101}
                        </span>
                      </div>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds11}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds12}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds13}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds14}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds15}
                      </span>
                    </td>
                    <td className="py-0.25 px-2 border border-blue-800 border-dashed text-center w-auto">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {row.pds16}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tbody className="bg-[#cffff9] font-bold text-[12px]">
                {summaryRows1.map((item, index) => (
                  <tr key={index}>
                    <td colSpan="10" className="py-1 text-right text-[#000080]">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {item.label}
                      </span>
                    </td>
                    <td className="pr-0.5 text-right">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {item.value}
                      </span>
                    </td>
                    <td colSpan="2" className="pr-0.5 text-right">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {item.qty}
                      </span>
                    </td>
                    <td className="pr-0.5 text-right">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {item.sumTotal}
                      </span>
                    </td>
                    <td className="pr-0.5 text-center">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {item.total}
                      </span>
                    </td>
                    <td className="pr-0.5 text-right">
                      <span style={{ transform: "translateY(-7px)" }}>
                        {item.remark}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
