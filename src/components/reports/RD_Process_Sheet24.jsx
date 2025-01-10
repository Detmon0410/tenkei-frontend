import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";
import "../fonts/CODE39.ttf";

export default function RD_Process_Sheet24() {
  const { orderNo } = useParams();
  const reportRef = useRef();

  const styles = {
    fontFamily: "CODE39",
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // เดือนเริ่มจาก 0
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // สร้างวันที่และเวลาในรูปแบบที่ต้องการ
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const handleViewPDF = () => {
    const element = reportRef.current;

    const options = {
      filename: `Process_Sheet_${orderNo}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
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

  return (
    <div className="bg-slate-200" style={styles}>
      <div
        ref={reportRef}
        className="
      p-5 
      border 
      border-gray-300 
      w-[794px] 
      h-[1123px] 
      mx-auto 
      bg-white 
      overflow-hidden
    "
      >
        <div className="relative">
          {/* ทำให้ <h1> อยู่ตรงกลาง โดยไม่ขยับ */}
          <h1 className="font-bold text-[20pt] text-[#000080] text-center">
            ＊＊ Process Sheet ＊＊
          </h1>

          {/* ทำให้ <p> อยู่ขวาสุด */}
          <p className="text-[10pt]  font-bold absolute right-0 bottom-0">
            <span className="text-[#000080]">Make_Time:</span>
            <span className="text-[#000000]"> {getCurrentDateTime()}</span>
          </p>
        </div>
        <p className="text-[10pt]  font-bold text-right ">
          <span className="text-[#000080] ">Reg_Person:</span>
          <span className="text-[12pt] text-[#000000] font-normal "></span>
        </p>
        <div className="grid grid-cols-3 gap-4">
          <p className="text-[12pt]  font-bold ">
            <span className="text-[#000080] ">Product Group:</span>
            <span className="text-[16pt] text-[#000000] font-normal "></span>
          </p>
          <p className="text-[12pt] font-bold text-center">
            <span className="text-[#000080] ">Parts Name:</span>
            <span className="text-[16pt] text-[#000000] font-normal "></span>
          </p>
          <p className="text-[18pt]  font-normal text-right">
            <span className="text-[#000000] ">*{orderNo}*</span>
          </p>
        </div>
        <div className="grid grid-cols-3 pr-96 gap-5 ">
          <p className="text-[12pt] font-bold">
            <span className="text-[#000080]">Order_No</span>
          </p>
          <p className="text-[12pt] font-bold">
            <span className="text-[#000080]">Parts_No</span>
          </p>
          <p className="text-[12pt] font-bold">
            <span className="text-[#000080]">Pt_Qty</span>
          </p>
        </div>
        <div className="grid grid-cols-6 pr-20">
          <p className="text-[20pt] font-bold w-80">
            <span className="text-[#000000]">
              BOI2101029<br></br>
            </span>
            <span className="text-[12pt] text-[#000080]">Customer:</span>
            <span className="text-[16pt] text-[#000000] font-normal">
              {" "}
              CERRIER MEXICO (E-B)
            </span>
          </p>
          <p className="text-[20pt] font-bold pl-8 ">
            <span className="text-[#000000]"> - 00</span>
          </p>
          <p className="text-[20pt] font-bold pl-10">
            <span className="text-[#000000]">10</span>
          </p>
          <p className="text-[18pt] font-bold pl-8">
            <span className="text-[#000000]">PCS</span>
          </p>
          <p className="text-[12pt] font-bold w-48">
            <span className="text-[#000000] block">Request 16/03/24</span>
            <span className="text-[#000000] block">Confirm 16/03/24</span>
            <span className="text-[#000000] pl-6 block">Parts 16/03/24</span>
          </p>
          <p className="font-bold pl-24 w-24">
            <span className="text-[16pt] text-[#000000] block">Product</span>
            <span className="text-[#000000] text-[26pt] block">17/02</span>
            <span className="text-[#000000] text-[18pt] pl-4 block">TOP</span>
          </p>
        </div>
        <div className="grid grid-cols-3 ">
          <div className="font-bold w-80">
            <div className="flex items-baseline">
              <span className="text-[#000080] pl-6">Name:</span>
              <span className="text-[14pt] text-[#000000] font-normal ml-1">
                GROOVING PLUG
              </span>
            </div>
            <div className="flex items-baseline mt-2 mb-4">
              <span className="text-[#000080] pl-9">Size:</span>
              <span className="text-[14pt] text-[#000000] font-normal ml-1">
                LOB MO 008 (VTN-001)
              </span>
            </div>
            <div>
              <p className="text-[10pt] font-normal text-[#000000]">
                Draw: Cus:LOB MO 008 (VTN-001)
              </p>
            </div>
          </div>
          <div className="text-[12pt] font-bold pl-20">
            <div>
              <span className="text-[#000080]">Specific</span>
            </div>
            <div className="">
              <span className="text-[#000000] font-normal"></span>
            </div>
            <div>
              <span className="text-[#000080]">Pt_Material</span>
            </div>
            <div>
              <span className="text-[#000000] font-normal"></span>
            </div>
          </div>
          <div className="text-[12pt] font-bold ">
            <div>
              <span className="text-[#000080]">Pt_Remark</span>
            </div>
            <div>
              <textarea className=" text-[10pt] font-normal text-[#000000] w-full h-16 p-2 border border-black  focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
          </div>
        </div>
        <div className="flex space-x-24">
          <div>
            <span className="text-[#000080] text-[10pt] font-bold">Info</span>
          </div>
          <div>
            <span className="text-[#000080] text-[10pt] font-bold mr-1">
              Pl_Quote_OdPt_No:
            </span>
            <span className="text-[#000000] text-[12pt] font-bold">
              BOI221100600
            </span>
          </div>
        </div>
        <div className="grid grid-cols-[110px_auto] gap-2 h-[90vh]">
  {/* Left Section */}
  <div className="flex flex-col justify-between h-full overflow-hidden">
    <div className="flex-grow flex flex-col justify-between">
      <table className="border-collapse border-[2px] border-[#000080] text-[10pt] w-full">
        <tbody>
          {Array.from({ length: 6 }).map((_, index) => (
            <tr key={index}>
              <td className="border-[1px] border-[#000080] p-1 w-[20px]">
                {index + 1}
              </td>
              <td className="border-[1px] border-[#000080] p-1 w-full"></td>
            </tr>
          ))}
        </tbody>
      </table>
      <span className="text-[#000080] text-[10pt] font-bold mt-2">
        Connect_Pt_Info
      </span>
      <table className="border-collapse border-[2px] border-[#000080] text-[10pt] w-full mt-2">
        <tbody>
          <tr>
            <td className="border-[1px] border-[#000080] w-[20px]">Od No</td>
            <td className="border-[1px] border-[#000080] w-full"></td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#000080] w-[20px]">Pt No</td>
            <td className="border-[1px] border-[#000080] w-full"></td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#000080] w-[20px]">Pr No</td>
            <td className="border-[1px] border-[#000080] w-full"></td>
          </tr>
        </tbody>
      </table>
      <div className="flex-grow overflow-y-auto">
        <table className="border-collapse border-[2px] border-[#000080] text-[8pt] w-full">
          <thead>
            <tr>
              <th className="border-[1px] border-[#000080]">No</th>
              <th className="border-[1px] border-[#000080]">Process</th>
              <th className="border-[1px] border-[#000080]">Pl_Date</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 36 }).map((_, index) => (
              <tr key={index}>
                <td className="border-[1px] border-[#000080] text-center">
                  {index + 1}
                </td>
                <td className="border-[1px] border-[#000080]"></td>
                <td className="border-[1px] border-[#000080]"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="flex flex-col h-full">
    <div className="flex-grow overflow-y-auto">
      <table className="border-collapse border-[3px] border-[#000080] text-[9pt] w-full">
        <thead className="text-[#000080]">
          <tr>
            <th className="border-[2px] border-[#000080] p-1">No</th>
            <th className="border-[2px] border-[#000080] p-1">Process</th>
            <th className="border-[2px] border-[#000080] p-1">Pl_Date</th>
            <th className="border-[2px] border-[#000080] w-60 p-1">
              Instructions
            </th>
            <th className="border-[2px] border-[#000080] p-1">Rs Time</th>
            <th className="border-[2px] border-[#000080] p-1">Rs Date</th>
            <th className="border-[2px] border-[#000080] p-1">Rs Qty</th>
            <th className="border-[2px] border-[#000080] p-1">Person Sign</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 24 }).map((_, index) => (
            <tr key={index}>
              <td className="border-[1px] text-[#000080] border-[#000080] p-1 text-center font-bold">
                {index + 1}
              </td>
              <td className="border-[1px] border-[#000080] p-1"></td>
              <td className="border-[1px] border-[#000080] p-1"></td>
              <td className="border-[1px] border-[#000080] p-1"></td>
              <td className="border-[1px] border-[#000080] p-1"></td>
              <td className="border-[1px] border-[#000080] p-1"></td>
              <td className="border-[1px] border-[#000080] p-1"></td>
              <td className="border-[1px] border-[#000080] p-1"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
      </div>

      <button onClick={handleViewPDF}>View as PDF</button>
    </div>
  );
}
