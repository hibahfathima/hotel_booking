import React, { useState } from 'react'
import { roomsDummyData } from '../assets/assets'
import '../Components/style.css'

function LisrRoom() {
  const [rooms, setRooms] = useState(roomsDummyData)
  return (
    <div>
      <div>
        <h1 className='title-style' align='left'>Room Listings</h1>
        <p className='max-w-xl'>View edit or manage all listed rooms.keep the information updated to provide better user experience</p>
      </div>
      <p className='text-gray-800 mt-8'> All Rooms</p>
      <div className=' w-full max-w-3xl text-left border border-grey-300 rounded-lg
    max-h-80 overflow-y-scroll mt-3'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'> Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Facelity</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Price per Night</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Action</th>

            </tr>
          </thead>
          <tbody className='text-sm'>
            {rooms.map((item, index) => (
              <tr key={index}>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.roomType}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>{item.amenities.join(',')}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.pricePerNight}</td>
               <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
  <label className="relative inline-flex items-center cursor-not-allowed">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={item.isAvailable}
      disabled
      readOnly
    />
    <div className="w-11 h-6 bg-gray-300 rounded-full 
      peer-checked:bg-blue-500 transition-colors duration-300 
      pointer-events-none opacity-60">
    </div>
    <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 
      rounded-full transition-transform duration-300 
      peer-checked:translate-x-full pointer-events-none">
    </div>
  </label>
</td>


              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default LisrRoom
