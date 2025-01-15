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

export function Master2() {
  const buttonsData = [
    { label: "手配品目マスタ", subLabel: "(手配番号)", textColor: "text-red-500", isFaded: true },
    { label: "管理区分0マスタ", subLabel: "(旧品種区分)", textColor: "text-red-500", isFaded: true },
    { label: "超硬熱処理マスタ", subLabel: "(H·WㆍHW)", textColor: "text-red-500", isFaded: true },
    { label: "依頼区分1マスタ", subLabel: "(製造·転売·他)", textColor: "text-red-500", isFaded: true },
    { label: "管理区分1マスタ", subLabel: "(品種区分)", textColor: "text-red-500", isFaded: true },
    { label: "Coating", subLabel: "（CVD･PVD･DLC）", to: "/coating" },
    { label: "依頼区分2マスタ", subLabel: "(一般・在庫・他)", textColor: "text-red-500", isFaded: true },
    { label: "管理区分2マスタ", subLabel: "(顧客生産品)", textColor: "text-red-500", isFaded: true },
    { label: "契約書類マスタ", subLabel: "(基・秘・覚・有無)", textColor: "text-red-500", isFaded: true },
    { label: "依頼区分3マスタ", subLabel: "(完成·修理·他)", textColor: "text-red-500", isFaded: true },
    { label: "管理区分3マスタ", subLabel: "(用途)", textColor: "text-red-500", isFaded: true },
    { label: "単価区分マスタ", subLabel: "(正单·仮单)", textColor: "text-red-500", isFaded: true },
    { label: "単位マスタ", textColor: "text-red-500", isFaded: true },
    { label: "管理区分4マスタ", subLabel: "(形状名称)", textColor: "text-red-500", isFaded: true },
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
