import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";

export function WeekTargetSetting() {
  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState([
    {
      St_Target_Week1: "2024-12-01T10:00:00Z",
      Ed_Target_Week1: "2024-12-07T18:00:00Z",
      St_Target_Week2: "2024-12-08T09:00:00Z",
      Ed_Target_Week2: "2024-12-14T17:00:00Z",
      St_Target_Week3: "2024-12-15T08:00:00Z",
      Ed_Target_Week3: "2024-12-21T20:00:00Z",
      St_Target_Week4: "2024-12-22T10:30:00Z",
      Ed_Target_Week4: "2024-12-28T19:00:00Z",
      St_Target_Week5: "2024-12-29T11:00:00Z",
      Ed_Target_Week5: "2025-01-04T21:00:00Z",
    },
    {
      St_Target_Week1: "2024-11-01T08:00:00Z",
      Ed_Target_Week1: "2024-11-07T18:30:00Z",
      St_Target_Week2: "2024-11-08T09:30:00Z",
      Ed_Target_Week2: "2024-11-14T16:30:00Z",
      St_Target_Week3: "2024-11-15T10:00:00Z",
      Ed_Target_Week3: "2024-11-21T19:00:00Z",
      St_Target_Week4: "2024-11-22T08:45:00Z",
      Ed_Target_Week4: "2024-11-28T17:15:00Z",
      St_Target_Week5: "2024-11-29T10:30:00Z",
      Ed_Target_Week5: "2024-12-05T20:00:00Z",
    },
    {
      St_Target_Week1: "2024-10-01T07:00:00Z",
      Ed_Target_Week1: "2024-10-07T19:00:00Z",
      St_Target_Week2: "2024-10-08T09:00:00Z",
      Ed_Target_Week2: "2024-10-14T18:30:00Z",
      St_Target_Week3: "2024-10-15T08:00:00Z",
      Ed_Target_Week3: "2024-10-21T20:30:00Z",
      St_Target_Week4: "2024-10-22T10:30:00Z",
      Ed_Target_Week4: "2024-10-28T17:00:00Z",
      St_Target_Week5: "2024-10-29T11:00:00Z",
      Ed_Target_Week5: "2024-11-04T21:30:00Z",
    },
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

  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    if (isNaN(date)) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleChange = (e, orderNo, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[orderNo]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[orderNo] = updatedData[orderNo] || {};
      updatedData[orderNo][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = (Id, field) => {
    const newValue = editedData[Id]?.[field];
    const oldValue = data.find((row) => row.ID === Id)?.[field];

    if (newValue !== oldValue) {
      try {
        const updatedData = [...data];
        const rowIndex = updatedData.findIndex((row) => row.ID === Id);

        if (rowIndex !== -1) {
          updatedData[rowIndex][field] = newValue;
          setData(updatedData);

          localStorage.setItem("weekTargetData", JSON.stringify(updatedData));
          alert("Edit Successfully!");
        }

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

  const formatDateForSearch = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date)) return "";
  
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
  
    return `${month}/${day}/${year}`;
  };

  const filteredData = data.filter((row) => {
    return Object.values(row).some((value) => {
      const formattedValue = formatDateForSearch(value);
      return formattedValue.includes(searchTerm);
    });
  });

  const columns = [
    {
      name: "St_Target_Week1",
      selector: (row) => {
        const date = row.St_Target_Week1 ? new Date(row.St_Target_Week1) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "180px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.St_Target_Week1 ||
            formatDateForInput(row.St_Target_Week1)
          }
          onChange={(e) => handleChange(e, row.ID, "St_Target_Week1")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "St_Target_Week1")}
        />
      ),
    },
    {
      name: "Ed_Target_Week1",
      selector: (row) => {
        const date = row.Ed_Target_Week1 ? new Date(row.Ed_Target_Week1) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "180px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.Ed_Target_Week1 ||
            formatDateForInput(row.Ed_Target_Week1)
          }
          onChange={(e) => handleChange(e, row.ID, "Ed_Target_Week1")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ed_Target_Week1")}
        />
      ),
    },
    {
      name: "St_Target_Week2",
      selector: (row) => {
        const date = row.St_Target_Week2 ? new Date(row.St_Target_Week2) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "180px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.St_Target_Week2 ||
            formatDateForInput(row.St_Target_Week2)
          }
          onChange={(e) => handleChange(e, row.ID, "St_Target_Week2")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "St_Target_Week2")}
        />
      ),
    },
    {
      name: "Ed_Target_Week2",
      selector: (row) => {
        const date = row.Ed_Target_Week2 ? new Date(row.Ed_Target_Week2) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "180px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.Ed_Target_Week2 ||
            formatDateForInput(row.Ed_Target_Week2)
          }
          onChange={(e) => handleChange(e, row.ID, "Ed_Target_Week2")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ed_Target_Week2")}
        />
      ),
    },
    {
      name: "St_Target_Week3",
      selector: (row) => {
        const date = row.St_Target_Week3 ? new Date(row.St_Target_Week3) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "180px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.St_Target_Week3 ||
            formatDateForInput(row.St_Target_Week3)
          }
          onChange={(e) => handleChange(e, row.ID, "St_Target_Week3")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "St_Target_Week3")}
        />
      ),
    },
    {
      name: "Ed_Target_Week3",
      selector: (row) => {
        const date = row.Ed_Target_Week3 ? new Date(row.Ed_Target_Week3) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "180px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.Ed_Target_Week3 ||
            formatDateForInput(row.Ed_Target_Week3)
          }
          onChange={(e) => handleChange(e, row.ID, "Ed_Target_Week3")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ed_Target_Week3")}
        />
      ),
    },
    {
      name: "St_Target_Week4",
      selector: (row) => {
        const date = row.St_Target_Week4 ? new Date(row.St_Target_Week4) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "180px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.St_Target_Week4 ||
            formatDateForInput(row.St_Target_Week4)
          }
          onChange={(e) => handleChange(e, row.ID, "St_Target_Week4")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "St_Target_Week4")}
        />
      ),
    },
    {
      name: "Ed_Target_Week4",
      selector: (row) => {
        const date = row.Ed_Target_Week4 ? new Date(row.Ed_Target_Week4) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "180px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.Ed_Target_Week4 ||
            formatDateForInput(row.Ed_Target_Week4)
          }
          onChange={(e) => handleChange(e, row.ID, "Ed_Target_Week4")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ed_Target_Week4")}
        />
      ),
    },
    {
      name: "St_Target_Week5",
      selector: (row) => {
        const date = row.St_Target_Week5 ? new Date(row.St_Target_Week5) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "180px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.St_Target_Week5 ||
            formatDateForInput(row.St_Target_Week5)
          }
          onChange={(e) => handleChange(e, row.ID, "St_Target_Week5")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "St_Target_Week5")}
        />
      ),
    },
    {
      name: "Ed_Target_Week5",
      selector: (row) => {
        const date = row.Ed_Target_Week5 ? new Date(row.Ed_Target_Week5) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "180px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.ID]?.Ed_Target_Week5 ||
            formatDateForInput(row.Ed_Target_Week5)
          }
          onChange={(e) => handleChange(e, row.ID, "Ed_Target_Week5")}
          onKeyDown={(e) => handleKeyDown(e, row.ID, "Ed_Target_Week5")}
        />
      ),
    },
  ];

  return (
    <div className="flex bg-[#E9EFEC] h-[150vh]">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex-1 flex-col p-2 overflow-x-auto">
          <div className="bg-white grid grid-cols-1">
            <div className="bg-white grid grid-cols-1">
              <h1 className="text-2xl font-bold text-center mt-3">
                Week Target Setting
              </h1>
              <hr className="my-6 h-0.5 bg-gray-500 opacity-150 dark:opacity-50 border-y-[1px] border-gray-300" />

              <div className="ml-5 text-lg">
                <input
                  className="border-2 border-gray-500 rounded-md w-52 h-9"
                  type="text"
                  placeholder=" Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
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
