import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import DataTable from "react-data-table-component";
import axios from "axios";

export function WI_Amount() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const editedDataRef = useRef(editedData);
  const apiUrl4 = import.meta.env.VITE_APP_API_BASE_URL4;
  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${apiUrl4}/order/td-orders`);
      // console.log("Fetched data:", response.data);
      setData(response.data.data.orders || []);
    } catch (error) {
      // console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
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
          [field]: newValue,
        };

        const response = await axios.put(
          `${apiUrl4}/order/edit-order`,
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

  const columns = [
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
      name: "Product_Grp_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Product_Grp_CD !== undefined
              ? editedData[row.Order_No]?.Product_Grp_CD
              : row.Product_Grp_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Product_Grp_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Product_Grp_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Customer_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Customer_CD !== undefined
              ? editedData[row.Order_No]?.Customer_CD
              : row.Customer_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Customer_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Customer_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "NAV_Name",
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
            editedData[row.Order_No]?.NAV_Name !== undefined
              ? editedData[row.Order_No]?.NAV_Name
              : row.NAV_Name || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "NAV_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "NAV_Name")}
        />
      ),
      width: "300px",
    },
    {
      name: "Product_Name",
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
            editedData[row.Order_No]?.Product_Name !== undefined
              ? editedData[row.Order_No]?.Product_Name
              : row.Product_Name || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Product_Name")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Product_Name")}
        />
      ),
      width: "300px",
    },
    {
      name: "NAV_Size",
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
            editedData[row.Order_No]?.NAV_Size !== undefined
              ? editedData[row.Order_No]?.NAV_Size
              : row.NAV_Size || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "NAV_Size")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "NAV_Size")}
        />
      ),
      width: "320px",
    },
    {
      name: "Product_Size",
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
            editedData[row.Order_No]?.Product_Size !== undefined
              ? editedData[row.Order_No]?.Product_Size
              : row.Product_Size || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Product_Size")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Product_Size")}
        />
      ),
      width: "320px",
    },
    {
      name: "Tolerance",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Tolerance !== undefined
              ? editedData[row.Order_No]?.Tolerance
              : row.Tolerance || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Tolerance")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Tolerance")}
        />
      ),
      width: "180px",
    },
    {
      name: "Customer_Draw",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Customer_Draw !== undefined
              ? editedData[row.Order_No]?.Customer_Draw
              : row.Customer_Draw || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Customer_Draw")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Customer_Draw")}
        />
      ),
      width: "220px",
    },
    {
      name: "Company_Draw",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Company_Draw !== undefined
              ? editedData[row.Order_No]?.Company_Draw
              : row.Company_Draw || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Company_Draw")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Company_Draw")}
        />
      ),
      width: "220px",
    },
    {
      name: "Product_Draw",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Product_Draw !== undefined
              ? editedData[row.Order_No]?.Product_Draw
              : row.Product_Draw || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Product_Draw")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Product_Draw")}
        />
      ),
      width: "220px",
    },
    {
      name: "Quantity",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Quantity !== undefined
              ? editedData[row.Order_No]?.Quantity
              : row.Quantity ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Quantity")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Quantity")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pd_Target_Qty",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Pd_Target_Qty !== undefined
              ? editedData[row.Order_No]?.Pd_Target_Qty
              : row.Pd_Target_Qty ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Pd_Target_Qty")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Pd_Target_Qty")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pd_Complete_Qty",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Pd_Complete_Qty !== undefined
              ? editedData[row.Order_No]?.Pd_Complete_Qty
              : row.Pd_Complete_Qty ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Pd_Complete_Qty")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Pd_Complete_Qty")}
        />
      ),
      width: "190px",
    },
    {
      name: "I_Complete_Qty",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.I_Complete_Qty !== undefined
              ? editedData[row.Order_No]?.I_Complete_Qty
              : row.I_Complete_Qty ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "I_Complete_Qty")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "I_Complete_Qty")}
        />
      ),
      width: "190px",
    },
    {
      name: "Shipment_Qty",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Shipment_Qty !== undefined
              ? editedData[row.Order_No]?.Shipment_Qty
              : row.Shipment_Qty ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Shipment_Qty")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Shipment_Qty")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pd_Split_Qty",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Pd_Split_Qty !== undefined
              ? editedData[row.Order_No]?.Pd_Split_Qty
              : row.Pd_Split_Qty ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Pd_Split_Qty")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Pd_Split_Qty")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pd_Calc_Qty",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Pd_Calc_Qty !== undefined
              ? editedData[row.Order_No]?.Pd_Calc_Qty
              : row.Pd_Calc_Qty ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Pd_Calc_Qty")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Pd_Calc_Qty")}
        />
      ),
      width: "190px",
    },
    {
      name: "NG_Qty",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.NG_Qty !== undefined
              ? editedData[row.Order_No]?.NG_Qty
              : row.NG_Qty ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "NG_Qty")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "NG_Qty")}
        />
      ),
      width: "190px",
    },
    {
      name: "Unit_CD",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Unit_CD !== undefined
              ? editedData[row.Order_No]?.Unit_CD
              : row.Unit_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Unit_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Unit_CD")}
        />
      ),
      width: "170px",
    },
    {
      name: "Sales_Grp_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Sales_Grp_CD !== undefined
              ? editedData[row.Order_No]?.Sales_Grp_CD
              : row.Sales_Grp_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Sales_Grp_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Sales_Grp_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Sales_Person_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Sales_Person_CD !== undefined
              ? editedData[row.Order_No]?.Sales_Person_CD
              : row.Sales_Person_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Sales_Person_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Sales_Person_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Request1_CD",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Request1_CD !== undefined
              ? editedData[row.Order_No]?.Request1_CD
              : row.Request1_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Request1_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Request1_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Request2_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Request2_CD !== undefined
              ? editedData[row.Order_No]?.Request2_CD
              : row.Request2_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Request2_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Request2_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Request3_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Request3_CD !== undefined
              ? editedData[row.Order_No]?.Request3_CD
              : row.Request3_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Request3_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Request3_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Material1",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Material1 !== undefined
              ? editedData[row.Order_No]?.Material1
              : row.Material1 || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Material1")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Material1")}
        />
      ),
      width: "190px",
    },
    {
      name: "H_Treatment1",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.H_Treatment1 !== undefined
              ? editedData[row.Order_No]?.H_Treatment1
              : row.H_Treatment1 || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "H_Treatment1")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "H_Treatment1")}
        />
      ),
      width: "190px",
    },
    {
      name: "Material2",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Material2 !== undefined
              ? editedData[row.Order_No]?.Material2
              : row.Material2 || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Material2")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Material2")}
        />
      ),
      width: "190px",
    },
    {
      name: "H_Treatment2",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.H_Treatment2 !== undefined
              ? editedData[row.Order_No]?.H_Treatment2
              : row.H_Treatment2 || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "H_Treatment2")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "H_Treatment2")}
        />
      ),
      width: "190px",
    },
    {
      name: "Material3",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Material3 !== undefined
              ? editedData[row.Order_No]?.Material3
              : row.Material3 || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Material3")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Material3")}
        />
      ),
      width: "190px",
    },
    {
      name: "H_Treatment3",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.H_Treatment3 !== undefined
              ? editedData[row.Order_No]?.H_Treatment3
              : row.H_Treatment3 || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "H_Treatment3")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "H_Treatment3")}
        />
      ),
      width: "190px",
    },
    {
      name: "Material4",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Material4 !== undefined
              ? editedData[row.Order_No]?.Material4
              : row.Material4 || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Material4")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Material4")}
        />
      ),
      width: "190px",
    },
    {
      name: "H_Treatment4",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.H_Treatment4 !== undefined
              ? editedData[row.Order_No]?.H_Treatment4
              : row.H_Treatment4 || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "H_Treatment4")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "H_Treatment4")}
        />
      ),
      width: "190px",
    },
    {
      name: "Material5",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Material5 !== undefined
              ? editedData[row.Order_No]?.Material5
              : row.Material5 || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Material5")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Material5")}
        />
      ),
      width: "190px",
    },
    {
      name: "H_Treatment5",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.H_Treatment5 !== undefined
              ? editedData[row.Order_No]?.H_Treatment5
              : row.H_Treatment5 || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "H_Treatment5")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "H_Treatment5")}
        />
      ),
      width: "190px",
    },
    {
      name: "Coating_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Coating_CD !== undefined
              ? editedData[row.Order_No]?.Coating_CD
              : row.Coating_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Coating_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Coating_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Coating",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Coating !== undefined
              ? editedData[row.Order_No]?.Coating
              : row.Coating || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Coating")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Coating")}
        />
      ),
      width: "190px",
    },
    {
      name: "Quote_No",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Quote_No !== undefined
              ? editedData[row.Order_No]?.Quote_No
              : row.Quote_No || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Quote_No")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Quote_No")}
        />
      ),
      width: "190px",
    },
    {
      name: "Quote_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Quote_CD !== undefined
              ? editedData[row.Order_No]?.Quote_CD
              : row.Quote_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Quote_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Quote_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Od_No_of_Pd_Split",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Od_No_of_Pd_Split !== undefined
              ? editedData[row.Order_No]?.Od_No_of_Pd_Split
              : row.Od_No_of_Pd_Split || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Od_No_of_Pd_Split")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Od_No_of_Pd_Split")}
        />
      ),
      width: "200px",
    },
    {
      name: "ItemO_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.ItemO_CD !== undefined
              ? editedData[row.Order_No]?.ItemO_CD
              : row.ItemO_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "ItemO_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "ItemO_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Item1_CD",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
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
      name: "Item2_CD",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Item2_CD !== undefined
              ? editedData[row.Order_No]?.Item2_CD
              : row.Item2_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Item2_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Item2_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Item3_CD",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Item3_CD !== undefined
              ? editedData[row.Order_No]?.Item3_CD
              : row.Item3_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Item3_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Item3_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Item4_CD",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Item4_CD !== undefined
              ? editedData[row.Order_No]?.Item4_CD
              : row.Item4_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Item4_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Item4_CD")}
        />
      ),
      width: "180px",
    },
    {
      name: "Custom_Material",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Custom_Material !== undefined
              ? editedData[row.Order_No]?.Custom_Material
              : row.Custom_Material || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Custom_Material")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Custom_Material")}
        />
      ),
      width: "210px",
    },
    {
      name: "Od_No_of_Custom",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Od_No_of_Custom !== undefined
              ? editedData[row.Order_No]?.Od_No_of_Custom
              : row.Od_No_of_Custom || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Od_No_of_Custom")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Od_No_of_Custom")}
        />
      ),
      width: "210px",
    },
    {
      name: "Supply_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Supply_CD !== undefined
              ? editedData[row.Order_No]?.Supply_CD
              : row.Supply_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Supply_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Supply_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Destination_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Destination_CD !== undefined
              ? editedData[row.Order_No]?.Destination_CD
              : row.Destination_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Destination_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Destination_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Contract_Docu_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Contract_Docu_CD !== undefined
              ? editedData[row.Order_No]?.Contract_Docu_CD
              : row.Contract_Docu_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Contract_Docu_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Contract_Docu_CD")}
        />
      ),
      width: "210px",
    },
    {
      name: "Price_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Price_CD !== undefined
              ? editedData[row.Order_No]?.Price_CD
              : row.Price_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Price_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Price_CD")}
        />
      ),
      width: "190px",
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
              : row.Unit_Price ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Unit_Price")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Unit_Price")}
        />
      ),
      width: "190px",
    },
    {
      name: "Specific_CD",
      selector: (row) => (
        <input
          className="w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Specific_CD !== undefined
              ? editedData[row.Order_No]?.Specific_CD
              : row.Specific_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Specific_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Specific_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Od_Progress_CD",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Od_Progress_CD !== undefined
              ? editedData[row.Order_No]?.Od_Progress_CD
              : row.Od_Progress_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Od_Progress_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Od_Progress_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Delivery_CD",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Delivery_CD !== undefined
              ? editedData[row.Order_No]?.Delivery_CD
              : row.Delivery_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Delivery_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Delivery_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Schedule_CD",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Schedule_CD !== undefined
              ? editedData[row.Order_No]?.Schedule_CD
              : row.Schedule_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Schedule_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Schedule_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Target_CD",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Target_CD !== undefined
              ? editedData[row.Order_No]?.Target_CD
              : row.Target_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Target_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Target_CD")}
        />
      ),
      width: "190px",
    },
    {
      name: "Product_Docu",
      selector: (row) => row.Product_Docu,
      width: "470px",
    },
    {
      name: "Procure_Docu",
      selector: (row) => row.Procure_Docu,
      width: "470px",
    },
    {
      name: "Outside_Docu",
      selector: (row) => row.Outside_Docu,
      width: "470px",
    },
    {
      name: "Inspect_Docu",
      selector: (row) => row.Inspect_Docu,
      width: "470px",
    },
    {
      name: "Send_Docu",
      selector: (row) => row.Send_Docu,
      width: "470px",
    },
    {
      name: "Supple_Docu",
      selector: (row) => row.Supple_Docu,
      width: "470px",
    },
    {
      name: "Sl_Instructions",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Sl_Instructions !== undefined
              ? editedData[row.Order_No]?.Sl_Instructions
              : row.Sl_Instructions || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Sl_Instructions")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Sl_Instructions")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pd_Instructions",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Pd_Instructions !== undefined
              ? editedData[row.Order_No]?.Pd_Instructions
              : row.Pd_Instructions || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Pd_Instructions")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Pd_Instructions")}
        />
      ),
      width: "190px",
    },
    {
      name: "Pd_Remark",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Pd_Remark !== undefined
              ? editedData[row.Order_No]?.Pd_Remark
              : row.Pd_Remark || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Pd_Remark")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Pd_Remark")}
        />
      ),
      width: "220px",
    },
    {
      name: "I_Remark",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.I_Remark !== undefined
              ? editedData[row.Order_No]?.I_Remark
              : row.I_Remark || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "I_Remark")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "I_Remark")}
        />
      ),
      width: "220px",
    },
    {
      name: "Od_Ctl_Person_CD",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Od_Ctl_Person_CD !== undefined
              ? editedData[row.Order_No]?.Od_Ctl_Person_CD
              : row.Od_Ctl_Person_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Od_Ctl_Person_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Od_Ctl_Person_CD")}
        />
      ),
      width: "220px",
    },
    {
      name: "Od_Reg_Person_CD",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Od_Reg_Person_CD !== undefined
              ? editedData[row.Order_No]?.Od_Reg_Person_CD
              : row.Od_Reg_Person_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Od_Reg_Person_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Od_Reg_Person_CD")}
        />
      ),
      width: "220px",
    },
    {
      name: "Od_Upd_Person_CD",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.Od_Upd_Person_CD !== undefined
              ? editedData[row.Order_No]?.Od_Upd_Person_CD
              : row.Od_Upd_Person_CD || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Od_Upd_Person_CD")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Od_Upd_Person_CD")}
        />
      ),
      width: "220px",
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
      width: "190px",
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
      name: "Product_Delivery",
      selector: (row) => {
        const date = row.Product_Delivery
          ? new Date(row.Product_Delivery)
          : null;
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
            editedData[row.Order_No]?.Product_Delivery ||
            formatDateForInput(row.Product_Delivery)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Product_Delivery")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Product_Delivery")}
        />
      ),
    },
    {
      name: "Confirm_Delivery",
      selector: (row) => {
        const date = row.Confirm_Delivery
          ? new Date(row.Confirm_Delivery)
          : null;
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
            editedData[row.Order_No]?.Confirm_Delivery ||
            formatDateForInput(row.Confirm_Delivery)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Confirm_Delivery")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Confirm_Delivery")}
        />
      ),
    },
    {
      name: "NAV_Delivery",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.NAV_Delivery !== undefined
              ? editedData[row.Order_No]?.NAV_Delivery
              : row.NAV_Delivery || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "NAV_Delivery")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "NAV_Delivery")}
        />
      ),
      width: "200px",
    },
    {
      name: "ASP_Delivery",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="text"
          value={
            editedData[row.Order_No]?.ASP_Delivery !== undefined
              ? editedData[row.Order_No]?.ASP_Delivery
              : row.ASP_Delivery || ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "ASP_Delivery")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "ASP_Delivery")}
        />
      ),
      width: "200px",
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
      name: "Pd_Received_Date",
      selector: (row) => {
        const date = row.Pd_Received_Date
          ? new Date(row.Pd_Received_Date)
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
            editedData[row.Order_No]?.Pd_Received_Date ||
            formatDateForInput(row.Pd_Received_Date)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Pd_Received_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Pd_Received_Date")}
        />
      ),
    },
    {
      name: "Pd_Complete_Date",
      selector: (row) => {
        const date = row.Pd_Complete_Date
          ? new Date(row.Pd_Complete_Date)
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
            editedData[row.Order_No]?.Pd_Complete_Date ||
            formatDateForInput(row.Pd_Complete_Date)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Pd_Complete_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Pd_Complete_Date")}
        />
      ),
    },
    {
      name: "I_Completed_Date",
      selector: (row) => {
        const date = row.I_Completed_Date
          ? new Date(row.I_Completed_Date)
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
            editedData[row.Order_No]?.I_Completed_Date ||
            formatDateForInput(row.I_Completed_Date)
          }
          onChange={(e) => handleChange(e, row.Order_No, "I_Completed_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "I_Completed_Date")}
        />
      ),
    },
    {
      name: "Shipment_Date",
      selector: (row) => {
        const date = row.Shipment_Date ? new Date(row.Shipment_Date) : null;
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
            editedData[row.Order_No]?.Shipment_Date ||
            formatDateForInput(row.Shipment_Date)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Shipment_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Shipment_Date")}
        />
      ),
    },
    {
      name: "Pd_Calc_Date",
      selector: (row) => {
        const date = row.Pd_Calc_Date ? new Date(row.Pd_Calc_Date) : null;
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
            editedData[row.Order_No]?.Pd_Calc_Date ||
            formatDateForInput(row.Pd_Calc_Date)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Pd_Calc_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Pd_Calc_Date")}
        />
      ),
    },
    {
      name: "Calc_Process_Date",
      selector: (row) => {
        const date = row.Calc_Process_Date
          ? new Date(row.Calc_Process_Date)
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
            editedData[row.Order_No]?.Calc_Process_Date ||
            formatDateForInput(row.Calc_Process_Date)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Calc_Process_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Calc_Process_Date")}
        />
      ),
    },
    {
      name: "Rs_Confirm_Date",
      selector: (row) => {
        const date = row.Rs_Confirm_Date ? new Date(row.Rs_Confirm_Date) : null;
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
            editedData[row.Order_No]?.Rs_Confirm_Date ||
            formatDateForInput(row.Rs_Confirm_Date)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Rs_Confirm_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Rs_Confirm_Date")}
        />
      ),
    },
    {
      name: "Od_Reg_Date",
      selector: (row) => {
        const date = row.Od_Reg_Date ? new Date(row.Od_Reg_Date) : null;
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
            editedData[row.Order_No]?.Od_Reg_Date ||
            formatDateForInput(row.Od_Reg_Date)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Od_Reg_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Od_Reg_Date")}
        />
      ),
    },
    {
      name: "Od_Upd_Date",
      selector: (row) => {
        const date = row.Od_Upd_Date ? new Date(row.Od_Upd_Date) : null;
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
            editedData[row.Order_No]?.Od_Upd_Date ||
            formatDateForInput(row.Od_Upd_Date)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Od_Upd_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Od_Upd_Date")}
        />
      ),
    },
    {
      name: "Od_NAV_Upd_Date",
      selector: (row) => {
        const date = row.Od_NAV_Upd_Date ? new Date(row.Od_NAV_Upd_Date) : null;
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
            editedData[row.Order_No]?.Od_NAV_Upd_Date ||
            formatDateForInput(row.Od_NAV_Upd_Date)
          }
          onChange={(e) => handleChange(e, row.Order_No, "Od_NAV_Upd_Date")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Od_NAV_Upd_Date")}
        />
      ),
    },
    {
      name: "Carbide_Cost",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Carbide_Cost !== undefined
              ? editedData[row.Order_No]?.Carbide_Cost
              : row.Carbide_Cost ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Carbide_Cost")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Carbide_Cost")}
        />
      ),
      width: "190px",
    },
    {
      name: "Steel_Cost",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Steel_Cost !== undefined
              ? editedData[row.Order_No]?.Steel_Cost
              : row.Steel_Cost ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Steel_Cost")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Steel_Cost")}
        />
      ),
      width: "190px",
    },
    {
      name: "Outsourcing_Cost",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Outsourcing_Cost !== undefined
              ? editedData[row.Order_No]?.Outsourcing_Cost
              : row.Outsourcing_Cost ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Outsourcing_Cost")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Outsourcing_Cost")}
        />
      ),
      width: "190px",
    },
    {
      name: "H_Treatment_Cost",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.H_Treatment_Cost !== undefined
              ? editedData[row.Order_No]?.H_Treatment_Cost
              : row.H_Treatment_Cost ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "H_Treatment_Cost")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "H_Treatment_Cost")}
        />
      ),
      width: "190px",
    },
    {
      name: "Coating_Cost",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Coating_Cost !== undefined
              ? editedData[row.Order_No]?.Coating_Cost
              : row.Coating_Cost ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Coating_Cost")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Coating_Cost")}
        />
      ),
      width: "190px",
    },
    {
      name: "Electrode_Cost",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Electrode_Cost !== undefined
              ? editedData[row.Order_No]?.Electrode_Cost
              : row.Electrode_Cost ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Electrode_Cost")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Electrode_Cost")}
        />
      ),
      width: "190px",
    },
    {
      name: "Electroplate_Cost",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Electroplate_Cost !== undefined
              ? editedData[row.Order_No]?.Electroplate_Cost
              : row.Electroplate_Cost ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Electroplate_Cost")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Electroplate_Cost")}
        />
      ),
      width: "190px",
    },
    {
      name: "Tooling_Cost",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Tooling_Cost !== undefined
              ? editedData[row.Order_No]?.Tooling_Cost
              : row.Tooling_Cost ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Tooling_Cost")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Tooling_Cost")}
        />
      ),
      width: "190px",
    },
    {
      name: "Jig_Cost",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Jig_Cost !== undefined
              ? editedData[row.Order_No]?.Jig_Cost
              : row.Jig_Cost ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Jig_Cost")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Jig_Cost")}
        />
      ),
      width: "190px",
    },
    {
      name: "Fixtures_Cost",
      selector: (row) => (
        <input
          className="w-full text-center p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Fixtures_Cost !== undefined
              ? editedData[row.Order_No]?.Fixtures_Cost
              : row.Fixtures_Cost ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Fixtures_Cost")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Fixtures_Cost")}
        />
      ),
      width: "190px",
    },
    {
      name: "Od_CAT1",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Od_CAT1}
          style={{ pointerEvents: "none" }}
          onChange={(e) => handleCheckboxChange(e, row, "Od_CAT1")}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Od_CAT2",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Od_CAT2}
          onChange={(e) => handleCheckboxChange(e, row, "Od_CAT2")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Od_CAT3",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Od_CAT3}
          onChange={(e) => handleCheckboxChange(e, row, "Od_CAT3")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Od_Pending",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Od_Pending}
          onChange={(e) => handleCheckboxChange(e, row, "Od_Pending")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Temp_Shipment",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Temp_Shipment}
          onChange={(e) => handleCheckboxChange(e, row, "Temp_Shipment")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Unreceived",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Unreceived}
          onChange={(e) => handleCheckboxChange(e, row, "Unreceived")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Current_Order",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Current_Order}
          onChange={(e) => handleCheckboxChange(e, row, "Current_Order")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Month_Plan",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Month_Plan}
          onChange={(e) => handleCheckboxChange(e, row, "Month_Plan")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Week_Plan",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Week_Plan}
          onChange={(e) => handleCheckboxChange(e, row, "Week_Plan")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Today_Plan",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Today_Plan}
          onChange={(e) => handleCheckboxChange(e, row, "Today_Plan")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Must_Delivery",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Must_Delivery}
          onChange={(e) => handleCheckboxChange(e, row, "Must_Delivery")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Into_I",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Into_I}
          onChange={(e) => handleCheckboxChange(e, row, "Into_I")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Input_Confirm",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Input_Confirm}
          onChange={(e) => handleCheckboxChange(e, row, "Input_Confirm")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Pd_Confirm",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Pd_Confirm}
          onChange={(e) => handleCheckboxChange(e, row, "Pd_Confirm")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "I_Confirm",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.I_Confirm}
          onChange={(e) => handleCheckboxChange(e, row, "I_Confirm")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Od_Confirm",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Od_Confirm}
          onChange={(e) => handleCheckboxChange(e, row, "Od_Confirm")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "I_Target",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.I_Target}
          onChange={(e) => handleCheckboxChange(e, row, "I_Target")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "Urgent_Goods",
      cell: (row) => (
        <input
          type="checkbox"
          checked={row.Urgent_Goods}
          onChange={(e) => handleCheckboxChange(e, row, "Urgent_Goods")}
          style={{ pointerEvents: "none" }}
          className="mx-auto"
        />
      ),
      width: "180px",
    },
    {
      name: "T_Quantity",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.T_Quantity !== undefined
              ? editedData[row.Order_No]?.T_Quantity
              : row.T_Quantity ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "T_Quantity")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "T_Quantity")}
        />
      ),
      width: "190px",
    },
    {
      name: "T_Comp_Qty",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.T_Comp_Qty !== undefined
              ? editedData[row.Order_No]?.T_Comp_Qty
              : row.T_Comp_Qty ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "T_Comp_Qty")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "T_Comp_Qty")}
        />
      ),
      width: "190px",
    },
    {
      name: "T_Remain_Qty",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.T_Remain_Qty !== undefined
              ? editedData[row.Order_No]?.T_Remain_Qty
              : row.T_Remain_Qty ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "T_Remain_Qty")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "T_Remain_Qty")}
        />
      ),
      width: "190px",
    },
    {
      name: "T_Unit_Price",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.T_Unit_Price !== undefined
              ? editedData[row.Order_No]?.T_Unit_Price
              : row.T_Unit_Price ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "T_Unit_Price")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "T_Unit_Price")}
        />
      ),
      width: "190px",
    },
    {
      name: "T_Amount",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.T_Amount !== undefined
              ? editedData[row.Order_No]?.T_Amount
              : row.T_Amount ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "T_Amount")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "T_Amount")}
        />
      ),
      width: "190px",
    },
    {
      name: "N_Amount",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.N_Amount !== undefined
              ? editedData[row.Order_No]?.N_Amount
              : row.N_Amount ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "N_Amount")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "N_Amount")}
        />
      ),
      width: "190px",
    },
    {
      name: "N_Remain_Qty",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.N_Remain_Qty !== undefined
              ? editedData[row.Order_No]?.N_Remain_Qty
              : row.N_Remain_Qty ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "N_Remain_Qty")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "N_Remain_Qty")}
        />
      ),
      width: "190px",
    },
    {
      name: "N_Unit_Price",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.N_Unit_Price !== undefined
              ? editedData[row.Order_No]?.N_Unit_Price
              : row.N_Unit_Price ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "N_Unit_Price")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "N_Unit_Price")}
        />
      ),
      width: "190px",
    },
    {
      name: "Difference",
      selector: (row) => (
        <input
          className="text-center w-full p-2 border rounded-md border-white focus:border-blue-500 focus:outline-none"
          type="number"
          value={
            editedData[row.Order_No]?.Difference !== undefined
              ? editedData[row.Order_No]?.Difference
              : row.Difference ?? ""
          }
          onChange={(e) => handleChange(e, row.Order_No, "Difference")}
          onKeyDown={(e) => handleKeyDown(e, row.Order_No, "Difference")}
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
            <h1 className="text-2xl font-bold text-center mt-3">
              WI Amount Not Match
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
  );
}
