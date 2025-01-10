import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const Button = ({ label, subLabel, textColor = "text-white", onClick, to }) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        if (to) {
            navigate(to);
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <button 
            onClick={handleNavigation} 
            className="bg-[#6A9C89] hover:bg-[#45695C] font-medium h-24 w-full py-4 px-4 rounded-lg shadow-md flex justify-center items-center text-center transition-all duration-300 ease-in-out transform hover:scale-105"
        >
            <div className={`text-sm md:text-base lg:text-lg ${textColor}`}>
                {label} <br />
                {subLabel && <span className="text-xs md:text-sm lg:text-base">{subLabel}</span>}
            </div>
        </button>
    );
};

export default function DashboardPage() {
    const handlePurchaseListClick = async () => {
        const result = await Swal.fire({
            title: 'System Check',
            text: 'Error occurs when Button7 Click Please contact system administrator.',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
            showCancelButton: false, 
        });
    
        if (result.isConfirmed) {
            // Navigate to Purchase List
            window.location.href = '/dashboard';
        }
    };

    const handleProcessGPlanCfmClick = async () => {
        const result = await Swal.fire({
            title: 'System Check',
            text: 'Error occurs when Button13 Click Please contact system administrator.',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
            showCancelButton: false, 
        });
    
        if (result.isConfirmed) {
            // Navigate to Purchase List
            window.location.href = '/dashboard';
        }
    };

    
    

    const handleNavPurchaseClick = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to import the CSV files?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, import it!',
        });

        if (result.isConfirmed) {
            try {
                const response = await axios.post('http://localhost:4000/navCSV/purchase-import');
                if (response.status === 200) {
                    Swal.fire('Success!', 'CSV files imported successfully.', 'success');
                }
            } catch (error) {
                Swal.fire('Error!', 'Failed to import CSV files.', 'error');
            }
        }
    };

    const buttonsData = [
        { label: 'Order Info', subLabel: '(依頼書別受注処理)', to: '/order-info' },
        { label: 'Order List', subLabel: '(受注一覧)', to: '/order-list' },
        { label: 'NAV Order', subLabel: 'CSV Import', textColor: "text-red-600", to: '/nav-order-csv-import' },
        { label: 'NAV Purchase', subLabel: 'CSV Import', textColor: "text-red-600", onClick: handleNavPurchaseClick },
        { label: 'Purchase Info', subLabel: '(依頼書別手配処理)', to: '/purchase-info' },
        { label: 'Purchase List', subLabel: '(手配一覧)', onClick: handlePurchaseListClick },
        { label: 'Go to', subLabel: 'Admin Menu', to: '/admin-menu' },
        { label: 'Plan Info', subLabel: '(依頼書別計画処理)', to: '/plan-info' },
        { label: 'Plan List', subLabel: '(計画一覧)', to: '/plan-list' },
        { label: 'ProcessG Plan Cfm', subLabel: '(工程G別計画確認)', onClick: handleProcessGPlanCfmClick},
        { label: 'Calc Complete', subLabel: '(生産計上処理)', to: '/calc-complete' },
        { label: 'Result Info', subLabel: '(依頼書別実績処理)', to: '/result-info' },
        { label: 'Result List', subLabel: '(実績一覧)', textColor: "text-blue-700", to: '/result-list' },
        { label: 'ProcessG Plan List', subLabel: '(工程G別加工予定)', to: '/processg-plan-list' },
        { label: 'Cost Info', subLabel: '(依頼書別原価処理)', to: '/cost-info' },
        { label: 'Cost List', subLabel: '(原価一覧)', to: '/cost-list' },
        { label: 'Search', subLabel: '(検索)', to: '/search' },
    ];

    return (
        <div className="flex bg-[#E9EFEC] h-[100vh]">
            <Sidebar />
            <div className="flex flex-col w-screen mr-2 ml-2">
                <Navbar />
                <p className="font-bold text-2xl md:text-3xl mt-5 ml-10">TENKEI Client Menu</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 p-6 flex-1 overflow-y-auto">
                    {buttonsData.map((btn, index) => (
                        <Button 
                            key={index} 
                            label={btn.label} 
                            subLabel={btn.subLabel} 
                            textColor={btn.textColor} 
                            onClick={btn.onClick}
                            to={btn.to}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
