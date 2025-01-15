import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import Papa from "papaparse"; 

export function Customer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchCustomer = async () => {
    try {
      const response = await axios.get("http://localhost:4000/order/customer");
      // console.log("Fetched data:", response.data);
      setData(response.data.data.customer || []);
    } catch (error) {
      // console.error("Error fetching customer:", error);
    }
  };

  useEffect(() => {
    fetchCustomer();
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

  const handleChange = (e, customerCd, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[customerCd]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[customerCd] = updatedData[customerCd] || {};
      updatedData[customerCd][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = async (customerCd, field) => {
    const newValue = editedData[customerCd]?.[field];
    const oldValue = data.find((row) => row.Customer_CD === customerCd)?.[
      field
    ];

    if (newValue !== oldValue) {
      try {
        const payload = {
          Customer_CD: customerCd,
          [field]: newValue === "" ? null : newValue,
        };

        const response = await axios.put(
          "http://localhost:4000/order/update-customer",
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.Customer_CD === customerCd
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
      Customer_CD: row.Customer_CD,
      Customer_Name: row.Customer_Name,
      Customer_Name2: row.Customer_Name2,
      Customer_Abb: row.Customer_Abb,
      Customer_Add: row.Customer_Add,
      Customer_Add2: row.Customer_Add2,
      Customer_Add3: row.Customer_Add3,
      Customer_Contact: row.Customer_Contact,
      Customer_TEL: row.Customer_TEL,
      Posting_Group: row.Posting_Group,
      Payment_CD: row.Payment_CD,
      Sl_Person_CD: row.Sl_Person_CD,
      Blocked: row.Blocked,
      Customer_FAX: row.Customer_FAX,
      Branch_No: row.Branch_No,
      Nationality: row.Nationality,
      Customer_Group: row.Customer_Group,
      VAT_Reg_No: row.VAT_Reg_No,
      Customer_Remark: row.Customer_Remark,
    }));

    const csv = Papa.unparse(csvData); // แปลง JSON เป็น CSV
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    // ดาวน์โหลดไฟล์ CSV
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Customer_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns = [
    {
      name: "Customer_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Customer_CD]?.Customer_CD !== undefined
              ? editedData[row.Customer_CD]?.Customer_CD
              : row.Customer_CD || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Customer_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Customer_CD")}
          disabled
        />
      ),
      width: "190px",
    },
    {
      name: "Customer_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "350px",
            maxWidth: "100%",
          }}
          value={
            editedData[row.Customer_CD]?.Customer_Name !== undefined
              ? editedData[row.Customer_CD]?.Customer_Name
              : row.Customer_Name || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Customer_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Customer_Name")}
        />
      ),
      width: "400px",
    },
    {
      name: "Customer_Name2",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Customer_CD]?.Customer_Name2 !== undefined
              ? editedData[row.Customer_CD]?.Customer_Name2
              : row.Customer_Name2 || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Customer_Name2")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Customer_Name2")}
        />
      ),
      width: "190px",
    },
    {
      name: "Customer_Abb",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Customer_CD]?.Customer_Abb !== undefined
              ? editedData[row.Customer_CD]?.Customer_Abb
              : row.Customer_Abb || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Customer_Abb")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Customer_Abb")}
        />
      ),
      width: "210px",
    },
    {
      name: "Customer_Add",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "350px",
            maxWidth: "100%",
          }}
          value={
            editedData[row.Customer_CD]?.Customer_Add !== undefined
              ? editedData[row.Customer_CD]?.Customer_Add
              : row.Customer_Add || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Customer_Add")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Customer_Add")}
        />
      ),
      width: "400px",
    },
    {
      name: "Customer_Add2",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "350px",
            maxWidth: "100%",
          }}
          value={
            editedData[row.Customer_CD]?.Customer_Add2 !== undefined
              ? editedData[row.Customer_CD]?.Customer_Add2
              : row.Customer_Add2 || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Customer_Add2")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Customer_Add2")}
        />
      ),
      width: "400px",
    },
    {
      name: "Customer_Add3",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "350px",
            maxWidth: "100%",
          }}
          value={
            editedData[row.Customer_CD]?.Customer_Add3 !== undefined
              ? editedData[row.Customer_CD]?.Customer_Add3
              : row.Customer_Add3 || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Customer_Add3")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Customer_Add3")}
        />
      ),
      width: "400px",
    },
    {
      name: "Customer_Contact",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "300px",
            maxWidth: "100%",
          }}
          value={
            editedData[row.Customer_CD]?.Customer_Contact !== undefined
              ? editedData[row.Customer_CD]?.Customer_Contact
              : row.Customer_Contact || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Customer_Contact")}
          onKeyDown={(e) =>
            handleKeyDown(e, row.Customer_CD, "Customer_Contact")
          }
        />
      ),
      width: "350px",
    },
    {
      name: "Customer_TEL		",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Customer_CD]?.Customer_TEL !== undefined
              ? editedData[row.Customer_CD]?.Customer_TEL
              : row.Customer_TEL || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Customer_TEL		")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Customer_TEL		")}
        />
      ),
      width: "200px",
    },
    {
      name: "Posting_Group",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Customer_CD]?.Posting_Group !== undefined
              ? editedData[row.Customer_CD]?.Posting_Group
              : row.Posting_Group || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Posting_Group")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Posting_Group")}
        />
      ),
      width: "190px",
    },
    {
      name: "Payment_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Customer_CD]?.Payment_CD !== undefined
              ? editedData[row.Customer_CD]?.Payment_CD
              : row.Payment_CD || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Payment_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Payment_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Sl_Person_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Customer_CD]?.Sl_Person_CD !== undefined
              ? editedData[row.Customer_CD]?.Sl_Person_CD
              : row.Sl_Person_CD || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Sl_Person_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Sl_Person_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Blocked",
      selector: (row, index) => (
        <input
          type="checkbox"
          checked={row.Blocked}
          onChange={(e) => handleEdit(index, "Blocked", e.target.checked)}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "130px",
    },
    {
      name: "Customer_FAX",
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
            editedData[row.Customer_CD]?.Customer_FAX !== undefined
              ? editedData[row.Customer_CD]?.Customer_FAX
              : row.Customer_FAX || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Customer_FAX")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Customer_FAX")}
        />
      ),
      width: "300px",
    },
    {
      name: "Branch_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Customer_CD]?.Branch_No !== undefined
              ? editedData[row.Customer_CD]?.Branch_No
              : row.Branch_No || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Branch_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Branch_No")}
        />
      ),
      width: "180px",
    },
    {
      name: "Nationality",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Customer_CD]?.Nationality !== undefined
              ? editedData[row.Customer_CD]?.Nationality
              : row.Nationality || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Nationality")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Nationality")}
        />
      ),
      width: "180px",
    },
    {
      name: "VAT_Reg_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Customer_CD]?.VAT_Reg_No !== undefined
              ? editedData[row.Customer_CD]?.VAT_Reg_No
              : row.VAT_Reg_No || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "VAT_Reg_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "VAT_Reg_No")}
        />
      ),
      width: "180px",
    },
    {
      name: "Customer_Group",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Customer_CD]?.Customer_Group !== undefined
              ? editedData[row.Customer_CD]?.Customer_Group
              : row.Customer_Group || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Customer_Group")}
          onKeyDown={(e) => handleKeyDown(e, row.Customer_CD, "Customer_Group")}
        />
      ),
      width: "180px",
    },
    {
      name: "Customer_Remark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "350px",
            maxWidth: "100%",
          }}
          value={
            editedData[row.Customer_CD]?.Customer_Remark !== undefined
              ? editedData[row.Customer_CD]?.Customer_Remark
              : row.Customer_Remark || ""
          }
          onChange={(e) => handleChange(e, row.Customer_CD, "Customer_Remark")}
          onKeyDown={(e) =>
            handleKeyDown(e, row.Customer_CD, "Customer_Remark")
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
                Customer <br /> (受注一覧)
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
