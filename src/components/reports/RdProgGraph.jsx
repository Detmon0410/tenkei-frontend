import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RdProgGraph = () => {
  const machineData = {
    labels: [
      "28/07",
      "02/08",
      "09/08",
      "16/08",
      "23/08",
      "30/08",
      "06/09",
      "13/09",
      "20/09",
      "27/09",
      "04/10",
      "11/10",
      "18/10",
      "25/10",
      "01/11",
    ],
    datasets: [
      {
        label: "0Self",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(91, 192, 222, 0.6)",
      },
      {
        label: "1Before",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(217, 83, 79, 0.6)",
      },
      {
        label: "2Before",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(240, 173, 78, 0.6)",
      },
      {
        label: "3Before",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(92, 184, 92, 0.6)",
      },
    ],
  };

  const personData = {
    labels: [
      "28/07",
      "02/08",
      "09/08",
      "16/08",
      "23/08",
      "30/08",
      "06/09",
      "13/09",
      "20/09",
      "27/09",
      "04/10",
      "11/10",
      "18/10",
      "25/10",
      "01/11",
    ],
    datasets: [
      {
        label: "0Self",
        data: [
          11000, 7000, 3000, 4000, 2000, 0, 3000, 5000, 0, 2000, 1000, 0, 1000,
          500, 0,
        ],
        backgroundColor: "rgba(91, 192, 222, 0.6)",
      },
      {
        label: "1Before",
        data: [
          5000, 4000, 2000, 1000, 3000, 0, 0, 1000, 0, 500, 500, 0, 200, 100, 0,
        ],
        backgroundColor: "rgba(217, 83, 79, 0.6)",
      },
      {
        label: "2Before",
        data: [
          2000, 3000, 1000, 0, 1000, 0, 500, 2000, 0, 1000, 300, 0, 300, 200, 0,
        ],
        backgroundColor: "rgba(240, 173, 78, 0.6)",
      },
      {
        label: "3Before",
        data: [1000, 2000, 0, 0, 500, 0, 1000, 0, 0, 200, 100, 0, 0, 0, 0],
        backgroundColor: "rgba(92, 184, 92, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Std_M_Time(min/Day)= 1548",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex bg-[#E9EFEC] h-[130vh] ">
      <Sidebar />
      <div className="flex flex-col w-full mr-2 ml-2">
        <Navbar />
        <div className="flex flex-col h-full overflow-y-hidden">
          <div className="overflow-y-hidden flex-grow">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <td className="text-[12px]" colSpan="3">
                    <div className="bg-white p-2 rounded shadow-lg text-xs leading-tight -mt-5">
                      <div className="flex items-center justify-between space-x-4 mt-4 py-1">
                        <div className="flex items-center space-x-4">
                          <span className="font-bold text-blue-800 text-lg">
                            Process_Grp:
                          </span>
                          <div className="flex items-center border border-black px-4 py-2 text-base">
                            <span className="font-bold">T72000</span>
                          </div>
                          <div className="flex items-center border border-black px-4 py-2 text-base">
                            <span className="font-bold text-center whitespace-nowrap">
                              GF-GRINDERS GROUP
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col items-center space-y-2">
                          <span className="font-bold text-lg text-blue-800 text-center">
                            Process Grp Graph
                          </span>
                          <div className="relative">
                            <span className="font-bold text-center whitespace-nowrap">
                              Sum Before 26/07/24
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col items-end space-y-2 text-blue-800 font-bold whitespace-nowrap">
                          <div className="grid grid-cols-[auto_auto_auto] gap-x-2 py-1">
                            <span>Create_Date:</span>
                            <span className="font-normal">
                              24/07/24 15:38:30
                            </span>
                            <span>Page: 1/4</span>
                          </div>
                          <div className="flex space-x-2 py-1">
                            <span>Target_Plane_Process_Date</span>
                            <span className="font-normal">18/04/24</span>
                            <span>~</span>
                            <span className="font-normal">02/11/2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </thead>
            </table>
          </div>

          <div className=" overflow-x-auto mt-5">
            <div className="flex flex-col items-center space-y-8 w-full h-full">
              <div className="w-full max-w-4xl">
                <h2 className="text-xl font-bold text-center text-blue-600">
                  Machine Total Time (min)
                </h2>
                <Bar options={options} data={machineData} />
              </div>
              <div className="w-full max-w-4xl">
                <h2 className="text-xl font-bold text-center text-blue-600">
                  Person Total Time (min)
                </h2>
                <Bar options={options} data={personData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RdProgGraph;
