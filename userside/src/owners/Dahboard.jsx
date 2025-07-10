import React from 'react'
import '../Components/style.css'
import { assets, dashboardDummyData } from '../assets/assets'
import { useState } from 'react'

function Dahboard() {
    const [dashboardData, setDashboardData] = useState(dashboardDummyData)
    return (

        <div className='min-h-screen'>
            <h1 className='title-style' align='left'>
                Dahboard
            </h1>
            <p align='left' className='title-style max-w-2xl'>
                monitor your room listings bookind and analyse you revenue all in one place
                stay updated with real time insights to ensure smooth operations
            </p>
            <div className='flex gap-4 my-8'>
                {/* total bookinmg*/}
                <div className='border border-primary/3 rounded flex pr-8 p-4'>
                    <img src={assets.totalBookingIcon}
                        className='max-sm:hidden h-10' />
                    <div className='flex flex-col sm:ml-4 font-medium'>
                        <p className='text-blue-500 text-lg'>Total Bookings</p>
                        <p className='text-base text-nuetral-400 '>{dashboardData.totalBookings}</p>
                    </div>

                </div>
                {/* total bookinmg*/}
                <div className='border border-primary/3 rounded flex pr-8 p-4'>
                    <img src={assets.totalRevenueIcon}
                        className='max-sm:hidden h-10' />
                    <div className='flex flex-col sm:ml-4 font-medium'>
                        <p className='text-blue-500 text-lg'>Total Revenue</p>
                        <p className='text-base text-nuetral-400 '>${dashboardData.totalRevenue}</p>
                    </div>

                </div>
                {/* recent bookinmg*/}
               

            </div>
             <h2 className='text-xl text-blue-950/50 font-medium mb-5'>Recent Bookings</h2>
                <div className=' w-full max-w-3xl text-left border border-grey-300 rounded-lg
    max-h-80 overflow-y-scroll '>
                    <table className='w-full'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                                <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
                                <th className='py-3 px-4 text-gray-800 font-medium'>Total Amount</th>
                                <th className='py-3 px-4 text-gray-800 font-medium'>Payment Status</th>

                            </tr>
                        </thead>
                        <tbody className='text-sm'>
                            {dashboardDummyData.bookings.map((item,index)=>(
                                <tr key={index}>
                                    <td className='py-3 px-4 text-gray-500 border-t border-grey-300'>
                                        {item.user.username}
                                    </td>
                                     <td className='py-3 px-4 text-gray-500 border-t border-grey-300 max-sm:hidden'>
                                        {item.room.roomType}
                                    </td>
                                     <td className='py-3 px-4 text-gray-500 border-t border-grey-300'>
                                        {item.totalPrice}
                                    </td>
                                     <td className='py-3 px-4 text-gray-500 border-t border-grey-300'>
                                       <button className={`py-1 text-xs rounded-full mx-auto px-3 ${item.isPaid ?'bg-green-200 text-green-500':'bg-amber-200 text-yellow-600'}`}>
                                        {item.isPaid ? 'completed' :'pending'}
                                       </button>
                                    </td>
                                    </tr>
                            ))}

                        </tbody>

                    </table>

                </div>
        </div>

    )
}

export default Dahboard
