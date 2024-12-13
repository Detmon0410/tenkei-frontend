import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function None_FG_Data() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);

  const fetchCost = async () => {
    try {
      const response = await axios.get("http://localhost:4000/cost/fetch-cost");
      const formattedData = response.data.data.cost.map((row) => ({
        ...row,
        CPD: formatDateForInput(row.CPD),
        Cs_Complete_Date: formatDateForInput(row.Cs_Complete_Date),
        Cs_Register_Date: formatDateForInput(row.Cs_Register_Date),
        Cs_Modify_Date: formatDateForInput(row.Cs_Modify_Date),
      }));
      // console.log("Fetched data:", response.data);
      setData(formattedData);
    } catch (error) {
      // console.error("Error fetching cost:", error);
    }
  };

  useEffect(() => {
    fetchCost();
  }, []);

  useEffect(() => {
    const initialEditedData = data.reduce((acc, row) => {
      if (!editedData[row.Cost_No]) {
        acc[row.Cost_No] = { ...row };
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

  const handleChange = (e, costNo, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[costNo]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[costNo] = updatedData[costNo] || {};
      updatedData[costNo][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = async (costNo, field) => {
    const newValue = editedData[costNo]?.[field];
    const oldValue = data.find((row) => row.Cost_No === costNo)?.[field];

    if (newValue !== oldValue) {
      try {
        // หาข้อมูล `Order_No` และ `Parts_No` ที่เกี่ยวข้องกับ `costNo`
        const rowData = data.find((row) => row.Cost_No === costNo);

        // สร้าง payload ที่ส่งค่า `Order_No`, `Parts_No`, และ `Cost_No` เสมอ
        const payload = {
          Order_No: rowData?.Order_No, // ใช้ข้อมูลเดิมจาก row
          Parts_No: rowData?.Parts_No,
          Cost_No: costNo,
          [field]: newValue === "" ? null : newValue, // ฟิลด์ที่ต้องการอัปเดต
        };

        console.log("Payload to be sent:", payload);

        // ส่ง request ไปยัง backend
        const response = await axios.put(
          "http://localhost:4000/cost/update-cost",
          payload
        );

        // อัปเดตข้อมูลใน frontend
        const updatedData = [...data];
        const rowIndex = updatedData.findIndex((row) => row.Cost_No === costNo);
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

    // console.log(`Row Cost_No: ${row.Cost_No}, Field: ${field}, Checked: ${isChecked}`);

    // setData((prevData) =>
    //   prevData.map((item) =>
    //     item.Cost_No === row.Cost_No ? { ...item, [field]: isChecked } : item
    //   )
    // );
  };

  const filteredData = data.filter((row) => {
    return Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const columns = [
    {
      name: "Order_No",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Cost_No]?.Order_No ?? row.Order_No ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "Order_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "Order_No")}
          disabled
        />
      ),
      width: "150px",
    },
    {
      name: "Parts_No",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Cost_No]?.Parts_No ?? row.Parts_No ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "Parts_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "Parts_No")}
          disabled
        />
      ),
      width: "150px",
    },
    {
      name: "Cost_No",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Cost_No]?.Cost_No ?? row.Cost_No ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "Cost_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "Cost_No")}
          disabled
        />
      ),
      width: "150px",
    },
    {
      name: "Process_No",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Cost_No]?.Process_No ?? row.Process_No ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "Process_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "Process_No")}
        />
      ),
      width: "150px",
    },
    {
      name: "OdPt_No",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Cost_No]?.OdPt_No ?? row.OdPt_No ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "OdPt_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "OdPt_No")}
        />
      ),
      width: "150px",
    },
    {
      name: "OdPtCs_No",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Cost_No]?.OdPtCs_No ?? row.OdPtCs_No ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "OdPtCs_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "OdPtCs_No")}
        />
      ),
      width: "150px",
    },
    {
      name: "OdPtPr_No",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Cost_No]?.OdPtPr_No ?? row.OdPtPr_No ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "OdPtPr_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "OdPtPr_No")}
        />
      ),
      width: "150px",
    },
    {
      name: "CMC",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Cost_No]?.CMC ?? row.CMC ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "CMC")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "CMC")}
        />
      ),
      width: "200px",
    },
    {
      name: "CMT",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.Cost_No]?.CMT ?? row.CMT ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "CMT")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "CMT")}
        />
      ),
      width: "150px",
    },
    {
      name: "CPC",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Cost_No]?.CPC ?? row.CPC ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "CPC")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "CPC")}
        />
      ),
      width: "200px",
    },
    {
      name: "CPT",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.Cost_No]?.CPT ?? row.CPT ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "CPT")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "CPT")}
        />
      ),
      width: "150px",
    },
    {
      name: "CPD",
      selector: (row) => {
        const date = row.CPD ? new Date(row.CPD) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "170px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.Cost_No]?.CPD ?? formatDateForInput(row.CPD) ?? ""
          }
          onChange={(e) => handleChange(e, row.Cost_No, "CPD")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "CPD")}
        />
      ),
    },
    {
      name: "CPN",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.Cost_No]?.CPN ?? row.CPN ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "CPN")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "CPN")}
        />
      ),
      width: "150px",
    },
    {
      name: "Cs_Progress_CD",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Cost_No]?.Cs_Progress_CD ?? row.Cs_Progress_CD ?? ""
          }
          onChange={(e) => handleChange(e, row.Cost_No, "Cs_Progress_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "Cs_Progress_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Complete_Date",
      selector: (row) => {
        const date = row.Cs_Complete_Date
          ? new Date(row.Cs_Complete_Date)
          : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "170px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.Cost_No]?.Cs_Complete_Date ??
            formatDateForInput(row.Cs_Complete_Date) ??
            ""
          }
          onChange={(e) => handleChange(e, row.Cost_No, "Cs_Complete_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "Cs_Complete_Date")}
        />
      ),
    },
    {
      name: "Cs_Complete_Qty",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Cost_No]?.Cs_Complete_Qty ??
            row.Cs_Complete_Qty ??
            ""
          }
          onChange={(e) => handleChange(e, row.Cost_No, "Cs_Complete_Qty")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "Cs_Complete_Qty")}
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Label_CSV",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Cs_Label_CSV ?? false}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Cs_Label_CSV")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_All_Complete",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Cs_All_Complete ?? false}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Cs_All_Complete")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Cs_Order_All_Complete",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Cs_Order_All_Complete ?? false}
          style={{ pointerEvents: "none" }}
          onChange={(e) =>
            handleCheckboxChange(e, row, "Cs_Order_All_Complete")
          }
          className="mx-auto"
        />
      ),
      width: "220px",
    },
    {
      name: "Cs_Parts_Complete",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Cs_Parts_Complete ?? false}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Cs_Parts_Complete")}
          className="mx-auto"
        />
      ),
      width: "200px",
    },
    {
      name: "Cs_Final_Complete",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Cs_Final_Complete ?? false}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Cs_Final_Complete")}
          className="mx-auto"
        />
      ),
      width: "200px",
    },
    {
      name: "Cs_Remark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={editedData[row.Cost_No]?.Cs_Remark ?? row.Cs_Remark ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "Cs_Remark")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "Cs_Remark")}
        />
      ),
      width: "200px",
    },
    {
      name: "Cs_Register_Date",
      selector: (row) => {
        const date = row.Cs_Register_Date
          ? new Date(row.Cs_Register_Date)
          : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "170px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.Cost_No]?.Cs_Register_Date ??
            formatDateForInput(row.Cs_Register_Date) ??
            ""
          }
          onChange={(e) => handleChange(e, row.Cost_No, "Cs_Register_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "Cs_Register_Date")}
        />
      ),
    },
    {
      name: "Cs_Modify_Date",
      selector: (row) => {
        const date = row.Cs_Modify_Date ? new Date(row.Cs_Modify_Date) : null;
        if (!date || isNaN(date)) return "";

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear() + 543;

        return `${day}/${month}/${year}`;
      },
      width: "170px",
      cell: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="date"
          value={
            editedData[row.Cost_No]?.Cs_Modify_Date ??
            formatDateForInput(row.Cs_Modify_Date) ??
            ""
          }
          onChange={(e) => handleChange(e, row.Cost_No, "Cs_Modify_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "Cs_Modify_Date")}
        />
      ),
    },
    {
      name: "Cs_Reg_Person_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Cost_No]?.Cs_Reg_Person_CD ??
            row.Cs_Reg_Person_CD ??
            ""
          }
          onChange={(e) => handleChange(e, row.Cost_No, "Cs_Reg_Person_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "Cs_Reg_Person_CD")}
        />
      ),
      width: "200px",
    },
    {
      name: "Cs_Upd_Person_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Cost_No]?.Cs_Upd_Person_CD ??
            row.Cs_Upd_Person_CD ??
            ""
          }
          onChange={(e) => handleChange(e, row.Cost_No, "Cs_Upd_Person_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "Cs_Upd_Person_CD")}
        />
      ),
      width: "200px",
    },
    {
      name: "Sequence_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={editedData[row.Cost_No]?.Sequence_No ?? row.Sequence_No ?? ""}
          onChange={(e) => handleChange(e, row.Cost_No, "Sequence_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Cost_No, "Sequence_No")}
        />
      ),
      width: "150px",
    },
    {
      name: "ProcessCD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.ProcessCD}
          onChange={(e) => handleEdit(index, "ProcessCD", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Comp_Month",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Comp_Month}
          onChange={(e) => handleEdit(index, "Comp_Month", e.target.value)}
        />
      ),
      width: "150px",
    },
    {
      name: "Amount",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={row.Amount}
          onChange={(e) => handleEdit(index, "Amount", e.target.value)}
        />
      ),
      width: "150px",
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
                None FG DATA In NAV
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
