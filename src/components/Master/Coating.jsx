import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function Coating() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);
  const apiUrl4 = import.meta.env.VITE_APP_API_BASE_URL4;
  const fetchCoating = async () => {
    try {
      const response = await axios.get(
        `${apiUrl4}/coating/fetch-coating`
      );
      // console.log("Fetched data:", response.data);
      setData(response.data.data.coating || []);
    } catch (error) {
      // console.error("Error fetching coating:", error);
    }
  };

  useEffect(() => {
    fetchCoating();
  }, []);

  useEffect(() => {
    if (Object.keys(editedData).length === 0 && data.length > 0) {
      const initialEditedData = data.reduce((acc, row) => {
        acc[row.Coating_CD] = { ...row };
        return acc;
      }, {});
      setEditedData(initialEditedData);
    }
  }, [data]);
  

  const handleChange = (e, coatingCd, field) => {
    const newValue = e.target.value;

    if (editedDataRef.current[coatingCd]?.[field] !== newValue) {
      setIsChanged(true);

      const updatedData = { ...editedDataRef.current };

      updatedData[coatingCd] = updatedData[coatingCd] || {};
      updatedData[coatingCd][field] = newValue;

      setEditedData(updatedData);
      editedDataRef.current = updatedData;
    }
  };

  const handleSave = async (coatingCd, field) => {
    const newValue = editedData[coatingCd]?.[field];
    const oldValue = data.find((row) => row.Coating_CD === coatingCd)?.[field];

    if (newValue !== oldValue) {
      try {
        const payload = {
          Coating_CD: coatingCd,
          [field]: newValue === "" ? null : newValue,
        };

        const response = await axios.put(
          `${apiUrl4}/coating/update-coating`,
          payload
        );

        const updatedData = [...data];
        const rowIndex = updatedData.findIndex(
          (row) => row.Coating_CD === coatingCd
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
      name: "Coating_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Coating_CD]?.Coating_CD !== undefined
              ? editedData[row.Coating_CD]?.Coating_CD
              : row.Coating_CD || ""
          }
          onChange={(e) => handleChange(e, row.Coating_CD, "Coating_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Coating_CD, "Coating_CD")}
          disabled
        />
      ),
      width: "170px",
    },
    {
      name: "Coating_Name",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Coating_CD]?.Coating_Name !== undefined
              ? editedData[row.Coating_CD]?.Coating_Name
              : row.Coating_Name || ""
          }
          onChange={(e) => handleChange(e, row.Coating_CD, "Coating_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.Coating_CD, "Coating_Name")}
        />
      ),
      width: "190px",
    },
    {
      name: "Coating_Abb",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Coating_CD]?.Coating_Abb !== undefined
              ? editedData[row.Coating_CD]?.Coating_Abb
              : row.Coating_Abb || ""
          }
          onChange={(e) => handleChange(e, row.Coating_CD, "Coating_Abb")}
          onKeyDown={(e) => handleKeyDown(e, row.Coating_CD, "Coating_Abb")}
        />
      ),
      width: "190px",
    },
    {
      name: "Coating_Symbol",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Coating_CD]?.Coating_Symbol !== undefined
              ? editedData[row.Coating_CD]?.Coating_Symbol
              : row.Coating_Symbol || ""
          }
          onChange={(e) => handleChange(e, row.Coating_CD, "Coating_Symbol")}
          onKeyDown={(e) => handleKeyDown(e, row.Coating_CD, "Coating_Symbol")}
        />
      ),
      width: "190px",
    },
    {
      name: "Coating_Remark",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Coating_CD]?.Coating_Remark !== undefined
              ? editedData[row.Coating_CD]?.Coating_Remark
              : row.Coating_Remark || ""
          }
          onChange={(e) => handleChange(e, row.Coating_CD, "Coating_Remark")}
          onKeyDown={(e) => handleKeyDown(e, row.Coating_CD, "Coating_Remark")}
        />
      ),
      width: "190px",
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
                Coating <br /> （CVD･PVD･DLC）
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
              <div className="flex justify-left items-center mt-5 mb-3">
                <div className="w-full sm:w-auto text-center px-5">
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
