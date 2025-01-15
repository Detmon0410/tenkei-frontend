import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import Papa from "papaparse";

export function MonthTarget() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchWorkG = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/workg/fetch-workg"
      );
      // console.log("Fetched data:", response.data);
      setData(response.data.data.workg || []);
    } catch (error) {
      // console.error("Error fetching workg:", error);
    }
  };

  useEffect(() => {
    fetchWorkG();
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

  const handleChange = (e, workgCd, field) => {
    const newValue = e.target.value;
  
    if (editedDataRef.current[workgCd]?.[field] !== newValue) {
      setIsChanged(true); 
  
      const updatedData = { ...editedDataRef.current };
  
      updatedData[workgCd] = updatedData[workgCd] || {};
      updatedData[workgCd][field] = newValue;
  
      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = async (workgCd, field) => {
    const newValue = editedData[workgCd]?.[field];
    const oldValue = data.find((row) => row.WorkG_CD === workgCd)?.[field];

    if (newValue !== oldValue) {
      try {
        const payload = {
          WorkG_CD: workgCd,
          [field]: newValue === "" ? null : newValue,
        };

        const response = await axios.put(
          "http://localhost:4000/workg/update-workg",
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.WorkG_CD === workgCd
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

   const exportToCsv = () => {
      const csvData = data.map((row) => ({
        WorkG_CD: row.WorkG_CD,
        WorkG_Abb: row.WorkG_Abb,
        Target_Amount: row.Target_Amount,
        
      }));
  
      const csv = Papa.unparse(csvData); // แปลง JSON เป็น CSV
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  
      // ดาวน์โหลดไฟล์ CSV
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "Month_Target_Setting_data.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  const columns = [
    {
      name: "WorkG_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.WorkG_CD]?.WorkG_CD !== undefined
              ? editedData[row.WorkG_CD]?.WorkG_CD
              : row.WorkG_CD || ""
          }
          onChange={(e) => handleChange(e, row.WorkG_CD, "WorkG_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.WorkG_CD, "WorkG_CD")}
          disabled
        />
      ),
      width: "170px",
    },
    {
      name: "WorkG_Abb",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.WorkG_CD]?.WorkG_Abb !== undefined
              ? editedData[row.WorkG_CD]?.WorkG_Abb
              : row.WorkG_Abb || ""
          }
          onChange={(e) => handleChange(e, row.WorkG_CD, "WorkG_Abb")}
          onKeyDown={(e) => handleKeyDown(e, row.WorkG_CD, "WorkG_Abb")}
        />
      ),
      width: "200px",
    },
    {
      name: "Target_Amount",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.WorkG_CD]?.Target_Amount !== undefined
              ? editedData[row.WorkG_CD]?.Target_Amount
              : row.Target_Amount ?? ""
          }
          onChange={(e) => handleChange(e, row.WorkG_CD, "Target_Amount")}
          onKeyDown={(e) => handleKeyDown(e, row.WorkG_CD, "Target_Amount")}
        />
      ),
      width: "200px",
    },
  ];

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col p-2 overflow-x-auto">
          <div className="bg-white grid grid-cols-1">
            <h1 className="text-2xl font-bold text-center mt-3">
              Month Target Setting
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
            <div className="flex justify-left items-center mt-5 mb-3">
              <div className="w-full sm:w-auto text-center px-5">
              <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    paginationPerPage={10}
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
  );
}
