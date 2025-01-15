import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import Papa from "papaparse";

export function Process() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchAllProcess = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/process/fetch-all-process"
      );
      // console.log("Fetched data:", response.data);
      setData(response.data.data.process || []);
    } catch (error) {
      // console.error("Error fetching process:", error);
    }
  };

  useEffect(() => {
    fetchAllProcess();
  }, []);

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

  const handleChange = (e, processCd, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[processCd]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[processCd] = updatedData[processCd] || {};
      updatedData[processCd][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = async (processCd, field) => {
    const newValue = editedData[processCd]?.[field];
    const oldValue = data.find((row) => row.Process_CD === processCd)?.[field];

    if (newValue !== oldValue) {
      try {
        const payload = {
          Process_CD: processCd,
          [field]: newValue === "" ? null : newValue,
        };

        const response = await axios.put(
          "http://localhost:4000/process/update-process",
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.Process_CD === processCd
        );
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
      Process_CD: row.Process_CD,
      Change_CD: row.Change_CD,
      ProcessG_CD: row.ProcessG_CD,
      ResourceG_CD: row.ResourceG_CD,
      ManageG_CD: row.ManageG_CD,
      Manhour_Calc: row.Manhour_Calc,
      Days_Calc: row.Days_Calc,
      Process_Name: row.Process_Name,
      Process_Abb: row.Process_Abb,
      Process_Symbol: row.Process_Symbol,
      Process_Mark: row.Process_Mark,
      Use: row.Use,
      For_Plan: row.For_Plan,
      For_Info: row.For_Info,
      Graph: row.Graph,
      List: row.List,
      Outside_On: row.Outside_On,
      Outside_Off: row.Outside_Off,
      End: row.End,
      Coefficient: row.Coefficient,
      M_Coefficient: row.M_Coefficient,
      P_Coefficient: row.P_Coefficient,
      Before: row.Before,
      After: row.After,
      Operation_Time: row.Operation_Time,
      Std_M_CAT: row.Std_M_CAT,
      Std_M_Time: row.Std_M_Time,
      Std_P_CAT: row.Std_P_CAT,
      Std_P_Time: row.Std_P_Time,
      T_Type: row.T_Type,
      P_Type: row.P_Type,
      S_Type: row.S_Type,
      Process_Remark: row.Process_Remark,
    }));

    const csv = Papa.unparse(csvData); // แปลง JSON เป็น CSV
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    // ดาวน์โหลดไฟล์ CSV
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Process_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns = [
    {
      name: "Process_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.Process_CD !== undefined
              ? editedData[row.Process_CD]?.Process_CD
              : row.Process_CD || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Process_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Process_CD")}
          disabled
        />
      ),
      width: "190px",
    },
    {
      name: "Change_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.Change_CD !== undefined
              ? editedData[row.Process_CD]?.Change_CD
              : row.Change_CD || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Change_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Change_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "ProcessG_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.ProcessG_CD !== undefined
              ? editedData[row.Process_CD]?.ProcessG_CD
              : row.ProcessG_CD || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "ProcessG_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "ProcessG_CD")}
          disabled
        />
      ),
      width: "190px",
    },
    {
      name: "ResourceG_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.ResourceG_CD !== undefined
              ? editedData[row.Process_CD]?.ResourceG_CD
              : row.ResourceG_CD || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "ResourceG_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "ResourceG_CD")}
          disabled
        />
      ),
      width: "190px",
    },
    {
      name: "ManageG_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.ManageG_CD !== undefined
              ? editedData[row.Process_CD]?.ManageG_CD
              : row.ManageG_CD || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "ManageG_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "ManageG_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Manhour_Calc",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.Manhour_Calc !== undefined
              ? editedData[row.Process_CD]?.Manhour_Calc
              : row.Manhour_Calc || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Manhour_Calc")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Manhour_Calc")}
        />
      ),
      width: "190px",
    },
    {
      name: "Days_Calc",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.Days_Calc !== undefined
              ? editedData[row.Process_CD]?.Days_Calc
              : row.Days_Calc || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Days_Calc")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Days_Calc")}
        />
      ),
      width: "190px",
    },
    {
      name: "Process_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.Process_Name !== undefined
              ? editedData[row.Process_CD]?.Process_Name
              : row.Process_Name || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Process_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Process_Name")}
        />
      ),
      width: "190px",
    },
    {
      name: "Process_Abb",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.Process_Abb !== undefined
              ? editedData[row.Process_CD]?.Process_Abb
              : row.Process_Abb || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Process_Abb")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Process_Abb")}
        />
      ),
      width: "190px",
    },
    {
      name: "Process_Symbol",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.Process_Symbol !== undefined
              ? editedData[row.Process_CD]?.Process_Symbol
              : row.Process_Symbol || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Process_Symbol")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Process_Symbol")}
        />
      ),
      width: "190px",
    },
    {
      name: "Process_Mark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.Process_Mark !== undefined
              ? editedData[row.Process_CD]?.Process_Mark
              : row.Process_Mark || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Process_Mark")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Process_Mark")}
        />
      ),
      width: "190px",
    },
    {
      name: "Use",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Use}
          onChange={(e) => handleEdit(row, "Use", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "150px",
    },
    {
      name: "For_Plan",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.For_Plan}
          onChange={(e) => handleEdit(row, "For_Plan", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "150px",
    },
    {
      name: "For_Info",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.For_Info}
          onChange={(e) => handleEdit(row, "For_Info", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "150px",
    },
    {
      name: "Graph",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Graph}
          onChange={(e) => handleEdit(row, "Graph", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "150px",
    },
    {
      name: "List",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.List}
          onChange={(e) => handleEdit(row, "List", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "150px",
    },
    {
      name: "Outside_On",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Outside_On}
          onChange={(e) => handleEdit(row, "Outside_On", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "150px",
    },
    {
      name: "Outside_Off",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.Outside_Off}
          onChange={(e) => handleEdit(row, "Outside_Off", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "150px",
    },
    {
      name: "End",
      selector: (row) => (
        <input
          type="checkbox"
          checked={row.End}
          onChange={(e) => handleEdit(row, "End", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "150px",
    },
    {
      name: "Coefficient",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Process_CD]?.Coefficient !== undefined
              ? editedData[row.Process_CD]?.Coefficient
              : row.Coefficient ?? ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Coefficient")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Coefficient")}
        />
      ),
      width: "180px",
    },
    {
      name: "M_Coefficient",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Process_CD]?.M_Coefficient !== undefined
              ? editedData[row.Process_CD]?.M_Coefficient
              : row.M_Coefficient ?? ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "M_Coefficient")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "M_Coefficient")}
        />
      ),
      width: "180px",
    },
    {
      name: "P_Coefficient",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Process_CD]?.P_Coefficient !== undefined
              ? editedData[row.Process_CD]?.P_Coefficient
              : row.P_Coefficient ?? ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "P_Coefficient")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "P_Coefficient")}
        />
      ),
      width: "180px",
    },
    {
      name: "Before",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Process_CD]?.Before !== undefined
              ? editedData[row.Process_CD]?.Before
              : row.Before ?? ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Before")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Before")}
        />
      ),
      width: "180px",
    },
    {
      name: "After",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Process_CD]?.After !== undefined
              ? editedData[row.Process_CD]?.After
              : row.After ?? ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "After")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "After")}
        />
      ),
      width: "180px",
    },
    {
      name: "Operation_Time",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Process_CD]?.Operation_Time !== undefined
              ? editedData[row.Process_CD]?.Operation_Time
              : row.Operation_Time ?? ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Operation_Time")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Operation_Time")}
        />
      ),
      width: "180px",
    },
    {
      name: "Std_M_CAT",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Process_CD]?.Std_M_CAT !== undefined
              ? editedData[row.Process_CD]?.Std_M_CAT
              : row.Std_M_CAT ?? ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Std_M_CAT")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Std_M_CAT")}
        />
      ),
      width: "180px",
    },
    {
      name: "Std_M_Time",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Process_CD]?.Std_M_Time !== undefined
              ? editedData[row.Process_CD]?.Std_M_Time
              : row.Std_M_Time ?? ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Std_M_Time")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Std_M_Time")}
        />
      ),
      width: "180px",
    },
    {
      name: "Std_P_CAT",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Process_CD]?.Std_P_CAT !== undefined
              ? editedData[row.Process_CD]?.Std_P_CAT
              : row.Std_P_CAT ?? ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Std_P_CAT")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Std_P_CAT")}
        />
      ),
      width: "180px",
    },
    {
      name: "Std_P_Time",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Process_CD]?.Std_P_Time !== undefined
              ? editedData[row.Process_CD]?.Std_P_Time
              : row.Std_P_Time ?? ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Std_P_Time")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Std_P_Time")}
        />
      ),
      width: "180px",
    },
    {
      name: "T_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.T_Type !== undefined
              ? editedData[row.Process_CD]?.T_Type
              : row.T_Type || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "T_Type")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "T_Type")}
        />
      ),
      width: "180px",
    },
    {
      name: "P_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.P_Type !== undefined
              ? editedData[row.Process_CD]?.P_Type
              : row.P_Type || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "P_Type")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "P_Type")}
        />
      ),
      width: "180px",
    },
    {
      name: "S_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Process_CD]?.S_Type !== undefined
              ? editedData[row.Process_CD]?.S_Type
              : row.S_Type || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "S_Type")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "S_Type")}
        />
      ),
      width: "180px",
    },
    {
      name: "Process_Remark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "340px",
            maxWidth: "100%",
          }}
          value={
            editedData[row.Process_CD]?.Process_Remark !== undefined
              ? editedData[row.Process_CD]?.Process_Remark
              : row.Process_Remark || ""
          }
          onChange={(e) => handleChange(e, row.Process_CD, "Process_Remark")}
          onKeyDown={(e) => handleKeyDown(e, row.Process_CD, "Process_Remark")}
        />
      ),
      width: "400px",
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
                Process <br /> 工程マスタ
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
