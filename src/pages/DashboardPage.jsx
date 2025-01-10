// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import axios from 'axios';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
// import { useNavigate } from 'react-router-dom';

// const Button = ({ label, subLabel, textColor = "text-white", onClick, to }) => {
//     const navigate = useNavigate();

//     const handleNavigation = () => {
//         if (to) {
//             navigate(to);
//         } else if (onClick) {
//             onClick();
//         }
//     };

//     return (
//         <button 
//             onClick={handleNavigation} 
//             className="bg-[#6A9C89] hover:bg-[#45695C] font-medium h-24 w-full py-4 px-4 rounded-lg shadow-md flex justify-center items-center text-center transition-all duration-300 ease-in-out transform hover:scale-105"
//         >
//             <div className={`text-sm md:text-base lg:text-lg ${textColor}`}>
//                 {label} <br />
//                 {subLabel && <span className="text-xs md:text-sm lg:text-base">{subLabel}</span>}
//             </div>
//         </button>
//     );
// };

// const CallApisComponent = () => {
//   const [apiResults, setApiResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const callAllApis = async () => {
//     setLoading(true);
//     setError(null);
//     setApiResults([]);

//     try {
//       const responses = await Promise.all([
//         axios.post('http://localhost:4000/csv/import_Purchase')
//         // axios.post('http://localhost:4000/navPCCSV/TT_NAV_Pc_CSV'),
//         // axios.post('http://localhost:4000/navPCCSV/QT_NAV_Pc_CSV_Upd_Add'),
//         // axios.post('http://localhost:4000/navPCCSV/QT_NAV_Pc_CSV_Upd_Upd'),
//         // axios.post('http://localhost:4000/navPCCSV/QT_NAV_Pc_CSV_Add'),
//         // axios.post('http://localhost:4000/navPCCSV/QT_NAV_Pc_CSV_Upd_Ref'),
//         // axios.get('http://localhost:4000/navPCCSV/RD_NAV_Pc_Upd_Ref'),
//       ]);

//       const data = responses.map((response) => response.data.stage);
//       setApiResults(data);
//       Swal.fire('Success!', 'All APIs were called successfully.', 'success');
//     } catch (err) {
//       setError(err.message);
//       Swal.fire('Error!', 'Failed to call one or more APIs.', 'error');
//     } finally {
//       setLoading(false);
//     }
//   };
//   const callOrderApi = async () => {
//     setLoading(true);
//     setError(null);
//     setApiResults([]);

//     try {
//       const responses = await Promise.all([
//         axios.post('http://localhost:4000/csv/Import_Order')
//         // axios.post('http://localhost:4000/navPCCSV/TT_NAV_Pc_CSV'),
//         // axios.post('http://localhost:4000/navPCCSV/QT_NAV_Pc_CSV_Upd_Add'),
//         // axios.post('http://localhost:4000/navPCCSV/QT_NAV_Pc_CSV_Upd_Upd'),
//         // axios.post('http://localhost:4000/navPCCSV/QT_NAV_Pc_CSV_Add'),
//         // axios.post('http://localhost:4000/navPCCSV/QT_NAV_Pc_CSV_Upd_Ref'),
//         // axios.get('http://localhost:4000/navPCCSV/RD_NAV_Pc_Upd_Ref'),
//       ]);

//       const data = responses.map((response) => response.data);
//       setApiResults(data);
//       Swal.fire('Success!', 'All APIs were called successfully.', 'success');
//     } catch (err) {
//       setError(err.message);
//       Swal.fire('Error!', 'Failed to call one or more APIs.', 'error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const buttonsData = [
//     { label: 'Order Info', subLabel: '(依頼書別受注処理)', to: '/order-info' },
//     { label: 'Order List', subLabel: '(受注一覧)', to: '/order-list' },
//     { label: 'NAV Order', subLabel: 'CSV Import', textColor: "text-red-600",onClick: callOrderApi },//to: '/nav-order-csv-import'
//     { label: 'NAV Purchase', subLabel: 'CSV Import', textColor: "text-red-600", onClick: callAllApis },
//     { label: 'Purchase Info', subLabel: '(依頼書別手配処理)', to: '/purchase-info' },
//     { label: 'Purchase List', subLabel: '(手配一覧)', to: '/purchase-list' },
//     { label: 'Go to', subLabel: 'Admin Menu', to: '/admin-menu' },
//     { label: 'Plan Info', subLabel: '(依頼書別計画処理)', to: '/plan-info' },
//     { label: 'Plan List', subLabel: '(計画一覧)', to: '/plan-list' },
//     { label: 'ProcessG Plan Cfm', subLabel: '(工程G別計画確認)', to: '/processg-plan-cfm' },
//     { label: 'Calc Complete', subLabel: '(生産計上処理)', to: '/calc-complete' },
//     { label: 'Result Info', subLabel: '(依頼書別実績処理)', to: '/result-info' },
//     { label: 'Result List', subLabel: '(実績一覧)', textColor: "text-blue-700", to: '/result-list' },
//     { label: 'ProcessG Plan List', subLabel: '(工程G別加工予定)', to: '/processg-plan-list' },
//     { label: 'Cost Info', subLabel: '(依頼書別原価処理)', to: '/cost-info' },
//     { label: 'Cost List', subLabel: '(原価一覧)', to: '/cost-list' },
//     { label: 'Search', subLabel: '(検索)', to: '/search' },
//   ];

//   return (
//     <div className="flex bg-[#E9EFEC] h-[100vh]">
//       <Sidebar />
//       <div className="flex flex-col w-screen mr-2 ml-2">
//         <Navbar />
//         <p className="font-bold text-2xl md:text-3xl mt-5 ml-10">TENKEI Client Menu</p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 p-6 flex-1 overflow-y-auto">
//           {buttonsData.map((btn, index) => (
//             <Button 
//               key={index} 
//               label={btn.label} 
//               subLabel={btn.subLabel} 
//               textColor={btn.textColor} 
//               onClick={btn.onClick}
//               to={btn.to}
//             />
//           ))}
//         </div>
//         <div className="mt-4">
//           {error && <div className="text-red-500"><strong>Error:</strong> {error}</div>}
//           {apiResults.length > 0 ? (
//             <ul className="list-disc pl-6">
//               {apiResults.map((result, index) => (
//                 <li key={index}>
//                   <pre className="bg-gray-100 p-2 rounded">
//                     {JSON.stringify(result, null, 2)}
//                   </pre>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             !loading && <p>No data fetched yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CallApisComponent;

import React, { useState } from 'react';
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
 
const CallApisComponent = ({ RdNavPcUpd}) => {
  
const navigate = useNavigate();
  const handleNavigate = (data) => {
   
    navigate("/report-csv-purchase", { state: data });
};
    const [apiResults, setApiResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
 
    const handleApiResponse = (responses, isOrder = true) => {
        const data = responses.map((response) => response.data);
        const stages = responses.map((response) => response.data.stage);
 
        setApiResults(data);
 
        const isUpdated = stages.includes("update");
 
        Swal.fire({
            title: isUpdated ? 'Updated' : 'Success!',
            html: `
                <strong>${isUpdated ? 'Updated' : 'Import'} Data:</strong><br>
               
            `,
            icon: 'success',
            confirmButtonText: isUpdated ? 'Yes' : 'Close',
            showCancelButton: isUpdated,
            cancelButtonText: 'No',
            customClass: {
                popup: 'text-left',
            },
        }).then((result) => {
            if (result.isConfirmed&&isUpdated) {
                console.log("Yes button clicked");
               
                handleNavigate(data) // Call the function with the fetched data for order
                // Call the function with the fetched data for purchase
               
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                console.log("No button clicked");
            }
        });
    };
 
    const callOrderApi = async () => {
        setLoading(true);
        setError(null);
        setApiResults([]);
 
        try {
            const responses = await Promise.all([
                axios.post('http://localhost:4000/csv/Import_Order'),
            ]);
            handleApiResponse(responses, true); // Pass isOrder as true for order API
        } catch (err) {
            setError(err.message);
            Swal.fire('Error!', 'Failed to call the API.', 'error');
        } finally {
            setLoading(false);
        }
    };
 
    const callAllApis = async () => {
        setLoading(true);
        setError(null);
        setApiResults([]);
 
        try {
            const responses = await Promise.all([
                axios.post('http://localhost:4000/csv/Import_Purchase'),
            ]);
            handleApiResponse(responses, false); // Pass isOrder as false for purchase API
        } catch (err) {
            setError(err.message);
            Swal.fire('Error!', 'Failed to call the API.', 'error');
        } finally {
            setLoading(false);
        }
    };
 
    const buttonsData = [
        { label: 'Order Info', subLabel: '(依頼書別受注処理)', to: '/order-info' },
        { label: 'Order List', subLabel: '(受注一覧)', to: '/order-list' },
        { label: 'NAV Order', subLabel: 'CSV Import', textColor: "text-red-600", onClick: callOrderApi },
        { label: 'NAV Purchase', subLabel: 'CSV Import', textColor: "text-red-600", onClick: callAllApis },
        { label: 'Purchase Info', subLabel: '(依頼書別手配処理)', to: '/purchase-info' },
        { label: 'Purchase List', subLabel: '(手配一覧)', to: '/purchase-list' },
        { label: 'Go to', subLabel: 'Admin Menu', to: '/admin-menu' },
        { label: 'Plan Info', subLabel: '(依頼書別計画処理)', to: '/plan-info' },
        { label: 'Plan List', subLabel: '(計画一覧)', to: '/plan-list' },
        { label: 'ProcessG Plan Cfm', subLabel: '(工程G別計画確認)', to: '/processg-plan-cfm' },
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
                {/* <div className="mt-4">
                    {error && <div className="text-red-500"><strong>Error:</strong> {error}</div>}
                    {apiResults.length > 0 ? (
                        <ul className="list-disc pl-6">
                            {apiResults.map((result, index) => (
                                <li key={index}>
                                    <pre className="bg-gray-100 p-2 rounded">
                                        {JSON.stringify(result, null, 2)}
                                    </pre>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        !loading && <p>No data fetched yet.</p>
                    )}
                </div> */}
            </div>
        </div>
    );
};
 
export default CallApisComponent;