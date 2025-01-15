import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import Papa from "papaparse";

export function Vendor() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchVendor = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/vendor/fetch-vendor"
      );
      // console.log("Fetched data:", response.data);
      setData(response.data.data.vendor || []);
    } catch (error) {
      // console.error("Error fetching vendor:", error);
    }
  };

  useEffect(() => {
    fetchVendor();
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

  const handleChange = (e, vendorCd, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[vendorCd]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[vendorCd] = updatedData[vendorCd] || {};
      updatedData[vendorCd][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = async (vendorCd, field) => {
    const newValue = editedData[vendorCd]?.[field];
    const oldValue = data.find((row) => row.Vendor_CD === vendorCd)?.[field];

    if (newValue !== oldValue) {
      try {
        const payload = {
          Vendor_CD: vendorCd,
          [field]: newValue === "" ? null : newValue,
        };

        const response = await axios.put(
          "http://localhost:4000/vendor/update-vendor",
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.Vendor_CD === vendorCd
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

  const handleCheckboxChange = (e, row, field) => {
    const isChecked = e.target.checked;

    // console.log(`Row Order_No: ${row.Order_No}, Field: ${field}, Checked: ${isChecked}`);

    // setData((prevData) =>
    //   prevData.map((item) =>
    //     item.Order_No === row.Order_No ? { ...item, [field]: isChecked } : item
    //   )
    // );
  };

  const filteredData = data.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // ฟังก์ชันสำหรับ Export ข้อมูลเป็น CSV
  const exportToCsv = () => {
    const csvData = data.map((row) => ({
      Vendor_CD: row.Vendor_CD,
      Vendor_Name: row.Vendor_Name,
      Vendor_Name2: row.Vendor_Name2,
      Vendor_Abb: row.Vendor_Abb,
      Vendor_Add: row.Vendor_Add,
      Vendor_Add2: row.Vendor_Add2,
      Vendor_Add3: row.Vendor_Add3,
      Vendor_Contact: row.Vendor_Contact,
      Vendor_TEL: row.Vendor_TEL,
      Posting_Group: row.Posting_Group,
      Payment_CD: row.Payment_CD,
      Blocked: row.Blocked,
      VAT_Reg_No: row.VAT_Reg_No,
      Branch_No: row.Branch_No,
      Nationality: row.Nationality,
      Vendor_Group: row.Vendor_Group,
      Vendor_Remark: row.Vendor_Remark,
    }));

    const csv = Papa.unparse(csvData); // แปลง JSON เป็น CSV
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    // ดาวน์โหลดไฟล์ CSV
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Vendor_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns = [
    {
      name: "Vendor_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Vendor_CD]?.Vendor_CD !== undefined
              ? editedData[row.Vendor_CD]?.Vendor_CD
              : row.Vendor_CD || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Vendor_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Vendor_CD")}
          disabled
        />
      ),
      width: "190px",
    },
    {
      name: "Vendor_Name",
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
            editedData[row.Vendor_CD]?.Vendor_Name !== undefined
              ? editedData[row.Vendor_CD]?.Vendor_Name
              : row.Vendor_Name || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Vendor_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Vendor_Name")}
        />
      ),
      width: "auto",
    },
    {
      name: "Vendor_Name2",
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
            editedData[row.Vendor_CD]?.Vendor_Name2 !== undefined
              ? editedData[row.Vendor_CD]?.Vendor_Name2
              : row.Vendor_Name2 || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Vendor_Name2")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Vendor_Name2")}
        />
      ),
      width: "auto",
    },
    {
      name: "Vendor_Abb",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Vendor_CD]?.Vendor_Abb !== undefined
              ? editedData[row.Vendor_CD]?.Vendor_Abb
              : row.Vendor_Abb || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Vendor_Abb")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Vendor_Abb")}
        />
      ),
      width: "200px",
    },
    {
      name: "Vendor_Add",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "370px",
            maxWidth: "100%",
          }}
          value={
            editedData[row.Vendor_CD]?.Vendor_Add !== undefined
              ? editedData[row.Vendor_CD]?.Vendor_Add
              : row.Vendor_Add || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Vendor_Add")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Vendor_Add")}
        />
      ),
      width: "410px",
    },
    {
      name: "Vendor_Add2",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "370px",
            maxWidth: "100%",
          }}
          value={
            editedData[row.Vendor_CD]?.Vendor_Add2 !== undefined
              ? editedData[row.Vendor_CD]?.Vendor_Add2
              : row.Vendor_Add2 || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Vendor_Add2")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Vendor_Add2")}
        />
      ),
      width: "410px",
    },
    {
      name: "Vendor_Add3",
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
            editedData[row.Vendor_CD]?.Vendor_Add3 !== undefined
              ? editedData[row.Vendor_CD]?.Vendor_Add3
              : row.Vendor_Add3 || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Vendor_Add3")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Vendor_Add3")}
        />
      ),
      width: "350px",
    },
    {
      name: "Vendor_Contact",
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
            editedData[row.Vendor_CD]?.Vendor_Contact !== undefined
              ? editedData[row.Vendor_CD]?.Vendor_Contact
              : row.Vendor_Contact || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Vendor_Contact")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Vendor_Contact")}
        />
      ),
      width: "350px",
    },
    {
      name: "Vendor_TEL",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Vendor_CD]?.Vendor_TEL !== undefined
              ? editedData[row.Vendor_CD]?.Vendor_TEL
              : row.Vendor_TEL || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Vendor_TEL")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Vendor_TEL")}
        />
      ),
      width: "220px",
    },
    {
      name: "Posting_Group",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Vendor_CD]?.Posting_Group !== undefined
              ? editedData[row.Vendor_CD]?.Posting_Group
              : row.Posting_Group || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Posting_Group")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Posting_Group")}
        />
      ),
      width: "220px",
    },
    {
      name: "Payment_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Vendor_CD]?.Payment_CD !== undefined
              ? editedData[row.Vendor_CD]?.Payment_CD
              : row.Payment_CD || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Payment_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Payment_CD")}
        />
      ),
      width: "200px",
    },
    {
      name: "Blocked",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Blocked}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Blocked")}
          className="mx-auto"
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
            editedData[row.Vendor_CD]?.VAT_Reg_No !== undefined
              ? editedData[row.Vendor_CD]?.VAT_Reg_No
              : row.VAT_Reg_No || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "VAT_Reg_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "VAT_Reg_No")}
        />
      ),
      width: "200px",
    },
    {
      name: "Branch_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Vendor_CD]?.Branch_No !== undefined
              ? editedData[row.Vendor_CD]?.Branch_No
              : row.Branch_No || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Branch_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Branch_No")}
        />
      ),
      width: "190px",
    },
    {
      name: "Nationality",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Vendor_CD]?.Nationality !== undefined
              ? editedData[row.Vendor_CD]?.Nationality
              : row.Nationality || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Nationality")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Nationality")}
        />
      ),
      width: "190px",
    },
    {
      name: "Vendor_Group",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Vendor_CD]?.Vendor_Group !== undefined
              ? editedData[row.Vendor_CD]?.Vendor_Group
              : row.Vendor_Group || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Vendor_Group")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Vendor_Group")}
        />
      ),
      width: "190px",
    },
    {
      name: "Vendor_Remark",
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
            editedData[row.Vendor_CD]?.Vendor_Remark !== undefined
              ? editedData[row.Vendor_CD]?.Vendor_Remark
              : row.Vendor_Remark || ""
          }
          onChange={(e) => handleChange(e, row.Vendor_CD, "Vendor_Remark")}
          onKeyDown={(e) => handleKeyDown(e, row.Vendor_CD, "Vendor_Remark")}
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
                Vendor <br /> 仕入先マスタ
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
