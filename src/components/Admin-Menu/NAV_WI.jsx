import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function NAV_WI() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchNAVWI = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/NAVWI/fetch-navwi"
      );
      // console.log("Fetched data:", response.data);
      setData(response.data.data.NAVWI || []);
    } catch (error) {
      // console.error("Error fetching NAVWI:", error);
    }
  };

  useEffect(() => {
    fetchNAVWI();
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
          "http://localhost:4000/navwi/update-navwi",
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.Order_No === orderNo
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

  const columns = [
    {
      name: "Item_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Item_Name !== undefined
              ? editedData[row.Order_No]?.Item_Name
              : row.Item_Name || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Item_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Item_Name")}
        />
      ),
      width: "200px",
    },
    {
      name: "Customer_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Customer_Name !== undefined
              ? editedData[row.Order_No]?.Customer_Name
              : row.Customer_Name || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Customer_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Customer_Name")}
        />
      ),
      width: "180px",
    },
    {
      name: "Order_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Order_No !== undefined
              ? editedData[row.Order_No]?.Order_No
              : row.Order_No || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Order_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Order_No")}
          disabled
        />
      ),
      width: "180px",
    },
    {
      name: "Order_Date",
      selector: (row) => {
        const date = row.Order_Date ? new Date(row.Order_Date) : null;
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
            editedData[row.Order_No]?.Order_Date ||
            formatDateForInput(row.Order_Date)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Order_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Order_Date")}
        />
      ),
    },
    {
      name: "Request_Delivery",
      selector: (row) => {
        const date = row.Request_Delivery
          ? new Date(row.Request_Delivery)
          : null;
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
            editedData[row.Order_No]?.Request_Delivery ||
            formatDateForInput(row.Request_Delivery)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Request_Delivery")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Request_Delivery")}
        />
      ),
    },
    {
      name: "NAV_Name",
      selector: (row) => (
        <input
          className="p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          style={{
            width: "fit-content",
            minWidth: "250px",
            maxWidth: "100%",
          }}
          type="text"
          value={
            editedData[row.Order_No]?.NAV_Name !== undefined
              ? editedData[row.Order_No]?.NAV_Name
              : row.NAV_Name || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "NAV_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "NAV_Name")}
        />
      ),
      width: "auto",
    },
    {
      name: "NAV_Size",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          style={{
            width: "fit-content",
            minWidth: "250px",
            maxWidth: "100%",
          }}
          type="text"
          value={
            editedData[row.Order_No]?.NAV_Size !== undefined
              ? editedData[row.Order_No]?.NAV_Size
              : row.NAV_Size || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "NAV_Size")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "NAV_Size")}
        />
      ),
      width: "auto",
    },
    {
      name: "Item1_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Item1_CD !== undefined
              ? editedData[row.Order_No]?.Item1_CD
              : row.Item1_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Item1_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Item1_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Quantity",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Quantity !== undefined
              ? editedData[row.Order_No]?.Quantity
              : row.Quantity || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Quantity")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Quantity")}
        />
      ),
      width: "180px",
    },
    {
      name: "Unit_Price",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Unit_Price !== undefined
              ? editedData[row.Order_No]?.Unit_Price
              : row.Unit_Price || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Unit_Price")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Unit_Price")}
        />
      ),
      width: "180px",
    },
    {
      name: "Amount",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Amount !== undefined
              ? editedData[row.Order_No]?.Amount
              : row.Amount || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Amount")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Amount")}
        />
      ),
      width: "180px",
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
                NAV_WI Copy DATA
              </h1>
              <hr className="my-6 h-0.5 bg-gray-500 opacity-100 dark:opacity-50 border-y-[1px] border-gray-300" />

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
