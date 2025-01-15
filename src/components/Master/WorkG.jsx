import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";
import Papa from "papaparse";

export function WorkG() {
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
      WorkG_CD: row.WorkG_CD,
      WorkG_Name: row.WorkG_Name,
      WorkG_Abb: row.WorkG_Abb,
      WorkG_Symbol: row.WorkG_Symbol,
      WorkG_Mark: row.WorkG_Mark,
      Pl_Object_Grp: row.Pl_Object_Grp,
      Pl_Object: row.Pl_Object,
      Target_Amount: row.Target_Amount,
      WorkG_Remark: row.WorkG_Remark,
    }));

    const csv = Papa.unparse(csvData); // แปลง JSON เป็น CSV
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    // ดาวน์โหลดไฟล์ CSV
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "WorkG_data.csv");
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
      name: "WorkG_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          style={{
            width: "fit-content",
            minWidth: "260px",
            maxWidth: "100%",
          }}
          value={
            editedData[row.WorkG_CD]?.WorkG_Name !== undefined
              ? editedData[row.WorkG_CD]?.WorkG_Name
              : row.WorkG_Name || ""
          }
          onChange={(e) => handleChange(e, row.WorkG_CD, "WorkG_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.WorkG_CD, "WorkG_Name")}
        />
      ),
      width: "310px",
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
      name: "WorkG_Symbol",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.WorkG_CD]?.WorkG_Symbol !== undefined
              ? editedData[row.WorkG_CD]?.WorkG_Symbol
              : row.WorkG_Symbol || ""
          }
          onChange={(e) => handleChange(e, row.WorkG_CD, "WorkG_Symbol")}
          onKeyDown={(e) => handleKeyDown(e, row.WorkG_CD, "WorkG_Symbol")}
        />
      ),
      width: "190px",
    },
    {
      name: "WorkG_Mark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.WorkG_CD]?.WorkG_Mark !== undefined
              ? editedData[row.WorkG_CD]?.WorkG_Mark
              : row.WorkG_Mark || ""
          }
          onChange={(e) => handleChange(e, row.WorkG_CD, "WorkG_Mark")}
          onKeyDown={(e) => handleKeyDown(e, row.WorkG_CD, "WorkG_Mark")}
        />
      ),
      width: "220px",
    },
    {
      name: "Pl_Object_Grp",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.WorkG_CD]?.Pl_Object_Grp !== undefined
              ? editedData[row.WorkG_CD]?.Pl_Object_Grp
              : row.Pl_Object_Grp || ""
          }
          onChange={(e) => handleChange(e, row.WorkG_CD, "Pl_Object_Grp")}
          onKeyDown={(e) => handleKeyDown(e, row.WorkG_CD, "Pl_Object_Grp")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pl_Object",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Pl_Object}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Pl_Object")}
          className="mx-auto"
        />
      ),
      width: "180px",
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
    {
      name: "WorkG_Remark",
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
            editedData[row.WorkG_CD]?.WorkG_Remark !== undefined
              ? editedData[row.WorkG_CD]?.WorkG_Remark
              : row.WorkG_Remark || ""
          }
          onChange={(e) => handleChange(e, row.WorkG_CD, "WorkG_Remark")}
          onKeyDown={(e) => handleKeyDown(e, row.WorkG_CD, "WorkG_Remark")}
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
            <div className="bg-white grid grid-cols-1">
              <h1 className="text-2xl font-bold text-center mt-3">
                WorkG <br /> 部門マスタ
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
