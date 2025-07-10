import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import { useState } from 'react'
import StarRating from '../Components/StarRating'
import '../Components/style.css'

function SingleRoom() {
    const { id } = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        const room = roomsDummyData.find((room) => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    }, [])


















    return room && (
        <div className='sm:px-4  md:px-16  lg:px-24 xl:px-32 py-35 md:py-35'>
            <div className='flex sm:flex-col items-start  md:flex-row md:items-center gap-2 '>
                <h1 className='text-3xl md:text-4xl title-style'>{room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span>
                </h1>
                <p className='text-xs font-inter py-1.5 px-3 text-white rounded-full bg-orange-500'>20% off</p>
            </div>
            <div className='flex  gap-1'>
                <StarRating />
                <p className='text-sm text-gray-700 ml-2'>200+ Reviews</p>
            </div>
            <div className='flex items-center  gap-1 '>
                <img src={assets.locationIcon} />
                <p className='text-sm text-gray-700 relative top-2 '>{room.hotel.address}</p>

            </div>
            {/*room images*/}
            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='w-full lg:w-1/2'>
                    <img src={mainImage} alt="" className='w-full rounded-xl shadow-lg object-contain' />
                </div>
                <div className='grid grid-cols-2 w-full lg:w-1/2 gap-4'>
                    {room?.images.length > 1 && room.images.map((image, index) => (
                        <img src={image} key={index}
                            onClick={() => setMainImage(image)}
                            className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image &&
                                ' outline-3 outline-orange-500'
                                } `} />
                    ))}
                </div>
            </div>

            {/*Room highlights*/}
            <div className='flex flex-col md:flex-row md:justify-between mt-10'>
                <div className='flex-flex-col'>
                    <h1 className='title-style text-3xl md:text-4xl'>Experience luxuaryy Like Never Before</h1>
                    <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {
                            room.amenities.map((item, index) => (
                                <div key={index} className='flex items-center gap-2 py-2 px-3 rounded-lg bg-gray-300'>
                                    <img src={facilityIcons[item]} alt="" className='w-5 h-5' />
                                    <p className='test-xs'>{item} </p>
                                </div>))
                        }
                    </div>
                </div>
                {/*room price*/}
                <p className='text-2xl font-medium'>${room.pricePerNight}/Night</p>
            </div>


            {/* check in checkout form*/}
            <form className='flex flex-row md:flex-row items-start md:items-center 
            justify-between bg-white shadow-[0px_0px_200px_rgba(0,0,0,0.15)]
            p-6 rounded-xl mx-auto mt-16 mx-w-6xl'>
                <div className='flex flex-col flex-wrap items-start md:flex-row md:items-center
                gap-4 md:gap-10 text-gray-500'>
                    <div className='flex flex-col'>
                        <label htmlFor="checkInDate" className='font-medium'>Check-in</label>
                        <input type="date" id='checkInDate' placeholder='check-in'
                            className='w-full border border-gray-500 px-3 py-2 outline-none mt-1.5' required />

                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
                        <input type="date" id='checkOutDate' placeholder='check-out'
                            className='w-full border border-gray-500 px-3 py-2 outline-none mt-1.5' required />

                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="guest" className='font-medium'>Guest</label>
                        <input type="number" id='guest' placeholder='0'
                            className='max-w-20 border border-gray-500 px-3 py-2 outline-none mt-1.5' required />

                    </div>

                </div>
                <button type='submit' className='bg-primary hover:bg-primary-dull 
                active:scale-95 transition-all text-white rounded-md max-md:w-full
                max-md:mt-6 md:px-24 md:py-4 text-base cursor-pointer py-3'>
                    Check Availability
                </button>

            </form>

            {/*specifications*/}
            <div className='space-y-4 mt-25'>
                {roomCommonData.map((spec, index) => (
                    <div key={index}>
                        <img src={spec.icon} alt=""className='w-6.5' />
                        <div>
                            <p className='text-base'>
                                {spec.title}
                            </p>
                            <p className='text-gray-500'>
                                {spec.description}
                            </p>
                        </div>
                    </div>

                ))

                }
            </div>
            <div className='max-w-3xl border-y border-gray-500 my-15 py-10 text-gray-500'>
                <p>
                    Geust will be allocated on ground floor based on availability you get a two bedroom comfortable apartment 
                    has atrue city feeling. the price quoted is for two guest ,at the guest slot please mark the number of guest 
                    to get the exact price for groups.the guest will be al
                </p>
<button className='bg-primary hover:bg-primary-dull 
               transition-all text-white rounded-md
               px-6 mt-4 cursor-pointer py-2.5'>Contact Now</button>
            </div>
        </div>
    )
}

export default SingleRoom
