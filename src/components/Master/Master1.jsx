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

export function Master1() {
  const buttonsData = [
    { label: "事業部マスタ", textColor: "text-red-500", isFaded: true },
    { label: "Customer", subLabel: "(受注一覧)", to: "/customer" },
    { label: "事業所マスタ", textColor: "text-red-500", isFaded: true },
    { label: "Vendor", subLabel: "仕入先マスタ", to: "/vendor" },
    { label: "WorkG", subLabel: "(社内·社外)", to: "/workG" },
    { label: "社内外区分マスタ", subLabel: "(受注一覧)", textColor: "text-red-500", isFaded: true },
    { label: "担当者マスタ", textColor: "text-red-500", isFaded: true },
    { label: "納品区分マスタ", subLabel: "(依頼元·客先直送)", textColor: "text-red-500", isFaded: true },
    { label: "Worker", subLabel: "社員マスタ", to: "/worker" },
    { label: "納品先区分マスタ", subLabel: "(手配元・社内外)", textColor: "text-red-500", isFaded: true },
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
