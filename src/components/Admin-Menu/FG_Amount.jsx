import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import Papa from "papaparse";

export function FG_Amount() {
  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState([
    {
      Order_No: "ORD123456",
      Parts_No: "PRT1001",
      Cost_No: "COST001",
      Process_No: "PROC001",
      OdPt_No: "ODPT001",
      OdPtCs_No: "ODPTCS001",
      OdPtPr_No: "ODPTPR001",
      CMC: "CMC001",
      CMT: "CMT001",
      CPC: "CPC001",
      CPT: "CPT001",
      CPD: "2024-11-15",
      CPN: "CPN001",
      Cs_Progress_CD: "PROG001",
      Cs_Complete_Date: "2024-12-10",
      Cs_Complete_Qty: 100,
      Cs_Label_CSV: "LABEL001",
      Cs_All_Complete: true,
      Cs_Order_All_Complete: false,
      Cs_Parts_Complete: true,
      Cs_Final_Complete: false,
      Cs_Remark: "Completed initial process",
      Cs_Register_Date: "2024-11-01",
      Cs_Modify_Date: "2024-11-05",
      Cs_Reg_Person_CD: "USER001",
      Cs_Upd_Person_CD: "USER002",
      Sequence_No: 1,
      ProcessCD: "PROC01",
      Comp_Month: "November",
      TD_Order_Unit_Price: 500,
      Amount: 50000,
      T_Amout: 60000,
      N_Amount: 55000,
      TT_NAV_Od_FG_Unit_Price: 520,
      Difference: -2000,
      Qty: 100,
    }
  ]);

  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  useEffect(() => {
    const initialEditedData = data.reduce((acc, row, index) => {
      if (!editedData[index]) {
        acc[index] = { ...row };
      }
      return acc;
    }, {});

    if (Object.keys(initialEditedData).length > 0) {
      setEditedData(initialEditedData);
    }
  }, [data]);

  const handleChange = (e, orderNo, field) => {
    const newValue = e.target.value;
    setIsChanged(true);

    if (editedDataRef.current[orderNo]?.[field] !== newValue) {
      const updatedEditedData = { ...editedDataRef.current };
      updatedEditedData[orderNo] = updatedEditedData[orderNo] || {};
      updatedEditedData[orderNo][field] = newValue;

      setEditedData(updatedEditedData);
      editedDataRef.current = updatedEditedData;
    }
  };

  const handleSave = async (orderNo, field) => {
    const newValue = editedData[orderNo]?.[field];
    const oldValue = data.find((row) => row.Order_No === orderNo)?.[field];

    if (newValue !== oldValue) {
      try {
        const payload = {
          Order_No: orderNo,
          [field]: newValue === "" ? null : newValue,
        };

        const response = await axios.put(
          "http://localhost:4000/api",
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex((row) => row.Order_No === orderNo);
        if (rowIndex !== -1) {
          updatedData[rowIndex][field] = newValue;
          setData(updatedData);
        }

        alert("Edit Successfully!");
        setIsChanged(false);
      } catch (error) {
        alert("Something went wrong!");
        console.error(error);
      }
    }
  };

  const handleKeyDown = (e, index, field) => {
    if (e.key === "Enter") {
      handleSave(index, field);
      setIsChanged(false);
    }
  };

  const filteredData = data.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // ฟังก์ชันสำหรับ Export ข้อมูลเป็น CSV
  const exportToCsv = () => {
    const csvData = data.map((row) => ({
      Order_No: row.Order_No,
      Parts_No: row.Parts_No,
      Cost_No: row.Cost_No,
      Process_No: row.Process_No,
      OdPt_No: row.OdPt_No,
      OdPtCs_No: row.OdPtCs_No,
      OdPtPr_No: row.OdPtPr_No,
      CMC: row.CMC,
      CMT: row.CMT,
      CPC: row.CPC,
      CPT: row.CPT,
      CPD: row.CPD,
      CPN: row.CPN,
      Cs_Progress_CD: row.Cs_Progress_CD,
      Cs_Complete_Date: row.Cs_Complete_Date,
      Cs_Complete_Qty: row.Cs_Complete_Qty,
      Cs_Label_CSV: row.Cs_Label_CSV,
      Cs_All_Complete: row.Cs_All_Complete,
      Cs_Order_All_Complete: row.Cs_Order_All_Complete,
      Cs_Parts_Complete: row.Cs_Parts_Complete,
      Cs_Final_Complete: row.Cs_Final_Complete,
      Cs_Remark: row.Cs_Remark,
      Cs_Register_Date: row.Cs_Register_Date,
      Cs_Modify_Date: row.Cs_Modify_Date,
      Cs_Reg_Person_CD: row.Cs_Reg_Person_CD,
      Cs_Upd_Person_CD: row.Cs_Upd_Person_CD,
      Sequence_No: row.Sequence_No,
      ProcessCD: row.ProcessCD,
      Comp_Month: row.Comp_Month,
      TD_Order_Unit_Price: row.TD_Order_Unit_Price,
      Amount: row.Amount,
      T_Amout: row.T_Amout,
      N_Amount: row.N_Amount,
      TT_NAV_Od_FG_Unit_Price: row.TT_NAV_Od_FG_Unit_Price,
      Difference: row.Difference,
      Qty: row.Qty,
    }));

    const csv = Papa.unparse(csvData); // แปลง JSON เป็น CSV
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    // ดาวน์โหลดไฟล์ CSV
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "FG_Amount_Data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns = [
    {
      name: "Order_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Order_No ?? row.Order_No ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Order_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Order_No")}
          disabled
        />
      ),
      width: "180px",
    },
    {
      name: "Parts_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Parts_No ?? row.Parts_No ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Parts_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Parts_No")}
          disabled
        />
      ),
      width: "180px",
    },
    {
      name: "Cost_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cost_No ?? row.Cost_No ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cost_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cost_No")}
          disabled
        />
      ),
      width: "180px",
    },
    {
      name: "Process_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Process_No ?? row.Process_No ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Process_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Process_No")}
        />
      ),
      width: "180px",
    },
    {
      name: "OdPt_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.OdPt_No ?? row.OdPt_No ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "OdPt_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "OdPt_No")}
        />
      ),
      width: "180px",
    },
    {
      name: "OdPtCs_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.OdPtCs_No ?? row.OdPtCs_No ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "OdPtCs_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "OdPtCs_No")}
        />
      ),
      width: "180px",
    },
    {
      name: "OdPtPr_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.OdPtPr_No ?? row.OdPtPr_No ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "OdPtPr_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "OdPtPr_No")}
        />
      ),
      width: "180px",
    },
    {
      name: "CMC",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.CMC ?? row.CMC ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "CMC")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "CMC")}
        />
      ),
      width: "180px",
    },
    {
      name: "CMT",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.CMT ?? row.CMT ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "CMT")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "CMT")}
        />
      ),
      width: "180px",
    },
    {
      name: "CPC",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.CPC ?? row.CPC ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "CPC")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "CPC")}
        />
      ),
      width: "180px",
    },
    {
      name: "CPT",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.CPT ?? row.CPT ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "CPT")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "CPT")}
        />
      ),
      width: "180px",
    },
    {
      name: "CPD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.CPD ?? row.CPD ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "CPD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "CPD")}
        />
      ),
      width: "180px",
    },
    {
      name: "CPN",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.CPN ?? row.CPN ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "CPN")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "CPN")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Progress_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cs_Progress_CD ?? row.Cs_Progress_CD ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cs_Progress_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cs_Progress_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Complete_Date",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cs_Complete_Date ?? row.Cs_Complete_Date ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cs_Complete_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cs_Complete_Date")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Complete_Qty",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cs_Complete_Qty ?? row.Cs_Complete_Qty ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cs_Complete_Qty")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cs_Complete_Qty")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Label_CSV",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cs_Label_CSV ?? row.Cs_Label_CSV ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cs_Label_CSV")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cs_Label_CSV")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_All_Complete",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cs_All_Complete ?? row.Cs_All_Complete ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cs_All_Complete")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cs_All_Complete")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Order_All_Complete",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cs_Order_All_Complete ?? row.Cs_Order_All_Complete ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cs_Order_All_Complete")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cs_Order_All_Complete")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Parts_Complete",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cs_Parts_Complete ?? row.Cs_Parts_Complete ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cs_Parts_Complete")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cs_Parts_Complete")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Final_Complete",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cs_Final_Complete ?? row.Cs_Final_Complete ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cs_Final_Complete")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cs_Final_Complete")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Remark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cs_Remark ?? row.Cs_Remark ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cs_Remark")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cs_Remark")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Register_Date",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cs_Register_Date ?? row.Cs_Register_Date ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cs_Register_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cs_Register_Date")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Modify_Date",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cs_Modify_Date ?? row.Cs_Modify_Date ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cs_Modify_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cs_Modify_Date")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Reg_Person_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cs_Reg_Person_CD ?? row.Cs_Reg_Person_CD ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cs_Reg_Person_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cs_Reg_Person_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Upd_Person_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Cs_Upd_Person_CD ?? row.Cs_Upd_Person_CD ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Cs_Upd_Person_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Cs_Upd_Person_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Sequence_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Sequence_No ?? row.Sequence_No ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Sequence_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Sequence_No")}
        />
      ),
      width: "180px",
    },
    {
      name: "ProcessCD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.ProcessCD ?? row.ProcessCD ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "ProcessCD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "ProcessCD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Comp_Month",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Comp_Month ?? row.Comp_Month ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Comp_Month")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Comp_Month")}
        />
      ),
      width: "180px",
    },
    {
      name: "TD_Order_Unit_Price",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.TD_Order_Unit_Price ?? row.TD_Order_Unit_Price ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "TD_Order_Unit_Price")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "TD_Order_Unit_Price")}
        />
      ),
      width: "180px",
    },
    {
      name: "Amount",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Amount ?? row.Amount ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Amount")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Amount")}
        />
      ),
      width: "180px",
    },
    {
      name: "T_Amout",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.T_Amout ?? row.T_Amout ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "T_Amout")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "T_Amout")}
        />
      ),
      width: "180px",
    },
    {
      name: "N_Amount",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.N_Amount ?? row.N_Amount ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "N_Amount")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "N_Amount")}
        />
      ),
      width: "180px",
    },
    {
      name: "TT_NAV_Od_FG_Unit_Price",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.TT_NAV_Od_FG_Unit_Price ?? row.TT_NAV_Od_FG_Unit_Price ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "TT_NAV_Od_FG_Unit_Price")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "TT_NAV_Od_FG_Unit_Price")}
        />
      ),
      width: "180px",
    },
    {
      name: "Difference",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Order_No]?.Difference ?? row.Difference ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Difference")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Difference")}
        />
      ),
      width: "180px",
    },
    {
      name: "Qty",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.Order_No]?.Qty ?? row.Qty ?? ""}
          onChange={(e) => handleChange(e, row.Order_No, "Qty")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Qty")}
        />
      ),
      width: "120px",
    },
  ];

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col p-2 overflow-x-auto">
          <div className="bg-white grid grid-cols-1">
            <div className="bg-white grid grid-cols-1">
              <h1 className="text-2xl font-bold text-center mt-3">
                FG Amount Not Match
              </h1>
              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

              <div className="ml-5 text-lg flex justify-between">
                <input
                  className="border-2 border-gray-500 rounded-md w-52 h-9"
                  type="text"
                  placeholder=" Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  onClick={exportToCsv}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-5"
                >
                  Export to CSV
                </button>
              </div>

              <div className="flex justify-center items-center mt-5">
                <div className="w-full text-center px-5">
                  <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 15, 20]}
                    customStyles={{
                      rows: {
                        style: {
                          minHeight: "50px",
                          textAlign: "center",
                          justifyContent: "center",
                          borderBottom: "1px solid #ccc",
                          borderRight: "1px solid #ccc",
                        },
                      },
                      headCells: {
                        style: {
                          fontSize: "14px",
                          textAlign: "center",
                          justifyContent: "center",
                          border: "1px solid #ccc",
                        },
                      },
                      cells: {
                        style: {
                          textAlign: "center",
                          justifyContent: "center",
                          border: "1px solid #ccc",
                        },
                      },
                      table: {
                        style: {
                          borderCollapse: "collapse",
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
