import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";
import { useSorder } from "../hooks/use-sorder";
import { useNavigate } from "react-router-dom";

const Button = ({ label, subLabel, onClick }) => (
  <button
    onClick={onClick}
    className="bg-[#6A9C89] hover:bg-[#45695C] text-white font-medium h-24 w-full py-4 px-4 rounded-lg shadow-md flex justify-center items-center text-center transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    <div className="text-sm md:text-base lg:text-lg">
      {label} <br />
      {subLabel && (
        <span className="text-xs md:text-sm lg:text-base">{subLabel}</span>
      )}
    </div>
  </button>
);

export default function SalesDashboardPage() {
  const navigate = useNavigate();
  const { formLoad } = useSorder();

  const handleButtonClick = async (to) => {
    try {
      const response = await formLoad();

      if (!response || !response.data || !response.data.action) {
        throw new Error("Invalid response from server");
      }

      const data = response.data;

      switch (data.action) {
        case "GoToNewRecord":
          navigate(to); 
          break;

        case "AlertUser":
          await Swal.fire({
            icon: "warning",
            title: "No Data Found",
            html: `
              None of the received order data is available!<br>
              ไม่มีข้อมูลยอดรับออเดอร์แม้แต่รายการเดียว!<br>
              受注データが1件もありません。
            `,
            confirmButtonText: "OK",
          });
          navigate(to);
          break;

        default:
          console.error("Unknown action received:", data.action);
          throw new Error("Unknown action from server");
      }
    } catch (error) {
      console.error("Error in handleButtonClick:", error);
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "An error occurred while checking the data.",
        confirmButtonText: "OK",
      });
    }
  };

  const buttonsData = [
    {
      label: "Sales_Order Info",
      subLabel: "(依頼書別受注処理)",
      to: "/sales-info",
    },
  ];

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <p className="font-bold text-2xl md:text-3xl mt-5 ml-10">
          TENKEI Client Menu
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 p-6 flex-1 overflow-y-auto">
          {buttonsData.map((btn, index) => (
            <Button
              key={index}
              label={btn.label}
              subLabel={btn.subLabel}
              onClick={() => handleButtonClick(btn.to)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
