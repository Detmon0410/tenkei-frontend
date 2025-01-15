import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Button = ({ label, subLabel, to, textColor = "text-white", isFaded }) => {
  return (
    <Link
      to={to || "#"}
      className={`font-medium h-24 w-full py-4 px-4 rounded-lg shadow-md flex justify-center items-center text-center transition-all duration-300 ease-in-out transform ${
        isFaded
          ? "bg-[#6A9C89] opacity-60 hover:opacity-50 pointer-events-none"
          : "bg-[#6A9C89] hover:bg-[#45695C] hover:scale-105"
      }`}
    >
      <div className={`text-sm md:text-base lg:text-lg ${textColor}`}>
        {label} <br />
        {subLabel && (
          <span className="text-xs md:text-sm lg:text-base">{subLabel}</span>
        )}
      </div>
    </Link>
  );
};

export function Master3() {
  const buttonsData = [
    { label: "特定品種マスタ", subLabel: "受注進捗区分", textColor: "text-red-500", isFaded: true },
    { label: "マスタ", subLabel: "管理Gマスタ", textColor: "text-red-500", isFaded: true },
    { label: "資源Gマスタ", subLabel: "(管理グループ)", textColor: "text-red-500", isFaded: true },
    { label: "資源Gマスタ", subLabel: "(管理グループ)", textColor: "text-red-500", isFaded: true },
    { label: "目標区分マスタ", textColor: "text-red-500", isFaded: true },
    { label: "手配進捗区分", subLabel: "マスタ", textColor: "text-red-500", isFaded: true },
    { label: "ProcessG", subLabel: "工程Gマスタ", to: "/processG" },
    { label: "納期区分マスタ", textColor: "text-red-500", isFaded: true },
    { label: "計画進捗区分", subLabel: "マスタ", textColor: "text-red-500", isFaded: true },
    { label: "Process", subLabel: "工程マスタ", to: "/process" },
    { label: "日程区分マスタ", textColor: "text-red-500", isFaded: true },
    { label: "Holiday", subLabel: "休日設定", to: "/holiday" },
    { label: "Machine", subLabel: "機械マスタ", to: "/machine" },
    { label: "部品区分マスタ", textColor: "text-red-500", isFaded: true },
  ];

  return (
    <div className="flex bg-[#E9EFEC] h-[100vh]">
      <Sidebar />
      <div className="flex flex-col w-screen mr-2 ml-2">
        <Navbar />
        <p className="font-bold text-2xl md:text-3xl mt-5 ml-10">
          TENKEI Client Menu
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5 p-6 flex-1 overflow-y-auto">
          {buttonsData.map((btn, index) => (
            <Button
              key={index}
              label={btn.label}
              subLabel={btn.subLabel}
              to={btn.to}
              textColor={btn.textColor}
              isFaded={btn.isFaded}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
