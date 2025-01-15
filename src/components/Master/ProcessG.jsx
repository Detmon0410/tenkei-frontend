import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import Papa from "papaparse";

export function ProcessG() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchProcessg = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/processg/fetch-processg"
      );
      // console.log("Fetched data:", response.data);
      setData(response.data.data.processg || []);
    } catch (error) {
      // console.error("Error fetching processg:", error);
    }
  };

  useEffect(() => {
    fetchProcessg();
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

  const handleChange = (e, processgCd, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[processgCd]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[processgCd] = updatedData[processgCd] || {};
      updatedData[processgCd][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = async (processgCd, field) => {
    const newValue = editedData[processgCd]?.[field];
    const oldValue = data.find((row) => row.ProcessG_CD === processgCd)?.[
      field
    ];

    if (newValue !== oldValue) {
      try {
        const payload = {
          ProcessG_CD: processgCd,
          [field]: newValue === "" ? null : newValue,
        };

        const response = await axios.put(
          "http://localhost:4000/processg/update-processg",
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.ProcessG_CD === processgCd
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
      ProcessG_CD: row.ProcessG_CD,
      Change_CD: row.Change_CD,
      ManageG_CD: row.ManageG_CD,
      ProcessG_Name: row.ProcessG_Name,
      ProcessG_Abb: row.ProcessG_Abb,
      ProcessG_Symbol: row.ProcessG_Symbol,
      ProcessG_Mark: row.ProcessG_Mark,
      Use: row.Use,
      Use_Object: row.Use_Object,
      Graph: row.Graph,
      List: row.List,
      Coefficient: row.Coefficient,
      M_Coefficient: row.M_Coefficient,
      P_Coefficient: row.P_Coefficient,
      Std_M_CAT: row.Std_M_CAT,
      Std_M_Time: row.Std_M_Time,
      Std_P_CAT: row.Std_P_CAT,
      Std_P_Time: row.Std_P_Time,
      M_Resource_N: row.M_Resource_N,
      S_Resource_N: row.S_Resource_N,
      ProcessG_Remark: row.ProcessG_Remark,
    }));

    const csv = Papa.unparse(csvData); // แปลง JSON เป็น CSV
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    // ดาวน์โหลดไฟล์ CSV
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "ProcessG_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns = [
    {
      name: "ProcessG_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ProcessG_CD]?.ProcessG_CD !== undefined
              ? editedData[row.ProcessG_CD]?.ProcessG_CD
              : row.ProcessG_CD || ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "ProcessG_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "ProcessG_CD")}
          disabled
        />
      ),
      width: "170px",
    },
    {
      name: "Change_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ProcessG_CD]?.Change_CD !== undefined
              ? editedData[row.ProcessG_CD]?.Change_CD
              : row.Change_CD || ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "Change_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "Change_CD")}
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
            editedData[row.ProcessG_CD]?.ManageG_CD !== undefined
              ? editedData[row.ProcessG_CD]?.ManageG_CD
              : row.ManageG_CD || ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "ManageG_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "ManageG_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "ProcessG_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ProcessG_CD]?.ProcessG_Name !== undefined
              ? editedData[row.ProcessG_CD]?.ProcessG_Name
              : row.ProcessG_Name || ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "ProcessG_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "ProcessG_Name")}
        />
      ),
      width: "190px",
    },
    {
      name: "ProcessG_Abb",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ProcessG_CD]?.ProcessG_Abb !== undefined
              ? editedData[row.ProcessG_CD]?.ProcessG_Abb
              : row.ProcessG_Abb || ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "ProcessG_Abb")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "ProcessG_Abb")}
        />
      ),
      width: "190px",
    },
    {
      name: "ProcessG_Symbol",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ProcessG_CD]?.ProcessG_Symbol !== undefined
              ? editedData[row.ProcessG_CD]?.ProcessG_Symbol
              : row.ProcessG_Symbol || ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "ProcessG_Symbol")}
          onKeyDown={(e) =>
            handleKeyDown(e, row.ProcessG_CD, "ProcessG_Symbol")
          }
        />
      ),
      width: "190px",
    },
    {
      name: "ProcessG_Mark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ProcessG_CD]?.ProcessG_Mark !== undefined
              ? editedData[row.ProcessG_CD]?.ProcessG_Mark
              : row.ProcessG_Mark || ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "ProcessG_Mark")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "ProcessG_Mark")}
        />
      ),
      width: "190px",
    },
    {
      name: "Use",
      selector: (row, index) => (
        <input
          type="checkbox"
          checked={row.Use}
          onChange={(e) => handleEdit(index, "Use", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "100px",
    },
    {
      name: "Use_Object",
      selector: (row, index) => (
        <input
          type="checkbox"
          checked={row.Use_Object}
          onChange={(e) => handleEdit(index, "Use_Object", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "150px",
    },
    {
      name: "Graph",
      selector: (row, index) => (
        <input
          type="checkbox"
          checked={row.Graph}
          onChange={(e) => handleEdit(index, "Graph", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "100px",
    },
    {
      name: "List",
      selector: (row, index) => (
        <input
          type="checkbox"
          value={row.List}
          onChange={(e) => handleEdit(index, "List", e.target.value)}
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
          type="text"
          value={
            editedData[row.ProcessG_CD]?.Coefficient !== undefined
              ? editedData[row.ProcessG_CD]?.Coefficient
              : row.Coefficient || ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "Coefficient")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "Coefficient")}
        />
      ),
      width: "190px",
    },
    {
      name: "M_Coefficient",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ProcessG_CD]?.M_Coefficient !== undefined
              ? editedData[row.ProcessG_CD]?.M_Coefficient
              : row.M_Coefficient || ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "M_Coefficient")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "M_Coefficient")}
        />
      ),
      width: "190px",
    },
    {
      name: "P_Coefficient",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ProcessG_CD]?.P_Coefficient !== undefined
              ? editedData[row.ProcessG_CD]?.P_Coefficient
              : row.P_Coefficient || ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "P_Coefficient")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "P_Coefficient")}
        />
      ),
      width: "190px",
    },
    {
      name: "Std_M_CAT",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.ProcessG_CD]?.Std_M_CAT !== undefined
              ? editedData[row.ProcessG_CD]?.Std_M_CAT
              : row.Std_M_CAT || ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "Std_M_CAT")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "Std_M_CAT")}
        />
      ),
      width: "190px",
    },
    {
      name: "Std_M_Time",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ProcessG_CD]?.Std_M_Time !== undefined
              ? editedData[row.ProcessG_CD]?.Std_M_Time
              : row.Std_M_Time ?? ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "Std_M_Time")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "Std_M_Time")}
        />
      ),
      width: "190px",
    },
    {
      name: "Std_P_CAT",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ProcessG_CD]?.Std_P_CAT !== undefined
              ? editedData[row.ProcessG_CD]?.Std_P_CAT
              : row.Std_P_CAT ?? ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "Std_P_CAT")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "Std_P_CAT")}
        />
      ),
      width: "190px",
    },
    {
      name: "Std_P_Time",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ProcessG_CD]?.Std_P_Time !== undefined
              ? editedData[row.ProcessG_CD]?.Std_P_Time
              : row.Std_P_Time ?? ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "Std_P_Time")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "Std_P_Time")}
        />
      ),
      width: "190px",
    },
    {
      name: "M_Resource_N",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ProcessG_CD]?.M_Resource_N !== undefined
              ? editedData[row.ProcessG_CD]?.M_Resource_N
              : row.M_Resource_N ?? ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "M_Resource_N")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "M_Resource_N")}
        />
      ),
      width: "190px",
    },
    {
      name: "S_Resource_N",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.ProcessG_CD]?.S_Resource_N !== undefined
              ? editedData[row.ProcessG_CD]?.S_Resource_N
              : row.S_Resource_N ?? ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "S_Resource_N")}
          onKeyDown={(e) => handleKeyDown(e, row.ProcessG_CD, "S_Resource_N")}
        />
      ),
      width: "190px",
    },
    {
      name: "ProcessG_Remark",
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
            editedData[row.ProcessG_CD]?.ProcessG_Remark !== undefined
              ? editedData[row.ProcessG_CD]?.ProcessG_Remark
              : row.ProcessG_Remark || ""
          }
          onChange={(e) => handleChange(e, row.ProcessG_CD, "ProcessG_Remark")}
          onKeyDown={(e) =>
            handleKeyDown(e, row.ProcessG_CD, "ProcessG_Remark")
          }
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
                ProcessG <br /> 工程Gマスタ
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
