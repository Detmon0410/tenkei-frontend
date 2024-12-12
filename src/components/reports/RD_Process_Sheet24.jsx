import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

export default function RD_Process_Sheet24() {
    return (
        <div className="flex bg-[#E9EFEC] h-screen">
            <Sidebar />
            <div className="flex flex-col w-screen mr-2 ml-2 ">
                <Navbar />



                <hr />
                {/* ส่วนที่ 1 */}
                <div className="flex-1  overflow-y-auto py-2 w-full" >

                    <div classname="flex ">
                        <div className="grid grid-cols-3 grid-rows-1 gap-3">
                            <div ></div>
                            <div className="justify-self-center">
                                <label className='text-2xl'>** Process Sheet **</label>
                            </div>
                            <div className="mx-4">
                                <table>
                                    <tr>
                                        <td>
                                            Make_Time
                                        </td>
                                        <td id="make_time_dd/mm/yy">
                                            dd/mm/yy
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Reg_Person
                                        </td>
                                        <td>
                                            <input type="text" className="border border-blue-700 px-4 h-5 m-2" />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        {/* ส่วนที่ 1 */}


                        <div>
                            <label classname="m-4">Product Group:</label>
                            <input type="text" class="border border-blue-700 px-4  m-2" />
                            <label classname="m-4">Product Name:</label>
                            <input type="text" class="border border-blue-700 px-4  m-2" />
                            <label>Bar-code</label>
                        </div>

                        <div className="flex">
                            <div className="grid grid-cols-3 grid-rows-3 gap-x-10">
                                <div className='font-medium text-xs'>Order_Name</div>
                                <div className='font-medium text-xs'>Parts_No</div>
                                <div className='font-medium text-xs'>Pt_Qty</div>
                                <div>
                                    <input className='h-5 border border-blue-700' />
                                </div>
                                <div>
                                    <input className='h-5 border border-blue-700' />
                                </div>
                                <div>
                                    <input className='h-5 border border-blue-700' />
                                </div>
                                <div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className="ml-4">
                                <table>
                                    <tr>
                                        <td className='font-medium text-xs'>
                                            Request
                                        </td>
                                        <td>
                                            <input className='h-5 border border-blue-700' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='font-medium text-xs'>
                                            Confirm
                                        </td>
                                        <td>
                                            <input className='h-5 border border-blue-700' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='font-medium text-xs'>
                                            Parts
                                        </td>
                                        <td>
                                            <input className='h-5 border border-blue-700'></input>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div className="ml-4">
                                <table className='border-2 border-blue-700 p-3'>
                                    <tr>
                                        <td className='font-bold text-xs text-center'>
                                            Product
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='font-large text-2xl'>
                                            01/07
                                        </td>
                                    </tr>
                                </table>
                            </div>


                        </div>
                        {/* ส่วนที่ 2 */}
                        <div className='flex'>
                            <table className='p-2'>
                                <tr>
                                    <td className='font-medium text-xs text-right'>
                                        Customer:
                                    </td>
                                    <td>
                                        <input className='h-5 border border-blue-700' />
                                    </td>
                                    <td className='font-medium text-xs text-center'>
                                        Specific
                                    </td>
                                </tr>
                                <tr classname="px-2 ">
                                    <td className='font-medium text-xs text-right'>
                                        Name:
                                    </td>
                                    <td>
                                        <input className='h-5 border border-blue-700' />
                                    </td>
                                    <td>
                                        <td>
                                            <input className='h-5 border border-blue-700' />
                                        </td>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='font-medium text-xs text-right'>
                                        Size:
                                    </td>
                                    <td>
                                        <input className='h-5 border border-blue-700' />
                                    </td>
                                    <td className='font-medium text-xs text-center'>
                                        Pt.Material
                                    </td>
                                </tr>
                                <tr classname="px-2">
                                    <td className='font-medium text-xs text-right'>
                                        Draw:
                                    </td>
                                    <td>
                                        <input className='h-5 border border-blue-700' />
                                    </td>
                                    <td>
                                        <input className='h-5 border border-blue-700' />
                                    </td>
                                </tr>

                            </table>
                            <div className='flex flex-col px-2'>
                                <label className='font-medium text-xs text-left px-2'>Pt_Remark:</label>
                                <input className='min-w-full h-full px-4 border border-blue-700'></input>
                            </div>
                        </div>



                        {/*ส่วนที่ 2 แถวที่ 1 คอลัมน์ 1 */}

                        <table className="">
                            <tr>
                                <td class=" text-center text-blue-700 ">
                                    {/*ส่วนที่ 2 แถว*/}
                                    <div >
                                        <label class="text-blue-700 px-2 font-medium text-xs">Info</label>
                                    </div>
                                    {/*ส่วนที่ 2 แถวที่ 1 คอลัมน์ 1 */}
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 px-2 font-medium text-xs text-center">
                                            1
                                        </td>
                                        <td class="border border-blue-700 font-medium text-xs text-center">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 px-2 font-medium text-xs text-center">
                                            2
                                        </td>
                                        <td class="border border-blue-700 font-medium text-xs text-center">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 px-2 font-medium text-xs text-center">
                                            3
                                        </td>
                                        <td class="border border-blue-700 font-medium text-xs text-center">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 px-2 font-medium text-xs text-center">
                                            4
                                        </td>
                                        <td class="border border-blue-700 font-medium text-xs text-center">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 px-2 font-medium text-xs text-center">
                                            5
                                        </td>
                                        <td class="border border-blue-700 font-medium text-xs text-center">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 px-2 font-medium text-xs text-center">
                                            6
                                        </td>
                                        <td class="border border-blue-700  min-w-full font-medium text-xs text-center">
                                        </td>
                                    </tr>

                                    {/* แถวที่ 2 คอลัมน์ 1 */}
                                    <lebel class="p-2 font-medium text-xs text-center ">Connect Pt. Info</lebel>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 py-2 font-medium text-xs text-center">
                                            OdNo.
                                        </td>
                                        <td colspan="2" class="font-medium text-xs text-center border border-blue-700 py-2 min-w-full ">
                                        </td>
                                        <td className='font-medium text-xs text-center'>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="2" class="text-blue-700 border border-blue-700 py-2 font-medium text-xs text-center">
                                            PtNo.
                                        </td>
                                        <td colspan="2" class=" border border-blue-700 py-2 font-medium text-xs text-center">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" class=" border border-blue-700 py-2 font-medium text-xs text-center">
                                        </td>
                                    </tr>
                                    <tr >
                                        <td rowspan="2" class="text-blue-700 border border-blue-700 py-2 font-medium text-xs text-center">
                                            PrNo.
                                        </td>
                                        <td colspan="2" class=" border border-blue-700 py-2 font-medium text-xs text-center">
                                        </td>
                                    </tr>
                                    <tr >
                                        <td colspan="2" class="font-medium text-xs text-center border border-blue-700 py-2 ">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            No
                                        </td>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            Process
                                        </td>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            Pl_Date
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            1
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            2
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            3
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            4
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            5
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            6
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            7
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            8
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            9
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            10
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            11
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            12
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            13
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            14
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            15
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            16
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            17
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            18
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            19
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            20
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            21
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            22
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            23
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            24
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            25
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            26
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            27
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            28
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            29
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            30
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            31
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            32
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            33
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            34
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                        <td class="font-medium text-xs text-center border border-blue-700 ">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            35
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-blue-700 border border-blue-700 font-medium text-xs text-center">
                                            36
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                        <th class="font-medium text-xs text-center border border-blue-700 ">
                                        </th>
                                    </tr>
                                </td>


                                {/* แถวที่ 1 คอลัมน์ 2 */}

                                <div >
                                    <label class="text-blue-700 px-2 font-medium text-xs text-center">Pl_Quote_OdPt_No:</label>
                                    <input className='h-5 border border-blue-700' />
                                </div>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        No
                                    </td>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        Process
                                    </td>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        Plan Date
                                    </td>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        Plan Time
                                    </td>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        Instructions
                                    </td>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        Rs Time
                                    </td>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        Rs Date
                                    </td>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        Rs Qty
                                    </td>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        Person Sign
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        1
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        2
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        3
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        4
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        5
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        6
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        7
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        8
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        9
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        10
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        11
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        12
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        13
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        14
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        15
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        16
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        17
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        18
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        19
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        20
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        21
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        22
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        23
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-blue-700 border border-blue-700 font-medium text-xs text-center px-4">
                                        24
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4 ">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                    <td class=" border border-blue-700 font-medium text-xs text-center px-4">
                                    </td>
                                </tr>
                            </tr>
                        </table>
                        <div className='flex justify-end'>
                            <label className=" text-blue-700 font-medium text-xs text-center">FTC-FR-PDS-03-10(dd-mm-yyyy)</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}