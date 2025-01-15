import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Button = ({ label, subLabel, to, textColor = "text-white" }) => (
    <Link 
        to={to} 
        className="bg-[#6A9C89] hover:bg-[#45695C] text-white font-medium h-24 w-full py-4 px-4 rounded-lg shadow-md flex justify-center items-center text-center transition-all duration-300 ease-in-out transform hover:scale-105"
    >
        <div className={`text-sm md:text-base lg:text-lg ${textColor}`}>
            {label} <br /> 
            {subLabel && <span className="text-xs md:text-sm lg:text-base">{subLabel}</span>}
        </div>
    </Link>
);

export function AdminMenuDashboardPage() {
    const buttonsData = [
        { label: 'NAV FG', subLabel: 'Copy DATA', to: '/nav-fg' },
        { label: 'NAV WI', subLabel: 'Copy DATA', to: '/nav-wi' },
        { label: 'Delivery Date', subLabel: 'Change', to: '/delivery-date' },
        { label: 'System', subLabel: 'Restore', textColor: "text-red-600", to: '/system-restore' },
        { label: 'None FG DATA', subLabel: 'In NAV', to: '/none-fg-data' },
        { label: 'None WI DATA', subLabel: 'In NAV', to: '/none-wi-data' },
        { label: 'Month Target', subLabel: 'Setting', textColor: "text-blue-700", to: '/month-target' },
        { label: 'System', subLabel: 'Maintenance', textColor: "text-red-600", to: '/system-maintenance' },
        { label: 'None FG DATA', subLabel: 'In TENKEI', to: '/none-fg-data-tenkei' },
        { label: 'None WI DATA', subLabel: 'In TENKEI', to: '/none-wi-data-tenkei' },
        { label: 'Week Target', subLabel: 'Setting', to: '/week-target-setting' },
        { label: 'ASP連携CSV', subLabel: '書出し', to: '/asp-csv-1' },
        { label: 'FG Amount', subLabel: 'Not Match', to: '/fg-amount' },
        { label: 'WI Amount', subLabel: 'Not Match', to: '/wi-amount' },
        { label: 'System Set', subLabel: 'システム設定', textColor: "text-red-600", to: '/system-set' },
        { label: 'ASP連携CSV', subLabel: '取込み', to: '/asp-csv-2' },
        { label: 'TENKEI', subLabel: 'FG SUM', to: '/tenkei-fg-sum' },
        { label: 'TENKEI', subLabel: 'WI SUM', to: '/tenkei-wi-sum' },
        { label: '天恵更新', to: '/blessed-update' },
        { label: 'Go to', subLabel: 'Main Menu', to: '/dashboard' },
    ];

    return (
        <div className="flex bg-[#E9EFEC] h-[100vh]">
            <Sidebar />
            <div className="flex flex-col w-screen mr-2 ml-2">
                <Navbar />
                <p className="font-bold text-2xl md:text-3xl mt-5 ml-10">TENKEI Admin Menu</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 p-6 flex-1 overflow-y-auto">
                    {buttonsData.map((btn, index) => (
                        <Button key={index} label={btn.label} subLabel={btn.subLabel} to={btn.to} textColor={btn.textColor} />
                    ))}
                </div>
            </div>
        </div>
    );
}