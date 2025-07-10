import React from 'react'
import { assets } from '../assets/assets'

function StarRating({rating=4}) {
  return (
    <div className='flex'>
        {Array(5).fill(0).map((_, index) => (
                               <img src={rating>index?assets.starIconFilled:assets.starIconOutlined} className='w-4.5 h-4.5' />
                            ))}
    </div>
  )
}

export default StarRating
