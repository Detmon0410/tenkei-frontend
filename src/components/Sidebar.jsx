import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiBars3BottomRight,
  HiMiniArrowLeftOnRectangle,
} from "react-icons/hi2";
import {
  HiHome,
  HiClipboardCheck,
  HiOutlineUserGroup,
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineClipboardList,
  HiOutlineLink,
  HiOutlineFolder,
  HiOutlinePrinter,
  HiOutlineCog,
  HiOutlineCloudUpload,
  HiOutlineCloudDownload,
  HiSearch,
  HiOutlineStatusOnline,
  HiOutlineDocument,
} from "react-icons/hi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { SiConvertio } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { useAuth } from "../hooks/use-auth";

const menuItems = [
  { icon: HiHome, label: "Main", to: "/dashboard" },
  { icon: HiClipboardCheck, label: "Sales", to: "/sales" },
  { icon: HiOutlineUserGroup, label: "Sub-Con (手配)", to: "/sub-con" },
  { icon: HiOutlineCalendar, label: "Plan", to: "/plan" },
  { icon: HiOutlineDocumentText, label: "Process", to: "/process-dashboard" },
  { icon: MdOutlineProductionQuantityLimits, label: "Production", to: "/production" },
  { icon: HiOutlineClipboardList, label: "QC", to: "/qc" },
  { icon: IoSearch, label: "Search", to: "/search-dashboard" },
  { icon: HiOutlineLink, label: "Link", to: "/link" },
  { icon: HiOutlineFolder, label: "Finish", to: "/finish" },
  { icon: HiOutlinePrinter, label: "Print", to: "/print" },
  { icon: HiOutlineCog, label: "Master 1", to: "/master1" },
  { icon: HiOutlineCog, label: "Master 2", to: "/master2" },
  { icon: HiOutlineCog, label: "Master 3", to: "/master3" },
  { icon: HiOutlineCloudUpload, label: "Import", to: "/import" },
  { icon: HiOutlineCloudDownload, label: "Export", to: "/export" },
  { icon: SiConvertio, label: "Convert", to: "/convert" },
  { icon: MdOutlineAdminPanelSettings, label: "Admin", to: "/admin-menu" },
  { icon: HiOutlineStatusOnline, label: "Status", to: "/status" },
  { icon: HiOutlineDocument, label: "EC 1", to: "/ec-1" },
  { icon: FaCalendarAlt, label: "Reserve 1", to: "/reserve-1" },
];

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const { authUser, logout } = useAuth();
  const [activeMenu, setActiveMenu] = useState(localStorage.getItem('activeMenu') || location.pathname);

  useEffect(() => {
    // Update the active menu in localStorage whenever the location changes
    localStorage.setItem('activeMenu', location.pathname);
    setActiveMenu(location.pathname);
  }, [location.pathname]);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const filteredMenuItems = menuItems.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderMenuItems = () =>
    filteredMenuItems.map((item, index) => {
      const isActive = activeMenu === item.to;
      return (
        <li
          key={index}
          className={`flex items-center p-[6px] ${
            isCollapsed ? "justify-center" : "pl-6"
          } cursor-pointer rounded-md ${
            isActive ? "bg-[#06695C]" : "hover:bg-[#06695C]"
          }`}
        >
          <Link to={item.to} className="flex items-center w-full">
            <item.icon
              size={isCollapsed ? 18 : 16}
              className={isCollapsed ? "ml-3 sm:ml-3 md:ml-4 xl:ml-2" : "mr-4"}
            />
            {!isCollapsed && (
              <span className="text-sm lg:text-base xl:text-lg">
                {item.label}
              </span>
            )}
          </Link>
        </li>
      );
    });

  return (
    <div
      className={`bg-[#16423C] ${
        isCollapsed ? "w-[70px]" : "min-w-[230px] w-[250px]"
      } h-auto flex flex-col transition-width duration-300 rounded-xl mt-2 ml-2 mb-2 overflow-y-auto`}
    >
      <div className="flex items-center justify-between py-5 font-medium text-xl text-white px-4">
        {!isCollapsed && (
          <p className="text-sm lg:text-base xl:text-xl">Tenkei System</p>
        )}
        <i
          className={`${isCollapsed ? "mx-auto" : ""} cursor-pointer`}
          onClick={toggleSidebar}
        >
          <HiBars3BottomRight />
        </i>
      </div>

      <div className="relative flex items-center justify-center px-2">
        {!isCollapsed && (
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-10 py-2 text-sm rounded-md bg-[#06695C] text-white placeholder-white"
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
        )}
        {isCollapsed && <HiSearch className="text-white cursor-pointer" />}
      </div>

      <div className="mt-5">
        <ul className="text-white space-y-2">{renderMenuItems()}</ul>
      </div>

      <div className="mt-3 mb-2.5 mr-2 ml-2 py-2 bg-[#1D594F] rounded-lg">
        <div
          className={`flex items-center justify-between px-3 text-white ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          {authUser && !isCollapsed && (
            <span className="text-sm lg:text-base truncate">
              {authUser.User_Name}
            </span>
          )}
          <Link
            onClick={logout}
            className="text-lg cursor-pointer hover:text-gray-300 mt-3"
          >
            <HiMiniArrowLeftOnRectangle />
          </Link>
        </div>
        {!isCollapsed && (
          <div className="px-6 mt-3 text-sm text-gray-400">IT System</div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
