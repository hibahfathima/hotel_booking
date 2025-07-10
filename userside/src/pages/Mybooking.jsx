import React from 'react'
import '../Components/style.css'
import { assets, userBookingsDummyData } from '../assets/assets'
import { useState } from 'react'

function Mybooking() {
    const [booking, setBooking] = useState(userBookingsDummyData)
    return (
        <div className='sm:px-4  md:px-16  lg:px-24 xl:px-32 py-35 md:py-35'>





            <div align='left'>
                <h1 className='title-style'>My Bookings</h1>
                <p className='title-style max-w-xl'>Easly manage your past current and upcoming hotel reservations in one pase .plane tour trip seamlessly
                    just with a few clicks
                </p>
            </div>
            <div className='text-gray-500 max-w-6xl w-full mt-8'>
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr]  w-full border-b border-grey-500 font-medium text-base
            py-3'>
                    <div className='w-1/3'>Hotels</div>
                    <div className='w-1/3'>Date And Timings</div>
                    <div className='w-1/3'>Payments</div>
                </div>
            </div>
            {
                booking.map((booking) => (
                    <div key={booking._id}
                        className='grid grid-cols md:grid-cols-[3fr_2fr_1fr] w-full py-6 border-b border-gray-500
                    first:border-t'>
                        {/*hotel details*/}
                        <div className='flex flex-col md:flex-row'>
                            <img src={booking.room.images[0]} alt=""
                                className='rounded shadow object-cover min-md:w-44' />
                            <div className='flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4'>
                                <p className='text-2xl title-style'>{booking.hotel.name}
                                    <span className='font-inner text-sm'>({booking.room.roomType})</span>
                                </p>
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img src={assets.locationIcon} alt="" />
                                    <span>{booking.hotel.address}</span>
                                </div>
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img src={assets.guestsIcon} alt="" />
                                    <span>Guests {booking.guests}</span>
                                </div>
                                <p className='text-base'>price : ${booking.totalPrice}</p>
                            </div>
                        </div>
                        {/*date and tyiminds*/}
                        <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                            <div>
                                <p>Check In:</p>
                                <p className='text-gray-500 text-sm'>
                                    {(new Date(booking.checkInDate).toDateString())}
                                </p>
                            </div>
                            <div>
                                <p>Check Out:</p>
                                <p className='text-gray-500 text-sm'>
                                    {(new Date(booking.checkOutDate).toDateString())}
                                </p>
                            </div>
                        </div>
                        {/*payments*/}
                        <div className='flex flex-col items-start justify-center pt-3'>
                            <div className='flex items-center gap-2'>
                                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`}>
                                </div>
                                <p className={`text-sm relative top-2 ${booking.isPaid?'text-green-500' :'text-red-500'}`}>
                                    {booking.isPaid?'Paid':'Unpaid'}
                                </p>

                            </div>
                            <div>
                                {!booking.isPaid &&(
                                    <button className='px-4 py-1.5 mt-4 text-xs border border-gray-500'> Pay Now</button>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Mybooking
