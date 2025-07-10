import React from 'react'
import { assets, cities } from '../assets/assets'

function HotelRegistration() {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 
    z-100 flex items-center justify-center bg-black/70'>
      <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
        <img src={assets.regImage} alt=""
        className='w-1/2 rounded-xl hidden md:block' />
        <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
            <img src={assets.closeIcon} alt=""className='right-4 w-4 h-4
            cursor-pointer' />
            <p className='text-2xl font-semibold mt-6'>Register Your Hotel</p>

{/*name*/}
            <div className='w-full mt-4 '>
                <label htmlFor="name" className='
                font-medium text-gray-500'>Hotel Name</label>
                <input type="text"placeholder='type here' id='name'
                className='border border-gray-500 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500
                font-light' required/>


            </div>

{/*contact*/}
             <div className='w-full mt-4 '>
                <label htmlFor="contact" className='
                font-medium text-gray-500'>Contact</label>
                <input type="text"placeholder='type here' id='contact'
                className='border border-gray-500 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500
                font-light' required/>

{/*address*/}
                 <div className='w-full mt-4 '>
                <label htmlFor="address" className='
                font-medium text-gray-500'>Address</label>
                <input type="text"placeholder='type here'id='address'
                className='border border-gray-500 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500
                font-light' required/>


            </div>
            {/*select city from the drop down*/}
            <div className='w-ful mr-auto max-w-60 mt-4'>
                <label htmlFor="city">City</label>
                <select 
                className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1
                outline-indigo-500 font-light' id="city">
                    <option value="">Select cities</option>
                    {cities.map((city)=>(
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>

            </div>
            <button className='bg-indigo-500 hover:bg-indigo-600 mt-5
            transition-all text-white mr-auto px-6 py-2 rounded cursor pointer '>Register</button>


            </div>
        </div>
      </form>
    </div>
  )
}

export default HotelRegistration
