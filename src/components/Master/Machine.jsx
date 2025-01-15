import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import Papa from "papaparse";

export function Machine() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchResource = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/resource/fetch-resource"
      );
      // console.log("Fetched data:", response.data);
      setData(response.data.data.resource || []);
    } catch (error) {
      // console.error("Error fetching resource:", error);
    }
  };

  useEffect(() => {
    fetchResource();
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

  const handleChange = (e, resourceCd, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[resourceCd]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[resourceCd] = updatedData[resourceCd] || {};
      updatedData[resourceCd][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = async (resourceCd, field) => {
    const newValue = editedData[resourceCd]?.[field];
    const oldValue = data.find((row) => row.Resource_CD === resourceCd)?.[
      field
    ];

    if (newValue !== oldValue) {
      try {
        const payload = {
          Resource_CD: resourceCd,
          [field]: newValue === "" ? null : newValue,
        };

        const response = await axios.put(
          "http://localhost:4000/resource/update-resource",
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.Resource_CD === resourceCd
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
        Resource_CD: row.Resource_CD,
        Change_CD: row.Change_CD,
        ResourceG_CD: row.ResourceG_CD,
        CostG_CD: row.CostG_CD,
        ManageG_CD: row.ManageG_CD,
        Resource_Name: row.Resource_Name,
        Resource_Abb: row.Resource_Abb,
        Resource_Symbol: row.Resource_Symbol,
        Resource_Mark: row.Resource_Mark,
        Use: row.Use,
        End: row.End,
        M_Coefficient: row.M_Coefficient,
        P_Coefficient: row.P_Coefficient,
        Before: row.Before,
        After: row.After,
        T_Type: row.T_Type,
        P_Type: row.P_Type,
        Resource_Remark: row.Resource_Remark,
      }));
  
      const csv = Papa.unparse(csvData); // แปลง JSON เป็น CSV
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  
      // ดาวน์โหลดไฟล์ CSV
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "Machine_data.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  const columns = [
    {
      name: "Resource_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Resource_CD]?.Resource_CD !== undefined
              ? editedData[row.Resource_CD]?.Resource_CD
              : row.Resource_CD || ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "Resource_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "Resource_CD")}
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
            editedData[row.Resource_CD]?.Change_CD !== undefined
              ? editedData[row.Resource_CD]?.Change_CD
              : row.Change_CD || ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "Change_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "Change_CD")}
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
            editedData[row.Resource_CD]?.ResourceG_CD !== undefined
              ? editedData[row.Resource_CD]?.ResourceG_CD
              : row.ResourceG_CD || ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "ResourceG_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "ResourceG_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "CostG_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Resource_CD]?.CostG_CD !== undefined
              ? editedData[row.Resource_CD]?.CostG_CD
              : row.CostG_CD || ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "CostG_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "CostG_CD")}
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
            editedData[row.Resource_CD]?.ManageG_CD !== undefined
              ? editedData[row.Resource_CD]?.ManageG_CD
              : row.ManageG_CD || ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "ManageG_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "ManageG_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Resource_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Resource_CD]?.Resource_Name !== undefined
              ? editedData[row.Resource_CD]?.Resource_Name
              : row.Resource_Name || ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "Resource_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "Resource_Name")}
        />
      ),
      width: "190px",
    },
    {
      name: "Resource_Abb",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Resource_CD]?.Resource_Abb !== undefined
              ? editedData[row.Resource_CD]?.Resource_Abb
              : row.Resource_Abb || ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "Resource_Abb")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "Resource_Abb")}
        />
      ),
      width: "190px",
    },
    {
      name: "Resource_Symbol",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Resource_CD]?.Resource_Symbol !== undefined
              ? editedData[row.Resource_CD]?.Resource_Symbol
              : row.Resource_Symbol || ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "Resource_Symbol")}
          onKeyDown={(e) =>
            handleKeyDown(e, row.Resource_CD, "Resource_Symbol")
          }
        />
      ),
      width: "190px",
    },
    {
      name: "Resource_Mark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Resource_CD]?.Resource_Mark !== undefined
              ? editedData[row.Resource_CD]?.Resource_Mark
              : row.Resource_Mark || ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "Resource_Mark")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "Resource_Mark")}
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
      width: "120px",
    },
    {
      name: "End",
      selector: (row, index) => (
        <input
          type="checkbox"
          checked={row.End}
          onChange={(e) => handleEdit(index, "End", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "120px",
    },
    {
      name: "M_Coefficient",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Resource_CD]?.M_Coefficient !== undefined
              ? editedData[row.Resource_CD]?.M_Coefficient
              : row.M_Coefficient || ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "M_Coefficient")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "M_Coefficient")}
        />
      ),
      width: "190px",
    },
    {
      name: "P_Coefficient",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Resource_CD]?.P_Coefficient !== undefined
              ? editedData[row.Resource_CD]?.P_Coefficient
              : row.P_Coefficient ?? ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "P_Coefficient")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "P_Coefficient")}
        />
      ),
      width: "170px",
    },
    {
      name: "Before",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Resource_CD]?.Before !== undefined
              ? editedData[row.Resource_CD]?.Before
              : row.Before ?? ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "Before")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "Before")}
        />
      ),
      width: "170px",
    },
    {
      name: "After",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Resource_CD]?.After !== undefined
              ? editedData[row.Resource_CD]?.After
              : row.After ?? ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "After")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "After")}
        />
      ),
      width: "170px",
    },
    {
      name: "T_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Resource_CD]?.T_Type !== undefined
              ? editedData[row.Resource_CD]?.T_Type
              : row.T_Type || ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "T_Type")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "T_Type")}
        />
      ),
      width: "190px",
    },
    {
      name: "P_Type",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Resource_CD]?.P_Type !== undefined
              ? editedData[row.Resource_CD]?.P_Type
              : row.P_Type || ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "P_Type")}
          onKeyDown={(e) => handleKeyDown(e, row.Resource_CD, "P_Type")}
        />
      ),
      width: "190px",
    },
    {
      name: "Resource_Remark",
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
            editedData[row.Resource_CD]?.Resource_Remark !== undefined
              ? editedData[row.Resource_CD]?.Resource_Remark
              : row.Resource_Remark || ""
          }
          onChange={(e) => handleChange(e, row.Resource_CD, "Resource_Remark")}
          onKeyDown={(e) =>
            handleKeyDown(e, row.Resource_CD, "Resource_Remark")
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
                Machine <br /> 機械マスタ
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
