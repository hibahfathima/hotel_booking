import React from 'react'
import { roomsDummyData } from '../assets/assets'
import CardHotel from './CardHotel'
import { useNavigate } from 'react-router-dom'
import Title from './Title'

function FeaturedDestination() {
    const navigate=useNavigate()
  return (

    <div className="container mt-5">
     <Title title='Featured Destinations'
     subtitle='Discover the handpicked selection of exeptionol properties around the world .offering unparalled luxuary and unforgottable experinces'/>
      <div className="d-flex flex-wrap gap-4 justify-content-center ">
        {roomsDummyData.slice(0, 4).map((room) => (
          <CardHotel room={room} key={room._id} />
        ))}
      </div>
      <div className='d-flex justify-content-center my-5'>
      <button className='btn btn-rounded 'onClick={()=>{navigate('/rooms');scrollTo(0,0)}}>View All Destinations</button>
      </div>
    </div>
  )
}

export default FeaturedDestination
