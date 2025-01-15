import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import Papa from "papaparse";

export function Worker() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchWorker = async () => {
    try {
      const response = await axios.get("http://localhost:4000/order/worker");
      // console.log("Fetched data:", response.data);
      setData(response.data.data.worker || []);
    } catch (error) {
      // console.error("Error fetching worker:", error);
    }
  };

  useEffect(() => {
    fetchWorker();
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

  const handleChange = (e, workerCd, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[workerCd]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[workerCd] = updatedData[workerCd] || {};
      updatedData[workerCd][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = async (workerCd, field) => {
    const newValue = editedData[workerCd]?.[field];
    const oldValue = data.find((row) => row.Worker_CD === workerCd)?.[field];

    if (newValue !== oldValue) {
      try {
        const payload = {
          Worker_CD: workerCd,
          [field]: newValue === "" ? null : newValue,
        };

        const response = await axios.put(
          "http://localhost:4000/order/update-worker",
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.Worker_CD === workerCd
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
      Worker_CD: row.Worker_CD,
      Worker_Pass: row.Worker_Pass,
      WorkerG_CD: row.WorkerG_CD,
      WorkG_CD: row.WorkG_CD,
      Worker_Name: row.Worker_Name,
      Worker_Abb: row.Worker_Abb,
      Worker_JPN: row.Worker_JPN,
      Access_Lv: row.Access_Lv,
      Worker_Level: row.Worker_Level,
      Worker_Menu: row.Worker_Menu,
      Worker_Remark: row.Worker_Remark,
    }));

    const csv = Papa.unparse(csvData); // แปลง JSON เป็น CSV
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    // ดาวน์โหลดไฟล์ CSV
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Worker_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns = [
    {
      name: "Worker_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Worker_CD]?.Worker_CD !== undefined
              ? editedData[row.Worker_CD]?.Worker_CD
              : row.Worker_CD || ""
          }
          onChange={(e) => handleChange(e, row.Worker_CD, "Worker_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Worker_CD, "Worker_CD")}
          disabled
        />
      ),
      width: "170px",
    },
    {
      name: "Worker_Pass",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Worker_CD]?.Worker_Pass !== undefined
              ? editedData[row.Worker_CD]?.Worker_Pass
              : row.Worker_Pass || ""
          }
          onChange={(e) => handleChange(e, row.Worker_CD, "Worker_Pass")}
          onKeyDown={(e) => handleKeyDown(e, row.Worker_CD, "Worker_Pass")}
        />
      ),
      width: "180px",
    },
    {
      name: "WorkerG_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Worker_CD]?.WorkerG_CD !== undefined
              ? editedData[row.Worker_CD]?.WorkerG_CD
              : row.WorkerG_CD || ""
          }
          onChange={(e) => handleChange(e, row.Worker_CD, "WorkerG_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Worker_CD, "WorkerG_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "WorkG_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Worker_CD]?.WorkG_CD !== undefined
              ? editedData[row.Worker_CD]?.WorkG_CD
              : row.WorkG_CD || ""
          }
          onChange={(e) => handleChange(e, row.Worker_CD, "WorkG_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Worker_CD, "WorkG_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Worker_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Worker_CD]?.Worker_Name !== undefined
              ? editedData[row.Worker_CD]?.Worker_Name
              : row.Worker_Name || ""
          }
          onChange={(e) => handleChange(e, row.Worker_CD, "Worker_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.Worker_CD, "Worker_Name")}
        />
      ),
      width: "200px",
    },
    {
      name: "Worker_Abb",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Worker_CD]?.Worker_Abb !== undefined
              ? editedData[row.Worker_CD]?.Worker_Abb
              : row.Worker_Abb || ""
          }
          onChange={(e) => handleChange(e, row.Worker_CD, "Worker_Abb")}
          onKeyDown={(e) => handleKeyDown(e, row.Worker_CD, "Worker_Abb")}
        />
      ),
      width: "180px",
    },
    {
      name: "Worker_JPN",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Worker_CD]?.Worker_JPN !== undefined
              ? editedData[row.Worker_CD]?.Worker_JPN
              : row.Worker_JPN || ""
          }
          onChange={(e) => handleChange(e, row.Worker_CD, "Worker_JPN")}
          onKeyDown={(e) => handleKeyDown(e, row.Worker_CD, "Worker_JPN")}
        />
      ),
      width: "180px",
    },
    {
      name: "Access_Lv",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Worker_CD]?.Access_Lv !== undefined
              ? editedData[row.Worker_CD]?.Access_Lv
              : row.Access_Lv ?? ""
          }
          onChange={(e) => handleChange(e, row.Worker_CD, "Access_Lv")}
          onKeyDown={(e) => handleKeyDown(e, row.Worker_CD, "Access_Lv")}
        />
      ),
      width: "180px",
    },
    {
      name: "Worker_Level",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Worker_CD]?.Worker_Level !== undefined
              ? editedData[row.Worker_CD]?.Worker_Level
              : row.Worker_Level ?? ""
          }
          onChange={(e) => handleChange(e, row.Worker_CD, "Worker_Level")}
          onKeyDown={(e) => handleKeyDown(e, row.Worker_CD, "Worker_Level")}
        />
      ),
      width: "180px",
    },
    {
      name: "Worker_Menu",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Worker_CD]?.Worker_Menu !== undefined
              ? editedData[row.Worker_CD]?.Worker_Menu
              : row.Worker_Menu ?? ""
          }
          onChange={(e) => handleChange(e, row.Worker_CD, "Worker_Menu")}
          onKeyDown={(e) => handleKeyDown(e, row.Worker_CD, "Worker_Menu")}
        />
      ),
      width: "180px",
    },
    {
      name: "Worker_Remark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "250px",
            maxWidth: "100%",
          }}
          value={
            editedData[row.Worker_CD]?.Worker_Remark !== undefined
              ? editedData[row.Worker_CD]?.Worker_Remark
              : row.Worker_Remark ?? ""
          }
          onChange={(e) => handleChange(e, row.Worker_CD, "Worker_Remark")}
          onKeyDown={(e) => handleKeyDown(e, row.Worker_CD, "Worker_Remark")}
        />
      ),
      width: "300px",
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
                Worker <br /> 社員マスタ
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
