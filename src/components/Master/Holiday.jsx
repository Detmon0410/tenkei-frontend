import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import Papa from "papaparse";

export function Holiday() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchSet = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/holiday/fetch-holiday"
      );
      const formattedData = response.data.data.holiday.map((row) => ({
        ...row,
        Holiday: formatDateForInput(row.Holiday),
      }));
      // console.log("Fetched data:", response.data);
      setData(formattedData);
    } catch (error) {
      // console.error("Error fetching holiday:", error);
    }
  };

  useEffect(() => {
    fetchSet();
  }, []);

  useEffect(() => {
    const initialEditedData = data.reduce((acc, row) => {
      if (!editedData[row.Holiday]) {
        acc[row.Holiday] = { ...row };
      }
      return acc;
    }, {});

    if (Object.keys(initialEditedData).length > 0) {
      setEditedData(initialEditedData);
    }
  }, [data]);

  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    if (isNaN(date)) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleChange = (e, holiday, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[holiday]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[holiday] = updatedData[holiday] || {};
      updatedData[holiday][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = async (holiday, field) => {
    const newValue = editedData[holiday]?.[field];
    const oldValue = data.find((row) => row.Holiday === holiday)?.[field];

    if (newValue !== oldValue) {
      try {
        const payload = {
          Holiday: holiday,
          [field]: newValue === "" ? null : newValue,
        };

        const response = await axios.put(
          "http://localhost:4000/holiday/update-holiday",
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.Holiday === holiday
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
      Holiday: row.Holiday,
      Holiday_Name: row.Holiday_Name,
      Coefficient: row.Coefficient,
      Holiday_Remark: row.Holiday_Remark,
    }));

    const csv = Papa.unparse(csvData); // แปลง JSON เป็น CSV
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    // ดาวน์โหลดไฟล์ CSV
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Holiday_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns = [
    {
      name: "Holiday",
      selector: (row) => {
        const date = row.Holiday ? new Date(row.Holiday) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "190px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.Holiday]?.Holiday ??
            formatDateForInput(row.Holiday) ??
            ""
          }
          onChange={(e) => handleChange(e, row.Holiday, "Holiday")}
          onKeyDown={(e) => handleKeyDown(e, row.Holiday, "Holiday")}
          disabled
        />
      ),
    },
    {
      name: "Holiday_Name",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Holiday]?.Holiday_Name ?? row.Holiday_Name ?? ""
          }
          onChange={(e) => handleChange(e, row.Holiday, "Holiday_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.Holiday, "Holiday_Name")}
        />
      ),
      width: "190px",
    },
    {
      name: "Coefficient",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.Holiday]?.Coefficient ?? row.Coefficient ?? ""}
          onChange={(e) => handleChange(e, row.Holiday, "Coefficient")}
          onKeyDown={(e) => handleKeyDown(e, row.Holiday, "Coefficient")}
        />
      ),
      width: "150px",
    },
    {
      name: "Holiday_Remark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "240px",
            maxWidth: "100%",
          }}
          value={
            editedData[row.Holiday]?.Holiday_Remark ?? row.Holiday_Remark ?? ""
          }
          onChange={(e) => handleChange(e, row.Holiday, "Holiday_Remark")}
          onKeyDown={(e) => handleKeyDown(e, row.Holiday, "Holiday_Remark")}
        />
      ),
      width: "280px",
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
              Holiday <br /> 休日設定
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
